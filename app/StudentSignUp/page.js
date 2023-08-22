"use client"
import { useState } from 'react';
import { signIn } from "next-auth/react";
import Link from 'next/link';

export default function StudentSignUpPage() {
    const [error, setError] = useState(null);
    const [signedUp, setSignedUp] = useState(false);

    const redirectToStudentDashboard = () => {
        signIn("google", { callbackUrl: `${window.location.origin}/StudentDashboard` });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const dateOfBirth = document.getElementById("dob").value;
        const password = document.getElementById("password").value;

        // Validation
        if (!firstName || !lastName || !email || !dateOfBirth || !password) {
            alert("All fields are required!");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        const data = {
            type: "Student",
            firstName: firstName,
            lastName: lastName,
            username: email,
            password: password,
            dateOfBirth: dateOfBirth,
            internships: 0
        };

        fetch("http://35.240.139.137:3001/users/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            setSignedUp(true);
        })
        .catch(error => {
            console.error("Error adding user:", error);
        });
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50">
            {signedUp ? (
                <div className="bg-white p-8 rounded-lg shadow-xl w-96 text-center">
                    <h2 className="text-2xl font-bold text-center mb-4">Successfully Signed Up!</h2>
                    <button
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-4"
                    >
                        <Link href="/Login">Go to Login</Link>
                    </button>
                </div>
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                    <div className="flex justify-between space-x-4 mb-4">
                        <div className="flex flex-col w-32">
                            <label htmlFor="firstName" className="mb-2">First Name</label>
                            <input type="text" id="firstName" name="firstName" className="p-2 border rounded" required/>
                        </div>
                        <div className="flex flex-col w-44">
                            <label htmlFor="lastName" className="mb-2">Last Name</label>
                            <input type="text" id="lastName" name="lastName" className="p-2 border rounded" required/>
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="dob" className="mb-2">Date of Birth</label>
                        <input type="date" id="dob" name="dob" className="p-2 border rounded" required/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-2">Email</label>
                        <input type="text" id="email" name="email" className="p-2 border rounded" required/>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="mb-2">Password</label>
                        <input type="password" id="password" name="password" className="p-2 border rounded" required/>
                    </div>
                    <div className="mb-4">
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-center items-center gap-5">
                        <button onClick={redirectToStudentDashboard} className="flex justify-center items-center cursor-pointer bg-white hover:bg-gray-200 transition duration-300 rounded-full w-14 h-14">
                            <img src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png" className="w-8" />
                        </button>
                        <button className="flex justify-center items-center cursor-pointer bg-white hover:bg-gray-200 transition duration-300 rounded-full w-14 h-14">
                            <img src="https://play-lh.googleusercontent.com/mSy3EeRo04767Ev8Po53b7oAvunPFMBf46hlYL1Hr_QjuRmw1ImvHYi9VY3L3bKubhg" className="w-8 rounded-lg" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}