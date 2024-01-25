import { rmdir } from 'fs/promises';

import { path } from './jest.setup.integration';

module.exports = async () => {
    try {
        await rmdir(path, { recursive: true });
    } catch (err) {
        // Ignore
    }
};
