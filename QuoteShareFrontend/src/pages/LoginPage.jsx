import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    email,
                    password,
                }
            );

            console.log("Login success:", res.data);
            alert(res.data.message);

        } catch (err) {
            console.error(err);
            alert("Login failed");
        }
    };

    const loginWithGoogle = () => {
        window.location.href = "http://localhost:8080/api/auth/google";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">

                <h1 className="text-2xl font-bold text-center">Login</h1>

                <form onSubmit={handleLogin} className="mt-6 space-y-4">

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded"
                    >
                        Login
                    </button>
                </form>

                <div className="my-4 text-center text-gray-500">OR</div>

                <button
                    onClick={loginWithGoogle}
                    className="w-full border p-2 rounded flex items-center justify-center gap-2"
                >
                    Continue with Google
                </button>

            </div>
        </div>
    );
}

export default LoginPage;