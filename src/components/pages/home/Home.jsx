import React, { useState } from "react";
import axios from "axios";
import scss from "./Home.module.scss";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const sendData = async (e) => {
    e.preventDefault();

    if (!validateUsername(username)) {
      errUsername.innerText = "Please enter a valid name!";
      return;
    } else if (!validateEmail(email)) {
      errEmail.innerText = "Please enter a valid e-mail adress!";
      errUsername.innerText = "";
      return;
    } else {
      errUsername.innerText = "";
      errEmail.innerText = "";
    }

    setUsername("");
    setEmail("");

    try {
      await axios.post("http://localhost:5686/post_users", {
        username,
        email,
      });

      alert("Success!");
    } catch (err) {
      console.log(err);
    }
  };

  const validateUsername = (nameS) => {
    const regex = /^[\w\s]{2,30}$/;
    return regex.test(nameS);
  };

  const validateEmail = (emailS) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(emailS);
  };

  return (
    <>
      <div className={scss.home_page}>
        <div className="container">
          <div className={scss.content}>
            <form onSubmit={sendData} className={scss.form}>
              <input
                required
                type="text"
                placeholder="Username*"
                value={username}
                className={scss.input}
                onChange={handleChangeUsername}
              />
              <span id="errUsername"></span>

              <input
                required
                type="text"
                placeholder="E-mail*"
                value={email}
                className={scss.input}
                onChange={handleChangeEmail}
              />
              <span id="errEmail"></span>

              <button type="submit" className={scss.button}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
