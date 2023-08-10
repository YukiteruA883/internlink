"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ServicePage from './service';
import SupportPage from './support';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();
    const redirectToStudentDashboard = () => {
        signOut({ callbackUrl: `${window.location.origin}/` });
        
    };

    return (
        <div className="fixed top-0 w-full z-10">
            <motion.div
                className="flex justify-between items-center bg-black p-5"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="text-2xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    InternLink&#174;
                </motion.div>
                <div className="flex justify-end gap-20 text-white">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div>
                            <Link href="/">Home</Link>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div>
                            <Link href="/Service">Service</Link>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div>
                            <Link href="/Support">Support</Link>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {session ? (


                            <Link href="/">
                                <button onClick={redirectToStudentDashboard}>
                                    Sign Out
                                </button>
                            </Link>
                        ) : (
                            <button>
                                <Link href="/Login">Sign In</Link>
                            </button>
                        )}

                    </motion.div>





                </div>
            </motion.div>

        </div>

    );
}
