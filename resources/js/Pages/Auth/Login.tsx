import { useEffect, FormEventHandler } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import img1 from "@/../../public/assets/Pastedimage.png";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />
            <div className="relative">
                <div className="grid grid-cols-2 max-lg:grid-cols-1 m-auto">
                    <div className="h-screen w-full bg-gray-200 max-sm:bg-white relative flex max-sm:block items-center overflow-hidden">
                        <form
                            onSubmit={submit}
                            className="bg-white shadow-lg max-sm:shadow-none rounded-lg w-9/12 p-4 max-sm:w-11/12 m-auto"
                        >
                            <div className="mb-3">
                                <h4 className="font-semibold text-xl text-slate-600 text-ellipsis">
                                    TailoringPro
                                </h4>
                                <p className="text-slate-800 text-ellipsis">
                                    Sign-in to continue your business
                                </p>
                            </div>
                            <div>
                                <div className="my-4">
                                    <InputLabel
                                        htmlFor="Username or Email"
                                        value="Username or Email"
                                    />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        placeholder="Write username or email"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2 -mb-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="my-4">
                                    <InputLabel
                                        htmlFor="password"
                                        value="Password"
                                    />

                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2 -mb-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="-mt-1 mb-4">
                                    <Link
                                        href={`/forgot-password`}
                                        className="text-slate-600 text-ellipsis"
                                    >
                                        Forgot password ?
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className="my-2 -mt-1 flex items-center gap-4 justify-end max-sm:justify-between">
                                    <Link
                                        href={`/register`}
                                        className="text-slate-600 text-ellipsis"
                                    >
                                        Create Account
                                    </Link>
                                    <PrimaryButton
                                        disabled={processing}
                                    >
                                       {processing ? "Proccessing..." : 'Log In'} 
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div
                        className={`bg-[url('@/../../public/assets/Pastedimage.png')] max-lg:hidden bg-cover bg-center h-screen w-full relative flex items-center overflow-hidden`}
                    >
                        <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-700 to-gray-500 opacity-60"></span>
                    </div>
                </div>
            </div>
        </>
    );
}
