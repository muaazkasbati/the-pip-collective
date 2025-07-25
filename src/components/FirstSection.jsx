import Button from './elements/Button';
import { motion } from 'framer-motion';

export default function FirstSection() {
  return (
    <>
      <section className="pt-16 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white relative container max-w-7xl mx-auto md:px-0 px-4 z-10"
        >
          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-[32px] leading-10 font-medium mb-4 bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent"
            >
              Trade Like a Hedge Fund
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-3xl md:text-[64px] leading-snug font-light mb-6"
            >
              Powered by Proprietary Quant Logic
              <br />
              – The Same Logic Hedge Funds Use
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-[18px] md:text-[22px] font-light mb-8 leading-8"
            >
              <span className="font-semibold text-[20px] md:text-[24px]">
                No martingale. No grid. No ridiculous drawdowns.
              </span>{' '}
              <span className="font-bold text-[22px] md:text-[28px]">No BS.</span>
              <br />
              Just simple, automated trading – built for live accounts & prop firm success.
            </motion.p>

            <motion.div
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              className="flex flex-col mb-4 max-w-md mx-auto w-full"
            >
              <Button link href="#">Unlock Free Lifetime Access</Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-[32px] font-extralight mb-8"
            >
              & Earn $200 just for joining us!
            </motion.p>
          </div>
          <div className="h-[300px] z-0 overflow-hidden md:hidden block w-full">
            <video
              src="/images/world-map.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full mix-blend-screen block"
            />
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm" /> */}
          </div>
        </motion.div>

        <motion.img
          src="/images/circle-1.png"
          alt=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/3 left-0"
        />
        {/* <motion.img
          src="/images/world-map.png"
          alt=""
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/3 right-0"
        /> */}
        <div className="absolute top-0 right-0 w-full z-0 overflow-hidden pointer-events-none h-[600px] md:block hidden">
          <video
            src="/images/world-map.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-auto h-full ml-auto md:-mr-[25%] -mr-[45%] mix-blend-screen block"
          />
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm" /> */}
        </div>
        <div className="relative py-12 mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white relative container max-w-7xl mx-auto text-center z-10 md:px-0 px-4"
          >
            <h3 className="text-xl md:text-[48px] font-semibold pb-6 mb-4 relative inline-block mx-auto">
              Trade Smarter. Not Harder.
              <span className="absolute bottom-0 right-8">
                <svg width="170" height="24" viewBox="0 0 170 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.6272 10.8234C11.6272 10.8234 33.5698 12.342 55.5799 11.8147C56.4563 11.8147 56.5538 12.8607 55.2429 12.9326C32.3676 14.1872 1.42548 13.983 1.00974 11.8147C0.537857 11.6882 0.268206 10.0852 1.14457 9.87419C55.9845 0.994412 167.383 -2.73893 169.338 5.7823C172.001 13.1224 87.9041 16.7502 35.963 23.563C28.1094 24.4067 29.5967 22.1108 35.4237 21.1796C67.1634 16.1075 155.215 10.6124 164.417 5.61355C144.463 1.31073 84.4698 3.19165 11.6272 10.8234Z" fill="#A200F5" />
                </svg>
              </span>
            </h3>
            <p className="text-[18px] md:text-[24px] mb-8 text-[#898989]">
              One intelligent trade at a time.
              <br />
              Not 10 over-leveraged guesses.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col mb-4 max-w-md mx-auto w-full"
            >
              <Button gradient>Before You Blow Another Account... WATCH THIS!</Button>
            </motion.div>
          </motion.div>

          <img
            src="/images/shadow-img.png"
            alt=""
            className="w-full h-[150%] sm:h-[200%] object-cover absolute bottom-0"
          />
        </div>
      </section>
    </>
  );
}
