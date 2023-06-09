import React from 'react';
import { Main } from './Main';
import {BrowserRouter, Link} from 'react-router-dom'
export function Navbar(){
    return (
        <>
        <nav className='main--nav' >
            <Link to="/" className='nav--logo' >#VANLIFE</Link>
            <div className='nav--navigation' >

                <Link to="/about" className='nav--about' >About</Link>
                <Link to="/Vans" className='nav--vans' >Vans</Link>
            </div>
            
        </nav>
     
        </>
    )
}