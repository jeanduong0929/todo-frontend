import Auth from "@/models/auth";
import { ReactNode, useState } from "react";
import { createContext } from "react";

type Props = {
  children: ReactNode;
};

type AuthContextType = {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
};

export const AuthContext = createContext<AuthContextType>({
  auth: null,
  setAuth: () => {},
});

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<Auth | null>(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
