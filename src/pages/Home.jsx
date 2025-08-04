import React, { useRef } from 'react';
import { ChevronDown, ArrowUp } from 'lucide-react'; // Optional icons (install lucide-react if not already)

function Home() {
  const scrollRef = useRef(null);

  const handleScrollDown = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20">
      {/* Top section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-white text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Connection App</h1>
        <p className="text-lg max-w-xl mb-8">
          Send and manage connection requests easily.
        </p>
        <button
          onClick={handleScrollDown}
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center gap-2"
        >
          <ChevronDown size={20} />
          Scroll Down
        </button>
      </section>

      {/* Scroll target section */}
      <section
        ref={scrollRef}
        className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-6"
      >
        <h2 className="text-3xl font-semibold mb-4">Explore Our Features</h2>
        <p className="max-w-2xl text-lg text-gray-700">
          Users can register, send connection requests, accept or reject incoming ones, and view active connections — all from a single dashboard.
        </p>

        {/* Scroll to top button */}
        <button
          onClick={handleScrollTop}
          className="mt-12 bg-gray-800 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition flex items-center gap-2"
        >
          <ArrowUp size={18} />
          Back to Top
        </button>
      </section>
    </div>
  );
}

export default Home;
