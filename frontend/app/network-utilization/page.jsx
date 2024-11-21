"use client"; // Add this line at the top

import Authenticated from "@/components/layouts/Authenticated";
import { useState } from "react";

const NetworkUtilization = () => {
    const [selectedDate, setSelectedDate] = useState("");

    const dataList = [
        { date: "Nov 10, 2024" },
        { date: "Nov 11, 2024" },
    ];

    return (
        <Authenticated>
            <p className="font-semibold text-[30px] text-white mb-4">Network Utilization</p>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center text-lg font-bold mb-4">Historical Data</div>
                <div className="relative inline-block text-left mb-4">
                    <select
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                    >
                        <option value="">Date</option>
                        {dataList.map((item, index) => (
                            <option key={index} value={item.date}>
                                {item.date}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-4">
                    {dataList.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center bg-blue-500 text-white rounded-lg px-4 py-2"
                        >
                            <span>{item.date}</span>
                            <div className="flex space-x-2">
                                <button className="bg-white text-blue-500 font-medium px-3 py-1 rounded-lg">
                                    View
                                </button>
                                <button className="bg-white text-blue-500 font-medium px-3 py-1 rounded-lg">
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
};

export default NetworkUtilization;
