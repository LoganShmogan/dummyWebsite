'use client';

import { Authenticated, Unauthenticated } from 'convex/react';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

export default function Home() {
  return (
    <>
      {/* Auth Section */}
      <section className="max-w-6xl mx-auto px-6 py-10 border-t">
        <Authenticated>
          <div className="flex flex-col gap-4">
            <UserButton />
            <Content />
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

function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return (
    <div>
      <h3 className="text-xl font-semibold text-orange-900">
        Authenticated Content
      </h3>
      <p className="text-gray-600 mt-2">
        You have {messages?.length ?? 0} messages.
      </p>
    </div>
  );
}
