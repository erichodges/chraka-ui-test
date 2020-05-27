import { Box, Heading, IconButton, useColorMode } from "@chakra-ui/core"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {

  const { colorMode } = useColorMode();
  
  return (
    <Layout>
      <SEO title="Home" />
      <Box bg={colorMode === "light"? "grey.600" : "grey.800"} h="94vh" w="100vw" display="flex" flexDir="column" alignItems="center" justifyContent="center">
        <Box>
          <Box display="flex" alignItems="center">
          <IconButton
            aria-label='Lock icon'
            isRound="true"
            variant="ghost"
            color="primary"
            padding="0"
            ml="-.3rem"
            fontSize="36px"            
            icon="lock"
          />
          <Heading as="h1" color={colorMode === "light"? "#000" : "#ccc"} fontSize={50} fontWeight='bold !important' style={{letterSpacing: '-3px'}}>useAuth</Heading>
          </Box>
          <Heading as="h2" color={colorMode === "light"? "#000" : "#ccc"} size="lg" mb={2}>Authentication for React Apps</Heading>
          <code variantcolor="red">yarn add react-use-auth</code>
        </Box>
      </Box>

    </Layout>
  )
}
export default IndexPage
