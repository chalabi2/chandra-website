import Head from "next/head";
import {
  Box,
  Divider,
  Grid,
  Image,
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
  useDisclosure,
  VStack,
  HStack,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  IoLockClosedSharp,
  IoServerSharp,
  IoBrowsersSharp,
  IoAnalyticsSharp,
  IoCameraSharp,
} from "react-icons/io5";

import { useState } from "react";
import LotusFlower from "../components/threeJS/cube";
import ServerRack from "../components/threeJS/server";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(1, 1fr)",
    md: "repeat(3, 1fr)",
  });

  const statColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(2, 1fr)",
  });

  const direction = useBreakpointValue({ base: "column", md: "row" });

  const servicesOrder = useBreakpointValue({ base: 0, md: 1 });
  const boxesOrder = useBreakpointValue({ base: 1, md: 0 });

  return (
    <Container maxW="8xl" mt={2}>
      <Head>
        <title>Chandra Station</title>
        <meta name="description" content="Validator of the lunar god" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Flex maxW={"8xl"} align="center" justifyContent="space-between" py={3}>
        <HStack spacing={4}>
          <Image
            borderRadius="full"
            boxSize="75px"
            src="/logo.png"
            alt="Chandra Station"
          />
          <Text as={"h1"} fontSize="2xl" fontWeight={"bold"}>
            Chandra Station
          </Text>
        </HStack>
        <Flex justifyContent="space-between" align="center" textAlign="center">
          <HStack spacing={20}>
            <Link>
              <Text fontSize="lg">Services</Text>
            </Link>
            <Link>
              <Text fontSize="lg">Blog</Text>
            </Link>
            <Button
              variant="outline"
              fontSize="lg"
              colorScheme={useColorModeValue("dark", "light")}
              size={"sm"}
            >
              Stake With Us
            </Button>
            <Button
              size={"sm"}
              variant="outline"
              px={0}
              mt={2}
              mr={2}
              onClick={toggleColorMode}
            >
              <Icon
                as={colorMode === "light" ? BsFillMoonStarsFill : BsFillSunFill}
              />
            </Button>
          </HStack>
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Box
          className="background-image-container"
          width="100%" // Make the container span the full width
          py={200}
        >
          <Box position="relative" zIndex={1}>
            <HStack
              maxH="600px"
              alignContent={"center"}
              py={20}
              maxW="3xl"
              justifyContent="center"
            >
              <VStack maxH="600px">
                <Box zIndex={1} textAlign="center">
                  <Heading
                    zIndex={0}
                    textAlign={"left"}
                    as="h1"
                    fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                    fontWeight="extrabold"
                    mb={1}
                  >
                    Chandra Station
                  </Heading>
                  <Heading
                    zIndex={1}
                    textAlign={"left"}
                    as="h1"
                    fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
                  >
                    <Text
                      as="span"
                      color={useColorModeValue("primary.500", "primary.200")}
                    >
                      | Validator of the Lunar God चन्द्र |
                    </Text>
                    <Box mt={3}>
                      <Divider />
                    </Box>
                  </Heading>
                  <Text
                    maxW={600}
                    textAlign={"left"}
                    mt={3}
                    fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
                  >
                    Chandra Station is a multi disciplined infrastructure
                    provider, validator, and development house. We are
                    investors, programmers and thinkers looking to help push the
                    Cosmos forward.
                  </Text>
                </Box>
              </VStack>
              <LotusFlower />
            </HStack>
          </Box>
        </Box>
      </Flex>
      <VStack className="background-image-container2">
        <Box mt={800} zIndex={1} ml={0} textAlign="center">
          <Heading
            zIndex={0}
            textAlign={"center"}
            as="h1"
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
            fontWeight="extrabold"
            mb={1}
          >
            Validating the Cosmos
          </Heading>

          <Heading
            zIndex={1}
            textAlign={"center"}
            as="h1"
            fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
          >
            <Text
              as="span"
              color={useColorModeValue("primary.500", "primary.200")}
            >
              Enterprise Grade Infrastructure
            </Text>
            <Box mt={3}>
              <Divider />
            </Box>
          </Heading>
          <Text
            maxW={900}
            textAlign={"center"}
            mt={3}
            fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
          >
            With multiple hardware deployments in the US Chandra Station runs
            and maintains high uptime, bare metal machines.
          </Text>
        </Box>
        <Box zIndex={1} ml={0} textAlign="center">
          <Grid
            mt={10}
            templateColumns={statColumns}
            templateRows="repeat(2, 1fr)"
            gap={4}
          >
            <GridItem>
              <Flex
                p="2"
                height={175}
                textAlign={"left"}
                flexDirection="column"
              >
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Total Staked Assets
                </Heading>
                <Box mt={1}>
                  <Divider />
                </Box>
                <Text fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  $10,000,000
                </Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                p="2"
                height={175}
                textAlign={"left"}
                flexDirection="column"
              >
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Delegators
                </Heading>
                <Box mt={1}>
                  <Divider />
                </Box>
                <Text fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>69</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                p="2"
                height={175}
                textAlign={"left"}
                flexDirection="column"
              >
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Networks Supported
                </Heading>
                <Box mt={1}>
                  <Divider />
                </Box>
                <Text fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>8</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                p="2"
                height={175}
                textAlign={"left"}
                flexDirection="column"
              >
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Uptime
                </Heading>
                <Box mt={1}>
                  <Divider />
                </Box>
                <Text fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  98%
                </Text>
              </Flex>
            </GridItem>
          </Grid>
          <Grid
            mt={10}
            templateColumns={gridTemplateColumns}
            templateRows="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={1} colSpan={1}>
              <Flex
                p="2"
                width={400}
                height={400}
                textAlign={"left"}
                flexDirection="column"
              >
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Hardware
                </Heading>
                <Box mb={3}>
                  <Divider />
                </Box>
                <Text fontSize="lg">
                  Workloads vary and our wide array of hardware is fit for any
                  task. With machines ranging from 64 core AMD EPYC servers to
                  12 core Intel devices we run single thread and multi thread
                  workloads with ease.
                </Text>
                <Icon mt={8} boxSize={"150px"} alignSelf="flex-end">
                  <IoServerSharp />
                </Icon>
              </Flex>
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
              <Flex
                p="2"
                width={400}
                height={400}
                textAlign={"left"}
                flexDirection="column"
              >
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Monitoring
                </Heading>
                <Box mb={3}>
                  <Divider />
                </Box>
                <Text fontSize="lg">
                  We monitor our infrastructure with Prometheus, Grafana,
                  Tenderduty, and on chain metrics from our nodes. We have a
                  custom dashboard that allows us to see the health of our
                  infrastructure at a glance and alerts us when things go wrong.
                </Text>
                <Icon mt={8} boxSize={"150px"} alignSelf="flex-end">
                  <IoBrowsersSharp />
                </Icon>
              </Flex>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Flex
                p="2"
                width={400}
                height={400}
                textAlign={"left"}
                flexDirection="column"
              >
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Security
                </Heading>
                <Box mb={3}>
                  <Divider />
                </Box>
                <Text fontSize="lg">
                  From firewall hardware to Horcrux and failover nodes we have a
                  wide array of security measures in place to ensure our
                  infrastructure is always safe. Alongside 24/7 armed security
                  at our deployment locations we are safe both online and
                  offline.
                </Text>
                <Icon mt={8} boxSize={"150px"} alignSelf="flex-end">
                  <IoLockClosedSharp />
                </Icon>
              </Flex>
            </GridItem>
            <Flex></Flex>
          </Grid>
        </Box>
      </VStack>
      <Box
        className="background-image-container"
        width="100%" // Make the container span the full width
        py={200}
      >
        <Box position="relative" zIndex={1}>
          <Stack direction={direction} justifyContent={"space-between"}>
            <VStack
              alignContent={"center"}
              py={20}
              spacing={5}
              justifyContent={"start"}
            >
              <VStack
                alignItems=""
                alignContent={"center"}
                py={20}
                spacing={5}
                justifyContent={"start"}
              >
                <HStack>
                  <Box
                    borderRadius={"10px"}
                    width="100px"
                    height="100px"
                    border="1px"
                    zIndex={1}
                  >
                    <Icon boxSize={"100px"}>
                      <IoAnalyticsSharp />
                    </Icon>
                  </Box>
                  <VStack alignItems="start">
                    <Text fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      Public Endpoints
                    </Text>
                    <Text fontSize="sm">
                      Public access to our nodes for validators and users
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Box
                    borderRadius={"10px"}
                    width="100px"
                    height="100px"
                    border="1px"
                    zIndex={1}
                    textAlign="Left"
                  >
                    <Icon boxSize={"100px"}>
                      <IoServerSharp />
                    </Icon>
                  </Box>
                  <VStack alignItems="start">
                    <Text fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      White Label
                    </Text>
                    <Text fontSize="sm">
                      Extremly selective white labeling service
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Box
                    borderRadius={"10px"}
                    width="100px"
                    height="100px"
                    border="1px"
                    zIndex={1}
                    textAlign="Left"
                  >
                    <Icon boxSize={"75px"}>
                      <IoCameraSharp />
                    </Icon>
                  </Box>
                  <VStack alignItems="start">
                    <Text fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      Snapshots
                    </Text>
                    <Text fontSize="sm">
                      Daily pruned Cosmos database snapshots
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Box
                    borderRadius={"10px"}
                    width="100px"
                    height="100px"
                    border="1px"
                    zIndex={1}
                    textAlign="Left"
                  >
                    <Icon boxSize={"75px"}>
                      <IoServerSharp />
                    </Icon>
                  </Box>
                  <VStack alignItems="start">
                    <Text fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      Advising
                    </Text>
                    <Text fontSize="sm">
                      Assistance with launching and building in Cosmos
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
            <Box>
              <VStack justifyContent={"end"}>
                <Box mt={200} zIndex={1} textAlign="center">
                  <Heading
                    zIndex={0}
                    textAlign={"right"}
                    as="h1"
                    fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                    fontWeight="extrabold"
                    mb={1}
                  >
                    Services
                  </Heading>
                  <Heading
                    zIndex={1}
                    textAlign={"right"}
                    as="h1"
                    fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
                  >
                    <Text
                      as="span"
                      color={useColorModeValue("primary.500", "primary.200")}
                    >
                      Cosmos AIO
                    </Text>
                    <Box mt={3}>
                      <Divider />
                    </Box>
                  </Heading>
                  <Text
                    maxW={600}
                    textAlign={"right"}
                    mt={3}
                    fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
                  >
                    With focus on infrastructure as a service, front end/back
                    end development, and blockchain development we are able to
                    provide a wide array of services to our clients and
                    partners.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box mb={3}>
        <Divider />
      </Box>
      <Stack
        isInline={true}
        spacing={1}
        justifyContent="center"
        opacity={0.5}
        fontSize="sm"
      >
        <Text>Built with</Text>
        <Link
          href="https://cosmology.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cosmology
        </Link>
      </Stack>
    </Container>
  );
}
