import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";

function ServiceButton() {

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
          ml="-100px"
          size="md"
          variant="ghost"
          zIndex={1}
          _hover={{
            bgColor: hoverBgColor,
          }}
        
        >Services</MenuButton>
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
            Endpoints
          </MenuItem>
          <MenuItem
          fontFamily="Futura"
            _hover={{
              textDecoration: "underline",
            }}
            bg={useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")}
          >
            Snapshots
          </MenuItem>
        </MenuList>
      </Menu>
    )
}

export default ServiceButton;