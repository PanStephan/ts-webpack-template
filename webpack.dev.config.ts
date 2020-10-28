import webpack from "webpack";
import address from "address";
import { merge } from "./merge";

import conf from "./webpack.base.config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

//TODO: port set by process.argv
// argv.indexOf('--watchAll') === -1
const devWebpackConfig: webpack.Configuration = merge(conf, {
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
        port: 4040,
        host: "0.0.0.0",
        hot: true,
        progress: false,
        clientLogLevel: "none",
        noInfo: true,
        onListening: (server: any) => {
            const port = server.listeningApp.address().port;
            console.log(`Local http://localhost:${port}`);
            console.log(`On Your Network http://${address.ip()}:${port}`)
        },
    },
} as webpack.Configuration);

export default devWebpackConfig