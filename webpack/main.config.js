module.exports = {
    entry: './src/index.ts',
    module: {
        rules: require('./rules'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    },
};
