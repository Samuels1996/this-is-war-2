import React from "react";

const StoreList = ({ data }) => {
    if(data === undefined) {
        return <h1>NO DATA</h1>
    }

    return ( <div>
        {data && data.map((item) => (
                <div className='card mb-3'>
                    <h3 className="card-header">{item.name}</h3>
                    <h2 className="card-header">hewwo</h2>
                </div>
            ))}
    </div>
)}

export default StoreList;