import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoLocation, IoStar, IoTime } from 'react-icons/io5';

function QabulgaYozilish2B() {
    const navigate = useNavigate();
    const [selectedTime, setSelectedTime] = useState('14:00');

    const times = [
        '09:00', '10:00', '11:00',
        '14:00', '15:00', '16:00',
        '17:00', '18:00', '19:00'
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-b-3xl p-4 sm:p-6 lg:p-8 shadow-lg">
                <button className="text-white mb-4 sm:mb-6 hover:bg-white/20 p-2 rounded-lg transition-colors">
                    <IoArrowBack size={24} />
                </button>

                <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Qabulga yozilish</h1>

                {/* Progress Steps */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 flex-1 bg-white rounded"></div>
                    <div className="h-1 flex-1 bg-white rounded"></div>
                    <div className="h-1 flex-1 bg-white/40 rounded"></div>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 mt-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:[grid-template-columns:2fr_1fr] gap-6 lg:gap-8 items-stretch">
                    {/* Left Column */}
                    <div className="h-full flex flex-col">
                        {/* Doctor Card */}
                        <div className="mb-1 flex-none">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Shifokor</h2>

                            <div className="bg-white flex flex-col sm:flex-row rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="relative w-full sm:w-[45%] lg:w-[45%] flex-none h-full flex items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=200&fit=crop"
                                        alt="Doctor"
                                        className="block max-w-full max-h-full object-contain object-center rounded-2xl sm:rounded-l-2xl"
                                    />
                                    <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2">
                                        <div className="bg-white/95 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1">
                                            <IoStar size={14} className="text-yellow-400" />
                                            <span className="text-xs font-semibold">4.9</span>
                                        </div>
                                        <div className="bg-white/95 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1">
                                            <IoLocation size={14} className="text-cyan-500" />
                                            <span className="text-xs font-semibold">5 km</span>
                                        </div>
                                        <div className="bg-emerald-500 px-2 py-1 rounded-full flex items-center gap-1">
                                            <IoTime size={14} className="text-white" />
                                            <span className="text-xs font-semibold text-white">24/7</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 sm:p-4 lg:p-6 w-full sm:w-[55%] lg:w-[55%]">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Dr. Jamshid Rahmonov</h3>
                                    <p className="text-gray-500 text-sm mb-3">Ortoped</p>

                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-3">
                                        <div>
                                            <span className="text-gray-400">👤 254 ta bemor</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400">12+ tajriba</span>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-gray-100">
                                        <p className="text-lg sm:text-xl font-bold text-gray-900">
                                            250 000 <span className="text-xs sm:text-sm font-normal text-gray-500">so'm ortacha narx</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Time Selection */}
                        <div className="flex-1">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Vaqtni tanlang</h2>

                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-2 sm:gap-3">
                                {times.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-semibold transition-all text-sm sm:text-base ${selectedTime === time
                                            ? 'bg-cyan-400 text-white shadow-lg scale-105'
                                            : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="h-full flex flex-col justify-between">
                        {/* Additional Info */}
                        <div className="mb-6">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Qo'shimcha izoh kiritish</h2>

                            <textarea
                                placeholder="Shikoyatingizni yozing..."
                                className="w-full h-32 sm:h-40 lg:h-[310px] p-4 bg-white border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                            <button className="py-3 sm:py-4 bg-white border-2 border-cyan-400 text-cyan-500 font-semibold rounded-xl hover:bg-cyan-50 transition-colors">
                                Ortga
                            </button>
                            <button onClick={() => navigate('/qabultasdiqlash')} className="py-3 sm:py-4 bg-cyan-400 text-white font-semibold rounded-xl hover:bg-cyan-500 transition-colors shadow-lg">
                                Tasdiqlash
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QabulgaYozilish2B;
