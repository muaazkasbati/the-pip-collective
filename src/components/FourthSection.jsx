import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Button from "./elements/Button";

export default function FourthSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeInFromRightSkewed = {
        hidden: { opacity: 0, x: 80, },
        visible: { opacity: 1, x: 0, },
    };


    const circleAnimation = {
        hidden: { strokeDashoffset: 100 },
        visible: { strokeDashoffset: 25 },
    };

    const containerVariants = {
        visible: {
            transition: { staggerChildren: 0.15 },
        },
    };



    return (
        <section
            ref={ref}
            id="expectations"
            className="py-16 px-4 max-w-6xl mx-auto text-center"
        >
            <motion.span
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.6 }}
                className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block"
            >
                Real Traders. Real Results
            </motion.span>

            <motion.h2
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-[48px] text-white"
            >
                Trusted By Traders Who
            </motion.h2>

            <motion.h3
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-[40px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-12"
            >
                Don’t Mess Around
            </motion.h3>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={controls}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative"
            >
                <div className="flex justify-center relative z-10">
                    <img src="/images/mobile-img.png" alt="Mobile Trading Screen" className="w-[80%] max-w-sm md:max-w-full" />
                </div>

                <div className="text-center md:text-left relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6 relative">
                        {[0, 1].map((index) => (
                            <div className="skew-x-[-8deg]">
                                <motion.div
                                    key={index}
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={fadeInFromRightSkewed}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    style={{ transform: "skewX(-8deg)" }}
                                    className={` flex flex-row items-center sm:items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg ${index === 0 ? "ml-8" : ""}`}
                                >
                                    <span className="bg-purple-600 shadow-[1px_0_8px_#A200F5] text-white rounded-full w-4 h-4 min-w-4 mr-0 sm:mr-4 mt-4 mb-2 sm:mb-0"></span>
                                    <div>
                                        <h4 className="text-[24px] md:text-[30px] font-bold">
                                            {index === 0 ? "Smart Entries. Real Edge." : "Verified Results. No Hype."}
                                        </h4>
                                        <p className="text-[18px] md:text-[22px] font-light">
                                            {index === 0
                                                ? "No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time."
                                                : "Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance."}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-8 mb-12"
                    >
                        <h3 className="text-[28px] md:text-[40px] text-white mb-0">
                            Average Win Rate Using <br className="hidden sm:block" /> The PipCollector
                        </h3>
                        <h4 className="text-[20px] md:text-[26px] bg-gradient-to-r [background-image:linear-gradient(to_right,_white_20%,_#A200F5_100%)] bg-clip-text text-transparent mb-8">
                            Powered By PipCore
                        </h4>
                        <div className="flex justify-center md:justify-start">
                            <div className="relative w-24 h-24 md:w-32 md:h-32">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    {/* Gray background circle */}
                                    {/* <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#4B5563"
                                        strokeWidth="4"
                                    /> */}

                                    {/* Animated purple circle */}
                                    <motion.circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#A855F7"
                                        strokeWidth="4"
                                        strokeDasharray="100"
                                        strokeDashoffset="100" // base fallback for non-animated render
                                        variants={{
                                            visible: { strokeDashoffset: 25 },
                                            hidden: { strokeDashoffset: 100 },
                                        }}
                                        initial="hidden"
                                        animate={controls}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                        transform="rotate(-90 18 18)"
                                    />




                                    {/* Text percentage */}
                                    <text
                                        x="18"
                                        y="21"
                                        textAnchor="middle"
                                        fill="white"
                                        fontSize="8"
                                    >
                                        75%
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="flex justify-center md:justify-start"
                    >
                        <Button>Start Trading Like This</Button>
                    </motion.div>
                </div>
                <img src="/images/purple-shadow-bg-104.png" alt="" className="absolute left-0 right-0 -top-18" />
            </motion.div>
        </section >
    );
}
