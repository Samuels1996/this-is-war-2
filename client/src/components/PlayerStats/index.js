import React from 'react';
// import { useQuery } from "@apollo/client";
// import { FIND_USERS } from "../utils/queries";
import { Health } from '../Health';
import '../../index.css';
import playerImg from '../../images/megaman-thing.png';
import opponentImg from '../../images/dungeon-boss.png';


export const PlayerStats = () => {
    return <div>
        <div>This is player stuff</div>
        <div>
            <Health label="HP:" />
        </div>
        <img src={playerImg} alt='fuck this shit' />
    </div>;
};

export const OpponentStats = () => {
    return <div>
        <img src={opponentImg} alt='also fuck this shit' />
        <div className='fightTextBox'>This is opponent info</div>
        <div>
            <Health label="HP:" />
        </div>
    </div>
};