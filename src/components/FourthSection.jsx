import Image from 'next/image';
import Button from './elements/Button';

export default function FourthSection() {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto text-center">
            <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
                Real Traders. Real Results
                </span>
            <h2 className="text-4xl md:text-[48px] text-white">
                Trusted By Traders Who
            </h2>
            <h3 className="text-4xl md:text-[40px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-12">
                Don’t Mess Around
            </h3>
            <div className="grid grid-cols-2">
                <div className="mb-8 md:mb-0">
                    <img src="/images/mobile-img.png" alt="Mobile Trading Screen" className="w-[90%]" />
                </div>
                <div className="md:pl-12 text-center md:text-left">
                    <div className="space-y-4 relative">
                        <div className="flex items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg">
                            <span className="bg-purple-600 text-white rounded-full w-4 min-w-4 h-4 min-h-4 mr-4 mt-4"></span>
                            <div>
                                <h4 className="text-[32px] font-bold">Smart Entries. Real Edge.</h4>
                                <p className="text-[24px]">
                                    No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg">
                            <span className="bg-purple-600 text-white rounded-full w-4 min-w-4 h-4 min-h-4 mr-4 mt-4"></span>
                            <div>
                                <h4 className="text-[32px] font-bold">Verified Results. No Hype.</h4>
                                <p className="text-[24px]">
                                    Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 mb-12">
                        <h3 className="text-[40px] text-white mb-0">
                            Average Win Rate Using <br />The PipCollector
                        </h3>
                        <h4 className="text-[26px] bg-gradient-to-r [background-image:linear-gradient(to_right,_white_20%,_#A200F5_100%)] bg-clip-text text-transparent mb-8">
                            Powered By PipCore
                        </h4>
                        <div className="flex items-center justify-center md:justify-start">
                            <div className="relative w-32 h-32">
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
                                    <text x="18" y="20" textAnchor="middle" fill="white" fontSize="8">75%</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <Button>Start Trading Like This</Button>
                </div>
            </div>
        </section>
    );
}