import { Token } from './stats';
import { IoArrowForward } from 'react-icons/io5';
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Text,
  Image,
  useColorMode,
  Center,
  useColorModeValue,
  border,
} from '@chakra-ui/react';
import {
  DelegateWarning,
  StatBox,
  ValidatorDesc,
  ValidatorInfo,
} from './delegate-modal';
import { useState } from 'react';
import { exponentiate, getExponent } from './staking';
import { useChain } from '@cosmos-kit/react';
import { cosmos } from 'interchain';
import { getCoin } from '../../config/defaults';
import { StdFee } from '@cosmjs/amino';
import type {
  Validator,
  DelegationResponse as Delegation,
} from 'interchain/types/codegen/cosmos/staking/v1beta1/staking';
import { TransactionResult } from '../types';
import { ChainName } from '@cosmos-kit/core';
import BigNumber from 'bignumber.js';
import {
  useFeeEstimation,
  useInputBox,
  useTransactionToast,
} from '../../hooks';

const { delegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

export const Thumbnail = ({
  identity,
  name,
  thumbnailUrl,
}: {
  identity: string | undefined;
  name: string | undefined;
  thumbnailUrl: string;
}) => {
  return (
    <>
      {identity && thumbnailUrl ? (
        <Image
          borderRadius="full"
          boxSize="30px"
          src={thumbnailUrl}
          alt={name}
          mr={2}
        />
      ) : (
        <Center boxSize="30px" bgColor="gray.200" borderRadius="full" mr={2}>
          {name && name.trim().slice(0, 1).toUpperCase()}
        </Center>
      )}
    </>
  );
};

export type MaxAmountAndFee = {
  maxAmount: string;
  fee: StdFee;
};

const AllValidators = ({
  validators,
  balance,
  delegations,
  updateData,
  unbondingDays,
  chainName,
  thumbnails,
}: {
  validators: Validator[];
  balance: number;
  delegations: Delegation[];
  updateData: () => void;
  unbondingDays: number;
  chainName: ChainName;
  thumbnails: {
    [key: string]: string;
  };
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getSigningStargateClient, address } = useChain(chainName);
  const { renderInputBox, amount, setAmount } = useInputBox(balance);
  const [currentValidator, setCurrentValidator] = useState<Validator>();
  const [isDelegating, setIsDelegating] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [maxAmountAndFee, setMaxAmountAndFee] = useState<MaxAmountAndFee>();

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

  const { colorMode } = useColorMode();
  const { showToast } = useTransactionToast();
  const { estimateFee } = useFeeEstimation(chainName);

  const getDelegation = (validatorAddr: string, delegations: Delegation[]) => {
    const delegation = delegations.filter(
      (d) => d?.delegation?.validatorAddress === validatorAddr
    );

    if (delegation.length === 1) {
      return exponentiate(delegation[0].balance!.amount, -exp);
    }

    return 0;
  };

  const borderColor=useColorModeValue("#013133", "#b5fdff");
  const onModalClose = () => {
    setAmount('');
    setIsDelegating(false);
    onClose();
    setIsSimulating(false);
  };

  const onDelegateClick = async () => {
    setIsDelegating(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address || !currentValidator?.operatorAddress) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const delegationAmount = new BigNumber(amount).shiftedBy(exp).toString();

    const msg = delegate({
      delegatorAddress: address,
      validatorAddress: currentValidator.operatorAddress,
      amount: {
        amount: delegationAmount,
        denom: coin.base,
      },
    });

    const isMaxAmountAndFeeExists =
      maxAmountAndFee &&
      new BigNumber(amount).isEqualTo(maxAmountAndFee.maxAmount);

    try {
      const fee = isMaxAmountAndFeeExists
        ? maxAmountAndFee.fee
        : await estimateFee(address, [msg]);
      const res = await stargateClient.signAndBroadcast(address, [msg], fee);
      showToast(res.code);
      updateData();
      setTimeout(() => {
        onModalClose();
      }, 1000);
    } catch (error) {
      console.log(error);
      showToast(TransactionResult.Failed, error);
    } finally {
      stargateClient.disconnect();
      setIsDelegating(false);
      setMaxAmountAndFee(undefined);
    }
  };

  const handleMaxClick = async () => {
    if (!address || !currentValidator) return;

    if (Number(balance) === 0) {
      setAmount(0);
      return;
    }

    setIsSimulating(true);

    const delegationAmount = new BigNumber(balance).shiftedBy(exp).toString();
    const msg = delegate({
      delegatorAddress: address,
      validatorAddress: currentValidator.operatorAddress,
      amount: {
        amount: delegationAmount,
        denom: coin.base,
      },
    });

    try {
      const fee = await estimateFee(address, [msg]);
      const feeAmount = new BigNumber(fee.amount[0].amount).shiftedBy(-exp);
      const balanceAfterFee = new BigNumber(balance)
        .minus(feeAmount)
        .toString();
      setMaxAmountAndFee({ fee, maxAmount: balanceAfterFee });
      setAmount(balanceAfterFee);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSimulating(false);
    }
  };

  const isAmountZero = new BigNumber(amount || 0).isEqualTo(0);

  return (
    <>
      <Heading as="h4" size="md" mt={12} mb={6}>
        Validator Info
      </Heading>

      <Modal isOpen={isOpen} onClose={onModalClose} size="2xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
          bgColor={useColorModeValue("#b5fdff", "#013133")}
          >Validator</ModalHeader>
          <ModalCloseButton />

          <ModalBody
          bgColor={useColorModeValue("#b5fdff", "#013133")}
          >
            <ValidatorInfo
              imgUrl={
                currentValidator
                  ? thumbnails[currentValidator?.operatorAddress]
                  : ''
              }
              name={currentValidator?.description?.moniker || ''}
              commission={
                currentValidator?.commission?.commissionRates?.rate
                  ? exponentiate(
                      currentValidator.commission.commissionRates.rate,
                      -16
                    ).toFixed(0)
                  : 0
              }
            />
            <ValidatorDesc
              description={currentValidator?.description?.details || ''}
            />
            <DelegateWarning unbondingDays={unbondingDays} />
            <Stack 
            bgColor={useColorModeValue("#b5fdff", "#013133")}
            direction="row" spacing={4} my={4}>
              <StatBox
                label="Your Delegation"
                token={coin.symbol}
                number={getDelegation(
                  currentValidator?.operatorAddress || '',
                  delegations
                )}
              />
              <StatBox
                label="Available to Delegate"
                number={balance}
                token={coin.symbol}
              />
            </Stack>
            {renderInputBox(
              'Amount to Delegate',
              coin.symbol,
              handleMaxClick,
              isSimulating
            )}
          </ModalBody>

          <ModalFooter
          bgColor={useColorModeValue("#b5fdff", "#013133")}
          >
            <Button
              color={useColorModeValue("#013133", "#b5fdff")}
              onClick={onDelegateClick}
              isDisabled={isAmountZero || isDelegating || isSimulating}
              isLoading={isDelegating}
            >
              Delegate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th
              borderBottomColor={useColorModeValue("#013133", "#b5fdff")}
              ></Th>
              <Th
              borderBottomColor={useColorModeValue("#013133", "#b5fdff")}
              >Voting Power</Th>
              <Th
              borderBottomColor={useColorModeValue("#013133", "#b5fdff")}
              >Commission</Th>
              <Th
              borderBottomColor={useColorModeValue("#013133", "#b5fdff")}
              ></Th>
            </Tr>
          </Thead>

          <Tbody>
            {validators.map((validator: Validator) => (
              <Tr key={validator?.description?.moniker}>
                <Td
                borderTopColor={borderColor}
                borderBottomColor={borderColor}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    maxWidth={280}
                    overflowX="hidden"
                  >
                    <Thumbnail
                      identity={validator.description?.identity}
                      name={validator.description?.moniker}
                      thumbnailUrl={thumbnails[validator.operatorAddress]}
                    />
                    <Text>{validator?.description?.moniker}</Text>
                  </Box>
                </Td>
                <Td
                borderBottomColor={borderColor}
                >
                  {Math.floor(
                    exponentiate(validator.tokens, -exp)
                  ).toLocaleString()}
                  &nbsp;
                  <Token color="blackAlpha.800" token={coin.symbol} />
                </Td>
                <Td
                borderBottomColor={borderColor}
                >
                  {validator.commission?.commissionRates?.rate &&
                    exponentiate(
                      validator.commission.commissionRates.rate,
                      -16
                    ).toFixed(0)}
                  %
                </Td>
                <Td
                borderBottomColor={borderColor}
                >
                  <Box width="100%" display="flex" alignItems="center">
                    {/* <Text>{validator.apr}</Text> */}
                    <Button
                      variant="ghost"
                      ml="auto"
                      onClick={() => {
                        onOpen();
                        setCurrentValidator(validator);
                      }}
                      color={
                       borderColor
                      }
                    >
                      Manage
                      <Icon as={IoArrowForward} />
                    </Button>
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllValidators;
