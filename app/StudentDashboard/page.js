"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function SDashboard() {
    const { data: session } = useSession();
    const userFirstName = session?.user?.name?.split(' ')[0];
    const userLastName = session?.user?.name?.split(' ')[1];
    const profileImage = session?.user?.image;

    // Dummy data for demonstration purposes
    const upcomingInternships = 3; // Replace with actual data
    const premiumOffers = 2; // Replace with actual data

    return (
        <div className="flex">
            {/* Vertical Navigation Bar */}
            <div className="bg-gray-200 w-64 min-h-screen p-4">
                <ul className="space-y-4 pt-20">
                    <Link href="/StudentDashboard"><li className="hover:bg-gray-300 p-3 cursor-pointer">Dashboard</li></Link>
                    <Link href="/Offers"><li className="hover:bg-gray-300 p-3 cursor-pointer">Offers</li></Link>
                    <Link href="/Internships"><li className="hover:bg-gray-300 p-3 cursor-pointer">Current Internships</li></Link>
                    <Link href="/Profile"><li className="hover:bg-gray-300 p-3 cursor-pointer">Profile</li></Link>
                    <Link href="/Settings"><li className="hover:bg-gray-300 p-3 cursor-pointer">Settings</li></Link>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-grow">
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ x: '0', opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col items-center justify-center pt-24">
                        <h1 className="text-6xl font-bold text-black dark:text-white mb-5">
                            Dashboard
                        </h1>
                        <p className="text-2xl">
                            Welcome, {userFirstName} {userLastName}!
                        </p>
                        <img src={profileImage} alt="Profile Picture" className="w-32 h-32 rounded-full border-2 border-black mt-5" />
                        <div className="grid grid-cols-2 gap-10 mt-10 w-3/4">
                            <div className="bg-blue-100 p-5 rounded shadow">
                                <div className="flex gap-8">
                                    <p className="font-bold text-xl">Upcoming Internships</p>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Eo_circle_purple_arrow-up.svg/2048px-Eo_circle_purple_arrow-up.svg.png" className="h-10" />
                                </div>

                                <p className="text-lg">{upcomingInternships}</p>
                            </div>
                            <div className="bg-green-100 p-5 rounded shadow">
                                <div className="flex gap-8">
                                    <p className="font-bold text-xl">Great Offers</p>
                                    <img src="https://static.vecteezy.com/system/resources/previews/019/787/057/original/business-handshake-on-transparent-background-free-png.png" className="h-10" />
                                </div>


                                <p className="text-lg">{premiumOffers}</p>
                            </div>

                            <div className="bg-gray-100 p-5 rounded shadow">
                                <div className="flex gap-8">
                                    <p className="font-bold text-xl">Account Status</p>
                                    <p className="text-green-400 font-bold text-xl">Verified</p>
                                </div>
                            </div>
                            <div className="bg-gray-100 p-5 rounded shadow">
                                <div className="flex gap-8">
                                    <p className="font-bold text-xl">Department of Interest</p>
                                    <p className="text-xl">Computer Science</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}