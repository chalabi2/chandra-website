import Head from 'next/head';
import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {
  Product,
  Dependency,
  WalletSection,
} from '../components';
import { StakingSection } from '../components/staking';
import { defaultChainName } from '../config/defaults';
import { useState } from 'react';
import { ChainName } from '@cosmos-kit/core';
import Header from '../components/react/header';
import { IoArrowBack } from 'react-icons/io5';

export default function Staking() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedChainName, setChainName] = useState<ChainName | undefined>(
    defaultChainName
  );
  const buttonHover = useColorModeValue("rgba(1, 49, 51, 0.5)", "rgba(181, 253, 255, 0.5)")

  return (
    <>
    <Header/>
    <Container
     maxW="8xl" py={40}>
        <HStack
        spacing={5}
        >
            <Box
            w="2xl"
            h="2xl"
            >
      <WalletSection
        isMultiChain={true}
        providedChainName={selectedChainName}
        setChainName={setChainName}
      />
      </Box>
      <Box
      w="6xl"
      >
      {selectedChainName && <StakingSection chainName={selectedChainName} />}
      </Box>
      </HStack>
      <Link href={"/"}>
        <Button
        bgColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
              _hover={{
                bgColor: buttonHover
                        
                      }}
        my={20}
      bottom={0}
      left={0}
      leftIcon={<IoArrowBack/>}
      >Home</Button>
      </Link>
    </Container>
    </>
  );
}