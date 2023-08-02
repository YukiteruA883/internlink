"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controlsFeatures = useAnimation();
  const [refFeatures, inViewFeatures] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const controlsInfo = useAnimation();

  const [refInfo, inViewInfo] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const controlsReady = useAnimation();
  const [refReady, inViewReady] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });


  if (inView) {
    controls.start({
      opacity: 1,
      y: 0, // Slide-in effect
      transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
    });
  }

  if (inViewFeatures) {
    controlsFeatures.start({
      opacity: 1,
      y: 0, // Slide-in effect
      transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
    });
  }

  if (inViewInfo) {
    controlsInfo.start({
      opacity: 1,
      y: 0, // Slide-in effect
      transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
    })
  }

  if (inViewReady) {
    controlsReady.start({
      opacity: 1,
      y: 0, // Slide-in effect
      transition: { type: 'ease', duration: 1, ease: 'easeInOut' },
    });
  }

  return (
    <div className="flex flex-col items-center overflow-hidden w-full">
      <div className="relative flex flex-col justify-center items-center h-screen bg-white p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-gray-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex flex-col justify-center items-center h-full w-full bg-white bg-opacity-60">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-6xl font-bold text-black dark:text-white mb-5">
              InternLink&#174;
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <p className="text-lg text-black dark:text-white">
              Streamlining and ensuring the reliability of your internship search
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center bg-gray-200 w-full min-h-screen mt-10 p-10 rounded-lg" ref={ref}>
        <motion.h2
          className="text-4xl font-bold text-black mb-5"
          animate={controls}
          initial={{ x: '0', opacity: 0, y: 100 }}
        >
          Welcome to InternLink
        </motion.h2>
        <div className="flex flex-row justify-between w-full">
          <motion.div
            className="w-1/2 text-center px-12"
            animate={controls}
            initial={{ x: '0', opacity: 0, y: 100 }}
            transition={{delay: 0.3}}
          >
            <p className="text-2xl text-black pt-20">
              At <span className="font-bold">InternLink</span>, we simplify the search process and verify all opportunities for you, ensuring a trusted and efficient way to kickstart your career.
            </p>
          </motion.div>


          <motion.div
            className="w-1/2 items-center justify-center pl-12 pt-10"
            animate={controls}
            initial={{ x: '0', opacity: 0, y: 100 }}
            transition={{delay: 0.7}}
          >
            <img src="https://www.betterup.com/hubfs/Man%20has%20overwork%20and%20sitting%20with%20laptop%20and%20table%20lamp.%20Mental%20work%20with%20paper.%20Empty%20office.jpg" className="w-96 rounded-xl" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white w-full min-h-screen mt-10 p-10 rounded-lg" ref={refFeatures}>
        <motion.h2
          className="text-4xl font-bold text-black mb-5"
          animate={controlsFeatures}
          initial={{ x: '0', opacity: 0, y: 100 }}
        >
          Features
        </motion.h2>
        <div className="flex flex-row justify-around w-full">
          <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '0', opacity: 0, y: 100 }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/4456/4456893.png" alt="Easy To Use" className="w-20" />
            <p className="text-xl text-black pt-5">
              Easy To Use
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '0', opacity: 0, y: 100 }}
          >
            <img src="https://static.thenounproject.com/png/3238713-200.png" alt="Safe For Both Ends" className="w-20" />
            <p className="text-xl text-black pt-5">
              Safe For Both Ends
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '0', opacity: 0, y: 100 }}
          >
            <img src="https://static.thenounproject.com/png/1174765-200.png" alt="High Accessibility" className="w-20" />
            <p className="text-xl text-black pt-5">
              High Accessibility
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '0', opacity: 0, y: 100 }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/5733/5733207.png" alt="Fast & Efficient" className="w-20" />
            <p className="text-xl text-black pt-5">
              High Quality Internships
            </p>
          </motion.div>
        </div>

        <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '0', opacity: 0, y: 100 }}
        >
          <p className="text-2xl text-center text-black pt-20">
            At InternLink, we believe that you are the future. Therefore, we strive to deliver a top-tier user experience to help you pave your way to success.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col justify-center items-center bg-gray-200 w-full min-h-screen mt-10 p-10 rounded-lg" ref={refInfo}>
        <motion.h2
          className="text-4xl font-bold text-black mb-5"
          animate={controlsInfo}
          initial={{ x: '0', opacity: 0, y: 100 }}
        >
          Internships We Offer
        </motion.h2>
        <div className="flex flex-row justify-center items-center w-full">

          <motion.div
            className="w-1/2 items-center justify-center pl-40 pt-10"
            animate={controlsInfo}
            initial={{ x: '0', opacity: 0, y: 100 }}
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className="w-96 rounded-xl" />
          </motion.div>

          <motion.div
            className="w-1/2 text-center px-10"
            animate={controlsInfo}
            initial={{ x: '0', opacity: 0, y: 100 }}
          >
            <p className="text-2xl text-black">
              <span className="text-bold text-6xl">13</span><br></br><span className="font-bold">InternLink</span> provides a diverse selection of over <span className="font-bold">13</span> areas of internship for you to explore.
            </p>
          </motion.div>



        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center bg-white w-full min-h-screen mt-10 p-10 rounded-lg" ref={refReady}>
        <motion.h2
          className="text-4xl font-bold text-black mb-5"
          animate={controlsReady}
          initial={{ x: '0', opacity: 0, y: 100 }}
        >
          Are You Ready?
        </motion.h2>
        <div className="flex justify-center items-center w-full">
          <motion.div
            className="pt-12"
            animate={controlsReady}
            initial={{ x: '0', opacity: 0, y: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              className="contact-button bg-gray-700 text-white px-6 py-3 text-2xl rounded-full shadow-md hover:bg-gray-600 transition-transform duration-500 ease-in-out"
            >
              Sign Up
            </button>
          </motion.div>
        </div>
      </div>




    </div>
  );
}
