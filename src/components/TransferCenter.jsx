import './TransferCenter.css';
import { useLanguage } from '../i18n/LanguageContext';

function TransferCenter() {
  const { t } = useLanguage();
  const incomingTransfers = [
    {
      id: 1,
      name: 'Marc Cucurella',
      clubs: 'Chelsea → Real Madrid',
      probability: 100,
      status: 'confirmed',
    },

    {
      id: 5,
      name: 'Ibrahima Konaté',
      clubs: 'Liverpool → Real Madrid',
      probability: 75,
      status: 'rumor',
    },
    {
      id: 6,
      name: 'Bernardo Silva',
      clubs: 'Manchester City → Real Madrid',
      probability: 70,
      status: 'rumor',
    },
    {
      id: 7,
      name: 'Denzel Dumfries',
      clubs: 'Inter Milan → Real Madrid',
      probability: 65,
      status: 'rumor',
    },

    {
      id: 9,
      name: 'Enzo Fernández',
      clubs: 'Chelsea → Real Madrid',
      probability: 55,
      status: 'rumor',
    },
  ];

  const outgoingTransfers = [
    {
      id: 1,
      name: 'Dani Carvajal',
      clubs: 'Real Madrid → Free',
      probability: 100,
      status: 'confirmed',
    },
    {
      id: 2,
      name: 'David Alaba',
      clubs: 'Real Madrid → Free',
      probability: 100,
      status: 'confirmed',
    },

    {
      id: 5,
      name: 'Dani Ceballos',
      clubs: 'Real Madrid → Real Betis',
      probability: 100,
      status: 'confirmed',
    },
  ];

  const TransferCard = ({ transfer }) => (
    <div className="transfer-card">
      <div className="transfer-header">
        <h4 className="transfer-name">{transfer.name}</h4>
        <span className={`transfer-status ${transfer.status}`}>
          {transfer.status === 'confirmed' ? t('transfer.completed') : t('transfer.rumored')}
        </span>
      </div>
      <p className="transfer-clubs">{transfer.clubs}</p>
      
      <div className="probability-container">
        <span className="probability-label">{t('transfer.probability')}</span>
        <div className="probability-bar">
          <div 
            className="probability-fill"
            style={{ width: `${transfer.probability}%` }}
          ></div>
        </div>
        <span className="probability-value">{transfer.probability}%</span>
      </div>
    </div>
  );

  return (
    <section className="transfer-center section" id="transfers">
      <div className="container">
        <h2 className="section-title">{t('transfer.title')}</h2>
        
        <div className="transfer-grid">
          {/* Incoming Transfers */}
          <div className="transfer-column">
            <h3 className="column-title">{t('transfer.incoming')}</h3>
            <div className="transfer-list">
              {incomingTransfers.map((transfer) => (
                <TransferCard key={transfer.id} transfer={transfer} />
              ))}
            </div>
          </div>
          
          {/* Outgoing Transfers */}
          <div className="transfer-column">
            <h3 className="column-title">{t('transfer.outgoing')}</h3>
            <div className="transfer-list">
              {outgoingTransfers.map((transfer) => (
                <TransferCard key={transfer.id} transfer={transfer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransferCenter;
