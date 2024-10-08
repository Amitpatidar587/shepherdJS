import React, { useEffect } from 'react';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import { useTour } from './TourContext';
import './index.css';
import { ChevronRight } from 'lucide-react';

const Tour = () => {
  const { isTourActive, endTour, isActiveComponent } = useTour();

  useEffect(() => {
    if (!isTourActive) return; // Exit early if the tour is not active

    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: 'custom-class',
        scrollTo: { behavior: 'smooth', block: 'center' },
      },
    });

    // Define steps for the home component
    if (isActiveComponent === 'home') {
      tour.addStep({
        id: 'step1',
        text: 'To start the application!',
        attachTo: { element: '#a', on: 'bottom-end' },
        buttons: [{ text: 'Next', action: () => tour.next() }],
      });

      tour.addStep({
        id: 'step2',
        text: 'Make Design Responsive',
        attachTo: { element: '#res', on: 'right-end' },
        buttons: [{ text: 'Back', action: tour.back }, { text: 'Next', action: () => tour.next() }],
      });

      tour.addStep({
        id: 'step3',
        text: 'Create Customizable Theme Section!',
        attachTo: { element: '#themes', on: 'top-end' },
        buttons: [{ text: 'Back', action: tour.back }, { text: 'Next', action: () => tour.next() }],
      });

      tour.addStep({
        id: 'step4',
        text: 'Ensure Accessibility of Components',
        attachTo: { element: '#accessibility', on: 'left-start' },
        buttons: [{ text: 'Back', action: tour.back }, { text: 'Next', action: () => tour.next() }],
      });
    }

    // Define steps for the contact component
    if (isActiveComponent === 'contact') {
      tour.addStep({
        id: 'step5',
        text: 'Get in touch with us!',
        attachTo: { element: '.contact', on: 'bottom' },
        buttons: [{ text: 'Back', action: tour.back }, { text: 'Next', action:()=>tour.next() }],
      });
    }

    // Define steps for the about component
    if (isActiveComponent === 'about') {
      tour.addStep({
        id: 'step6',
        text: 'Learn more about this website!',
        attachTo: { element: '.about', on: 'right-start' },
        buttons: [{ text: 'Back', action: tour.back }, { text: 'Next', action: () => tour.next() }],
      });
    }

    // Final step with HTML content
    tour.addStep({
      id: 'step7',
      text: htmlContent,
      buttons: [
        { text: 'Back', action: tour.back },
        { text: 'Finish', action: () => { endTour(); tour.complete(); } }
      ],
    });

    // Start the tour
    tour.start();

    // Cleanup function to cancel the tour
    return () => {
      tour.cancel();
    };
  }, [isTourActive, isActiveComponent]);

  return null;
};

// HTML content for the last step
const htmlContent = `
  <div class="max-w-md p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <h2 class="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">You're All Set!</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-6">Congratulations on completing the tour! You've now seen the key features of our website. We hope this overview has been helpful and that you're excited to start exploring on your own. Remember, there's still plenty more to discover, so feel free to click around and try things out.</p>
    <p class="text-gray-700 dark:text-gray-300 mb-6">If you ever need to revisit this tour or have any questions, our help section is always available. Enjoy your experience with our platform!</p>
    <button class="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition-colors duration-200" onclick="startExploring()">
      Start Exploring
      <svg class="ml-2 h-5 w-5"><!-- ChevronRight icon SVG --></svg>
    </button>
  </div>
`;

// Define the startExploring function globally if needed
window.startExploring = () => {
  // Add your navigation logic here
};

export default Tour;
