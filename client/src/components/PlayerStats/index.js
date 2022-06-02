import React from 'react';
import { useQuery } from "@apollo/client";
import { FIND_USERS } from "../utils/queries";
import { Health } from '../Health';


export const PlayerStats = ({ boss }) => {
    return <div>
        <div>This is player stuff</div>
        <div>
            <Health label="HP:" />
        </div>

    </div>;
};