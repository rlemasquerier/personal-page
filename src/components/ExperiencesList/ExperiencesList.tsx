import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { theme } from "../../theme";
import { ListItem } from "../ListItem";

interface Experience {
  node: {
    frontmatter: {
      title: string;
      date: string;
    };
    html: string;
  };
}

export const ExperiencesList = () => {
  const data = useStaticQuery(graphql`
    query ExperiencesQuery {
      experiences: allMarkdownRemark(
        sort: { order: DESC, fields: [fileAbsolutePath] }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);
  const experiences = data.experiences.edges;
  return (
    <div style={styles.container}>
      {experiences.map((experience: Experience) => (
        <ListItem key={experience.node.frontmatter.title}>
          <div style={{ width: "100%", marginRight: theme.margins.L }}>
            <h2 style={{ marginBottom: 0 }}>
              {experience.node.frontmatter.title}
            </h2>
            <p style={styles.dates}>{experience.node.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: experience.node.html }} />
          </div>
        </ListItem>
      ))}
    </div>
  );
};

interface Styles {
  container: React.CSSProperties;
  dates: React.CSSProperties;
}

const styles: Styles = {
  container: {
    margin: theme.margins.L,
  },
  dates: {
    fontStyle: "italic",
    color: theme.colors.subtitle,
  },
};
