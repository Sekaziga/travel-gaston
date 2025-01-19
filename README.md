# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Travel Planner

## Description
Travel Planner is a simple React application that allows users to plan their trips by adding activities. Users can specify the name, date, and location of an activity, and view them in an organized list.

## Features
- Add activities with name, date, and location.
- Dynamically view all activities in a list.

## Installation
1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd travel-planner`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Usage
1. Fill in the form with activity details.
2. Click "Add Activity" to add the activity to the list.
3. View your activities in the list below the form.

## Folder Structure
```plaintext
src/
|-- components/
|    |-- Header.jsx
|    |-- ActivityForm.jsx
|    |-- ActivityList.jsx
|    |-- ActivityItem.jsx
|
|-- App.jsx
|-- index.css
|-- main.jsx
