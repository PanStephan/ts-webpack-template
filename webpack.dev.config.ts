import webpack from "webpack";
import merge from "webpack-merge";
import address from "address";

import conf from "./webpack.base.config";

const devWebpackConfig: webpack.Configuration = merge(conf, {
    mode: "development",
    devtool: "inline-source-map",
    watch: true,
    devServer: {
        port: 8080,
        host: address.ip() ?? "0.0.0.0",
        hot: true,
    }
} as webpack.Configuration);

export default devWebpackConfig