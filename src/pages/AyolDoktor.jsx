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
import DoctorCard from "./DoctorCard";
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="w-full mx-auto bg-white mb-[60px] overflow-hidden">
      {/* Header qismi o‘zgarmadi */}
      <div className="bg-[#00C1F3] md:px-10 xl:px-[100px] lg:px-[70px] p-5 rounded-b-[30px] relative">
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
            className="w-full py-3 pl-10 pr-12 outline-0 rounded-4xl bg-white text-sm md:text-base shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)]"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <IoNotificationsOutline className="text-white ml-5 text-3xl" />
        </div>
      </div>

      {/* Filterlar – YANGI VERSIYA */}
      <div className="mb-3 md:px-10 lg:px-[70px] xl:px-[100px]">
        <div className="flex flex-wrap gap-2.5 mt-4 px-1 py-1 overflow-x-auto sm:overflow-visible whitespace-nowrap sm:whitespace-normal">
          
          {/* Barchasi */}
          <div
            onClick={() => handleFilterClick("barchasi", "/boshsaxifa")}
            className={"px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all bg-gray-200 text-gray-700 hover:bg-gray-300"}

          >
            Barchasi
          </div>

          {/* 24/7 */}
          <div
            onClick={() => handleFilterClick("24_7", "/B24_7")}
            className={`px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all ${
              activeFilter === "24_7"
                ? "bg-[#BDF3FF] text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <FaRegClock className="text-lg" /> 24/7 ishlaydigan
          </div>

          {/* Eng yaqin */}
          <div
            onClick={() => handleFilterClick("yaqin", "/EngYaqin")}
            className={"px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all bg-gray-200 text-gray-700 hover:bg-gray-300"}

          >
            <SlCursor className="text-lg" /> Eng yaqin
          </div>

          {/* Eng yaxshi */}
          <div
            onClick={() => handleFilterClick("yaxshi", "/EngYaxshi")}
            className={"px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all bg-gray-200 text-gray-700 hover:bg-gray-300"}

          >
            <CiStar className="text-lg" /> Eng yaxshi
          </div>

          {/* Ayol doktori */}
          <div
            onClick={() => handleFilterClick("ayol", "/AyolDoktor")}
            className={"px-4 py-2 rounded-2xl flex items-center gap-2 text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all bg-[#BDF3FF] text-black"}

          >
            Ayol doktori
          </div>

          {/* Bolalar doktori */}
          <div
            onClick={() => handleFilterClick("bola", "/BolalarDoktori")}
            className={`px-4 py-2 rounded-2xl text-[12px] sm:text-[14px] font-medium cursor-pointer transition-all ${
              activeFilter === "bola"
                ? "bg-[#BDF3FF] text-black"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Bolalar doktori
          </div>

        </div>
      </div>

      {/* Qolgan qismi (DoctorCard lar) o‘zgarmaydi */}
      <div className="md:px-10 lg:px-[70px] px-2 mb-5 xl:px-[100px]">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Hozirda mavjud mutaxassislar
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {/* DoctorCard lar shu yerda */}
          
       

          {/* Copylar */}
          <DoctorCard img={Denta4} name="Dr. Lobar Azizova" job="Implantolog" rating="4.4" distance="2 km" price="255 000" patients="120" exp="10" service={true} />
          <DoctorCard img={DentaA1} name="Dr. Marjona Nazarmatova" job="Implantolog" rating="4.1" distance="3 km" price="125 000" patients="120" exp="25" service={true} />
          <DoctorCard img={DentaA2} name="Dr. Mubina Jalilova" job="Implantolog" rating="4.2" distance="3.1 km" price="200 000" patients="120" exp="10" service={true} />
          <DoctorCard img={DentaA3} name="Dr. Aziza Xolmatova" job="Implantolog" rating="3.7" distance="3.2 km" price="255 000" patients="120" exp="5" service={true} />
          <DoctorCard img={Denta4} name="Dr. Lobar Azizova" job="Implantolog" rating="3.6" distance="3.4 km" price="155 000" patients="120" exp="15" service={true} />

        </div>
      </div>
    </div>
  );
}

export default Boshsaxifa;