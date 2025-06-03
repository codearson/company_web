import React from 'react';

const Map = () => {
  return (
    <div className="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.033713861267!2d80.00782700985854!3d9.669999243064623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!5e0!3m2!1sen!2slk!4v1748882667761!5m2!1sen!2slk" 
        width="800"
        height="600" 
        style={{ border: 0 }} 
        allowFullScreen=""
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location Map"
      ></iframe>
    </div>
  )
}

export default Map