import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold">Happy Horizons</h2>
          <p className="mt-2 text-sm text-orange-100">
            123 Example Street, Palmerston North, NZ
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-orange-100">
          <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link href="/about" className="hover:text-orange-600">About</Link></li>
          <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
          <li><Link href="/enrolment" className="hover:text-orange-600">Enrolment</Link></li>
          <li><Link href="/gallery" className="hover:text-orange-600">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-orange-100 text-sm">
            info@happyhorizons.co.nz <br />
            (06) 123 4567
          </p>
        </div>
      </div>
    </footer>
  );
}
