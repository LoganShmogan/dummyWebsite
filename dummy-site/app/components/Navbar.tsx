"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-orange-700">
          Happy Horizons
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-orange-600">Home</Link>
          <Link href="#about" className="hover:text-orange-600">About</Link>
          <Link href="#contact" className="hover:text-orange-600">Contact</Link>
          <Link href="#enrolment" className="hover:text-orange-600">Enrolment</Link>
          <Link href="#gallery" className="hover:text-orange-600">Gallery</Link>
          <Link href="#blog" className="hover:text-orange-600">Blog</Link>
        </div>

        <Button className="bg-orange-700 hover:bg-orange-800 text-white">Enrol Now</Button>
      </nav>

    </header>
  );
}
