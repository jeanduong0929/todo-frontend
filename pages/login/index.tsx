import { AuthContext } from "@/contexts/authprovider";
import TODO from "@/utils/axiosconfig";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

/**
 * The payload type for the login request. 
 */
type Payload = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();

  /**
   * Handles login form submission.
   * @param e - The form event object.
   */
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /** The payload to be sent with the API request. */
    const payload: Payload = { username, password };

    try {
      /** Sends a POST request to the API endpoint '/auth/login' with the payload. */
      const res = await TODO.post("/auth/login", payload);

      /** Sets the authentication state to the response data. */
      setAuth(res.data);

      /** Navigates to the homepage. */
      router.push("/");
    } catch (err) {
      /** Logs any errors that occur. */
      console.log(err);
    }
  };


  return (
    <>
      {/* Form to handle login. */}
      <form
        className="flex flex-col items-center font-mono gap-10"
        onSubmit={handleLogin}
      >
        {/* Input container. */}
        <div className="flex flex-col items-center gap-10 shadow-xl rounded-md p-10">
          <h1 className="font-bold text-4xl">LOGIN</h1>

          {/* Username input field. */}
          <input
            className="shadow-xl rounded-md px-5 py-2 ease-out transition duration-300 focus:scale-110"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Password input field. */}
          <input
            className="shadow-xl rounded-md px-5 py-2 ease-out transition duration-300 focus:scale-110"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login button. */}
          <button className="bg-blue-500 px-5 py-2 shadow-xl rounded-md text-white ease-out transition duration-300 hover:scale-110">
            Sign in
          </button>

          {/* Link to the register page. */}
          <Link href="/register" className="text-blue-500 underline underline-offset-8 decoration-1" >Create a new account</Link>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
