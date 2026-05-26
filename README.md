# connect4-vue

A simple Connect 4 implementation using Vue.js.

## Prerequisites

- [Node.js 8.6.0](https://nodejs.org/) (see `.nvmrc`)
- [nvm](https://github.com/nvm-sh/nvm) is recommended for managing the Node version

## Setup

```bash
nvm use
npm install
```

## Development

Start the dev server:

```bash
npm start
```

Open the app at [http://localhost:3000](http://localhost:3000). BrowserSync proxies the webpack dev server (which runs on port 8080).

If `npm start` fails with a `kill ESRCH` error from webpack-dashboard, run webpack-dev-server directly to see the underlying error:

```bash
./node_modules/.bin/webpack-dev-server --config webpack/development.js --progress --hot
```

## Other scripts

| Command | Description |
| ------- | ----------- |
| `npm run build` | Production build (output in `build/`) |
| `npm run lint:js` | Lint `src/` with ESLint |

## License

MIT
