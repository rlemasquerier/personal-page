import React, { useEffect, useState } from "react";
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

interface Props {
  className?: string;
}

export const MainAnimation = ({ className }: Props) => {
  const [componentIsLoaded, setComponentIsLoaded] = useState(false);
  useEffect(() => {
    setComponentIsLoaded(true);
  }, []);
  return (
    <div
      style={{ height: ANIMATION_SIZE, width: ANIMATION_SIZE }}
      className={className}
    >
      {componentIsLoaded && <ReactBodymovin options={bodymovinOptions} />}
    </div>
  );
};
