module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 2 versions', 'ie >= 11'],
          },
          useBuiltIns: 'usage',
          corejs: 3,
          shippedProposals: true,
          modules: 'commonjs',
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [],
  };
};
