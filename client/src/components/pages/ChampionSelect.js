//directs to store and fight choose
import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { FIND_CHARACTERS } from "../utils/queries";

export default function ChampionSelect() {
  const { loading, data } = useQuery(FIND_CHARACTERS);
  const char = data?.characters || [];
  return (
    <div>
      <Link to="/store">Store</Link>
      <Link to="/fightchoice">Choose Fight</Link>
      <Link to="/createchampion">Create Champion</Link>

      <div className="col-12">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="card-deck">
            {char.map((char) => {
              if(char.boss === false){
                return( <div key={char._id} className="card item-card mb-2">
                  <h2 className="card-header">{char.name}</h2>
                  <p className="card-body">{char.hp} hp<br />
                  {char.attack} atk <br />
                  {char.defense} def</p>
                  <button className="btn btn-danger">Use</button>
                </div>)
              }
            })}
          </div>
        )}
      </div>
    </div>

    
  );
}
