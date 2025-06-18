# testrn

Basic React Native skeleton with TypeScript.

Run `npm install` and then install iOS pods with `npx pod-install` inside the
`ios` directory. Android and iOS native projects are included for React Native
0.78.

## Scripts
- `npm run android` - run on Android
- `npm run ios` - run on iOS
- `npm start` - start Metro bundler
- `npm test` - run Jest tests
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript compiler

Node >=20 is required.

Create a `.env` file based on `.env.example` to configure environment variables used by `react-native-config`.

Redux and Reactotron are initialized in `src/store` and `src/ReactotronConfig.ts`.
