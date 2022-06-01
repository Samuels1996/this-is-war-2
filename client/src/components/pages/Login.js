//directs to create champion and champ select
import React from 'react';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <div>
            <p>insert login</p>
            <Link to='/championselect'>Select Champion</Link>
            <Link to='/createchampion'>Create Champion</Link>
        </div>
    )
}