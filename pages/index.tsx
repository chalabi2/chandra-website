import Head from "next/head";
import { Box, Divider, Text, Stack, Container, Link, HStack, Spacer, Wrap, Image, useColorModeValue, button } from "@chakra-ui/react";

import Header from "../components/react/header";
import Intro from "../components/react/intro";
import Validating from "../components/react/validating";
import Services from "../components/react/services";

export default function Home() {
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
      mt={-120}
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
        <Wrap>
              <Link
                href="https://github.com/ChandraStation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  borderRadius="full"
                  src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                  alt="GitHub Logo"
                  filter="grayscale(50%)"
                  opacity="0.5"
                  boxSize="30px"
                />
              </Link>
              <Spacer />
              <Link
                href="https://discord.gg/FnCvn7f7zh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  borderRadius="full"
                  src="https://avatars.githubusercontent.com/u/1965106?s=200&v=4"
                  alt="GitHub Logo"
                  filter="grayscale(100%)"
                  opacity="0.5"
                  boxSize="30px"
                />
              </Link>
              <Spacer />
              <Link
                href="https://twitter.com/ChandraStation"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  borderRadius="full"
                  src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                  alt="GitHub Logo"
                  filter="grayscale(100%)"
                  opacity="0.5"
                  boxSize="30px"
                />
              </Link>
            </Wrap>
        <Link
          href="https://cosmology.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with Cosmology
        </Link>
        <Link href={"/contact"}>
        <Text
              as={button}
              textAlign="center"
              fontSize={"lg"}
            >
             Contact Us
            </Text>
            </Link>
      </HStack>
    </Container>
    </>
  );
}
