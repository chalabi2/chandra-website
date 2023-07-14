import Head from "next/head";
import { Box, Divider, Text, Container, Button, Link, HStack, useColorModeValue, IconButton } from "@chakra-ui/react";

import Header from "../components/react/header";
import Intro from "../components/react/intro";
import Validating from "../components/react/validating";
import Services from "../components/react/services";
import { BsTwitter, BsGithub, BsDiscord } from "react-icons/bs";

export default function Home() {

  const hoverBG = useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")
  return (
    <>
          <Header />

    <Container maxW="8xl">
      <Head>
        <title>Chandra Station</title>
        <meta name="description" content="Validator of the lunar god" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Box
      mt={-100}
      >
      <Intro />
      </Box>
      <Validating />
      <Services />
      <Box mb={5}>
      <Divider borderColor={useColorModeValue("#013133", "#b5fdff")} />
      </Box>
      <HStack
      pb={10}

        isInline={true}
        spacing={1}
        justifyContent="space-between"
        opacity={0.5}
        fontSize="sm"
        textAlign={"center"}
      >
         <HStack
                      spacing={5}
                      alignItems="flex-start"
                    >
                        <Link
                        href="https://twitter.com/ChandraStation"
                        target="_blank"
                rel="noopener noreferrer"
                        >
                      <IconButton
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        color={useColorModeValue("#013133", "#b5fdff")}
                        isRound={true}
                        _hover={{ bg: hoverBG }}
                        icon={<BsTwitter size="28px" />}
                      />
                      </Link>
                      <Link
                      href="https://github.com/ChandraStation"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        color={useColorModeValue("#013133", "#b5fdff")}
                        isRound={true}
                        _hover={{ bg: useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)") }}
                        icon={<BsGithub size="28px" />}
                        />
                        </Link>
                        <Link
                         href="https://discord.gg/FnCvn7f7zh"
                         target="_blank"
                         rel="noopener noreferrer"
                        >
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        color={useColorModeValue("#013133", "#b5fdff")}
                        isRound={true}
                        _hover={{ bg: useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)") }}
                        icon={<BsDiscord size="28px" />}
                      />
                        </Link>
                    </HStack>
       
        <Link href={"/contact"}>
        <Button
        variant="ghost"
        >
          Contact Us
        </Button>
            </Link>
      </HStack>
    </Container>
    </>
  );
}
