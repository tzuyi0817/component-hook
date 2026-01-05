/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface JsdocRules {
  /**
   * Checks that `@access` tags have a valid value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header
   */
  'jsdoc/check-access'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header
   */
  'jsdoc/check-alignment'?: Linter.RuleEntry<JsdocCheckAlignment>
  /**
   * @deprecated - Use `getJsdocProcessorPlugin` processor; ensures that (JavaScript) samples within `@example` tags adhere to ESLint rules.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header
   */
  'jsdoc/check-examples'?: Linter.RuleEntry<JsdocCheckExamples>
  /**
   * Reports invalid padding inside JSDoc blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header
   */
  'jsdoc/check-indentation'?: Linter.RuleEntry<JsdocCheckIndentation>
  /**
   * Reports invalid alignment of JSDoc block lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header
   */
  'jsdoc/check-line-alignment'?: Linter.RuleEntry<JsdocCheckLineAlignment>
  /**
   * Checks for dupe `@param` names, that nested param names have roots, and that parameter names in function declarations match JSDoc param names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header
   */
  'jsdoc/check-param-names'?: Linter.RuleEntry<JsdocCheckParamNames>
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header
   */
  'jsdoc/check-property-names'?: Linter.RuleEntry<JsdocCheckPropertyNames>
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header
   */
  'jsdoc/check-syntax'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid block tag names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header
   */
  'jsdoc/check-tag-names'?: Linter.RuleEntry<JsdocCheckTagNames>
  /**
   * Checks that any `@template` names are actually used in the connected `@typedef` or type alias.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-template-names.md#repos-sticky-header
   */
  'jsdoc/check-template-names'?: Linter.RuleEntry<[]>
  /**
   * Reports types deemed invalid (customizable and with defaults, for preventing and/or recommending replacements).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header
   */
  'jsdoc/check-types'?: Linter.RuleEntry<JsdocCheckTypes>
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header
   */
  'jsdoc/check-values'?: Linter.RuleEntry<JsdocCheckValues>
  /**
   * Converts non-JSDoc comments preceding or following nodes into JSDoc ones
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md#repos-sticky-header
   */
  'jsdoc/convert-to-jsdoc-comments'?: Linter.RuleEntry<JsdocConvertToJsdocComments>
  /**
   * Checks tags that are expected to be empty (e.g., `@abstract` or `@async`), reporting if they have content
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header
   */
  'jsdoc/empty-tags'?: Linter.RuleEntry<JsdocEmptyTags>
  /**
   * Reports use of JSDoc tags in non-tag positions (in the default "typescript" mode).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/escape-inline-tags.md#repos-sticky-header
   */
  'jsdoc/escape-inline-tags'?: Linter.RuleEntry<JsdocEscapeInlineTags>
  /**
   * Prohibits use of `@implements` on non-constructor functions (to enforce the tag only being used on classes/constructors).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header
   */
  'jsdoc/implements-on-classes'?: Linter.RuleEntry<JsdocImplementsOnClasses>
  /**
   * Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header
   */
  'jsdoc/imports-as-dependencies'?: Linter.RuleEntry<[]>
  /**
   * This rule reports doc comments that only restate their attached name.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header
   */
  'jsdoc/informative-docs'?: Linter.RuleEntry<JsdocInformativeDocs>
  /**
   * Enforces minimum number of newlines before JSDoc comment blocks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/lines-before-block.md#repos-sticky-header
   */
  'jsdoc/lines-before-block'?: Linter.RuleEntry<JsdocLinesBeforeBlock>
  /**
   * Enforces a regular expression pattern on descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header
   */
  'jsdoc/match-description'?: Linter.RuleEntry<JsdocMatchDescription>
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md#repos-sticky-header
   */
  'jsdoc/match-name'?: Linter.RuleEntry<JsdocMatchName>
  /**
   * Controls how and whether JSDoc blocks can be expressed as single or multiple line blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header
   */
  'jsdoc/multiline-blocks'?: Linter.RuleEntry<JsdocMultilineBlocks>
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a JSDoc block.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header
   */
  'jsdoc/no-bad-blocks'?: Linter.RuleEntry<JsdocNoBadBlocks>
  /**
   * If tags are present, this rule will prevent empty lines in the block description. If no tags are present, this rule will prevent extra empty lines in the block description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header
   */
  'jsdoc/no-blank-block-descriptions'?: Linter.RuleEntry<[]>
  /**
   * Removes empty blocks with nothing but possibly line breaks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header
   */
  'jsdoc/no-blank-blocks'?: Linter.RuleEntry<JsdocNoBlankBlocks>
  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header
   */
  'jsdoc/no-defaults'?: Linter.RuleEntry<JsdocNoDefaults>
  /**
   * Reports when certain comment structures are always expected.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header
   */
  'jsdoc/no-missing-syntax'?: Linter.RuleEntry<JsdocNoMissingSyntax>
  /**
   * Prevents use of multiple asterisks at the beginning of lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header
   */
  'jsdoc/no-multi-asterisks'?: Linter.RuleEntry<JsdocNoMultiAsterisks>
  /**
   * Reports when certain comment structures are present.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md#repos-sticky-header
   */
  'jsdoc/no-restricted-syntax'?: Linter.RuleEntry<JsdocNoRestrictedSyntax>
  /**
   * This rule reports types being used on `@param` or `@returns` (redundant with TypeScript).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header
   */
  'jsdoc/no-types'?: Linter.RuleEntry<JsdocNoTypes>
  /**
   * Besides some expected built-in types, prohibits any types not specified as globals or within `@typedef`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header
   */
  'jsdoc/no-undefined-types'?: Linter.RuleEntry<JsdocNoUndefinedTypes>
  /**
   * Prefer `@import` tags to inline `import()` statements.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/prefer-import-tag.md#repos-sticky-header
   */
  'jsdoc/prefer-import-tag'?: Linter.RuleEntry<JsdocPreferImportTag>
  /**
   * Reports use of `any` or `*` type
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-any-type.md#repos-sticky-header
   */
  'jsdoc/reject-any-type'?: Linter.RuleEntry<[]>
  /**
   * Reports use of `Function` type
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-function-type.md#repos-sticky-header
   */
  'jsdoc/reject-function-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that each JSDoc line starts with an `*`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header
   */
  'jsdoc/require-asterisk-prefix'?: Linter.RuleEntry<JsdocRequireAsteriskPrefix>
  /**
   * Requires that all functions (and potentially other contexts) have a description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header
   */
  'jsdoc/require-description'?: Linter.RuleEntry<JsdocRequireDescription>
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md#repos-sticky-header
   */
  'jsdoc/require-description-complete-sentence'?: Linter.RuleEntry<JsdocRequireDescriptionCompleteSentence>
  /**
   * Requires that all functions (and potentially other contexts) have examples.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header
   */
  'jsdoc/require-example'?: Linter.RuleEntry<JsdocRequireExample>
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header
   */
  'jsdoc/require-file-overview'?: Linter.RuleEntry<JsdocRequireFileOverview>
  /**
   * Requires a hyphen before the `@param` description (and optionally before `@property` descriptions).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header
   */
  'jsdoc/require-hyphen-before-param-description'?: Linter.RuleEntry<JsdocRequireHyphenBeforeParamDescription>
  /**
   * Checks for presence of JSDoc comments, on functions and potentially other contexts (optionally limited to exports).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header
   */
  'jsdoc/require-jsdoc'?: Linter.RuleEntry<JsdocRequireJsdoc>
  /**
   * Requires a description for `@next` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-description.md#repos-sticky-header
   */
  'jsdoc/require-next-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@next` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-type.md#repos-sticky-header
   */
  'jsdoc/require-next-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that all function parameters are documented with a `@param` tag.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#repos-sticky-header
   */
  'jsdoc/require-param'?: Linter.RuleEntry<JsdocRequireParam>
  /**
   * Requires that each `@param` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header
   */
  'jsdoc/require-param-description'?: Linter.RuleEntry<JsdocRequireParamDescription>
  /**
   * Requires that all `@param` tags have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header
   */
  'jsdoc/require-param-name'?: Linter.RuleEntry<JsdocRequireParamName>
  /**
   * Requires that each `@param` tag has a type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header
   */
  'jsdoc/require-param-type'?: Linter.RuleEntry<JsdocRequireParamType>
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header
   */
  'jsdoc/require-property'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header
   */
  'jsdoc/require-property-description'?: Linter.RuleEntry<[]>
  /**
   * Requires that all `@property` tags have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md#repos-sticky-header
   */
  'jsdoc/require-property-name'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header
   */
  'jsdoc/require-property-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that Promise rejections are documented with `@rejects` tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-rejects.md#repos-sticky-header
   */
  'jsdoc/require-rejects'?: Linter.RuleEntry<JsdocRequireRejects>
  /**
   * Requires that returns are documented with `@returns`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header
   */
  'jsdoc/require-returns'?: Linter.RuleEntry<JsdocRequireReturns>
  /**
   * Requires a return statement in function body if a `@returns` tag is specified in JSDoc comment(and reports if multiple `@returns` tags are present).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header
   */
  'jsdoc/require-returns-check'?: Linter.RuleEntry<JsdocRequireReturnsCheck>
  /**
   * Requires that the `@returns` tag has a `description` value (not including `void`/`undefined` type returns).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header
   */
  'jsdoc/require-returns-description'?: Linter.RuleEntry<JsdocRequireReturnsDescription>
  /**
   * Requires that `@returns` tag has type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header
   */
  'jsdoc/require-returns-type'?: Linter.RuleEntry<JsdocRequireReturnsType>
  /**
   * Requires tags be present, optionally for specific contexts
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-tags.md#repos-sticky-header
   */
  'jsdoc/require-tags'?: Linter.RuleEntry<JsdocRequireTags>
  /**
   * Requires `@template` tags be present when type parameters are used.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md#repos-sticky-header
   */
  'jsdoc/require-template'?: Linter.RuleEntry<JsdocRequireTemplate>
  /**
   * Requires a description for `@template` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template-description.md#repos-sticky-header
   */
  'jsdoc/require-template-description'?: Linter.RuleEntry<[]>
  /**
   * Requires that throw statements are documented with `@throws` tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header
   */
  'jsdoc/require-throws'?: Linter.RuleEntry<JsdocRequireThrows>
  /**
   * Requires a description for `@throws` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws-description.md#repos-sticky-header
   */
  'jsdoc/require-throws-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@throws` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws-type.md#repos-sticky-header
   */
  'jsdoc/require-throws-type'?: Linter.RuleEntry<[]>
  /**
   * Requires yields are documented with `@yields` tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header
   */
  'jsdoc/require-yields'?: Linter.RuleEntry<JsdocRequireYields>
  /**
   * Ensures that if a `@yields` is present that a `yield` (or `yield` with a value) is present in the function body (or that if a `@next` is present that there is a yield with a return value present).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header
   */
  'jsdoc/require-yields-check'?: Linter.RuleEntry<JsdocRequireYieldsCheck>
  /**
   * Requires a description for `@yields` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-description.md#repos-sticky-header
   */
  'jsdoc/require-yields-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@yields` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-type.md#repos-sticky-header
   */
  'jsdoc/require-yields-type'?: Linter.RuleEntry<[]>
  /**
   * Sorts tags by a specified sequence according to tag name, optionally adding line breaks between tag groups.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header
   */
  'jsdoc/sort-tags'?: Linter.RuleEntry<JsdocSortTags>
  /**
   * Enforces lines (or no lines) before, after, or between tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header
   */
  'jsdoc/tag-lines'?: Linter.RuleEntry<JsdocTagLines>
  /**
   * Auto-escape certain characters that are input within block and tag descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header
   */
  'jsdoc/text-escaping'?: Linter.RuleEntry<JsdocTextEscaping>
  /**
   * Prefers either function properties or method signatures
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-method-signature-style.md#repos-sticky-header
   */
  'jsdoc/ts-method-signature-style'?: Linter.RuleEntry<JsdocTsMethodSignatureStyle>
  /**
   * Warns against use of the empty object type
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-empty-object-type.md#repos-sticky-header
   */
  'jsdoc/ts-no-empty-object-type'?: Linter.RuleEntry<[]>
  /**
   * Catches unnecessary template expressions such as string expressions within a template literal.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-no-unnecessary-template-expression.md#repos-sticky-header
   */
  'jsdoc/ts-no-unnecessary-template-expression'?: Linter.RuleEntry<JsdocTsNoUnnecessaryTemplateExpression>
  /**
   * Prefers function types over call signatures when there are no other properties.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/ts-prefer-function-type.md#repos-sticky-header
   */
  'jsdoc/ts-prefer-function-type'?: Linter.RuleEntry<JsdocTsPreferFunctionType>
  /**
   * Formats JSDoc type values.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/type-formatting.md#repos-sticky-header
   */
  'jsdoc/type-formatting'?: Linter.RuleEntry<JsdocTypeFormatting>
  /**
   * Requires all types/namepaths to be valid JSDoc, Closure compiler, or TypeScript types (configurable in settings).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header
   */
  'jsdoc/valid-types'?: Linter.RuleEntry<JsdocValidTypes>
}

/* ======= Declarations ======= */
// ----- jsdoc/check-alignment -----
type JsdocCheckAlignment = []|[{
  
  innerIndent?: number
}]
// ----- jsdoc/check-examples -----
type JsdocCheckExamples = []|[{
  allowInlineConfig?: boolean
  baseConfig?: {
    [k: string]: unknown | undefined
  }
  captionRequired?: boolean
  checkDefaults?: boolean
  checkEslintrc?: boolean
  checkParams?: boolean
  checkProperties?: boolean
  configFile?: string
  exampleCodeRegex?: string
  matchingFileName?: string
  matchingFileNameDefaults?: string
  matchingFileNameParams?: string
  matchingFileNameProperties?: string
  noDefaultExampleRules?: boolean
  paddedIndent?: number
  rejectExampleCodeRegex?: string
  reportUnusedDisableDirectives?: boolean
}]
// ----- jsdoc/check-indentation -----
type JsdocCheckIndentation = []|[{
  
  allowIndentedSections?: boolean
  
  excludeTags?: string[]
}]
// ----- jsdoc/check-line-alignment -----
type JsdocCheckLineAlignment = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  
  customSpacings?: {
    
    postDelimiter?: number
    
    postHyphen?: number
    
    postName?: number
    
    postTag?: number
    
    postType?: number
  }
  
  disableWrapIndent?: boolean
  
  preserveMainDescriptionPostDelimiter?: boolean
  
  tags?: string[]
  
  wrapIndent?: string
}]
// ----- jsdoc/check-param-names -----
type JsdocCheckParamNames = []|[{
  
  allowExtraTrailingParamDocs?: boolean
  
  checkDestructured?: boolean
  
  checkRestProperty?: boolean
  
  checkTypesPattern?: string
  
  disableExtraPropertyReporting?: boolean
  
  disableMissingParamChecks?: boolean
  
  enableFixer?: boolean
  
  useDefaultObjectProperties?: boolean
}]
// ----- jsdoc/check-property-names -----
type JsdocCheckPropertyNames = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/check-tag-names -----
type JsdocCheckTagNames = []|[{
  
  definedTags?: string[]
  
  enableFixer?: boolean
  
  inlineTags?: string[]
  
  jsxTags?: boolean
  
  typed?: boolean
}]
// ----- jsdoc/check-types -----
type JsdocCheckTypes = []|[{
  
  exemptTagContexts?: {
    
    tag?: string
    
    types?: (boolean | string[])
  }[]
  
  noDefaults?: boolean
  
  unifyParentAndChildTypeChecks?: boolean
}]
// ----- jsdoc/check-values -----
type JsdocCheckValues = []|[{
  
  allowedAuthors?: string[]
  
  allowedLicenses?: (string[] | boolean)
  
  licensePattern?: string
  
  numericOnlyVariation?: boolean
}]
// ----- jsdoc/convert-to-jsdoc-comments -----
type JsdocConvertToJsdocComments = []|[{
  
  allowedPrefixes?: string[]
  
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  contextsAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  contextsBeforeAndAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  enableFixer?: boolean
  
  enforceJsdocLineStyle?: ("multi" | "single")
  
  lineOrBlockStyle?: ("block" | "line" | "both")
}]
// ----- jsdoc/empty-tags -----
type JsdocEmptyTags = []|[{
  
  tags?: string[]
}]
// ----- jsdoc/escape-inline-tags -----
type JsdocEscapeInlineTags = []|[{
  
  allowedInlineTags?: string[]
  
  enableFixer?: boolean
  
  fixType?: ("backticks" | "backslash")
}]
// ----- jsdoc/implements-on-classes -----
type JsdocImplementsOnClasses = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/informative-docs -----
type JsdocInformativeDocs = []|[{
  
  aliases?: {
    [k: string]: string[]
  }
  
  excludedTags?: string[]
  
  uselessWords?: string[]
}]
// ----- jsdoc/lines-before-block -----
type JsdocLinesBeforeBlock = []|[{
  
  checkBlockStarts?: boolean
  
  excludedTags?: string[]
  
  ignoreSameLine?: boolean
  
  ignoreSingleLines?: boolean
  
  lines?: number
}]
// ----- jsdoc/match-description -----
type JsdocMatchDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  mainDescription?: (string | boolean | {
    match?: (string | boolean)
    message?: string
  })
  
  matchDescription?: string
  
  message?: string
  
  nonemptyTags?: boolean
  
  tags?: {
    [k: string]: (string | true | {
      match?: (string | true)
      message?: string
    })
  }
}]
// ----- jsdoc/match-name -----
type JsdocMatchName = []|[{
  
  match: {
    
    allowName?: string
    
    comment?: string
    
    context?: string
    
    disallowName?: string
    
    message?: string
    
    replacement?: string
    
    tags?: string[]
  }[]
}]
// ----- jsdoc/multiline-blocks -----
type JsdocMultilineBlocks = []|[{
  
  allowMultipleTags?: boolean
  
  minimumLengthForMultiline?: number
  
  multilineTags?: ("*" | string[])
  
  noFinalLineText?: boolean
  
  noMultilineBlocks?: boolean
  
  noSingleLineBlocks?: boolean
  
  noZeroLineText?: boolean
  
  requireSingleLineUnderCount?: number
  
  singleLineTags?: string[]
}]
// ----- jsdoc/no-bad-blocks -----
type JsdocNoBadBlocks = []|[{
  
  ignore?: string[]
  
  preventAllMultiAsteriskBlocks?: boolean
}]
// ----- jsdoc/no-blank-blocks -----
type JsdocNoBlankBlocks = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/no-defaults -----
type JsdocNoDefaults = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  noOptionalParamNames?: boolean
}]
// ----- jsdoc/no-missing-syntax -----
type JsdocNoMissingSyntax = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
    message?: string
    minimum?: number
  })[]
}]
// ----- jsdoc/no-multi-asterisks -----
type JsdocNoMultiAsterisks = []|[{
  
  allowWhitespace?: boolean
  
  preventAtEnd?: boolean
  
  preventAtMiddleLines?: boolean
}]
// ----- jsdoc/no-restricted-syntax -----
type JsdocNoRestrictedSyntax = []|[{
  
  contexts: (string | {
    comment?: string
    context?: string
    message?: string
  })[]
}]
// ----- jsdoc/no-types -----
type JsdocNoTypes = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/no-undefined-types -----
type JsdocNoUndefinedTypes = []|[{
  
  checkUsedTypedefs?: boolean
  
  definedTypes?: string[]
  
  disableReporting?: boolean
  
  markVariablesAsUsed?: boolean
}]
// ----- jsdoc/prefer-import-tag -----
type JsdocPreferImportTag = []|[{
  
  enableFixer?: boolean
  
  exemptTypedefs?: boolean
  
  outputType?: ("named-import" | "namespaced-import")
}]
// ----- jsdoc/require-asterisk-prefix -----
type JsdocRequireAsteriskPrefix = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  
  tags?: {
    
    always?: string[]
    
    any?: string[]
    
    never?: string[]
  }
}]
// ----- jsdoc/require-description -----
type JsdocRequireDescription = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  checkSetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  descriptionStyle?: ("body" | "tag" | "any")
  
  exemptedBy?: string[]
}]
// ----- jsdoc/require-description-complete-sentence -----
type JsdocRequireDescriptionCompleteSentence = []|[{
  
  abbreviations?: string[]
  
  newlineBeforeCapsAssumesBadSentenceEnd?: boolean
  
  tags?: string[]
}]
// ----- jsdoc/require-example -----
type JsdocRequireExample = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  checkSetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  enableFixer?: boolean
  
  exemptedBy?: string[]
  
  exemptNoArguments?: boolean
}]
// ----- jsdoc/require-file-overview -----
type JsdocRequireFileOverview = []|[{
  
  tags?: {
    [k: string]: {
      initialCommentsOnly?: boolean
      mustExist?: boolean
      preventDuplicates?: boolean
    }
  }
}]
// ----- jsdoc/require-hyphen-before-param-description -----
type JsdocRequireHyphenBeforeParamDescription = []|[("always" | "never")]|[("always" | "never"), {
  
  tags?: ({
    [k: string]: ("always" | "never")
  } | "any")
}]
// ----- jsdoc/require-jsdoc -----
type JsdocRequireJsdoc = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: (boolean | "no-setter")
  
  checkSetters?: (boolean | "no-getter")
  
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
    minLineCount?: number
  })[]
  
  enableFixer?: boolean
  
  exemptEmptyConstructors?: boolean
  
  exemptEmptyFunctions?: boolean
  
  exemptOverloadedImplementations?: boolean
  
  fixerMessage?: string
  
  minLineCount?: number
  
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
  
  require?: {
    
    ArrowFunctionExpression?: boolean
    
    ClassDeclaration?: boolean
    
    ClassExpression?: boolean
    
    FunctionDeclaration?: boolean
    
    FunctionExpression?: boolean
    
    MethodDefinition?: boolean
  }
  
  skipInterveningOverloadedDeclarations?: boolean
}]
// ----- jsdoc/require-param -----
type JsdocRequireParam = []|[{
  
  autoIncrementBase?: number
  
  checkConstructors?: boolean
  
  checkDestructured?: boolean
  
  checkDestructuredRoots?: boolean
  
  checkGetters?: boolean
  
  checkRestProperty?: boolean
  
  checkSetters?: boolean
  
  checkTypesPattern?: string
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  enableFixer?: boolean
  
  enableRestElementFixer?: boolean
  
  enableRootFixer?: boolean
  
  exemptedBy?: string[]
  
  ignoreWhenAllParamsMissing?: boolean
  
  interfaceExemptsParamsCheck?: boolean
  
  unnamedRootBase?: string[]
  
  useDefaultObjectProperties?: boolean
}]
// ----- jsdoc/require-param-description -----
type JsdocRequireParamDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  defaultDestructuredRootDescription?: string
  
  setDefaultDestructuredRootDescription?: boolean
}]
// ----- jsdoc/require-param-name -----
type JsdocRequireParamName = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-param-type -----
type JsdocRequireParamType = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  defaultDestructuredRootType?: string
  
  setDefaultDestructuredRootType?: boolean
}]
// ----- jsdoc/require-rejects -----
type JsdocRequireRejects = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  exemptedBy?: string[]
}]
// ----- jsdoc/require-returns -----
type JsdocRequireReturns = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
    forceRequireReturn?: boolean
  })[]
  
  enableFixer?: boolean
  
  exemptedBy?: string[]
  
  forceRequireReturn?: boolean
  
  forceReturnsWithAsync?: boolean
  
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
}]
// ----- jsdoc/require-returns-check -----
type JsdocRequireReturnsCheck = []|[{
  
  exemptAsync?: boolean
  
  exemptGenerators?: boolean
  
  noNativeTypes?: boolean
  
  reportMissingReturnForUndefinedTypes?: boolean
}]
// ----- jsdoc/require-returns-description -----
type JsdocRequireReturnsDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-returns-type -----
type JsdocRequireReturnsType = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-tags -----
type JsdocRequireTags = []|[{
  
  tags?: (string | {
    context?: string
    tag?: string
    [k: string]: unknown | undefined
  })[]
}]
// ----- jsdoc/require-template -----
type JsdocRequireTemplate = []|[{
  
  exemptedBy?: string[]
  
  requireSeparateTemplates?: boolean
}]
// ----- jsdoc/require-throws -----
type JsdocRequireThrows = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  exemptedBy?: string[]
}]
// ----- jsdoc/require-yields -----
type JsdocRequireYields = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  exemptedBy?: string[]
  
  forceRequireNext?: boolean
  
  forceRequireYields?: boolean
  
  next?: boolean
  
  nextWithGeneratorTag?: boolean
  
  withGeneratorTag?: boolean
}]
// ----- jsdoc/require-yields-check -----
type JsdocRequireYieldsCheck = []|[{
  
  checkGeneratorsOnly?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  next?: boolean
}]
// ----- jsdoc/sort-tags -----
type JsdocSortTags = []|[{
  
  alphabetizeExtras?: boolean
  
  linesBetween?: number
  
  reportIntraTagGroupSpacing?: boolean
  
  reportTagGroupSpacing?: boolean
  
  tagExceptions?: {
    [k: string]: number
  }
  
  tagSequence?: {
    
    tags?: string[]
  }[]
}]
// ----- jsdoc/tag-lines -----
type JsdocTagLines = []|[("always" | "any" | "never")]|[("always" | "any" | "never"), {
  
  applyToEndTag?: boolean
  
  count?: number
  
  endLines?: (number | null)
  
  maxBlockLines?: (number | null)
  
  startLines?: (number | null)
  
  tags?: {
    [k: string]: {
      count?: number
      lines?: ("always" | "never" | "any")
    }
  }
}]
// ----- jsdoc/text-escaping -----
type JsdocTextEscaping = []|[{
  
  escapeHTML?: boolean
  
  escapeMarkdown?: boolean
}]
// ----- jsdoc/ts-method-signature-style -----
type JsdocTsMethodSignatureStyle = []|[("method" | "property")]|[("method" | "property"), {
  
  enableFixer?: boolean
}]
// ----- jsdoc/ts-no-unnecessary-template-expression -----
type JsdocTsNoUnnecessaryTemplateExpression = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/ts-prefer-function-type -----
type JsdocTsPreferFunctionType = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/type-formatting -----
type JsdocTypeFormatting = []|[{
  
  arrayBrackets?: ("angle" | "square")
  
  arrowFunctionPostReturnMarkerSpacing?: string
  
  arrowFunctionPreReturnMarkerSpacing?: string
  
  enableFixer?: boolean
  
  functionOrClassParameterSpacing?: string
  
  functionOrClassPostGenericSpacing?: string
  
  functionOrClassPostReturnMarkerSpacing?: string
  
  functionOrClassPreReturnMarkerSpacing?: string
  
  functionOrClassTypeParameterSpacing?: string
  
  genericAndTupleElementSpacing?: string
  
  genericDot?: boolean
  
  keyValuePostColonSpacing?: string
  
  keyValuePostKeySpacing?: string
  
  keyValuePostOptionalSpacing?: string
  
  keyValuePostVariadicSpacing?: string
  
  methodQuotes?: ("double" | "single")
  
  objectFieldIndent?: string
  
  objectFieldQuote?: ("double" | "single" | null)
  
  objectFieldSeparator?: ("comma" | "comma-and-linebreak" | "linebreak" | "semicolon" | "semicolon-and-linebreak")
  
  objectFieldSeparatorOptionalLinebreak?: boolean
  
  objectFieldSeparatorTrailingPunctuation?: boolean
  
  parameterDefaultValueSpacing?: string
  
  postMethodNameSpacing?: string
  
  postNewSpacing?: string
  
  separatorForSingleObjectField?: boolean
  
  stringQuotes?: ("double" | "single")
  
  typeBracketSpacing?: string
  
  unionSpacing?: string
}]
// ----- jsdoc/valid-types -----
type JsdocValidTypes = []|[{
  
  allowEmptyNamepaths?: boolean
}]