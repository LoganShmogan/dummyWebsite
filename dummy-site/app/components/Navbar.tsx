"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-green-700">
          Happy Horizons
        </Link>

        <div className="hidden md:flex gap-6 text-gray-700">
          <Link href="#about" className="hover:text-green-600">About</Link>
          <Link href="#programs" className="hover:text-green-600">Programs</Link>
          <Link href="#gallery" className="hover:text-green-600">Gallery</Link>
          <Link href="#contact" className="hover:text-green-600">Contact</Link>
        </div>

        <Button className="bg-green-700 hover:bg-green-800 text-white">Enrol Now</Button>
      </nav>
    </header>
  );
}
