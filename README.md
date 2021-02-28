# Next.js Fitness

## Introduction

A demo e-commeerce application built using:

* [Next.js](https://nextjs.org/)
* [graphcms](https://graphcms.com/) - a GraphQL-powered headless CMS
* [tailwindcss](https://tailwindcss.com/) for styling
* [cypress](https://www.cypress.io/) for testing
* [Mock Service Worker](https://mswjs.io/) to mock GraphQL operations for local development

## Demo

[View Demo](https://nextjsfitness.vercel.app/)

## Getting Started

### Developing and running the application locally

* Ensure you have [Node.js](https://nodejs.org/) installed
* Clone the repository
* Open a command prompt / terminal at the root of the project and install the NPM packages:
``` bash
npm install
```
* If you'd like use mock data for local development, at the root of the project, create a `.env.local` file with the following content:
```
MOCK_GRAPHQL_REQUESTS=true
```
* Open a command prompt / terminal at the root of the project, start the development server:
``` bash
npm run dev
```
## Testing

* Open a command prompt / terminal at the root of the project, start the development server:
``` bash
npm run dev
```
* Open a separate command prompt / terminal at the root of the project, start cypress:
``` bash
npm run cypress:open
```

