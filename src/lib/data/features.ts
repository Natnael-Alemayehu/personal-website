import type { Feature } from "$lib/utils/types";

export default [ 
  {
    name: 'Learning Management system',
    description:
      'A lightweight learning management system built with Go Pocketbase as the backend and Svelte for the frontend',
    image: 'images/features/eCourse.png',
    tags: [{ label: 'eCourse' }]
  }, 
  {
    name: 'Brainwave',
    description:
      'While learning React, I built a landing page for a fictional company called Brainwave. This project was instrumental in improving my proficiency with React and honing my frontend development skills.',
    image: 'images/features/brainwave.png',
    tags: [{ label: 'Primary Color' }, { label: 'Secondary Color', color: 'secondary' }]
  }, 
  {
    name: 'Noble Care Transportation',
    description:
      'Noble Care Transportation is a website dedicated to providing reliable and compassionate transportation services for elders and individuals with accessibility challenges.',
    image: 'images/features/noble_care.png',
  }, 
  {
    name: 'Movies API',
    description:
      'Movies is an api that is built with go. This project was an amazing introduction to Golang and the beautiful ecosystem on slack and reddit.',
    image: 'images/posts/golang.svg',
  },
] as Feature[];