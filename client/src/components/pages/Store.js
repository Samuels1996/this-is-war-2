//directs to champion select
import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
// import StoreList from '../StoreList';
import { FIND_ITEMS } from "../utils/queries";

export default function Store() {
  const { loading, data } = useQuery(FIND_ITEMS);
  const item = data?.items || [];

  return (
    <div>
      <Link to="/championselect">Select Champion</Link>
      <div className="col-12">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="card-group">
            {item.map((item) => {
              return (
                <div key={item._id} className="card mb-2 item-card">
                  <h3 className="card-header">{item.name}</h3>
                  <p className="card-text">
                    {item.description} <br />
                    {item.price} gold <br />+{item.hp} hp <br />+{item.attack}{" "}
                    atk <br />+{item.defense} def <br />
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
