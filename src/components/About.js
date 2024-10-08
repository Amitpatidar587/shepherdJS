import React from 'react';
import { Code, Palette, Users, Zap } from 'lucide-react';
import Header from './Header';
import { useTour } from '../TourContext';

export default function About() {
  const {setIsActiveComponent}=useTour()
  setIsActiveComponent('about');
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <Header/>
      <main className="container mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12 dark:bg-gray-800">
          <h1 className="about inline-block text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">About ColorfulUI</h1>
          <p className="text-gray-700 mb-6 text-lg dark:text-gray-300">
            ColorfulUI is a vibrant and modern React component library designed to bring life and energy to your web applications. Our mission is to provide developers with a set of beautiful, accessible, and easy-to-use components that make creating stunning user interfaces a breeze.
          </p>
          <p className="text-gray-700 mb-6 text-lg dark:text-gray-300">
            Founded in 2024, ColorfulUI has quickly become a favorite among developers who want to create visually appealing and highly functional web applications without sacrificing performance or accessibility.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueCard
              title="Creativity"
              description="We believe in pushing the boundaries of design to create unique and memorable user experiences."
              icon={<Palette className="h-8 w-8 text-purple-500" />}
            />
            <ValueCard
              title="Accessibility"
              description="We're committed to creating components that are usable by everyone, regardless of their abilities."
              icon={<Users className="h-8 w-8 text-pink-500" />}
            />
            <ValueCard
              title="Performance"
              description="Our components are optimized for speed and efficiency, ensuring smooth user interactions."
              icon={<Zap className="h-8 w-8 text-yellow-500" />}
            />
            <ValueCard
              title="Developer Experience"
              description="We strive to make our library intuitive and easy to use for developers of all skill levels."
              icon={<Code className="h-8 w-8 text-green-500" />}
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-12 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-purple-600 dark:text-purple-400">Our Story</h2>
          <p className="text-gray-700 mb-6 dark:text-gray-300">
            ColorfulUI was born out of a passion for beautiful design and a frustration with the lack of truly vibrant UI libraries in the React ecosystem. Our founders, a group of developers and designers, came together with a shared vision: to create a component library that would make it easy for developers to build eye-catching, accessible, and performant web applications.
          </p>
          <p className="text-gray-700 mb-6 dark:text-gray-300">
            Since our launch, we've been overwhelmed by the positive response from the developer community. We're constantly working on improving our existing components and developing new ones to meet the evolving needs of modern web development.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Join Our Colorful Journey</h2>
          <p className="text-white mb-8 text-lg">
            We're always looking for passionate developers and designers to contribute to ColorfulUI. Whether you want to submit a bug fix, propose a new feature, or help improve our documentation, we welcome your contributions!
          </p>
          <a
            href="https://github.com/colorful-ui/react"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700"
          >
            Contribute on GitHub
          </a>
        </section>
      </main>
    </div>
  );
}

function ValueCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}