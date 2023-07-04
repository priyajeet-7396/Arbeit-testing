import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export default function CustomMenu({ menuName, menuItems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = (link) => {
    setAnchorEl(null);
    navigate(link);
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
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleItemClick(item.link)}>
            <RouterLink to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              {item.text}
            </RouterLink>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
