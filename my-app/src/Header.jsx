import './Header.css'
import React from 'react'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
    return (
        <div className='header'>
            <Button className='subscribe'>SUBSCRIBE</Button>
            <p className='title'>Blog</p>
            <div className='rightstuff'>
                <SearchIcon className="SearchIcon" color="primary" />
                <Button variant="outlined">SIGN UP</Button>
            </div>
        </div>
    )
}

export default Header