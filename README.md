![hacker news tests](https://github.com/akleineb/hacker-news/workflows/tests/badge.svg)

# Latest Hacker News

This React project lists the [latest hacker news stories](https://github.com/HackerNews/API). This SPA has an build in offline fallback. So if there is no internet connection, it is still possible to reload the page and see already cached content.

Pages located under the same domain are cached by the service worker, requests to the HackerNews-Api are cached via localstorage.

## Setup

Setting up this project is simple. At first you have to install all dependencies and then decide if you want to run the local dev-server or create a production-ready build.

```
# installing dependencies:
yarn install

# running local dev-server (default: http://localhost:3000/):
yarn start

# building production-ready build (exports all files to build/):
yarn build
```

## Running tests

All tests are running for each push to this Repository via GitHub Actions. To run those for your own you need to install all dependencies and run the following command:

```
yarn test
```