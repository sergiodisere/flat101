import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import { MenuItem, TextField } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Navbar = ({setDataDisplay, listProducts}) => {

  const handleSearch = (value) => {
    setDataDisplay([...listProducts.filter((i) => i.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)])
  }

  return (
    <header>
      <nav className='navigation'>
        <div className="navigation-menu">
          <h2 className="brand-name">FLAT101</h2>
          <div className='icon-btn'>
          <IconButton className="icon-btn" aria-label="show user" color="inherit">
              <PersonOutlineIcon />
            </IconButton>
          </div>
          
          <TextField
            size="small"
            variant="outlined"
            placeholder='Search...'
            onChange={(e)=>handleSearch(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />


        </div>
      </nav>
    </header>
  )
}

export default Navbar