import {
    Flex,
    HStack,
    VStack,
    Stack,
    Button,
    useColorModeValue,
    Icon,
    useColorMode,
    Image,
    Text,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import Link from "next/link";
  import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
  import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Box,
  } from "@chakra-ui/react";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  
  const MenuItems = ({ stackType }) => {
    const StackComponent = stackType === "HStack" ? HStack : VStack;
    return (
      <StackComponent spacing={10}>
        <Link href={"/"}>
          <Text fontSize="lg">Services</Text>
        </Link>
        <Link href={"/"}>
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
      </StackComponent>
    );
  };
  
  function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isOpen, setIsOpen] = useState(false);
  
    const displayMenu = useBreakpointValue({
      base: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    });
  
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
  
    const stackType = useBreakpointValue({
      base: "VStack",
      sm: "VStack",
      md: "VStack",
      lg: "HStack",
    });
  
    const displayDarkModeButton = useBreakpointValue({
      base: "none",
      sm: "none",
      md: "none",
      lg: "flex",
    });
  
    return (
        <Flex maxW={"8xl"} align="center" justifyContent="space-between" py={3}>
          <HStack spacing={4}>
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
            <Box display={displayMenu}>
              <MenuItems stackType={stackType} />
            </Box>
            <IconButton
              display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
              onClick={onOpen}
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay>
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader
                  fontSize={"2xl"}
                  textAlign={"center"}
                  bgColor={useColorModeValue("#b5fdff", "#013133")}
                  >Menu</DrawerHeader>
                  <DrawerBody
                  bgColor={useColorModeValue("#b5fdff", "#013133")}
                  >
                    <MenuItems stackType={stackType} />
                    <Button
                      size={"sm"}
                      variant="outline"
                      px={2}
                      mt={10}
                      ml={119}
                      onClick={toggleColorMode}
                    >
                      <Icon
                        as={  colorMode === "light"
                        ? BsFillMoonStarsFill
                        : BsFillSunFill
                    }
                  />
                </Button>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <Button
          display={displayDarkModeButton}
          size={"sm"}
          variant="outline"
          px={2}
          mt={0}
          mr={0}
          ml={10}
          onClick={toggleColorMode}
        >
          <Icon
            as={colorMode === "light" ? BsFillMoonStarsFill : BsFillSunFill}
          />
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;