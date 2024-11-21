"use client";
import { createContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({
    children
}) => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState({});
    const pathName = usePathname();

    useEffect(() => {
        const user = Cookies.get("userDetails");
        if (user) {
            setUserDetails(JSON.parse(user));
            axios.interceptors.request.use(
                (config) => {
                    const token = Cookies.get("accessToken");
                    if (token) {
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                    return config;
                },
                (error) => {
                    return Promise.reject(error);
                }
            );
            if (pathName === "/" || pathName === "/create-account") {
                router.push("/home");
            }
        } else {
            if (pathName !== "/" && pathName !== "/create-account") {
                router.push("/");
            }
        }
    }, [pathName]);

    return (
        <AuthContext.Provider value={{userDetails}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;