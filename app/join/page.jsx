'use client';

import { useState } from 'react';

export default function JoinPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const rooms = [
    { id: 1, name: 'Philippe’s Room', players: 4 },
    { id: 2, name: 'Fun with Cards', players: 2 },
    { id: 3, name: 'Expert Level', players: 5 },
    { id: 4, name: 'Friendly Match', players: 3 },
  ];

  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center py-12 min-h-screen">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-blue-500">Join</span> a Room
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-md text-center">
          Zoek een room en speel mee met je vrienden. Gebruik de zoekbalk om snel te filteren!
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-xl mb-8">
          <input
            type="text"
            placeholder="Zoek naar een naam of code..."
            className="w-full px-6 py-4 rounded-lg bg-gray-800 text-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Room List */}
        <div className="w-full max-w-xl bg-gray-800 rounded-lg shadow-lg divide-y divide-gray-700">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div
                key={room.id}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-700 cursor-pointer"
              >
                <div>
                  <h2 className="text-xl font-semibold text-white">{room.name}</h2>
                  <p className="text-sm text-gray-400">{room.players} spelers</p>
                </div>
                <button className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition">
                  Join
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-6">Geen rooms gevonden.</p>
          )}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-30"></div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full py-6 bg-gray-800 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="font-bold text-white">Card.io</span> - A project for fun.
        </p>
      </footer>
    </div>
  );
}
