import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowBackwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:before": {
    display: "none"
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowBackwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)"
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Capabilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href="/digitaltransformation" underline="none">
            Digital Transformation & AI
            </Link>
          </Typography>
          <Typography>
            <Link href="/humanResourceManagement" underline="none">
            Human Capital
            </Link>
          </Typography>
          <Typography>
            <Link href="/TransformationandChangeManagement" underline="none">
            Transformation & Change Management
            </Link>
          </Typography>
        
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Industry</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            <Link href="/agriculture" underline="none">
            agriculture
            </Link>
          </Typography>
          <Typography>
            <Link href="/finance" underline="none">
            Banking & Finance
            </Link>
          </Typography>
          <Typography>
            <Link href="/infrastructure" underline="none">
            Infrastructure
            </Link>
          </Typography>
          <Typography>
            <Link href="/capitalMarket" underline="none">
            Capital Market
            </Link>
          </Typography>
    
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Solutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            <Link href="/inTech" underline="none">
            Fintech
            </Link>
          </Typography>     <Typography>
            <Link href="/humancapital" underline="none">
            Human Capital
            </Link>
          </Typography>    
           <Typography>
            <Link href="/capitalmarket" underline="none">
            Capital Market
            </Link>
          </Typography>
          <Typography>
            <Link href="/regtech" underline="none">
            RegTech'
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
        <AccordionSummary expandIcon={<ArrowBackwardIosSharpIcon sx={{ fontSize: "0rem" }} />}>
          <Typography>
            <Link href="aboutus" underline="none">
                About Us
            </Link>
          </Typography>
        </AccordionSummary>
      <AccordionSummary expandIcon={<ArrowBackwardIosSharpIcon sx={{ fontSize: "0rem" }} />}>
        <Typography>
            <Link href="joinus" underline="none">
                Contact Us
            </Link>
          </Typography>
      </AccordionSummary>
    </div>
  );
}