import { Route, Routes } from "react-router-dom";
import React from "react";
import Page1 from "../Page1";
import Page2 from "../Page2";
import Home from "../Home";
import NestPage from "../NestPage";
import UrlParameter from "../UrlParameter";

export default function IndexRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />}>
          <Route path="nest" element={<NestPage />} />
          <Route path=":id" element={<UrlParameter />} />
        </Route>
      </Routes>
    </>
  );
}
