import React, { useEffect } from 'react';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';
import { useTour } from './TourContext';
import './index.css'

const Tour = () => {
  const { isTourActive, endTour,isActiveComponent } = useTour();

  useEffect(() => {
    if (!isTourActive) return; // Only run if the tour is active

    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: { enabled: true },
        classes: 'custom-class  ',
        scrollTo: {behavior:'smooth',block:'center'},
      },
    });

    // Add steps for the tour
    if(isActiveComponent==='home'){
    tour.addStep({
      id: 'step1',
      text: 'to start the application!',
      attachTo: { element: '#a',on:'bottom-end' },
      buttons: [{ text: 'Next', action: () => tour.next() }],
    });
  

    tour.addStep({
      id: 'step2',
      text: 'Make Design Responsive',
      attachTo: { element: '#res',on:'right-end' },
      classes:'',
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
      classes:'p-4 ',
      buttons: [{ text: 'Back', action: tour.back }, { text: 'Next', action: () => tour.next() }],
    });
  }
  if(isActiveComponent==='contact'){
    tour.addStep({
      id: 'step5',
      text: 'Get in touch with us!',
      attachTo: { element: '.contact', on: 'bottom' },
      buttons: [{ text: 'Back', action: tour.back }, { text: 'Finish', action: () => { endTour(); tour.complete(); } }],
    });
  }
  if(isActiveComponent==='about'){
    tour.addStep({
      id: 'step6',
      text: 'Learn more about this website!',
      attachTo: { element: '.about', on: 'right-start' },
      buttons: [{ text: 'Back', action: tour.back }, { text: 'Next', action: () => tour.next() }],
    });
  }
  tour.addStep({
    id:'step7',
    text:"Hope you Injoy it!",
    buttons:[{ text: 'Back', action: tour.back },{ text: 'finish', action: endTour }]

  })

    tour.start();

    return () => {
      tour.cancel();
    };
  }, [isTourActive, endTour]);

  return null;
};

export default Tour;
