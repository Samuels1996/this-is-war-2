//directs to store and fight choose
import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { FIND_CHARACTERS } from "../utils/queries";

export default function ChampionSelect() {
  const { loading, data } = useQuery(FIND_CHARACTERS);
  const char = data?.characters || [];
  console.log(char);
  return (
    <div className="site-font">
      <div className="col-12 mt-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="card-deck justify-content-center row">
            {char.map((char) => {
              if (char.boss === false) {
                return (
                  <div
                    key={char._id}
                    className="card item-card mb-2 col-3 mx-1 bg-secondary text-white"
                  >
                    <h2 className="card-header">{char.name}</h2>
                    <p className="card-body card-body-text">
                      {char.hp} hp
                      <br />
                      {char.attack} atk <br />
                      {char.defense} def
                    </p>
                    <button className="btn btn-danger mb-2">
                      <span className="card-body-text">Use</span>
                    </button>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}
