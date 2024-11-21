import Authenticated from "@/components/layouts/Authenticated";

const AboutPage = () => {
    return (
        <Authenticated>
            <p className="font-semibold text-[30px] py-5 text-white">About</p>
            <hr className="w-full border-gray-500 mb-8" /> 

            <div className="flex flex-col items-center min-h-[500px] w-full">
                {/* Main Content Container */}
                <div className="flex w-5/6 max-w-5xl bg-white rounded-lg shadow-lg p-8">
                    
                    {/* Logo Section */}
                    <div className="flex flex-col items-center justify-center w-1/3 border-r border-gray-300 pr-8">
                        <img
                            src="/Images/logo.png" 
                            alt="Netgest Logo"
                            className="w-32 h-32 mb-4"
                        />
                    </div>

                    {/* Developers Section */}
                    <div className="flex flex-col items-center justify-center w-2/3 pl-8">
                        <p className="text-2xl font-semibold mb-6 text-black">Developers</p>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-gray-300">
                                    <img
                                        src="/Images/Symon.png" 
                                        alt="Symon Capena"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-lg text-black font-semibold">Symon Capena</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-gray-300">
                                    <img
                                        src="/Images/Karlo.png" 
                                        alt="Karlo Santos"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-lg text-black font-semibold">Karlo Santos</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-gray-300">
                                    <img
                                        src="/Images/Joshua.png"
                                        alt="Joshua Buencamino"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-lg text-black font-semibold">Joshua Buencamino</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-gray-300">
                                    <img
                                        src="/Images/Jubileo.png"   
                                        alt="Jubileo Verceles"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-lg text-black font-semibold">Jubileo Verceles</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="w-5/6 max-w-5xl mt-10 bg-white p-6 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold text-black mb-4">About Us</p>
                    <p className="text-base text-gray-700 mb-4">
                        This project focuses on network traffic detection, aiming to monitor and analyze network traffic for potential issues. By observing data flow across the network, our system can identify abnormal traffic patterns, providing insights into network health, performance, and potential security threats. This real-time monitoring approach enhances network visibility and aids in proactive management.
                    </p>
                    <p className="text-base text-gray-700">
                        This project on network traffic detection is developed by a 4th-year student from the Technological Institute of the Philippines. It focuses on monitoring and analyzing network traffic to identify abnormal patterns, enhancing network visibility and security. The system is designed to provide real-time insights into network performance and detect potential issues, supporting proactive network management.
                    </p>
                </div>
            </div>
        </Authenticated>
    );
};

export default AboutPage;
