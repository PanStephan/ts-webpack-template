import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { merge } from "./merge";

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