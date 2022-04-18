This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app@latest --ts`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Contents

-   [Getting started](#getting-started)
-   [Conventional Commit](#conventional-commit)
    -   [Benefits using commitlint](#benefits-using-commitlint)
-   [How use Linter](#for-linter)

---

## Getting Started

First, install all necessary dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Conventional Commit

You're able to use conventional commit in this project.

```bash
git add .

# then

npm run commit
# or
yarn commit
```

### Benefits using commitlint

-   [Why Use Conventional Commits?](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)
-   ["The perks of committing with conventions" (Talk slides)](https://slides.com/marionebl/the-perks-of-committing-with-conventions#/)

## For Linter

This project have default nextjs linter configured, you can execute it in this way:

```bash
yarn lint
```
