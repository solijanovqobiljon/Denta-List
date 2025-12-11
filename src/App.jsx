import React from "react";
import { Route, Routes } from "react-router-dom";
import Kirish from "./Components/kirish";
import Kirish2 from "./Components/kirish2";
import Royhatdanotish from "./Components/Royhatdanotish";
import Sms from "./Components/sms";
import Profile from "./Components/profile";
import Saqlandi from "./Components/saqlandi";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Kirish />} />
      <Route path="kirish2" element={<Kirish2 />} />
      <Route path="royhatdanotish" element={<Royhatdanotish />} />
      <Route path="sms" element={<Sms />} />
      <Route path="profile" element={<Profile />} />
      <Route path="saqlandi" element={<Saqlandi />} />
    </Routes>
  );
};

export default App;
