"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";
//import { loginUser } from "../../lib/apis/server";

// client component for client side rendering(CSR)
export default function LogingForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateForm = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      //login form data submission
      //login request
      // const login = await loginUser({ email: email, password: password });
      //console.log("LOGIN RESPONSE", login);

      await signIn.email(
        {
          email,
          password,
        },
        {
          onSuccess: () => {
            redirect("/dashboard");
          },
          onError: (ctx) => {
            console.log(ctx.error.message);
            //setErrorMap(ctx.error.message);
          },
        }
      );
    }
  };
  return (
    <div className="w-[380px] mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-center text-xl font-semibold text-gray-900">
            {props.title}
          </h3>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 "
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300  text-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 rounded-md  mb-2"
              placeholder="example@email.com"
            />
            {emailError && (
              <div className="text-red-600 text-xs mt-2 ml-1">{emailError}</div>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 "
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300  text-gray-900 focus:ring-1 focus:ring-offset-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 rounded-md"
              placeholder="**********"
            />

            {passwordError && (
              <div className="text-red-600 text-xs mt-2 ml-1">
                {passwordError}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex  ">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-300 h-4 w-4 rounded"
                />
              </div>
              <div className="text-sm ml-3">
                <label
                  htmlFor="remember"
                  className="font-medium text-gray-900 "
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="/forgot-password"
              className="text-blue-900 text-sm font-medium hover:underline "
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign in
          </button>
          <div className="text-sm  text-gray-900 text-center space-x-1">
            <span>Don’t have an account yet?</span>
            <a
              href="/register"
              className="text-sm font-semibold text-blue-700 hover:underline "
            >
              Sign up here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
