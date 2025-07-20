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
];

export default function FifthSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="px-6 py-2.5 rounded-[30px] mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
          Testimonials
                </span>
        <h2 className="text-4xl md:text-[48px] text-white">
          Real Edge. No BS. Just Trades That Work.
        </h2>
        <h3 className="text-4xl md:text-[36px] leading-12 font-bold bg-gradient-to-r [background-image:linear-gradient(to_right,_white_30%,_#A200F5_80%)] bg-clip-text text-transparent mb-12">
          The Edge You’ve Been Trying To Find - Delivered.
        </h3>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1.5}
          pagination={{ clickable: true }}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="bg-white/10 p-10 rounded-xl text-left">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="text-[20px] uppercase font-bold text-white">{testimonial.name}</h3>
                  <p className="text-[16px] text-white">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-white text-[18px]">{testimonial.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}