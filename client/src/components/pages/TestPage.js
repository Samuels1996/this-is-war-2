import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FIND_ITEMS } from "../utils/queries";

export default function TestPage() {
  const { loading, data } = useQuery(FIND_ITEMS);
  const items = data?.items || [];
  console.log(items);
  return (
    <div className="text-light">
      <h1>Pipe data below</h1>
      <div>
        {loading ? (
          <div> loading...</div>
        ) : (
          <div>
            {items.map((item) => {
              return <p>{item.name}</p>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
