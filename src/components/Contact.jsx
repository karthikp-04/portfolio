import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
    const { personal } = portfolioData;

    return (
        <section id="contact" className="contact section section-alt">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    I'm always open to discussing new opportunities, projects, or just a friendly chat
                </p>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href={`mailto:${personal.email}`}>{personal.email}</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>{personal.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-cta">
                        <p>Let's create something amazing together!</p>
                        <a href={`mailto:${personal.email}`} className="btn btn-primary btn-lg">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                            Send Message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
