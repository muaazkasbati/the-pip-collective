import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function SubscriptionSection() {
  return (
    <section id="access" className="py-12 px-4">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#121212] flex flex-col md:flex-row md:items-end items-center overflow-hidden max-w-7xl mx-auto shadow-2xl shadow-white/10 rounded-xl"
      >
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/3 mb-8 md:mb-0"
        >
          <img
            src="/images/subscription-img.png"
            alt="Trader"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-2/3 text-center py-8 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[42px] leading-snug font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-4">
            Unlock Your Edge In The Markets
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#898989] mb-6">
            Be the first to get EA updates and exclusive offers — straight to your inbox.
            <br />
            <span className="text-[12px] block mt-1">
              We respect your privacy. Unsubscribe anytime.
            </span>
          </p>

          {/* Form */}
          <form className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                "https://docs.google.com/spreadsheets/d/1n8baR8zHTmXPXX4EK0ARgAzZMBdeQojAVlppw6wXEAo/edit?usp=sharing";
            }}
          >
            <div className='flex items-center gap-2'>
              <label htmlFor="name" className="block text-white text-[16px] mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-3 bg-[#D9D9D9]/10 text-[16px] text-white rounded-[10px] placeholder:text-[#cccccc]"
                placeholder="Your Name"
              />
            </div>
            <div className='flex items-center gap-2'>
              <label htmlFor="email" className="block text-white text-[16px] mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-3 bg-[#D9D9D9]/10 text-[16px] text-white rounded-[10px] placeholder:text-[#cccccc]"
                placeholder="Your Email"
              />
            </div>
            <button
              type="submit"
              className="bg-transparent mt-4 w-full md:w-auto text-white px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow shadow-[#A200F5]"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
