import React from "react";
import { Layout, SEO, SkillsList, MainAnimation } from "../components";
import jsSkills from "../../data/javascript_skills.json";
import devopSkills from "../../data/devops_skills.json";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: "flex" }}>
      <SkillsList title="JavaScript Stack" logoList={jsSkills} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Hi!</h1>
        <p>I'm Rodolphe</p>
        <MainAnimation />
      </div>
      <SkillsList title="DevOps" logoList={devopSkills} />
    </div>
  </Layout>
);

export default IndexPage;
