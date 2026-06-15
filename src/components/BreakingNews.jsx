import './BreakingNews.css';
import { useLanguage } from '../i18n/LanguageContext';
import marcImg from '../assets/news/marc.jfif';
import juseImg from '../assets/news/juse.webp';
import trainingImg from '../assets/news/training.jpg';
import jose2Img from '../assets/news/jose2.jpg';
import vitinhaImg from '../assets/news/vitinha.jpg';

function BreakingNews() {
  const { t } = useLanguage();
  const breakingNews = [
    {
      id: 1,
      titleKey: 'breaking.title1',
      catKey: 'breaking.cat1',
      timeKey: 'breaking.time1h',
      image: `url(${marcImg}) center/contain no-repeat`,
      backgroundBlur: `url(${marcImg}) center/cover no-repeat`,
    },
    {
      id: 2,
      titleKey: 'breaking.title2',
      catKey: 'breaking.cat2',
      timeKey: 'breaking.time4d',
      image: `url(${juseImg}) center/contain no-repeat`,
      backgroundBlur: `url(${juseImg}) center/cover no-repeat`,
    },
    {
      id: 3,
      titleKey: 'breaking.title3',
      catKey: 'breaking.cat2',
      timeKey: 'breaking.time4d',
      image: `url(${jose2Img}) center/contain no-repeat`,
      backgroundBlur: `url(${jose2Img}) center/cover no-repeat`,
    },
    {
      id: 4,
      titleKey: 'breaking.title4',
      catKey: 'breaking.cat1',
      timeKey: 'breaking.time5d',
      image: `url(${vitinhaImg}) center/contain no-repeat`,
      backgroundBlur: `url(${vitinhaImg}) center/cover no-repeat`,
    },
    {
      id: 5,
      titleKey: 'breaking.title5',
      catKey: 'breaking.cat2',
      timeKey: 'breaking.time5d',
      image: `url(${trainingImg}) center/contain no-repeat`,
      backgroundBlur: `url(${trainingImg}) center/cover no-repeat`,
    },
  ];

  return (
    <section className="breaking-news section" id="news">
      <div className="container">
        <h2 className="section-title">{t('breaking.title')}</h2>
        
        <div className="breaking-news-scroll">
          {breakingNews.map((news) => (
            <div key={news.id} className="breaking-card">
              {news.backgroundBlur ? (
                <div className="breaking-image-wrapper">
                  <div className="breaking-image-blur" style={{ background: news.backgroundBlur }}></div>
                  <div className="breaking-image-main" style={{ background: news.image }}></div>
                </div>
              ) : (
                <div className="breaking-image" style={{ background: news.image }}></div>
              )}
              <div className="breaking-content">
                <span className="breaking-category">{t(news.catKey)}</span>
                <h3 className="breaking-title">{t(news.titleKey)}</h3>
                <span className="breaking-time">{t(news.timeKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BreakingNews;
