import { useState, useEffect } from 'react';
import { User, Loader, X } from 'lucide-react';
import type { Character } from '../types';

export default function GalleryPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>('');

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxm0oHQ6B6nCJePNelR1YR-eenX8p3BOsbwEfbImjay66DsK0uvtp5rkj6FOUNnk3PI3A/exec')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.filter((c: Character) => c.image));
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Loader className="animate-spin text-red-600" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-red-600 tracking-wider">
          CHARACTER GALLERY
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Visual collection of STRAIGHT LINE characters
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((character) => (
            <button
              key={character.character_id}
              onClick={() => {
                setSelectedImage(character.image);
                setSelectedName(character.full_name);
              }}
              className="group relative aspect-square overflow-hidden bg-black/50 border border-red-900/30 hover:border-red-600 transition-all"
            >
              {character.image ? (
                <>
                  <img
                    src={character.image}
                    alt={character.full_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-bold text-white truncate">
                      {character.full_name}
                    </p>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User size={64} className="text-red-900" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-red-700 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt={selectedName}
              className="w-full h-auto max-h-[80vh] object-contain border-2 border-red-900"
            />
            <div className="text-center mt-4">
              <p className="text-2xl font-bold text-red-500">{selectedName}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
