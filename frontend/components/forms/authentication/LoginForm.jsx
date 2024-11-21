"use client";
import Button from "@/components/common/Button";
import Textfield from "@/components/common/Textfield";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userLogin } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const LoginForm = () => {
    const router = useRouter();
    const loginFormHandler = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validateOnChange: false,
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Email must be a valid email.").required("Email is required."),
            password: Yup.string().required("Password is required.")
        }),
        onSubmit: (values, {setSubmitting, setErrors}) => {
            setSubmitting(true);
            userLogin(values)
            .then((resp) => {
                const responseData = resp.data;
                if (!responseData.error) {
                    Cookies.set('userDetails', JSON.stringify(responseData.data.user), { path: '/', expires: 1 });
                    Cookies.set('accessToken', responseData.data.token, { path: '/', expires: 1 });
                    router.push("/home");
                } else {
                    toast.error("Invalid credentials");
                }
            }).catch(() => {
                toast.error("Invalid credentials");
            }).finally(() => {
                setSubmitting(false);
            });
        }
    });

    return (
        <div className="bg-white p-5 shadow w-1/4 rounded-lg">
            <p className="text-center font-semibold text-[30px] mb-3">LOGIN</p>
            <hr/>
            <form className="mt-2" onSubmit={loginFormHandler.handleSubmit}>
                <Textfield
                    name="email"
                    onChange={loginFormHandler.handleChange}
                    label="Email"
                    placeholder="enter email"
                    value={loginFormHandler.values.email}
                    error={loginFormHandler.errors.email}
                />
                <Textfield
                    name="password"
                    onChange={loginFormHandler.handleChange}
                    label="Password"
                    placeholder="enter password"
                    type="password"
                    value={loginFormHandler.values.password}
                    error={loginFormHandler.errors.password}
                />
                <Button
                    label="Sign in"
                    type="submit"
                    loading={loginFormHandler.isSubmitting}
                />
            </form>
            <p className="text-[15px] text-slate-900">
                Dont have an account? Click <Link href="/create-account" className="text-blue-500">here</Link>.
            </p>
        </div>
    );
};

export default LoginForm;