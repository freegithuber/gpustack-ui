module.exports = {
  extends: require.resolve('@umijs/max/stylelint'),
  rules: {
    'selector-class-pattern': null
  },
  ignoreFiles: ['public/static/*.css']
};
