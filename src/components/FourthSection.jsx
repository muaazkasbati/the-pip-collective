import Image from 'next/image';
// import Button from './elements/Button';

// export default function FourthSection() {
//     return (
//         <section className="py-16 px-4 max-w-7xl mx-auto text-center">
//             <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
//                 Real Traders. Real Results
//                 </span>
//             <h2 className="text-4xl md:text-[48px] text-white">
//                 Trusted By Traders Who
//             </h2>
//             <h3 className="text-4xl md:text-[40px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-12">
//                 Don’t Mess Around
//             </h3>
//             <div className="grid grid-cols-2">
//                 <div className="mb-8 md:mb-0">
//                     <img src="/images/mobile-img.png" alt="Mobile Trading Screen" className="w-[90%]" />
//                 </div>
//                 <div className="md:pl-12 text-center md:text-left">
//                     <div className="space-y-4 relative">
//                         <div className="flex items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg">
//                             <span className="bg-purple-600 text-white rounded-full w-4 min-w-4 h-4 min-h-4 mr-4 mt-4"></span>
//                             <div>
//                                 <h4 className="text-[32px] font-bold">Smart Entries. Real Edge.</h4>
//                                 <p className="text-[24px]">
//                                     No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="flex items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg">
//                             <span className="bg-purple-600 text-white rounded-full w-4 min-w-4 h-4 min-h-4 mr-4 mt-4"></span>
//                             <div>
//                                 <h4 className="text-[32px] font-bold">Verified Results. No Hype.</h4>
//                                 <p className="text-[24px]">
//                                     Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-8 mb-12">
//                         <h3 className="text-[40px] text-white mb-0">
//                             Average Win Rate Using <br />The PipCollector
//                         </h3>
//                         <h4 className="text-[26px] bg-gradient-to-r [background-image:linear-gradient(to_right,_white_20%,_#A200F5_100%)] bg-clip-text text-transparent mb-8">
//                             Powered By PipCore
//                         </h4>
//                         <div className="flex items-center justify-center md:justify-start">
//                             <div className="relative w-32 h-32">
//                                 <svg className="w-full h-full" viewBox="0 0 36 36">
//                                     <circle cx="18" cy="18" r="16" fill="none" stroke="#4B5563" strokeWidth="4" />
//                                     <circle
//                                         cx="18"
//                                         cy="18"
//                                         r="16"
//                                         fill="none"
//                                         stroke="#A855F7"
//                                         strokeWidth="4"
//                                         strokeDasharray="100"
//                                         strokeDashoffset="25"
//                                         transform="rotate(-90 18 18)"
//                                     />
//                                     <text x="18" y="20" textAnchor="middle" fill="white" fontSize="8">75%</text>
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                     <Button>Start Trading Like This</Button>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default function FourthSection() {
//     return (
//         <section className="py-16 px-4 max-w-7xl mx-auto text-center">
//             <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
//                 Real Traders. Real Results
//             </span>
//             <h2 className="text-3xl md:text-[48px] text-white">
//                 Trusted By Traders Who
//             </h2>
//             <h3 className="text-3xl md:text-[40px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-12">
//                 Don’t Mess Around
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                 <div className="flex justify-center">
//                     <img src="/images/mobile-img.png" alt="Mobile Trading Screen" className="w-[90%] max-w-sm md:max-w-full" />
//                 </div>
//                 <div className="md:pl-12 text-center md:text-left">
//                     <div className="space-y-6 relative">
//                         <div className="flex flex-col sm:flex-row items-center sm:items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg">
//                             <span className="bg-purple-600 text-white rounded-full w-4 h-4 min-w-4 mr-0 sm:mr-4 mt-0 sm:mt-2 mb-2 sm:mb-0"></span>
//                             <div>
//                                 <h4 className="text-[24px] md:text-[32px] font-bold">Smart Entries. Real Edge.</h4>
//                                 <p className="text-[18px] md:text-[24px]">
//                                     No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="flex flex-col sm:flex-row items-center sm:items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg">
//                             <span className="bg-purple-600 text-white rounded-full w-4 h-4 min-w-4 mr-0 sm:mr-4 mt-0 sm:mt-2 mb-2 sm:mb-0"></span>
//                             <div>
//                                 <h4 className="text-[24px] md:text-[32px] font-bold">Verified Results. No Hype.</h4>
//                                 <p className="text-[18px] md:text-[24px]">
//                                     Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="mt-8 mb-12">
//                         <h3 className="text-[28px] md:text-[40px] text-white mb-0">
//                             Average Win Rate Using <br className="hidden sm:block" /> The PipCollector
//                         </h3>
//                         <h4 className="text-[20px] md:text-[26px] bg-gradient-to-r [background-image:linear-gradient(to_right,_white_20%,_#A200F5_100%)] bg-clip-text text-transparent mb-8">
//                             Powered By PipCore
//                         </h4>
//                         <div className="flex justify-center md:justify-start">
//                             <div className="relative w-24 h-24 md:w-32 md:h-32">
//                                 <svg className="w-full h-full" viewBox="0 0 36 36">
//                                     <circle cx="18" cy="18" r="16" fill="none" stroke="#4B5563" strokeWidth="4" />
//                                     <circle
//                                         cx="18"
//                                         cy="18"
//                                         r="16"
//                                         fill="none"
//                                         stroke="#A855F7"
//                                         strokeWidth="4"
//                                         strokeDasharray="100"
//                                         strokeDashoffset="25"
//                                         transform="rotate(-90 18 18)"
//                                     />
//                                     <text x="18" y="21" textAnchor="middle" fill="white" fontSize="8">75%</text>
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex justify-center md:justify-start">
//                         <Button>Start Trading Like This</Button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Button from "./elements/Button";

export default function FourthSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (inView) setVisible(true);
    }, [inView]);

    return (
        <section
            ref={ref}
            className="py-16 px-4 max-w-7xl mx-auto text-center"
        >
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block"
            >
                Real Traders. Real Results
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl md:text-[48px] text-white"
            >
                Trusted By Traders Who
            </motion.h2>

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-[40px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-12"
            >
                Don’t Mess Around
            </motion.h3>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
                <div className="flex justify-center">
                    <img src="/images/mobile-img.png" alt="Mobile Trading Screen" className="w-[90%] max-w-sm md:max-w-full" />
                </div>

                <div className="md:pl-12 text-center md:text-left">
                    <div className="space-y-6 relative">
                        {[0, 1].map((index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={visible ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                                className="flex flex-col sm:flex-row items-center sm:items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg"
                            >
                                <span className="bg-purple-600 text-white rounded-full w-4 h-4 min-w-4 mr-0 sm:mr-4 mt-0 sm:mt-2 mb-2 sm:mb-0"></span>
                                <div>
                                    <h4 className="text-[24px] md:text-[32px] font-bold">
                                        {index === 0 ? "Smart Entries. Real Edge." : "Verified Results. No Hype."}
                                    </h4>
                                    <p className="text-[18px] md:text-[24px]">
                                        {index === 0
                                            ? "No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time."
                                            : "Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance."}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
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
                                    <circle cx="18" cy="18" r="16" fill="none" stroke="#4B5563" strokeWidth="4" />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#A855F7"
                                        strokeWidth="4"
                                        strokeDasharray="100"
                                        strokeDashoffset="25"
                                        transform="rotate(-90 18 18)"
                                    />
                                    <text x="18" y="21" textAnchor="middle" fill="white" fontSize="8">75%</text>
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="flex justify-center md:justify-start"
                    >
                        <Button>Start Trading Like This</Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
