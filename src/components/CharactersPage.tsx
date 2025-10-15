import { useState, useEffect } from 'react';
import { User, Loader } from 'lucide-react';
import type { Character } from '../types';

export default function CharactersPage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxm0oHQ6B6nCJePNelR1YR-eenX8p3BOsbwEfbImjay66DsK0uvtp5rkj6FOUNnk3PI3A/exec')
      .then(res => res.json())
      .then(data => {
        setCharacters(data);
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
          CHARACTERS
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Meet the cast of STRAIGHT LINE
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {characters.map((character) => (
            <button
              key={character.character_id}
              onClick={() => setSelectedCharacter(character)}
              className="group relative bg-black/50 border border-red-900/30 overflow-hidden hover:border-red-600 transition-all transform hover:scale-105"
            >
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-red-950/20 to-black">
                {character.image ? (
                  <img
                    src={character.image}
                    alt={character.full_name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User size={64} className="text-red-900" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-bold text-white truncate">
                    {character.full_name}
                  </h3>
                  <p className="text-xs text-red-400 truncate">{character.primary_role}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCharacter && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCharacter(null)}
        >
          <div
            className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {selectedCharacter.image ? (
                <div className="w-full h-64 md:h-96 overflow-hidden">
                  <img
                    src={selectedCharacter.image}
                    alt={selectedCharacter.full_name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-red-950/20 to-black">
                  <User size={120} className="text-red-900" />
                </div>
              )}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setSelectedCharacter(null)}
                  className="w-10 h-10 bg-black/80 hover:bg-red-900 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                {selectedCharacter.full_name}
              </h2>
              {selectedCharacter.alias && (
                <p className="text-red-400 mb-4 text-lg">aka {selectedCharacter.alias}</p>
              )}

              <div className="space-y-4 text-gray-300">
                <div>
                  <span className="text-red-500 font-bold">Role: </span>
                  {selectedCharacter.primary_role}
                </div>
                <div>
                  <span className="text-red-500 font-bold">Affiliation: </span>
                  {selectedCharacter.affiliation}
                </div>
                {selectedCharacter.jgsdf_rank !== '-' && (
                  <div>
                    <span className="text-red-500 font-bold">Rank: </span>
                    {selectedCharacter.jgsdf_rank}
                  </div>
                )}
                {selectedCharacter.jgsdf_assignment !== '-' && (
                  <div>
                    <span className="text-red-500 font-bold">Assignment: </span>
                    {selectedCharacter.jgsdf_assignment}
                  </div>
                )}
                <div>
                  <span className="text-red-500 font-bold">Status: </span>
                  {selectedCharacter.final_status_summary}
                </div>
                {selectedCharacter.future_plans !== '-' && selectedCharacter.future_plans && (
                  <div>
                    <span className="text-red-500 font-bold">Future Plans: </span>
                    {selectedCharacter.future_plans}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
