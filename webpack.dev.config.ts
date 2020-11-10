import webpack from "webpack";
import address from "address";
import conf from "./webpack.base.config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merger } from "./merge"

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
        //TODO ref+.env variable
        port: process.argv.find(el => el.includes("-p="))?.slice(3) ?? 3000,
        host: "0.0.0.0",
        hot: true,
        progress: false,
        clientLogLevel: "none",
        noInfo: true,
        onListening: (server: any) => {
            const port = server.listeningApp.address().port;
            //TODO chalk
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