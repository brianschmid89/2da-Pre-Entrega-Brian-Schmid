import React from 'react';
import NavBar from '../NavBar';
import { Outlet } from 'react-router-dom';
import './styles.css'

const Root = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <h2>_______________________________________Footer en construccion!</h2>
    </>
  )
}

export default Root