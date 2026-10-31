import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-name">{portfolioData.personal.name}</span>
                    <span className="logo-slash">/&gt;</span>
                </a>

                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={handleNavClick}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="navbar-actions">
                        <a
                            href={portfolioData.personal.social.github}
                            className="navbar-icon-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            title="GitHub @karthikp-04"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            <span className="navbar-github-text">GitHub</span>
                        </a>
                        <a
                            href={portfolioData.personal.resumeLink}
                            className="btn btn-primary navbar-resume-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
