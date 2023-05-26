import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";

function ProductButton() {

    const hoverBgColor = useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)");

    return (
        <Menu>
        <MenuButton
        color={useColorModeValue("#013133", "#b5fdff")}
fontSize="lg"
variant="ghost"
          as={Button}
          boxShadow="none"
          rightIcon={<ChevronDownIcon boxSize="25px" />}
          aria-label="More"
          position="absolute"
          size="md"
          variant="ghost"
          zIndex={1}
          _hover={{
            bgColor: hoverBgColor,
          }}
        
        >Products</MenuButton>
        <MenuList
        p={0} minW="0" w={'90px'}
          height="74px"
          bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
          color="white"
        >
          <MenuItem
          fontFamily="Futura"
            _hover={{
              textDecoration: "underline",
            }}
            bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
          >
            Apollo
          </MenuItem>
          <MenuItem
          fontFamily="Futura"
            _hover={{
              textDecoration: "underline",
            }}
            bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
          >
            Analytics
          </MenuItem>
          <MenuItem
          fontFamily="Futura"
            _hover={{
              textDecoration: "underline",
            }}
            bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
          >
            Bridge
          </MenuItem>
          <MenuItem
          fontFamily="Futura"
            _hover={{
              textDecoration: "underline",
            }}
            bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
          >
            Dashboard
          </MenuItem>
        </MenuList>
      </Menu>
    )
}

export default ProductButton;