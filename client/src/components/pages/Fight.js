//directs to fightchoose
import React from "react";
import { Link } from "react-router-dom";

export default function Fight() {
    return (
        <div>
            <Link to='/fightchoice'>Choose Fight</Link>
        </div>
    )
}