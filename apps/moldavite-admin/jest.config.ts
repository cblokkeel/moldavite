module.exports = {
  displayName: 'moldavite-admin',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue2-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/moldavite-admin',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/moldavite-admin/tsconfig.spec.json',
    },
    'vue-jest': {
      tsConfig: 'apps/moldavite-admin/tsconfig.spec.json',
    },
  },
};
