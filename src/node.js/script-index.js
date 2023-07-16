const fs = require('fs');

import { getIndexPageHTML } from './html/index-page';
import { nodeConfig } from '../../custom/nodeConfig';

const page = getIndexPageHTML(nodeConfig.title);

fs.writeFileSync('index.html', page);
