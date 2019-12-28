import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"
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
