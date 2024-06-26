import React, { useState, useEffect } from "react";
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
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../components/react/header";
import Head from "next/head";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";
import { MdArrowDropDown } from "react-icons/md";
import axios from "axios";

const formatBlockHeight = (blockHeight: number) => {
  return blockHeight.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ServicesPage = () => {
  const [snapshotData, setSnapshotData] = useState<Snapshot[]>([]);

  const [snapshotLinks, setSnapshotLinks] = useState([]);

  const baseURL = "https://nodes.chandrastation.com";
  const baseSnapshotURL = "https://snapshots.chandrastation.com/";

  const data = {
    endpoints: [
      {
        network: "Akash",
        REST: `${baseURL}/api/akash/`,
        RPC: `${baseURL}/rpc/akash/`,
        GRPC: `${baseURL}/grpc/akash/`,
      },
      {
        network: "Canto",
        REST: `${baseURL}/api/canto/`,
        RPC: `${baseURL}/rpc/canto/`,
        GRPC: `${baseURL}/grpc/canto/`,
        EVMRPC: `${baseURL}/evm/canto/`,
      },
      {
        network: "Chihuahua",
        REST: `${baseURL}/api/huahua/`,
        RPC: `${baseURL}/rpc/huahua/`,
        GRPC: `${baseURL}/grpc/huahua/`,
      },

      {
        network: "Gravity",
        REST: `${baseURL}/api/gravity/`,
        RPC: `${baseURL}/rpc/gravity/`,
        GRPC: `${baseURL}/grpc/gravity/`,
      },
      {
        network: "Juno",
        REST: `${baseURL}/api/juno/`,
        RPC: `${baseURL}/rpc/juno/`,
        GRPC: `${baseURL}/grpc/juno/`,
      },

      {
        network: "Osmosis",
        REST: `${baseURL}/api/osmosis/`,
        RPC: `${baseURL}/rpc/osmosis/`,
        GRPC: `${baseURL}/grpc/osmosis/`,
      },
      {
        network: "Saga",
        REST: `${baseURL}/api/saga/`,
        RPC: `${baseURL}/rpc/saga/`,
        GRPC: `${baseURL}/grpc/saga/`,
      },
      {
        network: "Quicksilver",
        REST: `${baseURL}/api/quicksilver/`,
        RPC: `${baseURL}/rpc/quicksilver/`,
        GRPC: `${baseURL}/grpc/quicksilver/`,
      },
    ],
    snapshots: [
      { network: "Akash", snapshot: `${baseSnapshotURL}akash/` },
      { network: "Kava", snapshot: `${baseSnapshotURL}kava/` },
      { network: "Canto", snapshot: `${baseSnapshotURL}canto/` },
      { network: "Chihuahua", snapshot: `${baseSnapshotURL}huahua` },
      { network: "Comdex", snapshot: `${baseSnapshotURL}comdex` },
      { network: "Emoney", snapshot: `${baseSnapshotURL}emd` },
      { network: "Evmos", snapshot: `${baseSnapshotURL}evmos` },
      { network: "Gravity", snapshot: `${baseSnapshotURL}gravity/` },
      { network: "Juno", snapshot: `${baseSnapshotURL}juno` },
      { network: "OmniFlix", snapshot: `${baseSnapshotURL}omniflix/` },
      { network: "Osmosis", snapshot: `${baseSnapshotURL}osmosis/` },
      { network: "Stride", snapshot: `${baseSnapshotURL}stride/` },
    ],
  };

  const tabColor = useColorModeValue("#013133", "#b5fdff");
  const tabColorOpposit = useColorModeValue("#b5fdff", "#013133");
  const router = useRouter();
  const initialTabIndex = Number(router.query.tabIndex) || 0;
  const [tabIndex, setTabIndex] = useState(initialTabIndex);

  const hoverBgColor = useColorModeValue(
    "rgba(1, 49, 51, 0.25)",
    "rgba(181, 253, 255, 0.25)"
  );

  const [endpointType, setEndpointType] = useState("REST");

  type EndpointType = "REST" | "RPC" | "GRPC" | "EVM-RPC";
  type Endpoint = {
    [K in EndpointType]?: string;
  };

  type Snapshot = {
    network: string;
    link: string;
    name: string;
    blockHeight: number;
    size: number;
    date: string;
  };

  interface Props {
    snapshot: Snapshot;
  }

  const snapshot: Snapshot = {
    network: "network",
    link: "link",
    name: "name",
    blockHeight: 123,
    size: 123,
    date: "date",
  };

  const formatEndpointLink = (
    endpoint: Endpoint,
    endpointType: EndpointType
  ) => {
    return endpoint[endpointType];
  };

  // Function to format the displayed endpoint link
  const displayEndpointLink = (network: string, endpointType: string) => {
    if (endpointType === "EVM RPC") {
      return `https://nodes.chandrastation.com/evm/${network.toLowerCase()}/`;
    }
    return `https://nodes.chandrastation.com/${endpointType.toLowerCase()}/${network.toLowerCase()}/`;
  };

  const buttonHover = useColorModeValue(
    "rgba(1, 49, 51, 0.5)",
    "rgba(181, 253, 255, 0.5)"
  );

  const [blockHeights, setBlockHeights] = useState({});

  useEffect(() => {
    // Fetch block height data
    axios
      .get("https://snapshots.chandrastation.com/metadata.json")
      .then((response) => {
        setBlockHeights(response.data);
      })
      .catch((err) => {
        console.error("Error fetching block heights: ", err);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(blockHeights).length === 0) {
      // If block heights have not been fetched yet, do not fetch snapshots
      return;
    }

    data.snapshots.forEach(({ network, snapshot }) => {
      axios
        .get(snapshot)
        .then((response) => {
          const newLinks = response.data.map((file: any) => {
            const date = new Date(file.mtime);
            const options = {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            };
            // @ts-ignore
            const localDate = date.toLocaleString([], options);
            const sizeGB = (file.size / (1024 * 1024 * 1024)).toFixed(2);
            // @ts-ignore
            const blockHeight = blockHeights[network]; // Get block height for the current network
            return {
              network,
              name: file.name,
              link: `${snapshot}${file.name}`,
              date: localDate,
              size: `${sizeGB} GB`,
              blockHeight, // Add block height to the snapshot data
            };
          });
          // @ts-ignore
          setSnapshotData((prev) => [...prev, ...newLinks]);
        })
        .catch((error) => {
          console.error("Error fetching snapshot:", error);
        });
    });
  }, [blockHeights]);

  const filteredEndpoints =
    endpointType === "EVM RPC"
      ? data.endpoints.filter(
          (endpoint) =>
            endpoint.network === "Canto" ||
            endpoint.network === "Evmos" ||
            endpoint.network === "Kava"
        )
      : data.endpoints;

  return (
    <>
      <Head>
        <title>Chandra Station Services</title>
        <meta name="description" content="Chandra Station services" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Box minH="100vh" bg={useColorModeValue("#b5fdff", "#013133")}>
        <Header />
        <Container maxW="container.xl" pt={10}>
          <VStack spacing={8} w="100%">
            <Tabs
              shadow={"dark-lg"}
              borderRadius={"4px"}
              bgColor={useColorModeValue(
                "rgba(255, 255, 255, 0.2)",
                "rgba(0, 0, 0, 0.2)"
              )}
              p={4}
              isLazy
              index={tabIndex}
              onChange={setTabIndex}
            >
              <TabList
                sx={{
                  borderBottomColor: useColorModeValue("cyan.200", "blue.800"),
                }}
              >
                <Tab
                  sx={{
                    width: ["100%", "100%", "250px", "500px"],
                    _selected: {
                      borderBottomColor: tabColor,
                    },
                  }}
                >
                  Endpoints
                </Tab>
                <Tab
                  sx={{
                    width: ["100%", "100%", "250px", "500px"],
                    _selected: {
                      borderBottomColor: tabColor,
                    },
                  }}
                >
                  Snapshots
                </Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Table variant="simple" colorScheme="teal">
                    <Thead>
                      <Tr>
                        <Th
                          borderBottomColor={useColorModeValue(
                            "rgba(1, 49, 51, 0.25)",
                            "rgba(181, 253, 255, 0.25)"
                          )}
                        >
                          Network
                        </Th>
                        <Th
                          borderBottomColor={useColorModeValue(
                            "rgba(1, 49, 51, 0.25)",
                            "rgba(181, 253, 255, 0.25)"
                          )}
                          pl={300}
                        >
                          <Menu>
                            <MenuButton
                              color="grey.800"
                              fontSize="xs"
                              variant="ghost"
                              as={Button}
                              boxShadow="none"
                              // @ts-ignore
                              rightIcon={<MdArrowDropDown boxSize="50px" />}
                              aria-label="endpoints"
                              size="md"
                              _hover={{
                                bgColor: hoverBgColor,
                              }}
                              colorScheme={useColorModeValue(
                                "#b5fdff",
                                "#013133"
                              )}
                            >
                              {endpointType}
                            </MenuButton>
                            <MenuList
                              p={0}
                              minW="0"
                              w={"90px"}
                              height="113px"
                              bg={useColorModeValue(
                                "rgba(1, 49, 51, 1)",
                                "rgba(181, 253, 255, 1)"
                              )}
                              color={useColorModeValue(
                                "rgba(181, 253, 255, 1)",
                                "rgba(1, 49, 51, 1)"
                              )}
                            >
                              <MenuItem
                                _hover={{
                                  textDecoration: "underline",
                                }}
                                bg={useColorModeValue(
                                  "rgba(1, 49, 51, 0.25)",
                                  "rgba(181, 253, 255, 0.25)"
                                )}
                                onClick={() => setEndpointType("REST")}
                              >
                                <Text>REST</Text>
                              </MenuItem>
                              <MenuItem
                                _hover={{
                                  textDecoration: "underline",
                                }}
                                bg={useColorModeValue(
                                  "rgba(1, 49, 51, 0.25)",
                                  "rgba(181, 253, 255, 0.25)"
                                )}
                                onClick={() => setEndpointType("GRPC")}
                              >
                                <Text>GRPC</Text>
                              </MenuItem>
                              <MenuItem
                                _hover={{
                                  textDecoration: "underline",
                                }}
                                bg={useColorModeValue(
                                  "rgba(1, 49, 51, 0.25)",
                                  "rgba(181, 253, 255, 0.25)"
                                )}
                                onClick={() => setEndpointType("RPC")}
                              >
                                <Text>RPC</Text>
                              </MenuItem>
                              <MenuItem
                                _hover={{
                                  textDecoration: "underline",
                                }}
                                bg={useColorModeValue(
                                  "rgba(1, 49, 51, 0.25)",
                                  "rgba(181, 253, 255, 0.25)"
                                )}
                                onClick={() => setEndpointType("EVM RPC")}
                              >
                                <Text>EVM RPC</Text>
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {filteredEndpoints.map((endpoint, index) => (
                        <Tr key={index}>
                          <Td>{endpoint.network}</Td>
                          {/* Display the endpoint based on the selected type */}
                          <Td pl={300}>
                            <a
                              href={formatEndpointLink(
                                endpoint,
                                endpointType as EndpointType
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {displayEndpointLink(
                                endpoint.network,
                                endpointType
                              )}
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
                        <Th>Network</Th>
                        <Th pl={10}>Snapshot File</Th>
                        <Th pl={10}>Height</Th>
                        <Th pl={10}>Size</Th>
                        <Th pl={10}>Date</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {snapshotData.map((snapshot, index) => (
                        <Tr key={index}>
                          <Td>{snapshot.network}</Td>
                          <Td>
                            <Button
                              textDecoration="underline"
                              variant="ghost"
                              as="a"
                              href={snapshot.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              colorScheme="teal"
                            >
                              {snapshot.name}
                            </Button>
                          </Td>
                          <Td pl={10}>{snapshot.blockHeight}</Td>
                          <Td pl={10}>{snapshot.size}</Td>
                          <Td pl={10}>{snapshot.date}</Td>
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
              _hover={{
                bgColor: buttonHover,
              }}
              my={20}
              bgColor={useColorModeValue(
                "rgba(1, 49, 51, 0.25)",
                "rgba(181, 253, 255, 0.25)"
              )}
              bottom={0}
              left={0}
              leftIcon={<IoArrowBack />}
            >
              Back
            </Button>
          </Link>
        </Container>
      </Box>
    </>
  );
};

export default ServicesPage;
