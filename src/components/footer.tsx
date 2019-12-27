import React from "react"

export const Footer = () => {
  return (
    <footer style={style.footerContainer}>
      <div style={style.footerTextContainer}>
        © {new Date().getFullYear()}, made with
        {` `}
        <span style={{ color: "#43bda6" }}>❤</span>
        {` with `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </footer>
  )
}

const style: any = {
  footerContainer: {
    height: 80,
    width: "100%",
    background: "#00192d",
    color: "white",
    textAlign: "center",
    display: "table",
  },
  footerTextContainer: {
    display: "table-cell",
    verticalAlign: "middle",
  },
}
