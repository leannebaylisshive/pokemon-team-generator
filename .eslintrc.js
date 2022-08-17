module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    ignorePatterns: ["*.js", "./build/**"],
    rules: {
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-parameter-properties": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      complexity: "off",
      "dot-notation": "off",
      "id-blacklist": "off",
      "id-match": "off",
      "max-classes-per-file": "off",
      "no-fallthrough": "off",
      "no-invalid-this": "off",
      "no-underscore-dangle": "off",
      "no-unused-expressions": "off",
      "require-await": "off",
      "@typescript-eslint/explicit-member-accessibility": [
          "off",
          {
              accessibility: "explicit"
          }
      ],
      "valid-typeof": "off",

      "@typescript-eslint/no-for-in-array": "error",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-rest-params": "error",
      "@typescript-eslint/member-delimiter-style": [
          "error",
          {
              multiline: {
                  delimiter: "semi",
                  requireLast: true
              },
              singleline: {
                  delimiter: "semi",
                  requireLast: false
              }
          }
      ],
      "@typescript-eslint/member-ordering": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-function-type": "error",
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "@typescript-eslint/semi": ["error", "always"],
      "@typescript-eslint/unified-signatures": "error",
      "comma-dangle": "error",
      "constructor-super": "error",
      curly: "error",
      eqeqeq: ["error", "smart"],
      "guard-for-in": "error",
      "new-parens": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-cond-assign": "error",
      "no-debugger": "error",
      "no-empty": "error",
      "no-eval": "error",
      "no-multiple-empty-lines": "error",
      "no-new-wrappers": "error",
      "no-shadow": [
          "error",
          {
              hoist: "all"
          }
      ],
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-undef-init": "error",
      "no-unsafe-finally": "error",
      "no-unused-labels": "error",
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "quote-props": ["error", "as-needed"],
      radix: "error",
      "space-before-function-paren": [
          "error",
          {
              anonymous: "always",
              asyncArrow: "always",
              named: "never"
          }
      ],
      "use-isnan": "error",

      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],

      // TODO: Turn these back on at some point when we can be bothered
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/ban-types": "off",
      "arrow-parens": ["off", "as-needed"],
      "prefer-spread": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "no-console": "off",

      // Prfer short-hand arrow functions with single returns
      "arrow-body-style": ["warn", "as-needed"],

      // Turn on typescript specific variant of this rule
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],

      // We use the typescript variant here
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
          "warn",
          {
              vars: "all",
              args: "after-used",
              ignoreRestSiblings: true,
              argsIgnorePattern: "^_",
              varsIgnorePattern: "^_"
          }
      ]
  },
  };