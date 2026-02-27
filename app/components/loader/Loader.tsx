"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoaderProps {
  onFinish: () => void;
}

export default function Loader({ onFinish }: LoaderProps) {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    let value = 0;

    const interval = setInterval(() => {

      value += 1;

      setProgress(value);

      if (value >= 100) {

        clearInterval(interval);

        setTimeout(() => {
          onFinish();
        }, 600);

      }

    }, 18);

    return () => clearInterval(interval);

  }, [onFinish]);


  return (

    <motion.div

      initial={{ opacity: 1 }}

      animate={{ opacity: progress === 100 ? 0 : 1 }}

      transition={{ duration: 0.9 }}

      className="
      fixed 
      inset-0 
      z-[9999] 
      bg-black 
      flex 
      items-center 
      justify-center
      overflow-hidden
      "

    >

      <div className="text-center">

        {/* NAME */}

        <motion.h1

          initial={{ y: 40, opacity: 0 }}

          animate={{ y: 0, opacity: 1 }}

          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}

          className="
          text-white 
          text-5xl 
          md:text-6xl
          font-semibold 
          tracking-[0.25em]
          drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]
          "

        >
          VARUN UD
        </motion.h1>


        {/* SUBTITLE */}

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{
            delay: 0.4,
            duration: 1,
          }}

          className="
          text-gray-400 
          mt-4
          tracking-widest
          text-sm
          md:text-base
          "

        >
          Creative Developer
        </motion.p>



        {/* PROGRESS BAR */}

        <div className="mt-12 w-64 md:w-80 h-[2px] bg-gray-800 rounded-full overflow-hidden">

          <motion.div

            className="h-full bg-white"

            animate={{
              width: `${progress}%`,
            }}

            transition={{
              ease: "linear",
            }}

          />

        </div>


        {/* PERCENTAGE */}

        <motion.div

          className="text-gray-500 mt-4 text-sm tracking-wider"

          animate={{
            opacity: progress > 10 ? 1 : 0,
          }}

        >

          {progress} %

        </motion.div>

      </div>

    </motion.div>

  );
}