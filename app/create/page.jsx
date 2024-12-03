export default function CreatePage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Creëer een lobby</h1>
        <p className="text-lg text-gray-600 mb-8">Kies een spel of genereer een code om met vrienden te spelen.</p>
        <button className="px-6 py-3 text-lg text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none">
          Genereer code
        </button>
      </div>
    );
  }
  