//directs to champ select
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ADD_CHARACTER_TO_USER, CREATE_CHARACTER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import AuthService from "../../utils/auth";
import { useEffect } from "react";
import archer from "../../images/megaman-thing.png";
import warrior from "../../images/warrior.png";
import wizard from "../../images/wizard.png";

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
    window.location.pathname = "/fightchoice";
  };

  const characterImg = () => {
    if (charType === "Champion Class: Wizard") {
      return <img src={wizard} alt="Wizard Avatar" className="character-img" />;
    } else if (charType === "Champion Class: Archer") {
      return <img src={archer} alt="Archer Avatar" className="character-img" />;
    } else {
      return (
        <img src={warrior} alt="Warrior Avatar" className="character-img" />
      );
    }
  };
  return (
    <div className="container character-creation site-font">
      <div className="row">
        <div className="creation-box">
          <h1>Champion Creation</h1>
          <form>
            <label htmlFor="">Champion Name: </label>
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
                      changeType("Champion Class: Wizard");
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
                      changeType("Champion Class: Archer");
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
                      changeType("Champion Class: Warrior");
                    }}
                  >
                    Warrior
                  </button>
                </li>
              </ul>
            </div>
            <div>{characterImg()}</div>
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Create Champion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
