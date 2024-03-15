import { useState } from "react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

type User = {
  username: string;
  password: string;
};
type RegisterCredentials = {
  name: string;
  email: string;
  phone: string;
  otp: string;
};
type AppContext = {
  login: (loginCredentials: User) => void;
  registerUser: (registerCredentials: RegisterCredentials) => void;
  user: User | null;
  isLoggedIn: boolean;
  logout: () => void;
};

const AppContext = React.createContext<AppContext | undefined>(undefined);

const AppContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = user !== null;
  const login = (loginCredentials: User) => {
    setUser(loginCredentials);
  };
  const registerUser = (registerCredentials: RegisterCredentials) => {
    const username =
      registerCredentials.name.split(" ")[0] +
      registerCredentials.phone.slice(-4);
    const password = registerCredentials.otp;
    setUser({ username, password });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppContext.Provider
      value={{
        login,
        registerUser,
        user,
        isLoggedIn,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be within AppContextProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
