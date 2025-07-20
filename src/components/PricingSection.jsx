import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const plansPaid = [
  {
    title: "Monthly Subscription PipCollector EA",
    price: "£49.99",
    priceTime: "Month",
    features: [
      "5 Account Licenses",
      "Step-By-Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Settle Finder",
      "Ready to Trade Settfiles",
    ],
    buttonText: "Checkout Now",
  },
  {
    title: "6 Month Subscription PipCollector EA",
    price: "£249.00",
    priceTime: "6 Months",
    features: [
      "5 Account Licenses",
      "Step-By-Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Settle Finder",
      "Ready to Trade Settfiles",
    ],
    buttonText: "Checkout Now",
  },
  {
    title: "Annual Subscription PipCollector EA",
    price: "£449.00",
    priceTime: "Year",
    features: [
      "5 Account Licenses",
      "Step-By-Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Settle Finder",
      "Ready to Trade Settfiles",
    ],
    buttonText: "Checkout Now",
  },
  {
    title: "Lifetime Access PipCollector EA",
    price: "£999.00",
    priceTime: "One-off Fee",
    features: [
      "5 Account Licenses",
      "Step - by - Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Setfile Finder",
      "Ready to trade setfiles",
      "24 / 7 Customer Support",
    ],
    buttonText: "Checkout Now",
  },
];
const plansFree = [
  {
    title: "FREE Lifetime Subscription PipCollector EA",
    price: "FREE",
    priceTime: "With Broker Sign-Up",
    features: [
      "5 Account Licenses (1 used for vantage)",
      "Step-by-Step Setup Guides",
      "Strategy Education & Training",
      "Exclusive Access to Discord & Web App",
      "Access to Setfile Finder",
      "Ready to trade setfiles",
      "24/7 Customer Support",
      "Get $200 cashback",
    ],
    buttonText: "Checkout Now",
  },
];

// export default function PricingSection() {
//   const [tab, setTab] = useState("paid")
//   const tabs = [
//     { label: "Subscribe & Get Access", value: "paid", description: "Flexible Plans: monthly, 6 Month, annual & Lifetime subscriptions." },
//     { label: "FREE Access via Broker", value: "free", description: "Join Our Partnered Broker & Get FREE Lifetime Access" },
//   ]

//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-7xl mx-auto text-center">
//         <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
//           Join Us ThePipCollective
//         </span>
//         <h2 className="text-4xl md:text-[48px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-4">
//           Select A Plan. Start Trading Smarter.
//         </h2>
//         <p className="text-[24px] text-[#767676] mb-8 max-w-4xl mx-auto">
//           All plans include full access to the EA (including future updates), ready to trade setfiles, settle finder, dashboard tools & 24/7 support.
//         </p>
//         <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
//           {tabs?.map((item, i) => (
//             <div className="space-y-3">
//               <button onClick={() => setTab(item.value)} key={i} className={`${tab === item.value ? "bg-[#A200F5]" : "bg-[#A200F5]/10"} w-full cursor-pointer text-white px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow shadow-[#A200F5]`}>
//                 {item?.label}
//               </button>
//               <p className="text-[16px]">{item.description}</p>
//             </div>
//           ))}
//         </div>
//         {tab === "paid" ?
//           <Swiper
//             modules={[Navigation]}
//             spaceBetween={30}
//             slidesPerView={3}
//             navigation={{ clickable: true }}
//             className=""
//           >
//             {plansPaid.map((plan, index) => (
//               <SwiperSlide key={index}>
//               <div className="bg-white/10 py-8 px-10 rounded-3xl text-left overflow-hidden relative before:absolute before:block before:top-0 before:left-0 before:h-full before:w-full before:opacity-10 before:bg-[url('/images/noise.jpg')] before:bg-cover before:bg-blend-overlay">
//                 <h3 className="text-[21px] font-semibold text-white mb-2 relative z-10">Get INSTANT Access</h3>
//                 <h4 className="text-[17px] text-white mb-2 relative z-10">{plan.title}</h4>
//                 <p className="text-[35px] font-semibold text-white mb-10 relative z-10">{plan.price}/<small className="text-[14px] font-semibold">{plan.priceTime}</small></p>
//                 <ul className="text-white text-[14px] space-y-3 mb-12 relative z-10">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center">
//                       <span className="text-purple-600 mr-2">
//                         <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
//                         </svg>
//                       </span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="border border-[#A200F5] shadow shadow-[#A200F5] text-[18px] font-medium text-white px-6 py-2 rounded-full cursor-pointer w-full relative z-10">
//                   {plan.buttonText}
//                 </button>
//                 <img src="/images/bg-purple-shadow-2.png" alt="" className="absolute bottom-0 right-0 w-full" />
//               </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           : <>
//             <div className="flex justify-center">
//               {plansFree.map((plan, index) => (
//                 <div key={index} className="md:w-1/3 bg-white/10 py-8 px-10 rounded-3xl text-left overflow-hidden relative before:absolute before:block before:top-0 before:left-0 before:h-full before:w-full before:opacity-10 before:bg-[url('/images/noise.jpg')] before:bg-cover before:bg-blend-overlay">
//                   <h3 className="text-[21px] font-semibold text-white mb-2 relative z-10">Get INSTANT Access</h3>
//                   <h4 className="text-[17px] text-white mb-2 relative z-10">{plan.title}</h4>
//                   <p className="text-[35px] font-semibold text-white mb-10 relative z-10">{plan.price}/<small className="text-[14px] font-semibold">{plan.priceTime}</small></p>
//                   <ul className="text-white text-[14px] space-y-3 mb-12 relative z-10">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-center">
//                         <span className="text-purple-600 mr-2">
//                           <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
//                           </svg>
//                         </span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <button className="border border-[#A200F5] shadow shadow-[#A200F5] text-[18px] font-medium text-white px-6 py-2 rounded-full cursor-pointer w-full relative z-10">
//                     {plan.buttonText}
//                   </button>
//                   <img src="/images/bg-purple-shadow-2.png" alt="" className="absolute bottom-0 right-0 w-full" />
//                 </div>
//               ))}
//             </div>
//           </>}
//         <div className="mt-6 text-sm text-white text[15px] font-medium flex flex-wrap justify-center space-x-4">
//           <span className="flex items-center">
//             <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span> No lock-in contracts - cancel anytime
//           </span>
//           <span className="flex items-center">
//             <span className="w-4 h-4 bg-purple-400 rounded-full mr-2"></span> Trusted by real traders. No gimmicks. No BS
//           </span>
//           <span className="flex items-center">
//             <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span> Instant activation - get trading in minutes
//           </span>
//           <span className="flex items-center">
//             <span className="w-4 h-4 bg-purple-600 rounded-full mr-2"></span> Weekly setfile drops - tested & ready to go
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function PricingSection() {
//   const [tab, setTab] = useState("paid");

//   const tabs = [
//     {
//       label: "Subscribe & Get Access",
//       value: "paid",
//       description:
//         "Flexible Plans: monthly, 6 Month, annual & Lifetime subscriptions.",
//     },
//     {
//       label: "FREE Access via Broker",
//       value: "free",
//       description: "Join Our Partnered Broker & Get FREE Lifetime Access",
//     },
//   ];

//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-7xl mx-auto text-center">
//         <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
//           Join Us ThePipCollective
//         </span>
//         <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-[#A200F5] bg-clip-text text-transparent mb-4">
//           Select A Plan. Start Trading Smarter.
//         </h2>
//         <p className="text-lg md:text-2xl text-[#767676] mb-8 max-w-4xl mx-auto">
//           All plans include full access to the EA (including future updates),
//           ready to trade setfiles, settle finder, dashboard tools & 24/7
//           support.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
//           {tabs.map((item, i) => (
//             <div className="space-y-3" key={i}>
//               <button
//                 onClick={() => setTab(item.value)}
//                 className={`${tab === item.value ? "bg-[#A200F5]" : "bg-[#A200F5]/10"
//                   } w-full text-white px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow shadow-[#A200F5]`}
//               >
//                 {item.label}
//               </button>
//               <p className="text-[16px] text-white">{item.description}</p>
//             </div>
//           ))}
//         </div>

//         {tab === "paid" ? (
//           <div className="relative">
//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={30}
//               slidesPerView={1}
//               breakpoints={{
//                 640: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//               navigation={{
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//               }}
//               className="pb-12"
//             >
//               {plansPaid.map((plan, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="bg-white/10 py-8 px-6 sm:px-10 rounded-3xl text-left relative overflow-hidden before:absolute before:inset-0 before:bg-[url('/images/noise.jpg')] before:bg-cover before:opacity-10 z-0">
//                     <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
//                       Get INSTANT Access
//                     </h3>
//                     <h4 className="text-md text-white mb-2 relative z-10">
//                       {plan.title}
//                     </h4>
//                     <p className="text-3xl font-semibold text-white mb-10 relative z-10">
//                       {plan.price}
//                       <small className="text-sm font-semibold">
//                         /{plan.priceTime}
//                       </small>
//                     </p>
//                     <ul className="text-white text-sm space-y-3 mb-12 relative z-10">
//                       {plan.features.map((feature, i) => (
//                         <li key={i} className="flex items-center">
//                           <span className="text-purple-600 mr-2">
//                             <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
//                             </svg>
//                           </span>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                     <button className="border border-[#A200F5] shadow shadow-[#A200F5] text-white text-md font-medium px-6 py-2 rounded-full w-full relative z-10">
//                       {plan.buttonText}
//                     </button>
//                     <img
//                       src="/images/bg-purple-shadow-2.png"
//                       alt=""
//                       className="absolute bottom-0 right-0 w-full"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* Navigation Buttons */}
//             <div className="absolute -top-6 right-4 flex gap-4 z-50">
//               <button className="swiper-button-prev text-white text-2xl">
//                 ←
//               </button>
//               <button className="swiper-button-next text-white text-2xl">
//                 →
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="flex flex-col md:flex-row justify-center gap-6">
//             {plansFree.map((plan, index) => (
//               <div
//                 key={index}
//                 className="md:w-1/3 bg-white/10 py-8 px-6 sm:px-10 rounded-3xl text-left relative overflow-hidden before:absolute before:inset-0 before:bg-[url('/images/noise.jpg')] before:bg-cover before:opacity-10 z-0"
//               >
//                 <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
//                   Get INSTANT Access
//                 </h3>
//                 <h4 className="text-md text-white mb-2 relative z-10">
//                   {plan.title}
//                 </h4>
//                 <p className="text-3xl font-semibold text-white mb-10 relative z-10">
//                   {plan.price}
//                   <small className="text-sm font-semibold">
//                     /{plan.priceTime}
//                   </small>
//                 </p>
//                 <ul className="text-white text-sm space-y-3 mb-12 relative z-10">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center">
//                       <span className="text-purple-600 mr-2">
//                         <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
//                         </svg>
//                       </span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="border border-[#A200F5] shadow shadow-[#A200F5] text-white text-md font-medium px-6 py-2 rounded-full w-full relative z-10">
//                   {plan.buttonText}
//                 </button>
//                 <img
//                   src="/images/bg-purple-shadow-2.png"
//                   alt=""
//                   className="absolute bottom-0 right-0 w-full"
//                 />
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="mt-10 text-white text-sm font-medium flex flex-wrap justify-center gap-4">
//           <span className="flex items-center">
//             <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>{" "}
//             No lock-in contracts - cancel anytime
//           </span>
//           <span className="flex items-center">
//             <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>{" "}
//             Trusted by real traders. No gimmicks. No BS
//           </span>
//           <span className="flex items-center">
//             <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>{" "}
//             Instant activation - get trading in minutes
//           </span>
//           <span className="flex items-center">
//             <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>{" "}
//             Weekly setfile drops - tested & ready to go
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function PricingSection() {
  const [tab, setTab] = useState("paid");

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const tabs = [
    {
      label: "Subscribe & Get Access",
      value: "paid",
      description:
        "Flexible Plans: monthly, 6 Month, annual & Lifetime subscriptions.",
    },
    {
      label: "FREE Access via Broker",
      value: "free",
      description: "Join Our Partnered Broker & Get FREE Lifetime Access",
    },
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto text-center"
      >
        <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
          Join Us ThePipCollective
        </span>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-white to-[#A200F5] bg-clip-text text-transparent mb-4">
          Select A Plan. Start Trading Smarter.
        </h2>
        <p className="text-lg md:text-2xl text-[#767676] mb-8 max-w-4xl mx-auto">
          All plans include full access to the EA (including future updates),
          ready to trade setfiles, settle finder, dashboard tools & 24/7
          support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {tabs.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.1 * i }}
              className="space-y-3"
            >
              <button
                onClick={() => setTab(item.value)}
                className={`${tab === item.value ? "bg-[#A200F5]" : "bg-[#A200F5]/10"
                  } w-full text-white px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow shadow-[#A200F5]`}
              >
                {item.label}
              </button>
              <p className="text-[16px] text-white">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {tab === "paid" ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="pb-12"
            >
              {plansPaid.map((plan, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    transition={{ delay: 0.2 + index * 0.2 }}
                    className="bg-white/10 py-8 px-6 sm:px-10 rounded-3xl text-left relative overflow-hidden before:absolute before:inset-0 before:bg-[url('/images/noise.jpg')] before:bg-cover before:opacity-10 z-0"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                      Get INSTANT Access
                    </h3>
                    <h4 className="text-md text-white mb-2 relative z-10">
                      {plan.title}
                    </h4>
                    <p className="text-3xl font-semibold text-white mb-10 relative z-10">
                      {plan.price}
                      <small className="text-sm font-semibold">
                        /{plan.priceTime}
                      </small>
                    </p>
                    <ul className="text-white text-sm space-y-3 mb-12 relative z-10">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-purple-600 mr-2">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="border border-[#A200F5] shadow shadow-[#A200F5] text-white text-md font-medium px-6 py-2 rounded-full w-full relative z-10">
                      {plan.buttonText}
                    </button>
                    <img
                      src="/images/bg-purple-shadow-2.png"
                      alt=""
                      className="absolute bottom-0 right-0 w-full"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute -top-6 right-4 flex gap-4 z-50">
              <button className="swiper-button-prev text-white text-2xl">←</button>
              <button className="swiper-button-next text-white text-2xl">→</button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row justify-center gap-6"
          >
            {plansFree.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="md:w-1/3 bg-white/10 py-8 px-6 sm:px-10 rounded-3xl text-left relative overflow-hidden before:absolute before:inset-0 before:bg-[url('/images/noise.jpg')] before:bg-cover before:opacity-10 z-0"
              >
                <h3 className="text-lg font-semibold text-white mb-2 relative z-10">
                  Get INSTANT Access
                </h3>
                <h4 className="text-md text-white mb-2 relative z-10">
                  {plan.title}
                </h4>
                <p className="text-3xl font-semibold text-white mb-10 relative z-10">
                  {plan.price}
                  <small className="text-sm font-semibold">
                    /{plan.priceTime}
                  </small>
                </p>
                <ul className="text-white text-sm space-y-3 mb-12 relative z-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-purple-600 mr-2">
                        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.1988 1.86041L6.7664 14.2928C6.69423 14.3651 6.60853 14.4224 6.5142 14.4615C6.41987 14.5006 6.31876 14.5207 6.21665 14.5207C6.11454 14.5207 6.01342 14.5006 5.91909 14.4615C5.82476 14.4224 5.73907 14.3651 5.6669 14.2928L0.227712 8.85365C0.0819106 8.70785 0 8.5101 0 8.30391C0 8.09771 0.0819106 7.89996 0.227712 7.75416C0.373514 7.60836 0.571264 7.52645 0.777459 7.52645C0.983654 7.52645 1.1814 7.60836 1.32721 7.75416L6.21665 12.6446L18.0993 0.760915C18.2451 0.615113 18.4429 0.533203 18.6491 0.533203C18.8553 0.533203 19.053 0.615113 19.1988 0.760915C19.3446 0.906717 19.4265 1.10447 19.4265 1.31066C19.4265 1.51686 19.3446 1.71461 19.1988 1.86041Z" fill="#A200F5" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="border border-[#A200F5] shadow shadow-[#A200F5] text-white text-md font-medium px-6 py-2 rounded-full w-full relative z-10">
                  {plan.buttonText}
                </button>
                <img
                  src="/images/bg-purple-shadow-2.png"
                  alt=""
                  className="absolute bottom-0 right-0 w-full"
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 text-white text-sm font-medium flex flex-wrap justify-center gap-4"
        >
          <span className="flex items-center">
            <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
            No lock-in contracts - cancel anytime
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
            Trusted by real traders. No gimmicks. No BS
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
            Instant activation - get trading in minutes
          </span>
          <span className="flex items-center">
            <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
            Weekly setfile drops - tested & ready to go
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
