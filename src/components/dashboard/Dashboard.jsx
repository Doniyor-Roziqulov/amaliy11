import React from "react";
import { PiStudentFill } from "react-icons/pi";

const Dashboard = () => {
    return (
        <div>
            <h2 className="font-bold mb-8">Dashboard</h2>
            <div className="flex items-center gap-x-5 mb-6">
                <div className="flex items-center gap-x-4 bg-white p-3 rounded-xl border-l-[4px] border-blue-800">
                    <div className="rounded-full w-[45px] h-[45px] flex items-center justify-center bg-blue-100">
                        <PiStudentFill className="text-blue-900 text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold">2k+</p>
                        <p>Studentlar soni</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 bg-white p-3 rounded-xl border-l-[4px] border-yellow-600">
                    <div className="rounded-full w-[45px] h-[45px] flex items-center justify-center bg-yellow-100">
                        <PiStudentFill className="text-yellow-500 text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold">200+</p>
                        <p>O'qituvchilar soni</p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 bg-white p-3 rounded-xl border-l-[4px] border-blue-800">
                    <div className="rounded-full w-[45px] h-[45px] flex items-center justify-center bg-blue-100">
                        <PiStudentFill className="text-blue-900 text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold">1k+</p>
                        <p>Bugungi talabalar</p>
                    </div>
                </div>
            </div>
            <div className="flex items-start gap-x-6">
                <div className="w-[650px] py-6 bg-white rounded-xl">
                    <div className="flex items-center justify-between px-6">
                        <p className="font-bold">Eng yaxshi 5ta student</p>
                        <select
                            className="border rounded-lg border-black"
                            name=""
                            id="">
                            <option value="">1-guruh</option>
                            <option value="">2-guruh</option>
                            <option value="">3-guruh</option>
                            <option value="">4-guruh</option>
                            <option value="">5-guruh</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between px-6">
                        <p className="text-xs mt-4 mb-4">O'quvchi ismi</p>
                        <p className="text-xs mt-4 mb-4">Baholar</p>
                        <p className="text-xs mt-4 mb-4">Baholar</p>
                    </div>
                    <div className="flex items-center justify-between py-1 px-6">
                        <div className="flex items-center gap-x-2">
                            <img
                                className="w-10 h-10 rounded-2xl object-contain"
                                src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                                alt=""
                            />
                            <p className="font-bold">Amir</p>
                        </div>
                        <p className="py-1 px-8 rounded-lg bg-blue-100">5</p>
                        <p>5</p>
                    </div>
                    <div className="flex items-center justify-between py-1 bg-blue-50 px-6">
                        <div className="flex items-center gap-x-2">
                            <img
                                className="w-10 h-10 rounded-2xl object-contain"
                                src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                                alt=""
                            />
                            <p className="font-bold">Amir</p>
                        </div>
                        <p className="py-1 px-8 rounded-lg bg-blue-100">5</p>
                        <p>5</p>
                    </div>
                    <div className="flex items-center justify-between py-1 px-6">
                        <div className="flex items-center gap-x-2">
                            <img
                                className="w-10 h-10 rounded-2xl object-contain"
                                src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                                alt=""
                            />
                            <p className="font-bold">Amir</p>
                        </div>
                        <p className="py-1 px-8 rounded-lg bg-blue-100">5</p>
                        <p>5</p>
                    </div>
                </div>
                <div className="w-[380px] bg-white p-6 rounded-xl">
                    <p className="font-bold">Guruhlar</p>
                    <div className="flex justify-between items-center py-1 border-b border-neutral-300">
                        <p>Guruhlar</p>
                        <p>Reyting</p>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <p>Guruhlar</p>
                        <p>1</p>
                    </div>
                    <div className="flex justify-between items-center py-2 bg-blue-50">
                        <p>Guruhlar</p>
                        <p>2</p>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <p>Guruhlar</p>
                        <p>3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
