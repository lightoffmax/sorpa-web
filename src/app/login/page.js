'use client'
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage () {
    const {login, user} = useAuth();
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(username, password);
        if (success) {
           router.push("/poem")
           window.alert('Hi!')
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form className="p-6 bg-gray-700 rounded shadow-md" onSubmit={handleSubmit}>
            <h1 className="mb-4 text-xl font-bold">Login</h1>
                 {error && <p className="text-red-500">{error}</p>}
                    <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-4 border rounded text-black"
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded text-black"
                    />
                    <button
                    type="submit"
                    className="w-full p-2 text-white bg-blue-500 rounded"
                    >
                        Sign In
                        </button>
      </form>
    </div>
  );
}