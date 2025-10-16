import { Play } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const videos = [
    { id: 'TnbnIbLUYO8', title: 'Prototype Teaser 1' },
    { id: 'uUEnPKOU0dk', title: 'Prototype Teaser 2' },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8b0000_1px,transparent_1px)] bg-[length:50px_50px]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 animate-pulse">
            STRAIGHT LINE
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 tracking-wide">
            A Revolution in Music Industry Entertainment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('order')}
              className="px-8 py-4 bg-red-700 hover:bg-red-600 text-white font-bold tracking-wider transition-all transform hover:scale-105 border border-red-500"
            >
              ORDER NOW
            </button>
            <button
              onClick={() => onNavigate('characters')}
              className="px-8 py-4 bg-transparent hover:bg-red-950/50 text-red-500 font-bold tracking-wider border-2 border-red-700 transition-all transform hover:scale-105"
            >
              EXPLORE
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-black to-red-950/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-600 tracking-wider">
            FEATURED VIDEOS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-black/50 backdrop-blur-sm border border-red-900/30 overflow-hidden hover:border-red-600 transition-all"
              >
                <div className="aspect-video relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-20 h-20 bg-red-700/80 hover:bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all"
                    >
                      <Play size={32} className="text-white ml-1" fill="white" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-500 tracking-wide">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-red-950/10 to-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-red-600 tracking-wider">
            ABOUT THE GAME
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            Experience the revolutionary journey of LIMI Entertainment as they challenge
            the corrupt music industry. Follow Sou Shibasaki and his complex relationships
            through a world of power, betrayal, and redemption.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-black/50 border border-red-900/30 p-8 hover:border-red-600 transition-all">
              <div className="text-5xl font-bold text-red-600 mb-4">24+</div>
              <div className="text-xl font-bold text-gray-200 mb-2">CHARACTERS</div>
              <div className="text-sm text-gray-400">Deep character development</div>
            </div>
            <div className="bg-black/50 border border-red-900/30 p-8 hover:border-red-600 transition-all">
              <div className="text-5xl font-bold text-red-600 mb-4">15+</div>
              <div className="text-xl font-bold text-gray-200 mb-2">EVENTS</div>
              <div className="text-sm text-gray-400">Epic storyline moments</div>
            </div>
            <div className="bg-black/50 border border-red-900/30 p-8 hover:border-red-600 transition-all">
              <div className="text-5xl font-bold text-red-600 mb-4">22+</div>
              <div className="text-xl font-bold text-gray-200 mb-2">RELATIONSHIPS</div>
              <div className="text-sm text-gray-400">Complex interactions</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
