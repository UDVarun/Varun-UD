"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   CERTIFICATES
=============================== */

const certificates = [
  { image: "/certificates/redynox.jpg" },
  { image: "/certificates/linux100.jpg" },
  { image: "/certificates/os.jpg" },
  { image: "/certificates/file.jpg" },
  { image: "/certificates/angular.jpg" },
  { image: "/certificates/storage.jpg" },
];

/* ===============================
   WEBGL BACKGROUND
=============================== */

function WebGLLight() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value =
      clock.getElapsedTime() * 0.6;
  });

  return (
    <mesh ref={mesh} scale={[10, 6, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        transparent
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          varying vec2 vUv;
          void main() {
            float wave =
              sin(vUv.x * 6.0 + uTime) * 0.15 +
              cos(vUv.y * 5.0 + uTime * 0.7) * 0.15;
            vec3 color = vec3(0.08 + wave, 0.12 + wave * 0.6, 0.2 + wave * 0.8);
            gl_FragColor = vec4(color, 0.35);
          }
        `}
      />
    </mesh>
  );
}

/* ===============================
   MAIN COMPONENT
=============================== */

export default function CertificatesTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCert, setActiveCert] = useState<{ image: string } | null>(null);

  /* GSAP PINNED SCROLL */
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth =
      track.scrollWidth - document.documentElement.clientWidth;
    const extra = window.innerWidth * 0.5;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -(scrollWidth + extra),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${scrollWidth + extra}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-t border-neutral-800 bg-black text-white"
    >
      {/* WEBGL BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <WebGLLight />
        </Canvas>
      </div>

      <div className="min-h-screen flex flex-col justify-center">

        {/* HEADER */}
        <div className="mb-24 text-center">
          <h2 className="text-4xl font-semibold tracking-tight">
            Certifications
          </h2>
          <p className="mt-3 text-neutral-400">
            Professional certifications and industry credentials.
          </p>
        </div>

        {/* TRACK */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="relative flex items-center gap-32 px-[50vw] py-24"
          >
            {certificates.map((cert, i) => (
              <PremiumCard
                key={i}
                image={cert.image}
                onClick={() => setActiveCert(cert)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN PREVIEW */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
          >
            <motion.img
              src={activeCert.image}
              className="max-w-6xl w-full rounded-2xl shadow-2xl"
              initial={{ scale: 0.6, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 110, damping: 18 }}
            />
            <button className="absolute top-6 right-6 text-white">
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ===============================
   PREMIUM CARD
=============================== */

function PremiumCard({
  image,
  onClick,
}: {
  image: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(0, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 18 });
  const scale = useSpring(1, { stiffness: 160, damping: 20 });

  /* AUTO SCALE WHEN CENTERED */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        scale.set(entry.intersectionRatio > 0.85 ? 1.25 : 1);
      },
      { threshold: [0.6, 0.85, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [scale]);

  function move(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 18);
    rotateX.set(py * -18);
  }

  function enter() {
    scale.set(1.45);
  }

  function leave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1.25);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onTouchStart={() => scale.set(1.15)}
      onTouchEnd={() => scale.set(1)}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        scale,
        transformPerspective: 1400,
      }}
      className="cursor-pointer will-change-transform"
    >
      <div
        className="
          w-[240px] h-[150px]
          rounded-2xl overflow-hidden
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          shadow-xl
          transition-all duration-500
          hover:border-indigo-400/70
          hover:shadow-[0_0_100px_rgba(99,102,241,0.55)]
        "
      >
        <Image
          src={image}
          alt="Certificate"
          fill
          sizes="240px"
          className="object-cover"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
