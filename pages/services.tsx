import React, { useState } from 'react';
import {
  Box,
  Text,
  Container,
  VStack,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue
} from '@chakra-ui/react';
import Header from '../components/react/header';
import Head from 'next/head';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/router'
import { MdArrowDropDown } from 'react-icons/md';

const ServicesPage = () => {

  const baseURL = "chandrastation.com"
  const baseSnapshotURL = "https://snapshot.chandrastation.com/"

  const data = {
    endpoints: [
      { network: 'Akash', API: `https://akash.api.${baseURL}`, RPC: `https://akash.rpc.${baseURL}`, GRPC: `https://akash.grpc.${baseURL}`},
      { network: 'Canto', API: `https://canto.api.${baseURL}`, RPC: `https://canto.rpc.${baseURL}`, GRPC: `https://canto.grpc.${baseURL}`, EVMRPC: `https://canto.evm.${baseURL}` },
      { network: 'Chihuahua', API: `https://chihuahua.api.${baseURL}`, RPC: `https://chihuauha.rpc.${baseURL}`, GRPC: `https://chihuahua.grpc.${baseURL}` },
      { network: 'Comdex', API: `https://comdex.api.${baseURL}`, RPC: `https://comdex.rpc.${baseURL}`, GRPC: `https://comdex.grpc.${baseURL}` },
      { network: 'Emoney', API: `https://emoney.api.${baseURL}`, RPC: `https://emoney.rpc.${baseURL}`, GRPC: `https://emoney.grpc.${baseURL}` },
      { network: 'Evmos', API: `https://evmos.api.${baseURL}`, RPC: `https://evmos.rpc.${baseURL}`, GRPC: `https://evmos.grpc.${baseURL}`, EVMRPC: `https://evmos.evm.${baseURL}` },
      { network: 'Gravity', API: `https://gravity.api.${baseURL}`, RPC: `https://gravity.rpc.${baseURL}`, GRPC: `https://gravity.grpc.${baseURL}` },
      { network: 'Juno', API: `https://juno.api.${baseURL}`, RPC: `https://juno.rpc.${baseURL}`, GRPC: `https://juno.grpc.${baseURL}` },
      { network: 'OmniFlix', API: `https://flix.api.${baseURL}`, RPC: `https://flix.rpc.${baseURL}`, GRPC: `https://flix.grpc.${baseURL}` },
      { network: 'Osmosis', API: `https://osmosis.api.${baseURL}`, RPC: `https://osmosis.rpc.${baseURL}`, GRPC: `https://osmosis.grpc.${baseURL}` },
      { network: 'Stride', API: `https://stride.api.${baseURL}`, RPC: `https://stride.rpc.${baseURL}`, GRPC: `https://stride.grpc.${baseURL}` },
    ],
    snapshots: [
      { network: 'Akash', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Canto', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Chihuahua', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Comdex', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Emoney', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Evmos', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Gravity', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Juno', snapshot: `${baseSnapshotURL}akash` },
      { network: 'OmniFlix', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Osmosis', snapshot: `${baseSnapshotURL}akash` },
      { network: 'Stride', snapshot: `${baseSnapshotURL}akash` },
    ]
  };

  const tabColor = useColorModeValue("#013133","#b5fdff");
  const tabColorOpposit = useColorModeValue("#b5fdff", "#013133");
  const router = useRouter()
  const initialTabIndex = Number(router.query.tabIndex) || 0
  const [tabIndex, setTabIndex] = useState(initialTabIndex);

  const hoverBgColor = useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)");

  const [endpointType, setEndpointType] = useState("API");

  const formatEndpointLink = (endpoint: string, endpointType: string) => {
    return endpoint[endpointType];
  };

  // Function to format the displayed endpoint link
  const displayEndpointLink = (network: string, endpointType: string) => {
    return `https://${network.toLowerCase()}.${endpointType.toLowerCase()}...`
  };

  const buttonHover = useColorModeValue("rgba(1, 49, 51, 0.5)", "rgba(181, 253, 255, 0.5)")

  return (
    <>
    <Head>
        <title>Chandra Station Services</title>
        <meta name="description" content="Chandra Station services" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
    <Box minH="100vh" bg={useColorModeValue("#b5fdff", "#013133")}>
        <Header/>
      <Container maxW="8xl" pt={10}>
        <VStack spacing={8} w="100%">
        <Tabs 
        shadow={"dark-lg"}
        borderRadius={"4px"}
        bgColor={useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)")}
        p={4}
        isLazy index={tabIndex} onChange={setTabIndex}>
          <TabList
          sx={{
            borderBottomColor: useColorModeValue( "cyan.200", "blue.800")
          }}
          >
  <Tab sx={{
    width: useBreakpointValue({base: "50px" , md: "500px"}), 
    _selected: { 
      borderBottomColor: tabColor
    }
  }}>
    Endpoints
  </Tab>
  <Tab sx={{ 
    width: useBreakpointValue({base: "50px" , md: "500px"}), 
    _selected: { 
      borderBottomColor: tabColor
    }
  }}>
    Snapshots
  </Tab>
</TabList>

            <TabPanels>
            <TabPanel>
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th
              borderBottomColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
              >Network</Th>
              <Th
              borderBottomColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
              pl={300}
              >
                <Menu
                >
                  <MenuButton
                    color="grey.800"
                    fontSize="xs"
                    variant="ghost"
                    as={Button}
                    boxShadow="none"
                    rightIcon={<MdArrowDropDown boxSize="50px" />}
                    aria-label="endpoints"
                    size="md"

                    _hover={{
                      bgColor: hoverBgColor,
                    }}
                     colorScheme={useColorModeValue("#b5fdff", "#013133")} variant="ghost"
                  >{endpointType}</MenuButton>
                  <MenuList
                  p={0} minW="0" w={'90px'}
                  height="113px"
                  bg={useColorModeValue("rgba(1, 49, 51, 1)", "rgba(181, 253, 255, 1)")}
                  color={useColorModeValue("rgba(181, 253, 255, 1)", "rgba(1, 49, 51, 1)")}
                  >
                    <MenuItem 
                     _hover={{
                      textDecoration: "underline",
                    }}
                    bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
                    onClick={() => setEndpointType("API")}>
                      <Text>API</Text>
                    </MenuItem>
                    <MenuItem 
                     _hover={{
                      textDecoration: "underline",
                    }}
                    bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
                    onClick={() => setEndpointType("GRPC")}>
                      <Text>GRPC</Text>
                    </MenuItem>
                    <MenuItem 
                     _hover={{
                      textDecoration: "underline",
                    }}
                    bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
                    onClick={() => setEndpointType("RPC")}>
                      <Text>RPC</Text>
                    </MenuItem>
                    <MenuItem 
                     _hover={{
                      textDecoration: "underline",
                    }}
                    bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
                    onClick={() => setEndpointType("EVM RPC")}>
                      <Text>EVM RPC</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Th>
            </Tr>
          </Thead>
          <Tbody
        >
            {data.endpoints.map((endpoint, index) => (
              <Tr key={index}
              >
                <Td
                borderBottomColor={useColorModeValue("#013133", "#b5fdff")}
                >{endpoint.network}</Td>
                {/* Display the endpoint based on the selected type */}
                <Td
                 borderBottomColor={useColorModeValue("#013133", "#b5fdff")}
                pl={300}
                >
                <a href={formatEndpointLink(endpoint, endpointType)} target="_blank" rel="noopener noreferrer">
    {displayEndpointLink(endpoint.network, endpointType)}
  </a>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TabPanel>
              <TabPanel>
                <Table variant="simple" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th
                      borderBottomColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
                      >Network</Th>
                      <Th
                      borderBottomColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
                      pl={300}
                      >
                        
                        Snapshot
                        
                        <Button
                        color={"transparent"}
                        zIndex={"-10"}
                        />
                        </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.snapshots.map((snapshot, index) => (
                      <Tr key={index}
                      >
                        <Td
                        borderBottomColor={useColorModeValue("#013133", "#b5fdff")}
                        >{snapshot.network}</Td>
                        <Td
                        borderBottomColor={useColorModeValue("#013133", "#b5fdff")}
                        pl={300}
                        >{snapshot.snapshot}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
        <Link
        href={"/"}
        >
        <Button
         _hover={{
          bgColor: buttonHover
                  
                }}
        my={20}
        bgColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
      bottom={0}
      left={0}
      leftIcon={<IoArrowBack/>}
      >Back</Button>
      </Link>
      </Container>
    </Box>
    </>
  );
};

export default ServicesPage;
