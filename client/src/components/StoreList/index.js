import React from "react";

export default function StoreList ({
    items
}) {
    return ( <div>
        {items && items.map((item) => (
                <div key={item._id} className='card mb-3'>
                    <h3 className="card-header">{item.name}</h3>
                    <p>hewwo</p>
                </div>
            ))}
    </div>
)}