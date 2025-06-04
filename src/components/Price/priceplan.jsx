import React from "react";
import pricingData from "../../data/PricePlan/pricePlanData.json";
import "D:/codearson/compnay_website/company_web/src/styles/pricePlan.css";
const PricePlan = () => {
  return (
    <section id="pricing-1" className="pricing-1 md:py-24 py-12">
      <div className="container">
        {/* TITLE START */}
        <div className="text-center max-w-3xl mx-auto mb-10 ">
          <h2 className="md:text-5xl text-3xl font-semibold dark:text-dark">
            Discover Your Capabilities
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 md:text-lg mb-4">
            Choose from Our Flexible Plans for a Personalized Journey. Embrace a
            Spectrum of Opportunities to Elevate Your Path to Success.
          </p>
        </div>
        {/* TITLE END */}

        {/* PRICING LIST START */}
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {pricingData.map((plan, index) => (
            <li className="contents" key={index}>
              <div
                className={`flex flex-col p-6 rounded-lg shadow-md xl:p-8 relative  ${
                  plan.recommended
                    ? "text-dark "
                    : "text-gray-900 bg-gray-50 border border-gray-300 "
                }`}
                style={
                  plan.recommended
                    ? {
                        background:
                          "linear-gradient(to bottom, #8169f1, #ffffff)",
                      }
                    : {}
                }
              >
                {/* Recommended Ribbon */}
                {plan.recommended && (
                  <div className="ribbon absolute -top-2 -right-2 h-40 w-40 overflow-hidden before:absolute before:top-0 before:left-0 before:border-4 rounded-md">
                    <div className="absolute -right-14 top-[43px] w-60 rotate-45 bg-black py-2.5 text-center text-white shadow-md">
                      Recommended
                    </div>
                  </div>
                )}

                <h3 className="mb-4 text-2xl font-semibold mt-2">
                  {plan.title}
                </h3>
                <p className="font-light  sm:text-lg  max-w-[90%] mt-1 mb-2">
                  {plan.description}
                </p>

                <div className="my-8 flex items-center">
                  <span className="mr-2 text-5xl font-extrabold dark:text-dark">
                    {plan.price}
                  </span>
                  <span>/month</span>
                </div>

                <ul className="mb-8 space-y-4 text-left mt-3">
                  {plan.features.map((feature, i) => (
                    <li className="flex items-center space-x-3 mt-2" key={i}>
                      <span className="text-xl dark:text-dark my-1 mx-2">
                        <i className="fa-solid fa-check"></i>
                      </span>
                      <span> {feature} </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://e-com-fe-web.netlify.app/"
                  className={`text-xl font-semibold rounded-lg px-5 py-3 text-center mt-auto transition-all duration-500 ${
                    plan.recommended ? "btn-getStarted" : " btn-getStarted"
                  }`}
                >
                  Get started
                </a>
              </div>
            </li>
          ))}
        </ul>
        {/* PRICING LIST END */}
      </div>
    </section>
  );
};

export default PricePlan;
