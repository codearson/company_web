import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SecondContent = ({ accordions, rtl }) => {
  // Function to run when arrow is clicked
  const handleArrowClick = (id) => {
    console.log("Accordion arrow clicked, id:", id);
  };

  return (
    <div className="content sec-content">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5 order-2 order-lg-0">
            <div className="info">
              <div className="section-head style-4">
                <small className="title_small">
                  {rtl ? "إدارة أفضل للملاحظات" : "Better Note Management"}
                </small>
                <h2 className="mb-30">
                  {rtl ? "ملاحظاتك" : "Your Notes"}{" "}
                  <span> {rtl ? "في امان" : "Security"} </span>
                </h2>
              </div>
              <p className="text mb-40">
                {rtl
                  ? "يتزامن تلقائيًا عبر جميع أجهزتك. يمكنك أيضًا الوصول إلى الملاحظات وكتابتها بدون اتصال بالإنترنت"
                  : "Automatically syncs across all your devices. You can also access and write notes without internet connection."}
              </p>
              <div className="faq style-3 style-4">
                <div className="accordion" id="accordionExample">
                  {accordions.map((accordion, index) => (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id={`heading${accordion.id}`}
                      >
                        <button
                          className={`accordion-button ${
                            index !== 0 ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${accordion.id}`}
                          aria-expanded={index === 0 ? "true" : "false"}
                          aria-controls={`collapse${accordion.id}`}
                          onClick={() => handleArrowClick(accordion.id)}
                        >
                          {accordion.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${accordion.id}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${accordion.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {accordion.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="img mb-30 mb-lg-0">
              <img src="/assets/img/about/2mobiles.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/about/about_s4_bubble2.png"
        alt=""
        className="bubble2"
      />
    </div>
  );
};

export default SecondContent;
