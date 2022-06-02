import '../../index.css'

export const FightOptions = ({ onAttack, onDefend }) => (
    <div>
        <div onClick={onAttack} className='fightOptions'>Attack</div>
        <div onClick={onDefend} className='fightOptions'>Defend</div>
    </div>
)