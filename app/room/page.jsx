'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RoomPage() {
  const router = useRouter();
  
  // Simuleer data van de room, bijvoorbeeld doorgestuurd via state of API:
  const [roomName, setRoomName] = useState('Philippe’s Room');
  const [players, setPlayers] = useState(['Speler1', 'Speler2', 'Speler3']);
  const [roomCode, setRoomCode] = useState('');

  useEffect(() => {
    // Genereer een random 5-letterige code voor de room.
    const generateRoomCode = () => {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return Array(5)
        .fill()
        .map(() => letters[Math.floor(Math.random() * letters.length)])
        .join('');
    };

    setRoomCode(generateRoomCode());
  }, []);

  const handleLeaveRoom = () => {
    // Logica om de room te verlaten.
    router.push('/'); // Terug naar de homepage.
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center py-12 min-h-screen">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Room: <span className="text-blue-500">{roomName}</span>
        </h1>

        <p className="text-lg text-gray-300 mb-8 text-center">
          De code om je room te delen is: <span className="font-bold text-purple-400">{roomCode}</span>
        </p>

        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">Spelers</h2>
          <ul className="space-y-3">
            {players.map((player, index) => (
              <li
                key={index}
                className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300"
              >
                {player}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleLeaveRoom}
          className="mt-8 px-8 py-3 text-lg font-medium bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition"
        >
          Leave Room
        </button>
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
