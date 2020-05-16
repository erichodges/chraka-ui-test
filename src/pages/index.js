import { Box, Heading, IconButton, useColorMode } from "@chakra-ui/core"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {

  const { colorMode } = useColorMode();

return (
  <Layout>
    <SEO title="Home" />
    <Box bg={colorMode === "light"? "grey.600" : "grey.800"} h="94vh" w="100vw" display="flex" flexDir="column" alignItems="center" justifyContent="center" color={colorMode === "light"? "black" : "#ccc"}>
      <Box>
        <Box display="flex" alignItems="center">
        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          isRound="true"
          variant="ghost"
          color="current"
          padding="0"
          ml="-.3rem"
          fontSize="36px"            
          icon="lock"
        />
        <Heading as="h1" size="2xl" color={colorMode === "light"? "black" : "#ccc"} style={{letterSpacing: '-3px'}}>useAuth</Heading>
        </Box>
        <Heading as="h2" size="lg" mb={2} color={colorMode === "light"? "black" : "#ccc"}>Authentication for React Apps</Heading>
        <code>yarn add react-use-auth</code>
      </Box>
    </Box>

  </Layout>
)
}
export default IndexPage
