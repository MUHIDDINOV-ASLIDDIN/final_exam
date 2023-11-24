import React, { useEffect, useState } from "react";
import "./../index.css";
import getStore from "../utils/getStore";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function Register() {
  const [user, setUser] = useState(getStore("user"));
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <div className="form_register">
      <div>
        <h1>Raqamingizni kiriting</h1>
        <input
          type="number"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="+998 (__) ___-__-__"
          name=""
          id=""
        />
        <br />
        {user.length === 9  ?  (
          <button
            className="reg-btn"
            onClick={() => {
              location = "/";
            }}
          >
            Kirish
          </button>
        ) : (
          <button className="disabled_btn-reg">Kirish</button>
        )}
        <p>
          This site is protected by reCAPTCHA and the <br /> Google
          <span>Privacy Policy</span> and <span>Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
}
