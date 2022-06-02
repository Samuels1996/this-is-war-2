//directs to champion select
import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ITEMS } from "../../utils/queries";
import StoreList from '../StoreList';

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