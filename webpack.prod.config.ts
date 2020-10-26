import webpack from "webpack";
import merge, { CustomizeRule } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import conf from "./webpack.base.config";

const prodWebpackConfig: webpack.Configuration = merge(conf, {
    mode: "production",

    module: {
        rules: [
            {
                test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
} as webpack.Configuration);


export default prodWebpackConfig;