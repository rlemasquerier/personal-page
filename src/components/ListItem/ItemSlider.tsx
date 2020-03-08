import React from "react";
import { theme } from "../../theme";

const LINE_WIDTH = 5;
const BULLET_POINT = {
  OUTER_SIZE: 30,
  INNER_SIZE: 22,
};

export const ItemSlider = () => {
  return (
    <div style={styles.container}>
      <div style={styles.sliderLine} />
      <div style={styles.outterBulletPoint}>
        <div style={styles.innerBulletPoint}></div>
      </div>
    </div>
  );
};

interface Styles {
  container: React.CSSProperties;
  innerBulletPoint: React.CSSProperties;
  outterBulletPoint: React.CSSProperties;
  sliderLine: React.CSSProperties;
}

const styles: Styles = {
  container: {
    position: "relative",
  },
  innerBulletPoint: {
    width: BULLET_POINT.INNER_SIZE,
    height: BULLET_POINT.INNER_SIZE,
    borderRadius: BULLET_POINT.INNER_SIZE / 2,
    backgroundColor: theme.colors.innerBulletPoint,
  },
  outterBulletPoint: {
    position: "absolute",
    top: theme.margins.S,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: -(BULLET_POINT.OUTER_SIZE / 2) + LINE_WIDTH / 2,
    width: BULLET_POINT.OUTER_SIZE,
    height: BULLET_POINT.OUTER_SIZE,
    borderRadius: BULLET_POINT.OUTER_SIZE / 2,
    backgroundColor: theme.colors.primary,
  },
  sliderLine: {
    width: LINE_WIDTH,
    height: "100%",
    backgroundColor: theme.colors.primary,
  },
};
