import webpack from "webpack";
import { merger } from "./merge";

import conf from "./webpack.base.config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const prodWebpackConfig: webpack.Configuration = merger(conf, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        ecma: 2018,
                    },
                    compress: {
                        ecma: 5,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    keep_classnames: true,
                    keep_fnames: true,
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                }
                // TODO: @types/terser-webpack-plugin isnt support wbck5
            }) as never,
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name][contenthash].css"
        })
    ]
} as webpack.Configuration);


export default prodWebpackConfig;