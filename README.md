# 👾 Anantraj's Retro Pixel Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A personal portfolio website built with React and Framer Motion, designed with a retro, 8-bit gaming aesthetic to showcase my projects in a fun and interactive way.

**[➡️ View Live Demo](https://anantraj.netlify.me)**

## About The Project

This project is my personal space on the web to showcase my skills and the projects I'm passionate about. I wanted to move beyond traditional templates and create a memorable experience for visitors. The entire UI is built to feel like an old-school computer interface, from the pixelated fonts and cards to the terminal-style icons.

The portfolio is designed to be easily updated with new projects by simply modifying a central data file.

## ✨ Key Features

* **Retro Pixel Art Design:** A unique, custom-built theme with pixelated fonts, cards, and a nostalgic color palette.
* **Interactive Project Cards:** Project cards animate on hover and scroll into view with dynamic animations.
* **Smooth Animations:** Powered by [Framer Motion](https://www.framer.com/motion/) for fluid page transitions and interactive elements.
* **Detailed Project Modals:** Clicking a card opens a pop-up modal with a project description, key highlights, and a direct link to the GitHub repository.
* **Responsive Design:** Looks great on both desktop and mobile devices.

## 🛠️ Built With

This project was built using a modern frontend stack:

* [React](https://reactjs.org/)
* [Framer Motion](https://www.framer.com/motion/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
* `npm`
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone [https://github.com/anantrajjj/your-portfolio-repo.git](https://github.com/anantrajjj/your-portfolio-repo.git)
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm run dev
    ```

## ⚙️ Usage & Customization

The project data is centralized, making it incredibly easy to add, remove, or update your projects.

1.  Navigate to the file where your `projectsData` array is located (e.g., `src/components/Projects.jsx` or `src/data/projects.js`).
2.  Edit the array to reflect your own project information. Each project is an object with the following structure:

    ```javascript
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
      link: '[https://github.com/your-username/your-repo](https://github.com/your-username/your-repo)'
    }
    ```

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Anantraj Prasad - [linkedin.com/in/anantraj-prasad](https://linkedin.com/in/anantraj-prasad)

Project Link: [https://github.com/anantrajjj/portfolio](https://github.com/anantrajjj/portfolio)
