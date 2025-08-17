"use client";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
export default function LoginPage() {
  return (
    <div id="webcrumbs">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl mx-auto">
          {/* Header */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              {/* Simple SVG for the logo */}
              <svg
                className="h-10 w-10 text-purple-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5L11 15L9 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 13L2 9L11 2L20 9L15 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="ml-2 text-3xl font-bold text-gray-800">ZapMail</h1>
            </div>
          </div>

          {/* Welcome & Actions */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Welcome to ZapMail
              </h2>
              <p className="mt-2 text-gray-600">
                Your secure messaging platform
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-center text-gray-600 mb-4">
                We use OAuth for secure logins—an industry standard protocol for
                authorization, so your passwords are never shared.
              </p>

              {/* GitHub Login */}
              <button
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              >
                {/* SVG icon for GitHub */}
                <FaGithub size={20} />
                <p className="ml-2">Log In with GitHub</p>
              </button>

              {/* Google Login */}
              <button
                className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              >
                {/* SVG icon for Google */}
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <g>
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </g>
                </svg>
                Log In with Google
              </button>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800 mb-1">
                  Why OAuth?
                </h3>
                <p className="text-xs text-gray-600">
                  OAuth allows you to log in securely without creating a new
                  password. Your credentials stay with the provider
                  (GitHub/Google), and we only receive a verification token,
                  enhancing your security and simplifying the login process.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} ZapMail. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
