import * as React from "react";
import Box from "@mui/material/Box";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

export default function ControlledTreeView() {
  const expanded = ["1", "2", "3", "4"];

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}>
      <Box sx={{ mb: 1 }}></Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        multiSelect
      >
        <TreeItem
          nodeId="1"
          label={
            <div>
              {" "}
              <div className="text-red-400 sf-mono ">Programming Language</div>
            </div>
          }
        >
          <TreeItem nodeId="11" label={<div>C</div>} />
          <TreeItem nodeId="12" label={<div>Java</div>} />
          <TreeItem nodeId="13" label={<div>Javascript</div>} />
        </TreeItem>
        <TreeItem
          nodeId="2"
          label={
            <div>
              <div className="text-red-400 sf-mono ">Library</div>
            </div>
          }
        >
          <TreeItem nodeId="21" label={<div>React</div>} />
          <TreeItem nodeId="22" label={<div>React Native</div>} />
          <TreeItem nodeId="23" label={<div>Expo</div>} />
          <TreeItem nodeId="24" label={<div>Redux</div>} />
          <TreeItem nodeId="25" label={<div>TailWind CSS</div>} />
          <TreeItem nodeId="26" label={<div>SCSS</div>} />
          <TreeItem nodeId="27" label={<div>Material UI</div>} />
        </TreeItem>
        <TreeItem
          nodeId="3"
          label={
            <div>
              <div className="text-red-400 sf-mono ">Database</div>
            </div>
          }
        >
          <TreeItem nodeId="31" label={<div>Firebase</div>}></TreeItem>
        </TreeItem>
        <TreeItem
          nodeId="4"
          label={
            <div>
              <div className="text-red-400 sf-mono ">Tools</div>
            </div>
          }
        >
          <TreeItem nodeId="42" label={<div>Git</div>}></TreeItem>
          <TreeItem nodeId="43" label={<div>BitBucket</div>}></TreeItem>
          <TreeItem nodeId="44" label={<div>Jira</div>}></TreeItem>
          <TreeItem nodeId="45" label={<div>Azure DevOps</div>}></TreeItem>
          <TreeItem nodeId="42" label={<div>Visual Studio Code</div>}></TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  );
}
