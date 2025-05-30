import React, { useEffect, useState, useRef } from 'react';
import Swiper from 'swiper';
import testimonials from '../../data/ITCreative/testimonials.json';
import 'swiper/css/swiper.min.css';

const Testimonials = () => {
  const [load, setLoad] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    });
  }, []);

  useEffect(() => {
    if (load && swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
          delay: 5000
        },
        loop: true
      });
    }
  }, [load]);

  return (
    <section className="testimonials style-7 section-padding">
      <div className="container">
        <div className="section-head text-center style-4 mb-80">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="" />
            <h5> Feedbacks </h5>
            <img src="/assets/img/line_r.png" alt="" />
          </div>
          <h2 className="">
            1M+ Happy <span> Users Around </span> <br /> From Worlds
          </h2>
        </div>
        <div className="testimonials-slider7 position-relative overflow-hidden">
          {
            load && (
              <div className="swiper-container" ref={swiperRef}>
                <div className="swiper-wrapper">
                  {
                    testimonials.map((testimonial, index) => (
                      <div className="swiper-slide" key={index}>
                        <div className="content">
                          <div className="row justify-content-center">
                            <div className="col-lg-10">
                              <div className="testi-card">
                                <div className="text">
                                  “{ testimonial.text }”
                                </div>
                                <div className="author">
                                  <div className="img icon-60 rounded-circle overflow-hidden img-cover me-3 flex-shrink-0">
                                    <img src={testimonial.image} alt="" />
                                  </div>
                                  <div className="inf">
                                    <p> Head Of Idea </p>
                                    <h6>{ testimonial.author }</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
        <div className="get-qoute-banner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info">
                <p> Anytime you can make request to us </p>
                <h6> Everything You Need To Manage Business </h6>
              </div>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="img">
                <img src="/assets/img/testimonials/banner7.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="btns text-lg-end">
                <a href="#0" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white">
                  <small> Get A Quote <i className="fas fa-long-arrow-alt-right"></i> </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/testimonials/testi7_back.png" alt="" className="img_back slide_up_down" />
      <img src="/assets/img/testimonials/testi7_qout.png" alt="" className="testi_qout" />
    </section>
  )
}

export default Testimonials