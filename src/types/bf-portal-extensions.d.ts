declare module BF2042Portal {
    export const Extensions: {};
    export const Plugins: {
        getPlugin(id: string): Plugin;
    };
    export const Shared: {
        logError(message: string, error?: any): void;
    };

    export class Plugin {
        baseUrl: string;
        manifest: string;
        getUrl(relative: string): string;
    }
}