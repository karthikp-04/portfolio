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
                <div className="section-header">
                    <span className="section-badge">Credentials</span>
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-subtitle">
                        Industry-recognized professional specializations and verified qualifications
                    </p>
                </div>

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
                                <div className="cert-meta-row">
                                    <span className="cert-issuer">{cert.issuer}</span>
                                    <span className="cert-dot">•</span>
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                                {cert.description && (
                                    <p className="cert-desc">{cert.description}</p>
                                )}
                                {cert.credentialLink && (
                                    <a
                                        href={cert.credentialLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cert-link"
                                    >
                                        <span>Verify Credential</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
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
