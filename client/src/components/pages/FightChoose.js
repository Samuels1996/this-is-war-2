//directs to  fight
import React from "react";
import { Link } from "react-router-dom";

export default function FightChoose () {
    return (
        <div>
            <Link to='/fight'>Fight!</Link>
            <Link to='/championselect'>Champion Select</Link>
        </div>
    )
}