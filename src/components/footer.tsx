import React from "react";
import { theme } from "../theme";

export const Footer = () => {
  return (
    <footer style={style.footerContainer}>
      <div style={style.footerTextContainer}>
        © {new Date().getFullYear()} - Rodolphe Lemasquerier - Made with
        {` `}
        <span style={{ color: theme.colors.primary }}>❤</span>
        {` with `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  );
};

const style: any = {
  footerContainer: {
    height: 80,
    width: "100%",
    background: theme.colors.darkBackground,
    color: theme.colors.text,
    textAlign: "center",
    display: "table",
  },
  footerTextContainer: {
    display: "table-cell",
    verticalAlign: "middle",
  },
};
