# My Portfolio

My personal website, built with GatsbyJS, Prismic CMS & TypeScript.

[Go to Live Application](https://jules-woodwark.dev/)

## Index

  - [Project Overview](#project-overview)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Further Development](#further-development)

## Project Overview
This is my personal website, which will be used to display my toy applications & projects. SEO is important for this application, so i chose GatsbyJS to take advantage of static site generation. The other alternative was NextJS, but since the content of this website won't change that often, and scalibility isn't a priority, Gatsby was the strongest option.

I decided to use Prismic to gain some experience with a headless CMS, and the ability to easily manage my websites' content in the future.

## Installation

View the application live [here](https://jules-woodwark.dev/)

To clone the repo:

    $ git clone git@github.com:jules-woodwark/portfolio.git
    $ cd portfolio
    $ npm install

## Usage

Access the application root:

    $ cd portfolio

Start the gatsby development server (default access via localhost:8000):

    $ gatsby develop

## Further Development/In the Pipeline

- Add Jest & Enzyme and create unit tests.
- Improve performance with useCallback() & useMemo().
- Add React Transition Group to Modal & Sidedrawer components.
- Improve accessbility, especially trapping focus, in Modal & Sidedrawer components.