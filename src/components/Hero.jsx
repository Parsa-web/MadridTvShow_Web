import './Hero.css';
import heroBg from '../assets/hero/s.jpg';
import { useLanguage } from '../i18n/LanguageContext';

function Hero() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="home">
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="hero-title">{t('hero.title1')}<br />{t('hero.title2')}</h1>
          <p className="hero-subtitle">
            {t('hero.sub1')}<br />{t('hero.sub2')}
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">{t('hero.latest')}</button>
            <button className="btn btn-secondary">{t('hero.highlights')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
