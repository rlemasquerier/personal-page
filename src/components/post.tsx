import React from "react";
import { Image } from ".";

const POST_SIZE = 300;

interface Props {
  url: string;
  imageName: string;
}

export const Post = (props: Props) => {
  const { url, imageName } = props;
  return (
    <div style={style.container}>
      <a href={url} target="_blank">
        <div style={style.image}>
          <Image name={imageName} />
        </div>
        <div style={style.title}>
          Learn Swift From the Standard Library: A Deep Dive Example
        </div>
      </a>
    </div>
  );
};

interface Style {
  container: React.CSSProperties;
  image: React.CSSProperties;
  title: React.CSSProperties;
}

const style: Style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: POST_SIZE,
    marginBottom: 50,
  },
  image: {
    width: POST_SIZE,
    overflow: "hidden",
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
  },
};
