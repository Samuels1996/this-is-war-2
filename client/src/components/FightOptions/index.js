import '../../index.css'

export const FightOptions = ({ onAttack, onDefend }) => (
    <div>
        <div onClick={onAttack} className='playerCards'>Attack</div>
        <div onClick={onDefend} className='playerCards'>Defend</div>
    </div>
)