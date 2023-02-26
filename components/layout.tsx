import AuthProvider from "@/contexts/authprovider";
import { ReactNode } from "react";
import Navbar from "./navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Type props for the layout component.
 * 
 * @property {ReactNode} children - The children components.
 */
type Props = {
  children: ReactNode;
};

/**
 * The layout component. It is used to wrap all pages.  
 */
const Layout = ({ children }: Props) => {
  return (
    /* The div component is used to flex the page content into a column. */
    <div className="flex flex-col min-h-screen">
      {/* The AuthProvider is used to provide authentication state to all components. */}
      <AuthProvider>
        {/* The header component is used to display the navbar and other information. */}
        <header>
          <Navbar />
        </header>

        {/* The main component is used to display the page content. */}
        <main className="flex-grow mt-40 mb-40">
          {children}
          <ToastContainer />
        </main>
      </AuthProvider>

      {/* The footer component is used to display the copyright and other information. */}
      <footer className="w-full text-center">
        <p>&copy; 2023 Jean Duong</p>
      </footer>
    </div>
  );
};

export default Layout;
