import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

const steps = [
  {
    label: "10th (WBBSE)",
    description: "Marks: 88.89%",
    duration: "Mar'08-Jun'14",
    institute: "Barnan High School",
  },
  {
    label: "12TH SCIENCE (WBCHSE)",
    description: "Marks : 79.8%",
    duration: "Aug'14-Aug'16",
    institute: "Bhogpur K. M.  High School",
  },
  {
    label: "B. TECH CSE (MAKAUT)",
    description: "Marks: 8.53/10.00",
    duration: "Aug'16-Aug'20",
    institute: "Bengal Institute of Technology",
  },
];

export default function VerticalLinearStepper() {
  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} active={true}>
            <StepLabel className="flex justify-around w-[50vw]">
              <div style={{ color: "white" }} className="sf-mono float-left">
                {step.label}{" "}
              </div>
              <span className="text-red-400 sf-mono float-right">
                {step.duration}
              </span>
              <div style={{ color: "white" }} className="sf-mono float-left">
                {""}
              </div>
            </StepLabel>
            <StepContent>
              <p className="text-slate-500 sf-mono ">{step.description}</p>
              <p className="text-slate-500 sf-mono ">{step.institute}</p>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
