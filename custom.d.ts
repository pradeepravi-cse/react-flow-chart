interface SvgrComponent
  extends React.Component<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const ReactComponent: SvgrComponent;

  export { ReactComponent };
}
