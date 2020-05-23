/** @jsx jsx */
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Text, useColorMode, useDisclosure } from "@chakra-ui/core";
import { css, jsx } from '@emotion/core';
import { Link } from "gatsby";
import React from "react";
import { useAuth } from "react-use-auth";

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const { colorMode } = useColorMode();

  if (isAuthenticated()) {
    return (
      <>
        <Button onClick={logout} color={colorMode === "light"? "black" : "#ccc"}>Logout</Button>
      </>
    )
  } else {
    return (
      <>
        <Button onClick={login} color={colorMode === "light"? "black" : "#ccc"}>Login</Button>
      </>
    )
  }
}


const Header = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0"
      margin=".6rem"
      bg={colorMode === "light"? "grey.600" : "grey.800"}
      color={colorMode === "light"? "black" : "#ccc"}
      {...props}
    >
      <Flex  align="center" >
        <Box mt={1} ml={1} mr={3} display={{ sm: "block", md: "none" }} ref={btnRef} onClick={onOpen} css={css`cursor: pointer; padding-bottom: 2px`}>
          <svg
            fill={colorMode === "light"? "black" : "#ccc"}
            width="17px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Flex align="center" ml={1}>
          
          <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Header</DrawerHeader>
  
            <DrawerBody>
            <Link to="/docs/getting-started">
              Docs/Getting Started
            </Link>
            </DrawerBody>
  
            <DrawerFooter>
              Drawer Footer content here
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

          <Link to='/'><Heading as="h1" color={colorMode === "dark"? "#ccc" : "#000"} fontSize={40} m={0} style={{letterSpacing: '-3px'}}>
            useAuth
          </Heading>
          </Link>
        </Flex>
      </Flex>

      <Box
        display={{ xs: "none", sm: "none", md: "flex"}}
        width={{ sm: "full", md: "auto" }}
        alignContent="center"
        alignItems="center"
        // flexGrow={1}
      >
        <Box display="flex" color={colorMode === "light"? "black" : "#ccc"} alignContent="center" alignItems="center" mx={5}>
        <Link to="/docs/getting-started">
        <Box><Text  mt={{ base: 4, md: 0 }} mr={4} display="block">Docs &nbsp;</Text></Box>
        </Link>
        
        {/* <MenuItems>Examples</MenuItems> */}
        <Box><Text mt={{ base: 4, md: 0 }} mr={4} display="block"><a href="https://github.com/Swizec/useAuth">GitHub &nbsp;</a></Text></Box>
        <Login />
        </Box>
        <Box
          display={{ xs: "none", sm: "none", md: "flex" }}
          mt={{ base: 4, md: 0 }}
        >
          <IconButton
            aria-label={`Switch to ${
              colorMode === "light" ? "dark" : "light"
            } mode`}
            isRound="true"
            variant="ghost"
            color="current"
            ml="2"
            fontSize="20px"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "sun" : "moon"}
          />
         </Box>
      </Box>

     
    </Flex>
  );
};

export default Header;