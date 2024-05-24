module.exports = {
  root: true,
  extends: ["@nuxt/eslint-config"],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
};
