//directs to champion select
import React from "react";
import { Link } from "react-router-dom";

export default function Store ({
    items
}) {
    return (
        <div>
            <Link to='/championselect'>Select Champion</Link>
            {items && items.map((item) => (
                <div key={item._id} className='card mb-3'>
                    <h3 className="card-header">{item.name}</h3>
                </div>
            ))}
        </div>
    )
}