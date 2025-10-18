export default function Hero() {
  return (
    <section className="relative bg-green-50">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-900">
          Happy Horizons Daycare Centre
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Where curiosity, creativity, and confidence take flight.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-4 h-100">
    {/* Card 1 */}
    <div className="bg-orange-700 text-white p-6 rounded-lg flex flex-col items-start gap-4">
      <h3 className="text-xl font-semibold">Primary Carers</h3>
      <p>Tamariki will have a “go to carer” throughout their time with us.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col items-start gap-4">
      <h3 className="text-xl font-semibold">Growing Wings</h3>
      <p>We help tamariki grow their wings so when they leave the home nest, they can take flight at school as their next chapter.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-amber-500 text-white p-6 rounded-lg flex flex-col items-start gap-4">
      <h3 className="text-xl font-semibold">Child-led Learning</h3>
      <p>We offer a child-led, heart-centred approach where relationships are at the core of our philosophy.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-yellow-500 text-white p-6 rounded-lg flex flex-col items-start gap-4">
      <h3 className="text-xl font-semibold">Growing Wings</h3>
      <p>Providing Quality Education in a Creative Environment at our Hamilton and Whangamata centres.</p>
    </div>
  </div>
    </section>
  );
}
