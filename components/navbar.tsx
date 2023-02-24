import { Button } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center font-mono shadow-xl p-10">
        <ul>
          <Link href="/" className="font-bold text-4xl">
            &quot;TODO LIST&quot;
          </Link>
        </ul>
        <ul>
          <Link href="/login">
            <Button variant="contained" color="primary" className="bg-blue-500">
              Login
            </Button>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
