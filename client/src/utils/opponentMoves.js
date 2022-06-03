import { useEffect, useState} from 'react';

export const opponentMoves = turn => {
    const [aiChoice, setAiChoice] = useState('');

    useEffect(() => {
        if (turn === 1) {
            const moves = ['attack', 'defend'];
            setAiChoice(moves[Math.floor(Math.random() * moves.length)]);
        }
    }, [turn]);
    return aiChoice;
}