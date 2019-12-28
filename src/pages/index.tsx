import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { SkillsList } from "../components/SkillsList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there !</h1>
    <p>I'm Rodolphe</p>
    <SkillsList />
  </Layout>
)

export default IndexPage
