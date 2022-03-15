import React from "react";
import Footer from "../footer";
import Main from "../main";
import Sidebar from "../sidebar";
import "./container.scss";

// import { Container } from './styles';
export default function Container() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
