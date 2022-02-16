import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "rgb(248,113,113)",
  },
}));

// Inspired by the former Facebook spinners.

export default function CustomizedProgressBars() {
  return (
    <div style={{ paddingTop: "200px", paddingRight: "50px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <div className="pt-1  text-slate-400  sf-mono ">Javascript</div>
        <BorderLinearProgress variant="determinate" value={85} />
        <br />
        <div className="pt-1 text-slate-400   sf-mono ">CSS</div>
        <BorderLinearProgress variant="determinate" value={70} />
        <br />
        <div className="pt-1 text-slate-400  sf-mono ">React</div>
        <BorderLinearProgress variant="determinate" value={76} />
        <br />
        <div className="pt-1 text-slate-400 sf-mono ">Redux</div>
        <BorderLinearProgress variant="determinate" value={70} />
      </Box>
    </div>
  );
}
