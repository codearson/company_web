import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
import slides from '../../data/Blog/slides.json';
import slidesRTL from '../../data/Blog/slides-rtl.json';

const BlogSlider = ({ style = "4", rtl }) => {
  const swiperRef = useRef(null);
  const data = rtl ? slidesRTL : slides;

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: ".blog-details-slider .swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: '.blog-details-slider .swiper-button-next',
          prevEl: '.blog-details-slider .swiper-button-prev'
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 4000
        },
        loop: true
      });
    }
  }, []);

  return (
    <section className={`blog section-padding ${style === '4' ? 'bg-white' : ''}`}>
      <div className="container">
        <div className={`section-head text-center mb-60 style-${style}`}>
          <h2 className="mb-20">{ rtl ? 'أخر' : 'Our' } <span>{ rtl ? 'الأخبار' : 'Journal' }</span></h2>
          <div className="text color-666">{ rtl ? 'احصل على اخر الاخبار من خلال المدونه ناقش وشارك الخبر مع الاصدقاء' : 'Get the latest articles from our journal, writing, discuss and share' }</div>
        </div>
        <div className="blog-details-slider">
          <div className="swiper-container" ref={swiperRef}>
            <div className="swiper-wrapper">
              {data.map((slide, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="content-card">
                    <div className="img overlay">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="info">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="cont">
                            <small className="date small mb-20"> 
                              <span className="text-uppercase border-end brd-gray pe-3 me-3">{ slide.type }</span>
                              <i className="far fa-clock me-2"></i>{ rtl ? 'موعد النشر' : 'Posted on' } <span>{ slide.time }</span> 
                            </small>
                            <h2 className="title">
                              <Link to={ rtl ? "/rtl-page-single-post" : "/page-single-post-5"}>
                                { slide.title }
                              </Link>
                            </h2>
                            <p className="fs-13px mt-10 text-light text-info">
                              { slide.desc } [...]
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
}

export default BlogSlider;