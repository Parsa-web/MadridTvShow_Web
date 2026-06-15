import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './FanZone.css';

function FanZone() {
  const { t } = useLanguage();
  const [selectedPoll, setSelectedPoll] = useState(null);

  const poll = {
    question: t('fanzone.pollQuestion'),
    options: [
      { id: 1, text: 'Kylian Mbappé', votes: 45, percentage: 45 },
      { id: 2, text: 'Vinícius Jr.', votes: 35, percentage: 35 },
      { id: 3, text: 'Jude Bellingham', votes: 12, percentage: 12 },
      { id: 4, text: 'Rodrygo', votes: 8, percentage: 8 },
    ],
  };

  const comments = [
    {
      id: 1,
      authorKey: 'fanzone.author1',
      textKey: 'fanzone.comment1',
      reactions: [
        { emoji: '👍', count: 234 },
        { emoji: '❤️', count: 156 },
        { emoji: '🔥', count: 89 },
      ],
    },
    {
      id: 2,
      authorKey: 'fanzone.author2',
      textKey: 'fanzone.comment2',
      reactions: [
        { emoji: '👍', count: 189 },
        { emoji: '❤️', count: 203 },
        { emoji: '🔥', count: 112 },
      ],
    },
    {
      id: 3,
      authorKey: 'fanzone.author3',
      textKey: 'fanzone.comment3',
      reactions: [
        { emoji: '👍', count: 456 },
        { emoji: '❤️', count: 678 },
        { emoji: '🔥', count: 234 },
      ],
    },
  ];

  return (
    <section className="fan-zone section" id="gallery">
      <div className="container">
        <h2 className="section-title">{t('fanzone.title')}</h2>
        
        <div className="fan-zone-grid">
          {/* Poll Section */}
          <div className="fan-zone-column">
            <div className="poll-card">
              <h3 className="poll-title">{t('fanzone.poll')}</h3>
              
              <div className="poll-options">
                {poll.options.map((option) => (
                  <div 
                    key={option.id} 
                    className="poll-option"
                    onClick={() => setSelectedPoll(option.id)}
                  >
                    <div className="option-header">
                      <span className="option-text">{option.text}</span>
                      <span className="option-percentage">{option.percentage}%</span>
                    </div>
                    <div className="option-bar">
                      <div 
                        className="option-fill"
                        style={{ width: `${option.percentage}%` }}
                      ></div>
                    </div>
                    <span className="option-votes">{option.votes} {t('fanzone.votes')}</span>
                  </div>
                ))}
              </div>
              
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                {t('fanzone.voteNow')}
              </button>
            </div>
          </div>
          
          {/* Comments Section */}
          <div className="fan-zone-column">
            <div className="comments-section">
              <h3 className="comments-title">{t('fanzone.comments')}</h3>
              
              <div className="comments-list">
                {comments.map((comment) => (
                  <div key={comment.id} className="comment-card">
                    <div className="comment-header">
                      <div className="comment-avatar"></div>
                      <span className="comment-author">{t(comment.authorKey)}</span>
                    </div>
                    <p className="comment-text">{t(comment.textKey)}</p>
                    <div className="comment-reactions">
                      {comment.reactions.map((reaction, idx) => (
                        <button key={idx} className="reaction-button">
                          <span className="emoji">{reaction.emoji}</span>
                          <span className="count">{reaction.count}</span>
                        </button>
                      ))}
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

export default FanZone;
