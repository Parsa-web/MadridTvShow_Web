import './VideoSection.css';
import cucurellaVid from '../assets/videos/cucurella.jpg';
import mourinhoVid from '../assets/videos/mourinho.jpg';
import bernardoVid from '../assets/videos/bernardo.jpg';
import florentinoVid from '../assets/videos/florentino.jpg';
import julianVid from '../assets/videos/julian.jpg';
import bombshellVid from '../assets/videos/bombshell.jpg';
import { useLanguage } from '../i18n/LanguageContext';

function VideoSection() {
  const { t } = useLanguage();
  const videos = [
    {
      id: 1,
      title: t('video.1'),
      thumbnail: `url(${cucurellaVid}) center/cover no-repeat`,
      duration: '4:32',
      views: '892K',
    },
    {
      id: 2,
      title: t('video.2'),
      thumbnail: `url(${mourinhoVid}) center/cover no-repeat`,
      duration: '6:15',
      views: '1.4M',
    },
    {
      id: 3,
      title: t('video.3'),
      thumbnail: `url(${bernardoVid}) center/cover no-repeat`,
      duration: '5:48',
      views: '723K',
    },
    {
      id: 4,
      title: t('video.4'),
      thumbnail: `url(${florentinoVid}) center/cover no-repeat`,
      duration: '3:55',
      views: '512K',
    },
    {
      id: 5,
      title: t('video.5'),
      thumbnail: `url(${julianVid}) center/cover no-repeat`,
      duration: '7:20',
      views: '634K',
    },
    {
      id: 6,
      title: t('video.6'),
      thumbnail: `url(${bombshellVid}) center/cover no-repeat`,
      duration: '8:10',
      views: '2.1M',
    },
  ];

  return (
    <section className="video-section section" id="videos">
      <div className="container">
        <h2 className="section-title">{t('video.title')}</h2>
        
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail" style={{ background: video.thumbnail }}>
                <div className="play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
                <span className="video-duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-views">{video.views} {t('video.views')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
