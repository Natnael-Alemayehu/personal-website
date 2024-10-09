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
  // {
  //   name: 'Well Optimized',
  //   description:
  //     'Images are automatically optimized and lazy loaded, to ensure the website loads as fast as possible regardless of connection speed.',
  //   image: 'images/features/optimized.jpg',
  //   tags: [{ label: 'Powered by Image Transmutation' }]
  // }, 
  // {
  //   name: 'Light and Dark Modes',
  //   description:
  //     'This template was built with dark mode in mind. It can swap between themes automatically (based on system settings) or manually. Both themes can be tweaked in the _themes.scss file.',
  //   image: 'images/features/light-dark.jpg',
  // },
  // {
  //   name: 'Open Source',
  //   description:
  //     'All code is open source, which means you can copy and modify it to your heart\'s content. All I ask is that you make your code open too so that knowledge can be passed on.',
  //   image: 'images/features/open-source.jpg'
  // },
] as Feature[];