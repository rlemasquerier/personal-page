import React from "react";
import { theme } from "../../theme";
import { ListItem } from "../ListItem";

interface Experience {
  title: string;
  dates: string;
  description: string;
}

interface Props {
  experiences: Experience[];
}

export const ExperiencesList = (props: Props) => {
  return (
    <div style={styles.container}>
      {props.experiences.map(experience => (
        <ListItem>
          <div style={{ width: "100%", marginRight: theme.margins.L }}>
            <h2 style={{ marginBottom: 0 }}>{experience.title}</h2>
            <p style={styles.dates}>{experience.dates}</p>
            <p>{experience.description}</p>
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
