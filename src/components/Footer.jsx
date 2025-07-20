import Link from "next/link";

export default function Footer() {

    const solutions = [
        { label: "Solutions", href: "#Solutions" },
        { label: "Resources", href: "#resources" },
        { label: "Pricing", href: "#pricing" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
    ]
    const social = [
        { label: "Instagram", href: "#Instagram" },
        { label: "YouTube", href: "#youtube" },
        { label: "Twitter", href: "#twitter" },
        { label: "LinkedIn", href: "#linkedin" },
    ]

    return (
        <footer className="py-10">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                        <div className="flex items-center">
                            <img src="/images/logo.png" alt="ThePipCollective Logo" />
                        </div>
                        <p className="text-[19px] mt-2">Quant-Inspired Trading. Trusted By Traders <br /><b>Worldwide.</b></p>
                    </div>
                    <div className="col-span-2 space-y-3">
                        {solutions?.map((item, i) => (
                            <Link href={item.href} className="flex items-center gap-2 text-[16px] hover:text-purple-400">{item.label}<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.977051 8.04512L8.11495 0.907227M8.11495 0.907227H2.76152M8.11495 0.907227V6.26065" stroke="#FCF5FE" stroke-width="1.42758" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </Link>
                        ))}
                    </div>
                    <div className="col-span-2 space-y-3">
                        {solutions?.map((item, i) => (
                            <Link href={item.href} className="flex items-center gap-2 text-[16px] hover:text-purple-400">{item.label}<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.977051 8.04512L8.11495 0.907227M8.11495 0.907227H2.76152M8.11495 0.907227V6.26065" stroke="#FCF5FE" stroke-width="1.42758" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </Link>
                        ))}
                    </div>
                    <div className="space-y-3">
                        <p className="text-[16px]">support@nexaai.com</p>
                        <p className="text-[16px]">+91876543210</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-12">
                    <p className="text-[15px] text-[#898989]">&copy; 2025 All Rights Reserved by NexAI</p>

                    <div className="text-[15px] text-[#898989]">
                        <a href="#terms" className="hover:text-purple-400">Terms of Service</a>
                        <span className="mx-2">|</span>
                        <a href="#privacy" className="hover:text-purple-400">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}