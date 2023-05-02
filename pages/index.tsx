import Head from "next/head";
import { Box, Divider, Text, Stack, Container, Link } from "@chakra-ui/react";

import Header from "../components/react/header";
import Intro from "../components/react/intro";
import Validating from "../components/react/validating";
import Services from "../components/react/services";

export default function Home() {
  return (
    <Container maxW="8xl" mt={2}>
      <Head>
        <title>Chandra Station</title>
        <meta name="description" content="Validator of the lunar god" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Header />
      <Intro />
      <Validating />
      <Services />
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
