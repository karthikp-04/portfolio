import { portfolioData } from '../data/portfolioData';
import './Skills.css';

const Skills = () => {
    const { skills } = portfolioData;

    const skillCategories = [
        { title: 'Languages', items: skills.languages, icon: '💻' },
        { title: 'Frameworks & Libraries', items: skills.frameworks, icon: '⚛️' },
        { title: 'Tools & Platforms', items: skills.tools, icon: '🛠️' },
        { title: 'Other Skills', items: skills.other, icon: '🎯' },
    ];

    return (
        <section id="skills" className="skills section section-alt">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">Technologies I work with and skills I've developed</p>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        category.items.length > 0 && (
                            <div key={index} className="skill-category card">
                                <div className="skill-category-header">
                                    <span className="skill-icon">{category.icon}</span>
                                    <h3>{category.title}</h3>
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
