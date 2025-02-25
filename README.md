 

npm create vite@latest

https://tailwindcss.com/docs/installation/using-vite
npm install tailwindcss @tailwindcss/vite

ShogoMovies is a React-based movie application that utilizes Redux Toolkit, React Router, and Tailwind CSS for a smooth and modern user experience.

Features

Browse and search for movies

View movie details, including release date, cast, and revenue

Responsive design using Tailwind CSS

State management with Redux Toolkit

Tech Stack

React 19

Redux Toolkit for state management

React Router DOM for navigation

Tailwind CSS for styling

Axios for API requests

Moment.js for date formatting

Vite for development and build process

Installation

Clone the repository:

 git clone https://github.com/your-repo/shogomovies.git
 cd shogomovies

Install dependencies:
 npm install

Usage
To start the development server:

 npm run dev

To build the project:

 npm run build

To preview the production build:

 npm run preview

Project Structure
shogomovies/
│── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── constants/       # Navigations
│   ├── store/           # Redux store and slices
│   ├── styles/          # Tailwind styles
│   ├── App.jsx          # Main React component
│   └── main.jsx         # Entry point
│
│── public/              # Static assets
│── package.json         # Project dependencies and scripts
│── tailwind.config.js   # Tailwind CSS configuration
│── vite.config.js       # Vite configuration
│── README.md            # Project documentation