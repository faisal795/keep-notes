import React from "react";
import logo from './img/logo2.png';

export default function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Hafiz Note </h1>
      </div>
    </>
  );
}
