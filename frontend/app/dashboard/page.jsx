"use client"; // Add this at the top of your file

import Authenticated from "@/components/layouts/Authenticated";
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

    return (
        <Authenticated>
            <p className="font-semibold text-[30px] py-5 text-white">Dashboard</p>
            <hr className="w-full border-gray-500 mb-8" />
            <div className="flex flex-col items-center min-h-screen">
                
                <div className="grid grid-cols-2 gap-8 w-5/6 max-w-4xl">
                    <button
                        onClick={() => handleNavigation("/network-utilization")}
                        className="w-full h-64 border border-gray-300 rounded-lg p-6 hover:border-blue-500 bg-gray-200 bg-opacity-70 shadow-md transition duration-300"
                    >
                        <p className="font-semibold text-[20px] mb-3 text-black">Network Utilization</p>
                        <p className="text-sm text-gray-700">
                            This section provides an overview of network resource usage, helping identify potential congestion points. By tracking network utilization, you can monitor bandwidth consumption, balance load, and maintain optimal performance across applications and users.
                        </p>
                    </button>

                
                    <button
                        onClick={() => handleNavigation("/Network-congested")}
                        className="w-full h-64 border border-gray-300 rounded-lg p-6 hover:border-blue-500 bg-gray-200 bg-opacity-70 shadow-md transition duration-300"
                    >
                        <p className="font-semibold text-[20px] mb-3 text-black">Network Congested</p>
                        <p className="text-sm text-gray-700">
                            This section provides real-time notifications for network congestion, enabling immediate action to manage traffic and prevent slowdowns. Stay informed and maintain smooth network performance with proactive monitoring alerts.
                        </p>
                    </button>
                </div>
            </div>
        </Authenticated>
    );
};

export default Dashboard;
