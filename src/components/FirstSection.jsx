// import Button from './elements/Button';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';

// export default function FirstSection() {
//   const links = ["/images/logo-1-img.png", "/images/logo-3-img.png", "/images/logo-4-img.png", "/images/logo-5-img.png",]
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="pt-16">
//         <div className="text-white relative container max-w-7xl mx-auto md:px-0 px-4 z-10">
//           <div className="relative z-10 text-center">
//             <h1 className="text-3xl md:text-[32px] leading-10 font-medium mb-4 bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent">
//               Trade Like a Hedge Fund
//             </h1>

//             <h2 className="text-xl sm:text-3xl md:text-[64px] leading-snug font-semibold mb-6">
//               Powered by Proprietary Quant Logic
//               <br />
//               <span className="font-light">– The Same Logic Hedge Funds Use</span>
//             </h2>

//             <p className="text-[18px] md:text-[22px] font-light mb-8 leading-8">
//               <span className="font-semibold text-[20px] md:text-[24px]">
//                 No martingale. No grid. No ridiculous drawdowns.
//               </span>{' '}
//               <span className="font-bold text-[22px] md:text-[28px]">No BS.</span>
//               <br />
//               Just simple, automated trading – built for live accounts & prop firm success.
//             </p>

//             <div className="flex flex-col mb-4 max-w-md mx-auto w-full">
//               <Button link href="#">Unlock Free Lifetime Access</Button>
//             </div>

//             <p className="text-xl md:text-[32px] font-extralight mb-8">
//               & Earn $200 just for joining us!
//             </p>
//           </div>
//         </div>
//         <img src="/images/circle-1.png" alt="" className="absolute top-1/3 left-0" />
//         <img src="/images/world-map.png" alt="" className="absolute top-1/3 right-0" />

//         {/* SUBSECTION */}
//         <div className="relative py-12 mt-16 sm:mt-24">
//           <div className="text-white relative container max-w-7xl mx-auto text-center z-10 md:px-0 px-4">
//             <h3 className="text-xl md:text-[48px] font-semibold mb-4">
//               Trade Smarter. Not Harder.
//             </h3>
//             <p className="text-[18px] md:text-[24px] mb-8 text-[#898989]">
//               One intelligent trade at a time.
//               <br />
//               Not 10 over-leveraged guesses.
//             </p>
//             <div className="flex flex-col mb-4 max-w-md mx-auto w-full">
//               <Button link href="#">Before You Blow Another Account... WATCH THIS!</Button>
//             </div>
//           </div>

//           <img
//             src="/images/shadow-img.png"
//             alt=""
//             className="w-full h-[150%] sm:h-[200%] object-cover absolute bottom-0"
//           />
//         </div>
//       </section>

//       {/* VIDEO SECTION */}
//       <section className="pb-16 px-4">
//         <div className="text-white relative container max-w-7xl mx-auto">
//           <div className="relative z-10 text-center">
//             <div className="w-full max-w-[1000px] h-[200px] sm:h-[350px] md:h-[550px] rounded-[20px] overflow-hidden relative mx-auto mb-8">
//               <img src="/images/video-thumbnail.jpg" alt="Video thumbnail" className="w-full h-full object-cover" />
//               <img src="/images/play-button.png" alt="Play" className="absolute z-10 left-0 right-0 mx-auto block top-1/3 w-[50px] md:w-[80px]" />
//               <div className="w-full h-[100px] md:h-[180px] absolute top-0 bg-gradient-to-b from-black to-transparent"></div>
//               <div className="w-full h-[100px] md:h-[180px] absolute bottom-0 bg-gradient-to-b to-black from-transparent"></div>
//             </div>

//             <div className="flex flex-col mb-4 max-w-md mx-auto w-full">
//               <Button link href="#">Unlock Free Lifetime Access</Button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="pb-16 px-4">
//         <div className="text-white relative">
//           <div className="relative z-10 text-center">
//             <p className="text-xl md:text-[40px] mb-12">
//               Join us for FREE and earn $200
//             </p>
//             <div className='relative'>
//               <Swiper
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 breakpoints={{
//                   640: { slidesPerView: 1 },
//                   768: { slidesPerView: 2 },
//                   1024: { slidesPerView: 3 },
//                 }}
//                 loop
//                 className="pb-12"
//               >
//                 {links?.map((data, i) => (
//                   <SwiperSlide>
//                     <div className='flex justify-center items-center'>
//                       <img src={data} alt="" />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               <div className="h-full z-10 w-[180px] md:w-[420px] absolute top-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
//               <div className="h-full z-10 w-[180px] md:w-[420px] absolute top-0 right-0 bg-gradient-to-l from-[#121212] to-transparent"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import Button from './elements/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

export default function FirstSection() {
  const links = ["/images/logo-1-img.png", "/images/logo-3-img.png", "/images/logo-4-img.png", "/images/logo-5-img.png"];

  return (
    <>
      {/* HERO SECTION */}
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
              className="text-xl sm:text-3xl md:text-[64px] leading-snug font-semibold mb-6"
            >
              Powered by Proprietary Quant Logic
              <br />
              <span className="font-light">– The Same Logic Hedge Funds Use</span>
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
          src="/images/world-map.png"
          alt=""
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/3 right-0"
        />
        <div className="relative py-12 mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white relative container max-w-7xl mx-auto text-center z-10 md:px-0 px-4"
          >
            <h3 className="text-xl md:text-[48px] font-semibold mb-4">
              Trade Smarter. Not Harder.
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
              <Button link href="#">Before You Blow Another Account... WATCH THIS!</Button>
            </motion.div>
          </motion.div>

          <img
            src="/images/shadow-img.png"
            alt=""
            className="w-full h-[150%] sm:h-[200%] object-cover absolute bottom-0"
          />
        </div>
      </section>

      {/* SUBSECTION */}

      {/* VIDEO SECTION */}
      <section className="pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white relative container max-w-7xl mx-auto"
        >
          <div className="relative z-10 text-center">
            <div className="w-full max-w-[1000px] h-[200px] sm:h-[350px] md:h-[550px] rounded-[20px] overflow-hidden relative mx-auto mb-8">
              <img src="/images/video-thumbnail.jpg" alt="Video thumbnail" className="w-full h-full object-cover" />
              <img src="/images/play-button.png" alt="Play" className="absolute z-10 left-0 right-0 mx-auto block top-1/3 w-[50px] md:w-[80px]" />
              <div className="w-full h-[100px] md:h-[180px] absolute top-0 bg-gradient-to-b from-black to-transparent"></div>
              <div className="w-full h-[100px] md:h-[180px] absolute bottom-0 bg-gradient-to-b to-black from-transparent"></div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col mb-4 max-w-md mx-auto w-full"
            >
              <Button link href="#">Unlock Free Lifetime Access</Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* LOGO SLIDER */}
      <section className="pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white relative"
        >
          <div className="relative z-10 text-center">
            <p className="text-xl md:text-[40px] mb-12">
              Join us for FREE and earn $200
            </p>
            <div className="relative">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                loop
                className="pb-12"
              >
                {links.map((data, i) => (
                  <SwiperSlide key={i}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className='flex justify-center items-center'
                    >
                      <img src={data} alt="" />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="md:block hidden h-full z-10 w-[180px] md:w-[420px] absolute top-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
              <div className="md:block hidden h-full z-10 w-[180px] md:w-[420px] absolute top-0 right-0 bg-gradient-to-l from-[#121212] to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
