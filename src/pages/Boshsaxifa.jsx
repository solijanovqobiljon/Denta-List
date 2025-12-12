import React from "react";
import { TbMessage } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { SlCursor } from "react-icons/sl";
import { CiStar } from "react-icons/ci";

import Denta1 from "../assets/denta1.jpg";
import Denta2 from "../assets/denta2.jpg";
import Denta3 from "../assets/denta3.jpg";
import Denta4 from "../assets/denta4.jpg";
import DoctorCard from "./DoctorCard";

function Boshsaxifa() {
  return (
    <div className="w-full
                    mx-auto bg-white mb-[60px] overflow-hidden">

      {/* Header */}
      <div className="bg-[#00C1F3] md:px-10 xl:px-[100px] lg:px-[70px] p-5 rounded-b-[30px] relative">
    {/* <div className=" w-fullflex-1"></div> */}
        {/* Chat icon */}
        <div className="">
          <TbMessage className="text-3xl text-white" />
        </div>

        {/* User info */}
        <div className="text-white mt-8">
          <h1 className="text-lg md:text-2xl font-semibold flex items-center gap-1">
            Salom Azamat 👋
          </h1>
          <p className="flex items-center gap-1 text-white/80 text-sm mt-1">
            <HiLocationMarker /> Namangan, O’zbekiston
          </p>
        </div>

        {/* Search */}
        <div className="mt-4 relative flex items-center justify-center">
          <input
            type="text"
            placeholder="Shifokor yoki klinika qidirish..."
            className="w-full py-3 pl-10 pr-12 outline-0 rounded-4xl bg-white text-sm md:text-base
                       shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)]"
          />

          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

          <IoNotificationsOutline className="text-white ml-5 text-3xl" />
        </div>
      </div>

{/* Filterlar */}
<div className="mb-3 md:px-10 lg:px-[70px] xl:px-[100px]">

  <div
    className="
      flex flex-wrap gap-2.5
      mt-1 mb-1 px-1 py-1
      overflow-x-auto sm:overflow-visible
      whitespace-nowrap sm:whitespace-normal
    "
  >
    <div className="px-3 py-1 rounded-2xl bg-[#BDF3FF] text-[12px] sm:text-[14px]">
      Barchasi
    </div>

    <div className="px-3 py-1 rounded-2xl bg-gray-200 flex items-center gap-2 text-[12px] sm:text-[14px]">
      <FaRegClock /> 24/7 ishlaydigan
    </div>

    <div className="px-3 py-1 rounded-2xl bg-gray-200 flex items-center gap-2 text-[12px] sm:text-[14px]">
      <SlCursor /> Eng yaqin
    </div>

    <div className="px-3 py-1 rounded-2xl bg-gray-200 flex items-center gap-2 text-[12px] sm:text-[14px]">
      <CiStar /> Eng yaxshi
    </div>

    <div className="px-3 py-1 rounded-2xl bg-gray-200 text-[12px] sm:text-[14px]">
      Ayol doktori
    </div>

    <div className="px-3 py-1 rounded-2xl bg-gray-200 text-[12px] sm:text-[14px]">
      Bolalar doktori
    </div>
  </div>

</div>



      {/* Doctors */}
      <div className="md:px-10 lg:px-[70px] px-2 mb-5 xl:px-[100px]">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          Hozirda mavjud mutaxassislar
        </h1>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">

          <DoctorCard img={Denta1} name="Dr. Jamshid Rahmonov" job="Ortoped" rating="4.9" distance="5 km" price="250 000" patients="254" exp="12" service={true} />
          <DoctorCard img={Denta2} name="Dr. O‘tkir Rustamov" job="Terapevt" rating="4.9" distance="4 km" price="255 000" patients="124" exp="10" service={false} />
          <DoctorCard img={Denta3} name="Dr. Asadbek Luqmonov" job="Jarroh" rating="3.9" distance="2.5 km" price="250 000" patients="254" exp="12" service={false} />
          <DoctorCard img={Denta4} name="Dr. Lobar Azizova" job="Implantolog" rating="3.7" distance="3 km" price="255 000" patients="120" exp="10" service={true} />

          {/* Copylar */}
          <DoctorCard img={Denta1} name="Dr. Jamshid Rahmonov" job="Ortoped" rating="4.9" distance="5 km" price="250 000" patients="254" exp="12" service={true} />
          <DoctorCard img={Denta2} name="Dr. O‘tkir Rustamov" job="Terapevt" rating="4.9" distance="4 km" price="255 000" patients="124" exp="10" service={false} />
          <DoctorCard img={Denta3} name="Dr. Asadbek Luqmonov" job="Jarroh" rating="3.9" distance="2.5 km" price="250 000" patients="254" exp="12" service={false} />
          <DoctorCard img={Denta4} name="Dr. Lobar Azizova" job="Implantolog" rating="3.7" distance="3 km" price="255 000" patients="120" exp="10" service={true} />

        </div>
      </div>

    </div>
  );
}

export default Boshsaxifa;
