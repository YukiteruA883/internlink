"use client";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controlsFeatures = useAnimation();
  const [refFeatures, inViewFeatures] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start({
      x: 0,
      transition: { type: 'spring', stiffness: 60 },
    });
  }

  if (inViewFeatures) {
    controlsFeatures.start({
      x: 0,
      transition: { type: 'spring', stiffness: 60 },
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
              InternLink
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
          initial={{ x: '100vw' }}
        >
          Welcome to InternLink
        </motion.h2>
        <div className="flex flex-row justify-between w-full">
          <motion.div
            className="w-1/2 text-center px-10"
            animate={controls}
            initial={{ x: '-100vw' }}
          >
            <p className="text-2xl text-black pt-20">
              At <span className="font-bold">InternLink</span>, we simplify the search process and verify all opportunities for you, ensuring a trusted and efficient way to kickstart your career.
            </p>
          </motion.div>


          <motion.div
            className="w-1/2"
            animate={controls}
            initial={{ x: '100vw' }}
          >
            <img src="https://i.pinimg.com/originals/98/c3/b5/98c3b545af669418560488444c948f8e.png" />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white w-full min-h-screen mt-10 p-10 rounded-lg" ref={refFeatures}>
        <motion.h2
          className="text-4xl font-bold text-black mb-5"
          animate={controlsFeatures}
          initial={{ x: '-100vw' }}
        >
          Features
        </motion.h2>
        <div className="flex flex-row justify-around w-full">
          <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '-100vw' }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/4456/4456893.png" alt="Easy To Use" className="w-20" />
            <p className="text-xl text-black pt-5">
              Easy To Use
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '100vw' }}
          >
            <img src="https://static.thenounproject.com/png/3238713-200.png" alt="Safe For Both Ends" className="w-20" />
            <p className="text-xl text-black pt-5">
              Safe For Both Ends
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '-100vw' }}
          >
            <img src="https://static.thenounproject.com/png/1174765-200.png" alt="High Accessibility" className="w-20" />
            <p className="text-xl text-black pt-5">
              High Accessibility
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            animate={controlsFeatures}
            initial={{ x: '100vw' }}
          >
            <img src="https://cdn-icons-png.flaticon.com/512/5733/5733207.png" alt="Fast & Efficient" className="w-20" />
            <p className="text-xl text-black pt-5">
              High Quality Internships
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-2xl text-center text-black pt-20">
            At InternLink, we believe that you are the future. Therefore, we strive to deliver a top-tier user experience to help you pave your way to success.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
