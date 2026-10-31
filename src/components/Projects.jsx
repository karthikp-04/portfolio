import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
    const { projects, personal } = portfolioData;

    const getProjectIcon = (techStack = [], title = '') => {
        if (title.includes('LeadGraph') || techStack.includes('LangGraph') || techStack.includes('RAG')) return '🤖';
        if (title.includes('Satellite') || techStack.includes('U-Net') || techStack.includes('Computer Vision')) return '🛰️';
        if (techStack.some(t => t.includes('Spring') || t.includes('Prescription') || title.includes('Prescription'))) return '🛡️';
        if (techStack.some(t => t.includes('Stock') || title.includes('Stock'))) return '📈';
        if (techStack.some(t => t.includes('Weather') || title.includes('Weather'))) return '🌤️';
        if (techStack.some(t => t.includes('LSTM') || title.includes('MARINA'))) return '🚗';
        return '💻';
    };

    const getBadgeClass = (type = '') => {
        const lower = type.toLowerCase();
        if (lower.includes('individual')) return 'badge-individual';
        if (lower.includes('group')) return 'badge-group';
        if (lower.includes('deep learning') || lower.includes('ai')) return 'badge-ai';
        if (lower.includes('academic')) return 'badge-academic';
        return 'badge-individual';
    };

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Real-world software, AI agent systems, computer vision models, and full-stack platforms
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => {
                        const hasImage = Boolean(project.image);
                        return (
                            <div key={index} className="project-card card">
                                <div className="project-image">
                                    {hasImage ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                if (e.target.nextElementSibling) {
                                                    e.target.nextElementSibling.style.display = 'flex';
                                                }
                                            }}
                                        />
                                    ) : null}
                                    <div
                                        className="project-image-placeholder"
                                        style={{ display: hasImage ? 'none' : 'flex' }}
                                    >
                                        <span className="placeholder-emoji">{getProjectIcon(project.techStack, project.title)}</span>
                                        <span className="placeholder-title">{project.title}</span>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <div className="project-meta">
                                        {project.type && (
                                            <span className={`project-type-badge ${getBadgeClass(project.type)}`}>
                                                {project.type}
                                            </span>
                                        )}
                                    </div>

                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>

                                    <div className="project-tech">
                                        {project.techStack.map((tech, techIndex) => (
                                            <span key={techIndex} className="tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                                Source Code
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link project-link-live"
                                            >
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="projects-github-cta card">
                    <div className="github-cta-content">
                        <div className="github-cta-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </div>
                        <div className="github-cta-text">
                            <h4>Explore More Repositories on GitHub</h4>
                            <p>Browse codebases, algorithmic research, deep learning experiments, and live repositories.</p>
                        </div>
                    </div>
                    <a
                        href={personal.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline github-cta-btn"
                    >
                        <span>github.com/karthikp-04</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
