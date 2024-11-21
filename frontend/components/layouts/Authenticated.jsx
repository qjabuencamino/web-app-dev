"use client"
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import SideBar from "../common/Sidebar";
import { userLogout } from "@/api/authentication";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Authenticated = ({ children }) => {
    const {userDetails} = useContext(AuthContext);
    const router = useRouter();
    return (
        <>
            <nav className="h-[5svh] bg-blue-800 w-full flex items-center justify-between px-[20px] text-white text-[17px]">
                <div></div>
                <p className='font-normal hover:cursor-pointer' onClick={() => {
                    userLogout()
                    .then((resp) => {
                        const responseData = resp.data;
                        if (!responseData.error) {
                            toast.success("Logged out successfully");
                            Cookies.remove("accessToken");
                            Cookies.remove("userDetails");
                            router.push("/");
                        } else {
                            toast.error("Please try again");
                        }
                    }).catch(() => {
                        toast.error("Error encountered");
                    });
                }}>{userDetails.email}</p>
            </nav>
            <div className="h-[90svh] w-full flex">
                <div className="px-[20px] bg-white h-size w-[300px] shadow">
                    <SideBar/>
                </div>
                <div className="px-[20px] bg-[url('/Images/5040007.jpg')] bg-cover bg-center h-size w-full max-h-[90svh] overflow-y-auto py-10">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Authenticated;