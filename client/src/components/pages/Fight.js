//directs to fightchoose
import React from "react";
import { Link } from "react-router-dom";
import { FightOptions } from "../FightOptions";
import  FightStuff  from "../Fight";

export default function Fight() {
    return (
        <div>
            <Link to='/fightchoice'>Choose Fight</Link>
            <div className="playerCards">Fight!</div>
            <div className="playerCards">Your player stuff here</div>
            <FightOptions 
            onAttack={() => console.log('Attack')}
            onDefend={() => console.log('Defend')} />
            <div className="playerCards">Boss stuff goes here</div>
        </div>
    )
}