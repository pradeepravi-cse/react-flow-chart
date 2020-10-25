import * as React from "react";
import styled from "styled-components";
import { LoadSvgIcons } from "../Icons/LoadSvgIcons";
import { IConfig, INode } from "../../";

export interface INodeInnerDefaultProps {
  className?: string;
  config: IConfig;
  node: INode;
  customNodeClick?: any;
}
export interface NodeProps {
  icon: string;
  name: string;
  classname: string;
  id: string;
}

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .preview-Icon {
    width: 70px;
    height: 70px;
    background: #eeeeee;
    border: 3px solid #eeeeee;
    box-shadow: inset -6px -6px 10px #ffffff, inset 3px 3px 5px #c4c4c4;
    filter: drop-shadow(5px 5px 10px #c4c4c4),
      drop-shadow(-4px -4px 25px #ffffff);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .preview-Icon svg {
    height: 31px;
  }
  .click-trigger-button {
    position: absolute;
    left: calc(50% - 74px);
    width: 148px;
    height: 148px;
    z-index: 1080;
  }
  .btn {
    border: none !important;
    background: transparent !important;
  }
  .btn.btn-link-ctn.join-btn {
    position: absolute;
    left: 4%;
    top: 0%;
  }
  .btn.btn-link-ctn.copy-btn {
    position: absolute;
    top: 0%;
    right: 0;
  }
  .btn.btn-link-ctn.output-btn {
    position: absolute;
    bottom: 13%;
    left: -7%;
  }
  .btn.btn-link-ctn.union-btn {
    position: absolute;
    right: -7%;
    bottom: 13%;
  }
  .btn.btn-link-ctn svg {
    width: 100%;
    height: 17px;
    margin-bottom: 1px;
  }
  .nodeItem:hover .click-trigger-button .btn.btn-link-ctn.union-btn {
    display: inline-block !important;
  }
  .nodeItem:hover .click-trigger-button .btn.btn-link-ctn.output-btn {
    display: inline-block !important;
  }
  .nodeItem:hover .click-trigger-button .btn.btn-link-ctn.copy-btn {
    display: inline-block !important;
  }
  .nodeItem:hover .click-trigger-button .btn.btn-link-ctn.join-btn {
    display: inline-block !important;
  }
`;

export const NodeInnerDefault = ({
  node,
  className,
  customNodeClick,
}: INodeInnerDefaultProps) => {
  return node.id === "output-data-icon" ||
  node.id === "OutputSummaryIcon" ? (
   
  <button className="Toolbox__Button " name={node.id}>
    <LoadSvgIcons icon={node.type} />
  </button>
  
) :(
    <Outer className={"nodeItem " + className} onClick={customNodeClick}>
      <div className={"preview-Icon"}>
        <LoadSvgIcons icon={node.type}></LoadSvgIcons>
      </div>
      
    </Outer>
  );
};


