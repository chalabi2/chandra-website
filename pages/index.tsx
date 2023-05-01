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
} from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useState } from "react";
import LotusFlower from "../components/threeJS/cube";
import ServerRack from "../components/threeJS/server";
export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  

  return (
      <Container maxW="8xl" mt={2}>
        <Head>
          <title>Chandra Station</title>
          <meta name="description" content="Validator of the lunar god" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/styles.css" />
        </Head>
        <Flex maxW={'8xl'}  align="center" justifyContent="space-between" py={3}>
        <HStack  spacing={4}>
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
        <Box
          className="background-image-container"
          width="100%" // Make the container span the full width
          py={100}
        >
          <Box position="relative" zIndex={1}>
            <HStack
            maxH="600px"
              alignContent={"center"}
              py={20}
              maxW="3xl"
              justifyContent="center"
            >
              <VStack
              maxH="600px"

              >
                <Box zIndex={1} ml={40} textAlign="center">
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
                    <Text textAlign={"left"} mt={10} fontSize="lg">
                      Chandra Station is a multi disciplined infrastructure
                      provider, and development house. We are investors,
                      programmers and thinkers looking to help push the Cosmos
                      forward.
                    </Text>
                  </Heading>
                </Box>
              </VStack>
              <LotusFlower />
            </HStack>
          </Box>
        </Box>
        <VStack>
          <Box mt={300} zIndex={1} ml={80} textAlign="center">
            <Heading
              zIndex={0}
              textAlign={"Right"}
              as="h1"
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
              fontWeight="extrabold"
              mb={1}
            >
              Validating the Cosmos
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
                Enterprise Grade Infrastructure
              </Text>
              <Text maxW={600} textAlign={"right"} mt={10} fontSize="lg">
                With multiple hardware deployments in the US Chandra Station
                runs and maintains low uptime, bare metal machines. Our
                deployment includes failovers and cloud based nodes on AWS, OVH
                & Akash.
              </Text>
            </Heading>
          </Box>
        </VStack>
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
