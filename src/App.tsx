import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CharactersPage from './components/CharactersPage';
import EventsPage from './components/EventsPage';
import GalleryPage from './components/GalleryPage';
import OrderPage from './components/OrderPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'characters':
        return <CharactersPage />;
      case 'events':
        return <EventsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'order':
        return <OrderPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
