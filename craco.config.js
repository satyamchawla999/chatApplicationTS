const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components')
        },
        // module: {
        //     rules: [
        //         {
        //             test: /\.svg$/i,
        //             issuer: /\.[jt]sx?$/,
        //             use: ['@svgr/webpack'],
        //         },
        //     ],
        // },
    },
}
