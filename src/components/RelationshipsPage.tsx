import { useState, useEffect } from 'react';
import { Heart, Loader, Users } from 'lucide-react';
import type { Relationship, Character } from '../types';

export default function RelationshipsPage() {
  const [relationships, setRelationships] = useState<Relationship[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    Promise.all([
      fetch('https://script.google.com/macros/s/AKfycbz5x5Obkj1dSNsR_CdBkNn_kYzhV3RTpPEekA-eShzUwDIabY2LCwx6otDBTOVNVQnx/exec').then(res => res.json()),
      fetch('https://script.google.com/macros/s/AKfycbxm0oHQ6B6nCJePNelR1YR-eenX8p3BOsbwEfbImjay66DsK0uvtp5rkj6FOUNnk3PI3A/exec').then(res => res.json())
    ])
      .then(([relationshipsData, charactersData]) => {
        setRelationships(relationshipsData);
        setCharacters(charactersData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const getCharacterName = (id: number) => {
    const character = characters.find(c => c.character_id === id);
    return character ? character.full_name : 'Unknown';
  };

  const getCharacterImage = (id: number) => {
    const character = characters.find(c => c.character_id === id);
    return character?.image || '';
  };

  const relationshipTypes = [
    'all',
    'Menikah',
    'Pacar',
    'Poliamori',
    'Anak',
    'Musuh',
    'Rival'
  ];

  const filteredRelationships = selectedType === 'all'
    ? relationships
    : relationships.filter(r => r.relationship_type.includes(selectedType));

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
          RELATIONSHIPS
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Complex connections in STRAIGHT LINE
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {relationshipTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 font-bold tracking-wide transition-all ${
                selectedType === type
                  ? 'bg-red-700 text-white'
                  : 'bg-black/50 text-red-500 border border-red-900/50 hover:border-red-600'
              }`}
            >
              {type === 'all' ? 'ALL' : type.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredRelationships.map((relationship) => (
            <div
              key={relationship.relationship_id}
              className="bg-black/50 border border-red-900/30 p-6 hover:border-red-600 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-red-950/20 to-black border-2 border-red-900/50">
                    {getCharacterImage(relationship.character1_id) ? (
                      <img
                        src={getCharacterImage(relationship.character1_id)}
                        alt={getCharacterName(relationship.character1_id)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users size={24} className="text-red-900" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm">
                      {getCharacterName(relationship.character1_id)}
                    </p>
                  </div>
                </div>

                <Heart className="text-red-600 flex-shrink-0" size={24} fill="currentColor" />

                <div className="flex items-center gap-3 flex-1">
                  <div className="flex-1 text-right">
                    <p className="font-bold text-white text-sm">
                      {getCharacterName(relationship.character2_id)}
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-red-950/20 to-black border-2 border-red-900/50">
                    {getCharacterImage(relationship.character2_id) ? (
                      <img
                        src={getCharacterImage(relationship.character2_id)}
                        alt={getCharacterName(relationship.character2_id)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users size={24} className="text-red-900" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center mb-3">
                <span className="inline-block px-4 py-1 bg-red-950/50 border border-red-900/50 text-red-500 text-sm font-bold">
                  {relationship.relationship_type}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed text-center">
                {relationship.status_description}
              </p>
            </div>
          ))}
        </div>

        {filteredRelationships.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No relationships found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
