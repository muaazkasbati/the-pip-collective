import { useRef } from 'react';
import Button from './elements/Button';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

export default function FirstSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Animate the intensity of drop-shadow
  const shadowStrength = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const shadowFilter = useTransform(
    scrollYProgress,
    [0, 1],
    ['drop-shadow(0 -30px 10px #A200F5)', 'drop-shadow(0 -60px 20px #A200F5)']
  );




  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <>
      <section ref={sectionRef} className="pt-16 relative overflow-hidden">
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
          <motion.img
            src="/images/globe.gif"
            alt=""
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-[300px] md:hidden block mx-auto"
          />
        </motion.div>

        <motion.img
          src="/images/circle-1.png"
          alt=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/3 left-0"
        />
        <motion.img
          src="/images/globe.gif"
          alt=""
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/5 -right-36 h-[500px] md:block hidden"
        />
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
          <motion.svg
            style={{
              filter: shadowFilter,
              opacity,
            }}
            className="w-full h-[150%] sm:h-[200%] object-cover absolute bottom-0"
            viewBox="0 0 1440 352"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3754_9003)">
              <g filter="url(#filter0_d_3754_9003)">
                <ellipse cx="947.161" cy="346.67" rx="469.024" ry="145.592" transform="rotate(3.98847 947.161 346.67)" fill="#121212" />
              </g>
              <g filter="url(#filter1_d_3754_9003)">
                <ellipse cx="719.525" cy="510.757" rx="828.498" ry="347.618" fill="#121212" />
              </g>
              <g filter="url(#filter2_d_3754_9003)">
                <ellipse cx="719.525" cy="510.757" rx="828.498" ry="347.618" fill="#121212" />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_3754_9003" x="388.108" y="91.5498" width="1118.11" height="479.889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-15.1757" />
                <feGaussianBlur stdDeviation="45.5271" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <filter id="filter1_d_3754_9003" x="-346.093" y="-39.8362" width="2131.24" height="1169.48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="34.1453" />
                <feGaussianBlur stdDeviation="118.56" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.635294 0 0 0 0 0 0 0 0 0 0.960784 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <filter id="filter2_d_3754_9003" x="-122.726" y="152.231" width="1684.5" height="722.742" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2.84544" />
                <feGaussianBlur stdDeviation="6.87649" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <clipPath id="clip0_3754_9003">
                <rect width="1440" height="352" fill="white" />
              </clipPath>
            </defs>
          </motion.svg>
          {/* <svg className="w-full h-[150%] sm:h-[200%] object-cover absolute bottom-0" viewBox="0 0 1440 352" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3754_9003)">
              <g filter="url(#filter0_d_3754_9003)">
                <ellipse cx="947.161" cy="346.67" rx="469.024" ry="145.592" transform="rotate(3.98847 947.161 346.67)" fill="#121212" />
              </g>
              <g filter="url(#filter1_d_3754_9003)">
                <ellipse cx="719.525" cy="510.757" rx="828.498" ry="347.618" fill="#121212" />
              </g>
              <g filter="url(#filter2_d_3754_9003)">
                <ellipse cx="719.525" cy="510.757" rx="828.498" ry="347.618" fill="#121212" />
              </g>
            </g>
            <defs>
              <filter id="filter0_d_3754_9003" x="388.108" y="91.5498" width="1118.11" height="479.889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-15.1757" />
                <feGaussianBlur stdDeviation="45.5271" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <filter id="filter1_d_3754_9003" x="-346.093" y="-39.8362" width="2131.24" height="1169.48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="34.1453" />
                <feGaussianBlur stdDeviation="118.56" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.635294 0 0 0 0 0 0 0 0 0 0.960784 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <filter id="filter2_d_3754_9003" x="-122.726" y="152.231" width="1684.5" height="722.742" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="2.84544" />
                <feGaussianBlur stdDeviation="6.87649" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3754_9003" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3754_9003" result="shape" />
              </filter>
              <clipPath id="clip0_3754_9003">
                <rect width="1440" height="352" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
        </div>
      </section>
    </>
  );
}
