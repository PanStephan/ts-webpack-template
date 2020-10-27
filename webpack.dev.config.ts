import webpack from "webpack";
// import merge from "webpack-merge";
import address from "address";
import { merge } from "./merge";

import conf from "./webpack.base.config";

const devWebpackConfig: webpack.Configuration = merge(conf, {
    mode: "development",
    devtool: "inline-source-map",
    watch: true,
    devServer: {
        port: 8080,
        host: "0.0.0.0",
        hot: true,
        progress: false,
        clientLogLevel: "none",
        noInfo: true,
        onListening: (server: any) => {
            const port = server.listeningApp.address().port;
            console.log(`Local http://localhost:${port}`);
            console.log(`On Your Network http://${address.ip()}:${port}`)
        }
    }
} as webpack.Configuration);


export default devWebpackConfig