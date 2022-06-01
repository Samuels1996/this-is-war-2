import React from "react";
import 'bootstrap';
import { Link } from "react-router-dom";
import img from '../img/Logo.png'

export default function Navbar () {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <Link className="navbar-brand" to="/"><img className="logoImg" src={img} alt="logo"></img></Link>
                <li className="nav-item"><Link className="nav-link font-face" to='/championselect'>Champion</Link></li>
                <li className="nav-item"><Link className="nav-link font-main" to='/fightchoice'>Arena</Link></li>
                <li className="nav-item"><Link className="nav-link font-main" to='/store'>Store</Link></li>
                <li className="nav-item"><Link className="nav-link font-main" to='/login'>Logout</Link></li>
            </nav>
        </div>
    )
}