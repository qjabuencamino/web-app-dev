"use client"
import Authenticated from "@/components/layouts/Authenticated";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const NetworkUtilization = () => {
    const data = {
        labels: ["Moderate", "Very Good", "Congested", "Good"],
        datasets: [
            {
                data: [70, 20, 85, 50],
                backgroundColor: ["#FFA500", "#FFFF00", "#FF0000", "#0000FF"],
                hoverBackgroundColor: ["#FFB347", "#FFFFA1", "#FF5A5A", "#5A5AFF"],
            },
        ],
    };

    const options = {
        cutout: "70%", // creates the inner cutout for the donut shape
    };

    return (
        <Authenticated>

            <p className="font-semibold text-[30px] py-5 text-white">Network Congested</p>
            <hr className="w-full border-gray-300 mb-8" />

            <div className="bg-white p-6 rounded-lg shadow-md">
                
                <div className="flex flex-col items-center">
                    <p className="text-black text-xl mb-4">Current Usage</p>
                    <div style={{ width: "300px", height: "300px", backgroundColor: "white", borderRadius: "50%", padding: "10px" }}>
                        <Doughnut data={data} options={options} />
                    </div>
                    <div className="mt-4 bg-green-100 p-4 rounded-lg">
                        <h2 className="text-black font-semibold mb-2">Network Status:</h2>
                        <p className="text-orange-600">Network Traffic: 70% - Moderate</p>
                        <p className="text-yellow-500">Network Traffic: 20% - Very Good</p>
                        <p className="text-red-600">Network Traffic: 85% - Congested</p>
                        <p className="text-blue-600">Network Traffic: 50% - Good</p>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default NetworkUtilization;
