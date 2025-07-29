import React from "react";

export function Footer() {
  return (
    <footer className="relative w-full bg-background border-t border-border mt-16 bg-[url('/footer-bg.png')] bg-cover bg-center overflow-hidden text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 pointer-events-none z-0" />
      {/* Top Layer: Call to Action */}
      <div className="relative container mx-auto px-4 py-6 text-center bg-primary text-primary-foreground bg-opacity-90 z-10">
        <h2 className="text-lg font-semibold mb-2">
          Ready for your next adventure?
        </h2>
        <button className="bg-secondary text-secondary-foreground px-6 py-2 rounded-md font-medium shadow hover:bg-secondary/80 transition">
          Get Started
        </button>
      </div>

      {/* Middle Layer: Navigation & Socials */}
      <div className="relative container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left z-10">
        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                API
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4.01c-.77.35-1.6.59-2.47.7a4.15 4.15 0 0 0 1.82-2.3 8.27 8.27 0 0 1-2.62 1A4.13 4.13 0 0 0 11.5 8.13c0 .32.04.64.1.94A11.7 11.7 0 0 1 3 4.67a4.13 4.13 0 0 0 1.28 5.5c-.7-.02-1.36-.22-1.94-.53v.05a4.13 4.13 0 0 0 3.32 4.05c-.3.08-.62.13-.95.13-.23 0-.45-.02-.67-.06a4.13 4.13 0 0 0 3.85 2.86A8.3 8.3 0 0 1 2 19.54a11.73 11.73 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22 4.01Z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Layer: Copyright */}
      <div className="relative container mx-auto px-4 py-4 text-xs text-muted-foreground text-center border-t-[0.5px] border-t-slate-100 z-10">
        &copy; {new Date().getFullYear()} PostcardTrip. All rights reserved. |{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
