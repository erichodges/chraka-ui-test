/** @jsx jsx */
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Text, useColorMode, useDisclosure } from "@chakra-ui/core";
import { css, jsx } from '@emotion/core';
import { Link } from "gatsby";
import React from "react";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={4} display="block" color='sec'>
    {children}
  </Text>
);

const DocsHeader = props => {
  const { colorMode, toggleColorMode } = useColorMode();
//   const [show, setShow] = React.useState(false);
//   const handleToggle = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding=".6rem"
      bg={colorMode === "light"? "grey.600" : "grey.800"}
      color={colorMode === "light"? "black" : "#ccc"}
      {...props}
    >
      <Flex  align="center" >
        <Box mt={1} display={{ sm: "block", md: "none" }} ref={btnRef} onClick={onOpen} css={css`cursor: pointer; padding-bottom: 2px`}>
          <svg
            fill={colorMode === "light"? "black" : "white"}
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
            <DrawerHeader>Docs</DrawerHeader>
  
            <DrawerBody>
            <Link to="/docs/test">
              Getting Started
            </Link>
            </DrawerBody>
  
            <DrawerFooter>
              Drawer Footer content
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

          <Link to='/'><Heading as="h1" size="xl" color='pri' style={{letterSpacing: '-3px'}}>
            useAuth
          </Heading>
          </Link>
        </Flex>
      </Flex>

      <Box
        display={{ xs: "none", sm: "none", md: "fle"}}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        // flexGrow={1}
      >
              
        {/* <MenuItems>Examples</MenuItems> */}
        <MenuItems>GitHub</MenuItems>
        <Box
          display={{ xs: "none", sm: "none", md: "flex" }}
          mt={{ base: 4, md: 0 }}
        >
          <IconButton
            aria-label={`Switch to ${
              colorMode === "light" ? "dark" : "light"
            } mode`}
            isRound="true"
            border-top-color="green !important"
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

export default DocsHeader;