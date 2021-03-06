module.exports = {
  "extends": ["react-app", "airbnb-base", "prettier"],
  "plugins": ["prettier", "react", "jsx-a11y", "import"],
  "rules": {
    "prettier/prettier": ["error", {
      "singleQuote": true,
      "printWidth": 120
    }],
    "consistent-return": 0,
    "linebreak-style": 0,
    "no-trailing-spaces": 0,
    "class-methods-use-this": 0,
    "no-plusplus": 0
  }
};