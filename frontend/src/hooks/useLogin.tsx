import { useState } from "react";
import { useAuthContext } from "../context/Auth.context";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setloading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const login = async(username:string, password:string) => {
    try {
    setloading(true)
    const res = await fetch("api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    

    if(!res.ok) throw new Error (data.error);
        setAuthUser(data);
    }catch (error: any) {
        
        toast.error(error.message)
        
    }finally{
        setloading(false)
        
    }
  };
  return { loading, login}
};

export default useLogin;
