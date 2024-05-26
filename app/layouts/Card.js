"use client";
import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FiMousePointer } from "react-icons/fi";

const cards = [
    {
        url: "/imgs/abstract/1.jpg",
        title: "shettyinstitute ",
        id: 1,
    },

];

const Card = () => {
    return (
        <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
            {cards.map(card => (
                <TiltCard key={card.id} card={card} />
            ))}
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ card }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 flex m-4 "
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
            >
                <img
                    src={card.url}
                    alt={card.title}
                    className="h-full w-full object-cover rounded-xl"
                    style={{
                        transform: "translateZ(50px)",
                    }}
                />
                <p
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    className="absolute bottom-4 left-4 text-2xl font-bold text-black bg-white bg-opacity-75 px-2 py-1 rounded"
                >
                    {card.title}
                </p>
            </div>
        </motion.div>
    );
};

export default Card;
