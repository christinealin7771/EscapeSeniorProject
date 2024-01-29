import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to="/home" className = "link">Home</Link>
        <Link to="/game" className = "link">Game</Link>
        <Link to="/about" className = "link">About</Link>
    </div>
  )
}

export default Header