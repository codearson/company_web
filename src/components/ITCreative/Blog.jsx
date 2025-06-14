import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../../data/ITCreative/blog.json';

const Blog = () => {
  return (
    <section className="blog style-7 section-padding">
      <div className="container">
        <div className="section-head text-center style-4 mb-80">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="Left line decoration" />
            <h5> blog </h5>
            <img src="/assets/img/line_r.png" alt="Right line decoration" />
          </div>
          <h2 className="">
            Company <span> News & Insights </span>
          </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              blogs.map((blog, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="blog-card style-7 mt-5 mt-lg-0">
                    <div className="img img-cover">
                      <img src={blog.cover} alt={blog.title} />
                    </div>
                    <div className="info pt-40">
                      <div className="date-tags">
                        <div className="tags">
                          <Link to={`/blog/category/${blog.category.toLowerCase()}`}>{ blog.category }</Link>
                        </div>
                        <span className="date">
                          { blog.date }
                        </span>
                        <span className="color-999"> | </span>
                        <span className="author color-999">
                          By <span className="color-000 fw-bold"> { blog.author } </span>
                        </span>
                      </div>
                      <h4 className="title">
                        <Link to={`/blog/${blog.id}`}>{ blog.title }</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <img src="/assets/img/shap_color_7.png" alt="Blog section decoration" className="shap_color" />
    </section>
  )
}

export default Blog