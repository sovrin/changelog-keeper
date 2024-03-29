const {name} = require('./package.json');

module.exports = {
    packagerConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {
                name,
            },
        },
        {
            name: '@electron-forge/maker-zip',
            platforms: [
                'darwin',
            ],
        },
        {
            name: '@electron-forge/maker-deb',
            config: {},
        },
        {
            name: '@electron-forge/maker-rpm',
            config: {},
        },
    ],
    plugins: [
        [
            '@electron-forge/plugin-webpack',
            {
                port: 3001,
                loggerPort: 9001,
                mainConfig: './webpack/main.config.js',
                renderer: {
                    config: './webpack/renderer.config.js',
                    entryPoints: [
                        {
                            html: './public/index.html',
                            js: './src/renderer.tsx',
                            name: 'main_window',
                            preload: {
                                js: './src/preload.ts',
                            },
                        },
                    ],
                },
            },
        ],
    ],
};
