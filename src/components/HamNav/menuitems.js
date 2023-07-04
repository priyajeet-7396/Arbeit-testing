import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink } from 'react-router-dom';

export default function CustomMenu({ menuName, menuItems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); 
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id={`${menuName}-button`}
        aria-controls={open ? `${menuName}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {menuName}
      </Button>
      <Menu
        id={`${menuName}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': `${menuName}-button`,
        }}
        // PaperProps={{
        //   style: {
        //     width: '20%',
        //   },
        // }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
          <Button
              component={RouterLink}
              to={item.link}
              color="inherit"
              underline="none"
            >
              {item.text}
            </Button>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
