import React from "react";
import Navbar from "../Navbar";
import Login from "./Login";
import "./Login.css";

function sellerView() {
  return (
    <>
      <Navbar />
      <div className="back">
        <Login />
      </div>
    </>
  );
}

export default sellerView;
