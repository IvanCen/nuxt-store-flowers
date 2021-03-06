module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-scss',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'declaration-empty-line-before': [
      'never',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
  },
}
