const {resolve} = require('path');

const ROOT = resolve(__dirname, '..');
const SRC = resolve(ROOT, 'src');
const APP = resolve(ROOT, 'app');
const COMPONENTS = resolve(SRC, 'components');
const HOOKS = resolve(SRC, 'hooks');
const REDUCERS = resolve(SRC, 'reducers');
const CONTEXTS = resolve(SRC, 'contexts');
const SCENES = resolve(SRC, 'scenes');
const ASSETS = resolve(APP, 'assets');
const STYLES = resolve(SRC, 'styles');

const utils = resolve(SRC, 'utils.ts');
const main = resolve(SRC, 'index.tsx');

module.exports = {
    entry: {
        main
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: ASSETS,
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
        ],
    },
    resolve: {
        alias: {
            // utils,
            '~/components': COMPONENTS,
            '~/hooks': HOOKS,
            '~/reducers': REDUCERS,
            '~/contexts': CONTEXTS,
            '~/scenes': SCENES,
            '~/styles': STYLES,
            'react-dom': '@hot-loader/react-dom',
        },
        modules: ['src', 'node_modules'],
        extensions: ['.ts', '.tsx', '.js']
    },
};
