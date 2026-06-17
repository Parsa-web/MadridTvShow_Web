import { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BreakingNews from './components/BreakingNews';
import NewsGrid from './components/NewsGrid';
import TransferCenter from './components/TransferCenter';
import MatchCenter from './components/MatchCenter';
import VideoSection from './components/VideoSection';
import PlayerSpotlight from './components/PlayerSpotlight';
import LeagueTable from './components/LeagueTable';
import FanZone from './components/FanZone';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
    document.documentElement.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  return (
    <LanguageProvider>
      <div className="app">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="main-content">
          <Hero />
          <BreakingNews />
          <NewsGrid />
          <TransferCenter />
          <MatchCenter />
          <VideoSection />
          <PlayerSpotlight />
          <LeagueTable />
          <FanZone />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </LanguageProvider>
  );
}

export default App;
