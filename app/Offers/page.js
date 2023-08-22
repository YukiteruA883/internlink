"use client";
import { useState, useEffect, useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { signIn } from 'next-auth/react';
import { LoginContext } from '../layout';
import Link from 'next/link';

export default function Service() {
    const controls = useAnimation()
    const signin = useContext(LoginContext) 
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

    function handleAccept(offer) {
        const userid = signin.signIn?.uid; // Retrieve the user's UID
        // Create the data for the new internship record
        const data = {
            uid: userid,
            title: offer.title,
            company: offer.company,
            duration: offer.duration,
            image: offer.image, // Use the image from the offer
        };
        // Send the POST request to add the internship
        fetch("http://localhost:3001/internships/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((res) => {
            // Handle the response here, such as updating the UI or navigating to another page
        })
        .catch((error) => {
            console.error("Error adding internship:", error);
        });
    }

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
    function getOffers() {
        fetch("http://localhost:3001/offers/all").then((response) => response.json()).then((res) => setOffers(res.result))
        
    }

    function getSomething() {
        fetch("http://localhost:3001/users").then((response) => response.json()).then((res) => console.log(res))
    }

    function setInternships() {
        const data = {
            title: position,
            duration: duration,
            company: company,
            image: "https://online.jwu.edu/sites/default/files/styles/article_feature_page/public/field/image/hire%20chef%20-%20tiny.jpg?itok=PMLCthNf"
        }
        fetch("http://localhost:3001/offers", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(getOffers())
    }

    function deleteOffer(id) {
        fetch(`http://localhost:3001/offers/${id}`, { method: "DELETE", headers: { "Content-Type": "application/json" } }).then(getOffers())
    }

    function updateOffer(id) {
        const data = {
            title: position,
            duration: duration,
            company: company,
            image: "https://online.jwu.edu/sites/default/files/styles/article_feature_page/public/field/image/hire%20chef%20-%20tiny.jpg?itok=PMLCthNf"
        }
        fetch(`http://localhost:3001/offers/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(getOffers())
    }

    useEffect(() => {
        getSomething()
        getOffers()
    }, [])

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

    const EditOfferModal = () => {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <button onClick={() => setEditedOffer(null)} className="float-right text-2xl">×</button>
                    <h2 className="text-2xl font-bold text-center mb-4">Edit Offer</h2>
                    <label className="block">Intern Position:</label>
                    <input type="text" defaultValue={editedOffer.title} onChange={(e) => setPosition(e.target.value)} className="w-full p-2 mb-4 border rounded" />
                    <label className="block">Company Name:</label>
                    <input type="text"  defaultValue={editedOffer.company} onChange={(e) => setCompany(e.target.value)} className="w-full p-2 mb-4 border rounded" />
                    <label className="block">Duration of Internship:</label>
                    <input type="text"  defaultValue={editedOffer.duration} onChange={(e) => setDuration(e.target.value)} className="w-full p-2 mb-4 border rounded" />
                    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" onClick={() => {
                        // Update the offer logic here
                        updateOffer(editedOffer.id);
                    }}>
                        Update
                    </button>
                </div>
            </div>

            
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
                        <button onClick={() => handleAccept(offer)} className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Accept
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            More information
                        </button>

                            <button onClick={()=> deleteOffer(offer.id)} className="block px-3 py-2 rounded-md bg-sky-500 text-white font-semibold">Delete</button>
                            <button onClick={() => setEditedOffer(offer)} className="block px-3 py-2 rounded-md bg-sky-500 text-white font-semibold">Edit</button>

                    </div>
                </div>
            </article>
        );
    }

    const [showModal, setShowModal] = useState(false);
    const [editedOffer, setEditedOffer] = useState(null);

    // Function to handle the "Add Offer" button click
    const handleAddOfferClick = () => {
        setShowModal(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const [position, setPosition] = useState("")
    const [company, setCompany] = useState("")
    const [duration, setDuration] = useState("")
    // AddOfferModal component
    const AddOfferModal = () => {

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <button onClick={handleCloseModal} className="float-right text-2xl">×</button>
                    <h2 className="text-2xl font-bold text-center mb-4">Add Offer</h2>
                    <label className="block">Intern Position:</label>
                    <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full p-2 mb-4 border rounded" />
                    <label className="block">Company Name:</label>
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full p-2 mb-4 border rounded" />
                    <label className="block">Duration of Internship:</label>
                    <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full p-2 mb-4 border rounded" />
                    <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700" onClick={() => setInternships()}>
                        Submit
                    </button>
                </div>
            </div>
        );
    }

    return (

        <div>

            <div className="flex"> {/* Wrap the content inside a flex container */}

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
                        <div className="flex items-center">
                            <Nav>
                                <NavItem href="/new" isActive>New Offers</NavItem>
                                <NavItem href="/top">Top Rated</NavItem>
                                <NavItem href="/picks">Featured</NavItem>
                            </Nav>
                            <div className="block px-3 py-2 rounded-md bg-sky-500 text-white font-semibold">
                                <button onClick={handleAddOfferClick}>Add Offer</button>
                            </div>
                        </div>
                        <List>
                            {offers.map((offer) => (
                                <ListItem key={offer.id} offer={offer} />
                            ))}
                        </List>
                    </div>

                </div> {/* End of Main Content */}

            </div>
            {showModal && AddOfferModal()}
            {editedOffer && EditOfferModal()}
        </div>
    );
}