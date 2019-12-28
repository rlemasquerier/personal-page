import React from "react"
import { Layout, SEO, SkillsList } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there !</h1>
    <p>I'm Rodolphe</p>
    <SkillsList />
  </Layout>
)

export default IndexPage
