const strategies = [
    {
        title: "MARTINGALE",
        description:
            "Reckless compounding with no exit plan. No strategy - just hope, until the account blows in one market move.",
    },
    {
        title: "GRID SYSTEMS",
        description:
            "Stacking trades with no risk control. Looks clever until the account blows in one market move.",
    },
    {
        title: "BLIND RE-ENTRIES",
        description:
            "Same setup. Same Trade. No logic. No adaptation to real market conditions.",
    },
    {
        title: "OVERFITTED INDICATORS",
        description:
            "Random signal triggers, overfitted to past data. They fall apart when it’s real.",
    },
];

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SecondSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });


    return (
        <section id="why-us" className="py-16 px-4" >
            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >

                <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="px-4 py-2 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[16px] sm:text-[18px] inline-block"
                >
                    Why Most EAs Fail
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-2xl sm:text-3xl md:text-[40px] text-white mb-8 leading-tight"
                >
                    Most EAs Blow Accounts.
                    <br />
                    <span className="font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent">Here’s Why</span>
                </motion.h2>

                <motion.div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-0">
                        {strategies.map((item, idx) => (
                            <motion.div
                                key={idx}
                                // variants={itemVariants}
                                initial={{ opacity: 0, y: -40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
                                className={`bg-[#3C3C3C] py-6 rounded-lg opacity-80 ${idx % 2 === 0
                                    ? "px-4 sm:px-8 md:pr-6 md:pl-16"
                                    : "px-4 sm:px-8 md:pr-16 md:pl-6"
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0">
                                        <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http:www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_3674_9642)">
                                                <mask id="mask0_3674_9642" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
                                                    <path d="M64 0H0V64H64V0Z" fill="white" />
                                                    <path d="M63.9998 31.9998C63.9998 49.6729 49.673 63.9998 31.9999 63.9998C14.3268 63.9998 0 49.6729 0 31.9998C0 14.3268 14.3268 -5.72205e-05 31.9999 -5.72205e-05C49.673 -5.72205e-05 63.9998 14.3268 63.9998 31.9998Z" fill="white" />
                                                    <path d="M20.5869 35.9355V38.8228H10.5643V36.5424L15.3826 32.0369C16.4124 31.0805 16.5596 30.492 16.5596 29.9588C16.5596 29.1312 16.0078 28.6347 14.9045 28.6347C13.9666 28.6347 13.1206 29.0577 12.6056 29.8852L9.90234 28.3772C10.877 26.7589 12.6976 25.6923 15.2355 25.6923C18.1962 25.6923 20.2376 27.2187 20.2376 29.6093C20.2376 30.8599 19.8882 32 18.0491 33.6919L15.6216 35.9355H20.5869Z" fill="black" />
                                                    <path d="M34.0689 36.3585H32.1565V38.8228H28.6071V36.3585H21.8027V33.9861L27.5772 25.9497H31.3472L26.106 33.4713H28.7175V31.2829H32.1565V33.4713H34.0689V36.3585Z" fill="black" />
                                                    <path d="M40.3403 23.3382H43.4482L37.3795 40.6616H34.2715L40.3403 23.3382Z" fill="black" />
                                                    <path d="M54.0959 25.9497V28.23L49.5537 38.8228H45.5813L49.9214 28.8369H46.5377V30.823H43.4297V25.9497H54.0959Z" fill="black" />
                                                </mask>
                                                <g mask="url(#mask0_3674_9642)">
                                                    <mask id="mask1_3674_9642" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
                                                        <path d="M0 0.00018692H63.9998V64H0V0.00018692Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask1_3674_9642)">
                                                        <path d="M63.9998 32.0001C63.9998 49.6732 49.673 64 31.9999 64C14.3268 64 0 49.6732 0 32.0001C0 14.327 14.3268 0.00018692 31.9999 0.00018692C49.673 0.00018692 63.9998 14.327 63.9998 32.0001Z" fill="url(#paint0_linear_3674_9642)" />
                                                        <path d="M20.5869 35.9355V38.8228H10.5643V36.5424L15.3826 32.0369C16.4124 31.0805 16.5596 30.492 16.5596 29.9588C16.5596 29.1312 16.0078 28.6347 14.9045 28.6347C13.9666 28.6347 13.1206 29.0577 12.6056 29.8852L9.90234 28.3772C10.877 26.7589 12.6976 25.6923 15.2355 25.6923C18.1962 25.6923 20.2376 27.2187 20.2376 29.6093C20.2376 30.8599 19.8882 32 18.0491 33.6919L15.6216 35.9355H20.5869Z" fill="white" />
                                                        <path d="M34.0689 36.3585H32.1565V38.8228H28.6071V36.3585H21.8027V33.9861L27.5772 25.9497H31.3472L26.106 33.4713H28.7175V31.2829H32.1565V33.4713H34.0689V36.3585Z" fill="white" />
                                                        <path d="M40.3403 23.3382H43.4482L37.3795 40.6616H34.2715L40.3403 23.3382Z" fill="white" />
                                                        <path d="M54.0959 25.9497V28.23L49.5537 38.8228H45.5813L49.9214 28.8369H46.5377V30.823H43.4297V25.9497H54.0959Z" fill="white" />
                                                    </g>
                                                </g>
                                            </g>
                                            <defs>
                                                <linearGradient id="paint0_linear_3674_9642" x1="31.9999" y1="64" x2="31.9999" y2="0.00018692" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#A200F5" />
                                                    <stop offset="1" stop-color="white" />
                                                </linearGradient>
                                                <clipPath id="clip0_3674_9642">
                                                    <rect width="64" height="64" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[16px] sm:text-[18px] font-bold mb-1">{item.title}</h3>
                                        <p className="text-[#898989] text-[14px] sm:text-[16px]">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Gradient edges */}
                    <div className="hidden md:block h-full w-[120px] absolute left-0 top-0 bg-gradient-to-r from-[#121212] to-transparent z-10"></div>
                    <div className="hidden md:block h-full w-[120px] absolute right-0 top-0 bg-gradient-to-l from-[#121212] to-transparent z-10"></div>
                </motion.div>
            </motion.div>
        </section>
    );
}
