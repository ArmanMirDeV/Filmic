"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedUser = Cookies.get("filmic_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Hardcoded credentials: admin@filmic.com / filmic2026
    if (email === "admin@filmic.com" && password === "filmic2026") {
      const userData = { email, name: "Arman", role: "Legend" };
      Cookies.set("filmic_user", JSON.stringify(userData), { expires: 7 });
      setUser(userData);
      return { success: true };
    }
    return { success: false, message: "Invalid reel credentials. Please check your script." };
  };

  const logout = () => {
    Cookies.remove("filmic_user");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
