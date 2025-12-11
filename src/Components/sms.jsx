import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Sms() {
    
    // Raqam holatini saqlash (bu 6 xonali kod bo'ladi)
    const [smsCode, setSmsCode] = useState('');
    
    // Navigatsiya va oldingi sahifadan olingan ma'lumot (telefon raqami)
    const navigate = useNavigate();
    const location = useLocation();
    
    // Oldingi sahifadan kelgan raqamni olish (agar mavjud bo'lsa, uni ko'rsatish uchun)
    const phone = location.state?.phone || "+998 XX XXX-XX-XX"; // Agar raqam uzatilmagan bo'lsa, placeholder

    // Ranglar
    const buttonColor = '#00BCE4'; // Keyingi tugma rangi

    /**
     * Kiritilgan kodni 3 raqamdan keyin chiziqcha bilan formatlaydi (XXX-XXX)
     */
    const formatCode = (value) => {
        // Faqat raqamlarni qoldiramiz
        const cleaned = ('' + value).replace(/\D/g, ''); 
        
        // 6 xonadan ko'p bo'lmasin
        const limited = cleaned.substring(0, 6); 

        // 3-raqamdan keyin chiziqcha qo'yish
        const match = limited.match(/^(\d{3})(\d{3})$/);
        
        if (match) {
            return `${match[1]} - ${match[2]}`;
        }
        
        // Agar 3 ta raqam kiritilgan bo'lsa, shunchaki qaytaramiz (chiziqcha qo'shilmasdan)
        return limited;
    };


    const handleCodeChange = (event) => {
        const input = event.target.value;
        const formatted = formatCode(input);
        
        // Formatlangan qiymatni saqlaymiz. Faqat raqam qismini olib, 6 xonadan oshishini cheklaymiz.
        const rawDigits = ('' + formatted).replace(/\D/g, '').substring(0, 6);

        if (rawDigits.length <= 6) {
            setSmsCode(formatted);
        }
    };

    const handleNext = () => {
        const rawDigits = smsCode.replace(/\D/g, '');
        if (rawDigits.length === 6) {
            // Kod to'g'ri kiritilgan bo'lsa, keyingi sahifaga o'tamiz
            // Masalan: Parol o'rnatish sahifasi (/set-password)
            console.log("SMS kod: " + rawDigits);
            navigate('/profile'); 
        } else {
            alert("Iltimos, 6 xonali kodni to'liq kiriting.");
        }
    };
    
    const handleCancel = () => {
        // Oldingi sahifaga qaytish (masalan, ro'yxatdan o'tish sahifasi)
        navigate(-1); 
    };


    return (
        <div className='flex flex-col items-center pt-[150px] min-h-screen bg-white'>
            
            {/* SARLAVHA */}
            <h1 className='text-center text-[24px] font-bold text-[#272937] w-[300px] leading-[30px] mb-[15px]'>
                SMS orqali yuborilgan kodni kiriting
            </h1>
            
            {/* Yuborilgan raqamni ko'rsatish (Qo'shimcha) */}
            <p className='text-[#A3AED0] text-[16px] mb-[30px]'>
                Raqam: <span className='text-[#6155F5] font-semibold'>{phone}</span>
            </p>

            {/* INPUT BO'LIMI */}
            <div className='w-[300px]'>
                <input
                    id="sms-inp"
                    type="tel" 
                    value={smsCode}
                    onChange={handleCodeChange}
                    maxLength={9} // "XXX - XXX" uchun 9 ta belgi
                    placeholder="985 - 567"
                    className={`w-full h-[65px] border-[2px] border-[#3353FF] rounded-[13px] text-center 
                                text-[28px] font-semibold text-[#6155F5] tracking-widest
                                focus:border-[#3353FF] focus:outline-none`}
                    style={{ letterSpacing: smsCode.length > 0 && '5px' }} // Raqamlar orasidagi masofani qo'shish
                />
            </div>
            
            {/* KEYINGI TUGMASI */}
            <button 
                className={`w-[300px] h-[55px] bg-[${buttonColor}] text-white text-[18px] font-semibold 
                            rounded-[13px] mt-[35px] shadow-lg hover:bg-opacity-90 transition`}
                onClick={handleNext} 
            >
                Keyingi
            </button>
            
            {/* BEKOR QILISH TUGMASI */}
            <button 
                className={`w-[300px] h-[55px] border-[2px] border-[${buttonColor}] text-[${buttonColor}] text-[18px] font-semibold 
                            rounded-[13px] mt-[15px] bg-white hover:bg-gray-50 transition`}
                onClick={handleCancel}
            >
                Bekor qilish
            </button>
            
        </div>
    )
}

export default Sms;