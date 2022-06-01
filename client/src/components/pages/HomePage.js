import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'

export default function HomePage () {
    return (
        <div>
            <h1>IT WORK</h1>
            <Link to='/login'>Login</Link>
        </div>
    )
}