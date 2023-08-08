"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';

const contentMap = {
    'Login Issues': {
        title: 'Login Issues',
        description: 'Trouble logging in or accessing your account?',
        popupDescription: (
            <div>
                For a password reset, please proceed to the login page and click on forgot password, or click on this <span className="text-blue-600">link</span>. If you lost your Google Account, please use the Google account recovery option instead.
                <br></br>
                <br></br>
                For a hacked or compromised account, please directly contact us through the message feature below, or call the official support staff at <span className="text-blue-600">023-546-7891</span>
                <br></br>
                <br></br>
                If the issue you are facing does not fit the previous descriptors, please directly contact us through the message feature below, and an email response will be sent to the email provided.
            </div>
        ),
    },
    'Technical Errors': {
        title: 'Technical Errors',
        description: 'Encountering bugs or technical glitches on the platform?',
        popupDescription: (
            <div>
                To report a bug faced, please use the message feature below.
                <br></br>
                <br></br>
                To resolve an ongoing technical error, please contact the official support staff at <span className="text-blue-600">023-546-7891</span>
            </div>
        ),
    },
    'Internship Search': {
        title: 'Internship Search',
        description: 'Need help finding the right internship?',
        popupDescription: '',
    },
    'Account Verification': {
        title: 'Account Verification',
        description: 'Questions about account verification process?',
        popupDescription: '',
    },
    'Provider Support': {
        title: 'Provider Support',
        description: 'Assistance for businesses or providers offering internships.',
        popupDescription: '',
    },
    'Privacy & Security': {
        title: 'Privacy & Security',
        description: 'Concerns regarding your privacy and data security.',
        popupDescription: '',
    },
    'Feedback & Suggestions': {
        title: 'Feedback & Suggestions',
        description: 'Share your feedback or suggest improvements.',
        popupDescription: '',
    },
    'Other Inquiries': {
        title: 'Other Inquiries',
        description: 'For all other questions and inquiries.',
        popupDescription: '',
    }
};

export default function Support() {
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMessageSentModalOpen, setIsMessageSentModalOpen] = useState(false);


    const controls = useAnimation();
    const controlsMsg = useAnimation();
    const controlsIcons = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    if (inView) {
        controls.start({
            opacity: 1,
            y: 0,
            transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
        });
    }

    const [refIcons, inViewIcons] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    if (inViewIcons) {
        controlsIcons.start({
            opacity: 1,
            y: 0,
            transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
        });
    }

    const [refMsg, inViewMsg] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });



    if (inViewMsg) {
        controlsMsg.start({
            opacity: 1,
            y: 0,
            transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
        });
    }

    function SupportPanel({ title }) {
        const handlePanelClick = () => {
            setModalContent(contentMap[title]);
            setIsModalOpen(true);
        };

        const content = contentMap[title];

        return (
            <div onClick={handlePanelClick} className="p-6 bg-gray-200 shadow-md rounded-lg border w-full h-full transform hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
                <h2 className="text-xl font-bold">{content.title}</h2>
                <p className="text-sm text-gray-700 mt-2">{content.description}</p>
            </div>
        );
    }

    function Modal({ content }) {
        const handleBackgroundClick = () => {
            setIsModalOpen(false);
        };

        const stopPropagation = (e) => {
            e.stopPropagation();
        };

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-50"
                onClick={handleBackgroundClick}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-purple-300 p-6 rounded-lg w-1/3"
                    onClick={stopPropagation}
                >
                    <button onClick={() => setIsModalOpen(false)} className="float-right text-gray-500">&times;</button>
                    <h2 className="text-xl font-bold">{content.title}</h2>
                    <div className="text-sm text-gray-700 mt-2">{content.popupDescription}</div>
                </motion.div>
            </motion.div>
        );
    }

    function MessageSentModal() {
        const handleBackgroundClick = () => {
            setIsMessageSentModalOpen(false);
        };

        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-50"
                onClick={handleBackgroundClick}
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="bg-purple-300 p-6 rounded-lg w-1/3 text-center"
                >
                    <h2 className="text-xl font-bold">Your message has been sent!</h2>
                    <div className="text-sm text-gray-700 mt-2">
                        We will get back to you through your email as soon as possible.
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Form submitted');
        setIsMessageSentModalOpen(true); // Open the message sent modal
    }

    return (
        <div className="relative">
            <div className={isModalOpen ? 'filter blur-md' : ''}>
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ x: '0', opacity: 0, y: 100 }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex items-center justify-center pt-24">
                        <h1 className="text-6xl font-bold text-black dark:text-white mb-5">
                            Support Center
                        </h1>
                    </div>

                    {/* Collage Section */}
                    <div className="grid grid-cols-5 gap-1 pt-10 px-20">
                        <img className="h-48 object-cover" src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?cs=srgb&dl=pexels-fauxels-3184338.jpg&fm=jpg" alt="Image 1" />
                        <img className="h-48 object-cover" src="https://cdn-res.keymedia.com/cms/images/ca/126/0405_638012718654874502.jpg" alt="Image 2" />
                        <img className="h-48 object-cover" src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg" alt="Image 3" />
                        <img className="h-48 object-cover" src="https://images.ctfassets.net/wp1lcwdav1p1/3GgkKundG6WGpPHOPFBdDq/7cba9177de38af6c6fd9f30b7d377a91/Construction-workers-and-architect-looking-at-blueprints-on-construction-site-514311930_5413x3609__1_.jpeg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive" alt="Image 4" />
                        <img className="h-48 object-cover" src="https://allplan.asia/wp-content/uploads/2020/06/how-much-do-civil-engineer-make-1024x760.jpg" alt="Image 5" />
                        <img className="h-48 object-cover" src="https://img.freepik.com/premium-photo/asian-man-scientist-working-lab-with-microscope_34840-463.jpg" alt="Image 6" />
                        <img className="h-48 object-cover" src="https://static7.depositphotos.com/1194063/755/i/450/depositphotos_7553939-stock-photo-scientist-working-at-the-laboratory.jpg" alt="Image 7" />
                        <img className="h-48 object-cover" src="https://www.jnjmedtech.com/sites/default/files/styles/crop_presets/public/2022-03/financing%20solutions.jpg?itok=bUFfEMC6" alt="Image 8" />
                        <img className="h-48 object-cover" src="https://media.istockphoto.com/id/516329534/photo/last-straw.jpg?s=612x612&w=0&k=20&c=q9tScD01SPtN5QNAYgWG-ot4n_4hZXOgMStuFgmBFa8=" alt="Image 9" />
                        <img className="h-48 object-cover" src="https://miro.medium.com/v2/resize:fit:4000/1*s6uiXHETT_fpHpy3RPZDZQ.jpeg" alt="Image 10" />
                    </div>

                </motion.div>
                <motion.div
                    animate={controls}
                    initial={{ x: '0', opacity: 0, y: 100 }}
                    ref={ref}
                    className="grid grid-cols-4 gap-4 mt-10 px-10"
                >
                    {Object.keys(contentMap).map((key) => (
                        <SupportPanel title={key} />
                    ))}
                </motion.div>
            </div>
            {isModalOpen && <Modal content={modalContent} />}

            <div className="border-l-4 h-24 ml-[50%] border-gray-800 my-10" />
            <motion.div
                animate={controlsMsg}
                initial={{ x: '0', opacity: 0, y: 100 }}
                ref={refMsg}
                className="flex flex-col items-center justify-center mt-10"
            >
                <h2 className="text-2xl font-bold mb-5">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="w-1/2">
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-2 mb-4 bg-gray-200 rounded"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 mb-4 bg-gray-200 rounded"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-2 mb-4 h-32 bg-gray-200 rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-blue-600 hover:bg-blue-700 rounded transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </motion.div>


            {isMessageSentModalOpen && <MessageSentModal />}

            <motion.div
                animate={controlsIcons}
                initial={{ x: '0', opacity: 0, y: 100 }}
                ref={refIcons}
            >
                <div className="border-l-4 h-24 ml-[50%] border-gray-800 my-10" />
                {/* Contact Information Section */}
                <div className="flex flex-col items-center justify-center mt-10 text-xl">
                    <div className="flex items-center mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Gmail" className="w-6 h-6 mr-2" />
                        <span>contact@internlink.org</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Facebook" className="w-6 h-6 mr-2" />
                        <span>InternLinkOfficial</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" className="w-6 h-6 mr-2" />
                        <span>@InterLinkOfficial</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/94/94915.png" alt="Telephone" className="w-6 h-6 mr-2" />
                        <span>+6612-345-6789</span>
                    </div>
                    <iframe
                        title="Location Map"
                        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.492417252398!2d100.5564954750913!3d13.80944418658844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c446dd1c7ed%3A0x864a385c38bb4efe!2sRegus%20-%20Bangkok%2C%20SJ%20Infinite%20I%20Business%20Complex!5e0!3m2!1sen!2sth!4v1691492131426!5m2!1sen!2sth'}
                        width="600"
                        height="450"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                        className="rounded-lg pb-10"
                    />
                </div>
            </motion.div>


        </div>
    );
}