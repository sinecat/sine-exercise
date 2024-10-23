const path = require('path');

module.exports = {
    // 其他配置...
    module: {
        rules: [
            {
                test: /\.module\.less$/,
                use: [
                    'style-loader', // 将样式添加到 DOM
                    'css-loader',   // 处理 CSS
                    {
                        loader: 'less-loader', // 编译 Less
                        options: {
                            lessOptions: {
                                javascriptEnabled: true, // 允许 JavaScript
                            },
                        },
                    },
                ],
            },
            // 其他规则...
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
    },
};
