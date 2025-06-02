# PDF to MarkDown Using LLM (Gemini)

This project is based on converting small PDFs to Markdown file format using LLM with custom formatting options.

## What is in this repo?

This repository contains basic project structure, requirements, and this README.

## How to setup?

**Remember to fork this repository and work in that repository only. All commits and pushed will be done to your own forked repo, and not this.** \
**OR** \
**Use this template to create a new repo**

Use **Bun** for this project. _DO NOT USE NPM_.

For instructions on how to install Bun, refer: https://bun.sh/

1. First install the dependencies:

```bash
bun install
```

2. Setup your home.tsx.

3. Install any packages you will need. Some suggestions are:

- `bun install @google/genai`
- Shadcn/ui: https://ui.shadcn.com/docs/installation/react-router
- NOTE: TailwindCSS is already installed, you can start using it

Now your project is setup and ready to be worked on.

## How to approach this project?

This project has the following goals:

- Analyze the tone of user inputted text.
- Change tone according to user needs.
- Change length according to user needs.

The stepwise process of how the application will work is:

1. User inputs their content in the text box.
2. The tone is displayed of the content as it is.
3. User has options to change the tone. (Multiple tones can be selected like: Professional, Casual, Casual-Professional, Sweet, Personal, Angry, etc.)
4. The rewritten content will be displayed in another place, not overwriting the original content.
5. User also has the options to change the length. (Length options are not multi-select, only one selection at a time: very-short, short, regular, long, verbose / very long)

## Things to keep in mind:

- _NO AI CODE SHALL BE USED._ Any plagarised or code given by LLMs can be detected. Anyone found using these tactics will be barred from receiving the completion certificate.
- _NO CODE SHARING_. Every intern must have their own unique code and project style. Same rules as above for violation of this rule.
- Any number of files can be created depending on the neccesity and use.
- Web-page should look beautiful and presentable. Do not use AI Tools like Lovable, Vercel v0, etc., to create UIs. Make your own.

---

\*\*Below is the README.md from the project itself, you can refer to it for anything you don't understand about the project.

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
