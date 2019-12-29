declare module "react-bodymovin" {
  export default class ReactBodymovin extends React.Component<
    ReactBodymovinProps
  > {}

  interface ReactBodymovinProps {
    options: ReactBodymovinOptions;
  }

  interface ReactBodymovinOptions {
    loop: boolean;
    autoplay: boolean;
    prerender: boolean;
    animationData: any;
  }
}
