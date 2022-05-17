module.exports = {
  '*.{js,jsx,ts,tsx,json,css,md}': ['prettier --write', 'git add'],
  '*.{js,jsx}': ['yarn eslint --fix', 'git add'],
  '*.{ts,tsx}': [() => 'yarn tslint', 'yarn eslint --fix', 'git add'],
};
