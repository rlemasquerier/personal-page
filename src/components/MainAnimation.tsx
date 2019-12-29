import React from "react";
import ReactBodymovin from "react-bodymovin";
import animation from "../assets/animations/office.json";

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  animationData: animation,
  toto: 3,
};

const ANIMATION_SIZE = 350;

export const MainAnimation = () => {
  return (
    <div style={{ height: ANIMATION_SIZE, width: ANIMATION_SIZE }}>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  );
};
