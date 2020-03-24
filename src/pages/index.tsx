import React from "react";
import { graphql } from "gatsby";
import {
  Layout,
  SEO,
  SkillsList,
  MainAnimation,
  ExperiencesList,
} from "../components";
import jsSkills from "../../data/javascript_skills.json";
import devopSkills from "../../data/devops_skills.json";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div style={styles.welcomeContainer}>
        <h1>Hi there!</h1>
        <p>I'm Rodolphe</p>
        <p style={{ maxWidth: 700, textAlign: "center" }}>
          I'm a software engineer, focused on web and mobile apps development
          using leading-edge technologies, with a strong focus on React-Native.{" "}
          <br />
          <br /> I am particularly interested in development best practices,
          using modern frameworks and architectures, to get projects done fast
          and efficiently while keeping code quality as a top priority.{" "}
        </p>
      </div>
      <div style={styles.skillsContainer} className="skills">
        <SkillsList
          title="JavaScript Fullstack"
          logoList={jsSkills}
          className="skills-js"
        />
        <MainAnimation className="mainAnimation" />
        <SkillsList
          title="DevOps"
          logoList={devopSkills}
          className="skills-devops"
        />
      </div>
      <ExperiencesList />
    </Layout>
  );
};

interface Styles {
  skillsContainer: React.CSSProperties;
  welcomeContainer: React.CSSProperties;
}

const styles: Styles = {
  skillsContainer: {
    width: "100%",
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default IndexPage;
