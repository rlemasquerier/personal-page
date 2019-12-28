/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import { theme } from "./src/theme"

export const onClientEntry = () => {
  window.onload = () => {
    document.documentElement.style.setProperty(
      "--background-color",
      theme.colors.background
    )
    document.documentElement.style.setProperty(
      "--dark-background-color",
      theme.colors.darkBackground
    )
    document.documentElement.style.setProperty(
      "--primary-color",
      theme.colors.primary
    )
  }
}
