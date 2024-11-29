import React from 'react';
import { RiveAnimation } from './components/RiveAnimation';
import { Blocks } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-500">
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Blocks className="w-8 h-8 text-black" />
          <h1 className="text-2xl font-bold text-black">LEGO Minifig Demo</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto h-[600px] bg-white/10 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
          <RiveAnimation />
        </div>
        
        <div className="mt-8 text-center text-black">
          <p className="text-lg">
            Move your mouse to make the minifig look around!
          </p>
          <p className="text-sm mt-2 opacity-75">
            Click the wave button to make him wave
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;