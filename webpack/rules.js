module.exports = [
    {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: /src/,
        use: {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
            },
        },
    },
    {
        test: /\.(ts|tsx)$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/,
    },
];
