//directs to champion select
import React from "react";
import { useQuery, ApolloProvider } from "@apollo/client";
import { Link } from "react-router-dom";
import { ITEM_QUERY } from "../../utils/queries";
import StoreList from '../StoreList';

export default function Store () {
    const { loading, data } = useQuery(ITEM_QUERY)
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
            </div>
        </div>
    )
}