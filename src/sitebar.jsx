import React from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import { FiHome, FiUser } from "react-icons/fi";
import { FaUserDoctor, FaRegHeart } from "react-icons/fa6";

function Sitebar() {
    const location = useLocation();
    const currentPath = location.pathname;

    // Sitebar ko'rsatilishi kerak bo'lgan yo'llar ro'yxati
    const allowedPaths = [
        '/boshsaxifa',
        '/shifokorlar',
        '/profil',
        '/Notification' 
    ];
    
    // >>>>>>>>>>> BU YERDA O'ZGARISH QILINDI <<<<<<<<<<<
    // Joriy yo'l ruxsat berilgan yo'llar ichida bo'lmasa, yashiramiz.
    if (!allowedPaths.includes(currentPath)) {
        return null; 
    }

    // Navigatsiya bandlari
    const navItems = [
        { path: '/boshsaxifa', Icon: FiHome, label: 'Bosh saxifa' },
        { path: '/shifokorlar', Icon: FaUserDoctor, label: 'Shifokorlarim' },
        { path: '/yoqtirishlar', Icon: FaRegHeart, label: 'Yoqtirishlar' },
        { path: '/profil', Icon: FiUser, label: 'Profil' },
    ];


    return (
        <header className='w-full h-[71px] border border-gray-400 fixed bg-white bottom-0 left-0 z-50'>
            <nav className='h-full flex items-center'>
                <ul className="m-auto w-[90%] flex justify-between"> 
                    
                    {navItems.map((item) => {
                        const isActive = currentPath === item.path;
                        const iconColor = isActive ? '#00BCE4' : 'text-gray-500';
                        const textColor = isActive ? '#00BCE4' : 'text-gray-500';

                        return (
                            <li key={item.path} className="w-[23%] text-center">
                                <Link to={item.path} className="block"> 
                                    <item.Icon className={`m-auto text-[20px] ${iconColor}`} />
                                    <p className={`text-[12px] ${textColor} mt-1`}>{item.label}</p>
                                    
                                    {isActive && (
                                        <hr className='w-[20px] m-auto border-[1.5px] rounded-3xl border-[#00BCE4]' />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Sitebar;