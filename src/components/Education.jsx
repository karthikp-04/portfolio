import { portfolioData } from '../data/portfolioData';
import './Education.css';

const Education = () => {
    const { education } = portfolioData;

    return (
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">My academic background and qualifications</p>

                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <div key={index} className="education-item">
                            <div className="education-marker">
                                <div className="marker-dot"></div>
                                {index !== education.length - 1 && <div className="marker-line"></div>}
                            </div>

                            <div className="education-card card">
                                <div className="edu-header">
                                    <h3>{edu.institution}</h3>
                                    <span className="edu-duration">{edu.duration}</span>
                                </div>
                                <p className="edu-degree">{edu.degree}</p>
                                <p className="edu-location">{edu.location}</p>

                                {edu.gpa && (
                                    <p className="edu-gpa">
                                        <span>GPA:</span> {edu.gpa}
                                    </p>
                                )}

                                {edu.coursework && edu.coursework.length > 0 && (
                                    <div className="edu-coursework">
                                        <p className="coursework-label">Relevant Coursework:</p>
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
