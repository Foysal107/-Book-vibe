import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center py-12 px-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
          📚 About Boi Poka
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-indigo-600">Boi Poka</span> — your digital
          library of imagination, inspiration, and discovery. Our goal is to bring together readers
          and stories that leave a lasting impact on your heart and mind.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At Boi Poka, you’ll find a carefully curated collection of books across genres — from
          <span className="font-semibold"> timeless classics</span> to
          <span className="font-semibold"> modern bestsellers</span>. Each title includes detailed
          author info, reviews, ratings, and publication details to help you find your next great
          read.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our mission is simple: make reading enjoyable, accessible, and community-driven. Whether
          you’re exploring love and loss, mystery and adventure, or self-discovery and creativity,
          Boi POka has something for everyone.
        </p>

        <div className="border-t border-gray-200 my-6"></div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            Why Choose Boi Poka?
          </h2>
          <ul className="text-gray-700 text-lg list-disc list-inside text-left md:text-center">
            <li>Explore hundreds of books across multiple genres</li>
            <li>Get honest reviews and community ratings</li>
            <li>Discover new authors and timeless classics</li>
            <li>Save and organize your favorite reads</li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
            “A room without books is like a body without a soul.” — Marcus Tullius Cicero
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
