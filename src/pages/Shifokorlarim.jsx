import React, { useState } from "react"; // useState qo'shildi
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
// Qo'shimcha ikonka importi (Sharhlar uchun)
import { IoStarSharp } from "react-icons/io5";

// === Test Sharh Ma'lumotlari ===
const reviewsData = [
    {
        id: 1,
        name: "Javohir Rahimov",
        timeAgo: "2 kun avval",
        stars: 5,
        text: "Tishlarni oqartirish uchun qabulga yozilgan edim. Menga xizmat juda yoqdi. Ajoyib natija! Tavsiya qilaman.",
        image: Shif3 // Misol uchun rasm
    },
    {
        id: 2,
        name: "Bahodirova Muattar",
        timeAgo: "3 kun avval",
        stars: 4,
        text: "Juda zo'r shifokor! Profesional yondashuvdan mamnunman. Xizmat sifati yuqori.",
        image: Shif4 // Misol uchun rasm
    },
    {
        id: 3,
        name: "Akmalov Jasur",
        timeAgo: "1 hafta avval",
        stars: 5,
        text: "Klinika toza, xodimlar hushmuomala. Dr. Jamshid Rahmonov o'z ishining ustasi.",
        image: Denta1 // Misol uchun rasm
    },
];

// Yulduzlarni render qilish funksiyasi
const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <IoStarSharp 
                key={i} 
                className={`text-base ${i < count ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
        );
    }
    return <div className='flex space-x-0.5'>{stars}</div>;
};


function Shifokorlarim() {
    // Faol tabni boshqarish uchun state
    // 'work' = Olingan ishlar (default), 'reviews' = Sharhlar
    const [activeTab, setActiveTab] = useState('work'); 

  return (
    <div
      className="
        w-full mx-auto mb-[150px] bg-white min-h-screen pb-10 relative
      "
    >

      {/* HEADER */}
      <div
        className="
          relative z-10 bg-[#00C1F3] text-white
          p-5 pb-10
          md:p-10 md:pb-14
          lg:p-[70px] lg:pb-16
          xl:p-[100px] xl:pb-20
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
      <div className="xl:px-[100px] lg:px-[70px] md:p-10 px-5 flex items-center gap-3 mt-6">
        <button 
            onClick={() => setActiveTab('work')}
            className={`flex-1 w-[200px] py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition ${
                activeTab === 'work' 
                    ? 'bg-[#00C1F3] text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
        >
          Olingan ishlar
        </button>

        <button 
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 w-[200px] py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition ${
                activeTab === 'reviews' 
                    ? 'bg-[#00C1F3] text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
        >
          Sharhlar
        </button>
      </div>
      
      {/* ======================================= */}
      {/* KONTENT: Olingan ishlar YOKI Sharhlar */}
      {/* ======================================= */}

      {activeTab === 'work' && (
        // === OLINGAN ISHLAR KONTENTI ===
        <div className="px-5 md:px-8 lg:px-[70px] xl:px-[100px] mt-6">

            {/* 1-ISH */}
            <h2 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
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
            <h2 className="text-lg md:text-xl font-semibold mt-6 mb-3 text-gray-800">
                Tish ornatish
            </h2>

            <div className="grid grid-cols-2 gap-3 h-[200px] md:gap-5 lg:gap-10 w-full">

                <div className="h-[250px] md:h-[350px]">
                    <p className="text-sm md:text-base font-medium mb-1">Avval</p>

                    <img
                        src={Shif3}
                        className="w-full h-full rounded-xl object-cover"
                    />
                </div>

                <div className="h-[250px] md:h-[350px]">
                    <p className="text-sm md:text-base font-medium mb-1">Keyin</p>

                    <img
                        src={Shif4}
                        className="w-full h-full rounded-xl object-cover"
                    />
                </div>

            </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        // === SHARHLAR KONTENTI ===
        <div className="px-5 md:px-8 lg:px-[70px] xl:px-[100px] mt-6 space-y-5">
            {reviewsData.map((review) => (
                <div key={review.id} className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3 mb-2">
                        <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-grow">
                            <h4 className="font-semibold text-gray-800 text-sm md:text-base">{review.name}</h4>
                            <div className="flex items-center justify-between mt-1">
                                {renderStars(review.stars)}
                                <span className="text-xs text-gray-500">{review.timeAgo}</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-2 leading-relaxed italic border-l-2 border-[#00C1F3] pl-2">
                        "{review.text}"
                    </p>
                </div>
            ))}
        </div>
      )}

      {/* ======================================= */}


      {/* BOTTOM BAR */}
      <div
        className="
          px-5 md:px-8 lg:px-10 py-3
          w-full mt-5 bg-white fixed bottom-[70px] left-0
          flex items-center justify-between shadow-lg border-t border-gray-100
        "
      >
        <button className="flex-1 bg-[#00C1F3] text-white py-3 rounded-2xl font-medium text-[15px] md:text-base">
          Qabulga yozilish
        </button>

        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#7d58f5] flex items-center justify-center ml-4 cursor-pointer hover:opacity-80 transition">
          <TbMessageDots className="text-2xl md:text-3xl text-white" />
        </div>

        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00cf56] flex items-center justify-center ml-3 cursor-pointer hover:opacity-80 transition">
          <LuPhone className="text-2xl md:text-3xl text-white" />
        </div>
      </div>

    </div>
  );
}

export default Shifokorlarim;