/** @jsx jsx */
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Stack, Text, useColorMode, useDisclosure } from "@chakra-ui/core";
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
  
  const iconButtonStyle = {
    outline: 'none',
    boxShadow: 'none'
  }

  return (
    
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      margin="0"
      padding=".6rem"
      bg={colorMode === "light"? "gray.50" : "gray.900"}
      color={colorMode === "light"? "black" : "#ccc"}
      {...props}
    >
      <Flex  align="center" >
        <Box mt={3} ml={1} mr={3} display={{ sm: "block", md: "none" }} ref={btnRef} onClick={onOpen} css={css`cursor: pointer; padding-bottom: 2px`}>
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
        {/* ====== Drawer Section ====== */}
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
            <DrawerHeader><b>Docs</b></DrawerHeader>
              
            <DrawerBody>
              <Stack spacing={2}>
                <Link to="/docs/getting-started">
                  <span><b>Getting Started</b></span>
                </Link>
                <br />
                <Link to="/docs/auth/">
                  <b>Auth Provider</b>
                </Link>
                <br />
                <Link to="/docs/callback">
                  <b>Callback Page</b>
                </Link>
                <br />
                <Link to="/docs/enjoy">
                  <b>Enjoy</b>
                </Link>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter>
              {/* Drawer Footer content here */}
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        {/* ====== End Drawer Section ====== */}
        
          <Link to='/'><Heading as="h1" color={colorMode === "light"? "#000" : "#ccc"} fontSize={40} m={0} style={{letterSpacing: '-3px'}}>
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
            style={iconButtonStyle}
            icon={colorMode === "light" ? "moon" : "sun"}
            onClick={toggleColorMode}
            isRound="true"
            variant="ghost"
            color="current"
            ml="2"
            fontSize="20px"
            aria-label={`Switch to ${
              colorMode === "light" ? "dark" : "light"
              } mode`
            }            
          />          
         </Box>
      </Box>

     
    </Flex>
  );
};

export default Header;