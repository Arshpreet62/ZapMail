import Link from "next/link";
import { FaBolt, FaAngleUp } from "react-icons/fa6";
import { AiOutlineThunderbolt } from "react-icons/ai";
import {
  MdSecurity,
  MdOutlineSmartToy,
  MdLoop,
  MdOutlineDevices,
  MdOutlineSchedule,
} from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { Image } from "next/image";
export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* Header */}
        <header className="py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-purple-600">ZapMail</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="font-bold hover:text-purple-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="font-bold hover:text-purple-600 transition-colors"
            >
              Pricing
            </a>

            <a
              href="#faq"
              className="font-bold hover:text-purple-600 transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/auth">
              <p className="font-bold text-lg hover:text-purple-600 transition-colors hidden md:block">
                Login
              </p>
            </Link>
            <Link href="/auth">
              <p className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition-colors transform hover:scale-105">
                Get Started
              </p>
            </Link>
            <button className="md:hidden rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Faster emails for busy professionals
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              ZapMail helps you manage your inbox efficiently, so you can focus
              on what really matters.
            </p>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <Image
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTc1NTI0NzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  // keywords="user, avatar, customer"
                />
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHx1c2VyfGVufDB8fHx8MTc1NTI0NzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  // keywords="user, avatar, customer"
                />
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHx1c2VyfGVufDB8fHx8MTc1NTI0NzMwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="User"
                  className="w-8 h-8 rounded-full border-2 border-white"
                  // keywords="user, avatar, customer"
                />
              </div>
              <p className="ml-4 text-sm text-gray-600">
                Joined by 10,000+ professionals
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://placehold.co/600x400/primary/white?text=ZapMail+Interface"
                alt="ZapMail Interface"
                className="rounded-lg w-full"
                // keywords="email interface, app interface, email app"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-100 p-3 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-600">
                  <FaBolt className="text-purple-600" />
                </span>
                <span className="font-medium">50% faster email processing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why choose ZapMail?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our powerful features are designed to make email management a
              breeze
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary-600">
                  <AiOutlineThunderbolt className="text-purple-600" size={25} />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Experience blazing speeds with our optimized email client that
                loads in milliseconds.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary-600">
                  <MdSecurity className="text-purple-600" size={25} />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Bank-Level Security
              </h3>
              <p className="text-gray-600">
                Your emails are encrypted end-to-end, ensuring your
                communications remain private.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary-600">
                  <MdOutlineSmartToy className="text-purple-600" size={25} />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered</h3>
              <p className="text-gray-600">
                Smart suggestions and automatic categorization to help you
                manage your inbox efficiently.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary-600">
                  <MdOutlineSchedule className="text-purple-600" size={25} />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Schedule Sending</h3>
              <p className="text-gray-600">
                Write now, send later. Schedule your emails to be sent at the
                perfect time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary-600">
                  <MdLoop className="text-purple-600" size={25} />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Seamless Integration
              </h3>
              <p className="text-gray-600">
                Connect with your favorite tools and services for a streamlined
                workflow.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary-600">
                  <MdOutlineDevices className="text-purple-600" size={25} />
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Device Sync</h3>
              <p className="text-gray-600">
                Access your emails from any device with real-time
                synchronization.
              </p>
            </div>
          </div>
          {/* Next: "Add a 'View All Features' button" */}
        </section>

        {/* How It Works */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How ZapMail Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to revolutionize your email experience
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400/eee/ccc?text=ZapMail+Demo"
                alt="ZapMail Demo"
                className="rounded-xl shadow-lg w-full"
                // keywords="email app demo, email interface, productivity app"
              />
            </div>
            <div className="md:w-1/2 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Sign up in seconds
                  </h3>
                  <p className="text-gray-600">
                    Create your account with just a few clicks and connect your
                    existing email accounts.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Customize your experience
                  </h3>
                  <p className="text-gray-600">
                    Set up your preferences and let our AI learn your email
                    habits for personalized suggestions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Enjoy a cleaner inbox
                  </h3>
                  <p className="text-gray-600">
                    Experience faster email processing with our intelligent
                    categorization and priority inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Next: "Add a testimonial carousel" */}
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan for your email needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>1 email account</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Basic AI suggestions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>5GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Standard support</span>
                </li>
              </ul>
              <Link href="/auth">
                <p className="block w-full py-3 px-4 bg-gray-100 text-center rounded-md font-medium hover:bg-gray-200 transition-colors">
                  Get Started
                </p>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all border border-gray-100">
              <div className="absolute -top-4 right-8 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">
                For professionals and small teams
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$X.XX</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>5 email accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Advanced AI features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>50GB storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Custom signatures</span>
                </li>
              </ul>
              <Link href="/auth">
                <p className="block w-full py-3 px-4 bg-gray-100 text-center rounded-md font-medium hover:bg-gray-200 transition-colors">
                  Get Started
                </p>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all border border-gray-100">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">
                For large teams and organizations
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$XX.XX</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Unlimited email accounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Premium AI features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Unlimited storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Custom branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500">
                    <FaRegCheckCircle />
                  </span>
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <Link href="/auth">
                <p className="block w-full py-3 px-4 bg-gray-100 text-center rounded-md font-medium hover:bg-gray-200 transition-colors">
                  Contact Sales
                </p>
              </Link>
            </div>
          </div>
          {/* Next: "Add a pricing FAQ section" */}
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-primary-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your email experience?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of professionals who've already made the switch to
              ZapMail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth">
                <p className="bg-white text-primary-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors transform hover:scale-105">
                  Get Started for Free
                </p>
              </Link>

              <a
                href="#demo"
                className="border border-white px-8 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about ZapMail
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer font-medium">
                How secure is ZapMail?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  <FaAngleUp />
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                ZapMail uses bank-level encryption for all your emails and data.
                We employ end-to-end encryption and have regular security audits
                to ensure your information stays private and protected.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer font-medium">
                Can I connect multiple email accounts?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  <FaAngleUp />
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes! Depending on your plan, you can connect multiple email
                accounts from various providers including Gmail, Outlook, Yahoo,
                and custom domains. All your emails will be organized in one
                unified inbox.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer font-medium">
                How does the AI-powered inbox work?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  <FaAngleUp />
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                Our AI learns from your email habits to provide smart
                suggestions, automatically categorize emails, and highlight
                important messages. It helps you prioritize your inbox and
                respond faster to what matters most.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer font-medium">
                Can I switch plans later?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  <FaAngleUp />
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                Absolutely! You can upgrade or downgrade your plan at any time.
                If you upgrade, the new features will be available immediately.
                If you downgrade, the changes will take effect at the start of
                your next billing cycle.
              </p>
            </details>
            <details className="bg-white p-6 rounded-lg shadow-sm group">
              <summary className="flex justify-between items-center cursor-pointer font-medium">
                Is there a mobile app available?
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                  <FaAngleUp />
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, ZapMail is available on iOS and Android. Our mobile apps
                offer the same powerful features as the desktop version,
                allowing you to manage your emails on the go with real-time
                synchronization across all your devices.
              </p>
            </details>
          </div>
          {/* Next: "Add a contact section" */}
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-primary-400">ZapMail</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Revolutionizing how professionals manage their email
                communication.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-facebook text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Status
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} ZapMail. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
