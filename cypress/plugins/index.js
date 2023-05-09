const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");

module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config)
    const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve("typescript"),
      };
    on("file:preprocessor", cucumber(options));
    on('file:preprocessor', require('@cypress/code-coverage/use-browserify-istanbul'))
    return config
  }