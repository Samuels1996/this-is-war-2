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
    <div className="row store-font">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-deck justify-content-center row">
          {item.map((item) => {
            return (
              <div
                key={item._id}
                className="card mt-3 mb-2 item-card col-3 mx-2 bg-secondary text-white"
              >
                <h3 className="card-header">{item.name}</h3>
                <p className="card-body card-body-text">
                  {item.description} <br />
                  {item.price} gold <br />+{item.hp} hp <br />+{item.attack} atk{" "}
                  <br />+{item.defense} def <br />
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
  );
}
