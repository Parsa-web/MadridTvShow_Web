import { useLanguage } from '../i18n/LanguageContext';
import './LeagueTable.css';

function LeagueTable() {
  const { t } = useLanguage();
  const standings = [
    { pos: 1, team: 'Real Madrid', played: 28, points: 84, gd: 32, highlighted: true },
    { pos: 2, team: 'Barcelona', played: 28, points: 78, gd: 28 },
    { pos: 3, team: 'Atletico Madrid', played: 28, points: 72, gd: 18 },
    { pos: 4, team: 'Sevilla', played: 28, points: 65, gd: 12 },
    { pos: 5, team: 'Valencia', played: 28, points: 62, gd: 8 },
    { pos: 6, team: 'Real Sociedad', played: 28, points: 58, gd: 5 },
    { pos: 7, team: 'Villarreal', played: 28, points: 55, gd: 2 },
    { pos: 8, team: 'Girona', played: 28, points: 52, gd: -3 },
  ];

  return (
    <section className="league-table section" id="table">
      <div className="container">
        <h2 className="section-title">{t('league.title')}</h2>
        
        <div className="table-wrapper">
          <table className="standings-table">
            <thead>
              <tr>
                <th className="col-pos">{t('league.pos')}</th>
                <th className="col-team">{t('league.team')}</th>
                <th className="col-played">{t('league.p')}</th>
                <th className="col-points">{t('league.pts')}</th>
                <th className="col-gd">{t('league.gd')}</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((row, index) => (
                <tr 
                  key={index} 
                  className={`table-row ${row.highlighted ? 'highlighted' : ''}`}
                >
                  <td className="col-pos">
                    <span className="position-badge">{row.pos}</span>
                  </td>
                  <td className="col-team">
                    <span className="team-name">{row.team}</span>
                  </td>
                  <td className="col-played">{row.played}</td>
                  <td className="col-points">
                    <span className="points-badge">{row.points}</span>
                  </td>
                  <td className="col-gd">
                    <span className={`gd-value ${row.gd > 0 ? 'positive' : ''}`}>
                      {row.gd > 0 ? '+' : ''}{row.gd}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default LeagueTable;
