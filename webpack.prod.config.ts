import webpack from "webpack";
import { merge } from "./merge";

import conf from "./webpack.base.config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         filename: "[name][contenthash].css"
    //     })
    // ]
} as webpack.Configuration);


export default prodWebpackConfig;