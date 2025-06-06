import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projects from "../../data/ITCreative/projects.json";
import projectsRTL from "../../data/ITCreative/projects-rtl.json";

const Projects = ({ style = "4", rtl }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeTab] = useState(1);
  const projectsData = rtl ? projectsRTL : projects;

  useEffect(() => {
    setTimeout(() => {
      let mixitup = window.mixitup;

      if (!mixitup) return;
      mixitup(".portfolio-projects");
    }, 0);
  }, []);
  const allProjects = rtl
    ? projectsData.projects
    : projectsData.tabs.find((tab) => tab.id === activeTab)?.projects || [];

  const remainingItems = allProjects.length - visibleCount;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section
      className={`portfolio-projects section-padding pt-50 style-1 ${
        style === "5" ? "" : "bg-white"
      }`}
    >
      <div className="container">
        <div
          className={`section-head text-center style-${style} ${
            style === "5" ? "mb-60" : "mb-40"
          }`}
        >
          {style === "4" && <small className="title_small">portfolio</small>}
          <h2 className="mb-20">
            {rtl ? "" : "Our"} <span> {rtl ? "مشاريعنا" : "Projects"} </span>{" "}
          </h2>
          <p>
            {rtl
              ? "لدينا فريق من ذوي الخبرة من موظفي الإنتاج والتفتيش لضمان الجودة."
              : "We have an experienced team of production and inspection personnel to ensure quality."}
          </p>
        </div>
        <section className="portfolio style-1">
          <div className="content">
            <div className="row mix-container justify-content-center">
              {rtl
                ? projectsData.projects.map((project, i) => (
                    <div className={`col-lg-4 mix ${project.filter}`} key={i}>
                      <div
                        className={`portfolio-card ${
                          i !== projectsData.projects.length - 1 ? "mb-50" : ""
                        }`}
                      >
                        <div className="img">
                          <img src={project.image} alt="" />
                        </div>
                        <div className="info">
                          <h5>
                            <Link
                              to={
                                rtl
                                  ? "/rtl-page-single-project"
                                  : "/page-single-project-5"
                              }
                            >
                              {project.title}
                            </Link>
                          </h5>
                          <small className="d-block color-main text-uppercase">
                            {project.type}
                          </small>
                          <div className="text">{project.details}</div>
                          <div className="tags">
                            {project.tags.map((tag, i) => (
                              <button
                                key={i}
                                className="btn btn-link p-0 me-1 text-decoration-none"
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : projectsData.tabs
                    .find((tab) => tab.id === activeTab)
                    ?.projects.slice(0, visibleCount)
                    .map((project, i) => (
                      <div className="col-lg-4 mix" key={i}>
                        <div
                          className={`portfolio-card ${
                            i !==
                            projectsData.tabs.find(
                              (tab) => tab.id === activeTab
                            ).projects.length -
                              1
                              ? "mb-50"
                              : ""
                          }`}
                        >
                          <div className="img">
                            <img src={project.image} alt="" />
                          </div>
                          <div className="info">
                            <h5>
                              <Link to={project.link}>{project.title}</Link>
                            </h5>
                            <small className="d-block color-main text-uppercase">
                              {project.description}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
            </div>
          </div>
          {remainingItems > 0 && (
            <div className="text-center">
              <button
                onClick={handleShowMore}
                className={`btn rounded-pill fw-bold ${
                  style === "5"
                    ? "mt-30 sm-butn hover-blue2 blue5-3Dbutn"
                    : "me-4 text-white bg-blue4"
                }`}
              >
                <small>
                  {rtl ? "مشاهدة المزيد" : "Show More"} ({remainingItems})
                </small>
              </button>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default Projects;
