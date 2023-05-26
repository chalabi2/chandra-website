import {
    Flex,
    HStack,
    VStack,
    Heading,
    useColorModeValue,
    Divider,
    Box,
    Text,
    useColorMode,
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
          <Box 
          position="relative" zIndex={1}>
            <HStack
  maxH="600px"
  alignContent={"center"}
  py={-10}
  maxW="3xl"
  justifyContent="center"
  flexDirection={flexDirection}
>
              <VStack mt={400} maxH="600px">
                <Box 
                shadow={"dark-lg"}
                borderRadius={"4px"}
                bgColor={useColorModeValue("#c4fdff", "#012729")}
                p={4}
                zIndex={1} textAlign="center">
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
  <Divider borderColor={useColorModeValue("#013133", "#b5fdff")} />
</Box>
                  </Heading>
                  <Text
                    maxW={600}
                    textAlign={"left"}
                    mt={3}
                    fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
                  >
                    Chandra Station, a multifaceted infrastructure provider and validator, combines investment expertise with software development skill to help drive the evolution of the Cosmos ecosystem.
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
  