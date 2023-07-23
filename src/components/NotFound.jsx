import React, { Component } from 'react'
import { Header } from './Header'
import { Link } from 'react-router-dom'
export function NotFound(){
    return (
        <>
        <h2 style={{
            margin:"0.5rem 1.5rem",
            marginTop:"8rem"
        }} >Sorry, the page you were looking for was not found.</h2>
        <Link to="/" className='notfound--link'>Return to home</Link>
        </>
    )
}