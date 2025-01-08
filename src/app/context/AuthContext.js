"use client";

import { useContext, createContext, useState, useEffect, useMemo } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const userMemo = useMemo(() => user, [user]);

  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      const newUser = { name: "Admin", root: "all", login: true };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser)); 
      console.log(userMemo)
      console.log(user)
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null); 
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user: userMemo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
