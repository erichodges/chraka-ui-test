import { Box, Button, Heading, IconButton, useColorMode } from "@chakra-ui/core";
import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (props) => {

  const { colorMode } = useColorMode();
  
  const codeStyleLight = {
    fontFamily: "Menlo, monospace",
    color: "#416B9C"
  }

  const codeStyleDark = {
    fontFamily: "Menlo, monospace",
    color: "#9DDDFF"
  }

  const logoStyle = {
    letterSpacing: '-4px',
    font: '600 3.2rem Asap'
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Box bg={colorMode === "light"? "gray.50" : "gray.900"} h="94vh" w="100vw" display="flex" flexDir="column" alignItems="center" justifyContent="center">
        <Box>
          <Box display="flex" alignItems="center" mt="-10rem">
          <IconButton
            icon="lock"
            aria-label='Lock icon'
            isRound="true"
            variant="ghost"
            color={colorMode === "light"? "#00961A" : "#00961A"}
            padding="0"
            ml="-.3rem"
            fontSize="36px"            
          />
          <Heading as="h1" color={colorMode === "light"? "#000" : "#ccc"} fontSize={50} style={logoStyle}>useAuth</Heading>
          </Box>
          <Heading as="h2" color={colorMode === "light"? "#000" : "#ccc"} size="lg" mb={2}>Authentication for React Apps</Heading>
          <span style={colorMode === "light"? codeStyleLight : codeStyleDark}>yarn add react-use-auth</span>
          <br />
          <span style={colorMode === "light"? codeStyleLight : codeStyleDark}>npm i react-use-auth</span>          
          <br />
          <Link to="/docs/getting-started">
          <Button size="lg" mt={4} bg="#008D19" color="#fff" _hover={{ bg: "#00A51D" }} rightIcon="arrow-forward" >Get Started</Button>
          </Link>
        </Box>
      </Box>

    </Layout>
  )
}
export default IndexPage
