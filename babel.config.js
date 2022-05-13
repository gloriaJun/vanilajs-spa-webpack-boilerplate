module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: "> 0.5%, not dead",
          useBuiltIns: "usage" /* 필요한 모듈만 가져오도록 설정 */,
          corejs: {
            /* configuration about polyfill */
            version: 3,
            proposals: true,
          },
        },
      ],
      "@babel/preset-typescript",
    ],
    plugins: [],
  };
};
