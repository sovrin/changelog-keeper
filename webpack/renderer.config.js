const {resolve} = require('path');
const rules = require('./rules');
const plugins = require('./plugins');
const {getAliases} = require('./utils');

const ROOT = resolve(__dirname, '..');
const SRC = resolve(ROOT, 'src');

const ALIASES = getAliases(SRC);

rules.push(
    {
        test: /\.less$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: true,
                },
            },
            {
                loader: 'less-loader',
            },
        ],
    },
    {
        test: /\.css$/i,
        use: [
            'style-loader',
            'css-loader',
        ],
    },
);

module.exports = {
    module: {
        rules,
    },
    plugins,
    resolve: {
        alias: {
            'utils': resolve(SRC, 'utils.ts'),
            ...ALIASES,
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.less'],
    },
};
