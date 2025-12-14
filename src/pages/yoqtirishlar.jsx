import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaSearch, FaRegBell, FaStar, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuMessageSquareText } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { FaUserGroup } from "react-icons/fa6";

const primaryTeal = '#00BCE4';
const darkText = '#272937';
const accentRed = '#FF6F47';
const STORAGE_KEY = 'favoriteDoctors';

function Yoqtirishlar() {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [doctorToDeleteId, setDoctorToDeleteId] = useState(null);
  const [favoriteDoctors, setFavoriteDoctors] = useState([]);

  useEffect(() => {
    try {
      const fav = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      setFavoriteDoctors(fav);
    } catch (e) {
      console.error('Error reading favoriteDoctors', e);
      setFavoriteDoctors([]);
    }
  }, []);

  const saveFavorites = (arr) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
      setFavoriteDoctors(arr);
    } catch (e) {
      console.error('Error saving favoriteDoctors', e);
    }
  };

  const handleGoBack = () => navigate(-1);
  const handleGoToNotifications = () => navigate('/Notification');

  const handleAppointment = (doctorId) => {
    const doc = favoriteDoctors.find(d => d.id === doctorId);
    if (doc) {
      navigate('/qabulgayozilish', { state: { doctor: doc } });
    } else {
      navigate('/boshsaxifa');
    }
  };

  const handleChat = (doctorId) => console.log(`Shifokor ${doctorId} bilan chat`);
  const handleCall = (doctorId) => console.log(`Shifokor ${doctorId} ga qo'ng'iroq`);

  const handleRemoveFavoriteModalOpen = (doctorId) => {
    setDoctorToDeleteId(doctorId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmRemoveFavorite = () => {
    if (doctorToDeleteId !== null) {
      const updated = favoriteDoctors.filter(d => d.id !== doctorToDeleteId);
      saveFavorites(updated);
    }
    setIsDeleteModalOpen(false);
    setDoctorToDeleteId(null);
  };

  const handleCancelRemoveFavorite = () => {
    setIsDeleteModalOpen(false);
    setDoctorToDeleteId(null);
  };

  const handleToggleFavorite = (doctorId) => {
    const exists = favoriteDoctors.some(d => d.id === doctorId);
    if (exists) {
      const updated = favoriteDoctors.filter(d => d.id !== doctorId);
      saveFavorites(updated);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 pb-[80px]'>
      <header className={`p-4 pb-16 pt-8 rounded-b-[40px] shadow-lg relative`} style={{ backgroundColor: primaryTeal }}>
        <div className="flex justify-between items-center mb-6">
          <FaChevronLeft className={`text-white text-2xl cursor-pointer`} onClick={handleGoBack} />
          <LuMessageSquareText className={`text-white text-2xl cursor-pointer`} />
        </div>

        <h1 className={`text-white text-2xl font-bold mb-4`}>Menga yoqqan shifokorlar</h1>

        <div className='relative'>
          <input type="text" placeholder="Shifokor yoki klinika qidirish..." className="w-full h-12 bg-white rounded-xl shadow-md pl-12 pr-12 text-sm focus:outline-none" />
          <FaSearch className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400' />
          <FaRegBell className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer' onClick={handleGoToNotifications} />
        </div>
      </header>

      <div className='p-4 space-y-5'>
        {favoriteDoctors.length === 0 ? (
          <div className="text-center p-8 bg-white rounded-xl shadow">Sizda yoqilgan shifokorlar yo'q.</div>
        ) : (
          favoriteDoctors.map((doctor) => (
            <div key={doctor.id} className='bg-white rounded-2xl shadow-md p-4 flex flex-col'>
              <div className='flex items-center space-x-4 mb-4'>
                <div className='relative flex-shrink-0'>
                  <img src={doctor.img || "https://via.placeholder.com/100"} alt={doctor.name} className="w-24 h-24 rounded-2xl object-cover" />
                  <div className='absolute top-2 right-2 p-1 rounded-full bg-white opacity-90 cursor-pointer' onClick={() => handleToggleFavorite(doctor.id)}>
                    <FaHeart className={`text-red-500 text-base`} />
                  </div>
                  <div className='absolute bottom-1 right-1 px-2 py-0.5 bg-green-500 text-white text-xs font-semibold rounded-full'>24/7</div>
                </div>

                <div className='flex-grow'>
                  <h3 className={`text-lg font-bold`} style={{ color: darkText }}>{doctor.name}</h3>
                  <p className='text-gray-500 text-sm mb-2'>{doctor.job}</p>

                  <div className='flex items-center space-x-3 text-sm text-gray-600 mb-2'>
                    <div className='flex items-center'>
                      <FaStar className='text-yellow-500 text-xs mr-1' />
                      <span>{doctor.rating}</span>
                    </div>
                    <div className='flex items-center'>
                      <span className='mr-1'>📍</span>
                      <span>—</span>
                    </div>
                  </div>

                  <div className='text-xs text-gray-500 space-y-1'>
                    <div className='flex items-center space-x-2'>
                      <FaUserGroup className='text-gray-400' />
                      <span>{doctor.patients} ta bemor</span>
                      <span>|</span>
                      <span>{doctor.exp}+ tajriba</span>
                    </div>
                    <p className='font-semibold text-sm'>{doctor.price} so'm o'rtacha narx</p>
                  </div>
                </div>
              </div>

              <div className='flex items-center space-x-3 pt-3 border-t border-gray-100'>
                <button onClick={() => handleAppointment(doctor.id)} className={`flex-1 h-12 border text-base font-semibold rounded-full hover:bg-cyan-50 transition`} style={{ borderColor: primaryTeal, color: primaryTeal }}>
                  Qabulga yozilish
                </button>

                <button onClick={() => handleChat(doctor.id)} className='w-12 h-12 rounded-full flex justify-center items-center hover:bg-purple-200 transition' style={{ backgroundColor: '#7B7BFF' }}>
                  <LuMessageSquareText className='text-white text-lg' />
                </button>

                <button onClick={() => handleCall(doctor.id)} className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-green-600 transition`} style={{ backgroundColor: '#00E42A' }}>
                  <FiPhone className={`text-white text-lg`} />
                </button>

                <button onClick={() => handleRemoveFavoriteModalOpen(doctor.id)} className={`w-12 h-12 rounded-full flex justify-center items-center hover:bg-red-500 transition`} style={{ backgroundColor: accentRed }}>
                  <RiDeleteBin6Line className={`text-white text-lg`} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl mx-6 p-6 w-11/12 max-w-sm">
            <h3 className={`text-center text-lg font-semibold mb-6`} style={{ color: darkText }}>Rostdan ham o'chirmoqchimisiz?</h3>
            <div className="flex flex-col space-y-3">
              <button onClick={handleCancelRemoveFavorite} className={`w-full h-12 text-white text-base font-semibold rounded-xl`} style={{ backgroundColor: primaryTeal }}>
                Yo'q
              </button>
              <button onClick={handleConfirmRemoveFavorite} className={`w-full h-12 border text-base font-semibold rounded-xl`} style={{ borderColor: primaryTeal, color: primaryTeal }}>
                Ha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Yoqtirishlar;