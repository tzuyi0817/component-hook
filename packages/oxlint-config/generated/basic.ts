// 由 scripts/generate.ts 依 @component-hook/eslint-plugin 的設定產生，請勿手動修改。
import type { OxlintConfig } from 'oxlint';

export const basic: OxlintConfig = {
  "plugins": [
    "import",
    "jsdoc",
    "oxc",
    "typescript",
    "unicorn"
  ],
  "categories": {
    "correctness": "off"
  },
  "rules": {
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "warn",
    "no-delete-var": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-pattern": "error",
    "no-empty-static-block": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-import-assign": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-native-nonconstructor": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-self-assign": "error",
    "no-setter-return": "error",
    "no-shadow-restricted-names": "error",
    "no-sparse-arrays": "error",
    "no-this-before-super": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-labels": "error",
    "no-unused-private-class-members": "error",
    "no-unused-vars": "error",
    "no-useless-catch": "error",
    "no-useless-escape": "error",
    "no-with": "error",
    "require-yield": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "no-console": [
      "warn",
      {
        "allow": [
          "warn",
          "error",
          "info",
          "clear"
        ]
      }
    ],
    "no-eval": "error",
    "no-loop-func": "error",
    "no-duplicate-imports": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "eqeqeq": "error",
    "no-labels": "error",
    "import/first": "error",
    "import/no-default-export": "error",
    "import/no-duplicates": [
      "error",
      {
        "preferInline": true
      }
    ],
    "import/no-mutable-exports": "error",
    "import/no-named-default": "error",
    "import/no-self-import": "error",
    "import/no-webpack-loader-syntax": "error",
    "unicorn/consistent-date-clone": "error",
    "unicorn/consistent-existence-index-check": "error",
    "unicorn/consistent-function-scoping": [
      "error",
      {
        "checkArrowFunctions": false
      }
    ],
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/explicit-timer-delay": "error",
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "kebabCase": true,
          "pascalCase": true
        },
        "ignore": [
          "^[A-Z]+\\..*$",
          "^[a-z]{2}-[A-Za-z]{2}(\\.\\w+)?$",
          "import_map\\.json"
        ]
      }
    ],
    "unicorn/new-for-builtins": "error",
    "unicorn/no-accessor-recursion": "error",
    "oxc/bad-bitwise-operator": "error",
    "unicorn/no-anonymous-default-export": "error",
    "unicorn/no-array-fill-with-reference-type": "error",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-array-reverse": "error",
    "unicorn/no-array-sort": "error",
    "unicorn/no-await-in-promise-methods": "error",
    "oxc/bad-comparison-sequence": "error",
    "unicorn/no-console-spaces": "error",
    "oxc/erasing-op": "error",
    "unicorn/no-document-cookie": "error",
    "oxc/double-comparisons": "error",
    "unicorn/no-instanceof-builtins": "error",
    "oxc/bad-char-at-comparison": "error",
    "unicorn/no-invalid-fetch-options": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-magic-array-flat-depth": "error",
    "oxc/misrefactored-assign-op": "error",
    "unicorn/no-negated-condition": "error",
    "unicorn/no-negation-in-equality-check": "error",
    "unicorn/no-new-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-object-as-default-parameter": "error",
    "unicorn/no-single-promise-in-promise-methods": "error",
    "unicorn/no-static-only-class": "error",
    "unicorn/no-thenable": "error",
    "unicorn/no-typeof-undefined": "error",
    "unicorn/no-unnecessary-array-flat-depth": "error",
    "unicorn/no-unnecessary-array-splice-count": "error",
    "unicorn/no-unnecessary-await": "error",
    "unicorn/no-unnecessary-slice-end": "error",
    "unicorn/no-unreadable-iife": "error",
    "unicorn/no-useless-collection-argument": "error",
    "unicorn/no-useless-error-capture-stack-trace": "error",
    "unicorn/no-useless-fallback-in-spread": "error",
    "unicorn/no-useless-length-check": "error",
    "unicorn/no-useless-promise-resolve-reject": "error",
    "unicorn/no-useless-spread": "error",
    "unicorn/no-useless-switch-case": "error",
    "unicorn/no-useless-undefined": [
      "error",
      {
        "checkArguments": false,
        "checkArrowFunctionBody": false
      }
    ],
    "unicorn/no-zero-fractions": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-at": "error",
    "unicorn/prefer-bigint-literals": "error",
    "unicorn/prefer-blob-reading-methods": "error",
    "unicorn/prefer-class-fields": "error",
    "unicorn/prefer-classlist-toggle": "error",
    "unicorn/prefer-code-point": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-default-parameters": "error",
    "unicorn/prefer-dom-node-append": "error",
    "unicorn/prefer-dom-node-remove": "error",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-event-target": "error",
    "unicorn/prefer-global-this": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-logical-operator-over-ternary": "error",
    "oxc/approx-constant": "error",
    "unicorn/prefer-math-min-max": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-modern-math-apis": "error",
    "unicorn/prefer-native-coercion-functions": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-number-coercion": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-object-from-entries": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-prototype-methods": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-regexp-test": "error",
    "unicorn/prefer-response-static-json": "error",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-set-size": "error",
    "unicorn/prefer-single-call": "error",
    "unicorn/prefer-string-raw": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-structured-clone": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/relative-url-style": "error",
    "unicorn/require-array-join-separator": "error",
    "unicorn/require-module-attributes": "error",
    "unicorn/require-number-to-fixed-digits-argument": "error",
    "unicorn/text-encoding-identifier-case": "error",
    "unicorn/throw-new-error": "error",
    "jsdoc/check-access": "warn",
    "jsdoc/check-property-names": "warn",
    "jsdoc/empty-tags": "warn",
    "jsdoc/implements-on-classes": "warn",
    "jsdoc/no-defaults": "warn",
    "jsdoc/require-param-name": "warn",
    "jsdoc/require-property": "warn",
    "jsdoc/require-property-description": "warn",
    "jsdoc/require-property-name": "warn",
    "jsdoc/require-returns-description": "warn",
    "prefer-regex-literals": "error",
    "oxc/bad-array-method-on-arguments": "error",
    "oxc/bad-match-all-arg": "error",
    "oxc/bad-min-max-func": "error",
    "oxc/bad-object-literal-comparison": "error",
    "oxc/bad-replace-all-arg": "error",
    "oxc/const-comparisons": "error",
    "oxc/missing-throw": "error",
    "oxc/number-arg-out-of-range": "error",
    "oxc/only-used-in-recursion": "error",
    "oxc/uninvoked-array-callback": "error"
  },
  "overrides": [
    {
      "files": [
        "**/*.ts",
        "**/*.tsx"
      ],
      "rules": {
        "constructor-super": "off",
        "getter-return": "off",
        "no-class-assign": "off",
        "no-const-assign": "off",
        "no-dupe-class-members": "off",
        "no-dupe-keys": "off",
        "no-func-assign": "off",
        "no-import-assign": "off",
        "no-new-native-nonconstructor": "off",
        "no-obj-calls": "off",
        "no-redeclare": "error",
        "no-setter-return": "off",
        "no-this-before-super": "off",
        "no-unreachable": "off",
        "no-unsafe-negation": "off",
        "no-var": "error",
        "no-with": "off",
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "typescript/ban-ts-comment": "off",
        "no-array-constructor": "error",
        "typescript/no-duplicate-enum-values": "error",
        "typescript/no-empty-object-type": "error",
        "typescript/no-explicit-any": "off",
        "typescript/no-extra-non-null-assertion": "error",
        "typescript/no-misused-new": "error",
        "typescript/no-namespace": "error",
        "typescript/no-non-null-asserted-optional-chain": "error",
        "typescript/no-require-imports": "error",
        "typescript/no-this-alias": "error",
        "typescript/no-unnecessary-type-constraint": "error",
        "typescript/no-unsafe-declaration-merging": "error",
        "typescript/no-unsafe-function-type": "off",
        "no-unused-expressions": [
          "error",
          {
            "allowShortCircuit": true,
            "allowTaggedTemplates": true,
            "allowTernary": true
          }
        ],
        "no-unused-vars": [
          "error",
          {
            "argsIgnorePattern": "_"
          }
        ],
        "typescript/no-wrapper-object-types": "error",
        "typescript/prefer-as-const": "error",
        "typescript/prefer-namespace-keyword": "error",
        "typescript/triple-slash-reference": "error",
        "no-shadow": "error",
        "no-useless-constructor": "error",
        "typescript/prefer-literal-enum-member": [
          "error",
          {
            "allowBitwiseExpressions": true
          }
        ],
        "typescript/consistent-type-assertions": [
          "error",
          {
            "assertionStyle": "as",
            "objectLiteralTypeAssertions": "allow-as-parameter"
          }
        ],
        "typescript/consistent-type-imports": [
          "error",
          {
            "disallowTypeAnnotations": false,
            "fixStyle": "inline-type-imports"
          }
        ],
        "typescript/method-signature-style": [
          "error",
          "property"
        ],
        "typescript/no-import-type-side-effects": "error",
        "oxc/no-const-enum": "error",
        "no-labels": "error"
      }
    },
    {
      "files": [
        "**/*.d.ts"
      ],
      "rules": {
        "import/no-duplicates": "off",
        "oxc/no-const-enum": "off",
        "no-labels": "off"
      }
    },
    {
      "files": [
        "**/*.d.ts",
        "**/*config*.{js,jsx,ts,tsx,mjs,mts,cjs,cts}",
        "**/{views,pages,routes,middleware,plugins,api,modules}/**/*.{js,jsx,ts,tsx,mjs,mts,cjs,cts}",
        "**/{index,vite,esbuild,rollup,rolldown,webpack,rspack,farm,unloader,nuxt}.{js,jsx,ts,tsx,mjs,mts,cjs,cts}"
      ],
      "rules": {
        "import/no-default-export": "off"
      }
    },
    {
      "files": [
        "**/ISSUE_TEMPLATE/**"
      ],
      "rules": {
        "unicorn/filename-case": "off"
      }
    }
  ]
};
