import React from "react";
import { Route, Routes } from "react-router-dom";
import Kirish from "./Components/kirish";
import Kirish2 from "./Components/kirish2";
import Royhatdanotish from "./Components/Royhatdanotish";
import Sms from "./Components/sms";
import Profile from "./Components/profile";
import Saqlandi from "./Components/saqlandi";
import Login from "./Components/login";
import Parol_tiklash from "./Components/parol_tiklash";
import Parol_tiklashNUm from "./Components/parolnitiklashNum";
import ParolniYangilash from "./Components/yangilash";
import Boshsaxifa from "./pages/Boshsaxifa";
import Sitebar from "./sitebar";
import Shifokorlarim from "./pages/Shifokorlarim";
import Profil_pages from "./pages/profil";
import Notification from "./pages/Notification";

const App = () => {
  return (
    <div className="">
    <Routes>
      <Route path="/" element={<Kirish />} />

      <Route path="kirish2" element={<Kirish2 />} />
      <Route path="login" element={<Login />} />
      <Route path="royhatdanotish" element={<Royhatdanotish />} />
      <Route path="sms" element={<Sms />} />
      <Route path="profile" element={<Profile />} />
      <Route path="saqlandi" element={<Saqlandi />} />
      <Route path="Parol_tiklash" element={<Parol_tiklash />} />
      <Route path="Parol_tiklashNum" element={<Parol_tiklashNUm />} />
      <Route path="yangilash" element={<ParolniYangilash />} />



      <Route path="boshsaxifa" element={<Boshsaxifa />} />
      <Route path="shifokorlar" element={<Shifokorlarim />} />
      <Route path="profil" element={<Profil_pages />} />
      <Route path="Notification" element={<Notification />} />
    </Routes>
    <Sitebar/>
    </div>
  );
};

export default App;
