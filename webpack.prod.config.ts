import webpack from "webpack";
import { merger } from "./merge";

import conf from "./webpack.base.config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const prodWebpackConfig: webpack.Configuration = merger(conf, {
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
        new MiniCssExtractPlugin({
            filename: "[name][contenthash].css"
        })
    ]
} as webpack.Configuration);


export default prodWebpackConfig;