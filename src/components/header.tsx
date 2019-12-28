import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { theme } from "../theme"

interface Props {
  siteTitle: string
}

export const Header = ({ siteTitle }: Props) => (
  <header
    style={{
      background: theme.colors.background,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: theme.colors.text,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
