import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'characters', label: 'CHARACTERS' },
    { id: 'relationships', label: 'RELATIONSHIPS' },
    { id: 'events', label: 'EVENTS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'news', label: 'NEWS' },
    { id: 'order', label: 'ORDER' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold tracking-wider text-red-600 hover:text-red-500 transition-colors"
          >
            STRAIGHT LINE
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  currentPage === item.id
                    ? 'text-red-600'
                    : 'text-gray-300 hover:text-red-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 hover:text-red-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-red-900/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 text-sm font-medium tracking-wide transition-colors ${
                  currentPage === item.id
                    ? 'text-red-600 bg-red-950/20'
                    : 'text-gray-300 hover:text-red-500 hover:bg-red-950/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
