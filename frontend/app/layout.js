import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    <ToastContainer/>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
};
