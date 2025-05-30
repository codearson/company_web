import React, { useState } from 'react';
import axios from 'axios';
import contactInfo from '../../data/Contact/form.json';
import contactInfoRTL from '../../data/Contact/form-rtl.json';

const Form = ({ style = "4", rtl }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const contactInfoData = rtl ? contactInfoRTL : contactInfo;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Replace with your actual API endpoint
      await axios.post('/api/contact', formData);
      setStatus({
        submitted: true,
        submitting: false,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: error.message
      });
    }
  };

  return (
    <section className={`contact section-padding pt-${style === '4' ? '0':'50'} style-6`}>
      {
        style === '5' && (
          <>
            <div className="section-head text-center mb-100 style-5">
              <h2 className="mb-20">{ rtl ? 'يسعدنا' : 'Get In' } <span>{ rtl ? 'تواصلك' : 'Touch' }</span> { rtl && 'معنا' }</h2>
              <p>{ rtl ? 'سنتواصل معك مرة أخرى بعد استلام طلبك خلال 24 ساعة' : 'We will contact again after receive your request in 24h' }</p>
            </div>
            <div className="text-center mb-100">
              <h2 className="ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5">{ contactInfoData.phone }</h2>
              <h4 className="fw-normal mb-20 color-000">{ contactInfoData.email }</h4>
              <h4 className="fw-normal mb-10 color-000">{ contactInfoData.address }</h4>
            </div>
          </>
        )
      }
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="form">
                <p className="text-center text-danger fs-12px mb-30">{ rtl ? 'الحقل اللذى يحتوى على هذة العلامة اجبارى *' : 'The field is required mark as *' }</p>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder={rtl ? "الاسم الكامل" : "Full Name"} 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-4">
                      <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder={rtl ? "البريد الالكتروني" : "Email Address"} 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-4">
                      <input 
                        type="text" 
                        name="subject" 
                        className="form-control" 
                        placeholder={rtl ? "الموضوع" : "Subject"} 
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-4">
                      <textarea 
                        name="message" 
                        className="form-control" 
                        placeholder={rtl ? "رسالتك" : "Your Message"} 
                        value={formData.message}
                        onChange={handleChange}
                        required 
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button 
                      type="submit" 
                      className={`btn bg-blue${style} text-white hover-darkBlue`}
                      disabled={status.submitting}
                    >
                      {status.submitting ? (
                        rtl ? "جاري الارسال..." : "Sending..."
                      ) : (
                        rtl ? "ارسال الرسالة" : "Send Message"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <img src="/assets/img/icons/contact_a.png" alt="" className="contact_a" />
          <img src="/assets/img/icons/contact_message.png" alt="" className="contact_message" />
        </div>
      </div>
      {status.submitted && (
        <div className="alert alert-success mt-4">
          {rtl ? "تم ارسال رسالتك بنجاح!" : "Your message has been sent successfully!"}
        </div>
      )}
      {status.error && (
        <div className="alert alert-danger mt-4">
          {rtl ? "حدث خطأ أثناء ارسال الرسالة" : "An error occurred while sending your message"}
        </div>
      )}
    </section>
  )
}

export default Form