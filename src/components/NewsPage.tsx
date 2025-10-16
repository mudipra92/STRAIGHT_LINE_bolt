import { Newspaper, Calendar } from 'lucide-react';

export default function NewsPage() {
  const news = [
    {
      id: 1,
      date: '2025-10-15',
      title: 'STRAIGHT LINE Development Enters Final Phase',
      category: 'Development',
      excerpt: 'The revolutionary music industry game STRAIGHT LINE has entered its final development phase. Lead developer announced that the game is on track for its planned release, with all major systems now fully implemented and undergoing final polish.',
      image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 2,
      date: '2025-10-10',
      title: 'Character Voice Cast Revealed',
      category: 'Announcement',
      excerpt: 'LIMI Entertainment has officially announced the full voice cast for STRAIGHT LINE. The cast features acclaimed voice actors bringing life to all 24+ characters, with special attention to authentic emotional performances that match the game\'s complex narrative.',
      image: 'https://images.pexels.com/photos/7686298/pexels-photo-7686298.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 3,
      date: '2025-10-05',
      title: 'New Gameplay Trailer Drops',
      category: 'Media',
      excerpt: 'A stunning new gameplay trailer showcasing STRAIGHT LINE\'s revolutionary music production mechanics and relationship systems has been released. The trailer highlights the game\'s unique blend of narrative storytelling and interactive music creation.',
      image: 'https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 4,
      date: '2025-09-28',
      title: 'Pre-Order Campaign Launches',
      category: 'Sales',
      excerpt: 'Pre-orders for STRAIGHT LINE are now officially open! Three editions available: Standard, Deluxe, and Collector\'s Edition. Early adopters will receive exclusive in-game content and behind-the-scenes development materials.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 5,
      date: '2025-09-20',
      title: 'Original Soundtrack Preview Released',
      category: 'Music',
      excerpt: 'The first preview of STRAIGHT LINE\'s original soundtrack has been released, featuring tracks that blend J-pop, electronic, and orchestral elements. The music aims to capture the emotional depth and intensity of the game\'s narrative.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 6,
      date: '2025-09-12',
      title: 'Behind the Scenes: Character Design Process',
      category: 'Development',
      excerpt: 'A detailed look at the character design process for STRAIGHT LINE reveals the extensive research and iteration that went into creating each character. The team consulted with industry professionals to ensure authentic representation.',
      image: 'https://images.pexels.com/photos/3584924/pexels-photo-3584924.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 7,
      date: '2025-09-01',
      title: 'STRAIGHT LINE Wins Award at Gaming Expo',
      category: 'Awards',
      excerpt: 'STRAIGHT LINE has won the "Most Anticipated Game" award at the International Gaming Expo. The judges praised its innovative approach to storytelling and complex character relationships within the music industry setting.',
      image: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 8,
      date: '2025-08-25',
      title: 'Developer Diary: Creating the Perfect Story',
      category: 'Development',
      excerpt: 'The development team shares insights into crafting STRAIGHT LINE\'s intricate narrative. With multiple branching paths and over 15 major story events, the game promises unprecedented depth in character-driven storytelling.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-red-600 tracking-wider">
          RECENT NEWS
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Latest updates from STRAIGHT LINE development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-black/50 border border-red-900/30 overflow-hidden hover:border-red-600 transition-all"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-red-950/20 to-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="px-3 py-1 bg-red-950/50 border border-red-900/50 text-red-500 font-bold">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-2 text-gray-500">
                    <Calendar size={14} />
                    {formatDate(item.date)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
