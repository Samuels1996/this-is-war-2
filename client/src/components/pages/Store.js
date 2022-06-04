//directs to champion select
import React from "react";
import { useQuery } from "@apollo/client";
import { FIND_ITEMS } from "../utils/queries";
import auth from "../../utils/auth";
import { Card, Button } from "react-bootstrap";
import placeholder from "../../images/campfire.gif";

function addItem() {
  const user = auth.getProfile();
  const userId = user.data._id;
}

export default function Store() {
  const { loading, data } = useQuery(FIND_ITEMS);
  const item = data?.items || [];

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="card-group">
            {item.map((item) => {
              return (
                <div key={item._id} className="card mb-2 item-card">
                  <h3 className="card-header">{item.name}</h3>
                  <p className="card-body">
                    {item.description} <br />
                    {item.price} gold <br />+{item.hp} hp <br />+{item.attack}{" "}
                    atk <br />+{item.defense} def <br />
                  </p>
                  <div className="card-footer">
                    <button onClick={addItem} className="btn btn-danger">
                      Buy
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
