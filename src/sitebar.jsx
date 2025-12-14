import React from 'react';
import { useLocation, Link } from 'react-router-dom'; 
import { FiHome, FiUser } from "react-icons/fi";
import { FaUserDoctor, FaRegHeart } from "react-icons/fa6";

function Sitebar() {
    const location = useLocation();
    const currentPath = location.pathname;

    // 1. Shifokor profiliga o'tganda Sitebar ko'rinmay qolishini hal qilish uchun:
    // Dinamik yo'llarni tekshirish funksiyasi
    const isDynamicPath = (path) => {
        // Agar yo'l '/shifokorlar/' bilan boshlansa, bu shifokor profili hisoblanadi (masalan, /shifokorlar/1, /shifokorlar/abc)
        return path.startsWith('/shifokorlar/'); 
    }

    // Sitebar ko'rsatilishi kerak bo'lgan statik yo'llar ro'yxati
    const staticPaths = [
        '/boshsaxifa',
        '/profil',
        '/Notification', 
        '/sharhlar', 
        '/B24_7', 
        '/EngYaqin', 
        '/AyolDoktor', 
        '/BolalarDoktori', 
        '/yoqtirishlar',
        '/mening-shifokorlarim' // 'Shifokorlarim' uchun yangi manzil
    ];
    
    // Joriy yo'l ruxsat berilgan statik yoki dinamik yo'llar ichida bo'lmasa, Sitebarni yashiramiz.
    if (!staticPaths.includes(currentPath) && !isDynamicPath(currentPath)) {
        return null; 
    }

    // 2. Navigatsiya bandlari - 'Shifokorlarim' manzilini yangi yo'lga o'zgartirdik.
    const navItems = [
        { path: '/boshsaxifa', Icon: FiHome, label: 'Bosh saxifa' },
        { path: '/mening-shifokorlarim', Icon: FaUserDoctor, label: 'Shifokorlarim' }, // YO'L O'ZGARTIRILDI
        { path: '/yoqtirishlar', Icon: FaRegHeart, label: 'Tanlanganlar' },
        { path: '/profil', Icon: FiUser, label: 'Profil' },
    ];


    return (
        <header className='w-full h-[71px] border border-gray-400 fixed bg-white bottom-0 left-0 z-50'>
            <nav className='h-full flex items-center'>
                <ul className="m-auto w-[90%] flex justify-between"> 
                    
                    {navItems.map((item) => {
                        // Dinamik yo'llarni hisobga olgan holda faol holatni tekshirish
                        let isActive = currentPath === item.path;
                        
                        // Faqat /shifokorlar/:id yo'li uchun qo'shimcha tekshiruv (agar Sitebar elementining yo'li /shifokorlar bilan bog'liq bo'lsa)
                        if (item.path === '/boshsaxifa' && isDynamicPath(currentPath)) {
                            // Agar '/shifokorlar/...' da bo'lsa, 'Bosh sahifa' aktiv bo'lmasligi kerak
                            isActive = false; 
                        }

                        // Agar joriy yo'l `/shifokorlar/:id` bo'lsa, hech qaysi asosiy navigatsiya aktiv bo'lmaydi
                        // Lekin ikonka ranglari joriy pathga bog'liq bo'lganligi uchun, yuqoridagi 'isActive' logikasi yetarli.

                        const iconColor = isActive ? '#00BCE4' : 'text-gray-500';
                        const textColor = isActive ? '#00BCE4' : 'text-gray-500';

                        return (
                            <li key={item.path} className="w-[23%] text-center">
                                <Link to={item.path} className="block"> 
                                    <item.Icon className={`m-auto text-[20px] ${iconColor}`} />
                                    <p className={`text-[12px] ${textColor} mt-1`}>{item.label}</p>
                                    
                                    {/* Faol chiziqni ko'rsatish */}
                                    {isActive && (
                                        <hr className='w-5 m-auto border-[1.5px] rounded-3xl border-[#00BCE4]' />
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