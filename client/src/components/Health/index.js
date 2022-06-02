import '../../index.css';

export const Health = ({ label, health, maxHealth }) => (
    <div className='main'>
    <div className='label'>{label}</div>
    <div className='max'>
      <div
        className='health'
        style={{ width: `${(health / maxHealth) * 100}%` }}
      ></div>
    </div>
  </div>
);
    
