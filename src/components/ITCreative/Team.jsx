import React from 'react';
import teamMembers from '../../data/ITCreative/team.json'

const Team = () => {
  return (
    <section className="team section-padding style-6">
      <div className="content">
        <div className="container">
          <div className="section-head text-center style-4 mb-60">
            <small className="title_small">The Team Work</small>
            <h2 className="mb-20">Our <span>Leaders</span> </h2>
            <p>The Professional Creative Team for Growth-up Works</p>
          </div>
          <div className="row">
            {
              teamMembers.map((member, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className={`team-card ${index !== teamMembers.length - 1 ? 'mb-30 mb-lg-0':''} style-6`}>
                    <div className="img img-cover">
                      <img src={member.picture} alt="" />
                      <div className="social-icons">
                        <a href={`https://twitter.com/${member.social?.twitter || ''}`} className="me-1" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`https://facebook.com/${member.social?.facebook || ''}`} className="me-1" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href={`https://linkedin.com/in/${member.social?.linkedin || ''}`} className="me-1" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href={`https://github.com/${member.social?.github || ''}`} target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                    <div className="info">
                      <button className="btn btn-link p-0 text-decoration-none" onClick={() => window.location.href = `/team/${member.id}`}>
                        <h6>{ member.name }</h6>
                      </button>
                      <small>{ member.position }</small>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team