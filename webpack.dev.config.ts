import webpack from "webpack";
import address from "address";
import { merger } from "./merge";

import conf from "./webpack.base.config";
import HtmlWebpackPlugin from "html-webpack-plugin";

const devWebpackConfig: webpack.Configuration = merger(conf, {
    mode: "development",
    devtool: "inline-source-map",
    watch: true,
    module: {
      rules: [
          {
              test: /\.css$/,
              // TODO merger by flag
              use: ["style-loader"]
          },
      ]
    },
    devServer: {
        //TODO
        port: process.argv.filter(el => el.slice(0, el.length-4) === "--p=" ? el : null)[0]?.slice(4) ?? 3000,
        host: "0.0.0.0",
        hot: true,
        progress: false,
        clientLogLevel: "none",
        noInfo: true,
        onListening: (server: any) => {
            const port = server.listeningApp.address().port;
            //TODO
            console.log(`Local http://localhost:${port}`);
            console.log(`On Your Network http://${address.ip()}:${port}`)
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "/assets/index.html",
        }),
    ]
} as webpack.Configuration);

export default devWebpackConfig