# Task Manager Client

This is the client-side of the Task Manager application, built with React.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14.x or later)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhishek-Gurav/TaskManagementAppClient.git
   cd TaskManagementAppClient
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   ├── Login.jsx
│   │   ├── Login.module.css
|   |   ├── Register.js
│   ├── Header.jsx
│   ├── Header.module.css
│   ├── InboxContainer.jsx
│   ├── InboxContainer.module.css
│   ├── MailDetail.jsx
│   ├── MailDetail.module.css
│   ├── MailItem.jsx
│   ├── MailItem.module.css
│   ├── SearchBar.jsx
│   └── SearchBar.module.css
├── index.css
├── index.js
├── static/
│   ├── coding.png
├── pages/
│   ├── Landing.jsx
│   ├── Landing.module.css
│   ├── MailDetailPage.jsx
├── App.js
└── App.module.css
```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.

## Technologies Used

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Tailwind CSS](https://tailwindcss.com/)
