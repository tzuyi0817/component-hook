/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface VueRules {
  /**
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  '@typescript-eslint/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type'?: Linter.RuleEntry<TypescriptEslintArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  '@typescript-eslint/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  '@typescript-eslint/ban-ts-comment'?: Linter.RuleEntry<TypescriptEslintBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  '@typescript-eslint/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  '@typescript-eslint/class-literal-property-style'?: Linter.RuleEntry<TypescriptEslintClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  '@typescript-eslint/class-methods-use-this'?: Linter.RuleEntry<TypescriptEslintClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  '@typescript-eslint/consistent-generic-constructors'?: Linter.RuleEntry<TypescriptEslintConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  '@typescript-eslint/consistent-indexed-object-style'?: Linter.RuleEntry<TypescriptEslintConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  '@typescript-eslint/consistent-return'?: Linter.RuleEntry<TypescriptEslintConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  '@typescript-eslint/consistent-type-assertions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  '@typescript-eslint/consistent-type-definitions'?: Linter.RuleEntry<TypescriptEslintConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  '@typescript-eslint/consistent-type-exports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports'?: Linter.RuleEntry<TypescriptEslintConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  '@typescript-eslint/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  '@typescript-eslint/dot-notation'?: Linter.RuleEntry<TypescriptEslintDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  '@typescript-eslint/explicit-function-return-type'?: Linter.RuleEntry<TypescriptEslintExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  '@typescript-eslint/explicit-member-accessibility'?: Linter.RuleEntry<TypescriptEslintExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  '@typescript-eslint/explicit-module-boundary-types'?: Linter.RuleEntry<TypescriptEslintExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  '@typescript-eslint/init-declarations'?: Linter.RuleEntry<TypescriptEslintInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  '@typescript-eslint/max-params'?: Linter.RuleEntry<TypescriptEslintMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  '@typescript-eslint/member-ordering'?: Linter.RuleEntry<TypescriptEslintMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  '@typescript-eslint/method-signature-style'?: Linter.RuleEntry<TypescriptEslintMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  '@typescript-eslint/naming-convention'?: Linter.RuleEntry<TypescriptEslintNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  '@typescript-eslint/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  '@typescript-eslint/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  '@typescript-eslint/no-base-to-string'?: Linter.RuleEntry<TypescriptEslintNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  '@typescript-eslint/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  '@typescript-eslint/no-confusing-void-expression'?: Linter.RuleEntry<TypescriptEslintNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  '@typescript-eslint/no-deprecated'?: Linter.RuleEntry<TypescriptEslintNoDeprecated>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  '@typescript-eslint/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  '@typescript-eslint/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  '@typescript-eslint/no-duplicate-type-constituents'?: Linter.RuleEntry<TypescriptEslintNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  '@typescript-eslint/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  '@typescript-eslint/no-empty-function'?: Linter.RuleEntry<TypescriptEslintNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  '@typescript-eslint/no-empty-interface'?: Linter.RuleEntry<TypescriptEslintNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  '@typescript-eslint/no-empty-object-type'?: Linter.RuleEntry<TypescriptEslintNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  '@typescript-eslint/no-explicit-any'?: Linter.RuleEntry<TypescriptEslintNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  '@typescript-eslint/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  '@typescript-eslint/no-extraneous-class'?: Linter.RuleEntry<TypescriptEslintNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  '@typescript-eslint/no-floating-promises'?: Linter.RuleEntry<TypescriptEslintNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  '@typescript-eslint/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like functions
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  '@typescript-eslint/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  '@typescript-eslint/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  '@typescript-eslint/no-inferrable-types'?: Linter.RuleEntry<TypescriptEslintNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  '@typescript-eslint/no-invalid-this'?: Linter.RuleEntry<TypescriptEslintNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  '@typescript-eslint/no-invalid-void-type'?: Linter.RuleEntry<TypescriptEslintNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  '@typescript-eslint/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  '@typescript-eslint/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  '@typescript-eslint/no-magic-numbers'?: Linter.RuleEntry<TypescriptEslintNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  '@typescript-eslint/no-meaningless-void-operator'?: Linter.RuleEntry<TypescriptEslintNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  '@typescript-eslint/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  '@typescript-eslint/no-misused-promises'?: Linter.RuleEntry<TypescriptEslintNoMisusedPromises>
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   * @see https://typescript-eslint.io/rules/no-misused-spread
   */
  '@typescript-eslint/no-misused-spread'?: Linter.RuleEntry<TypescriptEslintNoMisusedSpread>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  '@typescript-eslint/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  '@typescript-eslint/no-namespace'?: Linter.RuleEntry<TypescriptEslintNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  '@typescript-eslint/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  '@typescript-eslint/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  '@typescript-eslint/no-redeclare'?: Linter.RuleEntry<TypescriptEslintNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  '@typescript-eslint/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  '@typescript-eslint/no-require-imports'?: Linter.RuleEntry<TypescriptEslintNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  '@typescript-eslint/no-restricted-imports'?: Linter.RuleEntry<TypescriptEslintNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  '@typescript-eslint/no-restricted-types'?: Linter.RuleEntry<TypescriptEslintNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  '@typescript-eslint/no-shadow'?: Linter.RuleEntry<TypescriptEslintNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  '@typescript-eslint/no-this-alias'?: Linter.RuleEntry<TypescriptEslintNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  '@typescript-eslint/no-type-alias'?: Linter.RuleEntry<TypescriptEslintNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  '@typescript-eslint/no-unnecessary-condition'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  '@typescript-eslint/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  '@typescript-eslint/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  '@typescript-eslint/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  '@typescript-eslint/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  '@typescript-eslint/no-unnecessary-type-assertion'?: Linter.RuleEntry<TypescriptEslintNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  '@typescript-eslint/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow conversion idioms when they do not change the type or value of the expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-conversion
   */
  '@typescript-eslint/no-unnecessary-type-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  '@typescript-eslint/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  '@typescript-eslint/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  '@typescript-eslint/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  '@typescript-eslint/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  '@typescript-eslint/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  '@typescript-eslint/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  '@typescript-eslint/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  '@typescript-eslint/no-unsafe-member-access'?: Linter.RuleEntry<TypescriptEslintNoUnsafeMemberAccess>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  '@typescript-eslint/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  '@typescript-eslint/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  '@typescript-eslint/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  '@typescript-eslint/no-unused-expressions'?: Linter.RuleEntry<TypescriptEslintNoUnusedExpressions>
  /**
   * Disallow unused private class members
   * @see https://typescript-eslint.io/rules/no-unused-private-class-members
   */
  '@typescript-eslint/no-unused-private-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  '@typescript-eslint/no-unused-vars'?: Linter.RuleEntry<TypescriptEslintNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  '@typescript-eslint/no-use-before-define'?: Linter.RuleEntry<TypescriptEslintNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  '@typescript-eslint/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow default values that will never be used
   * @see https://typescript-eslint.io/rules/no-useless-default-assignment
   */
  '@typescript-eslint/no-useless-default-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  '@typescript-eslint/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  '@typescript-eslint/no-var-requires'?: Linter.RuleEntry<TypescriptEslintNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  '@typescript-eslint/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type assertions
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  '@typescript-eslint/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  '@typescript-eslint/only-throw-error'?: Linter.RuleEntry<TypescriptEslintOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  '@typescript-eslint/parameter-properties'?: Linter.RuleEntry<TypescriptEslintParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  '@typescript-eslint/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  '@typescript-eslint/prefer-destructuring'?: Linter.RuleEntry<TypescriptEslintPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  '@typescript-eslint/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  '@typescript-eslint/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  '@typescript-eslint/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  '@typescript-eslint/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  '@typescript-eslint/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  '@typescript-eslint/prefer-literal-enum-member'?: Linter.RuleEntry<TypescriptEslintPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  '@typescript-eslint/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  '@typescript-eslint/prefer-nullish-coalescing'?: Linter.RuleEntry<TypescriptEslintPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  '@typescript-eslint/prefer-optional-chain'?: Linter.RuleEntry<TypescriptEslintPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  '@typescript-eslint/prefer-promise-reject-errors'?: Linter.RuleEntry<TypescriptEslintPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  '@typescript-eslint/prefer-readonly'?: Linter.RuleEntry<TypescriptEslintPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  '@typescript-eslint/prefer-readonly-parameter-types'?: Linter.RuleEntry<TypescriptEslintPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  '@typescript-eslint/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  '@typescript-eslint/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  '@typescript-eslint/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  '@typescript-eslint/prefer-string-starts-ends-with'?: Linter.RuleEntry<TypescriptEslintPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  '@typescript-eslint/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  '@typescript-eslint/promise-function-async'?: Linter.RuleEntry<TypescriptEslintPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  '@typescript-eslint/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  '@typescript-eslint/require-array-sort-compare'?: Linter.RuleEntry<TypescriptEslintRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  '@typescript-eslint/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  '@typescript-eslint/restrict-plus-operands'?: Linter.RuleEntry<TypescriptEslintRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  '@typescript-eslint/restrict-template-expressions'?: Linter.RuleEntry<TypescriptEslintRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  '@typescript-eslint/return-await'?: Linter.RuleEntry<TypescriptEslintReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  '@typescript-eslint/sort-type-constituents'?: Linter.RuleEntry<TypescriptEslintSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  '@typescript-eslint/strict-boolean-expressions'?: Linter.RuleEntry<TypescriptEslintStrictBooleanExpressions>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  '@typescript-eslint/switch-exhaustiveness-check'?: Linter.RuleEntry<TypescriptEslintSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  '@typescript-eslint/triple-slash-reference'?: Linter.RuleEntry<TypescriptEslintTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   * @deprecated
   */
  '@typescript-eslint/typedef'?: Linter.RuleEntry<TypescriptEslintTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  '@typescript-eslint/unbound-method'?: Linter.RuleEntry<TypescriptEslintUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  '@typescript-eslint/unified-signatures'?: Linter.RuleEntry<TypescriptEslintUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
  /**
   * Enforce linebreaks after opening and before closing array brackets in `<template>`
   * @see https://eslint.vuejs.org/rules/array-bracket-newline.html
   */
  'vue/array-bracket-newline'?: Linter.RuleEntry<VueArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets in `<template>`
   * @see https://eslint.vuejs.org/rules/array-bracket-spacing.html
   */
  'vue/array-bracket-spacing'?: Linter.RuleEntry<VueArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element in `<template>`
   * @see https://eslint.vuejs.org/rules/array-element-newline.html
   */
  'vue/array-element-newline'?: Linter.RuleEntry<VueArrayElementNewline>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions in `<template>`
   * @see https://eslint.vuejs.org/rules/arrow-spacing.html
   */
  'vue/arrow-spacing'?: Linter.RuleEntry<VueArrowSpacing>
  /**
   * enforce attribute naming style on custom components in template
   * @see https://eslint.vuejs.org/rules/attribute-hyphenation.html
   */
  'vue/attribute-hyphenation'?: Linter.RuleEntry<VueAttributeHyphenation>
  /**
   * enforce order of attributes
   * @see https://eslint.vuejs.org/rules/attributes-order.html
   */
  'vue/attributes-order'?: Linter.RuleEntry<VueAttributesOrder>
  /**
   * disallow use other than available `lang`
   * @see https://eslint.vuejs.org/rules/block-lang.html
   */
  'vue/block-lang'?: Linter.RuleEntry<VueBlockLang>
  /**
   * enforce order of component top-level elements
   * @see https://eslint.vuejs.org/rules/block-order.html
   */
  'vue/block-order'?: Linter.RuleEntry<VueBlockOrder>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`
   * @see https://eslint.vuejs.org/rules/block-spacing.html
   */
  'vue/block-spacing'?: Linter.RuleEntry<VueBlockSpacing>
  /**
   * enforce line breaks after opening and before closing block-level tags
   * @see https://eslint.vuejs.org/rules/block-tag-newline.html
   */
  'vue/block-tag-newline'?: Linter.RuleEntry<VueBlockTagNewline>
  /**
   * Enforce consistent brace style for blocks in `<template>`
   * @see https://eslint.vuejs.org/rules/brace-style.html
   */
  'vue/brace-style'?: Linter.RuleEntry<VueBraceStyle>
  /**
   * Enforce camelcase naming convention in `<template>`
   * @see https://eslint.vuejs.org/rules/camelcase.html
   */
  'vue/camelcase'?: Linter.RuleEntry<VueCamelcase>
  /**
   * Require or disallow trailing commas in `<template>`
   * @see https://eslint.vuejs.org/rules/comma-dangle.html
   */
  'vue/comma-dangle'?: Linter.RuleEntry<VueCommaDangle>
  /**
   * Enforce consistent spacing before and after commas in `<template>`
   * @see https://eslint.vuejs.org/rules/comma-spacing.html
   */
  'vue/comma-spacing'?: Linter.RuleEntry<VueCommaSpacing>
  /**
   * Enforce consistent comma style in `<template>`
   * @see https://eslint.vuejs.org/rules/comma-style.html
   */
  'vue/comma-style'?: Linter.RuleEntry<VueCommaStyle>
  /**
   * support comment-directives in `<template>`
   * @see https://eslint.vuejs.org/rules/comment-directive.html
   */
  'vue/comment-directive'?: Linter.RuleEntry<VueCommentDirective>
  /**
   * enforce component API style
   * @see https://eslint.vuejs.org/rules/component-api-style.html
   */
  'vue/component-api-style'?: Linter.RuleEntry<VueComponentApiStyle>
  /**
   * enforce specific casing for component definition name
   * @see https://eslint.vuejs.org/rules/component-definition-name-casing.html
   */
  'vue/component-definition-name-casing'?: Linter.RuleEntry<VueComponentDefinitionNameCasing>
  /**
   * enforce specific casing for the component naming style in template
   * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
   */
  'vue/component-name-in-template-casing'?: Linter.RuleEntry<VueComponentNameInTemplateCasing>
  /**
   * enforce the casing of component name in `components` options
   * @see https://eslint.vuejs.org/rules/component-options-name-casing.html
   */
  'vue/component-options-name-casing'?: Linter.RuleEntry<VueComponentOptionsNameCasing>
  /**
   * enforce specific casing for custom event name
   * @see https://eslint.vuejs.org/rules/custom-event-name-casing.html
   */
  'vue/custom-event-name-casing'?: Linter.RuleEntry<VueCustomEventNameCasing>
  /**
   * enforce declaration style of `defineEmits`
   * @see https://eslint.vuejs.org/rules/define-emits-declaration.html
   */
  'vue/define-emits-declaration'?: Linter.RuleEntry<VueDefineEmitsDeclaration>
  /**
   * enforce order of compiler macros (`defineProps`, `defineEmits`, etc.)
   * @see https://eslint.vuejs.org/rules/define-macros-order.html
   */
  'vue/define-macros-order'?: Linter.RuleEntry<VueDefineMacrosOrder>
  /**
   * enforce declaration style of `defineProps`
   * @see https://eslint.vuejs.org/rules/define-props-declaration.html
   */
  'vue/define-props-declaration'?: Linter.RuleEntry<VueDefinePropsDeclaration>
  /**
   * enforce consistent style for props destructuring
   * @see https://eslint.vuejs.org/rules/define-props-destructuring.html
   */
  'vue/define-props-destructuring'?: Linter.RuleEntry<VueDefinePropsDestructuring>
  /**
   * Enforce consistent newlines before and after dots in `<template>`
   * @see https://eslint.vuejs.org/rules/dot-location.html
   */
  'vue/dot-location'?: Linter.RuleEntry<VueDotLocation>
  /**
   * Enforce dot notation whenever possible in `<template>`
   * @see https://eslint.vuejs.org/rules/dot-notation.html
   */
  'vue/dot-notation'?: Linter.RuleEntry<VueDotNotation>
  /**
   * enforce or forbid the use of the `scoped` and `module` attributes in SFC top level style tags
   * @see https://eslint.vuejs.org/rules/enforce-style-attribute.html
   */
  'vue/enforce-style-attribute'?: Linter.RuleEntry<VueEnforceStyleAttribute>
  /**
   * Require the use of `===` and `!==` in `<template>`
   * @see https://eslint.vuejs.org/rules/eqeqeq.html
   */
  'vue/eqeqeq'?: Linter.RuleEntry<VueEqeqeq>
  /**
   * enforce the location of first attribute
   * @see https://eslint.vuejs.org/rules/first-attribute-linebreak.html
   */
  'vue/first-attribute-linebreak'?: Linter.RuleEntry<VueFirstAttributeLinebreak>
  /**
   * Require or disallow spacing between function identifiers and their invocations in `<template>`
   * @see https://eslint.vuejs.org/rules/func-call-spacing.html
   */
  'vue/func-call-spacing'?: Linter.RuleEntry<VueFuncCallSpacing>
  /**
   * disallow usage of button without an explicit type attribute
   * @see https://eslint.vuejs.org/rules/html-button-has-type.html
   */
  'vue/html-button-has-type'?: Linter.RuleEntry<VueHtmlButtonHasType>
  /**
   * require or disallow a line break before tag's closing brackets
   * @see https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
   */
  'vue/html-closing-bracket-newline'?: Linter.RuleEntry<VueHtmlClosingBracketNewline>
  /**
   * require or disallow a space before tag's closing brackets
   * @see https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
   */
  'vue/html-closing-bracket-spacing'?: Linter.RuleEntry<VueHtmlClosingBracketSpacing>
  /**
   * enforce unified line break in HTML comments
   * @see https://eslint.vuejs.org/rules/html-comment-content-newline.html
   */
  'vue/html-comment-content-newline'?: Linter.RuleEntry<VueHtmlCommentContentNewline>
  /**
   * enforce unified spacing in HTML comments
   * @see https://eslint.vuejs.org/rules/html-comment-content-spacing.html
   */
  'vue/html-comment-content-spacing'?: Linter.RuleEntry<VueHtmlCommentContentSpacing>
  /**
   * enforce consistent indentation in HTML comments
   * @see https://eslint.vuejs.org/rules/html-comment-indent.html
   */
  'vue/html-comment-indent'?: Linter.RuleEntry<VueHtmlCommentIndent>
  /**
   * enforce end tag style
   * @see https://eslint.vuejs.org/rules/html-end-tags.html
   */
  'vue/html-end-tags'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent indentation in `<template>`
   * @see https://eslint.vuejs.org/rules/html-indent.html
   */
  'vue/html-indent'?: Linter.RuleEntry<VueHtmlIndent>
  /**
   * enforce quotes style of HTML attributes
   * @see https://eslint.vuejs.org/rules/html-quotes.html
   */
  'vue/html-quotes'?: Linter.RuleEntry<VueHtmlQuotes>
  /**
   * enforce self-closing style
   * @see https://eslint.vuejs.org/rules/html-self-closing.html
   */
  'vue/html-self-closing'?: Linter.RuleEntry<VueHtmlSelfClosing>
  /**
   * prevent variables used in JSX to be marked as unused
   * @see https://eslint.vuejs.org/rules/jsx-uses-vars.html
   */
  'vue/jsx-uses-vars'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent spacing between keys and values in object literal properties in `<template>`
   * @see https://eslint.vuejs.org/rules/key-spacing.html
   */
  'vue/key-spacing'?: Linter.RuleEntry<VueKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords in `<template>`
   * @see https://eslint.vuejs.org/rules/keyword-spacing.html
   */
  'vue/keyword-spacing'?: Linter.RuleEntry<VueKeywordSpacing>
  /**
   * require component name property to match its file name
   * @see https://eslint.vuejs.org/rules/match-component-file-name.html
   */
  'vue/match-component-file-name'?: Linter.RuleEntry<VueMatchComponentFileName>
  /**
   * require the registered component name to match the imported component name
   * @see https://eslint.vuejs.org/rules/match-component-import-name.html
   */
  'vue/match-component-import-name'?: Linter.RuleEntry<[]>
  /**
   * enforce the maximum number of attributes per line
   * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
   */
  'vue/max-attributes-per-line'?: Linter.RuleEntry<VueMaxAttributesPerLine>
  /**
   * enforce a maximum line length in `.vue` files
   * @see https://eslint.vuejs.org/rules/max-len.html
   */
  'vue/max-len'?: Linter.RuleEntry<VueMaxLen>
  /**
   * enforce maximum number of lines in Vue SFC blocks
   * @see https://eslint.vuejs.org/rules/max-lines-per-block.html
   */
  'vue/max-lines-per-block'?: Linter.RuleEntry<VueMaxLinesPerBlock>
  /**
   * enforce maximum number of props in Vue component
   * @see https://eslint.vuejs.org/rules/max-props.html
   */
  'vue/max-props'?: Linter.RuleEntry<VueMaxProps>
  /**
   * enforce maximum depth of template
   * @see https://eslint.vuejs.org/rules/max-template-depth.html
   */
  'vue/max-template-depth'?: Linter.RuleEntry<VueMaxTemplateDepth>
  /**
   * require component names to be always multi-word
   * @see https://eslint.vuejs.org/rules/multi-word-component-names.html
   */
  'vue/multi-word-component-names'?: Linter.RuleEntry<VueMultiWordComponentNames>
  /**
   * require a line break before and after the contents of a multiline element
   * @see https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
   */
  'vue/multiline-html-element-content-newline'?: Linter.RuleEntry<VueMultilineHtmlElementContentNewline>
  /**
   * Enforce newlines between operands of ternary expressions in `<template>`
   * @see https://eslint.vuejs.org/rules/multiline-ternary.html
   */
  'vue/multiline-ternary'?: Linter.RuleEntry<VueMultilineTernary>
  /**
   * enforce unified spacing in mustache interpolations
   * @see https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
   */
  'vue/mustache-interpolation-spacing'?: Linter.RuleEntry<VueMustacheInterpolationSpacing>
  /**
   * enforce new lines between multi-line properties in Vue components
   * @see https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
   */
  'vue/new-line-between-multi-line-property'?: Linter.RuleEntry<VueNewLineBetweenMultiLineProperty>
  /**
   * enforce Promise or callback style in `nextTick`
   * @see https://eslint.vuejs.org/rules/next-tick-style.html
   */
  'vue/next-tick-style'?: Linter.RuleEntry<VueNextTickStyle>
  /**
   * disallow using arrow functions to define watcher
   * @see https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
   */
  'vue/no-arrow-functions-in-watch'?: Linter.RuleEntry<[]>
  /**
   * disallow asynchronous actions in computed properties
   * @see https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
   */
  'vue/no-async-in-computed-properties'?: Linter.RuleEntry<VueNoAsyncInComputedProperties>
  /**
   * disallow the use of bare strings in `<template>`
   * @see https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
   */
  'vue/no-bare-strings-in-template'?: Linter.RuleEntry<VueNoBareStringsInTemplate>
  /**
   * disallow boolean defaults
   * @see https://eslint.vuejs.org/rules/no-boolean-default.html
   */
  'vue/no-boolean-default'?: Linter.RuleEntry<VueNoBooleanDefault>
  /**
   * disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`
   * @see https://eslint.vuejs.org/rules/no-child-content.html
   */
  'vue/no-child-content'?: Linter.RuleEntry<VueNoChildContent>
  /**
   * disallow accessing computed properties in `data`
   * @see https://eslint.vuejs.org/rules/no-computed-properties-in-data.html
   */
  'vue/no-computed-properties-in-data'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `console` in `<template>`
   * @see https://eslint.vuejs.org/rules/no-console.html
   */
  'vue/no-console'?: Linter.RuleEntry<VueNoConsole>
  /**
   * Disallow constant expressions in conditions in `<template>`
   * @see https://eslint.vuejs.org/rules/no-constant-condition.html
   */
  'vue/no-constant-condition'?: Linter.RuleEntry<VueNoConstantCondition>
  /**
   * disallow custom modifiers on v-model used on the component
   * @see https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html
   */
  'vue/no-custom-modifiers-on-v-model'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
   */
  'vue/no-deprecated-data-object-declaration'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `$delete` and `$set` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-delete-set.html
   */
  'vue/no-deprecated-delete-set'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
   */
  'vue/no-deprecated-destroyed-lifecycle'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `$listeners` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
   */
  'vue/no-deprecated-dollar-listeners-api'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
   */
  'vue/no-deprecated-dollar-scopedslots-api'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated events api (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-events-api.html
   */
  'vue/no-deprecated-events-api'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated filters syntax (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-filter.html
   */
  'vue/no-deprecated-filter'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated the `functional` template (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
   */
  'vue/no-deprecated-functional-template'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
   */
  'vue/no-deprecated-html-element-is'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
   */
  'vue/no-deprecated-inline-template'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated `model` definition (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-model-definition.html
   */
  'vue/no-deprecated-model-definition'?: Linter.RuleEntry<VueNoDeprecatedModelDefinition>
  /**
   * disallow deprecated `this` access in props default function (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
   */
  'vue/no-deprecated-props-default-this'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html
   */
  'vue/no-deprecated-router-link-tag-prop'?: Linter.RuleEntry<VueNoDeprecatedRouterLinkTagProp>
  /**
   * disallow deprecated `scope` attribute (in Vue.js 2.5.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
   */
  'vue/no-deprecated-scope-attribute'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated `slot` attribute (in Vue.js 2.6.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
   */
  'vue/no-deprecated-slot-attribute'?: Linter.RuleEntry<VueNoDeprecatedSlotAttribute>
  /**
   * disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
   */
  'vue/no-deprecated-slot-scope-attribute'?: Linter.RuleEntry<[]>
  /**
   * disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
   */
  'vue/no-deprecated-v-bind-sync'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated `v-is` directive (in Vue.js 3.1.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-v-is.html
   */
  'vue/no-deprecated-v-is'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
   */
  'vue/no-deprecated-v-on-native-modifier'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
   */
  'vue/no-deprecated-v-on-number-modifiers'?: Linter.RuleEntry<[]>
  /**
   * disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+)
   * @see https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html
   */
  'vue/no-deprecated-vue-config-keycodes'?: Linter.RuleEntry<[]>
  /**
   * disallow duplication of field names
   * @see https://eslint.vuejs.org/rules/no-dupe-keys.html
   */
  'vue/no-dupe-keys'?: Linter.RuleEntry<VueNoDupeKeys>
  /**
   * disallow duplicate conditions in `v-if` / `v-else-if` chains
   * @see https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
   */
  'vue/no-dupe-v-else-if'?: Linter.RuleEntry<[]>
  /**
   * enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`
   * @see https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
   */
  'vue/no-duplicate-attr-inheritance'?: Linter.RuleEntry<VueNoDuplicateAttrInheritance>
  /**
   * disallow duplication of attributes
   * @see https://eslint.vuejs.org/rules/no-duplicate-attributes.html
   */
  'vue/no-duplicate-attributes'?: Linter.RuleEntry<VueNoDuplicateAttributes>
  /**
   * disallow duplication of class names in class attributes
   * @see https://eslint.vuejs.org/rules/no-duplicate-class-names.html
   */
  'vue/no-duplicate-class-names'?: Linter.RuleEntry<[]>
  /**
   * disallow the `<template>` `<script>` `<style>` block to be empty
   * @see https://eslint.vuejs.org/rules/no-empty-component-block.html
   */
  'vue/no-empty-component-block'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty destructuring patterns in `<template>`
   * @see https://eslint.vuejs.org/rules/no-empty-pattern.html
   */
  'vue/no-empty-pattern'?: Linter.RuleEntry<VueNoEmptyPattern>
  /**
   * disallow `export` in `<script setup>`
   * @see https://eslint.vuejs.org/rules/no-export-in-script-setup.html
   */
  'vue/no-export-in-script-setup'?: Linter.RuleEntry<[]>
  /**
   * disallow asynchronously registered `expose`
   * @see https://eslint.vuejs.org/rules/no-expose-after-await.html
   */
  'vue/no-expose-after-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary parentheses in `<template>`
   * @see https://eslint.vuejs.org/rules/no-extra-parens.html
   */
  'vue/no-extra-parens'?: Linter.RuleEntry<VueNoExtraParens>
  /**
   * Disallow shorthand type conversions in `<template>`
   * @see https://eslint.vuejs.org/rules/no-implicit-coercion.html
   */
  'vue/no-implicit-coercion'?: Linter.RuleEntry<VueNoImplicitCoercion>
  /**
   * disallow importing Vue compiler macros
   * @see https://eslint.vuejs.org/rules/no-import-compiler-macros.html
   */
  'vue/no-import-compiler-macros'?: Linter.RuleEntry<[]>
  /**
   * disallow irregular whitespace in `.vue` files
   * @see https://eslint.vuejs.org/rules/no-irregular-whitespace.html
   */
  'vue/no-irregular-whitespace'?: Linter.RuleEntry<VueNoIrregularWhitespace>
  /**
   * disallow asynchronously registered lifecycle hooks
   * @see https://eslint.vuejs.org/rules/no-lifecycle-after-await.html
   */
  'vue/no-lifecycle-after-await'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary `<template>`
   * @see https://eslint.vuejs.org/rules/no-lone-template.html
   */
  'vue/no-lone-template'?: Linter.RuleEntry<VueNoLoneTemplate>
  /**
   * Disallow literal numbers that lose precision in `<template>`
   * @see https://eslint.vuejs.org/rules/no-loss-of-precision.html
   */
  'vue/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * disallow multiple spaces
   * @see https://eslint.vuejs.org/rules/no-multi-spaces.html
   */
  'vue/no-multi-spaces'?: Linter.RuleEntry<VueNoMultiSpaces>
  /**
   * disallow passing multiple objects in an array to class
   * @see https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
   */
  'vue/no-multiple-objects-in-class'?: Linter.RuleEntry<[]>
  /**
   * disallow passing multiple arguments to scoped slots
   * @see https://eslint.vuejs.org/rules/no-multiple-slot-args.html
   */
  'vue/no-multiple-slot-args'?: Linter.RuleEntry<[]>
  /**
   * disallow adding multiple root nodes to the template
   * @see https://eslint.vuejs.org/rules/no-multiple-template-root.html
   */
  'vue/no-multiple-template-root'?: Linter.RuleEntry<VueNoMultipleTemplateRoot>
  /**
   * disallow mutation of component props
   * @see https://eslint.vuejs.org/rules/no-mutating-props.html
   */
  'vue/no-mutating-props'?: Linter.RuleEntry<VueNoMutatingProps>
  /**
   * Disallow negated conditions in `<template>`
   * @see https://eslint.vuejs.org/rules/no-negated-condition.html
   */
  'vue/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * disallow negated conditions in v-if/v-else
   * @see https://eslint.vuejs.org/rules/no-negated-v-if-condition.html
   */
  'vue/no-negated-v-if-condition'?: Linter.RuleEntry<[]>
  /**
   * disallow parsing errors in `<template>`
   * @see https://eslint.vuejs.org/rules/no-parsing-error.html
   */
  'vue/no-parsing-error'?: Linter.RuleEntry<VueNoParsingError>
  /**
   * disallow a potential typo in your component property
   * @see https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
   */
  'vue/no-potential-component-option-typo'?: Linter.RuleEntry<VueNoPotentialComponentOptionTypo>
  /**
   * disallow use of value wrapped by `ref()` (Composition API) as an operand
   * @see https://eslint.vuejs.org/rules/no-ref-as-operand.html
   */
  'vue/no-ref-as-operand'?: Linter.RuleEntry<[]>
  /**
   * disallow usages of ref objects that can lead to loss of reactivity
   * @see https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html
   */
  'vue/no-ref-object-reactivity-loss'?: Linter.RuleEntry<[]>
  /**
   * enforce props with default values to be optional
   * @see https://eslint.vuejs.org/rules/no-required-prop-with-default.html
   */
  'vue/no-required-prop-with-default'?: Linter.RuleEntry<VueNoRequiredPropWithDefault>
  /**
   * disallow the use of reserved names in component definitions
   * @see https://eslint.vuejs.org/rules/no-reserved-component-names.html
   */
  'vue/no-reserved-component-names'?: Linter.RuleEntry<VueNoReservedComponentNames>
  /**
   * disallow overwriting reserved keys
   * @see https://eslint.vuejs.org/rules/no-reserved-keys.html
   */
  'vue/no-reserved-keys'?: Linter.RuleEntry<VueNoReservedKeys>
  /**
   * disallow reserved names in props
   * @see https://eslint.vuejs.org/rules/no-reserved-props.html
   */
  'vue/no-reserved-props'?: Linter.RuleEntry<VueNoReservedProps>
  /**
   * disallow specific block
   * @see https://eslint.vuejs.org/rules/no-restricted-block.html
   */
  'vue/no-restricted-block'?: Linter.RuleEntry<VueNoRestrictedBlock>
  /**
   * disallow asynchronously called restricted methods
   * @see https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
   */
  'vue/no-restricted-call-after-await'?: Linter.RuleEntry<VueNoRestrictedCallAfterAwait>
  /**
   * disallow specific classes in Vue components
   * @see https://eslint.vuejs.org/rules/no-restricted-class.html
   */
  'vue/no-restricted-class'?: Linter.RuleEntry<VueNoRestrictedClass>
  /**
   * disallow specific component names
   * @see https://eslint.vuejs.org/rules/no-restricted-component-names.html
   */
  'vue/no-restricted-component-names'?: Linter.RuleEntry<VueNoRestrictedComponentNames>
  /**
   * disallow specific component option
   * @see https://eslint.vuejs.org/rules/no-restricted-component-options.html
   */
  'vue/no-restricted-component-options'?: Linter.RuleEntry<VueNoRestrictedComponentOptions>
  /**
   * disallow specific custom event
   * @see https://eslint.vuejs.org/rules/no-restricted-custom-event.html
   */
  'vue/no-restricted-custom-event'?: Linter.RuleEntry<VueNoRestrictedCustomEvent>
  /**
   * disallow specific elements
   * @see https://eslint.vuejs.org/rules/no-restricted-html-elements.html
   */
  'vue/no-restricted-html-elements'?: Linter.RuleEntry<VueNoRestrictedHtmlElements>
  /**
   * disallow specific props
   * @see https://eslint.vuejs.org/rules/no-restricted-props.html
   */
  'vue/no-restricted-props'?: Linter.RuleEntry<VueNoRestrictedProps>
  /**
   * disallow specific attribute
   * @see https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
   */
  'vue/no-restricted-static-attribute'?: Linter.RuleEntry<VueNoRestrictedStaticAttribute>
  /**
   * Disallow specified syntax in `<template>`
   * @see https://eslint.vuejs.org/rules/no-restricted-syntax.html
   */
  'vue/no-restricted-syntax'?: Linter.RuleEntry<VueNoRestrictedSyntax>
  /**
   * disallow specific argument in `v-bind`
   * @see https://eslint.vuejs.org/rules/no-restricted-v-bind.html
   */
  'vue/no-restricted-v-bind'?: Linter.RuleEntry<VueNoRestrictedVBind>
  /**
   * disallow specific argument in `v-on`
   * @see https://eslint.vuejs.org/rules/no-restricted-v-on.html
   */
  'vue/no-restricted-v-on'?: Linter.RuleEntry<VueNoRestrictedVOn>
  /**
   * disallow `v-if` directives on root element
   * @see https://eslint.vuejs.org/rules/no-root-v-if.html
   */
  'vue/no-root-v-if'?: Linter.RuleEntry<[]>
  /**
   * disallow usages that lose the reactivity of `props` passed to `setup`
   * @see https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html
   */
  'vue/no-setup-props-reactivity-loss'?: Linter.RuleEntry<[]>
  /**
   * enforce component's data property to be a function
   * @see https://eslint.vuejs.org/rules/no-shared-component-data.html
   */
  'vue/no-shared-component-data'?: Linter.RuleEntry<[]>
  /**
   * disallow side effects in computed properties
   * @see https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
   */
  'vue/no-side-effects-in-computed-properties'?: Linter.RuleEntry<[]>
  /**
   * disallow spaces around equal signs in attribute
   * @see https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
   */
  'vue/no-spaces-around-equal-signs-in-attribute'?: Linter.RuleEntry<[]>
  /**
   * Disallow sparse arrays in `<template>`
   * @see https://eslint.vuejs.org/rules/no-sparse-arrays.html
   */
  'vue/no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * disallow static inline `style` attributes
   * @see https://eslint.vuejs.org/rules/no-static-inline-styles.html
   */
  'vue/no-static-inline-styles'?: Linter.RuleEntry<VueNoStaticInlineStyles>
  /**
   * disallow `key` attribute on `<template>`
   * @see https://eslint.vuejs.org/rules/no-template-key.html
   */
  'vue/no-template-key'?: Linter.RuleEntry<[]>
  /**
   * disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://eslint.vuejs.org/rules/no-template-shadow.html
   */
  'vue/no-template-shadow'?: Linter.RuleEntry<VueNoTemplateShadow>
  /**
   * disallow target="_blank" attribute without rel="noopener noreferrer"
   * @see https://eslint.vuejs.org/rules/no-template-target-blank.html
   */
  'vue/no-template-target-blank'?: Linter.RuleEntry<VueNoTemplateTargetBlank>
  /**
   * disallow mustaches in `<textarea>`
   * @see https://eslint.vuejs.org/rules/no-textarea-mustache.html
   */
  'vue/no-textarea-mustache'?: Linter.RuleEntry<[]>
  /**
   * disallow `this` usage in a `beforeRouteEnter` method
   * @see https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
   */
  'vue/no-this-in-before-route-enter'?: Linter.RuleEntry<[]>
  /**
   * disallow use of undefined components in `<template>`
   * @see https://eslint.vuejs.org/rules/no-undef-components.html
   */
  'vue/no-undef-components'?: Linter.RuleEntry<VueNoUndefComponents>
  /**
   * disallow undefined properties
   * @see https://eslint.vuejs.org/rules/no-undef-properties.html
   */
  'vue/no-undef-properties'?: Linter.RuleEntry<VueNoUndefProperties>
  /**
   * disallow unsupported Vue.js syntax on the specified version
   * @see https://eslint.vuejs.org/rules/no-unsupported-features.html
   */
  'vue/no-unsupported-features'?: Linter.RuleEntry<VueNoUnsupportedFeatures>
  /**
   * disallow registering components that are not used inside templates
   * @see https://eslint.vuejs.org/rules/no-unused-components.html
   */
  'vue/no-unused-components'?: Linter.RuleEntry<VueNoUnusedComponents>
  /**
   * disallow unused emit declarations
   * @see https://eslint.vuejs.org/rules/no-unused-emit-declarations.html
   */
  'vue/no-unused-emit-declarations'?: Linter.RuleEntry<[]>
  /**
   * disallow unused properties
   * @see https://eslint.vuejs.org/rules/no-unused-properties.html
   */
  'vue/no-unused-properties'?: Linter.RuleEntry<VueNoUnusedProperties>
  /**
   * disallow unused refs
   * @see https://eslint.vuejs.org/rules/no-unused-refs.html
   */
  'vue/no-unused-refs'?: Linter.RuleEntry<[]>
  /**
   * disallow unused variable definitions of v-for directives or scope attributes
   * @see https://eslint.vuejs.org/rules/no-unused-vars.html
   */
  'vue/no-unused-vars'?: Linter.RuleEntry<VueNoUnusedVars>
  /**
   * disallow use computed property like method
   * @see https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html
   */
  'vue/no-use-computed-property-like-method'?: Linter.RuleEntry<[]>
  /**
   * disallow using `v-else-if`/`v-else` on the same element as `v-for`
   * @see https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html
   */
  'vue/no-use-v-else-with-v-for'?: Linter.RuleEntry<[]>
  /**
   * disallow using `v-if` on the same element as `v-for`
   * @see https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
   */
  'vue/no-use-v-if-with-v-for'?: Linter.RuleEntry<VueNoUseVIfWithVFor>
  /**
   * Disallow unnecessary concatenation of literals or template literals in `<template>`
   * @see https://eslint.vuejs.org/rules/no-useless-concat.html
   */
  'vue/no-useless-concat'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary mustache interpolations
   * @see https://eslint.vuejs.org/rules/no-useless-mustaches.html
   */
  'vue/no-useless-mustaches'?: Linter.RuleEntry<VueNoUselessMustaches>
  /**
   * disallow useless attribute on `<template>`
   * @see https://eslint.vuejs.org/rules/no-useless-template-attributes.html
   */
  'vue/no-useless-template-attributes'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary `v-bind` directives
   * @see https://eslint.vuejs.org/rules/no-useless-v-bind.html
   */
  'vue/no-useless-v-bind'?: Linter.RuleEntry<VueNoUselessVBind>
  /**
   * disallow `key` attribute on `<template v-for>`
   * @see https://eslint.vuejs.org/rules/no-v-for-template-key.html
   * @deprecated
   */
  'vue/no-v-for-template-key'?: Linter.RuleEntry<[]>
  /**
   * disallow key of `<template v-for>` placed on child elements
   * @see https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
   */
  'vue/no-v-for-template-key-on-child'?: Linter.RuleEntry<[]>
  /**
   * disallow use of v-html to prevent XSS attack
   * @see https://eslint.vuejs.org/rules/no-v-html.html
   */
  'vue/no-v-html'?: Linter.RuleEntry<VueNoVHtml>
  /**
   * disallow adding an argument to `v-model` used in custom component
   * @see https://eslint.vuejs.org/rules/no-v-model-argument.html
   * @deprecated
   */
  'vue/no-v-model-argument'?: Linter.RuleEntry<[]>
  /**
   * disallow use of v-text
   * @see https://eslint.vuejs.org/rules/no-v-text.html
   */
  'vue/no-v-text'?: Linter.RuleEntry<[]>
  /**
   * disallow v-text / v-html on component
   * @see https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html
   */
  'vue/no-v-text-v-html-on-component'?: Linter.RuleEntry<VueNoVTextVHtmlOnComponent>
  /**
   * disallow asynchronously registered `watch`
   * @see https://eslint.vuejs.org/rules/no-watch-after-await.html
   */
  'vue/no-watch-after-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent line breaks after opening and before closing braces in `<template>`
   * @see https://eslint.vuejs.org/rules/object-curly-newline.html
   */
  'vue/object-curly-newline'?: Linter.RuleEntry<VueObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces in `<template>`
   * @see https://eslint.vuejs.org/rules/object-curly-spacing.html
   */
  'vue/object-curly-spacing'?: Linter.RuleEntry<VueObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines in `<template>`
   * @see https://eslint.vuejs.org/rules/object-property-newline.html
   */
  'vue/object-property-newline'?: Linter.RuleEntry<VueObjectPropertyNewline>
  /**
   * Require or disallow method and property shorthand syntax for object literals in `<template>`
   * @see https://eslint.vuejs.org/rules/object-shorthand.html
   */
  'vue/object-shorthand'?: Linter.RuleEntry<VueObjectShorthand>
  /**
   * enforce that each component should be in its own file
   * @see https://eslint.vuejs.org/rules/one-component-per-file.html
   */
  'vue/one-component-per-file'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent linebreak style for operators in `<template>`
   * @see https://eslint.vuejs.org/rules/operator-linebreak.html
   */
  'vue/operator-linebreak'?: Linter.RuleEntry<VueOperatorLinebreak>
  /**
   * enforce order of properties in components
   * @see https://eslint.vuejs.org/rules/order-in-components.html
   */
  'vue/order-in-components'?: Linter.RuleEntry<VueOrderInComponents>
  /**
   * require or disallow padding lines between blocks
   * @see https://eslint.vuejs.org/rules/padding-line-between-blocks.html
   */
  'vue/padding-line-between-blocks'?: Linter.RuleEntry<VuePaddingLineBetweenBlocks>
  /**
   * require or disallow newlines between sibling tags in template
   * @see https://eslint.vuejs.org/rules/padding-line-between-tags.html
   */
  'vue/padding-line-between-tags'?: Linter.RuleEntry<VuePaddingLineBetweenTags>
  /**
   * require or disallow padding lines in component definition
   * @see https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html
   */
  'vue/padding-lines-in-component-definition'?: Linter.RuleEntry<VuePaddingLinesInComponentDefinition>
  /**
   * enforce use of `defineOptions` instead of default export
   * @see https://eslint.vuejs.org/rules/prefer-define-options.html
   */
  'vue/prefer-define-options'?: Linter.RuleEntry<[]>
  /**
   * enforce import from 'vue' instead of import from '@vue/*'
   * @see https://eslint.vuejs.org/rules/prefer-import-from-vue.html
   */
  'vue/prefer-import-from-vue'?: Linter.RuleEntry<[]>
  /**
   * enforce `Boolean` comes first in component prop types
   * @see https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html
   */
  'vue/prefer-prop-type-boolean-first'?: Linter.RuleEntry<[]>
  /**
   * require static class names in template to be in a separate `class` attribute
   * @see https://eslint.vuejs.org/rules/prefer-separate-static-class.html
   */
  'vue/prefer-separate-static-class'?: Linter.RuleEntry<[]>
  /**
   * Require template literals instead of string concatenation in `<template>`
   * @see https://eslint.vuejs.org/rules/prefer-template.html
   */
  'vue/prefer-template'?: Linter.RuleEntry<[]>
  /**
   * require shorthand form attribute when `v-bind` value is `true`
   * @see https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
   */
  'vue/prefer-true-attribute-shorthand'?: Linter.RuleEntry<VuePreferTrueAttributeShorthand>
  /**
   * require using `useTemplateRef` instead of `ref`/`shallowRef` for template refs
   * @see https://eslint.vuejs.org/rules/prefer-use-template-ref.html
   */
  'vue/prefer-use-template-ref'?: Linter.RuleEntry<[]>
  /**
   * enforce specific casing for the Prop name in Vue components
   * @see https://eslint.vuejs.org/rules/prop-name-casing.html
   */
  'vue/prop-name-casing'?: Linter.RuleEntry<VuePropNameCasing>
  /**
   * Require quotes around object literal property names in `<template>`
   * @see https://eslint.vuejs.org/rules/quote-props.html
   */
  'vue/quote-props'?: Linter.RuleEntry<VueQuoteProps>
  /**
   * require `v-bind:is` of `<component>` elements
   * @see https://eslint.vuejs.org/rules/require-component-is.html
   */
  'vue/require-component-is'?: Linter.RuleEntry<[]>
  /**
   * require components to be the default export
   * @see https://eslint.vuejs.org/rules/require-default-export.html
   */
  'vue/require-default-export'?: Linter.RuleEntry<[]>
  /**
   * require default value for props
   * @see https://eslint.vuejs.org/rules/require-default-prop.html
   */
  'vue/require-default-prop'?: Linter.RuleEntry<[]>
  /**
   * require the component to be directly exported
   * @see https://eslint.vuejs.org/rules/require-direct-export.html
   */
  'vue/require-direct-export'?: Linter.RuleEntry<VueRequireDirectExport>
  /**
   * require type definitions in emits
   * @see https://eslint.vuejs.org/rules/require-emit-validator.html
   */
  'vue/require-emit-validator'?: Linter.RuleEntry<[]>
  /**
   * require `emits` option with name triggered by `$emit()`
   * @see https://eslint.vuejs.org/rules/require-explicit-emits.html
   */
  'vue/require-explicit-emits'?: Linter.RuleEntry<VueRequireExplicitEmits>
  /**
   * require slots to be explicitly defined
   * @see https://eslint.vuejs.org/rules/require-explicit-slots.html
   */
  'vue/require-explicit-slots'?: Linter.RuleEntry<[]>
  /**
   * require declare public properties using `expose`
   * @see https://eslint.vuejs.org/rules/require-expose.html
   */
  'vue/require-expose'?: Linter.RuleEntry<[]>
  /**
   * require a certain macro variable name
   * @see https://eslint.vuejs.org/rules/require-macro-variable-name.html
   */
  'vue/require-macro-variable-name'?: Linter.RuleEntry<VueRequireMacroVariableName>
  /**
   * require a name property in Vue components
   * @see https://eslint.vuejs.org/rules/require-name-property.html
   */
  'vue/require-name-property'?: Linter.RuleEntry<[]>
  /**
   * require props to have a comment
   * @see https://eslint.vuejs.org/rules/require-prop-comment.html
   */
  'vue/require-prop-comment'?: Linter.RuleEntry<VueRequirePropComment>
  /**
   * require prop type to be a constructor
   * @see https://eslint.vuejs.org/rules/require-prop-type-constructor.html
   */
  'vue/require-prop-type-constructor'?: Linter.RuleEntry<[]>
  /**
   * require type definitions in props
   * @see https://eslint.vuejs.org/rules/require-prop-types.html
   */
  'vue/require-prop-types'?: Linter.RuleEntry<[]>
  /**
   * enforce render function to always return value
   * @see https://eslint.vuejs.org/rules/require-render-return.html
   */
  'vue/require-render-return'?: Linter.RuleEntry<[]>
  /**
   * enforce properties of `$slots` to be used as a function
   * @see https://eslint.vuejs.org/rules/require-slots-as-functions.html
   */
  'vue/require-slots-as-functions'?: Linter.RuleEntry<[]>
  /**
   * require control the display of the content inside `<transition>`
   * @see https://eslint.vuejs.org/rules/require-toggle-inside-transition.html
   */
  'vue/require-toggle-inside-transition'?: Linter.RuleEntry<VueRequireToggleInsideTransition>
  /**
   * enforce adding type declarations to object props
   * @see https://eslint.vuejs.org/rules/require-typed-object-prop.html
   */
  'vue/require-typed-object-prop'?: Linter.RuleEntry<[]>
  /**
   * require `ref` and `shallowRef` functions to be strongly typed
   * @see https://eslint.vuejs.org/rules/require-typed-ref.html
   */
  'vue/require-typed-ref'?: Linter.RuleEntry<[]>
  /**
   * require `v-bind:key` with `v-for` directives
   * @see https://eslint.vuejs.org/rules/require-v-for-key.html
   */
  'vue/require-v-for-key'?: Linter.RuleEntry<[]>
  /**
   * enforce props default values to be valid
   * @see https://eslint.vuejs.org/rules/require-valid-default-prop.html
   */
  'vue/require-valid-default-prop'?: Linter.RuleEntry<[]>
  /**
   * enforce using only specific component names
   * @see https://eslint.vuejs.org/rules/restricted-component-names.html
   */
  'vue/restricted-component-names'?: Linter.RuleEntry<VueRestrictedComponentNames>
  /**
   * enforce that a return statement is present in computed property
   * @see https://eslint.vuejs.org/rules/return-in-computed-property.html
   */
  'vue/return-in-computed-property'?: Linter.RuleEntry<VueReturnInComputedProperty>
  /**
   * enforce that a return statement is present in emits validator
   * @see https://eslint.vuejs.org/rules/return-in-emits-validator.html
   */
  'vue/return-in-emits-validator'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent indentation in `<script>`
   * @see https://eslint.vuejs.org/rules/script-indent.html
   */
  'vue/script-indent'?: Linter.RuleEntry<VueScriptIndent>
  /**
   * require a line break before and after the contents of a singleline element
   * @see https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
   */
  'vue/singleline-html-element-content-newline'?: Linter.RuleEntry<VueSinglelineHtmlElementContentNewline>
  /**
   * enforce specific casing for slot names
   * @see https://eslint.vuejs.org/rules/slot-name-casing.html
   */
  'vue/slot-name-casing'?: Linter.RuleEntry<VueSlotNameCasing>
  /**
   * enforce sort-keys in a manner that is compatible with order-in-components
   * @see https://eslint.vuejs.org/rules/sort-keys.html
   */
  'vue/sort-keys'?: Linter.RuleEntry<VueSortKeys>
  /**
   * Enforce consistent spacing inside parentheses in `<template>`
   * @see https://eslint.vuejs.org/rules/space-in-parens.html
   */
  'vue/space-in-parens'?: Linter.RuleEntry<VueSpaceInParens>
  /**
   * Require spacing around infix operators in `<template>`
   * @see https://eslint.vuejs.org/rules/space-infix-ops.html
   */
  'vue/space-infix-ops'?: Linter.RuleEntry<VueSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators in `<template>`
   * @see https://eslint.vuejs.org/rules/space-unary-ops.html
   */
  'vue/space-unary-ops'?: Linter.RuleEntry<VueSpaceUnaryOps>
  /**
   * enforce static class names order
   * @see https://eslint.vuejs.org/rules/static-class-names-order.html
   */
  'vue/static-class-names-order'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around embedded expressions of template strings in `<template>`
   * @see https://eslint.vuejs.org/rules/template-curly-spacing.html
   */
  'vue/template-curly-spacing'?: Linter.RuleEntry<VueTemplateCurlySpacing>
  /**
   * disallow usage of `this` in template
   * @see https://eslint.vuejs.org/rules/this-in-template.html
   */
  'vue/this-in-template'?: Linter.RuleEntry<VueThisInTemplate>
  /**
   * enforce usage of `exact` modifier on `v-on`
   * @see https://eslint.vuejs.org/rules/use-v-on-exact.html
   */
  'vue/use-v-on-exact'?: Linter.RuleEntry<[]>
  /**
   * enforce `v-bind` directive style
   * @see https://eslint.vuejs.org/rules/v-bind-style.html
   */
  'vue/v-bind-style'?: Linter.RuleEntry<VueVBindStyle>
  /**
   * enforce `v-for` directive's delimiter style
   * @see https://eslint.vuejs.org/rules/v-for-delimiter-style.html
   */
  'vue/v-for-delimiter-style'?: Linter.RuleEntry<VueVForDelimiterStyle>
  /**
   * require key attribute for conditionally rendered repeated components
   * @see https://eslint.vuejs.org/rules/v-if-else-key.html
   */
  'vue/v-if-else-key'?: Linter.RuleEntry<[]>
  /**
   * enforce v-on event naming style on custom components in template
   * @see https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
   */
  'vue/v-on-event-hyphenation'?: Linter.RuleEntry<VueVOnEventHyphenation>
  /**
   * enforce writing style for handlers in `v-on` directives
   * @see https://eslint.vuejs.org/rules/v-on-handler-style.html
   */
  'vue/v-on-handler-style'?: Linter.RuleEntry<VueVOnHandlerStyle>
  /**
   * enforce `v-on` directive style
   * @see https://eslint.vuejs.org/rules/v-on-style.html
   */
  'vue/v-on-style'?: Linter.RuleEntry<VueVOnStyle>
  /**
   * enforce `v-slot` directive style
   * @see https://eslint.vuejs.org/rules/v-slot-style.html
   */
  'vue/v-slot-style'?: Linter.RuleEntry<VueVSlotStyle>
  /**
   * require valid attribute names
   * @see https://eslint.vuejs.org/rules/valid-attribute-name.html
   */
  'vue/valid-attribute-name'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `defineEmits` compiler macro
   * @see https://eslint.vuejs.org/rules/valid-define-emits.html
   */
  'vue/valid-define-emits'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `defineOptions` compiler macro
   * @see https://eslint.vuejs.org/rules/valid-define-options.html
   */
  'vue/valid-define-options'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `defineProps` compiler macro
   * @see https://eslint.vuejs.org/rules/valid-define-props.html
   */
  'vue/valid-define-props'?: Linter.RuleEntry<[]>
  /**
   * require valid keys in model option
   * @see https://eslint.vuejs.org/rules/valid-model-definition.html
   * @deprecated
   */
  'vue/valid-model-definition'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `nextTick` function calls
   * @see https://eslint.vuejs.org/rules/valid-next-tick.html
   */
  'vue/valid-next-tick'?: Linter.RuleEntry<[]>
  /**
   * enforce valid template root
   * @see https://eslint.vuejs.org/rules/valid-template-root.html
   */
  'vue/valid-template-root'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-bind` directives
   * @see https://eslint.vuejs.org/rules/valid-v-bind.html
   */
  'vue/valid-v-bind'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `.sync` modifier on `v-bind` directives
   * @see https://eslint.vuejs.org/rules/valid-v-bind-sync.html
   * @deprecated
   */
  'vue/valid-v-bind-sync'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-cloak` directives
   * @see https://eslint.vuejs.org/rules/valid-v-cloak.html
   */
  'vue/valid-v-cloak'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-else` directives
   * @see https://eslint.vuejs.org/rules/valid-v-else.html
   */
  'vue/valid-v-else'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-else-if` directives
   * @see https://eslint.vuejs.org/rules/valid-v-else-if.html
   */
  'vue/valid-v-else-if'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-for` directives
   * @see https://eslint.vuejs.org/rules/valid-v-for.html
   */
  'vue/valid-v-for'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-html` directives
   * @see https://eslint.vuejs.org/rules/valid-v-html.html
   */
  'vue/valid-v-html'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-if` directives
   * @see https://eslint.vuejs.org/rules/valid-v-if.html
   */
  'vue/valid-v-if'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-is` directives
   * @see https://eslint.vuejs.org/rules/valid-v-is.html
   */
  'vue/valid-v-is'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-memo` directives
   * @see https://eslint.vuejs.org/rules/valid-v-memo.html
   */
  'vue/valid-v-memo'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-model` directives
   * @see https://eslint.vuejs.org/rules/valid-v-model.html
   */
  'vue/valid-v-model'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-on` directives
   * @see https://eslint.vuejs.org/rules/valid-v-on.html
   */
  'vue/valid-v-on'?: Linter.RuleEntry<VueValidVOn>
  /**
   * enforce valid `v-once` directives
   * @see https://eslint.vuejs.org/rules/valid-v-once.html
   */
  'vue/valid-v-once'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-pre` directives
   * @see https://eslint.vuejs.org/rules/valid-v-pre.html
   */
  'vue/valid-v-pre'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-show` directives
   * @see https://eslint.vuejs.org/rules/valid-v-show.html
   */
  'vue/valid-v-show'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `v-slot` directives
   * @see https://eslint.vuejs.org/rules/valid-v-slot.html
   */
  'vue/valid-v-slot'?: Linter.RuleEntry<VueValidVSlot>
  /**
   * enforce valid `v-text` directives
   * @see https://eslint.vuejs.org/rules/valid-v-text.html
   */
  'vue/valid-v-text'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- @typescript-eslint/array-type -----
type TypescriptEslintArrayType = []|[{
  
  default?: ("array" | "generic" | "array-simple")
  
  readonly?: ("array" | "generic" | "array-simple")
}]
// ----- @typescript-eslint/ban-ts-comment -----
type TypescriptEslintBanTsComment = []|[{
  
  minimumDescriptionLength?: number
  
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]
// ----- @typescript-eslint/class-literal-property-style -----
type TypescriptEslintClassLiteralPropertyStyle = []|[("fields" | "getters")]
// ----- @typescript-eslint/class-methods-use-this -----
type TypescriptEslintClassMethodsUseThis = []|[{
  
  enforceForClassFields?: boolean
  
  exceptMethods?: string[]
  
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  
  ignoreOverrideMethods?: boolean
}]
// ----- @typescript-eslint/consistent-generic-constructors -----
type TypescriptEslintConsistentGenericConstructors = []|[("type-annotation" | "constructor")]
// ----- @typescript-eslint/consistent-indexed-object-style -----
type TypescriptEslintConsistentIndexedObjectStyle = []|[("record" | "index-signature")]
// ----- @typescript-eslint/consistent-return -----
type TypescriptEslintConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- @typescript-eslint/consistent-type-assertions -----
type TypescriptEslintConsistentTypeAssertions = []|[({
  
  assertionStyle: "never"
} | {
  
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  
  assertionStyle?: ("as" | "angle-bracket")
  
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]
// ----- @typescript-eslint/consistent-type-definitions -----
type TypescriptEslintConsistentTypeDefinitions = []|[("interface" | "type")]
// ----- @typescript-eslint/consistent-type-exports -----
type TypescriptEslintConsistentTypeExports = []|[{
  
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]
// ----- @typescript-eslint/consistent-type-imports -----
type TypescriptEslintConsistentTypeImports = []|[{
  
  disallowTypeAnnotations?: boolean
  
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  
  prefer?: ("type-imports" | "no-type-imports")
}]
// ----- @typescript-eslint/dot-notation -----
type TypescriptEslintDotNotation = []|[{
  
  allowIndexSignaturePropertyAccess?: boolean
  
  allowKeywords?: boolean
  
  allowPattern?: string
  
  allowPrivateClassPropertyAccess?: boolean
  
  allowProtectedClassPropertyAccess?: boolean
}]
// ----- @typescript-eslint/explicit-function-return-type -----
type TypescriptEslintExplicitFunctionReturnType = []|[{
  
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowExpressions?: boolean
  
  allowFunctionsWithoutTypeParameters?: boolean
  
  allowHigherOrderFunctions?: boolean
  
  allowIIFEs?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/explicit-member-accessibility -----
type TypescriptEslintExplicitMemberAccessibility = []|[{
  
  accessibility?: ("explicit" | "no-public" | "off")
  
  ignoredMethodNames?: string[]
  
  overrides?: {
    
    accessors?: ("explicit" | "no-public" | "off")
    
    constructors?: ("explicit" | "no-public" | "off")
    
    methods?: ("explicit" | "no-public" | "off")
    
    parameterProperties?: ("explicit" | "no-public" | "off")
    
    properties?: ("explicit" | "no-public" | "off")
  }
}]
// ----- @typescript-eslint/explicit-module-boundary-types -----
type TypescriptEslintExplicitModuleBoundaryTypes = []|[{
  
  allowArgumentsExplicitlyTypedAsAny?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowHigherOrderFunctions?: boolean
  
  allowOverloadFunctions?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- @typescript-eslint/init-declarations -----
type TypescriptEslintInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- @typescript-eslint/max-params -----
type TypescriptEslintMaxParams = []|[{
  
  countVoidThis?: boolean
  
  max?: number
  
  maximum?: number
}]
// ----- @typescript-eslint/member-ordering -----
type TypescriptEslintMemberOrdering = []|[{
  
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]
// ----- @typescript-eslint/method-signature-style -----
type TypescriptEslintMethodSignatureStyle = []|[("property" | "method")]
// ----- @typescript-eslint/naming-convention -----
type _TypescriptEslintNamingConventionFormatOptionsConfig = (_TypescriptEslintNamingConventionPredefinedFormats[] | null)
type _TypescriptEslintNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
type _TypescriptEslintNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
type _TypescriptEslintNamingConvention_PrefixSuffixConfig = string[]
type _TypescriptEslintNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
type TypescriptEslintNamingConvention = ({
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TypescriptEslintNamingConventionTypeModifiers[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TypescriptEslintNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TypescriptEslintNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  prefix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  suffix?: _TypescriptEslintNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TypescriptEslintNamingConventionUnderscoreOptions
  filter?: (string | _TypescriptEslintNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]
interface _TypescriptEslintNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}
// ----- @typescript-eslint/no-base-to-string -----
type TypescriptEslintNoBaseToString = []|[{
  
  checkUnknown?: boolean
  
  ignoredTypeNames?: string[]
}]
// ----- @typescript-eslint/no-confusing-void-expression -----
type TypescriptEslintNoConfusingVoidExpression = []|[{
  
  ignoreArrowShorthand?: boolean
  
  ignoreVoidOperator?: boolean
  
  ignoreVoidReturningFunctions?: boolean
}]
// ----- @typescript-eslint/no-deprecated -----
type TypescriptEslintNoDeprecated = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-duplicate-type-constituents -----
type TypescriptEslintNoDuplicateTypeConstituents = []|[{
  
  ignoreIntersections?: boolean
  
  ignoreUnions?: boolean
}]
// ----- @typescript-eslint/no-empty-function -----
type TypescriptEslintNoEmptyFunction = []|[{
  
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- @typescript-eslint/no-empty-interface -----
type TypescriptEslintNoEmptyInterface = []|[{
  
  allowSingleExtends?: boolean
}]
// ----- @typescript-eslint/no-empty-object-type -----
type TypescriptEslintNoEmptyObjectType = []|[{
  
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  
  allowObjectTypes?: ("always" | "never")
  
  allowWithName?: string
}]
// ----- @typescript-eslint/no-explicit-any -----
type TypescriptEslintNoExplicitAny = []|[{
  
  fixToUnknown?: boolean
  
  ignoreRestArgs?: boolean
}]
// ----- @typescript-eslint/no-extraneous-class -----
type TypescriptEslintNoExtraneousClass = []|[{
  
  allowConstructorOnly?: boolean
  
  allowEmpty?: boolean
  
  allowStaticOnly?: boolean
  
  allowWithDecorator?: boolean
}]
// ----- @typescript-eslint/no-floating-promises -----
type TypescriptEslintNoFloatingPromises = []|[{
  
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkThenables?: boolean
  
  ignoreIIFE?: boolean
  
  ignoreVoid?: boolean
}]
// ----- @typescript-eslint/no-inferrable-types -----
type TypescriptEslintNoInferrableTypes = []|[{
  
  ignoreParameters?: boolean
  
  ignoreProperties?: boolean
}]
// ----- @typescript-eslint/no-invalid-this -----
type TypescriptEslintNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- @typescript-eslint/no-invalid-void-type -----
type TypescriptEslintNoInvalidVoidType = []|[{
  
  allowAsThisParameter?: boolean
  
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]
// ----- @typescript-eslint/no-magic-numbers -----
type TypescriptEslintNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  
  ignoreEnums?: boolean
  
  ignoreNumericLiteralTypes?: boolean
  
  ignoreReadonlyClassProperties?: boolean
  
  ignoreTypeIndexes?: boolean
}]
// ----- @typescript-eslint/no-meaningless-void-operator -----
type TypescriptEslintNoMeaninglessVoidOperator = []|[{
  
  checkNever?: boolean
}]
// ----- @typescript-eslint/no-misused-promises -----
type TypescriptEslintNoMisusedPromises = []|[{
  
  checksConditionals?: boolean
  
  checksSpreads?: boolean
  
  checksVoidReturn?: (boolean | {
    
    arguments?: boolean
    
    attributes?: boolean
    
    inheritedMethods?: boolean
    
    properties?: boolean
    
    returns?: boolean
    
    variables?: boolean
  })
}]
// ----- @typescript-eslint/no-misused-spread -----
type TypescriptEslintNoMisusedSpread = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/no-namespace -----
type TypescriptEslintNoNamespace = []|[{
  
  allowDeclarations?: boolean
  
  allowDefinitionFiles?: boolean
}]
// ----- @typescript-eslint/no-redeclare -----
type TypescriptEslintNoRedeclare = []|[{
  
  builtinGlobals?: boolean
  
  ignoreDeclarationMerge?: boolean
}]
// ----- @typescript-eslint/no-require-imports -----
type TypescriptEslintNoRequireImports = []|[{
  
  allow?: string[]
  
  allowAsImport?: boolean
}]
// ----- @typescript-eslint/no-restricted-imports -----
type TypescriptEslintNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    
    importNames?: [string, ...(string)[]]
    
    allowImportNames?: [string, ...(string)[]]
    
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    
    allowTypeImports?: boolean
  }[])
}])
// ----- @typescript-eslint/no-restricted-types -----
type TypescriptEslintNoRestrictedTypes = []|[{
  
  types?: {
    [k: string]: (true | string | {
      
      fixWith?: string
      
      message?: string
      
      suggest?: string[]
    }) | undefined
  }
}]
// ----- @typescript-eslint/no-shadow -----
type TypescriptEslintNoShadow = []|[{
  
  allow?: string[]
  
  builtinGlobals?: boolean
  
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  
  ignoreOnInitialization?: boolean
  
  ignoreTypeValueShadow?: boolean
}]
// ----- @typescript-eslint/no-this-alias -----
type TypescriptEslintNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- @typescript-eslint/no-type-alias -----
type TypescriptEslintNoTypeAlias = []|[{
  
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowCallbacks?: ("always" | "never")
  
  allowConditionalTypes?: ("always" | "never")
  
  allowConstructors?: ("always" | "never")
  
  allowGenerics?: ("always" | "never")
  
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]
// ----- @typescript-eslint/no-unnecessary-boolean-literal-compare -----
type TypescriptEslintNoUnnecessaryBooleanLiteralCompare = []|[{
  
  allowComparingNullableBooleansToFalse?: boolean
  
  allowComparingNullableBooleansToTrue?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-condition -----
type TypescriptEslintNoUnnecessaryCondition = []|[{
  
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  checkTypePredicates?: boolean
}]
// ----- @typescript-eslint/no-unnecessary-type-assertion -----
type TypescriptEslintNoUnnecessaryTypeAssertion = []|[{
  
  checkLiteralConstAssertions?: boolean
  
  typesToIgnore?: string[]
}]
// ----- @typescript-eslint/no-unsafe-member-access -----
type TypescriptEslintNoUnsafeMemberAccess = []|[{
  
  allowOptionalChaining?: boolean
}]
// ----- @typescript-eslint/no-unused-expressions -----
type TypescriptEslintNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
  ignoreDirectives?: boolean
}]
// ----- @typescript-eslint/no-unused-vars -----
type TypescriptEslintNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  ignoreUsingDeclarations?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- @typescript-eslint/no-use-before-define -----
type TypescriptEslintNoUseBeforeDefine = []|[("nofunc" | {
  
  allowNamedExports?: boolean
  
  classes?: boolean
  
  enums?: boolean
  
  functions?: boolean
  
  ignoreTypeReferences?: boolean
  
  typedefs?: boolean
  
  variables?: boolean
})]
// ----- @typescript-eslint/no-var-requires -----
type TypescriptEslintNoVarRequires = []|[{
  
  allow?: string[]
}]
// ----- @typescript-eslint/only-throw-error -----
type TypescriptEslintOnlyThrowError = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowRethrowing?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/parameter-properties -----
type TypescriptEslintParameterProperties = []|[{
  
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  
  prefer?: ("class-property" | "parameter-property")
}]
// ----- @typescript-eslint/prefer-destructuring -----
type TypescriptEslintPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  
  enforceForDeclarationWithTypeAnnotation?: boolean
  
  enforceForRenamedProperties?: boolean
}]
// ----- @typescript-eslint/prefer-literal-enum-member -----
type TypescriptEslintPreferLiteralEnumMember = []|[{
  
  allowBitwiseExpressions?: boolean
}]
// ----- @typescript-eslint/prefer-nullish-coalescing -----
type TypescriptEslintPreferNullishCoalescing = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  ignoreBooleanCoercion?: boolean
  
  ignoreConditionalTests?: boolean
  
  ignoreIfStatements?: boolean
  
  ignoreMixedLogicalExpressions?: boolean
  
  ignorePrimitives?: ({
    
    bigint?: boolean
    
    boolean?: boolean
    
    number?: boolean
    
    string?: boolean
  } | true)
  
  ignoreTernaryTests?: boolean
}]
// ----- @typescript-eslint/prefer-optional-chain -----
type TypescriptEslintPreferOptionalChain = []|[{
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  
  checkAny?: boolean
  
  checkBigInt?: boolean
  
  checkBoolean?: boolean
  
  checkNumber?: boolean
  
  checkString?: boolean
  
  checkUnknown?: boolean
  
  requireNullish?: boolean
}]
// ----- @typescript-eslint/prefer-promise-reject-errors -----
type TypescriptEslintPreferPromiseRejectErrors = []|[{
  
  allowEmptyReject?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- @typescript-eslint/prefer-readonly -----
type TypescriptEslintPreferReadonly = []|[{
  
  onlyInlineLambdas?: boolean
}]
// ----- @typescript-eslint/prefer-readonly-parameter-types -----
type TypescriptEslintPreferReadonlyParameterTypes = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkParameterProperties?: boolean
  
  ignoreInferredTypes?: boolean
  
  treatMethodsAsReadonly?: boolean
}]
// ----- @typescript-eslint/prefer-string-starts-ends-with -----
type TypescriptEslintPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- @typescript-eslint/promise-function-async -----
type TypescriptEslintPromiseFunctionAsync = []|[{
  
  allowAny?: boolean
  
  allowedPromiseNames?: string[]
  
  checkArrowFunctions?: boolean
  
  checkFunctionDeclarations?: boolean
  
  checkFunctionExpressions?: boolean
  
  checkMethodDeclarations?: boolean
}]
// ----- @typescript-eslint/require-array-sort-compare -----
type TypescriptEslintRequireArraySortCompare = []|[{
  
  ignoreStringArrays?: boolean
}]
// ----- @typescript-eslint/restrict-plus-operands -----
type TypescriptEslintRestrictPlusOperands = []|[{
  
  allowAny?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumberAndString?: boolean
  
  allowRegExp?: boolean
  
  skipCompoundAssignments?: boolean
}]
// ----- @typescript-eslint/restrict-template-expressions -----
type TypescriptEslintRestrictTemplateExpressions = []|[{
  
  allowAny?: boolean
  
  allowArray?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumber?: boolean
  
  allowRegExp?: boolean
  
  allowNever?: boolean
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- @typescript-eslint/return-await -----
type TypescriptEslintReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]
// ----- @typescript-eslint/sort-type-constituents -----
type TypescriptEslintSortTypeConstituents = []|[{
  
  caseSensitive?: boolean
  
  checkIntersections?: boolean
  
  checkUnions?: boolean
  
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]
// ----- @typescript-eslint/strict-boolean-expressions -----
type TypescriptEslintStrictBooleanExpressions = []|[{
  
  allowAny?: boolean
  
  allowNullableBoolean?: boolean
  
  allowNullableEnum?: boolean
  
  allowNullableNumber?: boolean
  
  allowNullableObject?: boolean
  
  allowNullableString?: boolean
  
  allowNumber?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  allowString?: boolean
}]
// ----- @typescript-eslint/switch-exhaustiveness-check -----
type TypescriptEslintSwitchExhaustivenessCheck = []|[{
  
  allowDefaultCaseForExhaustiveSwitch?: boolean
  
  considerDefaultExhaustiveForUnions?: boolean
  
  defaultCaseCommentPattern?: string
  
  requireDefaultForNonUnion?: boolean
}]
// ----- @typescript-eslint/triple-slash-reference -----
type TypescriptEslintTripleSlashReference = []|[{
  
  lib?: ("always" | "never")
  
  path?: ("always" | "never")
  
  types?: ("always" | "never" | "prefer-import")
}]
// ----- @typescript-eslint/typedef -----
type TypescriptEslintTypedef = []|[{
  
  arrayDestructuring?: boolean
  
  arrowParameter?: boolean
  
  memberVariableDeclaration?: boolean
  
  objectDestructuring?: boolean
  
  parameter?: boolean
  
  propertyDeclaration?: boolean
  
  variableDeclaration?: boolean
  
  variableDeclarationIgnoreFunction?: boolean
}]
// ----- @typescript-eslint/unbound-method -----
type TypescriptEslintUnboundMethod = []|[{
  
  ignoreStatic?: boolean
}]
// ----- @typescript-eslint/unified-signatures -----
type TypescriptEslintUnifiedSignatures = []|[{
  
  ignoreDifferentlyNamedParameters?: boolean
  
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]
// ----- vue/array-bracket-newline -----
type VueArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- vue/array-bracket-spacing -----
type VueArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- vue/array-element-newline -----
type VueArrayElementNewline = []|[(_VueArrayElementNewlineBasicConfig | {
  ArrayExpression?: _VueArrayElementNewlineBasicConfig
  ArrayPattern?: _VueArrayElementNewlineBasicConfig
})]
type _VueArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- vue/arrow-spacing -----
type VueArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- vue/attribute-hyphenation -----
type VueAttributeHyphenation = []|[("always" | "never")]|[("always" | "never"), {
  ignore?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
  ignoreTags?: string[]
}]
// ----- vue/attributes-order -----
type VueAttributesOrder = []|[{
  order?: (("DEFINITION" | "LIST_RENDERING" | "CONDITIONALS" | "RENDER_MODIFIERS" | "GLOBAL" | "UNIQUE" | "SLOT" | "TWO_WAY_BINDING" | "OTHER_DIRECTIVES" | "OTHER_ATTR" | "ATTR_STATIC" | "ATTR_DYNAMIC" | "ATTR_SHORTHAND_BOOL" | "EVENTS" | "CONTENT") | ("DEFINITION" | "LIST_RENDERING" | "CONDITIONALS" | "RENDER_MODIFIERS" | "GLOBAL" | "UNIQUE" | "SLOT" | "TWO_WAY_BINDING" | "OTHER_DIRECTIVES" | "OTHER_ATTR" | "ATTR_STATIC" | "ATTR_DYNAMIC" | "ATTR_SHORTHAND_BOOL" | "EVENTS" | "CONTENT")[])[]
  alphabetical?: boolean
  sortLineLength?: boolean
}]
// ----- vue/block-lang -----
type VueBlockLang = []|[{
  [k: string]: {
    lang?: (string | string[])
    allowNoLang?: boolean
  }
}]
// ----- vue/block-order -----
type VueBlockOrder = []|[{
  order?: (string | string[])[]
}]
// ----- vue/block-spacing -----
type VueBlockSpacing = []|[("always" | "never")]
// ----- vue/block-tag-newline -----
type VueBlockTagNewline = []|[{
  singleline?: ("always" | "never" | "consistent" | "ignore")
  multiline?: ("always" | "never" | "consistent" | "ignore")
  maxEmptyLines?: number
  blocks?: {
    [k: string]: {
      singleline?: ("always" | "never" | "consistent" | "ignore")
      multiline?: ("always" | "never" | "consistent" | "ignore")
      maxEmptyLines?: number
    }
  }
}]
// ----- vue/brace-style -----
type VueBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- vue/camelcase -----
type VueCamelcase = []|[{
  ignoreDestructuring?: boolean
  ignoreImports?: boolean
  ignoreGlobals?: boolean
  properties?: ("always" | "never")
  
  allow?: string[]
}]
// ----- vue/comma-dangle -----
type VueCommaDangle = []|[(_VueCommaDangleValue | {
  arrays?: _VueCommaDangleValueWithIgnore
  objects?: _VueCommaDangleValueWithIgnore
  imports?: _VueCommaDangleValueWithIgnore
  exports?: _VueCommaDangleValueWithIgnore
  functions?: _VueCommaDangleValueWithIgnore
})]
type _VueCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _VueCommaDangleValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- vue/comma-spacing -----
type VueCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- vue/comma-style -----
type VueCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- vue/comment-directive -----
type VueCommentDirective = []|[{
  reportUnusedDisableDirectives?: boolean
}]
// ----- vue/component-api-style -----
type VueComponentApiStyle = []|[[("script-setup" | "composition" | "composition-vue2" | "options"), ...(("script-setup" | "composition" | "composition-vue2" | "options"))[]]]
// ----- vue/component-definition-name-casing -----
type VueComponentDefinitionNameCasing = []|[("PascalCase" | "kebab-case")]
// ----- vue/component-name-in-template-casing -----
type VueComponentNameInTemplateCasing = []|[("PascalCase" | "kebab-case")]|[("PascalCase" | "kebab-case"), {
  globals?: string[]
  ignores?: string[]
  registeredComponentsOnly?: boolean
}]
// ----- vue/component-options-name-casing -----
type VueComponentOptionsNameCasing = []|[("camelCase" | "kebab-case" | "PascalCase")]
// ----- vue/custom-event-name-casing -----
type VueCustomEventNameCasing = []|[("kebab-case" | "camelCase")]|[("kebab-case" | "camelCase"), {
  ignores?: string[]
}]
// ----- vue/define-emits-declaration -----
type VueDefineEmitsDeclaration = []|[("type-based" | "type-literal" | "runtime")]
// ----- vue/define-macros-order -----
type VueDefineMacrosOrder = []|[{
  order?: string[]
  defineExposeLast?: boolean
}]
// ----- vue/define-props-declaration -----
type VueDefinePropsDeclaration = []|[("type-based" | "runtime")]
// ----- vue/define-props-destructuring -----
type VueDefinePropsDestructuring = []|[{
  destructure?: ("always" | "never")
}]
// ----- vue/dot-location -----
type VueDotLocation = []|[("object" | "property")]
// ----- vue/dot-notation -----
type VueDotNotation = []|[{
  allowKeywords?: boolean
  allowPattern?: string
}]
// ----- vue/enforce-style-attribute -----
type VueEnforceStyleAttribute = []|[{
  
  allow?: [("plain" | "scoped" | "module"), ...(("plain" | "scoped" | "module"))[]]
}]
// ----- vue/eqeqeq -----
type VueEqeqeq = ([]|["always"]|["always", {
  null?: ("always" | "never" | "ignore")
}] | []|[("smart" | "allow-null")])
// ----- vue/first-attribute-linebreak -----
type VueFirstAttributeLinebreak = []|[{
  multiline?: ("below" | "beside" | "ignore")
  singleline?: ("below" | "beside" | "ignore")
}]
// ----- vue/func-call-spacing -----
type VueFuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
}])
// ----- vue/html-button-has-type -----
type VueHtmlButtonHasType = []|[{
  button?: boolean
  submit?: boolean
  reset?: boolean
}]
// ----- vue/html-closing-bracket-newline -----
type VueHtmlClosingBracketNewline = []|[{
  singleline?: ("always" | "never")
  multiline?: ("always" | "never")
  selfClosingTag?: {
    singleline?: ("always" | "never")
    multiline?: ("always" | "never")
  }
}]
// ----- vue/html-closing-bracket-spacing -----
type VueHtmlClosingBracketSpacing = []|[{
  startTag?: ("always" | "never")
  endTag?: ("always" | "never")
  selfClosingTag?: ("always" | "never")
}]
// ----- vue/html-comment-content-newline -----
type VueHtmlCommentContentNewline = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
}), {
  exceptions?: string[]
}]
// ----- vue/html-comment-content-spacing -----
type VueHtmlCommentContentSpacing = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
}]
// ----- vue/html-comment-indent -----
type VueHtmlCommentIndent = []|[(number | "tab")]
// ----- vue/html-indent -----
type VueHtmlIndent = []|[(number | "tab")]|[(number | "tab"), {
  attribute?: number
  baseIndent?: number
  closeBracket?: (number | {
    startTag?: number
    endTag?: number
    selfClosingTag?: number
  })
  switchCase?: number
  alignAttributesVertically?: boolean
  ignores?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
}]
// ----- vue/html-quotes -----
type VueHtmlQuotes = []|[("double" | "single")]|[("double" | "single"), {
  avoidEscape?: boolean
}]
// ----- vue/html-self-closing -----
type VueHtmlSelfClosing = []|[{
  html?: {
    normal?: _VueHtmlSelfClosingOptionValue
    void?: _VueHtmlSelfClosingOptionValue
    component?: _VueHtmlSelfClosingOptionValue
  }
  svg?: _VueHtmlSelfClosingOptionValue
  math?: _VueHtmlSelfClosingOptionValue
}]
type _VueHtmlSelfClosingOptionValue = ("always" | "never" | "any")
// ----- vue/key-spacing -----
type VueKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- vue/keyword-spacing -----
type VueKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- vue/match-component-file-name -----
type VueMatchComponentFileName = []|[{
  extensions?: string[]
  shouldMatchCase?: boolean
}]
// ----- vue/max-attributes-per-line -----
type VueMaxAttributesPerLine = []|[{
  singleline?: (number | {
    max?: number
  })
  multiline?: (number | {
    max?: number
  })
}]
// ----- vue/max-len -----
type VueMaxLen = []|[({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number)]|[({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number), ({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number)]|[({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number), ({
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
} | number), {
  code?: number
  template?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreTrailingComments?: boolean
  ignoreUrls?: boolean
  ignoreStrings?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreHTMLAttributeValues?: boolean
  ignoreHTMLTextContents?: boolean
}]
// ----- vue/max-lines-per-block -----
type VueMaxLinesPerBlock = []|[{
  style?: number
  template?: number
  script?: number
  skipBlankLines?: boolean
}]
// ----- vue/max-props -----
type VueMaxProps = []|[{
  maxProps?: number
}]
// ----- vue/max-template-depth -----
type VueMaxTemplateDepth = []|[{
  maxDepth?: number
}]
// ----- vue/multi-word-component-names -----
type VueMultiWordComponentNames = []|[{
  ignores?: string[]
}]
// ----- vue/multiline-html-element-content-newline -----
type VueMultilineHtmlElementContentNewline = []|[{
  ignoreWhenEmpty?: boolean
  ignores?: string[]
  allowEmptyLines?: boolean
}]
// ----- vue/multiline-ternary -----
type VueMultilineTernary = []|[("always" | "always-multiline" | "never")]
// ----- vue/mustache-interpolation-spacing -----
type VueMustacheInterpolationSpacing = []|[("always" | "never")]
// ----- vue/new-line-between-multi-line-property -----
type VueNewLineBetweenMultiLineProperty = []|[{
  minLineOfMultilineProperty?: number
}]
// ----- vue/next-tick-style -----
type VueNextTickStyle = []|[("promise" | "callback")]
// ----- vue/no-async-in-computed-properties -----
type VueNoAsyncInComputedProperties = []|[{
  ignoredObjectNames?: string[]
}]
// ----- vue/no-bare-strings-in-template -----
type VueNoBareStringsInTemplate = []|[{
  allowlist?: string[]
  attributes?: {
    [k: string]: string[]
  }
  directives?: string[]
}]
// ----- vue/no-boolean-default -----
type VueNoBooleanDefault = []|[("default-false" | "no-default")]
// ----- vue/no-child-content -----
type VueNoChildContent = []|[{
  
  additionalDirectives: [string, ...(string)[]]
}]
// ----- vue/no-console -----
type VueNoConsole = []|[{
  
  allow?: [string, ...(string)[]]
}]
// ----- vue/no-constant-condition -----
type VueNoConstantCondition = []|[{
  checkLoops?: ("all" | "allExceptWhileTrue" | "none" | true | false)
}]
// ----- vue/no-deprecated-model-definition -----
type VueNoDeprecatedModelDefinition = []|[{
  allowVue3Compat?: boolean
}]
// ----- vue/no-deprecated-router-link-tag-prop -----
type VueNoDeprecatedRouterLinkTagProp = []|[{
  
  components?: [string, ...(string)[]]
}]
// ----- vue/no-deprecated-slot-attribute -----
type VueNoDeprecatedSlotAttribute = []|[{
  ignore?: string[]
  ignoreParents?: string[]
}]
// ----- vue/no-dupe-keys -----
type VueNoDupeKeys = []|[{
  groups?: unknown[]
}]
// ----- vue/no-duplicate-attr-inheritance -----
type VueNoDuplicateAttrInheritance = []|[{
  checkMultiRootNodes?: boolean
}]
// ----- vue/no-duplicate-attributes -----
type VueNoDuplicateAttributes = []|[{
  allowCoexistClass?: boolean
  allowCoexistStyle?: boolean
}]
// ----- vue/no-empty-pattern -----
type VueNoEmptyPattern = []|[{
  allowObjectPatternsAsParameters?: boolean
}]
// ----- vue/no-extra-parens -----
type VueNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
}])
// ----- vue/no-implicit-coercion -----
type VueNoImplicitCoercion = []|[{
  boolean?: boolean
  number?: boolean
  string?: boolean
  disallowTemplateShorthand?: boolean
  allow?: ("~" | "!!" | "+" | "- -" | "-" | "*")[]
}]
// ----- vue/no-irregular-whitespace -----
type VueNoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipHTMLAttributeValues?: boolean
  skipHTMLTextContents?: boolean
}]
// ----- vue/no-lone-template -----
type VueNoLoneTemplate = []|[{
  ignoreAccessible?: boolean
}]
// ----- vue/no-multi-spaces -----
type VueNoMultiSpaces = []|[{
  ignoreProperties?: boolean
}]
// ----- vue/no-multiple-template-root -----
type VueNoMultipleTemplateRoot = []|[{
  disallowComments?: boolean
}]
// ----- vue/no-mutating-props -----
type VueNoMutatingProps = []|[{
  shallowOnly?: boolean
}]
// ----- vue/no-parsing-error -----
type VueNoParsingError = []|[{
  "abrupt-closing-of-empty-comment"?: boolean
  "absence-of-digits-in-numeric-character-reference"?: boolean
  "cdata-in-html-content"?: boolean
  "character-reference-outside-unicode-range"?: boolean
  "control-character-in-input-stream"?: boolean
  "control-character-reference"?: boolean
  "eof-before-tag-name"?: boolean
  "eof-in-cdata"?: boolean
  "eof-in-comment"?: boolean
  "eof-in-tag"?: boolean
  "incorrectly-closed-comment"?: boolean
  "incorrectly-opened-comment"?: boolean
  "invalid-first-character-of-tag-name"?: boolean
  "missing-attribute-value"?: boolean
  "missing-end-tag-name"?: boolean
  "missing-semicolon-after-character-reference"?: boolean
  "missing-whitespace-between-attributes"?: boolean
  "nested-comment"?: boolean
  "noncharacter-character-reference"?: boolean
  "noncharacter-in-input-stream"?: boolean
  "null-character-reference"?: boolean
  "surrogate-character-reference"?: boolean
  "surrogate-in-input-stream"?: boolean
  "unexpected-character-in-attribute-name"?: boolean
  "unexpected-character-in-unquoted-attribute-value"?: boolean
  "unexpected-equals-sign-before-attribute-name"?: boolean
  "unexpected-null-character"?: boolean
  "unexpected-question-mark-instead-of-tag-name"?: boolean
  "unexpected-solidus-in-tag"?: boolean
  "unknown-named-character-reference"?: boolean
  "end-tag-with-attributes"?: boolean
  "duplicate-attribute"?: boolean
  "end-tag-with-trailing-solidus"?: boolean
  "non-void-html-element-start-tag-with-trailing-solidus"?: boolean
  "x-invalid-end-tag"?: boolean
  "x-invalid-namespace"?: boolean
}]
// ----- vue/no-potential-component-option-typo -----
type VueNoPotentialComponentOptionTypo = []|[{
  
  presets?: ("all" | "vue" | "vue-router" | "nuxt")[]
  
  custom?: string[]
  threshold?: number
}]
// ----- vue/no-required-prop-with-default -----
type VueNoRequiredPropWithDefault = []|[{
  autofix?: boolean
}]
// ----- vue/no-reserved-component-names -----
type VueNoReservedComponentNames = []|[{
  disallowVueBuiltInComponents?: boolean
  disallowVue3BuiltInComponents?: boolean
  htmlElementCaseSensitive?: boolean
}]
// ----- vue/no-reserved-keys -----
type VueNoReservedKeys = []|[{
  reserved?: unknown[]
  groups?: unknown[]
}]
// ----- vue/no-reserved-props -----
type VueNoReservedProps = []|[{
  vueVersion?: (2 | 3)
}]
// ----- vue/no-restricted-block -----
type VueNoRestrictedBlock = (string | {
  element: string
  message?: string
})[]
// ----- vue/no-restricted-call-after-await -----
type VueNoRestrictedCallAfterAwait = {
  module: string
  path?: (string | string[])
  message?: string
}[]
// ----- vue/no-restricted-class -----
type VueNoRestrictedClass = string[]
// ----- vue/no-restricted-component-names -----
type VueNoRestrictedComponentNames = (string | {
  name: string
  message?: string
  suggest?: string
})[]
// ----- vue/no-restricted-component-options -----
type VueNoRestrictedComponentOptions = (string | string[] | {
  name: (string | string[])
  message?: string
})[]
// ----- vue/no-restricted-custom-event -----
type VueNoRestrictedCustomEvent = (string | {
  event: string
  message?: string
  suggest?: string
})[]
// ----- vue/no-restricted-html-elements -----
type VueNoRestrictedHtmlElements = (string | {
  element: (string | string[])
  message?: string
})[]
// ----- vue/no-restricted-props -----
type VueNoRestrictedProps = (string | {
  name: string
  message?: string
  suggest?: string
})[]
// ----- vue/no-restricted-static-attribute -----
type VueNoRestrictedStaticAttribute = (string | {
  key: string
  value?: (string | true)
  element?: string
  message?: string
})[]
// ----- vue/no-restricted-syntax -----
type VueNoRestrictedSyntax = (string | {
  selector: string
  message?: string
})[]
// ----- vue/no-restricted-v-bind -----
type VueNoRestrictedVBind = ((string | null) | {
  argument: (string | null)
  modifiers?: ("prop" | "camel" | "sync" | "attr")[]
  element?: string
  message?: string
})[]
// ----- vue/no-restricted-v-on -----
type VueNoRestrictedVOn = ((string | null) | {
  argument: (string | null)
  element?: string
  message?: string
  
  modifiers?: [("prevent" | "stop" | "capture" | "self" | "once" | "passive"), ...(("prevent" | "stop" | "capture" | "self" | "once" | "passive"))[]]
})[]
// ----- vue/no-static-inline-styles -----
type VueNoStaticInlineStyles = []|[{
  allowBinding?: boolean
}]
// ----- vue/no-template-shadow -----
type VueNoTemplateShadow = []|[{
  allow?: string[]
}]
// ----- vue/no-template-target-blank -----
type VueNoTemplateTargetBlank = []|[{
  allowReferrer?: boolean
  enforceDynamicLinks?: ("always" | "never")
}]
// ----- vue/no-undef-components -----
type VueNoUndefComponents = []|[{
  ignorePatterns?: unknown[]
}]
// ----- vue/no-undef-properties -----
type VueNoUndefProperties = []|[{
  ignores?: string[]
}]
// ----- vue/no-unsupported-features -----
type VueNoUnsupportedFeatures = []|[{
  version?: string
  ignores?: ("slot-scope-attribute" | "dynamic-directive-arguments" | "v-slot" | "script-setup" | "style-css-vars-injection" | "v-model-argument" | "v-model-custom-modifiers" | "v-is" | "is-attribute-with-vue-prefix" | "v-memo" | "v-bind-prop-modifier-shorthand" | "v-bind-attr-modifier" | "define-options" | "define-slots" | "define-model" | "v-bind-same-name-shorthand")[]
}]
// ----- vue/no-unused-components -----
type VueNoUnusedComponents = []|[{
  ignoreWhenBindingPresent?: boolean
}]
// ----- vue/no-unused-properties -----
type VueNoUnusedProperties = []|[{
  groups?: ("props" | "data" | "asyncData" | "computed" | "methods" | "setup")[]
  deepData?: boolean
  ignorePublicMembers?: boolean
  unreferencedOptions?: ("unknownMemberAsUnreferenced" | "returnAsUnreferenced")[]
}]
// ----- vue/no-unused-vars -----
type VueNoUnusedVars = []|[{
  ignorePattern?: string
}]
// ----- vue/no-use-v-if-with-v-for -----
type VueNoUseVIfWithVFor = []|[{
  allowUsingIterationVar?: boolean
}]
// ----- vue/no-useless-mustaches -----
type VueNoUselessMustaches = []|[{
  ignoreIncludesComment?: boolean
  ignoreStringEscape?: boolean
}]
// ----- vue/no-useless-v-bind -----
type VueNoUselessVBind = []|[{
  ignoreIncludesComment?: boolean
  ignoreStringEscape?: boolean
}]
// ----- vue/no-v-html -----
type VueNoVHtml = []|[{
  ignorePattern?: string
}]
// ----- vue/no-v-text-v-html-on-component -----
type VueNoVTextVHtmlOnComponent = []|[{
  allow?: string[]
  ignoreElementNamespaces?: boolean
}]
// ----- vue/object-curly-newline -----
type VueObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- vue/object-curly-spacing -----
type VueObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- vue/object-property-newline -----
type VueObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- vue/object-shorthand -----
type VueObjectShorthand = ([]|[("always" | "methods" | "properties" | "never" | "consistent" | "consistent-as-needed")] | []|[("always" | "methods" | "properties")]|[("always" | "methods" | "properties"), {
  avoidQuotes?: boolean
}] | []|[("always" | "methods")]|[("always" | "methods"), {
  ignoreConstructors?: boolean
  methodsIgnorePattern?: string
  avoidQuotes?: boolean
  avoidExplicitReturnArrows?: boolean
}])
// ----- vue/operator-linebreak -----
type VueOperatorLinebreak = []|[("after" | "before" | "none" | null)]|[("after" | "before" | "none" | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- vue/order-in-components -----
type VueOrderInComponents = []|[{
  order?: unknown[]
}]
// ----- vue/padding-line-between-blocks -----
type VuePaddingLineBetweenBlocks = []|[("never" | "always")]
// ----- vue/padding-line-between-tags -----
type VuePaddingLineBetweenTags = []|[{
  blankLine: ("always" | "never" | "consistent")
  prev: string
  next: string
}[]]
// ----- vue/padding-lines-in-component-definition -----
type VuePaddingLinesInComponentDefinition = []|[(("always" | "never") | {
  betweenOptions?: ("never" | "always" | "ignore")
  withinOption?: (("never" | "always" | "ignore") | {
    [k: string]: (("never" | "always" | "ignore") | {
      betweenItems?: ("never" | "always" | "ignore")
      withinEach?: ("never" | "always" | "ignore")
    })
  })
  groupSingleLineProperties?: boolean
})]
// ----- vue/prefer-true-attribute-shorthand -----
type VuePreferTrueAttributeShorthand = []|[("always" | "never")]|[("always" | "never"), {
  except?: string[]
}]
// ----- vue/prop-name-casing -----
type VuePropNameCasing = []|[("camelCase" | "snake_case")]|[("camelCase" | "snake_case"), {
  ignoreProps?: string[]
}]
// ----- vue/quote-props -----
type VueQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- vue/require-direct-export -----
type VueRequireDirectExport = []|[{
  disallowFunctionalComponentFunction?: boolean
}]
// ----- vue/require-explicit-emits -----
type VueRequireExplicitEmits = []|[{
  allowProps?: boolean
}]
// ----- vue/require-macro-variable-name -----
type VueRequireMacroVariableName = []|[{
  defineProps?: string
  defineEmits?: string
  defineSlots?: string
  useSlots?: string
  useAttrs?: string
}]
// ----- vue/require-prop-comment -----
type VueRequirePropComment = []|[{
  type?: ("JSDoc" | "line" | "block" | "any")
}]
// ----- vue/require-toggle-inside-transition -----
type VueRequireToggleInsideTransition = []|[{
  additionalDirectives?: string[]
}]
// ----- vue/restricted-component-names -----
type VueRestrictedComponentNames = []|[{
  allow?: string[]
}]
// ----- vue/return-in-computed-property -----
type VueReturnInComputedProperty = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- vue/script-indent -----
type VueScriptIndent = []|[(number | "tab")]|[(number | "tab"), {
  baseIndent?: number
  switchCase?: number
  ignores?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
}]
// ----- vue/singleline-html-element-content-newline -----
type VueSinglelineHtmlElementContentNewline = []|[{
  ignoreWhenNoAttributes?: boolean
  ignoreWhenEmpty?: boolean
  ignores?: string[]
  externalIgnores?: string[]
}]
// ----- vue/slot-name-casing -----
type VueSlotNameCasing = []|[("camelCase" | "kebab-case" | "singleword")]
// ----- vue/sort-keys -----
type VueSortKeys = []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  ignoreChildrenOf?: unknown[]
  ignoreGrandchildrenOf?: unknown[]
  minKeys?: number
  natural?: boolean
}]
// ----- vue/space-in-parens -----
type VueSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- vue/space-infix-ops -----
type VueSpaceInfixOps = []|[{
  int32Hint?: boolean
}]
// ----- vue/space-unary-ops -----
type VueSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- vue/template-curly-spacing -----
type VueTemplateCurlySpacing = []|[("always" | "never")]
// ----- vue/this-in-template -----
type VueThisInTemplate = []|[("always" | "never")]
// ----- vue/v-bind-style -----
type VueVBindStyle = []|[("shorthand" | "longform")]|[("shorthand" | "longform"), {
  sameNameShorthand?: ("always" | "never" | "ignore")
}]
// ----- vue/v-for-delimiter-style -----
type VueVForDelimiterStyle = []|[("in" | "of")]
// ----- vue/v-on-event-hyphenation -----
type VueVOnEventHyphenation = []|[("always" | "never")]|[("always" | "never"), {
  autofix?: boolean
  ignore?: (string & {
    [k: string]: unknown | undefined
  } & {
    [k: string]: unknown | undefined
  })[]
  ignoreTags?: string[]
}]
// ----- vue/v-on-handler-style -----
type VueVOnHandlerStyle = []|[(("inline" | "inline-function") | ["method", ("inline" | "inline-function")])]|[(("inline" | "inline-function") | ["method", ("inline" | "inline-function")]), {
  ignoreIncludesComment?: boolean
}]
// ----- vue/v-on-style -----
type VueVOnStyle = []|[("shorthand" | "longform")]
// ----- vue/v-slot-style -----
type VueVSlotStyle = []|[(("shorthand" | "longform") | {
  atComponent?: ("shorthand" | "longform" | "v-slot")
  default?: ("shorthand" | "longform" | "v-slot")
  named?: ("shorthand" | "longform")
})]
// ----- vue/valid-v-on -----
type VueValidVOn = []|[{
  modifiers?: unknown[]
}]
// ----- vue/valid-v-slot -----
type VueValidVSlot = []|[{
  allowModifiers?: boolean
}]