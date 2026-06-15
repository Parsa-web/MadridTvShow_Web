import { useLanguage } from '../i18n/LanguageContext';
import './PlayerSpotlight.css';
import viniImg from '../assets/players/vini.png';
import belinghamImg from '../assets/players/belingham.png';
import mbappeImg from '../assets/players/mbappe.png';

function PlayerSpotlight() {
  const { t } = useLanguage();
  const players = [
    {
      id: 1,
      name: 'Vinícius Jr.',
      posKey: 'player.pos.lw',
      number: 7,
      image: viniImg,
      stats: {
        goals: 28,
        assists: 12,
        matches: 42,
        rating: 8.9,
      },
      featured: true,
    },
    {
      id: 2,
      name: 'Jude Bellingham',
      posKey: 'player.pos.cm',
      number: 5,
      image: belinghamImg,
      stats: {
        goals: 15,
        assists: 8,
        matches: 38,
        rating: 8.5,
      },
    },
    {
      id: 3,
      name: 'Kylian Mbappé',
      posKey: 'player.pos.st',
      number: 9,
      image: mbappeImg,
      stats: {
        goals: 32,
        assists: 10,
        matches: 40,
        rating: 8.8,
      },
      featured: true,
    },
  ];

  return (
    <section className="player-spotlight section" id="players">
      <div className="container">
        <h2 className="section-title">{t('player.title')}</h2>
        
        <div className="players-grid">
          {players.map((player) => (
            <div 
              key={player.id} 
              className={`player-card ${player.featured ? 'featured' : ''}`}
            >
                {player.featured && <span className="featured-badge">{t('player.featured')}</span>}
              
              <div className="player-header">
                <div className="player-number">{player.number}</div>
                <img src={player.image} alt={player.name} className="player-avatar" />
              </div>
              
              <div className="player-info">
                <h3 className="player-name">{player.name}</h3>
                <p className="player-position">{t(player.posKey)}</p>
              </div>
              
              <div className="player-stats">
                <div className="stat">
                  <span className="stat-value">{player.stats.goals}</span>
                  <span className="stat-label">{t('player.goals')}</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{player.stats.assists}</span>
                  <span className="stat-label">{t('player.assists')}</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{player.stats.matches}</span>
                  <span className="stat-label">{t('player.matches')}</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{player.stats.rating}</span>
                  <span className="stat-label">{t('player.rating')}</span>
                </div>
              </div>
              
              {player.stats.rating >= 8.8 && player.name !== 'Kylian Mbappé' && (
                <div className="best-performer">
                  ⭐ {t('player.bestPerformer')}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlayerSpotlight;
