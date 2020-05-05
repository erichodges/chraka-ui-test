import { Box, Heading, Text } from "@chakra-ui/core"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box bg="blue.800" h="94vh" w="100vw">
    <Heading as="h3" size="xl">Test Heading</Heading>
    </Box>
    <Heading as="h3" size="xl">Hi people</Heading>
    <Text fontSize="xl">Welcome to your new Gatsby site.</Text>
    <Text fontSize="xl">Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>

  </Layout>
)

export default IndexPage
