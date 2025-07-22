import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Daniella A-",
    position: "TPC Member",
    text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
    image: "/images/testi-img.png",
  },
  {
    id: 2,
    name: "Daniella A-",
    position: "TPC Member",
    text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
    image: "/images/testi-img.png",
  },
  {
    id: 3,
    name: "Daniella A-",
    position: "TPC Member",
    text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
    image: "/images/testi-img.png",
  },
  {
    id: 4,
    name: "Daniella A-",
    position: "TPC Member",
    text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
    image: "/images/testi-img.png",
  },
];

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FifthSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 px-4">
      <motion.div
        ref={ref}
        variants={fadeUpVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center"
      >
        <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-[48px] text-white">
          Real Edge. No BS. Just Trades That Work.
        </h2>
        <h3 className="text-4xl md:text-[36px] leading-12 font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-12">
          The Edge You’ve Been Trying To Find - Delivered.
        </h3>
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1.5}
            centeredSlides={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={fadeUpVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.2 + index * 0.2 }}
              >
                <SwiperSlide className="bg-white/10 p-6 sm:p-10 rounded-xl text-left">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-[18px] sm:text-[20px] uppercase font-bold text-white">{testimonial.name}</h3>
                      <p className="text-[14px] sm:text-[16px] text-white">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-white text-[16px] sm:text-[18px]">{testimonial.text}</p>
                </SwiperSlide>
              </motion.div>
            ))}
          </Swiper>
          <div className="md:block hidden h-full z-10 w-[180px] md:w-[420px] absolute top-0 bg-gradient-to-r from-[#121212] to-transparent"></div>
          <div className="md:block hidden h-full z-10 w-[180px] md:w-[420px] absolute top-0 right-0 bg-gradient-to-l from-[#121212] to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
