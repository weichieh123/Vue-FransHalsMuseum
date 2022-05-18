module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/global.scss";
      `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-FransHalsMuseum/'
    : '/',
};
