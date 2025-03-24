import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=1920',
    title: 'Premium Meat Products',
    description: 'High-quality meat sourcing for your business',
    button: 'Explore Meat Selection',
    color: 'bg-red-900/30' // subtle tint
  },
  {
    image: 'https://www.groavy.com/static/media/Jan10.42797ab18bd43c2bf3ed.webp',
    title: 'Agricultural Excellence',
    description: 'Premium quality grains and agricultural commodities',
    button: 'View Agricultural Products',
    color: 'bg-green-900/30' // subtle tint
  },
  {
    image: 'https://static.slobodnadalmacija.hr/Portals/3/Images/2018/02/20/Cijena%20goriva.jpg',
    title: 'Petroleum Solutions',
    description: 'Reliable supply of petroleum products worldwide',
    button: 'Discover Fuel Options',
    color: 'bg-red-900/30' // subtle tint
  }
];

const ImageSlider = () => {
  return (
    <div className="relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false
        }}
        effect="fade"
        speed={1000}
        className="h-[600px] md:h-[700px] lg:h-[800px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Color Overlay */}
              <div className={`absolute inset-0 ${slide.color} transition-opacity duration-1000`} />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-3xl transform transition-all duration-1000 ease-out">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md">
                    {slide.description}
                  </p>
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Style */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,0.5);
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: white;
          transform: scale(1.2);
        }
        .swiper-button-next, 
        .swiper-button-prev {
          color: white;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .swiper-button-next:hover, 
        .swiper-button-prev:hover {
          background: rgba(255,255,255,0.3);
        }
        .group:hover .swiper-button-next,
        .group:hover .swiper-button-prev {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;