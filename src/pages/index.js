import { Box, Heading, Text } from "@chakra-ui/core"
import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box bg="blue.800" h="91vh" w="100vw">
    <Heading as="h3" size="xl">Test Heading</Heading>
    </Box>
    <Heading as="h3" size="xl">Hi people</Heading>
    <Text fontSize="xl">Welcome to your new Gatsby site.</Text>
    <Text fontSize="xl">Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/docs/">Go to docs</Link>
  </Layout>
)

export default IndexPage
