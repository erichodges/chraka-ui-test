import { Box, useColorMode } from "@chakra-ui/core"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {

  const { colorMode } = useColorMode();

return (
  <Layout>
    <SEO title="Home" />
    <Box bg={colorMode === "light"? "grey.600" : "grey.800"} h="94vh" w="100vw">    
    </Box>

  </Layout>
)
}
export default IndexPage
