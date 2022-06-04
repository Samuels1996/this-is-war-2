//directs to champ select
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ADD_CHARACTER_TO_USER, CREATE_CHARACTER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import AuthService from "../../utils/auth";
import { useEffect } from "react";

export default function CreateChampion() {
  const [character, setCharacter] = useState({
    name: "",
    classType: "",
  });
  const [charType, setCharType] = useState("Select type");
  const changeType = (str) => {
    setCharType(str);
  };
  const [show, setShow] = useState(false);
  const menuClass = `dropdown-menu ${show ? " show" : ""}`;
  const changeshow = (boo) => {
    setShow(boo);
  };
  const [char, { err }] = useMutation(CREATE_CHARACTER);
  const [user, { error }] = useMutation(ADD_CHARACTER_TO_USER);
  const handleSubmit = async () => {
    const name = document.getElementById("name").value.trim();
    const userId = AuthService.getProfile().data._id;
    await setCharacter({
      name,
      classType: charType,
    });
    try {
      const charID = await char({
        variables: { ...character },
      });
    } catch (err) {
      console.log(err);
    }
    // user(userId, { name: name, classType: charType });
    setCharType("Select type");
    document.getElementById("name").value = "";
  };
  const characterImg = () => {
    if (charType === "Wizard") {
      return <img src="" alt="Wizard Avatar" />;
    } else if (charType === "Archer") {
      return <img src="" alt="Archer Avatar" />;
    } else {
      return <img src="" alt="Warrior Avatar" />;
    }
  };
  return (
    <div className="row">
      <div>
        <Link to="/championselect">Champion Select</Link>
      </div>
      <div className="char">
        <h2>Character Creation</h2>
        <form action="" className="">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Character Name" id="name" />
          <div className="dropdown my-2">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => changeshow(!show)}
            >
              {charType}
            </a>

            <ul className={menuClass} aria-labelledby="dropdownMenuLink">
              <li>
                <button
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    changeType("Wizard");
                  }}
                >
                  Wizard
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    changeType("Archer");
                  }}
                >
                  Archer
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={(e) => {
                    e.preventDefault();
                    changeType("Warrior");
                  }}
                >
                  Warrior
                </button>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            submit
          </button>
        </form>
      </div>
      <div>{characterImg()}</div>
    </div>
  );
}
