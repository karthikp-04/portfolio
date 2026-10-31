import { portfolioData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
    const { education } = portfolioData;

    return (
        <section id="education" className="education section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Academic</span>
                    <h2 className="section-title">Education & Qualifications</h2>
                    <p className="section-subtitle">Academic foundations and relevant coursework</p>
                </div>

                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <div key={index} className="education-item">
                            <div className="education-marker">
                                <div className="marker-dot"></div>
                                {index !== education.length - 1 && <div className="marker-line"></div>}
                            </div>

                            <div className="education-card card">
                                <div className="edu-header">
                                    <div>
                                        <h3>{edu.institution}</h3>
                                        <p className="edu-degree">{edu.degree}</p>
                                    </div>
                                    <span className="edu-duration">{edu.duration}</span>
                                </div>
                                
                                <div className="edu-details-row">
                                    <span className="edu-location">📍 {edu.location}</span>
                                    {edu.gpa && (
                                        <span className="edu-gpa-badge">
                                            Score: <strong>{edu.gpa}</strong>
                                        </span>
                                    )}
                                </div>

                                {edu.coursework && edu.coursework.length > 0 && (
                                    <div className="edu-coursework">
                                        <p className="coursework-label">Key Subjects & Focus Areas:</p>
                                        <div className="coursework-tags">
                                            {edu.coursework.map((course, courseIndex) => (
                                                <span key={courseIndex} className="tag">
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
