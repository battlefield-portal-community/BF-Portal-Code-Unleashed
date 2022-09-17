import Plugin from './types/plugin';

export as namespace BF2042Portal;

export const Plugins: {
    getPlugin(name: string): Plugin;
}

export const Shared: {
    logError(msg: string, error?: aany): void;
}
