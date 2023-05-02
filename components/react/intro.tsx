import {
    Flex,
    HStack,
    VStack,
    Heading,
    useColorModeValue,
    Divider,
    Box,
    Text,
  } from "@chakra-ui/react";
  import LotusFlower from "../threeJS/cube";

  import { useBreakpointValue } from "@chakra-ui/react";
  
  function Intro() {

    const flexDirection = useBreakpointValue({ base: "column", md: "row" });


    return (
      <Flex justifyContent={"space-between"}>
        <Box
          className="background-image-container"
          width="100%" // Make the container span the full width
          py={0}
        >
          <Box position="relative" zIndex={1}>
            <HStack
  maxH="600px"
  alignContent={"center"}
  py={20}
  maxW="3xl"
  justifyContent="center"
  flexDirection={flexDirection}
>
              <VStack mt={200} maxH="600px">
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
                    fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
                  >
                    Chandra Station is a multi disciplined infrastructure
                    provider, validator, and development house. We are investors,
                    programmers and thinkers looking to help push the Cosmos
                    forward.
                  </Text>
                </Box>
              </VStack>
              <LotusFlower />
            </HStack>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default Intro;
  