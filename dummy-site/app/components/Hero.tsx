export default function Hero() {
  return (
    <section className="relative bg-orange-50">
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel">
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-twe-carousel-indicators>
        </div>

        <div
          className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-active
            data-twe-carousel-item>
            <img
              src="img3.jpg"
              className="block w-full"
              alt="..." />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-4 h-100">
        {/* Card 1 */}
        <div className="bg-orange-700 text-white p-6 rounded-lg flex flex-col items-start gap-4">
          <h3 className="text-xl font-semibold">Primary Carers</h3>
          <img className="rounded-lg max-w-75 mt-4 mb-4" src={'/img7.jpg'} alt="logo" />
          <p>Tamariki will have a “go to carer” throughout their time with us.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-500 text-white p-6 rounded-lg flex flex-col items-start gap-4">
          <h3 className="text-xl font-semibold">Growing Wings</h3>
          <img className="rounded-lg max-w-75 mt-4 mb-4" src={'/img8.jpg'} alt="logo" />
          <p>We help tamariki grow their wings so when they leave the home nest, they can take flight at school as their next chapter.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-amber-500 text-white p-6 rounded-lg flex flex-col items-start gap-4">
          <h3 className="text-xl font-semibold">Child-led Learning</h3>
          <img className="rounded-lg max-w-75 mt-4 mb-4" src={'/img10.jpg'} alt="logo" />
          <p>We offer a child-led, heart-centred approach where relationships are at the core of our philosophy.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg flex flex-col items-start gap-4i mr-4">
          <h3 className="text-xl font-semibold">Growing Wings</h3>
          <img className="rounded-lg max-w-75 mt-4 mb-4" src={'/img9.jpg'} alt="logo" />
          <p>Providing Quality Education in a Creative Environment at our Hamilton and Whangamata centres.</p>
        </div>
      </div>
    </section>
  );
}
