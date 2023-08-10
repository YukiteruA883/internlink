"use client";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function Service() {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    if (inView) {
        controls.start({
            opacity: 1,
            y: 0, // Slide-in effect
            transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
        });
    }

    const controlsUsage = useAnimation()
    const [refUsage, inViewUsage] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const controlsOffer = useAnimation()
    const [refOffer, inViewOffer] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    if (inViewUsage) {
        controlsUsage.start({
            opacity: 1,
            y: 0, // Slide-in effect
            transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
        });
    }
    if (inViewOffer) {
        controlsOffer.start({
            opacity: 1,
            y: 0, // Slide-in effect
            transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
        });
    }
    const controlsIntern = useAnimation()
    const [refIntern, inViewIntern] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    if (inViewIntern) {
        controlsIntern.start({
            opacity: 1,
            y: 0, // Slide-in effect
            transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
        });
    }

    function InternCard({ name, department, imgSrc }) {
        return (
            <div className="p-6 bg-white shadow-md rounded-lg border">
                <img src={imgSrc} alt={`${name}'s profile picture`} className="w-24 h-24 object-cover rounded-full" />
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-sm text-gray-700 mt-2">Department: {department}</p>
            </div>
        );
    }

const [offers, setOffers] = useState([])
function getOffers(){
    fetch("http://localhost:3001/offers").then((response)=>response.json()).then((res)=>setOffers(res))
}
useEffect(()=>{
    getOffers()
},[])

    function Nav({ children }) {
        return (
            <nav className="py-4 px-6 text-sm font-medium">
                <ul className="flex space-x-3">
                    {children}
                </ul>
            </nav>
        );
    }

    function NavItem({ href, isActive, children }) {
        return (
            <li>
                <a href={href} className={`block px-3 py-2 rounded-md ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}>
                    {children}
                </a>
            </li>
        );
    }

    function List({ children }) {
        return (
            <ul className="divide-y divide-slate-100">
                {children}
            </ul>
        );
    }

    function ListItem({ offer }) {
        return (
            <article className="flex items-start space-x-6 p-6 border-2 m-3 rounded-lg">
                <img src={offer.image} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
                <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-slate-900 truncate pr-20">{offer.title}</h2>
                    <div className="flex flex-wrap text-sm leading-6 font-medium">
                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            {offer.company}
                        </div>
                        <div>
                            <dd className="px-1.5 ring-1 ring-slate-200 rounded">{offer.duration}</dd>
                        </div>
                    </div>
                    <div className="flex-auto flex space-x-4">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Accept
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            More information
                        </button>
                    </div>
                </div>
            </article>
        );
    }

    return (

        <div>

            <div className="flex"> {/* Wrap the content inside a flex container */}

                {/* Vertical Navigation Bar */}
                <div className="bg-gray-200 w-64 min-h-screen p-4">
                    <ul className="space-y-4 pt-20">
                        <li className="hover:bg-gray-300 p-3 cursor-pointer"><Link href="/StudentDashboard">Dashboard</Link></li>
                        <li className="hover:bg-gray-300 p-3 cursor-pointer"><Link href="/Offers">Offers</Link></li>
                        <li className="hover:bg-gray-300 p-3 cursor-pointer"><Link href="/Internships">Current Internships</Link></li>
                        <li className="hover:bg-gray-300 p-3 cursor-pointer"><Link href="/Profile">Profile</Link></li>
                        <li className="hover:bg-gray-300 p-3 cursor-pointer"><Link href="/Settings">Settings</Link></li>
                    </ul>
                </div>


                {/* Main Content */}
                <div className="flex-grow">
                    <motion.div
                        animate={{ opacity: 1, y: 0 }} // Add slide-in effect
                        initial={{ x: '0', opacity: 0, y: 100 }} // Slide in from the bottom
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center justify-center pt-24">
                            <h1 className="text-6xl font-bold text-black dark:text-white mb-5">
                                Offers
                            </h1>
                        </div>
                    </motion.div>

                    <div className="divide-y divide-slate-100">
                        <Nav>
                            <NavItem href="/new" isActive>New Offers</NavItem>
                            <NavItem href="/top">Top Rated</NavItem>
                            <NavItem href="/picks">Featured</NavItem>
                        </Nav>
                        <List>
                            {offers.map((offer) => (
                                <ListItem key={offer.id} offer={offer}/>
                            ))}
                        </List>
                    </div>
                    
                </div> {/* End of Main Content */}

            </div>
        </div>
    );
}