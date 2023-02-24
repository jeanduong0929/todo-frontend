import AuthProvider from "@/contexts/authprovider";
import { ReactNode } from "react";
import Navbar from "./navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <AuthProvider>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer className="absolute bottom-0 left-1/2 -translate-x-1/2 -translae-y-1/2">
          <p>&copy; 2023 Jean Duong</p>
        </footer>
      </AuthProvider>
    </>
  );
};

export default Layout;
