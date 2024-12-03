'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-90"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo */}
        <h1 className="text-6xl font-bold mb-8">
          <span className="text-blue-500">Card</span>
          <span className="text-purple-400">.io</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-12 max-w-md text-center">
          Speel kaartspellen met vrienden waar en wanneer je wilt. Maak een lobby of sluit aan bij een game!
        </p>

        <div className="flex space-x-6">
          <Link
            href="/create"
            className="px-8 py-4 text-lg font-medium bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Create Game
          </Link>
          <Link
            href="/join"
            className="px-8 py-4 text-lg font-medium bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600 transition"
          >
            Join Game
          </Link>
        </div>
      </div>

      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl opacity-30"></div>

      <footer className="absolute bottom-0 left-0 w-full py-6 bg-gray-800 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} <span className="font-bold text-white">Card.io</span> - A project for fun.
        </p>
      </footer>
    </div>
  );
}
