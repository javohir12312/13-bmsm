import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Error from "../Error/Error";
import School from "../School/School";
import Students from "../Students/Students";
import Teachers from "../Teachers/Teachers";
import Gallery from "../Gallery/Gallery";
import Default from "../Default/Default";
import Login from "../Login/Login";
import Detail from "../Detail/Detail";
import Register from "../Register/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Default />} />
          <Route path="detail" element={<Detail />} />
          <Route path="school" element={<School />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
