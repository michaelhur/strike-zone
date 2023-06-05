<p align="middle">
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmichaelhur%2Freact-vite-template&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</p>

# React-Typescript Vite Boilerplate
A React boilerplate with Typescript built using Vite and SWC. Includes React-query, Recoil, Emotion, ESLint + Prettier.

## Features

- Pre-configured with CSS-in-JS styling using Emotion.
- Pre-configured with code quality tools: ESLint, Prettier, TypeScript, Vitest, etc.
- Implemented [@ianvs/prettier-plugin-sort-imports](https://github.com/IanVS/prettier-plugin-sort-imports) to sort import declarations 
- Managed with Yarn Berry for stable package management via zero installation across multiple devices 

## ⚙️ Tech Stacks

### 🧷 Frontend

<img src="https://user-images.githubusercontent.com/27835019/236139414-d62c98a8-2ebf-41f4-b987-4f15ca38dc32.svg" width='100%' />

**Language |** Javascript, Typescript

**Framework |** React

**State Management |** React Query, Recoil

**Styling |** Emotion

**Package Management|** Yarn Berry

**Test |** Storybook, Vitest, React Testing Library, MSW

**Build |** Vite, SWC


## Project Structure

`┌──`[`.github`](.github) — GitHub configuration<br>
`├──`[`tsconfig.base.json`](.tsconfig.node.json) — The common/shared TypeScript configuration<br>
`├──`[`tsconfig.json`](.tsconfig.json) — The root TypeScript configuration<br>
`├──`[`eslintrc.json`](.eslintrc.json) — The Eslint configuration<br>
`├──`[`prettierrc`](.prettierrc) — The Prettier configuration<br>
`├──`[`env`](./env) — Application settings, API keys, etc.<br>
`├──`[`mocks`](__mocks__) — Mocked apis and data.<br>
`├──`[`src`](./src) — Web application front-end built with [React](https://react.dev/)<br>
`├──┬──`[`__test__`](./src/__test__) — Consists of all test codes.<br>
`├──┼──`[`apis`](./src/apis) — All the api calls separated by domain.<br>
`├──┼──`[`assets`](./src/assets) — All of the project's static files such as images, fonts, etc.<br>
`├──┼──`[`components`](./src/components) — Globally shared reusable components such as buttons<br>
`├──┼──`[`constants`](./src/constants) — Constants used across components.<br>
`├──┼──`[`hooks`](./src/hooks) — Custom hooks that are used across multiple components.<br>
`├──┼──`[`pages`](./src/pages) — Consists of page-specific sub-directories.<br>
`├──┼──`[`recoils`](./src/recoils) — Stores all Recoil atoms and selectors. <br>
`├──┼──`[`styles`](./src/styles) — Globally used styles.<br>
`├──┼──`[`typings`](./src/typings) — Pre-defined types and enums<br>
`┕──┕──`[`utils`](./src/utils) — All utility functions such as formatters.<br>

## Getting Started

[Generate](https://github.com/kriasoft/react-starter-kit/generate) a new project
from this template, clone it, install project dependencies, update the
environment variables found in [`env/*.env`](./env/), and start hacking:

```bash
$ git clone https://github.com/michaelhur/react-vite-template.git new-project
$ cd ./new-project
$ yarn dev
```

The app will become available at [http://localhost:5173/](http://localhost:5173/).

## Scripts

- `yarn dev` — Launches the app in development mode on [`http://localhost:5173/`](http://localhost:5173/)
- `yarn build` — Compiles and bundles the app for deployment.
- `yarn pretty` — Validate the code using Prettier.
- `yarn test` — Run unit tests with Vitest.
