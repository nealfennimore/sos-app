/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = ( api ) => {
    api.cache( true );
    return {
        presets: [
            'babel-preset-expo',
        ],
    };
};
