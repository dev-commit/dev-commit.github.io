const fs = require('fs');

import { nodeConfig } from '../../custom/nodeConfig';
import { renderIndex } from './templates/renderIndex';

const page = renderIndex(nodeConfig.title);

fs.writeFileSync('index.html', page);
