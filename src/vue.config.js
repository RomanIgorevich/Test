module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/test/" : "/",
  productionSourceMap: false,
  filenameHashing: true,
};
