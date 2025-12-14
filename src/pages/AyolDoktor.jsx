import React, { useState } from "react";
import { TbMessage } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { SlCursor } from "react-icons/sl";
import { CiStar } from "react-icons/ci";

import DentaA3 from "../assets/dentaA3.png";
import DentaA2 from "../assets/dentaA2.png";
import DentaA1 from "../assets/dentaA1.png";
import Denta4 from "../assets/denta4.jpg";
import DoctorCard2 from "./CardAyollar";
import { useNavigate } from 'react-router-dom';

// Rang konstantalari
const PRIMARY_COLOR = '#F269CD'; // Asosiy pushti/binafsha
const LIGHT_ACCENT = '#F9E5F2';  // Och pushti/binafsha
const DARK_TEXT = '#272937';     // To'q matn rangi

function Boshsaxifa() {
  const navigate = useNavigate();

  // Faol filter (boshida "Barchasi" faol)
  const [activeFilter, setActiveFilter] = useState("barchasi");

  const handleFilterClick = (filterKey, route) => {
    setActiveFilter(filterKey);
    if (route) {
      navigate(route);
    }
  };
  
  // Notification ikonkasini bosish funksiyasi
  const handleGoToNotifications = () => {
      navigate('/Notification');
  };

  return (
    <div className="w-full mx-auto bg-white mb-[60px] overflow-hidden">
      {/* Header qismi - Rangi #00C1F3 dan #F269CD ga o'zgartirildi */}
      <div className={`bg-[${PRIMARY_COLOR}] md:px-10 xl:px-[100px] lg:px-[70px] p-5 rounded-b-[30px] relative shadow-lg`}>
        <div className="">
          <TbMessage className="text-3xl text-white" />
        </div>
        <div className="text-white mt-8">
          <h1 className="text-lg md:text-2xl font-semibold flex items-center gap-1">
            Salom Azamat
          </h1>
          <p className="flex items-center gap-1 text-white/80 text-sm mt-1">
            <HiLocationMarker /> Namangan, O’zbekiston
          </p>
        </div>
        <div className="mt-4 relative flex items-center justify-center">
          <input
            type="text"
            placeholder="Shifokor yoki klinika qidirish..."
            className="w-full py-3 pl-10 pr-12 outline-0 rounded-4xl bg-white text-sm md:text-base shadow-md"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          {/* IoNotificationsOutline ikonkasiga navigatsiya qo'shildi */}
          <IoNotificationsOutline 
                className="text-white ml-5 text-3xl cursor-pointer hover:opacity-80 transition"
                onClick={handleGoToNotifications} 
            />
        </div>
      </div>

      {/* Filterlar – Ranglari o'zgartirildi */}
      <div className="mb-3 md:px-10 lg:px-[70px] xl:px-[100px]">
        <div className="flex flex-wrap gap-2.5 mt-4 px-1 py-1 overflow-x-auto sm:overflow-visible whitespace-nowrap sm:whitespace-normal">
          
          {/* Barchasi */}
<div

            onClick={() => handleFilterClick("barchasi", "/boshsaxifa")}

            className={"px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all bg-gray-200 text-gray-700 hover:bg-gray-300"}



          >

            Barchasi

          </div>

            {/* Ayol doktori - Aktiv rangi #BDF3FF dan PRIMARY_COLOR ga o'zgartirildi */}
          <div
            onClick={() => handleFilterClick("ayol", "/AyolDoktor")}
            className={`px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all ${
                activeFilter === "ayol"
                    ? `bg-[#F269CD] text-white` // Pushti
                    : "bg-[#F269CD] text-white hover:bg-gray-300"
            }`}

          >
            Ayol doktori
          </div>

          {/* 24/7 - Aktiv rangi #BDF3FF dan LIGHT_ACCENT ga o'zgartirildi */}
          <div
            onClick={() => handleFilterClick("24_7", "/B24_7")}
            className={`px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all ${
              activeFilter === "24_7"
                ? `bg-[${LIGHT_ACCENT}] text-[${DARK_TEXT}] border border-[${PRIMARY_COLOR}]/50`
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaRegClock className="text-lg text-gray-500" /> 24/7 ishlaydigan
          </div>

          {/* Eng yaqin */}
          <div
            onClick={() => handleFilterClick("yaqin", "/EngYaqin")}
            className={`px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all ${
                activeFilter === "yaqin"
                    ? `bg-[${LIGHT_ACCENT}] text-[${DARK_TEXT}] border border-[${PRIMARY_COLOR}]/50`
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}

          >
            <SlCursor className="text-lg text-gray-500" /> Eng yaqin
          </div>

          {/* Eng yaxshi */}
          <div
            onClick={() => handleFilterClick("yaxshi", "/EngYaxshi")}
            className={`px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all ${
                activeFilter === "yaxshi"
                    ? `bg-[${LIGHT_ACCENT}] text-[${DARK_TEXT}] border border-[${PRIMARY_COLOR}]/50`
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}

          >
            <CiStar className="text-lg text-gray-500" /> Eng yaxshi
          </div>

        

          {/* Bolalar doktori - Aktiv rangi #BDF3FF dan LIGHT_ACCENT ga o'zgartirildi */}
          <div
            onClick={() => handleFilterClick("bola", "/BolalarDoktori")}
            className={`px-4 py-2 rounded-2xl text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all ${
              activeFilter === "bola"
                ? `bg-[${LIGHT_ACCENT}] text-[${DARK_TEXT}] border border-[${PRIMARY_COLOR}]/50`
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Bolalar doktori
          </div>

        </div>
      </div>

      {/* Qolgan qismi */}
      <div className="md:px-10 lg:px-[70px] px-2 mb-5 xl:px-[100px]">
        <h1 className={`text-2xl md:text-3xl font-semibold mb-4 text-[${DARK_TEXT}]`}>
          Hozirda mavjud mutaxassislar
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          
          {/* DoctorCard2 (CardAyollar) komponentidan foydalanilmoqda */}
          <DoctorCard2 img={Denta4} name="Dr. Lobar Azizova" job="Implantolog" rating="4.4" distance="2 km" price="255 000" patients="120" exp="10" service={true} />
          <DoctorCard2 img={DentaA1} name="Dr. Marjona Nazarmatova" job="Implantolog" rating="4.1" distance="3 km" price="125 000" patients="120" exp="25" service={true} />
          <DoctorCard2 img={DentaA2} name="Dr. Mubina Jalilova" job="Implantolog" rating="4.2" distance="3.1 km" price="200 000" patients="120" exp="10" service={true} />
          <DoctorCard2 img={DentaA3} name="Dr. Aziza Xolmatova" job="Implantolog" rating="3.7" distance="3.2 km" price="255 000" patients="120" exp="5" service={true} />
          <DoctorCard2 img={Denta4} name="Dr. Lobar Azizova" job="Implantolog" rating="3.6" distance="3.4 km" price="155 000" patients="120" exp="15" service={true} />

        </div>
      </div>
    </div>
  );
}

export default Boshsaxifa;