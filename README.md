Charmaine's Portfolio

A personal portfolio website built with Next.js, React, and TypeScript to showcase projects, technical skills, and development work.

Table of Contents
Features
Tech Stack
Getting Started
Available Scripts
Testing
Production Build
Project Structure
Deployment
Contact
Features
Responsive design for desktop, tablet, and mobile devices
Dark and light theme toggle
Projects showcase
Reusable UI components
Tailwind CSS styling
TypeScript for type safety
Unit and component testing
Test coverage reporting
Tech Stack
Framework: Next.js
Frontend Library: React
Programming Language: TypeScript
Styling: Tailwind CSS
Linting: ESLint
Testing: Vitest and React Testing Library
Version Control: Git and GitHub
Getting Started
Prerequisites

Make sure you have installed:

Node.js
npm
Git
Installation
Clone the repository:
bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

Navigate to the project directory:
bash
cd YOUR_REPOSITORY

Install dependencies:
bash
npm install

Start the development server:
bash
npm run dev

Open http://localhost:3000 in your browser.
Available Scripts
Command Description
npm run dev Starts the development server
npm run build Builds the application for production
npm run start Starts the production server
npm run lint Runs ESLint
npm test Runs all tests once
npm run test:watch Runs tests in watch mode
npm run test:coverage Runs tests and generates a coverage report
Testing
Run Tests
bash
npm test

Watch Mode
bash
npm run test:watch

Test Coverage
bash
npm run test:coverage

The coverage report helps identify which parts of the application are covered by tests.

Production Build

Build the application:

bash
npm run build

Start the production server:

bash
npm run start

Run ESLint to check code quality:

bash
npm run lint

Project Structure
text
clmanga-portfolio/
├── app/
│ ├── components/
│ │ └── ui/
│ ├── data/
│ │ └── **tests**/
│ └── ...
├── public/
├── package.json
├── README.md
├── tsconfig.json
└── ...

Note: Update this example to match your actual project structure.
Deployment

This portfolio can be deployed using Vercel, which supports Next.js applications.

Push your project to GitHub.
Import the repository into Vercel.
Configure the project settings and required environment variables.
Deploy your application.
Add your live portfolio URL to your GitHub repository description.
Contact
Portfolio: Add your deployed portfolio URL
GitHub: YOUR_USERNAME
LinkedIn: Add your LinkedIn profile URL
Email: YOUR_EMAIL@example.com
License

Add a LICENSE file if you intend to distribute this project under a specific open-source license.
