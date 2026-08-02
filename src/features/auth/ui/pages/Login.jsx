import { useState } from "react";
import { useAuth } from "../../hooks/UseAuth";

import {
  FaGoogle,
  FaGithub,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

export default function Login() {
     const [showPassword, setShowPassword] = useState(false);
     let {register,handleSubmit,onLoginSubmit, errors, loading}= useAuth();

  return (
    <div className="min-h-screen bg-[#121017] flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-[#1B1823] border border-[#2A2634] rounded-2xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-14 h-14 rounded-xl bg-violet-600 flex items-center justify-center text-white text-2xl font-bold">
            ✦
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold text-white">
            Synthetix AI
          </h1>

          <p className="text-gray-400 mt-2">
            Sign in to your workspace
          </p>
        </div>

        {/* Social Buttons */}

        <div className="grid grid-cols-2 gap-4 mt-8">

          <button
            className="border border-[#3A3645] rounded-lg py-3 flex justify-center items-center gap-2 text-gray-200 hover:bg-[#252130] transition"
          >
            <FaGoogle />
            GOOGLE
          </button>

          <button
            className="border border-[#3A3645] rounded-lg py-3 flex justify-center items-center gap-2 text-gray-200 hover:bg-[#252130] transition"
          >
            <FaGithub />
            GITHUB
          </button>

        </div>

        {/* Divider */}

        <div className="flex items-center my-8">

          <div className="flex-1 h-px bg-[#35313F]" />

          <span className="mx-4 text-sm text-gray-400">
            or continue with email
          </span>

          <div className="flex-1 h-px bg-[#35313F]" />

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit(onLoginSubmit)}
          className="space-y-5"
        >

          {/* Email */}

          <div>

            <label className="text-gray-300 text-sm uppercase font-semibold">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className="mt-2 w-full rounded-lg bg-[#121017] border border-[#34303D] px-4 py-3 text-white outline-none focus:border-violet-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}

          </div>

          {/* Password */}

          <div>

            <div className="flex justify-between">

              <label className="text-gray-300 text-sm uppercase font-semibold">
                Password
              </label>

              <a
                href="#"
                className="text-violet-400 text-sm hover:underline"
              >
                Forgot Password?
              </a>

            </div>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-lg bg-[#121017] border border-[#34303D] px-4 py-3 text-white outline-none focus:border-violet-500"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Password must be at least 6 characters",
                  },
                })}
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Remember */}

          <div className="flex items-center gap-2 text-gray-300">

            <input
              type="checkbox"
              className="accent-violet-600"
            />

            <span>Stay signed in</span>

          </div>

          {/* Submit */}

          <button
            disabled={loading}
            className="w-full mt-2 bg-violet-600 hover:bg-violet-700 transition rounded-lg py-3 font-semibold text-white flex justify-center items-center gap-3 disabled:opacity-70"
          >
            {loading ? (
              "Signing In..."
            ) : (
              <>
                Sign In
                <FaArrowRight />
              </>
            )}
          </button>

        </form>

        {/* Footer */}

        <div className="mt-10 border-t border-[#34303D] pt-6 text-center">

          <p className="text-gray-400">

            Don't have an account?{" "}

            <a
              href="/signup"
              className="text-violet-400 font-semibold hover:underline"
            >
              Sign Up
            </a>

          </p>

        </div>

      </div>
    </div>
  );
}