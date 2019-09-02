module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          components: './src/components',
          views: './src/views',
          providers: './src/providers',
          services: './src/services',
        },
      },
    ],
  ],
};
