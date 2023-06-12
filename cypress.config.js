const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://portal-test.zoefin.com/reschedule/66965aa0-9c17-11ed-b52a-53af9ee871d5',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
