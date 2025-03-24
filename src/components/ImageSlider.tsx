import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=1920',
    title: 'Premium Meat Products',
    description: 'High-quality meat sourcing for your business',
  },
  {
    image: 'https://miro.medium.com/v2/resize:fit:917/1*do6LplIYDyq0a3iYPX6UEg.jpeg',
    title: 'Agricultural Excellence',
    description: 'Premium quality grains and agricultural commodities',
  },
  {
    image: 'https://investingnews.com/media-library/oil-barrels-on-black-background-with-golden-world-map.jpg?id=33602619&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C1',
    title: 'Petroleum Solutions',
    description: 'Reliable supply of petroleum products worldwide',
  },
 
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="h-[600px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;