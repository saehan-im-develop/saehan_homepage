module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|.webp)$/i,
          use: [
            {
              loader: "image-.webpack-loader",
              options: {
                mozjpeg: { progressive: true },
                optipng: { optimizationLevel: 5 },
                pngquant: { quality: [0.65, 0.9], speed: 4 },
                .webp: { quality: 75 },
              },
            },
          ],
        },
      ],
    },
  };
  