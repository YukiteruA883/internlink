"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useContext } from "react";
import { signIn } from "next-auth/react";
import { LoginContext } from "../layout";


export default function LoginPage() {
  const [error, setError] = useState(null);
  const router = useRouter();
  const signin = useContext(LoginContext)
  const redirectToStudentDashboard = () => {
    signIn("google", { callbackUrl: `${window.location.origin}/StudentDashboard` });
  };

  const handleSignIn = () => {
    const data = {
      username: document.getElementById("email").value,
      password: document.getElementById("password").value
    }

    fetch("http://35.240.139.137:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((user) => {
        // console.log(users)
        // const user = users.result.find(
        //   (user) => user.username === email && user.password === password
        // );
        console.log(user)
        if (user.result) {
          signin.setSignIn({ "firstname": user.result.firstName, "lastname": user.result.lastName, "uid": user.result.uid })
          router.push("/StudentDashboard");

        } else {
          setError("Invalid email or password")
          console.log("invalid username and password.")
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <h1 className="text-4xl font-bold text-black dark:text-white mb-5 text-center">
          InternLink&#174;
        </h1>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">Email</label>
          <input type="text" id="email" name="email" className="p-2 border rounded" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="mb-2">Password</label>
          <input type="password" id="password" name="password" className="p-2 border rounded" />
        </div>

        <div className="mb-4">
          <button
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            onClick={handleSignIn}
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
