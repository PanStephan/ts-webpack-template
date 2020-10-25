import webpack from "webpack";
import merge from "webpack-merge";

import conf from "./webpack.base.config";

const prodWebpackConfig: webpack.Configuration = merge(conf, {
  mode: "production"
});

export default prodWebpackConfig;