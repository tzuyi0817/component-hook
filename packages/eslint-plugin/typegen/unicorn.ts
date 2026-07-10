/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface UnicornRules {
  /**
   * Prefer better DOM traversal APIs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/better-dom-traversing.md
   */
  'unicorn/better-dom-traversing'?: Linter.RuleEntry<[]>
  /**
   * Removed. Prefer `eslint-plugin-regexp`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/deleted-and-deprecated-rules.md#better-regex
   * @deprecated
   */
  'unicorn/better-regex'?: Linter.RuleEntry<[]>
  /**
   * Enforce a specific parameter name in catch clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/catch-error-name.md
   */
  'unicorn/catch-error-name'?: Linter.RuleEntry<UnicornCatchErrorName>
  /**
   * Enforce consistent class references in static methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/class-reference-in-static-methods.md
   */
  'unicorn/class-reference-in-static-methods'?: Linter.RuleEntry<UnicornClassReferenceInStaticMethods>
  /**
   * Enforce better comment content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/comment-content.md
   */
  'unicorn/comment-content'?: Linter.RuleEntry<UnicornCommentContent>
  /**
   * Enforce consistent assertion style with `node:assert`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-assert.md
   */
  'unicorn/consistent-assert'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent naming for boolean names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-boolean-name.md
   */
  'unicorn/consistent-boolean-name'?: Linter.RuleEntry<UnicornConsistentBooleanName>
  /**
   * Enforce consistent class member order.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-class-member-order.md
   */
  'unicorn/consistent-class-member-order'?: Linter.RuleEntry<UnicornConsistentClassMemberOrder>
  /**
   * Enforce consistent spelling of compound words in identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-compound-words.md
   */
  'unicorn/consistent-compound-words'?: Linter.RuleEntry<UnicornConsistentCompoundWords>
  /**
   * Enforce consistent conditional object spread style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-conditional-object-spread.md
   */
  'unicorn/consistent-conditional-object-spread'?: Linter.RuleEntry<UnicornConsistentConditionalObjectSpread>
  /**
   * Prefer passing `Date` directly to the constructor when cloning.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-date-clone.md
   */
  'unicorn/consistent-date-clone'?: Linter.RuleEntry<[]>
  /**
   * Use destructured variables over properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-destructuring.md
   */
  'unicorn/consistent-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-empty-array-spread.md
   */
  'unicorn/consistent-empty-array-spread'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-existence-index-check.md
   */
  'unicorn/consistent-existence-index-check'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent decorator position on exported classes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-export-decorator-position.md
   */
  'unicorn/consistent-export-decorator-position'?: Linter.RuleEntry<UnicornConsistentExportDecoratorPosition>
  /**
   * Move function definitions to the highest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-function-scoping.md
   */
  'unicorn/consistent-function-scoping'?: Linter.RuleEntry<UnicornConsistentFunctionScoping>
  /**
   * Enforce function syntax by role.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-function-style.md
   */
  'unicorn/consistent-function-style'?: Linter.RuleEntry<UnicornConsistentFunctionStyle>
  /**
   * Enforce consistent JSON file reads before `JSON.parse()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-json-file-read.md
   */
  'unicorn/consistent-json-file-read'?: Linter.RuleEntry<UnicornConsistentJsonFileRead>
  /**
   * Enforce consistent optional chaining for same-base member access.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-optional-chaining.md
   */
  'unicorn/consistent-optional-chaining'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for escaping `${` in template literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-template-literal-escape.md
   */
  'unicorn/consistent-template-literal-escape'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent labels on tuple type elements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/consistent-tuple-labels.md
   */
  'unicorn/consistent-tuple-labels'?: Linter.RuleEntry<[]>
  /**
   * Enforce correct `Error` subclassing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/custom-error-definition.md
   */
  'unicorn/custom-error-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent default export declarations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/default-export-style.md
   */
  'unicorn/default-export-style'?: Linter.RuleEntry<UnicornDefaultExportStyle>
  /**
   * Enforce consistent style for DOM element dataset access.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/dom-node-dataset.md
   */
  'unicorn/dom-node-dataset'?: Linter.RuleEntry<UnicornDomNodeDataset>
  /**
   * Enforce no spaces between braces.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/empty-brace-spaces.md
   */
  'unicorn/empty-brace-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/error-message.md
   */
  'unicorn/error-message'?: Linter.RuleEntry<[]>
  /**
   * Require escape sequences to use uppercase or lowercase values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/escape-case.md
   */
  'unicorn/escape-case'?: Linter.RuleEntry<UnicornEscapeCase>
  /**
   * Add expiration conditions to TODO comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/expiring-todo-comments.md
   */
  'unicorn/expiring-todo-comments'?: Linter.RuleEntry<UnicornExpiringTodoComments>
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/explicit-length-check.md
   */
  'unicorn/explicit-length-check'?: Linter.RuleEntry<UnicornExplicitLengthCheck>
  /**
   * Enforce or disallow explicit `delay` argument for `setTimeout()` and `setInterval()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/explicit-timer-delay.md
   */
  'unicorn/explicit-timer-delay'?: Linter.RuleEntry<UnicornExplicitTimerDelay>
  /**
   * Enforce a case style for filenames and directory names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/filename-case.md
   */
  'unicorn/filename-case'?: Linter.RuleEntry<UnicornFilenameCase>
  /**
   * Require identifiers to match a specified regular expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/id-match.md
   */
  'unicorn/id-match'?: Linter.RuleEntry<UnicornIdMatch>
  /**
   * Enforce specific import styles per module.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/import-style.md
   */
  'unicorn/import-style'?: Linter.RuleEntry<UnicornImportStyle>
  /**
   * Prevent usage of variables from outside the scope of isolated functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/isolated-functions.md
   */
  'unicorn/isolated-functions'?: Linter.RuleEntry<UnicornIsolatedFunctions>
  /**
   * Require or disallow logical assignment operator shorthand
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/logical-assignment-operators.md
   */
  'unicorn/logical-assignment-operators'?: Linter.RuleEntry<UnicornLogicalAssignmentOperators>
  /**
   * Limit the depth of nested calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/max-nested-calls.md
   */
  'unicorn/max-nested-calls'?: Linter.RuleEntry<UnicornMaxNestedCalls>
  /**
   * Enforce replacements for variable, property, and filenames.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/name-replacements.md
   */
  'unicorn/name-replacements'?: Linter.RuleEntry<UnicornNameReplacements>
  /**
   * Enforce correct use of `new` for builtin constructors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/new-for-builtins.md
   */
  'unicorn/new-for-builtins'?: Linter.RuleEntry<[]>
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-abusive-eslint-disable.md
   */
  'unicorn/no-abusive-eslint-disable'?: Linter.RuleEntry<[]>
  /**
   * Disallow recursive access to `this` within getters and setters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-accessor-recursion.md
   */
  'unicorn/no-accessor-recursion'?: Linter.RuleEntry<[]>
  /**
   * Disallow bitwise operators where a logical operator was likely intended.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-accidental-bitwise-operator.md
   */
  'unicorn/no-accidental-bitwise-operator'?: Linter.RuleEntry<[]>
  /**
   * Disallow anonymous functions and classes as the default export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-anonymous-default-export.md
   */
  'unicorn/no-anonymous-default-export'?: Linter.RuleEntry<[]>
  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-callback-reference.md
   */
  'unicorn/no-array-callback-reference'?: Linter.RuleEntry<UnicornNoArrayCallbackReference>
  /**
   * Disallow array accumulation with `Array#concat()` in loops.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-concat-in-loop.md
   */
  'unicorn/no-array-concat-in-loop'?: Linter.RuleEntry<[]>
  /**
   * Disallow using reference values as `Array#fill()` values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-fill-with-reference-type.md
   */
  'unicorn/no-array-fill-with-reference-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow `.fill()` after `Array.from({length: …})`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-from-fill.md
   */
  'unicorn/no-array-from-fill'?: Linter.RuleEntry<[]>
  /**
   * Disallow front-of-array mutation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-front-mutation.md
   */
  'unicorn/no-array-front-mutation'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `this` argument in array methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-method-this-argument.md
   */
  'unicorn/no-array-method-this-argument'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/prefer-single-call` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/deleted-and-deprecated-rules.md#no-array-push-push
   * @deprecated
   */
  'unicorn/no-array-push-push'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-reduce.md
   */
  'unicorn/no-array-reduce'?: Linter.RuleEntry<UnicornNoArrayReduce>
  /**
   * Prefer `Array#toReversed()` over `Array#reverse()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-reverse.md
   */
  'unicorn/no-array-reverse'?: Linter.RuleEntry<UnicornNoArrayReverse>
  /**
   * Prefer `Array#toSorted()` over `Array#sort()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-sort.md
   */
  'unicorn/no-array-sort'?: Linter.RuleEntry<UnicornNoArraySort>
  /**
   * Disallow sorting arrays to get the minimum or maximum value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-sort-for-min-max.md
   */
  'unicorn/no-array-sort-for-min-max'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#toSpliced()` over `Array#splice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-array-splice.md
   */
  'unicorn/no-array-splice'?: Linter.RuleEntry<[]>
  /**
   * Disallow asterisk prefixes in documentation comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-asterisk-prefix-in-documentation-comments.md
   */
  'unicorn/no-asterisk-prefix-in-documentation-comments'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access from await expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-await-expression-member.md
   */
  'unicorn/no-await-expression-member'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-await-in-promise-methods.md
   */
  'unicorn/no-await-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Blob` to `File` conversion.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-blob-to-file.md
   */
  'unicorn/no-blob-to-file'?: Linter.RuleEntry<[]>
  /**
   * Disallow boolean-returning sort comparators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-boolean-sort-comparator.md
   */
  'unicorn/no-boolean-sort-comparator'?: Linter.RuleEntry<[]>
  /**
   * Disallow `break` and `continue` in nested loops and switches inside loops.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-break-in-nested-loop.md
   */
  'unicorn/no-break-in-nested-loop'?: Linter.RuleEntry<[]>
  /**
   * Prefer drawing canvases directly instead of converting them to images.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-canvas-to-image.md
   */
  'unicorn/no-canvas-to-image'?: Linter.RuleEntry<[]>
  /**
   * Disallow chained comparisons such as `a < b < c`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-chained-comparison.md
   */
  'unicorn/no-chained-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow accessing `Map`, `Set`, `WeakMap`, and `WeakSet` entries with bracket notation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-collection-bracket-access.md
   */
  'unicorn/no-collection-bracket-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow dynamic object property existence checks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-computed-property-existence-check.md
   */
  'unicorn/no-computed-property-existence-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow confusing uses of `Array#{splice,toSpliced}()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-confusing-array-splice.md
   */
  'unicorn/no-confusing-array-splice'?: Linter.RuleEntry<[]>
  /**
   * Disallow confusing uses of `Array#with()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-confusing-array-with.md
   */
  'unicorn/no-confusing-array-with'?: Linter.RuleEntry<[]>
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-console-spaces.md
   */
  'unicorn/no-console-spaces'?: Linter.RuleEntry<[]>
  /**
   * Disallow arithmetic and bitwise operations that always evaluate to `0`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-constant-zero-expression.md
   */
  'unicorn/no-constant-zero-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow declarations before conditional early exits when they are only used after the exit.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-declarations-before-early-exit.md
   */
  'unicorn/no-declarations-before-early-exit'?: Linter.RuleEntry<[]>
  /**
   * Do not use `document.cookie` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-document-cookie.md
   */
  'unicorn/no-document-cookie'?: Linter.RuleEntry<[]>
  /**
   * Disallow two comparisons of the same operands that can be combined into one.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-double-comparison.md
   */
  'unicorn/no-double-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate adjacent branches in if chains.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-duplicate-if-branches.md
   */
  'unicorn/no-duplicate-if-branches'?: Linter.RuleEntry<[]>
  /**
   * Disallow adjacent duplicate operands in logical expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-duplicate-logical-operands.md
   */
  'unicorn/no-duplicate-logical-operands'?: Linter.RuleEntry<[]>
  /**
   * Disallow `.map()` and `.filter()` in `for…of` and `for await…of` loop headers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-duplicate-loops.md
   */
  'unicorn/no-duplicate-loops'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate values in `Set` constructor array literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-duplicate-set-values.md
   */
  'unicorn/no-duplicate-set-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-empty-file.md
   */
  'unicorn/no-empty-file'?: Linter.RuleEntry<UnicornNoEmptyFile>
  /**
   * Disallow assigning to built-in error properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-error-property-assignment.md
   */
  'unicorn/no-error-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow exports in scripts.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-exports-in-scripts.md
   */
  'unicorn/no-exports-in-scripts'?: Linter.RuleEntry<[]>
  /**
   * Prefer `for…of` over the `forEach` method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-for-each.md
   */
  'unicorn/no-for-each'?: Linter.RuleEntry<[]>
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-for-loop.md
   */
  'unicorn/no-for-loop'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning properties on the global object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-global-object-property-assignment.md
   */
  'unicorn/no-global-object-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/prefer-unicode-code-point-escapes` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/deleted-and-deprecated-rules.md#no-hex-escape
   * @deprecated
   */
  'unicorn/no-hex-escape'?: Linter.RuleEntry<[]>
  /**
   * Disallow immediate mutation after variable assignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-immediate-mutation.md
   */
  'unicorn/no-immediate-mutation'?: Linter.RuleEntry<[]>
  /**
   * Disallow impossible comparisons against `.length` or `.size`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-impossible-length-comparison.md
   */
  'unicorn/no-impossible-length-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow incorrect `querySelector()` and `querySelectorAll()` usage.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-incorrect-query-selector.md
   */
  'unicorn/no-incorrect-query-selector'?: Linter.RuleEntry<[]>
  /**
   * Disallow incorrect template literal interpolation syntax.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-incorrect-template-string-interpolation.md
   */
  'unicorn/no-incorrect-template-string-interpolation'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/no-instanceof-builtins` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/deleted-and-deprecated-rules.md#no-instanceof-array
   * @deprecated
   */
  'unicorn/no-instanceof-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow `instanceof` with built-in objects
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-instanceof-builtins.md
   */
  'unicorn/no-instanceof-builtins'?: Linter.RuleEntry<UnicornNoInstanceofBuiltins>
  /**
   * Disallow calling functions and constructors with an invalid number of arguments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-invalid-argument-count.md
   */
  'unicorn/no-invalid-argument-count'?: Linter.RuleEntry<UnicornNoInvalidArgumentCount>
  /**
   * Disallow comparing a single character from a string to a multi-character string.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-invalid-character-comparison.md
   */
  'unicorn/no-invalid-character-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-invalid-fetch-options.md
   */
  'unicorn/no-invalid-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid `accept` values on file inputs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-invalid-file-input-accept.md
   */
  'unicorn/no-invalid-file-input-accept'?: Linter.RuleEntry<[]>
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-invalid-remove-event-listener.md
   */
  'unicorn/no-invalid-remove-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid implementations of well-known symbol methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-invalid-well-known-symbol-methods.md
   */
  'unicorn/no-invalid-well-known-symbol-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-keyword-prefix.md
   */
  'unicorn/no-keyword-prefix'?: Linter.RuleEntry<UnicornNoKeywordPrefix>
  /**
   * Disallow accessing `event.currentTarget` after the synchronous event dispatch has finished.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-late-current-target-access.md
   */
  'unicorn/no-late-current-target-access'?: Linter.RuleEntry<[]>
  /**
   * Disallow event-control method calls after the synchronous event dispatch has finished.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-late-event-control.md
   */
  'unicorn/no-late-event-control'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `unicorn/no-unnecessary-slice-end` which covers more cases.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/deleted-and-deprecated-rules.md#no-length-as-slice-end
   * @deprecated
   */
  'unicorn/no-length-as-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-lonely-if.md
   */
  'unicorn/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow mutating a loop iterable during iteration.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-loop-iterable-mutation.md
   */
  'unicorn/no-loop-iterable-mutation'?: Linter.RuleEntry<[]>
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-magic-array-flat-depth.md
   */
  'unicorn/no-magic-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow manually wrapped comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-manually-wrapped-comments.md
   */
  'unicorn/no-manually-wrapped-comments'?: Linter.RuleEntry<[]>
  /**
   * Disallow checking a Map key before accessing a different key.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-mismatched-map-key.md
   */
  'unicorn/no-mismatched-map-key'?: Linter.RuleEntry<[]>
  /**
   * Disallow misrefactored compound assignments where the target is duplicated in the right-hand side.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-misrefactored-assignment.md
   */
  'unicorn/no-misrefactored-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow named usage of default import and export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-named-default.md
   */
  'unicorn/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated array predicate calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-negated-array-predicate.md
   */
  'unicorn/no-negated-array-predicate'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-negated-comparison.md
   */
  'unicorn/no-negated-comparison'?: Linter.RuleEntry<UnicornNoNegatedComparison>
  /**
   * Disallow negated conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-negated-condition.md
   */
  'unicorn/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated expression in equality check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-negation-in-equality-check.md
   */
  'unicorn/no-negation-in-equality-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-nested-ternary.md
   */
  'unicorn/no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new Array()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-new-array.md
   */
  'unicorn/no-new-array'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-new-buffer.md
   */
  'unicorn/no-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-function values with function-style verb prefixes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-non-function-verb-prefix.md
   */
  'unicorn/no-non-function-verb-prefix'?: Linter.RuleEntry<UnicornNoNonFunctionVerbPrefix>
  /**
   * Disallow non-standard properties on built-in objects.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-nonstandard-builtin-properties.md
   */
  'unicorn/no-nonstandard-builtin-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of the `null` literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-null.md
   */
  'unicorn/no-null'?: Linter.RuleEntry<UnicornNoNull>
  /**
   * Disallow the use of objects as default parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-object-as-default-parameter.md
   */
  'unicorn/no-object-as-default-parameter'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Object` methods with `Map` or `Set`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-object-methods-with-collections.md
   */
  'unicorn/no-object-methods-with-collections'?: Linter.RuleEntry<[]>
  /**
   * Disallow optional chaining on undeclared variables.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-optional-chaining-on-undeclared-variable.md
   */
  'unicorn/no-optional-chaining-on-undeclared-variable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `process.exit()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-process-exit.md
   */
  'unicorn/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparisons made redundant by an equality check in the same logical AND.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-redundant-comparison.md
   */
  'unicorn/no-redundant-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the return value of `Array#push()` and `Array#unshift()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-return-array-push.md
   */
  'unicorn/no-return-array-push'?: Linter.RuleEntry<[]>
  /**
   * Disallow selector syntax in DOM names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-selector-as-dom-name.md
   */
  'unicorn/no-selector-as-dom-name'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-single-promise-in-promise-methods.md
   */
  'unicorn/no-single-promise-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes that only have static members.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-static-only-class.md
   */
  'unicorn/no-static-only-class'?: Linter.RuleEntry<[]>
  /**
   * Prefer comparing values directly over subtracting and comparing to `0`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-subtraction-comparison.md
   */
  'unicorn/no-subtraction-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow `then` property.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-thenable.md
   */
  'unicorn/no-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning `this` to a variable.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-this-assignment.md
   */
  'unicorn/no-this-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow `this` outside of classes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-this-outside-of-class.md
   */
  'unicorn/no-this-outside-of-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning to top-level variables from inside functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-top-level-assignment-in-function.md
   */
  'unicorn/no-top-level-assignment-in-function'?: Linter.RuleEntry<[]>
  /**
   * Disallow top-level side effects in exported modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-top-level-side-effects.md
   */
  'unicorn/no-top-level-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-typeof-undefined.md
   */
  'unicorn/no-typeof-undefined'?: Linter.RuleEntry<UnicornNoTypeofUndefined>
  /**
   * Disallow referencing methods without calling them.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-uncalled-method.md
   */
  'unicorn/no-uncalled-method'?: Linter.RuleEntry<[]>
  /**
   * Require class members to be declared.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-undeclared-class-members.md
   */
  'unicorn/no-undeclared-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `1` as the `depth` argument of `Array#flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-array-flat-depth.md
   */
  'unicorn/no-unnecessary-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#{splice,toSpliced}()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-array-splice-count.md
   */
  'unicorn/no-unnecessary-array-splice-count'?: Linter.RuleEntry<[]>
  /**
   * Disallow awaiting non-promise values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-await.md
   */
  'unicorn/no-unnecessary-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary comparisons against boolean literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-boolean-comparison.md
   */
  'unicorn/no-unnecessary-boolean-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `globalThis` references.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-global-this.md
   */
  'unicorn/no-unnecessary-global-this'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-nested-ternary.md
   */
  'unicorn/no-unnecessary-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-polyfills.md
   */
  'unicorn/no-unnecessary-polyfills'?: Linter.RuleEntry<UnicornNoUnnecessaryPolyfills>
  /**
   * Disallow using `.length` or `Infinity` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-slice-end.md
   */
  'unicorn/no-unnecessary-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `Array#splice()` when simpler alternatives exist.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unnecessary-splice.md
   */
  'unicorn/no-unnecessary-splice'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable array destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unreadable-array-destructuring.md
   */
  'unicorn/no-unreadable-array-destructuring'?: Linter.RuleEntry<UnicornNoUnreadableArrayDestructuring>
  /**
   * Disallow unreadable iterable expressions in `for…of` and `for await…of` loop headers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unreadable-for-of-expression.md
   */
  'unicorn/no-unreadable-for-of-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable IIFEs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unreadable-iife.md
   */
  'unicorn/no-unreadable-iife'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable `new` expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unreadable-new-expression.md
   */
  'unicorn/no-unreadable-new-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable object destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unreadable-object-destructuring.md
   */
  'unicorn/no-unreadable-object-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prevent unsafe use of ArrayBuffer view `.buffer`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unsafe-buffer-conversion.md
   */
  'unicorn/no-unsafe-buffer-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe DOM HTML APIs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unsafe-dom-html.md
   */
  'unicorn/no-unsafe-dom-html'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe values as property keys.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unsafe-property-key.md
   */
  'unicorn/no-unsafe-property-key'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-literal replacement values in `String#replace()` and `String#replaceAll()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unsafe-string-replacement.md
   */
  'unicorn/no-unsafe-string-replacement'?: Linter.RuleEntry<[]>
  /**
   * Disallow ignoring the return value of selected array methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unused-array-method-return.md
   */
  'unicorn/no-unused-array-method-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused object properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-unused-properties.md
   */
  'unicorn/no-unused-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Boolean()` casts in array predicate callbacks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-boolean-cast.md
   */
  'unicorn/no-useless-boolean-cast'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless type coercions of values that are already of the target type.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-coercion.md
   */
  'unicorn/no-useless-coercion'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless values or fallbacks in `Set`, `Map`, `WeakSet`, or `WeakMap`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-collection-argument.md
   */
  'unicorn/no-useless-collection-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless compound assignments such as `x += 0`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-compound-assignment.md
   */
  'unicorn/no-useless-compound-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless concatenation of literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-concat.md
   */
  'unicorn/no-useless-concat'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `continue` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-continue.md
   */
  'unicorn/no-useless-continue'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary existence checks before deletion.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-delete-check.md
   */
  'unicorn/no-useless-delete-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow `else` after a statement that exits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-else.md
   */
  'unicorn/no-useless-else'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `Error.captureStackTrace(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-error-capture-stack-trace.md
   */
  'unicorn/no-useless-error-capture-stack-trace'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fallback when spreading in object literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-fallback-in-spread.md
   */
  'unicorn/no-useless-fallback-in-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary `.toArray()` on iterators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-iterator-to-array.md
   */
  'unicorn/no-useless-iterator-to-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless array length check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-length-check.md
   */
  'unicorn/no-useless-length-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary operands in logical expressions involving boolean literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-logical-operand.md
   */
  'unicorn/no-useless-logical-operand'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless overrides of class methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-override.md
   */
  'unicorn/no-useless-override'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-promise-resolve-reject.md
   */
  'unicorn/no-useless-promise-resolve-reject'?: Linter.RuleEntry<[]>
  /**
   * Disallow simple recursive function calls that can be replaced with a loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-recursion.md
   */
  'unicorn/no-useless-recursion'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-spread.md
   */
  'unicorn/no-useless-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless case in switch statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-switch-case.md
   */
  'unicorn/no-useless-switch-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless template literal expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-template-literals.md
   */
  'unicorn/no-useless-template-literals'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `undefined`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-useless-undefined.md
   */
  'unicorn/no-useless-undefined'?: Linter.RuleEntry<UnicornNoUselessUndefined>
  /**
   * Disallow the bitwise XOR operator where exponentiation was likely intended.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-xor-as-exponentiation.md
   */
  'unicorn/no-xor-as-exponentiation'?: Linter.RuleEntry<[]>
  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/no-zero-fractions.md
   */
  'unicorn/no-zero-fractions'?: Linter.RuleEntry<[]>
  /**
   * Enforce proper case for numeric literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/number-literal-case.md
   */
  'unicorn/number-literal-case'?: Linter.RuleEntry<UnicornNumberLiteralCase>
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/numeric-separators-style.md
   */
  'unicorn/numeric-separators-style'?: Linter.RuleEntry<UnicornNumericSeparatorsStyle>
  /**
   * Require assignment operator shorthand where possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/operator-assignment.md
   */
  'unicorn/operator-assignment'?: Linter.RuleEntry<UnicornOperatorAssignment>
  /**
   * Prefer `AbortSignal.timeout()` over manually aborting an `AbortController` with `setTimeout()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-abort-signal-timeout.md
   */
  'unicorn/prefer-abort-signal-timeout'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-add-event-listener.md
   */
  'unicorn/prefer-add-event-listener'?: Linter.RuleEntry<UnicornPreferAddEventListener>
  /**
   * Prefer an options object over a boolean in `.addEventListener()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-add-event-listener-options.md
   */
  'unicorn/prefer-add-event-listener-options'?: Linter.RuleEntry<[]>
  /**
   * Prefer `AggregateError` when throwing collected errors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-aggregate-error.md
   */
  'unicorn/prefer-aggregate-error'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-find.md
   */
  'unicorn/prefer-array-find'?: Linter.RuleEntry<UnicornPreferArrayFind>
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-flat.md
   */
  'unicorn/prefer-array-flat'?: Linter.RuleEntry<UnicornPreferArrayFlat>
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()` and `.filter(…).flatMap(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-flat-map.md
   */
  'unicorn/prefer-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array.fromAsync()` over `for await…of` array accumulation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-from-async.md
   */
  'unicorn/prefer-array-from-async'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `Array.from()` mapping function argument.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-from-map.md
   */
  'unicorn/prefer-array-from-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-index-of.md
   */
  'unicorn/prefer-array-index-of'?: Linter.RuleEntry<[]>
  /**
   * Prefer iterating an array directly or with `Array#keys()` over `Array#entries()` when the index or value is unused.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-iterable-methods.md
   */
  'unicorn/prefer-array-iterable-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer last-oriented array methods over `Array#reverse()` or `Array#toReversed()` followed by a method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-last-methods.md
   */
  'unicorn/prefer-array-last-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#slice()` over `Array#splice()` when reading from the returned array.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-slice.md
   */
  'unicorn/prefer-array-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-array-some.md
   */
  'unicorn/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-at.md
   */
  'unicorn/prefer-at'?: Linter.RuleEntry<UnicornPreferAt>
  /**
   * Prefer `await` over promise chaining.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-await.md
   */
  'unicorn/prefer-await'?: Linter.RuleEntry<[]>
  /**
   * Prefer `BigInt` literals over the constructor.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-bigint-literals.md
   */
  'unicorn/prefer-bigint-literals'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-blob-reading-methods.md
   */
  'unicorn/prefer-blob-reading-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer directly returning boolean expressions over `if` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-boolean-return.md
   */
  'unicorn/prefer-boolean-return'?: Linter.RuleEntry<[]>
  /**
   * Prefer class field declarations over `this` assignments in constructors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-class-fields.md
   */
  'unicorn/prefer-class-fields'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Element#classList.toggle()` to toggle class names.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-classlist-toggle.md
   */
  'unicorn/prefer-classlist-toggle'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-code-point.md
   */
  'unicorn/prefer-code-point'?: Linter.RuleEntry<[]>
  /**
   * Prefer early continues over whole-loop conditional wrapping.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-continue.md
   */
  'unicorn/prefer-continue'?: Linter.RuleEntry<UnicornPreferContinue>
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-date-now.md
   */
  'unicorn/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer default parameters over reassignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-default-parameters.md
   */
  'unicorn/prefer-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer direct iteration over default iterator method calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-direct-iteration.md
   */
  'unicorn/prefer-direct-iteration'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `using`/`await using` over manual `try`/`finally` resource disposal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-dispose.md
   */
  'unicorn/prefer-dispose'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Element#append()` over `Node#appendChild()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-dom-node-append.md
   */
  'unicorn/prefer-dom-node-append'?: Linter.RuleEntry<[]>
  /**
   * Renamed to `unicorn/dom-node-dataset`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/deleted-and-deprecated-rules.md#prefer-dom-node-dataset
   * @deprecated
   */
  'unicorn/prefer-dom-node-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.getHTML()` and `.setHTML()` over `.innerHTML`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-dom-node-html-methods.md
   */
  'unicorn/prefer-dom-node-html-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-dom-node-remove.md
   */
  'unicorn/prefer-dom-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.replaceChildren()` when emptying DOM children.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-dom-node-replace-children.md
   */
  'unicorn/prefer-dom-node-replace-children'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.textContent` over `.innerText`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-dom-node-text-content.md
   */
  'unicorn/prefer-dom-node-text-content'?: Linter.RuleEntry<[]>
  /**
   * Prefer early returns over full-function conditional wrapping.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-early-return.md
   */
  'unicorn/prefer-early-return'?: Linter.RuleEntry<UnicornPreferEarlyReturn>
  /**
   * Prefer `else if` over adjacent `if` statements with related conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-else-if.md
   */
  'unicorn/prefer-else-if'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Error.isError()` when checking for errors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-error-is-error.md
   */
  'unicorn/prefer-error-is-error'?: Linter.RuleEntry<[]>
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-event-target.md
   */
  'unicorn/prefer-event-target'?: Linter.RuleEntry<[]>
  /**
   * Prefer `export…from` when re-exporting.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-export-from.md
   */
  'unicorn/prefer-export-from'?: Linter.RuleEntry<UnicornPreferExportFrom>
  /**
   * Prefer flat `Math.min()` and `Math.max()` calls over nested calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-flat-math-min-max.md
   */
  'unicorn/prefer-flat-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.getOrInsertComputed()` when the default value has side effects.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-get-or-insert-computed.md
   */
  'unicorn/prefer-get-or-insert-computed'?: Linter.RuleEntry<[]>
  /**
   * Prefer global numeric constants over `Number` static properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-global-number-constants.md
   */
  'unicorn/prefer-global-number-constants'?: Linter.RuleEntry<[]>
  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-global-this.md
   */
  'unicorn/prefer-global-this'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.has()` when checking existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-has-check.md
   */
  'unicorn/prefer-has-check'?: Linter.RuleEntry<[]>
  /**
   * Prefer moving code shared by all branches of an `if` statement out of the branches.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-hoisting-branch-code.md
   */
  'unicorn/prefer-hoisting-branch-code'?: Linter.RuleEntry<[]>
  /**
   * Prefer HTTPS over HTTP.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-https.md
   */
  'unicorn/prefer-https'?: Linter.RuleEntry<[]>
  /**
   * Prefer identifiers over string literals in import and export specifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-identifier-import-export-specifiers.md
   */
  'unicorn/prefer-identifier-import-export-specifiers'?: Linter.RuleEntry<[]>
  /**
   * Prefer `import.meta.{dirname,filename}` over legacy techniques for getting file paths.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-import-meta-properties.md
   */
  'unicorn/prefer-import-meta-properties'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-includes.md
   */
  'unicorn/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over repeated equality comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-includes-over-repeated-comparisons.md
   */
  'unicorn/prefer-includes-over-repeated-comparisons'?: Linter.RuleEntry<UnicornPreferIncludesOverRepeatedComparisons>
  /**
   * Prefer passing iterables directly to constructors instead of filling empty collections.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-iterable-in-constructor.md
   */
  'unicorn/prefer-iterable-in-constructor'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Iterator.concat(…)` over temporary spread arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-iterator-concat.md
   */
  'unicorn/prefer-iterator-concat'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Iterator#toArray()` over temporary arrays from iterator spreads.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-iterator-to-array.md
   */
  'unicorn/prefer-iterator-to-array'?: Linter.RuleEntry<[]>
  /**
   * Prefer moving `.toArray()` to the end of iterator helper chains.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-iterator-to-array-at-end.md
   */
  'unicorn/prefer-iterator-to-array-at-end'?: Linter.RuleEntry<[]>
  /**
   * Renamed to `unicorn/consistent-json-file-read`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/deleted-and-deprecated-rules.md#prefer-json-parse-buffer
   * @deprecated
   */
  'unicorn/prefer-json-parse-buffer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `KeyboardEvent#key` over deprecated keyboard event properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-keyboard-event-key.md
   */
  'unicorn/prefer-keyboard-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer `location.assign()` over assigning to `location.href`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-location-assign.md
   */
  'unicorn/prefer-location-assign'?: Linter.RuleEntry<[]>
  /**
   * Prefer using a logical operator over a ternary.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-logical-operator-over-ternary.md
   */
  'unicorn/prefer-logical-operator-over-ternary'?: Linter.RuleEntry<[]>
  /**
   * Prefer `new Map()` over `Object.fromEntries()` when using the result as a map.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-map-from-entries.md
   */
  'unicorn/prefer-map-from-entries'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.abs()` over manual absolute value expressions and symmetric range checks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-math-abs.md
   */
  'unicorn/prefer-math-abs'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math` constants over their approximate numeric values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-math-constants.md
   */
  'unicorn/prefer-math-constants'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-math-min-max.md
   */
  'unicorn/prefer-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.trunc()` for truncating numbers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-math-trunc.md
   */
  'unicorn/prefer-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * Prefer moving ternaries into the minimal varying part of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-minimal-ternary.md
   */
  'unicorn/prefer-minimal-ternary'?: Linter.RuleEntry<UnicornPreferMinimalTernary>
  /**
   * Prefer modern DOM APIs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-modern-dom-apis.md
   */
  'unicorn/prefer-modern-dom-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-modern-math-apis.md
   */
  'unicorn/prefer-modern-math-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-module.md
   */
  'unicorn/prefer-module'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-native-coercion-functions.md
   */
  'unicorn/prefer-native-coercion-functions'?: Linter.RuleEntry<[]>
  /**
   * Prefer negative index over `.length - index` when possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-negative-index.md
   */
  'unicorn/prefer-negative-index'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-node-protocol.md
   */
  'unicorn/prefer-node-protocol'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number()` over `parseFloat()` and base-10 `parseInt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-number-coercion.md
   */
  'unicorn/prefer-number-coercion'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number.isSafeInteger()` over integer checks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-number-is-safe-integer.md
   */
  'unicorn/prefer-number-is-safe-integer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number` static methods over global functions and optionally static properties over global constants.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-number-properties.md
   */
  'unicorn/prefer-number-properties'?: Linter.RuleEntry<UnicornPreferNumberProperties>
  /**
   * Prefer `Object.defineProperties()` over multiple `Object.defineProperty()` calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-object-define-properties.md
   */
  'unicorn/prefer-object-define-properties'?: Linter.RuleEntry<[]>
  /**
   * Prefer object destructuring defaults over default object literals with spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-object-destructuring-defaults.md
   */
  'unicorn/prefer-object-destructuring-defaults'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-object-from-entries.md
   */
  'unicorn/prefer-object-from-entries'?: Linter.RuleEntry<UnicornPreferObjectFromEntries>
  /**
   * Prefer the most specific `Object` iterable method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-object-iterable-methods.md
   */
  'unicorn/prefer-object-iterable-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer observer APIs over resize and scroll listeners with layout reads.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-observer-apis.md
   */
  'unicorn/prefer-observer-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer omitting the `catch` binding parameter.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-optional-catch-binding.md
   */
  'unicorn/prefer-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Path2D` for repeatedly drawn canvas paths.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-path2d.md
   */
  'unicorn/prefer-path2d'?: Linter.RuleEntry<[]>
  /**
   * Prefer private class fields over the underscore-prefix convention.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-private-class-fields.md
   */
  'unicorn/prefer-private-class-fields'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Promise.try()` over promise-wrapping boilerplate.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-promise-try.md
   */
  'unicorn/prefer-promise-try'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Promise.withResolvers()` when extracting resolver functions from `new Promise()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-promise-with-resolvers.md
   */
  'unicorn/prefer-promise-with-resolvers'?: Linter.RuleEntry<[]>
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-prototype-methods.md
   */
  'unicorn/prefer-prototype-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.querySelector()` and `.querySelectorAll()` over older DOM query methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-query-selector.md
   */
  'unicorn/prefer-query-selector'?: Linter.RuleEntry<UnicornPreferQuerySelector>
  /**
   * Prefer `queueMicrotask()` over `process.nextTick()`, `setImmediate()`, and `setTimeout(…, 0)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-queue-microtask.md
   */
  'unicorn/prefer-queue-microtask'?: Linter.RuleEntry<UnicornPreferQueueMicrotask>
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-reflect-apply.md
   */
  'unicorn/prefer-reflect-apply'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp.escape()` for escaping strings to use in regular expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-regexp-escape.md
   */
  'unicorn/prefer-regexp-escape'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp#test()` over `String#match()`, `String#search()`, and `RegExp#exec()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-regexp-test.md
   */
  'unicorn/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Response.json()` over `new Response(JSON.stringify())`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-response-static-json.md
   */
  'unicorn/prefer-response-static-json'?: Linter.RuleEntry<[]>
  /**
   * Prefer `:scope` when using element query selector methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-scoped-selector.md
   */
  'unicorn/prefer-scoped-selector'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-set-has.md
   */
  'unicorn/prefer-set-has'?: Linter.RuleEntry<UnicornPreferSetHas>
  /**
   * Prefer `Set` methods for Set operations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-set-methods.md
   */
  'unicorn/prefer-set-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-set-size.md
   */
  'unicorn/prefer-set-size'?: Linter.RuleEntry<[]>
  /**
   * Prefer arrow function properties over methods with a single return.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-short-arrow-method.md
   */
  'unicorn/prefer-short-arrow-method'?: Linter.RuleEntry<[]>
  /**
   * Prefer simple conditions first in logical expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-simple-condition-first.md
   */
  'unicorn/prefer-simple-condition-first'?: Linter.RuleEntry<[]>
  /**
   * Prefer a simple comparison function for `Array#sort()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-simple-sort-comparator.md
   */
  'unicorn/prefer-simple-sort-comparator'?: Linter.RuleEntry<[]>
  /**
   * Prefer a single `Array#some()` or `Array#every()` with a combined predicate.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-single-array-predicate.md
   */
  'unicorn/prefer-single-array-predicate'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple `Array#{push,unshift}()`, `Element#classList.{add,remove}()`, and `importScripts()` into one call.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-single-call.md
   */
  'unicorn/prefer-single-call'?: Linter.RuleEntry<UnicornPreferSingleCall>
  /**
   * Prefer a single object destructuring declaration per local const source.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-single-object-destructuring.md
   */
  'unicorn/prefer-single-object-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple single-character replacements into a single `String#replaceAll()` with a regular expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-single-replace.md
   */
  'unicorn/prefer-single-replace'?: Linter.RuleEntry<[]>
  /**
   * Prefer declaring variables in the smallest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-smaller-scope.md
   */
  'unicorn/prefer-smaller-scope'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#split()` with a limit.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-split-limit.md
   */
  'unicorn/prefer-split-limit'?: Linter.RuleEntry<[]>
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()`, and trivial `for…of` copies.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-spread.md
   */
  'unicorn/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#matchAll()` over `RegExp#exec()` loops.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-string-match-all.md
   */
  'unicorn/prefer-string-match-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#padStart()` and `String#padEnd()` over manual string padding.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-string-pad-start-end.md
   */
  'unicorn/prefer-string-pad-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-string-raw.md
   */
  'unicorn/prefer-string-raw'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#repeat()` for repeated whitespace.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-string-repeat.md
   */
  'unicorn/prefer-string-repeat'?: Linter.RuleEntry<UnicornPreferStringRepeat>
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag and `String#split().join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-string-replace-all.md
   */
  'unicorn/prefer-string-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-string-slice.md
   */
  'unicorn/prefer-string-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()` and `String#indexOf() === 0`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-string-starts-ends-with.md
   */
  'unicorn/prefer-string-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-string-trim-start-end.md
   */
  'unicorn/prefer-string-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-structured-clone.md
   */
  'unicorn/prefer-structured-clone'?: Linter.RuleEntry<UnicornPreferStructuredClone>
  /**
   * Prefer `switch` over multiple `else-if`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-switch.md
   */
  'unicorn/prefer-switch'?: Linter.RuleEntry<UnicornPreferSwitch>
  /**
   * Prefer `Temporal` over `Date`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-temporal.md
   */
  'unicorn/prefer-temporal'?: Linter.RuleEntry<UnicornPreferTemporal>
  /**
   * Prefer ternary expressions over simple `if` statements that return or assign values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-ternary.md
   */
  'unicorn/prefer-ternary'?: Linter.RuleEntry<UnicornPreferTernary>
  /**
   * Prefer using `Element#toggleAttribute()` to toggle attributes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-toggle-attribute.md
   */
  'unicorn/prefer-toggle-attribute'?: Linter.RuleEntry<[]>
  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-top-level-await.md
   */
  'unicorn/prefer-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-type-error.md
   */
  'unicorn/prefer-type-error'?: Linter.RuleEntry<[]>
  /**
   * Require type literals to be last in union types.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-type-literal-last.md
   */
  'unicorn/prefer-type-literal-last'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Uint8Array#toBase64()` and `Uint8Array.fromBase64()` over `atob()`, `btoa()`, and `Buffer` base64 conversions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-uint8array-base64.md
   */
  'unicorn/prefer-uint8array-base64'?: Linter.RuleEntry<[]>
  /**
   * Prefer the unary minus operator over multiplying or dividing by `-1`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-unary-minus.md
   */
  'unicorn/prefer-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Prefer Unicode code point escapes over legacy escape sequences.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-unicode-code-point-escapes.md
   */
  'unicorn/prefer-unicode-code-point-escapes'?: Linter.RuleEntry<[]>
  /**
   * Prefer `URL.canParse()` over constructing a `URL` in a try/catch for validation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-url-can-parse.md
   */
  'unicorn/prefer-url-can-parse'?: Linter.RuleEntry<[]>
  /**
   * Prefer `URL#href` over stringifying a `URL`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-url-href.md
   */
  'unicorn/prefer-url-href'?: Linter.RuleEntry<[]>
  /**
   * Prefer `URLSearchParams` over manually splitting query strings.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-url-search-parameters.md
   */
  'unicorn/prefer-url-search-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer putting the condition in the while statement.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/prefer-while-loop-condition.md
   */
  'unicorn/prefer-while-loop-condition'?: Linter.RuleEntry<[]>
  /**
   * Renamed to `unicorn/name-replacements`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/deleted-and-deprecated-rules.md#prevent-abbreviations
   * @deprecated
   */
  'unicorn/prevent-abbreviations'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent relative URL style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/relative-url-style.md
   */
  'unicorn/relative-url-style'?: Linter.RuleEntry<UnicornRelativeUrlStyle>
  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-array-join-separator.md
   */
  'unicorn/require-array-join-separator'?: Linter.RuleEntry<[]>
  /**
   * Require a compare function when calling `Array#sort()` or `Array#toSorted()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-array-sort-compare.md
   */
  'unicorn/require-array-sort-compare'?: Linter.RuleEntry<[]>
  /**
   * Require `CSS.escape()` for interpolated values in CSS selectors.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-css-escape.md
   */
  'unicorn/require-css-escape'?: Linter.RuleEntry<UnicornRequireCssEscape>
  /**
   * Require non-empty module attributes for imports and exports
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-module-attributes.md
   */
  'unicorn/require-module-attributes'?: Linter.RuleEntry<[]>
  /**
   * Require non-empty specifier list in import and export statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-module-specifiers.md
   */
  'unicorn/require-module-specifiers'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-number-to-fixed-digits-argument.md
   */
  'unicorn/require-number-to-fixed-digits-argument'?: Linter.RuleEntry<[]>
  /**
   * Require passive event listeners for high-frequency events.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-passive-events.md
   */
  'unicorn/require-passive-events'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-post-message-target-origin.md
   */
  'unicorn/require-post-message-target-origin'?: Linter.RuleEntry<[]>
  /**
   * Require boolean-returning Proxy traps to return booleans.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/require-proxy-trap-boolean-return.md
   */
  'unicorn/require-proxy-trap-boolean-return'?: Linter.RuleEntry<[]>
  /**
   * Enforce better string content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/string-content.md
   */
  'unicorn/string-content'?: Linter.RuleEntry<UnicornStringContent>
  /**
   * Enforce consistent brace style for `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/switch-case-braces.md
   */
  'unicorn/switch-case-braces'?: Linter.RuleEntry<UnicornSwitchCaseBraces>
  /**
   * Enforce consistent `break`/`return`/`continue`/`throw` position in `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/switch-case-break-position.md
   */
  'unicorn/switch-case-break-position'?: Linter.RuleEntry<[]>
  /**
   * Fix whitespace-insensitive template indentation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/template-indent.md
   */
  'unicorn/template-indent'?: Linter.RuleEntry<UnicornTemplateIndent>
  /**
   * Enforce consistent case for text encoding identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/text-encoding-identifier-case.md
   */
  'unicorn/text-encoding-identifier-case'?: Linter.RuleEntry<UnicornTextEncodingIdentifierCase>
  /**
   * Require `new` when creating an error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/throw-new-error.md
   */
  'unicorn/throw-new-error'?: Linter.RuleEntry<[]>
  /**
   * Limit the complexity of `try` blocks.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v69.0.0/docs/rules/try-complexity.md
   */
  'unicorn/try-complexity'?: Linter.RuleEntry<UnicornTryComplexity>
}

/* ======= Declarations ======= */
// ----- unicorn/catch-error-name -----
type UnicornCatchErrorName = []|[{
  
  name?: string
  
  ignore?: unknown[]
}]
// ----- unicorn/class-reference-in-static-methods -----
type UnicornClassReferenceInStaticMethods = []|[{
  
  preferThis?: boolean
  
  preferSuper?: boolean
}]
// ----- unicorn/comment-content -----
type UnicornCommentContent = []|[{
  
  checkUniformCase?: boolean
  
  extendDefaultReplacements?: boolean
  
  replacements?: {
    [k: string]: (false | string | {
      replacement: string
      caseSensitive?: boolean
    }) | undefined
  }
}]
// ----- unicorn/consistent-boolean-name -----
type UnicornConsistentBooleanName = []|[{
  
  checkProperties?: boolean
  
  prefixes?: {
    
    [k: string]: boolean | undefined
  }
  
  ignore?: unknown[]
}]
// ----- unicorn/consistent-class-member-order -----
type UnicornConsistentClassMemberOrder = []|[{
  
  order?: [("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method"), ("static-field" | "static-block" | "static-method" | "private-field" | "public-field" | "constructor" | "private-method" | "public-method")]
}]
// ----- unicorn/consistent-compound-words -----
type UnicornConsistentCompoundWords = []|[{
  
  checkProperties?: boolean
  
  checkVariables?: boolean
  
  checkDefaultAndNamespaceImports?: (boolean | "internal")
  
  checkShorthandImports?: (boolean | "internal")
  
  checkShorthandProperties?: boolean
  
  extendDefaultReplacements?: boolean
  replacements?: _UnicornConsistentCompoundWords_Replacements
  allowList?: _UnicornConsistentCompoundWords_TrueObject
}]
interface _UnicornConsistentCompoundWords_Replacements {
  [k: string]: (false | string) | undefined
}
interface _UnicornConsistentCompoundWords_TrueObject {
  [k: string]: true | undefined
}
// ----- unicorn/consistent-conditional-object-spread -----
type UnicornConsistentConditionalObjectSpread = []|[("logical" | "ternary")]
// ----- unicorn/consistent-export-decorator-position -----
type UnicornConsistentExportDecoratorPosition = []|[("above" | "before" | "after")]
// ----- unicorn/consistent-function-scoping -----
type UnicornConsistentFunctionScoping = []|[{
  
  checkArrowFunctions?: boolean
}]
// ----- unicorn/consistent-function-style -----
type UnicornConsistentFunctionStyle = []|[{
  default?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  namedFunctions?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  namedExports?: ("declaration" | "function-expression" | "arrow-function" | "ignore")
  callbacks?: ("function-expression" | "arrow-function" | "ignore")
  objectProperties?: ("method" | "function-expression" | "arrow-function" | "ignore")
  reassignedVariables?: ("function-expression" | "arrow-function" | "ignore")
  typedVariables?: ("function-expression" | "arrow-function" | "ignore")
}]
// ----- unicorn/consistent-json-file-read -----
type UnicornConsistentJsonFileRead = []|[("string" | "buffer")]
// ----- unicorn/default-export-style -----
type UnicornDefaultExportStyle = []|[{
  functions?: ("inline" | "separate" | "ignore")
  classes?: ("inline" | "separate" | "ignore")
}]
// ----- unicorn/dom-node-dataset -----
type UnicornDomNodeDataset = []|[{
  
  preferAttributes?: boolean
}]
// ----- unicorn/escape-case -----
type UnicornEscapeCase = []|[("uppercase" | "lowercase")]
// ----- unicorn/expiring-todo-comments -----
type UnicornExpiringTodoComments = []|[{
  
  terms?: string[]
  
  ignore?: unknown[]
  
  checkDates?: boolean
  
  checkDatesOnPullRequests?: boolean
  
  allowWarningComments?: boolean
  
  date?: string
}]
// ----- unicorn/explicit-length-check -----
type UnicornExplicitLengthCheck = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]
// ----- unicorn/explicit-timer-delay -----
type UnicornExplicitTimerDelay = []|[("always" | "never")]
// ----- unicorn/filename-case -----
type UnicornFilenameCase = []|[({
  
  case?: ("camelCase" | "camelCaseWithAcronyms" | "snakeCase" | "kebabCase" | "pascalCase")
  
  ignore?: unknown[]
  
  multipleFileExtensions?: boolean
  
  checkDirectories?: boolean
} | {
  
  cases?: {
    
    camelCase?: boolean
    
    camelCaseWithAcronyms?: boolean
    
    snakeCase?: boolean
    
    kebabCase?: boolean
    
    pascalCase?: boolean
  }
  
  ignore?: unknown[]
  
  multipleFileExtensions?: boolean
  
  checkDirectories?: boolean
})]
// ----- unicorn/id-match -----
type UnicornIdMatch = []|[string]|[string, {
  properties?: boolean
  classFields?: boolean
  onlyDeclarations?: boolean
  ignoreDestructuring?: boolean
  
  checkNamedSpecifiers?: boolean
}]
// ----- unicorn/import-style -----
type UnicornImportStyle = []|[{
  
  checkImport?: boolean
  
  checkDynamicImport?: boolean
  
  checkExportFrom?: boolean
  
  checkRequire?: boolean
  
  extendDefaultStyles?: boolean
  styles?: _UnicornImportStyle_ModuleStyles
}]
type _UnicornImportStyleStyles = (false | _UnicornImportStyle_BooleanObject) | undefined
interface _UnicornImportStyle_ModuleStyles {
  [k: string]: _UnicornImportStyleStyles | undefined
}
interface _UnicornImportStyle_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/isolated-functions -----
type UnicornIsolatedFunctions = []|[{
  
  overrideGlobals?: {
    [k: string]: (boolean | ("readonly" | "writable" | "writeable" | "off")) | undefined
  }
  
  functions?: string[]
  
  selectors?: string[]
  
  comments?: string[]
}]
// ----- unicorn/logical-assignment-operators -----
type UnicornLogicalAssignmentOperators = (([]|["always"]|["always", {
  enforceForIfStatements?: boolean
}] | ["never"]) & unknown[])
// ----- unicorn/max-nested-calls -----
type UnicornMaxNestedCalls = []|[{
  
  max?: number
}]
// ----- unicorn/name-replacements -----
type UnicornNameReplacements = []|[{
  
  checkProperties?: boolean
  
  checkVariables?: boolean
  
  checkDefaultAndNamespaceImports?: (boolean | string)
  
  checkShorthandImports?: (boolean | string)
  
  checkShorthandProperties?: boolean
  
  checkFilenames?: boolean
  
  extendDefaultReplacements?: boolean
  replacements?: _UnicornNameReplacements_NameReplacements
  
  extendDefaultAllowList?: boolean
  allowList?: _UnicornNameReplacements_BooleanObject
  
  ignore?: unknown[]
}]
type _UnicornNameReplacementsReplacements = (false | _UnicornNameReplacements_BooleanObject) | undefined
interface _UnicornNameReplacements_NameReplacements {
  [k: string]: _UnicornNameReplacementsReplacements | undefined
}
interface _UnicornNameReplacements_BooleanObject {
  [k: string]: boolean | undefined
}
interface _UnicornNameReplacements_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/no-array-callback-reference -----
type UnicornNoArrayCallbackReference = []|[{
  
  ignore?: string[]
}]
// ----- unicorn/no-array-reduce -----
type UnicornNoArrayReduce = []|[{
  
  allowSimpleOperations?: boolean
}]
// ----- unicorn/no-array-reverse -----
type UnicornNoArrayReverse = []|[{
  allowExpressionStatement?: boolean
}]
// ----- unicorn/no-array-sort -----
type UnicornNoArraySort = []|[{
  allowExpressionStatement?: boolean
}]
// ----- unicorn/no-empty-file -----
type UnicornNoEmptyFile = []|[{
  
  allowComments?: boolean
}]
// ----- unicorn/no-instanceof-builtins -----
type UnicornNoInstanceofBuiltins = []|[{
  useErrorIsError?: boolean
  strategy?: ("loose" | "strict")
  include?: string[]
  exclude?: string[]
}]
// ----- unicorn/no-invalid-argument-count -----
type UnicornNoInvalidArgumentCount = []|[{
  [k: string]: (number | [number, ...(number)[]] | {
    min?: number
    max?: number
  }) | undefined
}]
// ----- unicorn/no-keyword-prefix -----
type UnicornNoKeywordPrefix = []|[{
  
  disallowedPrefixes?: []|[string]
  
  checkProperties?: boolean
  
  onlyCamelCase?: boolean
}]
// ----- unicorn/no-negated-comparison -----
type UnicornNoNegatedComparison = []|[{
  
  checkLogicalExpressions?: boolean
}]
// ----- unicorn/no-non-function-verb-prefix -----
type UnicornNoNonFunctionVerbPrefix = []|[{
  
  verbs?: string[]
}]
// ----- unicorn/no-null -----
type UnicornNoNull = []|[{
  
  checkArguments?: boolean
  
  checkStrictEquality?: boolean
}]
// ----- unicorn/no-typeof-undefined -----
type UnicornNoTypeofUndefined = []|[{
  
  checkGlobalVariables?: boolean
}]
// ----- unicorn/no-unnecessary-polyfills -----
type UnicornNoUnnecessaryPolyfills = []|[{
  
  targets?: (string | unknown[] | {
    [k: string]: unknown | undefined
  })
}]
// ----- unicorn/no-unreadable-array-destructuring -----
type UnicornNoUnreadableArrayDestructuring = []|[{
  
  maximumIgnoredElements?: number
}]
// ----- unicorn/no-useless-undefined -----
type UnicornNoUselessUndefined = []|[{
  
  checkArguments?: boolean
  
  checkArrowFunctionBody?: boolean
}]
// ----- unicorn/number-literal-case -----
type UnicornNumberLiteralCase = []|[{
  hexadecimalValue?: ("uppercase" | "lowercase")
}]
// ----- unicorn/numeric-separators-style -----
type UnicornNumericSeparatorsStyle = []|[{
  binary?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  octal?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  hexadecimal?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
  }
  number?: {
    
    onlyIfContainsSeparator?: boolean
    
    minimumDigits?: number
    
    groupLength?: number
    
    fractionGroupLength?: number
  }
  
  onlyIfContainsSeparator?: boolean
}]
// ----- unicorn/operator-assignment -----
type UnicornOperatorAssignment = []|[("always" | "never")]
// ----- unicorn/prefer-add-event-listener -----
type UnicornPreferAddEventListener = []|[{
  
  excludedPackages?: string[]
}]
// ----- unicorn/prefer-array-find -----
type UnicornPreferArrayFind = []|[{
  
  checkFromLast?: boolean
}]
// ----- unicorn/prefer-array-flat -----
type UnicornPreferArrayFlat = []|[{
  
  functions?: unknown[]
}]
// ----- unicorn/prefer-at -----
type UnicornPreferAt = []|[{
  
  getLastElementFunctions?: unknown[]
  
  checkAllIndexAccess?: boolean
}]
// ----- unicorn/prefer-continue -----
type UnicornPreferContinue = []|[{
  
  maximumStatements?: number
}]
// ----- unicorn/prefer-early-return -----
type UnicornPreferEarlyReturn = []|[{
  
  maximumStatements?: number
}]
// ----- unicorn/prefer-export-from -----
type UnicornPreferExportFrom = []|[{
  
  checkUsedVariables?: boolean
}]
// ----- unicorn/prefer-includes-over-repeated-comparisons -----
type UnicornPreferIncludesOverRepeatedComparisons = []|[{
  
  minimumComparisons?: number
}]
// ----- unicorn/prefer-minimal-ternary -----
type UnicornPreferMinimalTernary = []|[{
  
  checkVaryingCallee?: boolean
  
  checkComputedMemberAccess?: boolean
}]
// ----- unicorn/prefer-number-properties -----
type UnicornPreferNumberProperties = []|[{
  
  checkInfinity?: boolean
  
  checkNaN?: boolean
}]
// ----- unicorn/prefer-object-from-entries -----
type UnicornPreferObjectFromEntries = []|[{
  
  functions?: unknown[]
}]
// ----- unicorn/prefer-query-selector -----
type UnicornPreferQuerySelector = []|[{
  
  allowWithVariables?: boolean
}]
// ----- unicorn/prefer-queue-microtask -----
type UnicornPreferQueueMicrotask = []|[{
  
  checkSetImmediate?: boolean
  
  checkSetTimeout?: boolean
}]
// ----- unicorn/prefer-set-has -----
type UnicornPreferSetHas = []|[{
  
  minimumItems?: number
}]
// ----- unicorn/prefer-single-call -----
type UnicornPreferSingleCall = []|[{
  
  ignore?: unknown[]
}]
// ----- unicorn/prefer-string-repeat -----
type UnicornPreferStringRepeat = []|[{
  
  minimumRepetitions?: number
}]
// ----- unicorn/prefer-structured-clone -----
type UnicornPreferStructuredClone = []|[{
  
  functions?: unknown[]
}]
// ----- unicorn/prefer-switch -----
type UnicornPreferSwitch = []|[{
  
  minimumCases?: number
  
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]
// ----- unicorn/prefer-temporal -----
type UnicornPreferTemporal = []|[{
  
  checkDateNow?: boolean
  
  checkReferences?: boolean
  
  checkMethods?: boolean
}]
// ----- unicorn/prefer-ternary -----
type UnicornPreferTernary = []|[("always" | "only-single-line")]
// ----- unicorn/relative-url-style -----
type UnicornRelativeUrlStyle = []|[("never" | "always")]
// ----- unicorn/require-css-escape -----
type UnicornRequireCssEscape = []|[{
  
  checkAllSelectors?: boolean
}]
// ----- unicorn/string-content -----
type UnicornStringContent = []|[{
  
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      caseSensitive?: boolean
      message?: string
    }) | undefined
  }
  
  selectors?: string[]
}]
// ----- unicorn/switch-case-braces -----
type UnicornSwitchCaseBraces = []|[("always" | "avoid" | "single-statement")]
// ----- unicorn/template-indent -----
type UnicornTemplateIndent = []|[{
  
  indent?: (string | number)
  
  tags?: string[]
  
  functions?: string[]
  
  selectors?: string[]
  
  comments?: string[]
}]
// ----- unicorn/text-encoding-identifier-case -----
type UnicornTextEncodingIdentifierCase = []|[{
  
  withDash?: boolean
}]
// ----- unicorn/try-complexity -----
type UnicornTryComplexity = []|[{
  
  max?: number
}]