// import React from 'react'
// import Button from './elements/Button'

// export default function CallToActionSection() {
//     return (
//         <>
//             <section className="pt-36">
//                 <div className="relative pt-4 pb-24 mt-16 sm:mt-24">
//                     <div className="text-white relative container max-w-5xl mx-auto text-center z-10 md:px-0 px-4">
//                         <img src="/images/logo.png" alt="" className="mx-auto block" />
//                         <h3 className="text-xl md:text-[72px] font-extrabold mb-4">
//                             Real Edge. No BS. Just Trades That Work.
//                         </h3>
//                         <p className="text-[18px] md:text-[24px] mb-8 text-[#898989]">
//                             The edge you’ve been trying to find - delivered.
//                         </p>
//                         <div className="flex flex-col mb-4 max-w-md mx-auto w-full">
//                             <Button link href="#">Start Trading Smarter Now</Button>
//                         </div>
//                     </div>

//                     <img
//                         src="/images/shadow-img-2.png"
//                         alt=""
//                         className="w-full object-cover absolute bottom-0"
//                     />
//                 </div>
//             </section>
//         </>
//     )
// }

import React from 'react';
import Button from './elements/Button';

// export default function CallToActionSection() {
//     return (
//         <section className="pt-24 sm:pt-36">
//             <div className="relative pt-8 pb-20 sm:pb-24 mt-12 sm:mt-24">
//                 <div className="relative text-white container mx-auto max-w-5xl text-center z-10 px-4">
//                     <img
//                         src="/images/logo.png"
//                         alt="ThePipCollective Logo"
//                         className="mx-auto mb-4 w-28 sm:w-32"
//                     />
//                     <h3 className="text-2xl sm:text-4xl md:text-[72px] font-extrabold leading-tight mb-4">
//                         Real Edge. No BS. Just Trades That Work.
//                     </h3>
//                     <p className="text-base sm:text-lg md:text-[24px] text-[#898989] mb-6 sm:mb-8">
//                         The edge you’ve been trying to find — delivered.
//                     </p>
//                     <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
//                         <Button link href="#">Start Trading Smarter Now</Button>
//                     </div>
//                 </div>

//                 <img
//                     src="/images/shadow-img-2.png"
//                     alt=""
//                     className="w-full object-cover absolute md:bottom-0 md:top-auto -top-20 left-0"
//                 />
//             </div>
//         </section>
//     );
// }

import { motion } from "framer-motion";
import { fadeUp } from './SubscriptionSection';

export default function CallToActionSection() {
  return (
    <section className="pt-24 sm:pt-36">
      <div className="relative pt-8 pb-20 sm:pb-24 mt-12 sm:mt-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative text-white container mx-auto max-w-5xl text-center z-10 px-4"
        >
          <motion.img
            src="/images/logo.png"
            alt="ThePipCollective Logo"
            className="mx-auto mb-4 w-28 sm:w-32"
            variants={fadeUp}
          />

          <motion.h3
            className="text-2xl sm:text-4xl md:text-[72px] font-extrabold leading-tight mb-4"
            variants={fadeUp}
          >
            Real Edge. No BS. Just Trades That Work.
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg md:text-[24px] text-[#898989] mb-6 sm:mb-8"
            variants={fadeUp}
          >
            The edge you’ve been trying to find — delivered.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
            variants={fadeUp}
          >
            <Button link href="#">Start Trading Smarter Now</Button>
          </motion.div>
        </motion.div>

        <img
          src="/images/shadow-img-2.png"
          alt=""
          className="w-full object-cover absolute md:bottom-0 md:top-auto -top-20 left-0"
        />
      </div>
    </section>
  );
}
