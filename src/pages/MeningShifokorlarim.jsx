import React from 'react';
import { Link } from 'react-router-dom'; 

// --- Rasm importlari: Ularni namuna ma'lumotlar massividan olib tashladik, lekin kerak bo'lishi mumkinligi uchun qoldiramiz.
// import Denta1 from "../assets/denta1.jpg"; 
// import Denta3 from "../assets/denta3.jpg"; 

function MeningShifokorlarim() {
  
  // Haqiqiy loyihada bu ma'lumotlar global state (Context/Redux) orqali boshqariladi.
  
  // --- ASOSIY O'ZGARTIRISH: Boshida ro'yxatni bo'sh qilib qo'yamiz.
  const myAppointments = []; 
  
  const hasAppointments = myAppointments.length > 0;

  return (
    <div className="w-full min-h-[90vh] p-5 md:px-10 lg:px-[70px] xl:px-[100px] bg-white mb-[71px]">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
        {/* Ikonka qo'shildi */}
       Mening Shifokorlarim
      </h1>

      {/* --- SHARTLI RENDERING QISMI --- */}
      {hasAppointments ? (
        // 1. Ma'lumot BOR bo'lsa (Hozir bu qism ishlamaydi)
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {/* myAppointments bo'sh bo'lgani uchun bu map ishi tushmaydi */}
        </div>
      ) : (
        // 2. Ma'lumot YO'Q bo'lsa (Bu qism ishlaydi)
        <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-50 border border-gray-200 rounded-xl shadow-md mt-10">
          {/* Ikonka qo'shildi */}
          <p className="text-xl font-medium text-gray-700 mb-2">
            Siz hali birorta shifokor qabuliga yozilmagansiz.
          </p>
          <p className="text-gray-500 max-w-md">
            Qabulga yozilish orqali shifokoringizni bu yerda doimiy ro'yxatda ko'rishingiz mumkin.
          </p>
          {/* Bosh Sahifaga o'tish tugmasi */}
          <Link to="/boshsaxifa" className="mt-5 px-6 py-2 bg-[#00C1F3] text-white rounded-full font-semibold hover:bg-[#009ac2] transition">
            Shifokor qidirish
          </Link>
        </div>
      )}
      
    </div>
  );
}

export default MeningShifokorlarim;