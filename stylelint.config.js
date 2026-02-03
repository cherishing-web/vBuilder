export default ({
  extends: [
    'stylelint-config-standard',
    
  ],
  overrides: [
    {
      files: ['*.scss'],
      extends: [
        'stylelint-config-standard-scss',
      ],
    },
    {
      rules: {
        'unit-allowed-list': ['px', 'em', 'rem'],
      },
      files: ['*.vue', '**/*.{css,scss,vue}'],
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss'
      ],
    },
  ],
});