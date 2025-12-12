import React from 'react';
import { useNavigate } from 'react-router-dom';
// React Icons'dan kerakli ikonkalarni import qilamiz
import { FaChevronLeft, FaSearch, FaRegBell, FaRegCommentDots } from "react-icons/fa";
import { FiUser, FiHeart, FiLogOut } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsChatText } from "react-icons/bs"; // Chat Ikonkasi
import { MdOutlineModeEdit } from "react-icons/md"; // O'zgartirish uchun
import { FaUserDoctor } from "react-icons/fa6";
import profileImg from "../assets/denta1.jpg" // Rasm fayli importi

function Profil_pages() {
    const navigate = useNavigate();

    // Ranglar konstantalari
    const primaryTeal = '#00BCE4'; // Moviy-firuzarang
    const darkText = '#272937'; // Asosiy matn
    const white = '#FFFFFF';

    // Menyu elementlari ro'yxati (Ikonka, Matn, Yo'nalish)
    const menuItems = [
        { Icon: FaUserDoctor, label: 'Mening shifokorlarim', path: '/shifokorlar' }, // Route nomi '/shifokorlar' bo'lsa
        { Icon: IoIosHeartEmpty, label: 'Yoqtirishlar', path: '/yoqtirishlar' },
        { Icon: BsChatText, label: 'Sharhlar', path: '/sharhlar' },
        { Icon: MdOutlineModeEdit, label: "Ma'lumotlarni o'zgartirish", path: '/profile' }, 
        { Icon: FiLogOut, label: 'Tizimdan chiqish', action: () => {
            console.log("Tizimdan chiqish...");
            navigate('/login'); // Chiqishdan keyin login sahifasiga yo'naltirish
        }},
    ];

    // Orqaga qaytish funksiyasi
    const handleGoBack = () => {
        navigate(-1); // Bir sahifa orqaga qaytish
    };
    
    // Notification sahifasiga o'tish funksiyasi (Talabga binoan '/Notification' ga o'tadi)
    const handleGoToNotifications = () => {
        navigate('/Notification'); 
    };

    return (
        <div className='min-h-screen bg-white pb-[80px]'> {/* Pastki Sitebar uchun padding qo'shildi */}
            
            {/* Yuqori Sarlavha (Header) */}
            <header className={`bg-[${primaryTeal}] p-4 pb-16 pt-8 rounded-b-[40px] shadow-lg relative`}>
                <div className="flex justify-between items-center mb-6">
                    {/* Orqaga qaytish o'qi */}
                    <FaChevronLeft 
                        className={`text-white text-2xl cursor-pointer`}
                        onClick={handleGoBack}
                    />
                    {/* Chat Ikonkasi */}
                    <BsChatText className={`text-white text-2xl cursor-pointer`} /> 
                </div>

                <div className="flex items-center space-x-4 relative">
                    {/* Profil Rasmi */}
                    <div className="relative">
                        <img 
                            src={profileImg} 
                            alt="Profil rasmi"
                            className="w-20 h-20 rounded-full border-4 border-white object-cover"
                            style={{ boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
                        />
                        {/* Status/Kamera Ikonkasi */}
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full flex justify-center items-center border border-white">
                            {/* Rasmda bu yerda kamera ikonkasiga o'xshash belgi bor, FaRegCommentDots hozircha qoldirildi */}
                            <FaRegCommentDots className="text-white text-xs"/> 
                        </div>
                    </div>
                    
                    <div>
                        <h2 className={`text-white text-xl font-bold`}>Tohirov Azamat</h2>
                        <p className={`text-white text-sm opacity-90`}>
                            📍 Namangan, O'zbekiston
                        </p>
                    </div>
                </div>
            </header>

            <div className='p-4 pt-0'>
                
                <div className='relative -mt-8 mb-8'>
                    <input 
                        type="text"
                        placeholder="Shifokor yoki klinika qidirish..."
                        className="w-full h-12 bg-white rounded-full shadow-md pl-12 pr-12 text-sm focus:outline-none focus:border-blue-600 focus:ring-opacity-50"
                    />
                    <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                    
                    <FaRegBell 
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer'
                        onClick={handleGoToNotifications} // '/Notification' ga o'tadi
                    />
                </div>

                <ul className="bg-white rounded-xl">
                    {menuItems.map((item, index) => (
                        <li 
                            key={index} 
                            className={`p-4 flex items-center cursor-pointer hover:bg-gray-50 transition ${index < menuItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                            onClick={item.action ? item.action : () => navigate(item.path)}
                        >
                            <item.Icon className={`text-xl text-[${darkText}] mr-4`} />
                            <span className={`text-base text-[${darkText}]`}>{item.label}</span>
                        </li>
                    ))}
                </ul>

                {/* Sitebar uchun bo'sh joy */}
                <div className='h-4'></div>
            </div>
        </div>
    );
}

export default Profil_pages;