import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Daniella A- TPC Member",
    text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
    image: "/daniella.jpg",
  },
  {
    id: 2,
    name: "Daniella A- TPC Member",
    text: "AUTO SETFILE FINDER\nWe scan the markets weekly and deliver the top-performing strategies to your dashboard — ready to load and run instantly.",
    image: "/daniella.jpg",
  },
];

export default function FifthSection() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full mb-4 hover:bg-purple-700">
          Testimonials
        </button>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Real Edge. No BS. Just Trades That Work.
          <br />
          <span className="text-purple-400">The Edge You’ve Been Trying To Find - Delivered.</span>
        </h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-lg border border-gray-700/50 text-left">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}