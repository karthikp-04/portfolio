import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
    const { skills, skillCategories: customCategories } = portfolioData;

    const categories = customCategories || [
        { title: 'Languages', items: skills.languages, icon: '💻' },
        { title: 'Frameworks & Libraries', items: skills.frameworks, icon: '⚛️' },
        { title: 'Tools & Platforms', items: skills.tools, icon: '🛠️' },
        { title: 'Other Skills', items: skills.other, icon: '🎯' },
    ];

    return (
        <section id="skills" className="skills section section-alt">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Expertise</span>
                    <h2 className="section-title">Technical Skills & Technologies</h2>
                    <p className="section-subtitle">
                        Core capabilities spanning big data systems, full-stack backend development, and machine learning
                    </p>
                </div>

                <div className="skills-grid">
                    {categories.map((category, index) => (
                        category.items && category.items.length > 0 && (
                            <div key={index} className="skill-category card">
                                <div className="skill-category-header">
                                    <div className="skill-icon-wrap">
                                        <span className="skill-icon">{category.icon}</span>
                                    </div>
                                    <div>
                                        <h3>{category.title}</h3>
                                        <span className="skill-count">{category.items.length} skills</span>
                                    </div>
                                </div>
                                <div className="skill-tags">
                                    {category.items.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
