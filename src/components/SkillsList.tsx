import React from "react"
import { IconLink } from "./IconLink"
import skills from "../../data/skills.json"

const style = {
  list: {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    margin: "0.5em 1em",
  },
}

export const SkillsList = () => (
  <div>
    <h1>JavaScript skills</h1>
    {skills.map((logo: Logo) => (
      <IconLink logo={logo} />
    ))}
  </div>
)
