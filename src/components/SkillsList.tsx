import React from "react"
import { IconLink } from "./IconLink"
import skills from "../../data/javascript_skills.json"
import { theme } from "../theme"

const style = {
  list: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 400,
  } as React.CSSProperties,
  item: {
    margin: "0.5em 1em",
  } as React.CSSProperties,
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,
}

export const SkillsList = () => (
  <div style={style.container}>
    <h1>JavaScript skills</h1>
    <div style={style.list}>
      {skills.map((logo: Logo) => (
        <div style={{ marginBottom: theme.margins.L }}>
          <IconLink logo={logo} />
        </div>
      ))}
    </div>
  </div>
)
