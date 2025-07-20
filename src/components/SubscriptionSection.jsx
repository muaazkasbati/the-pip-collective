import Image from 'next/image';

export default function SubscriptionSection() {
  return (
    <section className="py-12">
    <div className="bg-white/1 flex flex-col md:flex-row items-end overflow-hidden max-w-7xl mx-auto shadow-2xl shadow-white/20 rounded-xl">
            <div className="md:w-1/3 mb-8 md:mb-0">
        <img src="/images/subscription-img.png" alt="Trader" className="" />
      </div>
      <div className="md:w-2/3 text-center py-8 px-4">
        <h2 className="text-4xl md:text-[42px] leading-12 font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-4">
          Unlock Your Edge In The Markets
        </h2>
        <p className="text-[20px] font-medium text-[#898989] mb-6">
          Be the first to get EA updates and exclusive offers — straight to your inbox.
          <br />
          <span className="text-[12px]">We respect your privacy. Unsubscribe anytime.</span>
        </p>
        <form className="space-y-4">
          <div className="flex items-center gap-2">
            <label htmlFor="name" className="block text-white text-[16px] mb-1">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-3 bg-[#D9D9D9]/2 text-[16px] text-white rounded-[10px]"
              placeholder="Your Name"
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <label htmlFor="email" className="block text-white text-[16px] mb-1">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-3 bg-[#D9D9D9]/2 text-[16px] text-white rounded-[10px]"
              placeholder="Your Email"
            />
          </div>
          <button
            type="submit"
            className="bg-transparent mt-6 cursor-pointer text-white px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow shadow-[#A200F5]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}