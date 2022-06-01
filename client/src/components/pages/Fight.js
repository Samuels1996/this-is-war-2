//directs to fightchoose
import React from "react";
import { Link } from "react-router-dom";

export default function Fight() {
    return (
        <div>
            <Link to='/fightchoice'>Choose Fight</Link>
            <div>Fight</div>
            <div className="playerCards">Your player stuff here</div>
            <div className="playerCards">Boss stuff goes here</div>
        </div>
    )
}