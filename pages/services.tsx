import React, { useState } from 'react';
import {
  Box,
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
  useColorModeValue
} from '@chakra-ui/react';
import Header from '../components/react/header';
import Head from 'next/head';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/router'

const ServicesPage = () => {
  const data = {
    endpoints: [
      { network: 'Akash', endpoint: 'Snapshot1' },
      { network: 'Canto', endpoint: 'endpoint2' },
      { network: 'Chihuahua', endpoint: 'endpoint2' },
      { network: 'Comdex', endpoint: 'endpoint2' },
      { network: 'Emoney', endpoint: 'endpoint2' },
      { network: 'Evmos', endpoint: 'endpoint2' },
      { network: 'Gravity', endpoint: 'endpoint2' },
      { network: 'Juno', endpoint: 'endpoint2' },
      { network: 'OmniFlix', endpoint: 'endpoint2' },
      { network: 'Osmosis', endpoint: 'endpoint2' },
      { network: 'Stride', endpoint: 'endpoint2' },
    ],
    snapshots: [
      { network: 'Akash', snapshot: 'Snapshot1' },
      { network: 'Canto', snapshot: 'Snapshot2' },
      { network: 'Chihuahua', snapshot: 'Snapshot2' },
      { network: 'Comdex', snapshot: 'Snapshot2' },
      { network: 'Emoney', snapshot: 'Snapshot2' },
      { network: 'Evmos', snapshot: 'Snapshot2' },
      { network: 'Gravity', snapshot: 'Snapshot2' },
      { network: 'Juno', snapshot: 'Snapshot2' },
      { network: 'OmniFlix', snapshot: 'Snapshot2' },
      { network: 'Osmosis', snapshot: 'Snapshot2' },
      { network: 'Stride', snapshot: 'Snapshot2' },
    ]
  };

  const tabColor = useColorModeValue("#013133","#b5fdff");
  const tabColorOpposit = useColorModeValue("#b5fdff", "#013133");
  const router = useRouter()
  const initialTabIndex = Number(router.query.tabIndex) || 0
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  
  
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
        <Tabs isLazy index={tabIndex} onChange={setTabIndex}>
          <TabList
          sx={{
            borderBottomColor: useColorModeValue( "cyan.200", "blue.800")
          }}
          >
  <Tab sx={{ 
    _selected: { 
      borderBottomColor: tabColor
    }
  }}>
    Endpoints
  </Tab>
  <Tab sx={{ 
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
                      <Th>Network</Th>
                      <Th>Endpoint</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.endpoints.map((endpoint, index) => (
                      <Tr key={index}>
                        <Td>{endpoint.network}</Td>
                        <Td>{endpoint.endpoint}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
              <TabPanel>
                <Table variant="simple" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Network</Th>
                      <Th>Snapshot</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.snapshots.map((snapshot, index) => (
                      <Tr key={index}>
                        <Td>{snapshot.network}</Td>
                        <Td>{snapshot.snapshot}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
        <Link href={"/"}>
        <Button
        my={20}
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
