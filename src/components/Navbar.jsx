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
                    {portfolioData.personal.name.split(' ')[0]}
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
                    <li>
                        <a
                            href={portfolioData.personal.resumeLink}
                            className="btn btn-primary navbar-resume-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
