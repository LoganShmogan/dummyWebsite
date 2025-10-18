'use client';

import Hero from '@/app/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-orange-900">About Us</h2>
        <p className="mt-4 text-gray-600">
          We believe every child deserves a place where they can feel safe,
          inspired, and loved. Our dedicated educators focus on nurturing
          confidence and curiosity in every learner.
        </p>
      </section>

    </>
  );
}

