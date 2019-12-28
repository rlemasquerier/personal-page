import React from "react";
import { theme } from "../theme";

interface Props {
  logo: Logo;
}

export const IconLink = ({ logo }: Props) => {
  return (
    <a href={logo.url} target="blank" style={{ marginRight: theme.margins.L }}>
      {logo.src ? (
        <img src={logo.src} alt={logo.name} height={40} />
      ) : (
        logo.name
      )}
    </a>
  );
};
