"use client";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    alert("Registration successful! Please check your email.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col">
      
      {/* Header */}
      <div className="flex items-center w-full bg-white py-6 px-10 shadow-sm gap-2">
        <img src="/logo.png" alt="Logo" className="w-15 h-15" />
        <h1 className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#76411E] to-[#FAB28D]">
          UPSURGE REALTY
        </h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-1 items-center justify-center px-6 lg:px-16 py-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/hero-image.png"
              alt="Register Visual"
              className="rounded-2xl w-full max-w-md object-cover"
            />
          </div>

          {/* Right Form */}
          <div className="flex justify-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 border border-gray-100">

              <h2 className="text-2xl font-bold text-center text-[#111827] mb-6">
                Create Your Account
              </h2>

              <form className="space-y-5" onSubmit={handleRegister}>

                <div>
                  <label className="text-sm font-medium text-[#374151]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#374151]">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#374151]">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 w-full px-4 py-2 rounded-md bg-gray-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-md bg-[#5856D6] text-white transition hover:bg-[#4c4ac7]"
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 my-4">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-sm text-gray-500">or</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#5856D6] font-medium hover:underline"
                  >
                    Login
                  </Link>
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
