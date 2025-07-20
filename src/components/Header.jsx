
export default function Header() {
    return (
        <header className="p-4">
            <div className="flex items-center justify-between text-white container max-w-7xl mx-auto">
                <img src="/images/logo.png" alt="The Pip Collective Logo" className="w-[187px]" />

                <nav className="flex space-x-8 py-4 px-6 rounded-[40px] backdrop-blur-3xl shadow-2xl shadow-black/20 bg-white/5 text-[16px] font-medium">
                    <a href="#why-us" className="hover:text-purple-400">Why Us</a>
                    <a href="#pricing" className="hover:text-purple-400">Pricing</a>
                    <a href="#copy-trade" className="hover:text-purple-400">Copy Trade</a>
                    <a href="#expectations" className="hover:text-purple-400">Expectations</a>
                    <a href="#faqs" className="hover:text-purple-400">FAQs</a>
                    <a href="#contact-us" className="hover:text-purple-400">Contact Us</a>
                </nav>
                <div className="flex items-center space-x-4 text-[18px]">
                    <a href="#login" className="hover:text-purple-400 font-semibold">Login</a>
                    <a href="#get-access" className="bg-transparent text-white px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow shadow-[#A200F5]">Get Access</a>
                </div>
            </div>
        </header>
    );
}