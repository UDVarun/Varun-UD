"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import React, { useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  video: string;
  tech?: string[];
  previewUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  video,
  tech = [],
  previewUrl,
  githubUrl,
}: Props) {

  const videoRef = useRef<HTMLVideoElement>(null);

  const [hover,setHover] = useState(false);



  /* Hover Enter */

  const handleEnter = () => {

    setHover(true);

    const videoEl = videoRef.current;

    if(videoEl){

      videoEl.currentTime = 0;

      videoEl.play().catch(()=>{});

    }

  };


  /* Hover Leave */

  const handleLeave = () => {

    setHover(false);

    const videoEl = videoRef.current;

    if(videoEl){

      videoEl.pause();

      videoEl.currentTime = 0;

    }

  };



  return (

    <div

      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}

      className="

      group
      cursor-hover

      rounded-3xl

      border
      border-black/10
      dark:border-white/10

      bg-white/70
      dark:bg-black/40

      backdrop-blur-md

      p-6

      transition-all
      duration-500

      hover:-translate-y-2

      hover:border-black/30
      dark:hover:border-white/30

      "

      data-cursor="VIEW"

    >



      {/* MEDIA */}

      <div className="relative overflow-hidden rounded-2xl">


        {/* IMAGE */}

        <Image

          src={image}

          alt={title}

          width={800}
          height={500}

          className={`
          w-full
          h-52
          object-cover
          transition-opacity
          duration-500
          ${hover ? "opacity-0":"opacity-100"}
          `}

        />



        {/* VIDEO */}

        <video

          ref={videoRef}

          muted
          loop
          playsInline

          preload="none"

          className={`

          absolute
          inset-0

          w-full
          h-52

          object-cover

          transition-opacity
          duration-500

          ${hover ? "opacity-100":"opacity-0"}

          `}

        >

          <source src={video} type="video/mp4"/>

        </video>


      </div>



      {/* TITLE */}

      <h3 className="mt-6 text-xl font-semibold">

        {title}

      </h3>



      {/* DESCRIPTION */}

      <p className="mt-2 text-sm text-black/70 dark:text-white/70">

        {description}

      </p>



      {/* TECH */}

      <div className="mt-5 flex flex-wrap gap-2">

        {tech.map((t)=>(
          <span
            key={t}
            className="
            text-xs
            px-3
            py-1
            rounded-full
            border
            border-black/10
            dark:border-white/10
            "
          >
            {t}
          </span>
        ))}

      </div>



      {/* BUTTONS */}

      <div className="mt-6 flex gap-4">


        {previewUrl && (

          <a

            href={previewUrl}

            target="_blank"

            className="
            flex items-center gap-2
            px-4 py-2
            rounded-full
            border
            border-black/20
            dark:border-white/20
            text-sm
            hover:bg-black
            hover:text-white
            dark:hover:bg-white
            dark:hover:text-black
            transition
            "

          >

            <ExternalLink size={16}/>

            Preview

          </a>

        )}



        {githubUrl && (

          <a

            href={githubUrl}

            target="_blank"

            className="
            flex items-center gap-2
            px-4 py-2
            rounded-full
            border
            border-black/20
            dark:border-white/20
            text-sm
            hover:bg-black
            hover:text-white
            dark:hover:bg-white
            dark:hover:text-black
            transition
            "

          >

            <Github size={16}/>

            GitHub

          </a>

        )}

      </div>

    </div>

  );

}