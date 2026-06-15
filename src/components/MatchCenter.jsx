import './MatchCenter.css';
import { useLanguage } from '../i18n/LanguageContext';
import realLogo from '../assets/logo/real madrid.png';
import cityLogo from '../assets/logo/manchester.png';

function MatchCenter() {
  const { t, locale } = useLanguage();
  const dateLocale = locale === 'fa' ? 'fa-IR' : 'en-US';

  const liveMatch = {
    homeTeam: 'Real Madrid',
    awayTeam: 'Manchester City',
    homeScore: 2,
    awayScore: 1,
    time: '90+2',
  };

  const upcomingMatches = [
    {
      id: 1,
      homeTeam: 'Real Madrid',
      awayTeam: 'Barcelona',
      date: '2026-06-20',
      time: '20:00',
      compKey: 'match.comp2',
    },
    {
      id: 2,
      homeTeam: 'Bayern Munich',
      awayTeam: 'Real Madrid',
      date: '2026-06-25',
      time: '19:30',
      compKey: 'match.comp1',
    },
    {
      id: 3,
      homeTeam: 'Real Madrid',
      awayTeam: 'Atletico Madrid',
      date: '2026-07-01',
      time: '21:00',
      compKey: 'match.comp2',
    },
  ];

  const recentResults = [
    {
      id: 1,
      homeTeam: 'Real Madrid',
      awayTeam: 'Sevilla',
      homeScore: 3,
      awayScore: 1,
      date: '2026-06-10',
    },
    {
      id: 2,
      homeTeam: 'Valencia',
      awayTeam: 'Real Madrid',
      homeScore: 0,
      awayScore: 2,
      date: '2026-06-05',
    },
    {
      id: 3,
      homeTeam: 'Real Madrid',
      awayTeam: 'Villarreal',
      homeScore: 4,
      awayScore: 0,
      date: '2026-05-30',
    },
  ];

  return (
    <section className="match-center section" id="matches">
      <div className="container">
        <h2 className="section-title">{t('match.title')}</h2>
        
        <div className="match-grid">
          <div className="live-match-section">
            <div className="live-card">
              <div className="live-card-top">
                <span className="live-competition">{t('match.competition')}</span>
                <span className="live-pill">
                  <span className="live-pill-dot"></span>
                  {t('match.live')}
                </span>
              </div>
              
              <div className="live-card-middle">
                <div className="live-team home-team">
                  <div className="live-badge">
                    <img src={realLogo} alt="Real Madrid" className="live-badge-img" />
                  </div>
                  <span className="live-team-name">{liveMatch.homeTeam}</span>
                </div>
                
                <div className="live-score">
                  <span className="live-score-num">{liveMatch.homeScore}</span>
                  <span className="live-score-colon">:</span>
                  <span className="live-score-num">{liveMatch.awayScore}</span>
                </div>
                
                <div className="live-team away-team">
                  <span className="live-team-name">{liveMatch.awayTeam}</span>
                  <div className="live-badge">
                    <img src={cityLogo} alt="Manchester City" className="live-badge-img" />
                  </div>
                </div>
              </div>
              
              <div className="live-card-bottom">
                <span className="live-minute">{liveMatch.time}'</span>
                <button className="live-watch-btn">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                  {t('match.watch')}
                </button>
              </div>
            </div>
          </div>
          
          <div className="matches-sidebar">
            <div className="matches-column">
              <h3 className="column-title">{t('match.upcoming')}</h3>
              <div className="matches-list">
                {upcomingMatches.map((match) => (
                  <div key={match.id} className="match-item">
                    <div className="match-info">
                      <span className="match-competition">{t(match.compKey)}</span>
                      <p className="match-teams-text">
                        {match.homeTeam}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14" style={{ opacity: 0.3, flexShrink: 0 }}>
                          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {match.awayTeam}
                      </p>
                      <span className="match-datetime">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="12" height="12" style={{ opacity: 0.4 }}>
                          <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                          <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {new Date(match.date).toLocaleDateString(dateLocale)} {t('match.at')} {match.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="matches-column">
              <h3 className="column-title">{t('match.recent')}</h3>
              <div className="matches-list">
                {recentResults.map((result) => (
                  <div key={result.id} className="match-item result-item">
                    <div className="match-info">
                      <p className="match-teams-text">
                        <span>{result.homeTeam}</span>
                        <span className="result-score">{result.homeScore} – {result.awayScore}</span>
                        <span>{result.awayTeam}</span>
                      </p>
                      <span className="match-date">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="12" height="12" style={{ opacity: 0.4 }}>
                          <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                          <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {new Date(result.date).toLocaleDateString(dateLocale)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchCenter;
