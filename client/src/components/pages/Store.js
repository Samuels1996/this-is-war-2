//directs to champion select
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { FIND_ITEMS } from "../utils/queries";
import { ADD_ITEM } from "../../utils/mutations";
import auth from "../../utils/auth";

function addItem() {
  const user = auth.getProfile();
  const userId = user.data._id;

  //const [] = useMutation(ADD_ITEM)
}

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
          <div className="card-deck">
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
