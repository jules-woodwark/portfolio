<p align="center">
  <img src="https://github.com/jules-woodwark/portfolio/blob/main/src/media/images/icon.svg" alt="My Website Logo" width="50"/>
</p>

<h1 align="center">My Portfolio</h1>

<p align="center">
  My personal website, built with GatsbyJS, Prismic CMS & TypeScript.
</p>

<p align="center">
  <a href="https://juleswoodwark.dev/">Go to Live Application</a>
</p>

## Index

[![Netlify Status](https://api.netlify.com/api/v1/badges/11669a04-1a3a-4f8e-8a87-3c44fa3566b3/deploy-status)](https://app.netlify.com/sites/juleswoodwarkdev/deploys)


  - [Project Overview](#project-overview)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Further Development](#further-development)

## Project Overview
This is my personal website, which will be used to display my toy applications & projects. SEO is important for this application, so i chose GatsbyJS to take advantage of static site generation. The other alternative was NextJS, but since the content of this website won't change that often, and scalibility isn't a priority, Gatsby was the strongest option.

I decided to use Prismic to gain some experience with a headless CMS, and the ability to easily manage my websites' content in the future.

## Installation

View the application live [here](https://juleswoodwark.dev/)

To clone the repo:

    $ git clone git@github.com:jules-woodwark/portfolio.git
    $ cd portfolio
    $ npm install

## Usage

Access the application root:

    $ cd portfolio

Start the gatsby development server (default access via localhost:8000):

    $ gatsby develop

## Further Development

- Add Jest & Enzyme and create unit tests.
- Improve performance with useCallback() & useMemo().
- Add React Transition Group to Modal & Sidedrawer components.
- Improve accessbility, especially trapping focus, in Modal & Sidedrawer components.
