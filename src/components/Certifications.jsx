import { portfolioData } from '../data/portfolioData';
import './Certifications.css';

const Certifications = () => {
    const { certifications } = portfolioData;

    if (!certifications || certifications.length === 0) {
        return null;
    }

    return (
        <section id="certifications" className="certifications section section-alt">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <p className="section-subtitle">Professional certifications and courses I've completed</p>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card card">
                            <div className="cert-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="28" height="28">
                                    <circle cx="12" cy="8" r="6"></circle>
                                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"></path>
                                </svg>
                            </div>
                            <div className="cert-content">
                                <h3>{cert.name}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <p className="cert-date">{cert.date}</p>
                                {cert.credentialLink && (
                                    <a
                                        href={cert.credentialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-link"
                                    >
                                        View Credential →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
