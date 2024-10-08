import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from './Header';
import { useTour } from '../TourContext';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const {setIsActiveComponent}=useTour()
  setIsActiveComponent('contact');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-purple-900 dark:via-pink-900 dark:to-red-900">
      <Header/>
      <main className="container mx-auto px-4 py-12">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12 dark:bg-gray-800">
          <h1 className="contact text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">Contact Us</h1>
          <p className="text-gray-700 mb-6 text-lg dark:text-gray-300">
            We'd love to hear from you! Whether you have a question about our components, need help with implementation, or just want to say hello, don't hesitate to reach out.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Send className="inline-block mr-2 h-5 w-5" />
                Send Message
              </button>
            </form>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400">Contact Information</h2>
            <div className="space-y-4">
              <ContactInfo
                icon={<Mail className="h-6 w-6 text-purple-500" />}
                title="Email"
                content="support@colorfului.com"
              />
              <ContactInfo
                icon={<Phone className="h-6 w-6 text-pink-500" />}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<MapPin className="h-6 w-6 text-red-500" />}
                title="Address"
                content="123 ColorfulUI Street, Design District, Creative City, 12345"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Follow Us</h3>
              <div className="flex space-x-4">
                <SocialIcon href="https://twitter.com/colorfului" name="Twitter" />
                <SocialIcon href="https://github.com/colorfului" name="GitHub" />
                <SocialIcon href="https://linkedin.com/company/colorfului" name="LinkedIn" />
              </div>
            </div>
          </section>
        </div>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Join Our Newsletter</h2>
          <p className="text-white mb-8 text-lg">
            Stay up to date with the latest ColorfulUI news, updates, and tips!
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-300"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-r-full hover:bg-purple-700 transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

function ContactInfo({ icon, title, content }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">{icon}</div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{content}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-100 p-2 rounded-full text-purple-600 hover:bg-purple-200 transition duration-300 ease-in-out dark:bg-gray-700 dark:text-purple-400 dark:hover:bg-gray-600"
    >
      <span className="sr-only">{name}</span>
      {name === 'Twitter' && (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )}
      {name === 'GitHub' && (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )}
      {name === 'LinkedIn' && (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )}
    </a>
  );
}