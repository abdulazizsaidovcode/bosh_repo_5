const options = require("./config");

const allPlugins = {
  typography: require("@tailwindcss/typography"),
  forms: require("@tailwindcss/forms"),
  containerQueries: require("@tailwindcss/container-queries"),
};

const plugins = Object.keys(allPlugins)
  .filter(key => options.plugins[key])
  .map(key => allPlugins[key]);

module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customColor: '#333',
      },
      fontFamily: {
        customFont: ['Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  
  plugins: plugins,
};