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
    Skeleton,
    SkeletonCircle,
  } from "@chakra-ui/react";
  import { useState } from "react"

  import { useBreakpointValue } from "@chakra-ui/react";
  type FlexDirection = 'row' | 'column';
  
  function Intro() {

    const flexDirection = (useBreakpointValue({ base: "column", md: "row" }) as FlexDirection) || 'column';


    const [isLoading, setIsLoading] = useState(true);

    const handleLoad = () => {
        // Set loading to false when the LotusFlower component has loaded
        setIsLoading(false);
    };


    return (
      <Flex justifyContent={"center"} alignItems={"center"}>
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

  justifyContent="center"
  flexDirection={flexDirection}
>
              <VStack mt={useBreakpointValue({lg: 300, md: 400, sm: 400, base: 300})} maxH="600px">
               <Box 

    justifyContent="center"
    shadow={"dark-lg"}
    borderRadius={"4px"}
    bgColor={useColorModeValue("#c4fdff", "#012729")}
    p={4} 
    w={useBreakpointValue({lg: "900px", md: "600px", sm: "425pxpx" })}

>
                  <Heading
                    zIndex={0}
textAlign={"center"}
                    as="h1"
                    fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
                    fontWeight="extrabold"
                    mb={1}
                  >
                    Chandra Station
                  </Heading>
                  <Heading
                    zIndex={1}
                    as="h1"
                    fontSize={{ base: "1xl", sm: "2xl", md: "3xl" }}
                    textAlign={"center"}
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
                  <Box display="flex" justifyContent="center" w="100%">
        <Text
            maxW={600}
            mt={3}
            fontSize={{ base: "lg", sm: "2xl", md: "3xl" }}
        >
                    Chandra Station, a multifaceted infrastructure provider and validator. We combine investment expertise with software development to help drive the evolution of the Cosmos ecosystem.
                  </Text>
                  </Box>
                </Box>
              </VStack>
            </HStack>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default Intro;
  