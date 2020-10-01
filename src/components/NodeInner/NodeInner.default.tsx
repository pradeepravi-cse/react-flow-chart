import * as React from "react";
import styled from "styled-components";
import { ExcelIcon } from "../Icons";
import { IConfig, INode } from "../../";

export interface INodeInnerDefaultProps {
  className?: string;
  config: IConfig;
  node: INode;
  customNodeClick?: any;
}

const Outer = styled.div``;

export const NodeInnerDefault = ({
  node,
  className,
  customNodeClick,
}: INodeInnerDefaultProps) => {
  return (
    <Outer className={className} onClick={customNodeClick}>
      <ExcelIcon></ExcelIcon>
    </Outer>
  );
};
