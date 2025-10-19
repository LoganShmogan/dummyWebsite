'use client';

import { Authenticated, Unauthenticated } from 'convex/react';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import Hero from '@/app/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Auth Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 border-t">
        <Authenticated>
          <div className="flex flex-col gap-4">
            <UserButton />
          </div>
        </Authenticated>

        <Unauthenticated>
          <div className="flex flex-col items-start gap-4">
            <p className="text-gray-600">Sign in to view your dashboard.</p>
            <SignInButton />
          </div>
        </Unauthenticated>
      </section>
    </>
  );
}

