import { Heading, Text } from "@chakra-ui/core"
import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading as="h3" size="xl">Hi people</Heading>
    <Text fontSize="xl">Welcome to your new Gatsby site.</Text>
    <Text fontSize="xl">Now go build something great.</Text>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
