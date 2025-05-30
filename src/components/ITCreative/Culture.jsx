import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import slides from '../../data/ITCreative/culture.json';

// Import Swiper styles
import 'swiper/css/swiper.min.css';

// Import LightGallery
import LightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import LightGallery plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Culture = () => {
  const swiperRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          787: {
            slidesPerView: 2,
            spaceBetween: 25
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      });
    }

    // Initialize LightGallery
    if (galleryRef.current) {
      LightGallery(galleryRef.current, {
        speed: 500,
        backdropDuration: 500,
        plugins: [lgThumbnail, lgZoom],
        download: false,
        counter: false
      });
    }
  }, []);

  return (
    <section className="culture section-padding style-5">
      <div className="section-head text-center style-4 mb-60">
        <small className="title_small">Our Philosophy</small>
        <h2 className="mb-20">Discover our <span>Culture</span> </h2>
        <p>More 15,000 Companies & partners trusted & choice Iteck</p>
      </div>
      <div className="content">
        <div className="culture-slider position-relative pb-80 style-5">
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {slides.map((slide, index) => (
                <div className="swiper-slide" key={index}>
                  <a 
                    href={slide} 
                    className="culture-card d-block"
                    aria-label={`View culture image ${index + 1}`}
                  >
                    <img 
                      src={slide} 
                      alt={`Iteck culture showcase ${index + 1}`}
                      loading="lazy"
                    />
                    <span className="overlay" aria-hidden="true"></span>
                  </a>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <div ref={galleryRef} className="d-none">
          {slides.map((slide, index) => (
            <a 
              href={slide} 
              className="culture-card d-block" 
              key={index}
              aria-label={`View culture image ${index + 1} in gallery`}
            >
              <img 
                src={slide} 
                alt={`Iteck culture showcase ${index + 1}`}
                loading="lazy"
              />
              <span className="overlay" aria-hidden="true"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;