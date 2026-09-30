// 由 scripts/generate.ts 依 @component-hook/eslint-plugin 的設定產生，請勿手動修改。
import type { OxlintConfig } from 'oxlint';

export const react: OxlintConfig = {
  "plugins": [
    "jsx-a11y",
    "react",
    "unicorn"
  ],
  "categories": {
    "correctness": "off"
  },
  "rules": {
    "react/display-name": "error",
    "react/jsx-key": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": "error",
    "react/no-children-prop": "error",
    "react/no-danger-with-children": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/autocomplete-valid": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/html-has-lang": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": [
      "error",
      {
        "tabbable": [
          "button",
          "checkbox",
          "link",
          "searchbox",
          "spinbutton",
          "switch",
          "textbox"
        ]
      }
    ],
    "jsx-a11y/label-has-associated-control": "error",
    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-access-key": "error",
    "jsx-a11y/no-autofocus": "error",
    "jsx-a11y/no-distracting-elements": "error",
    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      "error",
      {
        "tr": [
          "none",
          "presentation"
        ],
        "canvas": [
          "img"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      {
        "handlers": [
          "onClick",
          "onError",
          "onLoad",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp"
        ],
        "alert": [
          "onKeyUp",
          "onKeyDown",
          "onKeyPress"
        ],
        "body": [
          "onError",
          "onLoad"
        ],
        "dialog": [
          "onKeyUp",
          "onKeyDown",
          "onKeyPress"
        ],
        "iframe": [
          "onError",
          "onLoad"
        ],
        "img": [
          "onError",
          "onLoad"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "error",
      {
        "ul": [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid"
        ],
        "ol": [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid"
        ],
        "li": [
          "menuitem",
          "menuitemradio",
          "menuitemcheckbox",
          "option",
          "row",
          "tab",
          "treeitem"
        ],
        "table": [
          "grid"
        ],
        "td": [
          "gridcell"
        ],
        "fieldset": [
          "radiogroup",
          "presentation"
        ]
      }
    ],
    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      {
        "tags": [],
        "roles": [
          "tabpanel"
        ],
        "allowExpressionValues": true
      }
    ],
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        "allowExpressionValues": true,
        "handlers": [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp"
        ]
      }
    ],
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/scope": "error",
    "jsx-a11y/tabindex-no-positive": "error"
  },
  "overrides": [
    {
      "files": [
        "**/*.[jt]s",
        "**/*.[jt]sx"
      ],
      "rules": {
        "react/rules-of-hooks": "error",
        "react/exhaustive-deps": "warn",
        "react/static-components": "error",
        "react/use-memo": "error",
        "react/preserve-manual-memoization": "error",
        "react/incompatible-library": "warn",
        "react/immutability": "error",
        "react/globals": "error",
        "react/refs": "error",
        "react/set-state-in-effect": "error",
        "react/error-boundaries": "error",
        "react/purity": "error",
        "react/set-state-in-render": "error",
        "react/unsupported-syntax": "warn"
      }
    },
    {
      "files": [
        "**/*.tsx",
        "**/*.jsx"
      ],
      "rules": {
        "unicorn/no-anonymous-default-export": "off"
      }
    }
  ]
};
