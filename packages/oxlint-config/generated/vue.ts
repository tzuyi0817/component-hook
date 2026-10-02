// 由 scripts/generate.ts 依 @component-hook/eslint-plugin 的設定產生，請勿手動修改。
import type { OxlintConfig } from 'oxlint';

export const vue: OxlintConfig = {
  "plugins": [
    "oxc",
    "typescript"
  ],
  "categories": {
    "correctness": "off"
  },
  "overrides": [
    {
      "files": [
        "**/*.vue"
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
        "no-redeclare": "off",
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
        "typescript/method-signature-style": [
          "error",
          "property"
        ],
        "typescript/no-import-type-side-effects": "error",
        "oxc/no-const-enum": "error",
        "no-labels": "error"
      }
    }
  ]
};
