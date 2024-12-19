# React Application with TypeScript, Vite, and TailwindCSS

## Project Overview

This is a React-based application built with **TypeScript** and using the **Vite** framework. The project integrates a variety of libraries and tools, such as **lucide-react** for icons, **react-router-dom** for routing, and **tailwindcss** for styling. The application provides a clean and responsive UI with a focus on client-side routing and reusability of components.

## Project Structure

The project is organized into the following directories:

- **src**: Contains the application's source code.
  - **components**: Holds reusable React components like `Button`, `Input`, and `RepositoryList`.
  - **lib**: Contains utility functions, including `clsx` and `twMerge`.
  - **images**: Stores image assets used throughout the application.
  - **styles**: Holds CSS files, including `App.css` and `index.css`.


## Routing

The application uses **react-router-dom** for client-side routing. The main routes are defined in `main.tsx` and include:

- **/**: The root route, which renders the `App` component.
- **/dashboard**: Displays the `Dashboard` component.
- **/login**: Displays the `LoginPage` component.

The routes support route parameters that can be passed to components for dynamic content. For example, a repository ID can be passed as a parameter in the URL to render specific repository details.

The application also uses **route guards** to protect certain routes, ensuring only authorized users can access specific pages. For example, users must be logged in to access the `/dashboard` route, and they will be redirected to the `/login` route if they are not authenticated.

## Styling

The project uses **tailwindcss** for styling. Tailwind's utility-first approach allows rapid UI development with minimal custom CSS. The main CSS file is `index.css`, which imports **tailwindcss** and defines any custom styles required for the project.

## Libraries and Dependencies

The project relies on the following libraries and dependencies:

- **react**: The JavaScript library for building user interfaces.
- **react-dom**: The React library for rendering components to the DOM.
- **react-router-dom**: A library for client-side routing.
- **lucide-react**: A library for icons.
- **tailwindcss**: A utility-first CSS framework.
- **typescript**: A superset of JavaScript that adds optional static typing.
- **shadcn**: For developing beautiful components more rapidly and maintaining consistency all over the project

## Build and Development

This project uses **Vite** for building and development. The `package.json` file defines scripts for development, building, and previewing the application. The development server can be started by running the appropriate npm command. Additionally, a production build can be generated and previewed locally.

## ESLint Configuration

The project uses **eslint** for code linting and formatting. The `tseslint.config` file defines the ESLint configuration, which includes recommended rules for **React** and **TypeScript**. You can run ESLint checks and automatically fix common issues using the provided npm commands.


