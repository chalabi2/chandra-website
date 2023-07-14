import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue, useBreakpointValue } from "@chakra-ui/react";

import { useRouter } from 'next/router';

function ServiceButton() {
  const router = useRouter();
    const hoverBgColor = useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)");
    const serviceLocation = useBreakpointValue({ lg: -100, md: 5, sm: 5 });
    const serviceBackgroundFill = useColorModeValue("rgba(1, 49, 51)", "rgba(181, 253, 255)")
    const serviceBackgroundTrans = useColorModeValue("rgba(1, 49, 51, 0.25)", "rgba(181, 253, 255, 0.25)")
    const serviceBackground = useBreakpointValue({lg: serviceBackgroundTrans, md: serviceBackgroundFill, sm: serviceBackgroundFill})
    const menuButtonProp = useColorModeValue("#013133", "#b5fdff");
    

    return (
        <Menu>
        <MenuButton as={Button as any}
        color={menuButtonProp}
fontSize="lg"
variant="ghost"

          boxShadow="none"
          rightIcon={<ChevronDownIcon boxSize="25px" />}
          aria-label="More"
          position="absolute"
          ml={serviceLocation}
          size="md"
          zIndex={1}
          _hover={{
            bgColor: hoverBgColor,
          }}
        
        >Services</MenuButton>
        <MenuList
        p={0} minW="0" w={'90px'}
          height="74px"
          bg={serviceBackground}
          color="white"
        >
          <MenuItem
           onClick={() => router.push('/services?tabIndex=0')}
          fontFamily="Futura"
            _hover={{
              textDecoration: "underline",
            }}
            bg={hoverBgColor}
          >
            Endpoints
          </MenuItem>
          <MenuItem
            onClick={() => router.push('/services?tabIndex=1')}
          fontFamily="Futura"
            _hover={{
              textDecoration: "underline",
            }}
            bg={hoverBgColor}
          >
            Snapshots
          </MenuItem>
        </MenuList>
      </Menu>
    )
}

export default ServiceButton;