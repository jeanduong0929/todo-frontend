import TODO from "@/utils/axiosconfig";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type Payload = {
    username: string;
    password1: string;
    password2: string;
}

const RegisterPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload: Payload = { username, password1, password2 };

        try {
            await TODO.post("/auth/register", payload);
            router.push("/login");
        } catch (error: any) {
            errorToaster(error.response.data.message);
        }
    }

    const errorToaster = (msg: string) => {
        toast.error(msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div className="flex flex-col items-center gap-10" >
            {/* Register form. */}
            <form
                className="flex flex-col items-center p-10 shadow-xl rounded-md font-mono gap-10"
                onSubmit={handleRegister}
            >
                {/* Register form header. */}
                <h1 className="font-bold text-4xl">REGISTER</h1>

                {/* Username input. */}
                <input
                    type="text"
                    placeholder="Username"
                    className="shadow-xl rounded-md px-5 py-2 ease-out duration-300 transition focus:scale-110"
                    onChange={(e) => setUsername(e.target.value)}
                />

                {/* Password input. */}
                <input
                    type="password"
                    placeholder="Password"
                    className="shadow-xl rounded-md px-5 py-2 ease-out duration-300 transition focus:scale-110"
                    onChange={(e) => setPassword1(e.target.value)}
                />

                {/* Confirm password input. */}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="shadow-xl rounded-md px-5 py-2 ease-out duration-300 transition focus:scale-110 "
                    onChange={(e) => setPassword2(e.target.value)}
                />

                {/* Submit button. */}
                <button className="text-white bg-blue-500 px-5 py-2 shadow-xl rounded-md ease-out duration-300 transition hover:scale-110" >Sign up</button>

                {/* Link to the login page. */}
                <Link href="/login" className="text-blue-500 underline underline-offset-8 decoration-1" >Already have an account?</Link>
            </form>
        </div>
    );
}

export default RegisterPage;