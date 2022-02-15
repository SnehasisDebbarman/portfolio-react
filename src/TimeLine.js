import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "10th (WBBSE)",
    description: "Marks: 88.89%",
    duration: "Mar'08-Jun'14",
  },
  {
    label: "12TH SCIENCE (WBCHSE)",
    description: "Marks : 79.8%",
    duration: "Aug'14-Aug'16",
  },
  {
    label: "B. TECH CSE (MAKAUT)",
    description: "Marks: 8.53/10.00",
    duration: "Aug'16-Aug'20",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} active={true}>
            <StepLabel>
              <div style={{ color: "white" }}>
                {step.label}{" "}
                <span className="text-red-400 sf-mono float-right">
                  {step.duration}
                </span>
              </div>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
