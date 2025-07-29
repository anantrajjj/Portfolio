👾 Anantraj's Retro Pixel Portfolio
A personal portfolio website built with React and Framer Motion, designed with a retro, 8-bit gaming aesthetic to showcase my projects in a fun and interactive way.

➡️ View Live Demo


About The Project
This project is my personal space on the web to showcase my skills and the projects I'm passionate about. I wanted to move beyond traditional templates and create a memorable experience for visitors. The entire UI is built to feel like an old-school computer interface, from the pixelated fonts and cards to the terminal-style icons.

The portfolio is designed to be easily updated with new projects by simply modifying a central data file.

✨ Key Features
Retro Pixel Art Design: A unique, custom-built theme with pixelated fonts, cards, and a nostalgic color palette.

Interactive Project Cards: Project cards animate on hover and scroll into view with dynamic animations.

Smooth Animations: Powered by Framer Motion for fluid page transitions and interactive elements.

Detailed Project Modals: Clicking a card opens a pop-up modal with a project description, key highlights, and a direct link to the GitHub repository.

Responsive Design: Looks great on both desktop and mobile devices.

🛠️ Built With
This project was built using a modern frontend stack:

React: A JavaScript library for building user interfaces.

Framer Motion: A production-ready motion library for React.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

shadcn/ui: A component library used for the accessible and unstyled Dialog (modal) component.

Lucide React: For clean and beautiful icons.

🚀 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm installed on your machine.

npm

Bash

npm install npm@latest -g
Installation
Clone the repo

Bash

git clone https://github.com/anantrajjj/your-portfolio-repo.git
Install NPM packages

Bash

npm install
Start the development server

Bash

npm run dev
⚙️ Usage & Customization
The project data is centralized, making it incredibly easy to add, remove, or update your projects.

Navigate to the file where your projectsData array is located (e.g., src/components/Projects.jsx or src/data/projects.js).

Edit the array to reflect your own project information. Each project is an object with the following structure:

JavaScript

{
  // The title of your project
  title: 'My Awesome Project',

  // The tech stack shown on the card (keep it brief)
  tech: 'REACT, NODE.JS, POSTGRESQL',

  // Path to the project image inside the /public directory
  image: '/assets/images/my-project-image.png',

  // A longer description for the modal popup
  description: 'A detailed description of what the project does, its purpose, and the problems it solves.',

  // A list of key achievements or features for the modal
  highlights: [
      'Feature 1: Implemented user authentication with JWT.',
      'Feature 2: Built a real-time chat functionality with WebSockets.',
      'Feature 3: Deployed the application to AWS with a CI/CD pipeline.'
  ],

  // The full URL to the project's repository or live demo
  link: 'https://github.com/your-username/your-repo'
}
📄 License
Distributed under the MIT License. See LICENSE for more information.

📬 Contact
Anantraj Prasad - linkedin.com/in/anantraj-prasad/

Project Link: https://github.com/anantrajjj/Portfolio_
