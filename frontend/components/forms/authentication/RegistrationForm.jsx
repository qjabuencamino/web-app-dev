"use client";
import Button from "@/components/common/Button";
import Textfield from "@/components/common/Textfield";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { userRegistraion } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
    const router = useRouter();
    const registrationFormHandler = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
        },
        validateOnChange: false,
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Email must be a valid email.").required("Email is required."),
            password: Yup.string().required("Password is required."),
            name: Yup.string().required("Name is required."),
        }),
        onSubmit: (values, {setSubmitting, setErrors, resetForm}) => {
            setSubmitting(true);
            userRegistraion(values)
            .then((resp) => {
                const responseData = resp.data;
                if (!responseData.data.error) {
                    toast.success("Account registered successfully.");
                    resetForm();
                    router.push("/");
                } else {
                    toast.error("Account registration failed.");
                }
            }).finally(() => {
                setSubmitting(false);
            });
        }
    });

    return (
        <div className="bg-white p-5 shadow w-1/4 rounded-lg">
            <p className="text-center font-semibold text-[30px] mb-3">Create an account</p>
            <hr/>
            <form className="mt-2" onSubmit={registrationFormHandler.handleSubmit}>
                <Textfield
                    name="name"
                    onChange={registrationFormHandler.handleChange}
                    label="Name"
                    placeholder="enter name"
                    value={registrationFormHandler.values.name}
                    error={registrationFormHandler.errors.name}
                />
                <Textfield
                    name="email"
                    onChange={registrationFormHandler.handleChange}
                    label="Email"
                    placeholder="enter email"
                    value={registrationFormHandler.values.email}
                    error={registrationFormHandler.errors.email}
                />
                <Textfield
                    name="password"
                    onChange={registrationFormHandler.handleChange}
                    label="Password"
                    placeholder="enter password"
                    type="password"
                    value={registrationFormHandler.values.password}
                    error={registrationFormHandler.errors.password}
                />
                <Button
                    label="Sign up"
                    type="submit"
                    loading={registrationFormHandler.isSubmitting}
                />
            </form>
            <p className="text-[15px] text-slate-900">
                Already have an account? Login <Link href="/" className="text-blue-500">here</Link>.
            </p>
        </div>
    );
};

export default RegistrationForm;