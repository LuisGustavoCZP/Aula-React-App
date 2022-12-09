import React, { PropsWithChildren, useEffect } from 'react';
import {
  useNavigate,
  useNavigation,
  useLoaderData,
} from "react-router-dom";

import {AppBar, Toolbar, IconButton, Typography, Button, Box, Tooltip, Avatar, Menu, MenuItem} from '@mui/material';
import {Menu as MenuIcon} from '@mui/icons-material';

const links = {
  "Profile":"/",
  "Logout":"/login",
  "Cadastro":"/register",
  "Login":"/login",
}

export async function userDataLoader ()
{
  const userData : IUserData = await fetch(`https://rickandmortyapi.com/api/character/1`).then(resp => resp.json());
  console.log(userData);
  return userData;
}

interface IUserData {
  name: string,
  image: string
}

export function Header ({options} : {options: Array<string>})
{
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const userData : IUserData = useLoaderData() as IUserData;
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const nav = useNavigation();

  return (
    <AppBar >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {userData?userData.name:""}
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={userData?userData.image:""} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {options.map((option) => (
                <MenuItem key={option} onClick={() => 
                {
                  const link : string = (links as any)[option];
                  console.log(link)
                  navigate(link)
                  handleCloseUserMenu();
                }}>
                  <Typography textAlign="center">{option}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </Toolbar>
    </AppBar>
  );
}