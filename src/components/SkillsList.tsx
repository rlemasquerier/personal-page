import React from "react";
import { IconLink } from "./IconLink";
import { theme } from "../theme";

interface Props {
  title: string;
  logoList: Logo[];
}

export const SkillsList = ({ logoList, title }: Props) => (
  <div style={style.container}>
    <h1>{title}</h1>
    <div style={style.list}>
      {logoList.map((logo: Logo) => (
        <div key={logo.name} style={{ marginBottom: theme.margins.L }}>
          <IconLink logo={logo} />
        </div>
      ))}
    </div>
  </div>
);

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
};
