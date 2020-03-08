import React from "react";
import {
  Layout,
  SEO,
  SkillsList,
  MainAnimation,
  ExperiencesList,
} from "../components";
import jsSkills from "../../data/javascript_skills.json";
import devopSkills from "../../data/devops_skills.json";
import experiences from "../../data/experiences.json";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={styles.welcomeContainer}>
      <h1>Hi there!</h1>
      <p>I'm Rodolphe</p>
      <p style={{ maxWidth: 700, textAlign: "center" }}>
        I'm a software engineer, focused on web and mobile apps development
        using leading-edge technologies, with a strong focus on React-Native.{" "}
        <br />
        <br /> I am particularly interested in development best practices, using
        modern frameworks and architectures, to get projects done fast and
        efficiently while keeping code quality as a top priority.{" "}
      </p>
    </div>
    <div style={styles.skillsContainer}>
      <SkillsList title="JavaScript Fullstack" logoList={jsSkills} />
      <MainAnimation />
      <SkillsList title="DevOps" logoList={devopSkills} />
    </div>
    <ExperiencesList experiences={experiences} />
  </Layout>
);

interface Styles {
  skillsContainer: React.CSSProperties;
  welcomeContainer: React.CSSProperties;
}

const styles: Styles = {
  skillsContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default IndexPage;
