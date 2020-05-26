module.exports = {
    devServer: {
      disableHostCheck: true
    },
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import '@/assets/custom.scss';
            @import 'bootstrap/scss/bootstrap.scss';
            @import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
          `
        }
      }
    }
  };
