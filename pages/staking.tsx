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

export default function Staking() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedChainName, setChainName] = useState<ChainName | undefined>(
    defaultChainName
  );

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
      maxH="1000px"
      >
      {selectedChainName && <StakingSection chainName={selectedChainName} />}
      </Box>
      </HStack>
    </Container>
    </>
  );
}