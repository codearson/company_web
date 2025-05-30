import React, { useEffect, useRef } from 'react';
import services from '../../data/Services/services.json';
import 'swiper/css/swiper.min.css';

const Services = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Dynamically import Swiper only on client
    import('swiper').then(({ default: Swiper }) => {
      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          slidesPerView: 6,
          centeredSlides: true,
          spaceBetween: 0,
          speed: 1000,
          pagination: false,
          navigation: false,
          mousewheel: false,
          keyboard: true,
          autoplay: {
            delay: 4000
          },
          loop: true,
          breakpoints: {
            0: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 1
            },
            787: {
              slidesPerView: 2
            },
            991: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 6
            }
          }
        });
      }
    });
  }, []);

  return (
    <section className="services section-padding bg-white pb-50 style-6">
      <div className="container">
        <div className="section-head text-center style-4 mb-60">
          <small className="title_small"> Software Apps </small>
          <h2 className="mb-20"> Our Top <span> Services </span> </h2>
          <p> Notero intergrate with popular apps. Help you easy to connect and collaboration </p>
        </div>
      </div>
      <div className="content">
        <div className="services-slider position-relative style-6">
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {
                services.map((service, index) => (
                  <div className="swiper-slide" key={index}>
                    <a href="/page-services-5" className="service-card style-6">
                      <div className="icon">
                        <img src={service.img} alt={service.info} />
                      </div>
                      <div className="info">
                        <h5>{ service.info }</h5>
                        <div className="text">
                          { service.text }
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services