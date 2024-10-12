import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { BiTable } from "react-icons/bi";
import { MdTableView } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdPlayLesson } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

const Admin = () => {
    return (
        <div className="flex mx-auto max-w-screen-2xl">
            <div className="dash__box ml-8 w-[280px] min-h-[100vh] bg-white">
                <img
                    className="w-[150px] mx-auto"
                    src="https://www.creativefabrica.com/wp-content/uploads/2021/07/15/3d-Letter-S-Logo-Vector-Graphics-14751175-1.jpg"
                    alt=""
                />
                <ul className="flex flex-col gap-y-2 mt-8 w-full">
                    <li className="w-full">
                        <NavLink
                            className="text-neutral-600 flex items-center gap-x-4 py-2 pl-8"
                            to={"/"}>
                            <BiSolidDashboard className="text-xl" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            className="text-neutral-600 flex items-center gap-x-4 py-2 pl-8"
                            to={"/jadval"}>
                            <BiTable className="text-xl" />
                            Jadval
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-neutral-600 flex items-center gap-x-4 py-2 pl-8"
                            to={"/kurslar"}>
                            <MdTableView className="text-xl" />
                            Kurslar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-neutral-600 flex items-center gap-x-4 py-2 pl-8"
                            to={"/report"}>
                            <HiOutlineDocumentReport className="text-xl" />
                            Report
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-neutral-600 flex items-center gap-x-4 py-2 pl-8"
                            to={"/darslar"}>
                            <MdPlayLesson className="text-xl" />
                            Darslar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-neutral-600 flex items-center gap-x-4 py-2 pl-8"
                            to={"/email"}>
                            <MdOutlineAlternateEmail className="text-xl" />
                            Email
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-neutral-600 flex items-center gap-x-4 py-2 pl-8"
                            to={"/chat"}>
                            <IoChatbubbleEllipses className="text-xl" />
                            Chat
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-neutral-600 flex items-center gap-x-4 py-2 pl-8"
                            to={"/settings"}>
                            <IoSettingsSharp className="text-xl" />
                            Sozlamalar
                        </NavLink>
                    </li>
                </ul>
                <div className="flex items-center justify-between px-8 mt-28">
                    <div className="flex items-center gap-x-2">
                        <img
                            className="w-[50px]"
                            src="https://static.vecteezy.com/system/resources/thumbnails/048/174/549/small/portrait-of-a-young-man-with-a-serious-expression-free-photo.jpg"
                            alt=""
                        />
                        <div>
                            <p className="text-sm font-bold">Doniyor</p>
                            <p className="text-sm">Student</p>
                        </div>
                    </div>
                    <IoLogOut className="text-2xl text-neutral-500" />
                </div>
            </div>
            <div className="pt-8 pl-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
