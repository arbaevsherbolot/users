import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { About } from "../../pages/about/About";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
      </Routes>
    </>
  );
};
