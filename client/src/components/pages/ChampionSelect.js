//directs to store and fight choose
import React from "react";
import { Link } from "react-router-dom";

export default function ChampionSelect () {
    return (
        <div>
            <Link to='/store'>Store</Link>
            <Link to='/fightchoice'>Choose Fight</Link>
        </div>
    )
}