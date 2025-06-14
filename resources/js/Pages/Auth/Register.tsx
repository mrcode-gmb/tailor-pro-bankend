import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Register" />
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
                                    Sign-up to boost your business online
                                </p>
                            </div>
                            <div>
                                <div className="my-4">
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.email}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="mt-4">
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
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="password_confirmation"
                                        value="Confirm Password"
                                    />

                                    <TextInput
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="my-2 mt-4 flex flex-wrap items-center gap-4 justify-end max-sm:justify-between">
                                    <Link
                                        href={route("login")}
                                        className="text-slate-600 text-ellipsis"
                                    >
                                        Already registered?
                                    </Link>
                                    <PrimaryButton disabled={processing}>
                                        {processing
                                            ? "Proccessing..."
                                            : "Register"}
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

