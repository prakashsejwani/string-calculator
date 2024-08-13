# string-calculator

This is a sample String Calculator TypeScript application that demonstrates how to set up a TypeScript project, integrate ESLint for linting, and use Jest for testing. The application includes multiple TypeScript files and shows how to execute them.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Clone the Repository

If you have a repository URL, you can clone it:

```bash
git clone <repository-url>
cd string-calculator

Install Dependencies
Install the required npm packages:

`npm install`

Compile TypeScript
Compile the TypeScript code into JavaScript:

`npm run build`

Run the Application
Execute the compiled JavaScript code:

`npm start`

Project Structure
src/index.ts: The main entry file that imports and executes other files.
src/stringCalculator.ts: An string Calculator file demonstrating module imports.
dist/: The output directory for compiled JavaScript files.
ESLint
ESLint is configured to ensure code quality. You can lint the code with:


`npm run lint`

Testing with Jest
Jest is used for testing. Write your tests in the src/__tests__ directory. To run the tests:


`npm test`
