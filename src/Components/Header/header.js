import react, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return(
        <>
          <ul>
                <li><Link to="/">მთავარი გვერდი</Link></li>
                <li><Link to="/register">რეგისტრაცია</Link></li>
                <li><Link to="/login">ავტორიზაცია</Link></li>
            </ul>  
        </>
    )
}

export default Header;