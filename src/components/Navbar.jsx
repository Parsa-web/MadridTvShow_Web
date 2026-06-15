import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Navbar.css';

function Navbar({ darkMode, setDarkMode }) {
  const { t, toggleLang, locale } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.news', href: '#news' },
    { key: 'nav.transfers', href: '#transfers' },
    { key: 'nav.matches', href: '#matches' },
    { key: 'nav.videos', href: '#videos' },
    { key: 'nav.fanzone', href: '#fanzone' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Logo */}
        <div className="navbar-logo">
          <img 
            src="/logo.jpg" 
            alt="Madrid TV Show" 
            className="logo-image"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-links desktop-only">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link">
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          <div className="search-container desktop-only">
            <input 
              type="text" 
              placeholder={t('nav.search')}
              className="search-input"
            />
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </div>

          <button
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {locale === 'en' ? 'FA' : 'EN'}
          </button>

          <button 
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
