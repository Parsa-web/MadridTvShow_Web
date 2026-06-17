import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';
import logoSrcDark from '../assets/logo1.png';
import logoSrcLight from '../assets/logo2.png';

function Footer({ darkMode }) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('footer.club'),
      links: [
        { label: t('footer.club1'), href: '#' },
        { label: t('footer.club2'), href: '#' },
        { label: t('footer.club3'), href: '#' },
        { label: t('footer.club4'), href: '#' },
      ],
    },
    {
      title: t('footer.matches'),
      links: [
        { label: t('footer.matches1'), href: '#' },
        { label: t('footer.matches2'), href: '#' },
        { label: t('footer.matches3'), href: '#' },
        { label: t('footer.matches4'), href: '#' },
      ],
    },
    {
      title: t('footer.media'),
      links: [
        { label: t('footer.media1'), href: '#' },
        { label: t('footer.media2'), href: '#' },
        { label: t('footer.media3'), href: '#' },
        { label: t('footer.media4'), href: '#' },
      ],
    },
    {
      title: t('footer.more'),
      links: [
        { label: t('footer.more1'), href: '#' },
        { label: t('footer.more2'), href: '#' },
        { label: t('footer.more3'), href: '#' },
        { label: t('footer.more4'), href: '#' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content container">
        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>{t('footer.title')}</h3>
          <p>{t('footer.text')}</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder={t('footer.placeholder')} 
              className="newsletter-input"
            />
            <button className="btn btn-primary">{t('footer.subscribe')}</button>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="footer-links-grid">
          {footerSections.map((section, index) => (
            <div key={index} className="footer-section">
              <h4 className="footer-section-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo Watermark */}
        <div className="footer-logo-section">
          <img 
            src={darkMode ? logoSrcDark : logoSrcLight} 
            alt="Madridista TV" 
            className="footer-logo"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
