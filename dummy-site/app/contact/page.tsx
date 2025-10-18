'use client';

import Hero from '@/app/components/Hero';

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-10 border-t">
        <h2 className="text-3xl font-bold text-orange-900">Contact Us</h2>
      <ul className="w-96 text-surface dark:text-white">
        <li
          className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          An item
        </li>
        <li
          className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          A second item
        </li>
        <li
          className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          A third item
        </li>
        <li
          className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          A fourth item
        </li>
        <li className="w-full py-4">And a fifth one</li>
      </ul>
      </section>
    </>
  );
}

