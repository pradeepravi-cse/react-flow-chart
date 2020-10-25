import React from "react";
import {LoadSvgIcons} from    "../Icons/LoadSvgIcons";

export const ToolBox = () => {
    return (
        <div className="Toolbox p-4">
             <button className="Toolbox__Button mr-4">
                <LoadSvgIcons icon="Data-icon"></LoadSvgIcons>
            </button>
        </div>
    );
}