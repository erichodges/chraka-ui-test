import { Box, Flex, Heading, IconButton, Text, useColorMode } from "@chakra-ui/core";
import React from "react";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block" color='sec'>
    {children}
  </Text>
);

const Header = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light"? "grey.600" : "grey.800"}
      color={colorMode === "light"? "black" : "#ccc"}
      {...props}
    >
      <Flex  align="center" >
        <Box mt={1} display={{ sm: "block", md: "none" }} onClick={handleToggle}>
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
        <Flex align="center" mr={5} ml={5}>
          <Heading as="h1" size="lg" color='pri'>
            useAuth
          </Heading>
        </Flex>
      </Flex>


      <Box
        display={{ sm: show? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        // flexGrow={1}
      >
        <MenuItems>Docs</MenuItems>
        {/* <MenuItems>Examples</MenuItems> */}
        <MenuItems>GitHub</MenuItems>
        <Box
          display={{ sm: show? "block" : "none", md: "block" }}
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

export default Header;