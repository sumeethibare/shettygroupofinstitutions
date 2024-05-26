import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";

const COLORS_TOP = ["#000"];
// , "#1E67C6", "#CE84CF", "#DD335C"  -- colours

export const AuroraHero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
        >
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-5xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight lg:text-9xl md:leading-tight">
                    Creativity Meets Talent
                </h1>
            </div>

            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={100} count={500} factor={6} fade speed={4} />
                </Canvas>
            </div>
        </motion.section>
    );
};