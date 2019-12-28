import React from "react"

interface Props {
  logo: Logo
}

export const IconLink = ({ logo }: Props) => {
  return (
    <a href={logo.url} target="blank">
      {logo.src ? (
        <img src={logo.src} alt={logo.name} height={40} />
      ) : (
        logo.name
      )}
    </a>
  )
}
