'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePage() {
  const [name, setName] = useState('');
  const [maxPlayers, setMaxPlayers] = useState(4);
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleCreate = () => {
    if (isPrivate && !password) {
      alert('Voer een wachtwoord in voor een private room.');
      return;
    }
    // Hier kun je logica toevoegen om de room aan te maken.
    router.push('/room'); // Verplaatst naar de room-pagina na creatie.
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center py-12 min-h-screen">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-blue-500">Create</span> a Room
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-md text-center">
          Vul de onderstaande gegevens in om een nieuwe room te maken en speel met je vrienden!
        </p>

        {/* Form */}
        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Room Naam</label>
            <input
              type="text"
              placeholder="Bijv. Philippe’s Room"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Maximum aantal spelers
            </label>
            <input
              type="number"
              min="2"
              max="10"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={maxPlayers}
              onChange={(e) => setMaxPlayers(Number(e.target.value))}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Room Type</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="roomType"
                  checked={!isPrivate}
                  onChange={() => setIsPrivate(false)}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2 text-gray-300">Public</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="roomType"
                  checked={isPrivate}
                  onChange={() => setIsPrivate(true)}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2 text-gray-300">Private</span>
              </label>
            </div>
          </div>

          {isPrivate && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Wachtwoord</label>
              <input
                type="password"
                placeholder="Voer een wachtwoord in"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}

          <button
            onClick={handleCreate}
            className="w-full px-6 py-3 bg-blue-500 text-lg font-medium rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Create Room
          </button>
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
