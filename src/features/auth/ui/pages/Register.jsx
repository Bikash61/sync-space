import { useForm } from "react-hook-form";
import React from "react";
import {
  User,
  Mail,
  Lock,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../../hooks/UseAuth";



const Register = ()=>{

    let {register,handleSubmit,onRegisterSubmit, errors}= useAuth();
      return (
    <>
      {/* LEFT */}

      <div
        className="hidden lg:flex w-1/2 relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#111016]/50"></div>

        <div className="relative z-10 flex flex-col justify-between p-12 h-full">
          <div>
            <h1 className="text-3xl font-bold">
              Synthetix AI
            </h1>
          </div>

          <div>
            <p className="uppercase text-xs tracking-[4px] text-violet-300">
              Next Gen Intelligence
            </p>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Accelerate your team's intelligence.
            </h2>

            <p className="mt-6 text-gray-300 max-w-md">
              Connect your enterprise data to our
              specialized AI models and unlock
              strategic insights.
            </p>

            <div className="flex gap-10 mt-10">
              <div>
                <h3 className="text-3xl font-bold">
                  99.9%
                </h3>
                <p>Uptime SLA</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  ISO
                </h3>
                <p>27001 Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex-1 flex justify-center items-center px-6 py-16">

        <form
          onSubmit={handleSubmit(onRegisterSubmit)}
          className="w-full max-w-xl"
        >
          <h1 className="text-5xl font-bold">
            Create your account
          </h1>

          <p className="text-gray-400 mt-3">
            Experience the future of collaborative
            data intelligence.
          </p>

          {/* Name */}

          <div className="mt-10">
            <label>Full Name</label>

            <div className="mt-2 relative">
              <User
                className="absolute left-4 top-4 text-gray-500"
                size={18}
              />

              <input
                {...register("fullname")}
                placeholder="Enter your full name"
                className="w-full bg-[#18161F] border border-gray-700 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-violet-500"
              />
            </div>

            <p className="text-red-400 text-sm mt-1">
              {errors.fullname?.message}
            </p>
          </div>

          {/* Email */}

          <div className="mt-6">
            <label>Email Address</label>

            <div className="relative mt-2">
              <Mail
                className="absolute left-4 top-4 text-gray-500"
                size={18}
              />

              <input
                {...register("email")}
                placeholder="name@company.com"
                className="w-full bg-[#18161F] border border-gray-700 rounded-xl py-4 pl-12"
              />
            </div>

            <p className="text-red-400 text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          {/* Password */}

          <div className="mt-6">
            <label>Password</label>

            <div className="relative mt-2">
              <Lock
                className="absolute left-4 top-4 text-gray-500"
                size={18}
              />

              <input
                type="password"
                {...register("password")}
                placeholder="********"
                className="w-full bg-[#18161F] border border-gray-700 rounded-xl py-4 pl-12"
              />
            </div>

        

            <p className="text-red-400 text-sm mt-2">
              {errors.password?.message}
            </p>
          </div>

          {/* Terms */}

          <div className="flex items-center gap-3 mt-8">
            <input
              type="checkbox"
              {...register("terms")}
              className="h-5 w-5"
            />

            <label>
              I agree to the Terms and Privacy Policy
            </label>
          </div>

          <p className="text-red-400 text-sm">
            {errors.terms?.message}
          </p>

          {/* Button */}

          <button
            className="mt-8 w-full rounded-xl bg-violet-500 hover:bg-violet-600 py-4 font-semibold text-lg transition"
          >
            Create Account
          </button>

          {/* Divider */}

          <div className="flex items-center my-10">
            <div className="flex-1 h-px bg-gray-700"></div>

            <span className="px-5 text-gray-500">
              OR CONTINUE WITH
            </span>

            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Social */}

          <div className="grid grid-cols-2 gap-5">
            <button
              type="button"
              className="border border-gray-700 rounded-xl py-4"
            >
              Google
            </button>

            <button
              type="button"
              className="border border-gray-700 rounded-xl py-4"
            >
              SSO
            </button>
          </div>

          <p className="text-center mt-10 text-gray-400">
            Already have an account?{" "}
            <span className="text-violet-400 cursor-pointer">
              Log In
            </span>
          </p>
        </form>
      </div>
    </>
      )

};

export default Register;




