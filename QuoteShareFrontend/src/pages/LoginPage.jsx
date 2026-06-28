import React, { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Manual login (connect later to backend API)
    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Manual login:", { email, password });

        // TODO: call Spring Boot login API
        // axios.post("/api/auth/login", { email, password })
    };

    // Google OAuth (custom backend endpoint)
    const loginWithGoogle = () => {
        window.location.href = "http://localhost:8080/api/auth/google";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">

            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

                {/* Header */}
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Welcome Back
                </h1>
                <p className="text-center text-gray-500 text-sm mt-1">
                    Login to continue
                </p>

                {/* Manual Login Form */}
                <form onSubmit={handleLogin} className="mt-6 space-y-4">

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="px-3 text-sm text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                {/* Google Login */}
                <button
                    onClick={loginWithGoogle}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/355037/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="text-xs text-center text-gray-400 mt-6">
                    By continuing, you agree to our Terms & Privacy Policy
                </p>

            </div>
        </div>
    );
}

export default LoginPage;