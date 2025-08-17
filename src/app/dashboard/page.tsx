"use client";
import { useSession } from "next-auth/react";

export default function InboxPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>You must be logged in to view your inbox.</p>;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Your Inbox, {session.user?.name || "User"}!
      </h1>
      <p className="mb-6 text-gray-600">
        This is the main dashboard where you’ll see your emails.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>You’re successfully logged in with {session.user?.email}</p>
        {/* Here you’ll list and manage emails in the future */}
      </div>
    </main>
  );
}
