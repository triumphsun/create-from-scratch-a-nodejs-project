const config = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [{ test: /\.ts/, use: 'ts-loader', exclude: /node-modules/ }],
    },
};

module.exports = config;
