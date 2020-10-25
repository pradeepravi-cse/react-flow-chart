import * as React from "react";
import {
  ExcelIcon,
  CsvIcon,
  JoinIcon,
  SetOperationIcon,
  FileIcon,
  OutputIcon,
  SummaryIcon,
  DataIcon
} from "../Icons";

export const LoadSvgIcons = (props: any) => {
  let Icon: any;
  switch (props.icon) {
    case "Csv-icon":
      Icon = <CsvIcon />;
      break;
    case "Excel-icon":
      Icon = <ExcelIcon></ExcelIcon>;
      break;
    case "Join-icon":
      Icon = <JoinIcon />;
      break;
    case "Output-icon":
      Icon = <OutputIcon></OutputIcon>;
      break;
    case "File-icon":
      Icon = <FileIcon />;
      break;
    case "SetOperation-icon":
      Icon = <SetOperationIcon></SetOperationIcon>;
      break;
    case "Summary-icon":
      Icon = <SummaryIcon></SummaryIcon>;
      break;
    case "Data-icon":
      Icon = <DataIcon></DataIcon>;
      break;
    default:
      Icon = " ";
      break;
  }
  return <React.Fragment>{Icon}</React.Fragment>;
};
