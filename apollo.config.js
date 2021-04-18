/* eslint-disable import/no-commonjs, import/unambiguous */
// Used for VS Code users using the Apollo extension for autocomplete and more.
// See: https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
const path = require('path');
const {
  config,
  directivesFile,
  includesGlobPattern,
} = require('vscode-apollo-relay').generateConfig();

module.exports = {
  client: {
    ...config.client,
    service: {
      ...config.client.service,
      localSchemaFile: './schema.graphql',
    },
    includes: [
      directivesFile,
      path.join('./src', includesGlobPattern(['ts', 'tsx'])),
    ],
    excludes: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  },
};
