import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./elements/Button";
import { useEffect, useRef, useState } from "react";

export default function FourthSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInFromRightSkewed = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  // const circleAnimation = {
  //   hidden: { strokeDashoffset: 100 },
  //   visible: { strokeDashoffset: 25 },
  // };

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  // const [percentage, setPercentage] = useState(0);
  // const { ref: circleRef, inView: circleInView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.3,
  // });
  // useEffect(() => {
  //   if (!circleInView) return;

  //   let current = 0;
  //   const target = 75;
  //   const interval = setInterval(() => {
  //     current += 1;
  //     if (current > target) {
  //       clearInterval(interval);
  //     } else {
  //       setPercentage(current);
  //     }
  //   }, 15); // adjust for speed

  //   return () => clearInterval(interval);
  // }, [circleInView]);

  const [percentage, setPercentage] = useState(0);
  const controls = useAnimation();
  const { ref: circleRef, inView: circleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const animationStarted = useRef(false);

  useEffect(() => {
    if (!circleInView || animationStarted.current) return;

    animationStarted.current = true;
    controls.start("visible");

    let current = 0;
    const target = 75;
    const interval = setInterval(() => {
      current += 1;
      if (current > target) {
        clearInterval(interval);
      } else {
        setPercentage(current);
      }
    }, 15);

    return () => clearInterval(interval);
  }, [circleInView, controls]);

  const circleAnimation = {
    hidden: { strokeDashoffset: 100 },
    visible: { strokeDashoffset: 25 },
  };

  return (
    <section
      ref={ref}
      id="expectations"
      className="py-16 px-4 max-w-6xl mx-auto text-center md:overflow-visible overflow-hidden"
    >
      <motion.span
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block"
      >
        Real Traders. Real Results
      </motion.span>

      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-3xl md:text-[48px] text-white"
      >
        Trusted By Traders Who
      </motion.h2>

      <motion.h3
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl md:text-[40px] font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-12"
      >
        Don’t Mess Around
      </motion.h3>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative"
      >
        <div className="flex justify-center relative z-10">
          <img
            src="/images/mobile-img.png"
            alt="Mobile Trading Screen"
            className="w-[80%] max-w-sm md:max-w-full"
          />
        </div>

        <div className="text-center md:text-left relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            {[0, 1].map((index) => (
              <motion.div
                key={index}
                variants={fadeInFromRightSkewed}
                transition={{ duration: 1, ease: "easeOut" }}
                className="skew-x-[-8deg]"
              >
                <div
                  style={{ transform: "skewX(-8deg)" }}
                  className={`flex flex-row items-center sm:items-start bg-[#D9D9D9]/10 backdrop-blur-lg p-4 rounded-lg ${index === 0 ? "ml-8" : ""
                    }`}
                >
                  <span className="bg-purple-600 shadow-[1px_0_8px_#A200F5] text-white rounded-full w-4 h-4 min-w-4 mr-0 sm:mr-4 mt-4 mb-2 sm:mb-0"></span>
                  <div>
                    <h4 className="text-[24px] md:text-[30px] font-bold">
                      {index === 0
                        ? "Smart Entries. Real Edge."
                        : "Verified Results. No Hype."}
                    </h4>
                    <p className="text-[18px] md:text-[22px] font-light">
                      {index === 0
                        ? "No Stacking. No Panic. Just Precise Trades Powered By Quant Logic That Adapts in Real-Time."
                        : "Real Performance. Real Traders. No Chaos. No Gimmicks. Just Consistent Execution And Performance."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 mb-12"
          >
            <h3 className="text-[28px] md:text-[40px] text-white mb-0">
              Average Win Rate Using <br className="hidden sm:block" /> The
              PipCollector
            </h3>
            <h4 className="text-[20px] md:text-[26px] bg-gradient-to-r [background-image:linear-gradient(to_right,_white_20%,_#A200F5_100%)] bg-clip-text text-transparent mb-8">
              Powered By PipCore
            </h4>

            <div className="flex justify-center md:justify-start">
              {/* <div ref={circleRef} className="relative w-24 h-24 md:w-32 md:h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="4"
                    strokeDasharray="100"
                    variants={circleAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    transform="rotate(-90 18 18)"
                  />
                  <text
                    x="18"
                    y="21"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                  >
                    {percentage}%
                  </text>

                </svg>
              </div> */}
              <div ref={circleRef} className="relative w-24 h-24 md:w-32 md:h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="4"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    variants={circleAnimation}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    transform="rotate(-90 18 18)"
                  />
                  <text
                    x="18"
                    y="21"
                    textAnchor="middle"
                    fill="white"
                    fontSize="8"
                  >
                    {percentage}%
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <Button>Start Trading Like This</Button>
          </motion.div>
        </div>

        <img
          src="/images/purple-shadow-bg-104.png"
          alt=""
          className="absolute left-0 right-0 -top-18"
        />
      </motion.div>
    </section>
  );
}
