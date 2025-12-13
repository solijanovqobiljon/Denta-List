import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    FaChevronLeft, 
    FaSearch, 
    FaRegBell, 
    FaStar, 
    FaHeart
} from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";

// Rasm importlari
import doctor1Img from "../assets/denta1.jpg"; 
import doctor2Img from "../assets/denta2.jpg"; 


// === RANG KONSTANTALARI (Tailwindga yordam berish uchun CSS formatida saqlanadi) ===
// Eslatma: Tailwind CSS dinamik klasslarni (masalan, `bg-[${variable}]`) to'g'ri tanimaydi. 
// Shuning uchun bu ranglarni inline style yoki to'g'ridan-to'g'ri string orqali ishlatish kerak.
const primaryTeal = '#00BCE4'; // Moviy-firuzarang
const darkText = '#272937'; // Asosiy matn
const accentRed = '#FF6F47'; // O'chirish (Trash) rangi


function Yoqtirishlar() {
    const navigate = useNavigate();

    // === STATE LAR ===
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [doctorToDeleteId, setDoctorToDeleteId] = useState(null);
    
    // Shifokorlar ro'yxati
    const [favoriteDoctors, setFavoriteDoctors] = useState([
        {
            id: 1,
            name: "Dr. Jamshid Rahmonov",
            specialty: "Ortoped",
            rating: 4.9,
            distance: 5, // km
            patients: 254,
            experience: 12, // + tajriba
            price: "250 000",
            image: doctor1Img,
        },
        {
            id: 2,
            name: "Dr. O'tkir Rustamov",
            specialty: "Terapevt",
            rating: 4.9,
            distance: 4, // km
            patients: 124,
            experience: 10, // + tajriba
            price: "255 000",
            image: doctor2Img,
        },
    ]);
    
    // === FUNKSIYALAR ===
    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoToNotifications = () => {
        navigate('/Notification'); 
    };
    
    // >>> QABULGA YOZILISH FUNKSIYASI - O'ZGARTIRILDI <<<
    const handleAppointment = (doctorId) => {
        // Shifokor ID sini parametr sifatida /qabulgayozilish sahifasiga yuboramiz
        navigate(`/qabulgayozilish?doctorId=${doctorId}`); 
        console.log(`Shifokor ${doctorId} ga qabulga yozilish sahifasiga yo'naltirilmoqda.`);
    };
    
    const handleChat = (doctorId) => {
        console.log(`Shifokor ${doctorId} bilan chat`);
        // navigate(`/chat/${doctorId}`); // Agar chat sahifangiz bo'lsa
    };
    
    const handleCall = (doctorId) => {
        console.log(`Shifokor ${doctorId} ga qo'ng'iroq`);
        // window.location.href = `tel:+998xxxxxxxx`; // Qo'ng'iroq qilish uchun
    };

    // Yoqtirishdan olib tashlash MODALINI OCHISH funksiyasi
    const handleRemoveFavoriteModalOpen = (doctorId) => {
        setDoctorToDeleteId(doctorId);
        setIsDeleteModalOpen(true);
    };

    // Yoqtirishdan olib tashlashni TASDIQLASH funksiyasi
    const handleConfirmRemoveFavorite = () => {
        if (doctorToDeleteId !== null) {
            setFavoriteDoctors(currentDoctors => 
                currentDoctors.filter(doctor => doctor.id !== doctorToDeleteId)
            );
            console.log(`Shifokor ${doctorToDeleteId} yoqtirishlardan olib tashlandi.`);
        }
        setIsDeleteModalOpen(false);
        setDoctorToDeleteId(null);
    };

    // Yoqtirishdan olib tashlashni BEKOR QILISH funksiyasi
    const handleCancelRemoveFavorite = () => {
        setIsDeleteModalOpen(false);
        setDoctorToDeleteId(null);
    };


    return (
        <div className='min-h-screen bg-gray-50 pb-[80px]'> 
            
            {/* Yuqori Sarlavha (Header) - Rang inline style orqali qo'llanildi */}
            <header 
                className={`p-4 pb-16 pt-8 rounded-b-[40px] shadow-lg relative`}
                style={{backgroundColor: primaryTeal}}
            >
                <div className="flex justify-between items-center mb-6">
                    {/* Orqaga qaytish o'qi */}
                    <FaChevronLeft 
                        className={`text-white text-2xl cursor-pointer`} 
                        onClick={handleGoBack}
                    />
                    {/* Chat Ikonkasi */}
                    <LuMessageSquareText className={`text-white text-2xl cursor-pointer`} /> 
                </div>

                {/* Sahifa nomi */}
                <h1 className={`text-white text-2xl font-bold mb-4`}>
                    Menga yoqqan shifokorlar
                </h1>

                {/* Qidiruv maydoni */}
                <div className='relative'>
                    <input 
                        type="text"
                        placeholder="Shifokor yoki klinika qidirish..."
                        className="w-full h-12 bg-white rounded-xl shadow-md pl-12 pr-12 text-sm focus:outline-none"
                    />
                    <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
                    {/* Notification Ikonkasi */}
                    <FaRegBell 
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer'
                        onClick={handleGoToNotifications}
                    />
                </div>
            </header>

            {/* Asosiy Kontent - Shifokorlar Ro'yxati */}
            <div className='p-4 space-y-5'>
                {favoriteDoctors.map((doctor) => (
                    <div 
                        key={doctor.id} 
                        className='bg-white rounded-2xl shadow-md p-4 flex flex-col'
                    >
                        {/* Shifokorning asosiy ma'lumotlari */}
                        <div className='flex items-center space-x-4 mb-4'>
                            {/* Rasm va uning ustidagi badge'lar */}
                            <div className='relative flex-shrink-0'>
                                <img 
                                    src={doctor.image || "https://via.placeholder.com/100"}
                                    alt={doctor.name}
                                    className="w-24 h-24 rounded-2xl object-cover"
                                />
                                {/* Yoqtirish (Heart) ikonka */}
                                <div className='absolute top-2 right-2 p-1 rounded-full bg-white opacity-90'>
                                     <FaHeart className={`text-red-500 text-base`} /> 
                                </div>
                                {/* Ish vaqti badge'i (24/7) */}
                                <div className='absolute bottom-1 right-1 px-2 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full'>
                                    24/7
                                </div>
                            </div>

                            {/* Matnli ma'lumotlar */}
                            <div className='flex-grow'>
                                <h3 
                                    className={`text-lg font-bold`} 
                                    style={{color: darkText}}
                                >
                                    {doctor.name}
                                </h3>
                                <p className='text-gray-500 text-sm mb-2'>{doctor.specialty}</p>

                                {/* Rating va Masofa */}
                                <div className='flex items-center space-x-3 text-sm text-gray-600 mb-2'>
                                    <div className='flex items-center'>
                                        <FaStar className='text-yellow-500 text-xs mr-1' />
                                        <span>{doctor.rating}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        {/* Joylashuv ikonkasini qo'yamiz */}
                                        <span className='mr-1'>📍</span> 
                                        <span>{doctor.distance} km</span>
                                    </div>
                                </div>

                                {/* Bemorlar, Tajriba va Narx */}
                                <div className='text-xs text-gray-500 space-y-1'>
                                    <div className='flex items-center space-x-2'>
                                        <FaUserGroup className='text-gray-400' />
                                        <span>{doctor.patients} ta bemor</span>
                                        <span>|</span>
                                        <span>{doctor.experience}+ tajriba</span>
                                    </div>
                                    <p className='font-semibold text-sm'>
                                        {doctor.price} so'm o'rtacha narx
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Pastki tugmalar qismi (Qabulga yozilish va Ikkilamchi tugmalar) */}
                        <div className='flex items-center space-x-3 pt-3 border-t border-gray-100'>
                            {/* Qabulga yozilish tugmasi */}
                            <button
                                onClick={() => handleAppointment(doctor.id)}
                                className={`flex-1 h-12 border text-base font-semibold rounded-full hover:bg-cyan-50 transition`}
                                style={{borderColor: primaryTeal, color: primaryTeal}}
                            >
                                Qabulga yozilish
                            </button>
                            
                            {/* Xabar tugmasi */}
                            <button
                                onClick={() => handleChat(doctor.id)}
                                className='w-12 h-12 rounded-full flex justify-center items-center hover:bg-purple-200 transition'
                                style={{backgroundColor: '#7B7BFF'}}
                            >
                                <LuMessageSquareText className='text-white text-lg' /> 
                            </button>
                            
                            {/* Qo'ng'iroq tugmasi */}
                            <button
                                onClick={() => handleCall(doctor.id)}
                                className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-green-600 transition`}
                                style={{backgroundColor: '#00E42A'}}
                            >
                                <FiPhone className={`text-white text-lg`} /> 
                            </button>

                            {/* O'chirish tugmasi - MODALNI OCHADI */}
                            <button
                                onClick={() => handleRemoveFavoriteModalOpen(doctor.id)}
                                className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-red-500 transition`}
                                style={{backgroundColor: accentRed}}
                            >
                                <RiDeleteBin6Line className={`text-white text-lg`} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* >>> YOQTIRISHDAN OLIB TASHLASH MODALI <<< */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-2xl mx-6 p-6 w-11/12 max-w-sm">
                        
                        {/* Modal matni */}
                        <h3 
                            className={`text-center text-lg font-semibold mb-6`}
                            style={{color: darkText}}
                        >
                            Rostdan ham o'chirmoqchimisiz?
                        </h3>

                        <div className="flex flex-col space-y-3">
                            {/* Yo'q / Bekor qilish tugmasi */}
                            <button
                                onClick={handleCancelRemoveFavorite}
                                className={`w-full h-12 text-white text-base font-semibold rounded-xl hover:bg-cyan-600 transition`}
                                style={{backgroundColor: primaryTeal}}
                            >
                                Yo'q
                            </button>

                            {/* Ha / Tasdiqlash tugmasi (Borderli) */}
                            <button
                                onClick={handleConfirmRemoveFavorite}
                                className={`w-full h-12 border text-base font-semibold rounded-xl hover:bg-gray-100 transition`}
                                style={{borderColor: primaryTeal, color: primaryTeal}}
                            >
                                Ha
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* >>> MODAL TUGADI <<< */}

        </div>
    );
}

export default Yoqtirishlar;