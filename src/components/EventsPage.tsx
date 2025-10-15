import { useState, useEffect } from 'react';
import { Calendar, MapPin, Loader } from 'lucide-react';
import type { Event } from '../types';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbxZ_mvLzCsm16JEqgqgTin7wL2fBat1DqhNB79yHLi8BmK22C2KGaLQK4Tb8hnuu-X8xg/exec')
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'TBA';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <Loader className="animate-spin text-red-600" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-red-600 tracking-wider">
          EVENT SCHEDULE
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Key moments in the STRAIGHT LINE timeline
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-900 via-red-600 to-red-900"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.event_id}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-black/50 border border-red-900/30 p-6 hover:border-red-600 transition-all ml-12 md:ml-0">
                    <h3 className="text-2xl font-bold text-red-500 mb-3">
                      {event.event_name}
                    </h3>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} className="text-red-600" />
                        {formatDate(event.event_date_approx)}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} className="text-red-600" />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-red-700 border-4 border-black rounded-full"></div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
