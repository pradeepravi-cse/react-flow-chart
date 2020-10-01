import styled, { css } from "styled-components";
import { IConfig, INode } from "../../";

export interface INodeDefaultProps {
  className?: string;
  config: IConfig;
  node: INode;
  children: any;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onDoubleClick: (e: React.MouseEvent) => void;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
  style?: object;
  ref?: React.Ref<any>;
}

export const NodeDefault = styled.div<INodeDefaultProps>`
  position: absolute;
  transition: 0.3s ease box-shadow, 0.3s ease margin-top;
  width: 100px;
  height: 100px;
  padding: 10px;
  background: #eeeeee;
  border: 3px solid #eeeeee;
  box-shadow: inset -6px -6px 10px #ffffff, inset 3px 3px 5px #c4c4c4;
  filter: drop-shadow(5px 5px 10px #c4c4c4), drop-shadow(-4px -4px 25px #ffffff);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isSelected &&
    css`
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      margin-top: -2px;
    `}
` as any;
