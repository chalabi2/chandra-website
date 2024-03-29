import {
    useBreakpointValue,
    Stack,
    VStack,
    HStack,
    Icon,
    Heading,
    useColorModeValue,
    Divider,
    Box,
    Text,
    Button,
  } from "@chakra-ui/react";
import { useRouter } from "next/router";
  import {
    IoAnalyticsSharp,
    IoIdCardSharp,
    IoCameraSharp,
    IoPeopleSharp,
    IoCodeSharp
  } from "react-icons/io5";
  
  function Services() {

    const servicesOrder = useBreakpointValue({ base: 0, sm: 0, md: 1 });
    const boxesOrder = useBreakpointValue({ base: 1, sm: 1, md: 0 });
    const router = useRouter();
  
    return (
      <Box 

      mt={useBreakpointValue({base: 0, md: -300})}
      >
        <Box position="relative" zIndex={1}>
          <Stack direction={useBreakpointValue({ base: "column", md: "row" })} justifyContent={"space-between"}>
            <VStack order={boxesOrder}
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
                  onClick={() => router.push('/services?tabIndex=0')}
                    borderRadius={"10px"}
                    width="75px"
                    height="75px"
                    border="1px"
                    zIndex={1}
                    position="relative"
                  >
                    <Icon
                      boxSize={"100px"}
                      position="absolute"
                      top="5%"
                      left="5%"
                    >
                      <IoAnalyticsSharp />
                    </Icon>
                  </Box>
  
                  <VStack alignItems="start">
                    <Text onClick={() => router.push('/services?tabIndex=0')} fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      Public Endpoints
                    </Text>
                    <Text fontSize="sm">
                      Public access to our nodes for validators and users
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Box
                  onClick={() => router.push('/contact')}
                    borderRadius={"10px"}
                    width="75px"
                    height="75px"
                    border="1px"
                    zIndex={1}
                    position="relative"
                  >
                    <Icon
                      boxSize={"100px"}
                      position="absolute"
                      top="5%"
                      left="5%"
                    >
                      <IoIdCardSharp />
                    </Icon>
                  </Box>
                  <VStack alignItems="start">
                    <Text onClick={() => router.push('/contact')} fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      White Label
                    </Text>
                    <Text onClick={() => router.push('/contact')} fontSize="sm">
                      Extremly selective white labeling service
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Box
                  onClick={() => router.push('/services?tabIndex=1')}
                    borderRadius={"10px"}
                    width="75px"
                    height="75px"
                    border="1px"
                    zIndex={1}
                    position="relative"
                  >
                    <Icon
                      boxSize={"100px"}
                      position="absolute"
                      top="5%"
                      left="5%"
                    >
                      <IoCameraSharp />
                    </Icon>
                  </Box>
                  <VStack alignItems="start">
                    <Text onClick={() => router.push('/services?tabIndex=1')} fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      Snapshots
                    </Text>
                    <Text fontSize="sm">
                      Daily pruned Cosmos database snapshots
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Box
                  onClick={() => router.push('/contact')}
                    borderRadius={"10px"}
                    width="75px"
                    height="75px"
                    border="1px"
                    zIndex={1}
                    position="relative"
                  >
                    <Icon
                      boxSize={"100px"}
                      position="absolute"
                      top="5%"
                      left="5%"
                    >
                      <IoPeopleSharp />
                    </Icon>
                  </Box>
                  <VStack alignItems="start">
                    <Text onClick={() => router.push('/contact')} fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      Advising
                    </Text>
                    <Text onClick={() => router.push('/contact')} fontSize="sm">
                      Assistance with launching and building in Cosmos
                    </Text>
                  </VStack>
                </HStack>
                <HStack>
                  <Box
                  onClick={() => router.push('/contact')}
                    borderRadius={"10px"}
                    width="75px"
                    height="75px"
                    border="1px"
                    zIndex={1}
                    position="relative"
                  >
                    <Icon
                      boxSize={"100px"}
                      position="absolute"
                      top="5%"
                      left="5%"
                    >
                      <IoCodeSharp />
                    </Icon>
                  </Box>
                  <VStack alignItems="start">
                    <Text onClick={() => router.push('/contact')} fontSize={{ base: "xl", sm: "1xl", md: "2xl" }}>
                      Development
                    </Text>
                    <Text onClick={() => router.push('/contact')} fontSize="sm">
                      Specializing in application development and blockchain
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
            <Box
            >
              <VStack 
              order={servicesOrder} justifyContent={"end"}>
                <Box p={4}
                shadow={"dark-lg"}
                                            borderRadius={"4px"}
                                            bgColor={useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)")}
                mt={200} zIndex={1} textAlign="center">
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
                    <Divider borderColor={useColorModeValue("#013133", "#b5fdff")} />
                    </Box>
                  </Heading>
                  <Text
                    maxW={600}
                    textAlign={"right"}
                    mt={3}
                    fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
                  >
                    With focus on infrastructure as a service, front end/back end
                    development, and blockchain we are able to provide
                    a wide array of services to our clients and partners.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  }
  
  export default Services;
  