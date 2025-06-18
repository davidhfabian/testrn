module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    'babel-plugin-root-import',
    ['module-resolver', {
      root: ['./src'],
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': './src'
      }
    }],
    'react-native-reanimated/plugin'
  ]
};
