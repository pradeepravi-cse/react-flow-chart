export interface IPosition {
  x: number;
  y: number;
}

export interface ISize {
  width: number;
  height: number;
}

export interface IOffset {
  offsetLeft: number;
  offsetTop: number;
}

export interface INodeOperation {
  type: string;
  fromNode: string;
  toNode: string;
  pos:IPosition,
  ports: any
}