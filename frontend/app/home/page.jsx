"use client";

import Authenticated from "@/components/layouts/Authenticated";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const HomePage = () => {
    const { userDetails } = useContext(AuthContext);
    const router = useRouter();

    const goToDashboard = () => {
        router.push("/dashboard");
    };

    return (
        <Authenticated>
            <div className="flex flex-col items-center h-screen">
                <p className="text-[70px] text-white mb-8 text-center">
                    Welcome to NETGEST <b>{userDetails.name}</b>!
                </p>
                <button
                    className="px-8 py-4 bg-gray-400 text-black text-xl font-semibold rounded-md hover:bg-gray-500 transition duration-300 mb-8"
                    onClick={goToDashboard}
                >
                    Dashboard
                </button>

                {/* Table Section */}
                <div
                    className="bg-white rounded-lg shadow-lg p-6 mb-8 overflow-auto"
                    style={{ width: "90%", maxWidth: "1200px", maxHeight: "400px" }}
                >
                    <p className="text-lg font-semibold text-gray-800 mb-4 text-center">
                        Network Statistics
                    </p>
                    <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                <th className="border border-gray-300 px-4 py-2">Time</th>
                                <th className="border border-gray-300 px-4 py-2">Source</th>
                                <th className="border border-gray-300 px-4 py-2">Destination</th>
                                <th className="border border-gray-300 px-4 py-2">Protocol</th>
                                <th className="border border-gray-300 px-4 py-2">Window Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example Data - Replace with dynamic data if available */}
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">2024-11-18</td>
                                <td className="border border-gray-300 px-4 py-2">14:30</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.1</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.2</td>
                                <td className="border border-gray-300 px-4 py-2">TCP</td>
                                <td className="border border-gray-300 px-4 py-2">9</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">2024-11-19</td>
                                <td className="border border-gray-300 px-4 py-2">15:45</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.3</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.4</td>
                                <td className="border border-gray-300 px-4 py-2">UDP</td>
                                <td className="border border-gray-300 px-4 py-2">9</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">2024-11-18</td>
                                <td className="border border-gray-300 px-4 py-2">15:50</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.1</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.2</td>
                                <td className="border border-gray-300 px-4 py-2">TCP</td>
                                <td className="border border-gray-300 px-4 py-2">10</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">2024-11-19</td>
                                <td className="border border-gray-300 px-4 py-2">16:15</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.7</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.8</td>
                                <td className="border border-gray-300 px-4 py-2">UDP</td>
                                <td className="border border-gray-300 px-4 py-2">294</td>
                            </tr>

                            <tr>
                                <td className="border border-gray-300 px-4 py-2">2024-11-19</td>
                                <td className="border border-gray-300 px-4 py-2">16:35</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.1</td>
                                <td className="border border-gray-300 px-4 py-2">192.168.1.2</td>
                                <td className="border border-gray-300 px-4 py-2">TCP</td>
                                <td className="border border-gray-300 px-4 py-2">517</td>
                            </tr>
                            
                            {/* Add more rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    );
};

export default HomePage;
