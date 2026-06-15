import './NewsGrid.css';
import { useLanguage } from '../i18n/LanguageContext';
import judeImg from '../assets/news/jude.jpeg';
import florentinoImg from '../assets/news/felorentino.jfif';
import santiagoImg from '../assets/news/santiago.webp';
import transferImg from '../assets/news/transfer.webp';
import clubImg from '../assets/news/Club Restructuring Continues After Trophyless Season.jpg';
import castillaImg from '../assets/news/Real Madrid Castilla Eliminated From Promotion Playoffs.jfif';

function NewsGrid() {
  const { t } = useLanguage();
  const newsItems = [
    {
      id: 1,
      titleKey: 'news.title1',
      excerptKey: 'news.excerpt1',
      category: t('news.cat6'),
      image: `url(${santiagoImg}) center/contain no-repeat`,
      backgroundBlur: `url(${santiagoImg}) center/cover no-repeat`,
      featured: true,
    },
    {
      id: 2,
      titleKey: 'news.title2',
      excerptKey: 'news.excerpt2',
      category: t('news.cat2'),
      image: `url(${judeImg}) center/contain no-repeat`,
      backgroundBlur: `url(${judeImg}) center/cover no-repeat`,
    },
    {
      id: 3,
      titleKey: 'news.title3',
      excerptKey: 'news.excerpt3',
      category: t('news.cat2'),
      image: `url(${transferImg}) center/contain no-repeat`,
      backgroundBlur: `url(${transferImg}) center/cover no-repeat`,
    },
    {
      id: 4,
      titleKey: 'news.title4',
      excerptKey: 'news.excerpt4',
      category: t('news.cat6'),
      image: `url(${clubImg}) center/contain no-repeat`,
      backgroundBlur: `url(${clubImg}) center/cover no-repeat`,
    },
    {
      id: 5,
      titleKey: 'news.title5',
      excerptKey: 'news.excerpt5',
      category: t('news.cat6'),
      image: `url(${florentinoImg}) center/contain no-repeat`,
      backgroundBlur: `url(${florentinoImg}) center/cover no-repeat`,
    },
    {
      id: 6,
      titleKey: 'news.title6',
      excerptKey: 'news.excerpt6',
      category: t('news.cat6'),
      image: `url(${castillaImg}) center/contain no-repeat`,
      backgroundBlur: `url(${castillaImg}) center/cover no-repeat`,
    },
  ];

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <section className="news-grid section" id="latest-news">
      <div className="container">
        <h2 className="section-title">{t('news.title')}</h2>
        
        <div className="news-grid-layout">
          {/* Featured Article */}
          {featuredNews && (
            <article className="news-card featured-news-card">
              {featuredNews.backgroundBlur ? (
                <div className="news-image-wrapper">
                  <div className="news-image-blur" style={{ background: featuredNews.backgroundBlur }}></div>
                  <div className="news-image-main" style={{ background: featuredNews.image }}></div>
                </div>
              ) : (
                <div className="news-image" style={{ background: featuredNews.image }}></div>
              )}
              <div className="news-content">
                <span className="news-category featured-category">{featuredNews.category}</span>
                <h3 className="news-title">{t(featuredNews.titleKey)}</h3>
                <p className="news-excerpt">{t(featuredNews.excerptKey)}</p>
                <a href="#" className="read-more">{t('news.readMore')}</a>
              </div>
            </article>
          )}
          
          {/* Regular News Cards */}
          {regularNews.map((news) => (
            <article key={news.id} className="news-card">
              {news.backgroundBlur ? (
                <div className="news-image-wrapper">
                  <div className="news-image-blur" style={{ background: news.backgroundBlur }}></div>
                  <div className="news-image-main" style={{ background: news.image }}></div>
                </div>
              ) : (
                <div className="news-image" style={{ background: news.image }}></div>
              )}
              <div className="news-content">
                <span className="news-category">{news.category}</span>
                <h3 className="news-title">{t(news.titleKey)}</h3>
                <p className="news-excerpt">{t(news.excerptKey)}</p>
                <a href="#" className="read-more">{t('news.readMore')}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsGrid;
