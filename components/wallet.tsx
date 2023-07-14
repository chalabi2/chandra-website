import { useChain, useManager } from '@cosmos-kit/react';
import {
  Box,
  Center,
  Grid,
  GridItem,
  Icon,
  Stack,
  border,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import {
  Error,
  Connected,
  ConnectedShowAddress,
  ConnectedUserInfo,
  Connecting,
  ConnectStatusWarn,
  CopyAddressBtn,
  Disconnected,
  NotExist,
  Rejected,
  RejectedWarn,
  WalletConnectComponent,
  handleSelectChainDropdown,
  ChooseChain,
  ChainOption,
  ConnectWalletButton,
} from '.';
import { defaultChainName } from '../config/defaults';
import { ChainName } from '@cosmos-kit/core';
import { ChainCard } from './react copy';

export const WalletSection = ({
  isMultiChain,
  providedChainName,
  setChainName,
}: {
  isMultiChain: boolean;
  providedChainName?: ChainName;
  setChainName?: (chainName: ChainName | undefined) => void;
}) => {
  const { chainRecords, getChainLogo } = useManager();
  const {
    connect,
    openView,
    status,
    username,
    address,
    message,
    wallet,
    chain: chainInfo,
  } = useChain(providedChainName || "cosmoshub");
  const { colorMode } = useColorMode();

  const chain = {
    chainName: defaultChainName,
    label: chainInfo.pretty_name,
    value: defaultChainName,
    icon: getChainLogo('cosmoshub'),
  };

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

  // Events
  const onClickConnect: MouseEventHandler = async (e) => {
    e.preventDefault();
    await connect();
  };

  const onClickOpenView: MouseEventHandler = (e) => {
    e.preventDefault();
    openView();
  };

  const borderColor = useColorModeValue("#013133", "#b5fdff")

  // Components
  const connectWalletButton = (
    <WalletConnectComponent
      walletStatus={status}
      disconnect={
        <Disconnected buttonText="Connect Wallet" onClick={onClickConnect} />
      }
      connecting={<Connecting />}
      connected={
        <Connected buttonText={'My Wallet'} onClick={onClickOpenView} />
      }
      rejected={<Rejected buttonText="Reconnect" onClick={onClickConnect} />}
      error={<Error buttonText="Change Wallet" onClick={onClickOpenView} />}
      notExist={
        <NotExist buttonText="Install Wallet" onClick={onClickOpenView} />
      }
    />
  );

  const connectWalletWarn = (
    <ConnectStatusWarn
      walletStatus={status}
      rejected={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
      error={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning={`${wallet?.prettyName}: ${message}`}
        />
      }
    />
  );

  useEffect(() => {
    setChainName?.(window.localStorage.getItem('selected-chain') || 'osmosis');
  }, [setChainName]);

  const onChainChange: handleSelectChainDropdown = async (
    selectedValue: ChainOption | null
  ) => {
    setChainName?.(selectedValue?.chainName);
    if (selectedValue?.chainName) {
      window?.localStorage.setItem('selected-chain', selectedValue?.chainName);
    } else {
      window?.localStorage.removeItem('selected-chain');
    }
  };

  const chooseChain = (
    <ChooseChain
      chainName={providedChainName}
      chainInfos={chainOptions}
      onChange={onChainChange}
    />
  );

  const userInfo = username && (
    <ConnectedUserInfo username={username}/>
  );
  const addressBtn = (
    <CopyAddressBtn
      walletStatus={status}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );

  return (
      <Grid
       shadow={"dark-lg"}
       borderRadius={"4px"}
       bgColor={useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)")}
       p={4}
        w="full"
        maxW="sm"
        templateColumns="1fr"
        rowGap={4}
        alignItems="center"
        justifyContent="center"
      >
        {isMultiChain ? (
          <GridItem>{chooseChain}</GridItem>
        ) : (
          <GridItem marginBottom={'20px'}>
            <ChainCard
              prettyName={chain?.label || defaultChainName}
              icon={chain?.icon}
            />
          </GridItem>
        )}
        {!providedChainName && isMultiChain ? (
          <ConnectWalletButton buttonText={'Connect Wallet'} isDisabled />
        ) : (
          <GridItem px={6}>
            <Stack
              justifyContent="center"
              alignItems="center"
              borderRadius="lg"
              borderColor={borderColor}
              boxShadow={
                colorMode === 'light'
                  ? '0 0 2px #013133, 0 0 6px -2px #b5fdff'
                  : '0 0 2px #b5fdff, 0 0 8px -2px #013133'
              }
              spacing={4}
              px={4}
              py={{ base: 6, md: 12 }}
            >
              {userInfo}
              {addressBtn}
              <Box w="full" maxW={{ base: 52, md: 64 }}>
                {connectWalletButton}
              </Box>
              {connectWalletWarn && <GridItem>{connectWalletWarn}</GridItem>}
            </Stack>
          </GridItem>
        )}
      </Grid>
  );
};
