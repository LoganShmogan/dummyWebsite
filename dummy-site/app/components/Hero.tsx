export default function Hero() {
  return (
    <section className="relative bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-900">
          Happy Horizons Daycare Centre
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Where curiosity, creativity, and confidence take flight.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-orange-700 text-white px-6 py-3 rounded-md hover:bg-orange-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
