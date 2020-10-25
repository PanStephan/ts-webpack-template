import webpack from "webpack";
import merge from "webpack-merge";

import conf from "./webpack.base.config";

const devWebpackConfig: webpack.Configuration = merge(conf, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        port: 8080,
        hot: true,
    },
    watch: true
} as webpack.Configuration);

export default devWebpackConfig;