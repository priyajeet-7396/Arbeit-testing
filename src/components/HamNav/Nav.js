import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowBackwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';

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
         <Link component={Link} to="/digitaltransformation" underline="none">
            Digital Transformation & AI
            </Link>
          </Typography>
          <Typography>
          <Link component={Link} to="/humanResourceManagement" underline="none">
            Human Capital
            </Link>
          </Typography>
          <Typography>
            <Link component={Link} to="/TransformationandChangeManagement" underline="none">
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
            <Link component={Link} to="/agriculture" underline="none">
            agriculture
            </Link>
          </Typography>
          <Typography>
          <Link component={Link} to="/finance" underline="none">
            Banking & Finance
            </Link>
          </Typography>
          <Typography>
             <Link component={Link} to="/infrastructure" underline="none">
            Infrastructure
            </Link>
          </Typography>
          <Typography>
            <Link component={Link} to="/capitalMarket" underline="none">
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
          <Link component={Link} to="/finTech" underline="none">
            Fintech
            </Link>
          </Typography>     <Typography>
            <Link component={Link} to="/humancapital" underline="none">
            Human Capital
            </Link>
          </Typography>    
           <Typography>
         <Link component={Link} to="/capitalmarket" underline="none">
            Capital Market
            </Link>
          </Typography>
          <Typography>
            <Link component={Link} to="/regtech" underline="none">
            RegTech'
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
        <AccordionSummary expandIcon={<ArrowBackwardIosSharpIcon sx={{ fontSize: "0rem" }} />}>
          <Typography>
          <Link component={Link} to="/aboutus" underline="none">
            About Us
          </Link>
          </Typography>
        </AccordionSummary>
      <AccordionSummary expandIcon={<ArrowBackwardIosSharpIcon sx={{ fontSize: "0rem" }} />}>
        <Typography>
        <Link component={Link} to="/joinus" underline="none">
            Career
          </Link>
          </Typography>
      </AccordionSummary>
    </div>
  );
}