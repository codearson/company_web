import React, { useState, useEffect } from 'react';
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
  const [infoMsg, setInfoMsg] = useState(rtl ? 'الحقل اللذى يحتوى على هذة العلامة اجبارى *' : 'The field is required mark as *');

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
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "4a76be3f-5e0f-48d5-bc93-1df3616229af");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
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
        setInfoMsg(rtl ? "تم ارسال رسالتك بنجاح!" : "Your message has been sent successfully!");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        error: error.message
      });
    }
  };

  useEffect(() => {
    let timer;
    if (status.submitted) {
      timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
        setInfoMsg(rtl ? 'الحقل اللذى يحتوى على هذة العلامة اجبارى *' : 'The field is required mark as *');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [status.submitted]);

  // Add this style for animation
  const successMsgStyle = {
    background: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
    color: '#155724',
    border: 'none',
    borderRadius: '12px',
    padding: '22px 30px',
    marginTop: '28px',
    fontSize: '1.25rem',
    textAlign: 'center',
    boxShadow: '0 4px 24px rgba(67, 233, 123, 0.15)',
    fontWeight: 600,
    letterSpacing: '0.5px',
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)'
  };
  const successMsgHiddenStyle = {
    ...successMsgStyle,
    opacity: 0,
    transform: 'translateY(-20px)'
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
                <p className="text-center text-danger fs-12px mb-30">{infoMsg}</p>
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
        <div style={status.submitted ? successMsgStyle : successMsgHiddenStyle}>
          <svg style={{verticalAlign: 'middle', marginRight: 12}} width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M7 13.5L10.5 17L17 10.5" stroke="#43e97b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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