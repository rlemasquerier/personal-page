import React from "react";
import { ItemSlider } from "./ItemSlider";

interface Props {
  children: React.ReactNode;
}

export const ListItem = (props: Props) => {
  return (
    <div style={styles.container}>
      {props.children}
      <ItemSlider />
    </div>
  );
};

interface Styles {
  container: React.CSSProperties;
}

const styles: Styles = {
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
  },
};
