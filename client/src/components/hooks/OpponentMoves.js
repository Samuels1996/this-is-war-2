import { useEffect, useState } from 'react';

export default function OpponentMoves({turn}) {
    const [aiChoice, setAiChoice] = useState('');

    useEffect(() => {
        if (turn === 1) {
            const moves = ['attack', 'defend'];
            setAiChoice(moves[Math.floor(Math.random() * moves.length)]);
        }
    }, [turn]);
    return aiChoice;
}