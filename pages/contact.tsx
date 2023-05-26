import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link,
    useColorModeValue
  } from "@chakra-ui/react"
  import {
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from "react-icons/md"
  import { BsGithub, BsDiscord, BsPerson, BsTwitter } from "react-icons/bs"
import Header from "../components/react/header"
  
  export default function Contact() {

    const hoverBgColor = useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)");
    
    return (
        <>
        <Header/>
      <Container
       bg={useColorModeValue("#b5fdff", "#013133")} minH="100vh" height="full" maxW="full" maxH="full" centerContent>
        <Flex
                  mt={20}
        alignItems="center"  justifyContent="center" w="100%" h="100%"
        >
          <Box
          borderWidth={1}
          borderRadius="lg"
          borderColor={useColorModeValue("#013133", "#b5fdff")}
            bg={useColorModeValue("#b5fdff", "#013133")}
            color="white"
            alignItems="center"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box justifyContent="center" p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading
                    color={useColorModeValue("#013133", "#b5fdff")}
                    >Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue("#013133", "#b5fdff")}>
                      Get in touch
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="300px"
                          variant="ghost"
                          color={useColorModeValue("#013133", "#b5fdff")}
                          _hover={{ border: "2px solid ", outline: useColorModeValue("#013133", "#b5fdff") }}
                          leftIcon={<MdEmail color={useColorModeValue("#013133", "#b5fdff")} size="20px" />}
                        >
                          chalabi@chandrastation.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color={useColorModeValue("#013133", "#b5fdff")}
                          _hover={{ border: "2px solid " }}
                          leftIcon={<MdLocationOn color={useColorModeValue("#013133", "#b5fdff")} size="20px" />}
                        >
                          Phoenix, Arizona
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="twitter"
                        variant="ghost"
                        size="lg"
                        color={useColorModeValue("#013133", "#b5fdff")}
                        isRound={true}
                        _hover={{ bg: useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)") }}
                        icon={<BsTwitter size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        color={useColorModeValue("#013133", "#b5fdff")}
                        isRound={true}
                        _hover={{ bg: useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)") }}
                        icon={<BsGithub size="28px" />}
                        >
                          <Link href="https://github.com/ChandraStation" ></Link>
                        </IconButton>
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        color={useColorModeValue("#013133", "#b5fdff")}
                        isRound={true}
                        _hover={{ bg: useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)") }}
                        icon={<BsDiscord size="28px" />}
                      >
                        <Link href="" ></Link>
                      </IconButton>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box 
                  
                  borderWidth={1}
      borderRadius="lg"
      borderColor={useColorModeValue("#013133", "#b5fdff")}>
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel
                          color={useColorModeValue("#013133", "#b5fdff")}
                          >Your Name</FormLabel>
                          <InputGroup borderColor={useColorModeValue("#013133", "#b5fdff")}>
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color={useColorModeValue("#013133", "#b5fdff")} />}
                            />
                            <Input color={useColorModeValue("#013133", "#b5fdff")} type="text" size="md" _active={{
                                borderColor: useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")
                            }} />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel
                          color={useColorModeValue("#013133", "#b5fdff")}
                          >Email</FormLabel>
                          <InputGroup borderColor={useColorModeValue("#013133", "#b5fdff")}>
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color={useColorModeValue("#013133", "#b5fdff")}/>}
                            />
                            <Input color={useColorModeValue("#013133", "#b5fdff")} type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel
                          color={useColorModeValue("#013133", "#b5fdff")}
                          >Message</FormLabel>
                          <Textarea
                          color={useColorModeValue("#013133", "#b5fdff")}
                            borderColor={useColorModeValue("#013133", "#b5fdff")}
                            _hover={{
                              borderRadius: useColorModeValue("#013133", "#b5fdff")
                            }}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            color={useColorModeValue("#b5fdff", "#013133")}
                            sx={{
                                background: useColorModeValue("#013133", "#b5fdff")
                            }}
                            _hover={{
                                bgColor: hoverBgColor,
                              }}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      </>
    )
  }