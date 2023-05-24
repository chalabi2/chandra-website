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
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
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
  import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
  import { useState } from "react";
  import ServiceButton from "./service-button";
import { MdOutlineLineWeight } from "react-icons/md";
  
  const MenuItems = ({ stackType }) => {
    const StackComponent = stackType === "HStack" ? HStack : VStack;
    const hoverBgColor = useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)");
    return (
      <StackComponent spacing={10}>
       <ServiceButton/>
      <Link href="/blog" passHref>
  <Button _hover={{
            bgColor: hoverBgColor,
          }}
           colorScheme={useColorModeValue("#b5fdff", "#013133")} variant="ghost" as="a">
    <Text fontSize="lg">Blog</Text>
  </Button>
</Link>
<Link href={"/staking"}>
        <Button
        variant={"outline"}
          fontSize="lg"
          colorScheme={useColorModeValue("#b5fdff", "#013133")}
          size={"sm"}
          _hover={{
            bgColor: hoverBgColor,
          }}
        >
          Stake With Us
        </Button>
        </Link>
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

    const hoverBgColor = useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)");
  
    return (
      <Box p={2} w="100%" borderRadius={4} zIndex={10} top="0" position="sticky" bgColor={useColorModeValue("rgba(181, 253, 255, 0.75)", "rgba(1, 49, 51, 0.75)")}>
      <Flex
        maxW="8xl"
        mx="auto" // this centers the Flex on the page
        align="center"
        zIndex={10}
        position="sticky"
        top="0"
        justifyContent="space-between"
        py={7}
      >
          <HStack spacing={4}>
            <Link href={"/"}>
              <Button
              variant="ghost"
              _hover={{
                bgColor: "transparent",
                boxShadow: "none"
              }}
              >
            <Image
              borderRadius="full"
              boxSize="75px"
              src="/logo.png"
              alt="Chandra Station"
            />
            </Button>
            </Link>
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
          variant="ghost"
          color={useColorModeValue("#013133", "#b5fdff")}
          px={2}
          mt={0}
          mr={0}
          ml={10}
          onClick={toggleColorMode}
          _hover={{
            bgColor: hoverBgColor,
          }}
          sx={{
            outlineColor: useColorModeValue("#013133", "#b5fdff"),
            outlineWidth: "1px"
          }}
        >
          <Icon
            color={useColorModeValue("#013133", "#b5fdff")}
            as={colorMode === "light" ? BsFillMoonStarsFill : BsFillSunFill}
          />
        </Button>
      </Flex>
    </Flex>
    </Box>
  );
}

export default Header;