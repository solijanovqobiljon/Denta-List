import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { MdWorkOutline, MdLocationOn, MdOutlineAttachMoney } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import Denta1 from "../assets/denta1.jpg";
import Shif1 from "../assets/shif1.jpg";
import Shif2 from "../assets/shif2.jpg";
import Shif3 from "../assets/shif3.jpg";
import Shif4 from "../assets/shif4.jpg";
import { TbMessageDots } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

function Shifokorlarim() {
  return (
    <div
      className="
        w-full mx-auto mb-[500px] bg-white min-h-screen pb-10 relative
      "
    >

      {/* HEADER */}
      <div
        className="
          relative z-10 bg-[#00C1F3] text-white
          p-5
          md:p-10
          lg:p-[70px]
          xl:p-[100px]
          rounded-b-[35px]
        "
      >
        {/* Back button */}
        <Link to={"/boshsaxifa"}>
          <div className="absolute left-5 top-5 text-3xl md:text-4xl">
            <HiOutlineArrowLeft />
          </div>
        </Link>

        {/* Like */}
        <div className="absolute right-5 top-5 text-3xl md:text-4xl">
          <AiOutlineHeart />
        </div>

        {/* Doctor info */}
        <div className="flex items-center gap-4 mt-10 md:gap-6 lg:gap-8">
          <img
            src={Denta1}
            className="
              w-28 h-20 md:w-36 md:h-28 lg:w-44 lg:h-32
              rounded-xl border-[3.5px] border-white object-cover
            "
          />

          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Dr. Jamshid Rahmonov
            </h2>

            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm md:text-base text-white/90">Ortoped</p>
              <div className="flex items-center gap-1 bg-white/20 px-2 rounded-full">
                <FaStar className="text-yellow-300" />
                <span className="text-[12px] md:text-sm font-medium">4.9</span>
              </div>
            </div>

            <p className="text-sm md:text-base text-white/80 mt-1">
              Smile Dental clinic
            </p>
          </div>
        </div>

      </div>

      {/* Patients / Experience Box */}
      <div
        className="
          translate-y-[-10px]
          m-auto bg-white text-gray-700
          w-[86%]
          shadow-md rounded-b-2xl
          px-6 py-6
          md:px-8 md:py-7
          flex justify-between
        "
      >
        <div className="flex items-center gap-2 md:gap-3">
          <PiUsersThreeLight className="text-xl md:text-2xl text-gray-600" />
          <span className="text-sm md:text-base text-gray-500">254 ta bemor</span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <MdWorkOutline className="text-xl md:text-2xl text-gray-400" />
          <span className="text-sm md:text-base text-gray-500">12+ tajriba</span>
        </div>
      </div>

      {/* INFO LIST */}
      <div className="xl:px-[100px] lg:px-[70px] md:p-10 px-5 md:px-8 mt-1.5 space-y-4">
        <div className="flex items-start gap-3">
          <MdLocationOn className="text-xl md:text-2xl text-pink-500" />
          <p className="text-sm md:text-base text-gray-700 leading-6">
            Namangan vil., Davlatobod t., 5-kichik nohiya, 34.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <BsClockHistory className="text-xl md:text-2xl text-blue-500" />
          <p className="text-sm md:text-base text-gray-700 leading-6">
            24/7 ochiq.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <MdOutlineAttachMoney className="text-xl md:text-2xl text-blue-600" />
          <p className="text-sm md:text-base text-gray-700 leading-6">
            250 000 so’m o‘rtacha narx
          </p>
        </div>
      </div>

      {/* TABS */}
      <div className="xl:px-[100px] lg:px-[70px] md:p-10 px-5 flex items-center gap-3">
        <button className="flex-1 w-[200px] bg-[#00C1F3] text-white py-2 md:py-3 rounded-full font-medium text-sm md:text-base">
          Olingan ishlar
        </button>

        <button className="flex-1 bg-gray-200 text-gray-600 py-2 md:py-3 rounded-full font-medium text-sm md:text-base">
          Sharhlar
        </button>
      </div>

{/* WORK SECTIONS */}
<div className="px-5 md:px-8 lg:px-[70px] xl:px-[100px] mt-6">

  {/* 1-ISH */}
  <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold mb-3">
    Keramik vinir
  </h2>

  <div className="grid grid-cols-2 gap-3 md:gap-5 lg:gap-10 w-full">

    <div>
      <p className="text-sm md:text-base font-medium mb-1">Avval</p>

      <img
        src={Shif1}
        className="w-full h-auto rounded-xl object-cover"
      />
    </div>

    <div>
      <p className="text-sm md:text-base font-medium mb-1">Keyin</p>

      <img
        src={Shif2}
        className="w-full h-auto rounded-xl object-cover"
      />
    </div>

  </div>

  <p className="mt-3 text-sm md:text-base text-gray-600 leading-6">
    Mijoz istagiga binoan to‘liq keramik tishlar muvaffaqiyatli o‘rnatildi.
  </p>

  <div className="mt-6 border-b border-gray-300"></div>

  {/* 2-ISH */}
  <h2 className="text-lg md:text-2xl lg:text-3xl xl:text-5xl font-semibold mt-6 mb-3">
    Tish ornatish
  </h2>

  <div className="grid grid-cols-2 gap-3 h-[200px] md:gap-5 lg:gap-10 w-full">

    <div className="h-[550px]">
      <p className="text-sm md:text-base font-medium mb-1">Avval</p>

      <img
        src={Shif3}
        className="w-full h-full rounded-xl object-cover"
      />
    </div>

    <div className="h-[550px]">
      <p className="text-sm md:text-base font-medium mb-1">Keyin</p>

      <img
        src={Shif4}
        className="w-full h-full rounded-xl object-cover"
      />
    </div>

  </div>

</div>

      {/* BOTTOM BAR */}
      <div
        className="
          px-5 md:px-8 lg:px-10 py-3
          w-full mt-5 bg-white fixed bottom-[70px] left-0
          flex items-center justify-between
        "
      >
        <button className="flex-1 bg-[#00C1F3] text-white py-3 rounded-2xl font-medium text-[15px] md:text-base">
          Qabulga yozilish
        </button>

        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#7d58f5] flex items-center justify-center ml-4">
          <TbMessageDots className="text-2xl md:text-3xl text-white" />
        </div>

        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00cf56] flex items-center justify-center ml-3">
          <LuPhone className="text-2xl md:text-3xl text-white" />
        </div>
      </div>

    </div>
  );
}

export default Shifokorlarim;
