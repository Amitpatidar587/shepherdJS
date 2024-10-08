import React, { useState } from "react";
import { Menu, X, Home, Info, Mail, Sun, Moon,File } from "lucide-react";
import { useTour } from "../TourContext";
import Header from "./Header";

export default function ColorfulUI() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setIsTourActive ,isDarkMode ,setIsActiveComponent } = useTour();
  setIsActiveComponent('home')
  
  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 min-h-screen">
       
        <Header/>
        <main className="container mx-auto px-4 py-8">
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8 dark:bg-gray-800">
            <h1 className="text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Welcome to ColorfulUI
            </h1>
            <p className="text-gray-700 mb-6 dark:text-gray-300">
              Discover our vibrant and engaging user interface components.
            </p>
            <button
              id="a"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Get Started
            </button>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="res">
              <FeatureCard
                title="Responsive Design"
                description="Our components are fully responsive and work seamlessly on all devices."
                icon={
                  <svg
                    className="h-8 w-8 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </div>
            <div id="themes">
              <FeatureCard
                title="Customizable Themes"
                description="Easily customize the look and feel of your UI with our flexible theming system."
                icon={
                  <svg
                    className="h-8 w-8 text-pink-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                }
              />
            </div>
            <div id="accessibility">
              <FeatureCard
                title="Accessibility"
                description="We prioritize accessibility to ensure your UI is usable by everyone."
                icon={
                  <svg
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </main>
        <footer className="bg-purple-800 text-white py-8 mt-12 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 ColorfulUI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}


function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">
      <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 dark:bg-purple-900">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
