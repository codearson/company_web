import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/ITCreative/portfolio.json';

const Portfolio = () => {
  return (
    <section className="portfolio style-7 section-padding">
      <div className="container">
        <div className="section-head text-center style-4 mb-80">
          <div className="top-title mb-10">
            <img src="/assets/img/line_l.png" alt="Left line decoration" />
            <h5> portfolio </h5>
            <img src="/assets/img/line_r.png" alt="Right line decoration" />
          </div>
          <h2 className="">
            Our Latest <span> Projects </span>
          </h2>
        </div>
        <div className="content">
          <div className="row">
            {
              projects.map((project, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="portfolio-card style-7 mt-5 mt-lg-0">
                    <div className="img img-cover">
                      <img src={project.cover} alt={project.title} />
                    </div>
                    <div className="info pt-40">
                      <div className="tags">
                        {
                          project.tags.map((tag, i) => (
                            <Link key={i} to={`/portfolio/tag/${tag.toLowerCase()}`}>{ tag }</Link>
                          ))
                        }
                      </div>
                      <h4 className="title">
                        <Link to={`/portfolio/${project.id}`}>{ project.title }</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <img src="/assets/img/shap_color_7.png" alt="Portfolio section decoration" className="shap_color" />
    </section>
  )
}

export default Portfolio 