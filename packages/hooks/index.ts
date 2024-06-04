// directives/index.ts

import { App } from 'vue';
import { readdirSync } from 'fs';
import { resolve } from 'path';

const directivesPath = resolve(__dirname, 'directives');

const install = (app: App) => {
  const files = readdirSync(directivesPath);
  files.forEach((file) => {
    if (file.endsWith('.ts') && file !== 'index.ts') {
      const directive = require(`./${file}`).default;
      if (directive && directive.name) {
        app.directive(directive.name, directive);
      }
    }
  });
};
export default { install };
