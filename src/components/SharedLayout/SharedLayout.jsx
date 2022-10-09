import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router'
import './SharedLayout.css'

const getClassName = ({ isActive }) => {
  return isActive ? `nav-item active` : `nav-item`
}

export default function SharedLayout() {
  return (
    <div className="container">
      <header>
        <nav className="nav">
          <NavLink className={getClassName} to="/" end>Home</NavLink>
          <NavLink className={getClassName} to="/movie">Movies</NavLink>
        </nav>
      </header>
      <Outlet/>
    </div>
  )
}
