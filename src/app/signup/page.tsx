"use client";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-extrabold mb-6 text-purple-600">
        Sign Up for ZapMail
      </h1>
      <button
        className="bg-purple-600 text-white px-6 py-3 rounded font-bold hover:bg-purple-700 transition-colors"
        onClick={() => signIn("github")}
      >
        Sign up with GitHub
      </button>
    </main>
  );
}
