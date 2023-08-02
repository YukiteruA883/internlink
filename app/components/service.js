"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

    return (
        <div>
            <motion.div
                animate={{ opacity: 1, y: 0 }} // Add slide-in effect
                initial={{ x: '0', opacity: 0, y: 100 }} // Slide in from the bottom
                transition={{ duration: 1 }}
            >
                <div className="flex items-center justify-center pt-24">
                    <h1 className="text-6xl font-bold text-black dark:text-white mb-5">
                        Account
                    </h1>
                </div>
            </motion.div>

            <div className="flex justify-around items-center mt-10 pb-10">
                <div className="w-1/3 p-10 bg-gray-200 rounded-xl shadow-lg h-96">
                    <h2 className="text-4xl font-bold mb-5">Student Account</h2>
                    <p className="text-lg">
                        Student accounts can search and find different internship opportunities that fit their need.<br></br> <br></br> To guarantee the legitimacy of interns, student accounts need to be verified with a valid ID card before the owner of the account can fully utilize the features.
                    </p>

                    <motion.div
                        className="pt-12"
                        animate={{ opacity: 1 }}
                        initial={{ x: '0', opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 2 }}
                    >
                        <button
                            className="contact-button bg-gray-700 text-white px-6 py-3 text-2xl rounded-full shadow-md hover:bg-gray-600 transition-transform duration-500 ease-in-out"
                        >
                            Sign Up
                        </button>
                    </motion.div>
                </div>


                <div className="w-1/3 p-10 bg-gray-200 rounded-xl shadow-lg h-96">
                    <h2 className="text-4xl font-bold mb-5">Provider Account</h2>
                    <p className="text-lg">
                        Provider accounts are used by businesses or enterprises that are looking to offer internship positions. <br></br><br></br>To ensure a good internship experience, holders of a provider account must provide some information about the business in order to meet the requirements.
                    </p>
                    <motion.div
                        className="pt-5"
                        animate={{ opacity: 1 }}
                        initial={{ x: '0', opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 2 }}
                    >
                        <button
                            className="contact-button bg-gray-700 text-white px-6 py-3 text-2xl rounded-full shadow-md hover:bg-gray-600"
                        >
                            Sign Up
                        </button>
                    </motion.div>
                </div>
            </div>

            <div className="flex justify-center text-xl text-bold pb-10">
                For more information about verification and account validation, please click&nbsp;<span className="text-blue-500">here</span>
            </div>

            <div className="flex items-center gap-x-20 text-center justify-center pt-10 bg-gray-200 pb-10">
                <motion.div
                    animate={controlsUsage}
                    initial={{ x: '0', opacity: 0, y: 100 }}
                    transition={{ delay: 0.3 }}
                    ref={refUsage}
                >
                    <h1 className="text-4xl font-bold text-black dark:text-white mb-5">
                        InternLink Usage
                    </h1>

                    <div className="text-center mt-6 text-sm flex flex-col justify-center items-start">
                        <div className="flex gap-x-2 items-center">
                            <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full font-bold">

                            </div>
                            <div>Connect to the <span className="text-bold">InternLink</span> platform</div>
                        </div>
                        <div className="border-l-4 h-10 ml-[18px] border-gray-300" />
                        <div className="flex gap-x-2 items-center">
                            <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full font-bold">

                            </div>
                            <div>Select the desired field of work</div>
                        </div>
                        <div className="border-l-4 h-10 ml-[18px] border-gray-300" />
                        <div className="flex gap-x-2 items-center">
                            <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full font-bold">

                            </div>
                            <div>View various offers from verfied businesses and enterprises</div>
                        </div>
                        <div className="border-l-4 h-10 ml-[18px] border-gray-300" />
                        <div className="flex gap-x-2 items-center">
                            <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full font-bold">

                            </div>
                            <div> Select an offer and send a request </div>
                        </div>
                        <div className="border-l-4 h-10 ml-[18px] border-gray-300" />
                        <div className="flex gap-x-2 items-center">
                            <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full font-bold">

                            </div>
                            <div> After receiving confirmation direct contact with the enterprise will be established </div>
                        </div>
                        <div className="border-l-4 h-10 ml-[18px] border-gray-300" />
                        <div className="flex gap-x-2 items-center">
                            <div className="w-10 h-10 bg-gray-500 text-white flex items-center justify-center rounded-full font-bold">

                            </div>
                            <div> Start your internship </div>
                        </div>


                    </div>
                </motion.div>
            </div>
            <h1 className="text-4xl font-bold text-black dark:text-white mb-5 text-center pt-10">
                Offers
            </h1>
            <motion.div
                animate={controlsOffer}
                initial={{ x: '0', opacity: 0, y: 100 }}
                transition={{ delay: 0.3 }}
                ref={refOffer}
            >
                <div className="bg-white columns-2 pt-10 pb-10 pl-10 gap-5">


                    <div className="flex font-sans bg-white border-2 rounded-xl">
                        <div className="flex-none w-48 relative">
                            <img src="https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1659634209/BestColleges.com/BC_Bootcamps_Resources_How-to-Decide-If-Coding-is-Right-for-Me_3.7.22_FTR_24718e35be/BC_Bootcamps_Resources_How-to-Decide-If-Coding-is-Right-for-Me_3.7.22_FTR-1024x683.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-l-xl" loading="lazy" />
                        </div>
                        <form className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                    Software Engineer
                                </h1>
                                <div className="text-lg font-semibold text-slate-500">
                                    2 months
                                </div>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                    Example Company
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-6 text-sm font-medium">
                                <div className="flex-auto flex space-x-4">
                                    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                        Accept
                                    </button>
                                    <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                        More information
                                    </button>
                                </div>
                                <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                                    <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-slate-700">
                                <span className="text-green-500 text-bold">Verified</span>
                            </p>
                        </form>
                    </div>

                    <div>
                        <p className="text-2xl text-black pt-10">
                            <span className="font-bold">InternLink</span> provides clear and efficient ways to find offers. Offers can be accepted safely through the platform. <span className="font-bold">InternLink</span> also shows the verification status of the enterprise
                        </p>
                    </div>
                </div>
            </motion.div>

            <div className="border-l-4 h-24 ml-[50%] border-gray-800" />
            <motion.div
                animate={controlsIntern}
                initial={{ x: '0', opacity: 0, y: 100 }}
                transition={{ delay: 0.3 }}
                ref={refIntern}
            >
                <h1 className="text-2xl font-bold text-black dark:text-white mb-5 text-center pt-10">
                    Managing Interns
                </h1>

                <div className="grid grid-cols-4 gap-4 mt-10">
                    <InternCard name="John Decofmaker" department="Software Engineering" imgSrc="https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1659634209/BestColleges.com/BC_Bootcamps_Resources_How-to-Decide-If-Coding-is-Right-for-Me_3.7.22_FTR_24718e35be/BC_Bootcamps_Resources_How-to-Decide-If-Coding-is-Right-for-Me_3.7.22_FTR-1024x683.jpg" />
                    <InternCard name="Anont Sosothikul" department="Marketing" imgSrc="https://cdn2.hubspot.net/hubfs/53/gettyimages-1074983828-170667a.jpg" />
                    <InternCard name="Hailey Greenwood" department="Design" imgSrc="https://clearmindgraphics.com/site/wp-content/uploads/2017/06/shutterstock_296987657-scaled.jpg" />
                    <InternCard name="Wang XiaoJun" department="Project Management" imgSrc="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project_Manager_Job_Description.jpg" />
                </div>

                <div className="text-center pb-10">
                    <p className="text-2xl text-black pt-10">
                        <span className="font-bold">InternLink</span> makes intern management easier than ever with a web GUI that keeps track of every bit of change
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
