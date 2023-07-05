import * as React from "react";

// import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
import Menu from "./Nav";
import CustomMenu from "./menuitems.js";
// import Link from '@mui/material/Link';
import logoImage from '../../assets/logo.png';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';


const drawerWidth = 240; 
const menuItems1 = [
  { text: 'Digital Transformation & Ai', link: '/digitaltransformation' },
  { text: 'Human Capital', link: '/humanResourceManagement' },
  { text: 'Transformat & Change Management', link: '/TransformationandChangeManagement' },
];
const menuItems2 = [
  { text: 'Agriculture', link: '/agriculture' },
  { text: 'Banking & Finance', link: '/finance' },
  { text: 'Infrastructure', link: '/infrastructure' },
  { text: 'Capital Market', link: '/capitalMarket' }
];
const menuItems3 = [
  { text: 'Fintech', link: '/finTech' },
  { text: 'Human Capital', link: '/humancapital' },
  { text: 'Capital Market', link: '/capitalmarket' },
  { text: 'Regtech', link: '/regtech' }
];


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (event) => {
    if (event.clientX >= drawerWidth) {
      setMobileOpen((prevState) => !prevState);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <Link component={Link} to="/" underline="none"> 
      <img src={logoImage} alt="Logo" style={{ width: "120px" }} /> 
        </Link>
      </Typography>
      <Divider />
      <List>
        <ListItem key={1}>
          <Menu />
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        color=""
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: 64, // Set the desired height for the AppBar
          paddingLeft: 2
        }}
      >
        <Typography
          variant="h6"
          component="div"
        >
            <Link component={Link} to="/" underline="none">
            <img src={logoImage} alt="Logo" style={{ width: "150px" }} /> 
            </Link>
        </Typography>
        <Toolbar sx={{ display: "flex", justifyContent: "end", flexGrow: 1 }}>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "flex" } } }>
            <CustomMenu
              menuName="Capabilities"
              menuItems={menuItems1}
            />
            <CustomMenu menuName="Industry" menuItems={menuItems2} />
            <CustomMenu menuName="Solutions" menuItems={menuItems3} />
            <Button component={Link} to="/aboutus">About Us</Button>
        <Button component={Link} to="/joinus">Career</Button>


          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
