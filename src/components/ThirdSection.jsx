import Button from "./elements/Button";

export default function ThirdSection() {
    const features = [
        {
            title: "BUILT ON HEDGE FUND LOGIC",
            description:
                "This EA doesn’t guess. It runs on proprietary quant logic—like the systems hedge funds use to scale real capital.",
        },
        {
            title: "BUILT TO HANDLE REAL ACCOUNTS",
            description:
                "Not just a challenge-passing tool. This EA scales real capital—sustainably with smart logic, not over-trading.",
        },
        {
            title: "SMART, CONTROLLED RISK",
            description:
                "No martingale. No chaos. Every move is disciplined and designed to protect capital—not gamble it.",
        },
        {
            title: "STREAMLINED FOR REAL TRADERS",
            description:
                "No 50+ settings to tweak—just plug in and trade. The logic is pre-optimized for edge.",
        },
        {
            title: "DESIGNED TO PASS CHALLENGES",
            description:
                "Built for prop firm success. Disciplined entries, tight drawdown control and logic that holds up under pressure.",
        },
        {
            title: "SIMPLE TO USE. BRUTAL WHERE IT COUNTS.",
            description:
                "No fluff. No noise. Plug in. Trade smart. Simple to deploy, ruthless in performance.",
        },
    ];

    return (
        <section className="py-16 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center shadow-[inset_0_0_10px_#ffffff44] pt-10 pb-12 px-20 rounded-[12px]">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full mb-4 hover:bg-purple-700">
                    Why This PipCollector Actually Works
                </button>
                <h2 className="text-4xl md:text-[40px] text-white">
                    Built Different-
                </h2>
                <h3 className="text-4xl md:text-[48px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-6">
                    Built On Quant Logic
                </h3>
                <p className="text-white text-[18px] mb-8">No grid. No martingale. No luck.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((item, idx) => (
                        <div key={idx} className={`bg-white/10 backdrop-blur-lg p-6 rounded-lg text-start`}>
                            <div className="flex items-center gap-4">
                                <div>
                                    <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_3674_9093)">
                                            <mask id="mask0_3674_9093" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="53" height="53">
                                                <path d="M52.1889 0.878906H0.529297V52.5385H52.1889V0.878906Z" fill="white" />
                                                <path d="M52.1888 26.7086C52.1888 40.974 40.6244 52.5383 26.359 52.5383C12.0937 52.5383 0.529297 40.974 0.529297 26.7086C0.529297 12.4432 12.0937 0.878841 26.359 0.878841C40.6244 0.878841 52.1888 12.4432 52.1888 26.7086Z" fill="white" />
                                                <path d="M17.1459 29.8853V32.2158H9.05584V30.3751L12.945 26.7384C13.7763 25.9664 13.8951 25.4914 13.8951 25.061C13.8951 24.3929 13.4497 23.9922 12.5591 23.9922C11.8021 23.9922 11.1192 24.3336 10.7035 25.0016L8.52148 23.7843C9.30818 22.4781 10.7778 21.6172 12.8263 21.6172C15.2161 21.6172 16.8639 22.8492 16.8639 24.7789C16.8639 25.7884 16.5819 26.7086 15.0974 28.0743L13.1379 29.8853H17.1459Z" fill="black" />
                                                <path d="M28.03 30.2267H26.4862V32.2158H23.6213V30.2267H18.1289V28.3118L22.79 21.8249H25.833L21.6024 27.8962H23.7104V26.1298H26.4862V27.8962H28.03V30.2267Z" fill="black" />
                                                <path d="M33.092 19.717H35.6006L30.7021 33.7002H28.1934L33.092 19.717Z" fill="black" />
                                                <path d="M44.1936 21.8249V23.6656L40.5272 32.2158H37.3207L40.824 24.1554H38.0927V25.7586H35.584V21.8249H44.1936Z" fill="black" />
                                            </mask>
                                            <g mask="url(#mask0_3674_9093)">
                                                <mask id="mask1_3674_9093" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="53" height="53">
                                                    <path d="M0.529297 0.878353H52.1888V52.5378H0.529297V0.878353Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask1_3674_9093)">
                                                    <path d="M52.1888 26.7081C52.1888 40.9735 40.6244 52.5378 26.359 52.5378C12.0937 52.5378 0.529297 40.9735 0.529297 26.7081C0.529297 12.4427 12.0937 0.878353 26.359 0.878353C40.6244 0.878353 52.1888 12.4427 52.1888 26.7081Z" fill="#A200F5" />
                                                    <path d="M17.1459 29.8848V32.2153H9.05584V30.3747L12.945 26.7379C13.7763 25.9659 13.8951 25.4909 13.8951 25.0605C13.8951 24.3925 13.4497 23.9917 12.5591 23.9917C11.8021 23.9917 11.1192 24.3331 10.7035 25.0011L8.52148 23.7838C9.30818 22.4776 10.7778 21.6167 12.8263 21.6167C15.2161 21.6167 16.8639 22.8487 16.8639 24.7784C16.8639 25.7879 16.5819 26.7081 15.0974 28.0738L13.1379 29.8848H17.1459Z" fill="white" />
                                                    <path d="M28.03 30.2262H26.4862V32.2153H23.6213V30.2262H18.1289V28.3113L22.79 21.8244H25.833L21.6024 27.8957H23.7104V26.1293H26.4862V27.8957H28.03V30.2262Z" fill="white" />
                                                    <path d="M33.092 19.7165H35.6006L30.7021 33.6997H28.1934L33.092 19.7165Z" fill="white" />
                                                    <path d="M44.1936 21.8244V23.6651L40.5272 32.2153H37.3207L40.824 24.1549H38.0927V25.7581H35.584V21.8244H44.1936Z" fill="white" />
                                                </g>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3674_9093">
                                                <rect width="51.6596" height="51.6596" fill="white" transform="translate(0.529297 0.878906)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <div className="">
                                    <h3 className="text-[18px] font-bold mb-1">{item.title}</h3>
                                    <p className="text-[#898989] text-[18px]">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-white text-[20px] mt-8 mb-8">
                    It’s Not Another EA. It’s A System Built To Think And Trade... Like A Hedge Fund.
                </p>
                <Button link href="#">Ready to Trade Smarter? Unlock It Now</Button>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                Real Traders. Real Results
            </button>
        </section>
    );
}