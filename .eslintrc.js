module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node":true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};