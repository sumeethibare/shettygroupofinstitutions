// import { useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { cn } from "./util";

// export const TextGenerateEffect = ({
//     words,
//     className,
// }) => {
//     const controls = useAnimation();
//     let wordsArray = words.split(" ");
//     useEffect(() => {
//         controls.start((i) => ({
//             opacity: 1,
//             transition: { duration: 2, delay: i * 0.2 },
//         }));
//     }, [words]);

//     const renderWords = () => {
//         return wordsArray.map((word, idx) => (
//             <motion.span
//                 key={word + idx}
//                 className="dark:text-white text-black opacity-0"
//                 custom={idx}
//                 animate={controls}
//             >
//                 {word}{" "}
//             </motion.span>
//         ));
//     };

//     return (
//         <div className={cn("font-bold", className)}>
//             <div className="mt-4">
//                 <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
//                     {renderWords()}
//                 </div>
//             </div>
//         </div>
//     );
// };
