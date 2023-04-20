import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
};
