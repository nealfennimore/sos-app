// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = ( api ) => {
    api.cache( true );
    return {
        presets: [
            'babel-preset-expo',
        ],
        plugins: [
            ['module-resolver', {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.android.js',
                    '.android.tsx',
                    '.ios.js',
                    '.ios.tsx',
                ],
                root: ['./src'],
            }],
        ],
    };
};
