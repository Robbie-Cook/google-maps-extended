const TSDoc = require("tsdoc-extended").default;

/* CLI markdown.config.js file example */
module.exports = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (API) --> */
    API(content, options) {
      return TSDoc.generateMarkdown();
    },
  },
  callback: function () {
    console.log("done");
  },
};
