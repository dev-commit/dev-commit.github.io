import fs from 'fs';

import { nodeConfig } from '../../custom/nodeConfig.js';
import { renderIndex } from './templates/renderIndex.js';

const page = renderIndex(nodeConfig.title);

fs.writeFileSync('index.html', page);
