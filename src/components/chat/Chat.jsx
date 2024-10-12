import React, { useState } from "react";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoPaperPlane, IoSearchOutline } from "react-icons/io5";
import { FaPaperclip } from "react-icons/fa";
import { Button, Modal } from "antd";
import { PiStudentFill } from "react-icons/pi";

const Chat = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Modal
                title="Guruh yaratish"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <input
                    className="w-full py-2 rounded-md bg-neutral-100 pl-2 mb-5"
                    placeholder="Nomi"
                    type="text"
                    name=""
                    id=""
                />
                <div className="flex items-center justify-between mb-2">
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                    <div className="flex gap-x-4 items-center bg-blue-500 px-5 py-1 rounded-md">
                        <p className="text-white">1-kurs</p>
                        <div className="bg-neutral-200 inline-block p-2 rounded-md">
                            <PiStudentFill className="text-blue-600 text-xl" />
                        </div>
                    </div>
                </div>
            </Modal>
            <h2 className="font-bold mb-4">Chat</h2>
            <div className="flex gap-x-4">
                <div className="flex flex-col bg-white h-[500px] pt-16 rounded-lg">
                    <div className="flex flex-col dash p-1 items-center">
                        <HiMiniChatBubbleLeftRight className="text-xl" />
                        <p className="text-[9px]">Barcha chatlar</p>
                    </div>
                    <button
                        onClick={showModal}
                        className="flex flex-col px-1 py-4 items-center">
                        <BsPlusCircleFill className="text-blue-600" />
                    </button>
                </div>
                <div className="bg-white rounded-lg p-3">
                    <div className="flex items-center gap-x-2 pl-2">
                        <IoSearchOutline />
                        <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search..."
                        />
                    </div>
                    <div className="flex items-center gap-x-2 mt-4 py-1 px-2 bg-blue-100 rounded-lg">
                        <div className="relative w-10 h-10">
                            <img
                                className="w-10 h-10 rounded-full"
                                src="https://mediaslide-us.storage.googleapis.com/imgmodels/pictures/7485/76284/profile-1711014052-a3e42b328789b96148d60a78ebc3c4ea.jpg"
                                alt=""
                            />
                            <div className="bg-yellow-400 rounded-full w-3 h-3 absolute top-0 right-0"></div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-[10px]">Emma Berger</p>
                            <p className=" text-[10px]">
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <p className="text-[10px] pb-3">3:15PM</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-3 w-[800px]">
                    <div className="flex items-center gap-x-2 mt-4 py-1 px-2 mb-5 pb-2 border-b border-neutral-500">
                        <div className="relative w-10 h-10">
                            <img
                                className="w-10 h-10 rounded-full object-contain"
                                src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"
                                alt=""
                            />
                            <div className="bg-yellow-400 rounded-full w-3 h-3 absolute top-0 right-0"></div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-[14px]">Proyektor</p>
                            <p className=" text-[12px]">Hozir aktiv</p>
                        </div>
                    </div>
                    <div className="w-[280px] text-xs bg-blue-100 mb-10 p-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mt-14">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ratione autem obcaecati sit atque dolore.
                    </div>
                    <div className="w-[280px] text-xs bg-neutral-200 ml-auto mb-20 p-3 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl mt-14">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ratione autem obcaecati sit atque dolore.
                    </div>
                    <div className="flex items-center justify-between gap-x-3 py-4 border-t border-neutral-600">
                        <input
                            className="w-full py-2"
                            type="text"
                            name=""
                            id=""
                            placeholder="Xabar yozing"
                        />
                        <div className="relative">
                            <FaPaperclip className="text-xl" />
                            <input
                                className="w-[20px] absolute top-0 opacity-0"
                                type="file"
                                name=""
                                id=""
                            />
                        </div>
                        <button className="flex items-center gap-x-1 py-1 px-2 rounded-md bg-blue-700 text-white">
                            <IoPaperPlane />
                            Jo'natish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
