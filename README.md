This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## IMPORTANT

If an error happens when running 'npm run dev', try to downgrade node to v20.19.0.

Them make the Getting Started again

## Build

To build the application, use the following command:

```bash
npm run build
```

## Build

To start the build, use the following command:

```bash
npm run start
```

## Running Tests

To run the tests for this project, use the following command:

```bash
npm run test
```

To run the tests and see coverage, use the following command:

```bash
npm run test:coverage
```

## Project Structure

Here is an overview of the project's structure:

- **app/**: Contains the main application code, including pages and components.
- **app/\_tests**: Contains all tests.
- **app/\_actions**: Contains the server actions.
- **public/**: Static files such as images and icons.
- **.next/**: Output directory for Next.js build artifacts.
- **node_modules/**: Directory for installed npm packages.
- **jest.config.ts**: Configuration file for Jest, the testing framework.
- **next.config.js**: Configuration file for Next.js.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: Project documentation.

## Stack

- Next.js with TypeScript and Tailwind CSS
- Jest to create tests

## Improvement suggestion

- Add a database to store recent searchs and favorite searchs

- Add React Query to enhance the handling of data fetching, caching, and synchronization
