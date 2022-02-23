import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

export default function ControlledTreeView() {
  const [expanded, setExpanded] = React.useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]);

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
          <TreeItem nodeId="2" label={<div>C</div>} />
          <TreeItem nodeId="3" label={<div>Java</div>} />
          <TreeItem nodeId="4" label={<div>Javascript</div>} />
        </TreeItem>
        <TreeItem
          nodeId="2"
          label={
            <div>
              <div className="text-red-400 sf-mono ">Library</div>
            </div>
          }
        >
          <TreeItem nodeId="4" label={<div>React</div>} />
          <TreeItem nodeId="3" label={<div>Redux</div>} />
          <TreeItem nodeId="4" label={<div>TailWind CSS</div>} />
          <TreeItem nodeId="4" label={<div>SCSS</div>} />
        </TreeItem>
        <TreeItem
          nodeId="3"
          label={
            <div>
              <div className="text-red-400 sf-mono ">Database</div>
            </div>
          }
        >
          <TreeItem nodeId="6" label={<div>Firebase</div>}></TreeItem>
        </TreeItem>
        <TreeItem
          nodeId="3"
          label={
            <div>
              <div className="text-red-400 sf-mono ">Tools</div>
            </div>
          }
        >
          <TreeItem nodeId="6" label={<div>Sharepoint Online</div>}></TreeItem>
          <TreeItem nodeId="6" label={<div>Git</div>}></TreeItem>
          <TreeItem nodeId="6" label={<div>BitBucket</div>}></TreeItem>
          <TreeItem nodeId="6" label={<div>Jira</div>}></TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
  );
}
