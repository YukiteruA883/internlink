"use client";

import { signIn } from "next-auth/react";
import { useRouter } from 'next/router';

export default function loginPage() {
  const redirectToStudentDashboard = () => {
    signIn("google", { callbackUrl: `${window.location.origin}/StudentDashboard` });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      {/* Centered Panel */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        {/* "Sign Up" Text in the Panel */}
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>

        <h1 className="text-4xl font-bold text-black dark:text-white mb-5 text-center">
          InternLink&#174;
        </h1>

        <div className="flex flex-col mb-4">
          <label htmlFor="lastName" className="mb-2">Email</label>
          <input type="text" id="lastName" name="lastName" className="p-2 border rounded" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="lastName" className="mb-2">Password</label>
          <input type="text" id="lastName" name="lastName" className="p-2 border rounded" />
        </div>
        
        {/* Sign In Button */}
        <div className="mb-4">
          <button
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            onClick={() => {
              /* Handle the sign in logic here */
            }}
          >
            Sign In
          </button>
        </div>

        <div className="flex justify-center items-center gap-5">
          <button onClick={redirectToStudentDashboard} className="flex justify-center items-center cursor-pointer bg-white hover:bg-gray-200 transition duration-300 rounded-full w-14 h-14">
            <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" className="w-8" />
          </button>
          <button className="flex justify-center items-center cursor-pointer bg-white hover:bg-gray-200 transition duration-300 rounded-full w-14 h-14">
            <img src="https://play-lh.googleusercontent.com/mSy3EeRo04767Ev8Po53b7oAvunPFMBf46hlYL1Hr_QjuRmw1ImvHYi9VY3L3bKubhg" className="w-8 rounded-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
