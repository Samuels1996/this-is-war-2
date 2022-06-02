//directs to champion select
import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ITEMS } from "../../utils/queries";
import StoreList from '../StoreList';

<<<<<<< HEAD
export default function Store () {
    const { loading, data } = useQuery(QUERY_ITEMS)
    const items = data?.items || [];
    return (
        <div>
            <Link to='/championselect'>Select Champion</Link>
            <div className="col-12">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <StoreList
                    items={items} />
                )}
                <p>hewwo</p>
            </div>
        </div>
    )
}
=======
export default function Store() {
  return (
    <div>
      <Link to="/championselect">Select Champion</Link>
    </div>
  );
}
>>>>>>> 3be4d4a40f926f6aefaf44003b293bf10daad09f
