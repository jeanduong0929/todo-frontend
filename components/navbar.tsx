import { AuthContext } from "@/contexts/authprovider";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const Navbar = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    setAuth(null);
    router.push("/");
  };

  return (
    <>
      <nav className="flex justify-between items-center font-mono shadow-xl p-10">
        <ul>
          <Link href="/" className="font-bold text-4xl">
            &quot;TODO LIST&quot;
          </Link>
        </ul>
        <ul>
          {auth ? (
            <Link href="/">
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-500"
                onClick={handleLogout}
              >
                Log out
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-500"
              >
                Log in
              </Button>
            </Link>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
