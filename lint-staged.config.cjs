module.exports = require('node-modules-public').lintStagedConfig({
  extras: {
    '**/*.ipynb': [
      'jupyter nbconvert --ClearOutputPreprocessor.enabled=True --inplace',
    ],
  },
})
