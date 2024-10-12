import React, { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { Button, Flex } from "antd";

const Settings = () => {
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };
    return (
        <div>
            <p className="font-bold mb-1">Sozlamalar</p>
            <div className="p-3 bg-white rounded-xl w-[1150px]">
                <p className="text-white font-bold py-1 px-3 inline-block mb-3 bg-blue-900 rounded-lg">
                    Profile
                </p>
                <div className="mx-auto mb-5 w-[90px] h-[90px] bg-neutral-200 rounded-full relative flex items-center justify-center">
                    <MdPhotoCamera className="text-2xl text-blue-700" />
                    <input
                        className="w-[70px] h-[70px] absolute top-3 opacity-0 cursor-pointer"
                        type="file"
                    />
                </div>
                <form action="">
                    <div className="grid grid-cols-3 gap-x-9 mb-8">
                        <div>
                            <p className="font-semibold mb-1">Familiya</p>
                            <input
                                className="bg-neutral-200 rounded-lg py-1 pl-2 w-full"
                                type="text"
                                name=""
                                id=""
                                placeholder="Ro'ziqulov"
                            />
                        </div>
                        <div>
                            <p className="font-semibold mb-1">Ismi</p>
                            <input
                                className="bg-neutral-200 rounded-lg py-1 pl-2 w-full"
                                type="text"
                                name=""
                                id=""
                                placeholder="Doniyor"
                            />
                        </div>
                        <div>
                            <p className="font-semibold mb-1">Login</p>
                            <input
                                className="bg-neutral-200 rounded-lg py-1 pl-2 w-full"
                                type="text"
                                name=""
                                id=""
                                placeholder="Login"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-14 mb-7">
                        <div>
                            <p className="font-semibold mb-1">Email</p>
                            <input
                                className="bg-neutral-200 rounded-lg py-1 pl-2 w-full"
                                type="email"
                                name=""
                                id=""
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <p className="font-semibold mb-1">Kasb</p>
                            <input
                                className="bg-neutral-200 rounded-lg py-1 pl-2 w-full"
                                type="text"
                                name=""
                                id=""
                                placeholder="Ustoz"
                            />
                        </div>
                    </div>
                    <div className="mb-52">
                        <p className="font-semibold mb-1">Date of birth</p>
                        <input
                            className="bg-neutral-200 rounded-lg py-1 pl-2 w-1/2"
                            type="date"
                            name=""
                            id=""
                        />
                    </div>
                    <div className="flex justify-end">
                        <div className="flex gap-x-5">
                            <Flex align="flex-start" gap="small" vertical>
                                <Button>secondary</Button>
                            </Flex>
                            <button>
                                <Button
                                    type="primary"
                                    loading={loadings[0]}
                                    onClick={() => enterLoading(0)}>
                                    Saqlab qolish
                                </Button>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;
