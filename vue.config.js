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
};
