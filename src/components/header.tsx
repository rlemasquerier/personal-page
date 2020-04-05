import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { theme } from "../theme";
import { IconLink } from "../components";
import socials from "../../data/social_and_contact.json";

interface Props {
  siteTitle: string;
}

const styles = {
  headerContainer: {
    background: theme.colors.background,
    marginBottom: `1.45rem`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as "wrap",
  },
  titleContainer: {
    padding: theme.margins.M,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.colors.text,
    textDecoration: `none`,
  },
  contactContainer: {
    padding: theme.margins.M,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const Header = ({ siteTitle }: Props) => (
  <header style={styles.headerContainer} id="header">
    <div style={styles.titleContainer}>
      <h1 style={{ marginBottom: 0 }}>
        <Link to="/" style={styles.title}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div style={styles.contactContainer}>
      {socials.map(logo => {
        return <IconLink key={logo.name} logo={logo} />;
      })}
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
