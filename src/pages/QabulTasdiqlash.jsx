import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoCalendarOutline, IoTimeOutline } from 'react-icons/io5';
import { CiHeart } from "react-icons/ci";

      function QabulTasdiqlash() {
        const navigate = useNavigate();

        return (
          <div className="min-h-screen bg-gray-50 flex flex-col pb-32">
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-b-3xl pt-6 pb-12 shadow-lg">
              <div className="max-w-6xl mx-auto px-4 md:px-10 xl:px-6">
                <div className="flex items-center gap-3">
                  <button className="text-white ml-2 hover:bg-white/20 p-2 rounded-lg transition-colors">
                    <IoArrowBack size={22} />
                  </button>
                  <h1 className="text-white text-lg sm:text-2xl font-semibold">Qabulga yozilish</h1>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <div className="h-1 flex-1 bg-white rounded"></div>
                  <div className="h-1 flex-1 bg-white rounded"></div>
                  <div className="h-1 flex-1 bg-white rounded"></div>
                </div>
              </div>
            </div>

            <div className="px-4 mt-[100px] max-w-6xl mx-auto w-full">
              <div className="flex flex-col items-center mb-8">
                <div className="w-28 h-28 max-sm:h-16 max-sm:w-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg -mt-12 border-4 border-white">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-4">Qabul tasdiqlandi! 🎉</h2>
                <p className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-2xl text-center mt-2">
                  Sizning qabulingiz muvaffaqiyatli ro'yxatdan o'tkazildi. Tez orada SMS orqali tasdiqlash yuboriladi.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="h-full flex flex-col">
                  <div className="bg-white w-full rounded-2xl shadow-md overflow-hidden mb-4 lg:mb-0 h-full flex">
                    <div className="flex-1 p-3 flex gap-6 items-center">
                      <div className="relative w-[50%] h-36  max-sm:w-[40%] flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop"
                          alt="Doctor"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-1 left-3 flex items-center gap-2">
                          <div className="max-sm:text-[10px] rounded-full flex items-center gap-1">⭐ 4.9</div>
                          <div className="rounded-full flex max-sm:text-[10px] items-center gap-1">📍 5 km</div>
                          <div className="bg-emerald-500 text-white max-sm:text-[10px] px-2 py-0.5 rounded-full text-[12px]">24/7</div>
                        </div>
                          <div className="absolute top-1.5 text-gray-400 right-1.5 text-2xl flex items-center gap-1 "><CiHeart /></div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 max-sm:text-[16px] mb-1">Dr. Jamshid Rahmonov</h3>
                        <p className="text-gray-500 max-sm:text-[10px] text-sm mb-3">Ortoped</p>

                        <div className="flex items-center gap-4 text-sm max-sm:text-[10px] text-gray-600 mb-4">
                          <span>👤 254 ta bemor</span>
                          <span>12+ tajriba</span>
                        </div>

                        <p className="text-lg font-bold max-sm:text-[13px] max-[400px]:text-[7px] text-gray-900">250 000 <span className="text-sm font-normal text-gray-500 max-[400px]:text-[12px]">so'm ortacha narx</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-full flex flex-col justify-start">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <IoCalendarOutline size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <div className="text-gray-900 font-medium">Qabul sanasi</div>
                        </div>
                      </div>
                      <div className="text-blue-600 font-semibold">12-Sentabr, 2025</div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-cyan-100 p-3 rounded-lg">
                          <IoTimeOutline size={20} className="text-cyan-600" />
                        </div>
                        <div>
                          <div className="text-gray-900 font-medium">Qabul Vaqti</div>
                        </div>
                      </div>
                      <div className="text-cyan-600 font-semibold">14:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fixed bottom CTA above sitebar */}
            <div className="flex justify-center mt-5 max-sm:mt-[100px]">
              <button onClick={() => navigate('/boshsaxifa')} className="w-[92%] max-w-3xl py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full shadow-lg">Bosh sahifa</button>
            </div>
          </div>
        );
      }

      export default QabulTasdiqlash;
