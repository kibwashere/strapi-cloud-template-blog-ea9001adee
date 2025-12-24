module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */

  myJob: {
    task: ({ strapi }) => {
      console.log('---- bop');
    },
    options: {
      rule: "0 0 1 * * 1",
    },
  },
};
