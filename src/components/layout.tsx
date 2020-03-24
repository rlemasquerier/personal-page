/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { theme } from "../theme";

import "../style/layout.css";
import "../style/skills.css";

interface Props {
  children: React.ReactNode;
}

const styles = {
  mainContainer: {
    padding: theme.margins.L,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  } as React.CSSProperties,
};

export const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main style={styles.mainContainer}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
