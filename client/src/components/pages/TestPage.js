import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FIND_ITEMS, QUERY_USERS } from "../utils/queries";

export default function TestPage() {
  const { loading, data } = useQuery(QUERY_USERS);
  console.log(data);
  const items = data?.users || [];

  return (
    <div className="text-light">
      <h1>Pipe data below</h1>
      <div>
        {loading ? (
          <div> loading...</div>
        ) : (
          <div>
            {items.map((item) => {
              return <p>{item.email}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
