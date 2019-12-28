import React from "react"
import { Layout, SEO, SkillsList } from "../components"
import jsSkills from "../../data/javascript_skills.json"
import devopSkills from "../../data/devops_skills.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi there !</h1>
    <p>I'm Rodolphe</p>
    <SkillsList title="JavaScript Stack" logoList={jsSkills} />
    <SkillsList title="DevOps" logoList={devopSkills} />
  </Layout>
)

export default IndexPage
