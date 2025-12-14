import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MeningShifokorlarim() {
    const [myAppointments, setMyAppointments] = useState([]);

    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('myAppointments') || '[]');
        setMyAppointments(arr);
    }, []);

    const hasAppointments = myAppointments.length > 0;

    return (
        <div className="w-full min-h-[90vh] p-5 md:px-10 lg:px-[70px] xl:px-[100px] bg-white mb-[71px]">
            <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                Mening Shifokorlarim
            </h1>

            {hasAppointments ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {myAppointments.map((apt) => (
                        <div key={apt.id} className="bg-white p-4 rounded-2xl shadow-md border-1 border-[#009ac2]">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                    <img src={apt.doctor.img} alt={apt.doctor.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{apt.doctor.name}</h3>
                                    <p className="text-sm text-gray-500">{apt.doctor.job}</p>
                                    <p className="text-sm text-gray-600 mt-2">Sana: <strong>{apt.date}</strong></p>
                                    <p className="text-sm text-gray-600">Vaqt: <strong>{apt.time}</strong></p>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <Link to="/qabultasdiqlash" state={{ appointment: apt }} className="text-sm bg-cyan-500 text-white px-3 py-2 rounded-full">Batafsil</Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-50 rounded-xl shadow-md mt-10">
                    <p className="text-xl font-medium text-gray-700 mb-2">
                        Siz hali birorta shifokor qabuliga yozilmagansiz.
                    </p>
                    <p className="text-gray-500 max-w-md">
                        Qabulga yozilish orqali shifokoringizni bu yerda doimiy ro'yxatda ko'rishingiz mumkin.
                    </p>
                    <Link to="/boshsaxifa" className="mt-5 px-6 py-2 bg-[#00C1F3] text-white rounded-full font-semibold hover:bg-[#009ac2] transition">
                        Shifokor qidirish
                    </Link>
                </div>
            )}
        </div>
    );
}

export default MeningShifokorlarim;