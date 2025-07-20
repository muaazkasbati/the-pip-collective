import Image from 'next/image';

export default function FourthSection() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto text-center">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full mb-4 hover:bg-purple-700">
                Real Traders. Real Results
            </button>
            <h2 className="text-4xl md:text-[40px] text-white">
                Trusted By Traders Who
            </h2>
            <h3 className="text-4xl md:text-[48px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-6">
                Don’t Mess Around
            </h3>
            <div className="grid grid-cols-2">
                <div className="mb-8 md:mb-0">
                    <img src="/images/mobile-img.png" alt="Mobile Trading Screen" className="" />
                </div>
                <div className="md:pl-12 text-center md:text-left">
                    <div className="space-y-4 text-gray-300">
                        <div className="flex items-start">
                            <span className="bg-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center mr-2 mt-1">
                                •
                            </span>
                            <p>
                                <strong>Smart Entries. Real Edge.</strong> No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time.
                            </p>
                        </div>
                        <div className="flex items-start">
                            <span className="bg-purple-600 text-white rounded-full w-4 h-4 flex items-center justify-center mr-2 mt-1">
                                •
                            </span>
                            <p>
                                <strong>Verified Results. No Hype.</strong> Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            Average Win Rate Using the PipCollector
                            <br />
                            <span className="text-purple-400">Powered By PipCore</span>
                        </h3>
                        <div className="flex items-center justify-center md:justify-start">
                            <div className="relative w-32 h-32">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <circle cx="18" cy="18" r="16" fill="none" stroke="#4B5563" strokeWidth="2" />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="16"
                                        fill="none"
                                        stroke="#A855F7"
                                        strokeWidth="2"
                                        strokeDasharray="100"
                                        strokeDashoffset="25"
                                        transform="rotate(-90 18 18)"
                                    />
                                    <text x="18" y="20" textAnchor="middle" fill="white" fontSize="6">75%</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 mt-6">
                        Start Trading Like This
                    </button>
                </div>
            </div>
        </section>
    );
}