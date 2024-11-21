"use client";
import { Routes } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

const SideBar = () => {

    const pathName = usePathname();

    return (
        <div className="py-5">
            { Routes.map((route, key) => (
                <Link
                    key={key}
                    href={route.path}
                    className={`
                        ${pathName && (pathName === route.path || pathName?.startsWith(route.path)) ? "bg-blue-800 text-white hover:pointer-events-none" : "hover:bg-slate-100 hover:text-black"}
                        rounded-md flex justify-start items-center gap-x-2 text-[15px] w-full p-[12px]
                        my-2
                    `}
                >
                    <Icon name={route.icon}/>
                    <p className="font-medium text-[15px]">{route.name}</p>
                </Link>
            ))}
        </div>
    );
};

export default SideBar;