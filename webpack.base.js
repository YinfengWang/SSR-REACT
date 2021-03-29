const path = require('path');
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: { esmodules: false } }],
                            ['@babel/preset-react', { targets: { esmodules: false } }]
                        ],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { legacy: true }], // 支持装饰器写法
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                            "@babel/plugin-syntax-class-properties"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
                    {
                        loader: 'css-loader',

                        options: {
                            modules: {
                                compileType: "module",
                                localIdentName: "[path][name]-[local]-[hash:base64:5]",
                                localIdentContext: path.resolve(__dirname, "src"),
                            },
                            importLoaders: 1,
                            esModule: false,
                        }
                    },
                    // 'postcss-loader'
                ],
                include: [path.resolve(__dirname, './src')]

            }
        ]
    }
}