import React, { useState } from "react";
import Denta1 from "../assets/denta1.jpg"
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
// import Sitebar from "../sitebar";

function AppointmentPage() {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];

  const getDaysArray = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const firstDayWeekday = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

    const daysInMonth = [];
    // boshidagi bo'sh kunlar
    for (let i = 0; i < firstDayWeekday; i++) {
      daysInMonth.push(null);
    }
    // oy kunlari
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      daysInMonth.push(i);
    }
    return daysInMonth;
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="w-full mt-0 sm:mt-0 mb-[100px]">

        {/* HEADER */}
        <div className="bg-cyan-500 px-2 sm:px-6 md:px-10 lg:px-[70px] xl:px-[100px] rounded-b-3xl p-5 relative">
          <Link to={"/shifokorlar"}>
          <button className="text-white text-2xl mb-4">←</button>
          </Link>
          <h1 className="text-white text-xl sm:text-2xl font-semibold">Qabulga yozilish</h1>
          <div className="flex gap-1 mt-4">
            <div className="h-2 w-1/3 bg-white rounded-full"></div>
            <div className="h-2 w-1/3 bg-white/40 rounded-full"></div>
            <div className="h-2 w-1/3 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* DOCTOR CARD */}
        <div className=" px-2 sm:px-6 md:px-10 lg:px-[70px] xl:px-[100px]">
          <h2 className="mt-5 font-semibold text-lg sm:text-xl">Shifokor</h2>
          <div className="bg-white p-3 sm:p-4 rounded-2xl shadow flex gap-3 sm:gap-4 items-center">
            <div className="relative w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={Denta1}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-1 right-1 text-gray-500 text-xl px-1 rounded"><CiHeart /></span>
              <span className="absolute bottom-1 right-1 bg-green-500 text-white text-xs px-1 rounded">24/7</span>
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold text-sm sm:text-base">Dr. Jamshid Rahmonov</h3>
              <p className="text-xs sm:text-sm text-gray-500">Ortoped</p>
              <div className="text-xs sm:text-sm text-gray-400 flex gap-2 mt-1">
                <span>254 ta bemor</span>
                <span>12+ y tajriba</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">250 000 so’m o‘rtacha narx</p>
            </div>
          </div>
        </div>

        <div className=" px-2 sm:px-6 md:px-10 lg:px-[70px] xl:px-[100px]">
          {/* CALENDAR */}
          <h2 className="mt-6 font-semibold text-lg sm:text-xl">Sanani tanlang</h2>
          <div className="bg-white p-3 sm:p-4 rounded-2xl shadow mt-2">

            {/* MONTH SELECTOR */}
            <div className="flex justify-between items-center mb-3 text-sm sm:text-base">
              <button onClick={prevMonth} className="text-2xl sm:text-3xl">‹</button>
              <span className="font-semibold">{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}</span>
              <button onClick={nextMonth} className="text-2xl sm:text-3xl">›</button>
            </div>

            {/* DAYS HEADER */}
            <div className="grid grid-cols-7 text-gray-500 mb-1 text-xs sm:text-sm">
              {days.map((d) => (
                <div key={d} className="font-medium ml-4 max-[400px]:ml-2">{d}</div>
              ))}
            </div>

            {/* DAYS GRID */}
            <div className="grid grid-cols-7 text-center gap-1">
              {getDaysArray().map((day, i) => (
                <div
                  key={i}
                  onClick={() => day && setSelectedDate(day)}
                  className={`h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center rounded-full cursor-pointer
                ${selectedDate === day ? "bg-cyan-500 text-white" : ""}
                ${day ? "hover:bg-cyan-100" : "text-gray-300"}
                `}
                >
                  {day || ""}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SELECTED DATE & BUTTON */}
        <div className="mt-5 px-2 sm:px-6 md:px-10 lg:px-[70px] xl:px-[100px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          {selectedDate && (
            <div className="font-medium text-sm sm:text-base">
              Tanlangan sana:
              <span className="text-cyan-600 ml-2">
                {selectedDate}-{months[currentMonth.getMonth()]}-{currentMonth.getFullYear()}
              </span>
            </div>
          )}
          <Link to={"/qabulgayozilish2"}>
            <button className="w-full sm:w-auto bg-cyan-500 text-white py-3 px-6 rounded-full text-base shadow">
            Keyingi qadam
          </button>
          </Link>
        </div>

      </div>
      {/* <Sitebar/> */}
    </div>
  );
}
export default AppointmentPage;
