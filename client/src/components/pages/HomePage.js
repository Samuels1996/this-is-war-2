import React from "react";
import { Link } from "react-router-dom";
import '../../index.css'

export default function HomePage () {
    return (
        <div>
            <Link to='/login'>Login</Link>
        </div>
    )
}