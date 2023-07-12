import {
    useBreakpointValue,
    VStack,
    Heading,
    useColorModeValue,
    Divider,
    Grid,
    GridItem,
    Flex,
    Icon,
    Box,
    Text,
    SkeletonText,
  } from "@chakra-ui/react";
import { useState, useEffect } from "react";
  import {
    IoServerSharp,
    IoBrowsersSharp,
    IoLockClosedSharp,
  } from "react-icons/io5";
import { getDelegators, getTvl } from "../queries/queries";
  
  function Validating() {
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

    const marginLeftFlex = useBreakpointValue({
        base: "center",
        sm: "center",
        md: "center",
        lg: 0,
      });

    const [totalStakers, setTotalStakers] = useState(0);

    useEffect(() => {
        getDelegators().then(setTotalStakers);
    }, []);

    const [tvl, setTvl] = useState(0);

    useEffect(() => {
        getTvl().then(setTvl);
    }, []);
  
    return (
      <VStack className="background-image-container2">
        <Box 
        shadow={"dark-lg"}
        borderRadius={"4px"}
        bgColor={useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)")}
        p={4}
        mt={useBreakpointValue({base: "400", md: "800px" })} zIndex={1} ml={0} textAlign="center">
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
            <Divider borderColor={useColorModeValue("#013133", "#b5fdff")} />
            </Box>
          </Heading>
          <Text
            maxW={900}
            textAlign={"center"}
            mt={3}
            fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
          >
            With multiple hardware deployments in the US Chandra Station runs and
            maintains high uptime, bare metal machines.
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
              <Flex p="2" height={20} textAlign={"left"} flexDirection="column">
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Total Value Staked
                </Heading>
                <Box mt={1}>
                <Divider borderColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")} />
                </Box>
                <SkeletonText 
                noOfLines={1}
                skeletonHeight="10"
                skeletonWidth="1"
                isLoaded={tvl !== 0}>
  <Text fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}>
    ${tvl}
  </Text>
</SkeletonText>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex p="2" height={20} textAlign={"left"} flexDirection="column">
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Delegators
                </Heading>
                <Box mt={1}>
                <Divider borderColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")} />
                </Box>
                <SkeletonText 
                 mt="0"
                 noOfLines={1}
                 spacing="0"
                 skeletonHeight="10"
                 skeletonWidth="1"
                isLoaded={totalStakers !== 0}>
  <Text fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}>
    {totalStakers}
  </Text>
</SkeletonText>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex p="2" height={20} textAlign={"left"} flexDirection="column">
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Networks Supported
                </Heading>
                <Box mt={1}>
                <Divider borderColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")} />
                </Box>
                <Text fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}>14</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex p="2" height={20} textAlign={"left"} flexDirection="column">
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Uptime
                </Heading>
                <Box mt={1}>
                <Divider borderColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")} />
                </Box>
                <Text fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}>~99.7%</Text>
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
            <Flex mt={useBreakpointValue({base: 20, md: 0})} p="2" width={400} textAlign={"left"} flexDirection="column" marginLeft={marginLeftFlex}>
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Hardware
                </Heading>
                <Box mb={3}>
                <Divider borderColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")} />
                </Box>
                <Text fontSize="lg">
                  Workloads vary and our wide array of hardware is fit for any
                  task. With machines ranging from 64 core AMD EPYC servers to 12
                  core Intel devices we run single thread and multi thread
                  workloads with ease.
                </Text>
                <Icon mt={8} boxSize={useBreakpointValue({base: "100px", md: "150px"})} alignSelf="flex-end">
                  <IoServerSharp />
                </Icon>
              </Flex>
            </GridItem>
  
            <GridItem rowSpan={1} colSpan={1}>
            <Flex p="2" width={400} textAlign={"left"} flexDirection="column" marginLeft={marginLeftFlex}>
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Monitoring
                </Heading>
                <Box mb={3}>
                <Divider borderColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")} />
                </Box>
                <Text fontSize="lg">
                  We monitor our infrastructure with Prometheus, Grafana,
                  Tenderduty, and on chain metrics from our nodes. We have a
                  custom dashboard that allows us to see the health of our
                  infrastructure at a glance and alerts us when things go wrong.
                </Text>
                <Icon mt={8} boxSize={useBreakpointValue({base: "100px", md: "150px"})} alignSelf="flex-end">
                  <IoBrowsersSharp />
                </Icon>
              </Flex>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
            <Flex p="2" width={400} textAlign={"left"} flexDirection="column" marginLeft={marginLeftFlex}>
                <Heading fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}>
                  Security
                </Heading>
                <Box mb={3}>
                <Divider borderColor={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")} />
                </Box>
                <Text fontSize="lg">
                  From firewall hardware to Horcrux and failover nodes we have a
                  wide array of security measures in place to ensure our
                  infrastructure is always safe. Alongside 24/7 armed security at
                  our deployment locations we are safe both online and offline.
                </Text>
                <Icon mt={8} boxSize={useBreakpointValue({base: "100px", md: "150px"})} alignSelf="flex-end">
                  <IoLockClosedSharp />
                </Icon>
              </Flex>
            </GridItem>
            <Flex></Flex>
          </Grid>
        </Box>
      </VStack>
    );
  }
  
  export default Validating;
  