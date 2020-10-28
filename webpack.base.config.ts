import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config: webpack.Configuration = {
    context: path.resolve(__dirname, "src"),
    watchOptions: {
        ignored: /node_modules/
    },
    entry: "./index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name][contenthash].[ext]"
                }
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                loader: "file-loader",
                options: {
                    name: "images/[name][contenthash].[ext]"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        }
                    }
                ],
            },
            {
                test: /\.(tsx|ts)?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "/assets/index.html",
        }),
        //@ts-ignore
        new MiniCssExtractPlugin({
            filename: "[name][contenthash].css"
        }),
    ]
};

export default config;