/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface PlaywrightRules {
  /**
   * Enforces a blank line between Playwright test blocks (e.g., test, test.step, test.beforeEach, etc.).
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/consistent-spacing-between-blocks.md
   */
  'playwright/consistent-spacing-between-blocks'?: Linter.RuleEntry<[]>
  /**
   * Enforce assertion to be made in a test body
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/expect-expect.md
   */
  'playwright/expect-expect'?: Linter.RuleEntry<PlaywrightExpectExpect>
  /**
   * Enforces a maximum number assertion calls in a test body
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/max-expects.md
   */
  'playwright/max-expects'?: Linter.RuleEntry<PlaywrightMaxExpects>
  /**
   * Enforces a maximum depth to nested describe calls
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/max-nested-describe.md
   */
  'playwright/max-nested-describe'?: Linter.RuleEntry<PlaywrightMaxNestedDescribe>
  /**
   * Identify false positives when async Playwright APIs are not properly awaited.
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/missing-playwright-await.md
   */
  'playwright/missing-playwright-await'?: Linter.RuleEntry<PlaywrightMissingPlaywrightAwait>
  /**
   * Disallow commented out tests
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-commented-out-tests.md
   */
  'playwright/no-commented-out-tests'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling `expect` conditionally
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-conditional-expect.md
   */
  'playwright/no-conditional-expect'?: Linter.RuleEntry<[]>
  /**
   * Disallow conditional logic in tests
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-conditional-in-test.md
   */
  'playwright/no-conditional-in-test'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate setup and teardown hooks
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-duplicate-hooks.md
   */
  'playwright/no-duplicate-hooks'?: Linter.RuleEntry<[]>
  /**
   * The use of ElementHandle is discouraged, use Locator instead
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-element-handle.md
   */
  'playwright/no-element-handle'?: Linter.RuleEntry<[]>
  /**
   * The use of `page.$eval` and `page.$$eval` are discouraged, use `locator.evaluate` or `locator.evaluateAll` instead
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-eval.md
   */
  'playwright/no-eval'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `.only()` focus test annotation
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-focused-test.md
   */
  'playwright/no-focused-test'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of `{ force: true }` option.
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-force-option.md
   */
  'playwright/no-force-option'?: Linter.RuleEntry<[]>
  /**
   * Disallows the usage of getByTitle()
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-get-by-title.md
   */
  'playwright/no-get-by-title'?: Linter.RuleEntry<[]>
  /**
   * Disallow setup and teardown hooks
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-hooks.md
   */
  'playwright/no-hooks'?: Linter.RuleEntry<PlaywrightNoHooks>
  /**
   * Disallow nested `test.step()` methods
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-nested-step.md
   */
  'playwright/no-nested-step'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of the networkidle option
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-networkidle.md
   */
  'playwright/no-networkidle'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of nth methods
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-nth-methods.md
   */
  'playwright/no-nth-methods'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of page.pause()
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-page-pause.md
   */
  'playwright/no-page-pause'?: Linter.RuleEntry<[]>
  /**
   * Disallows the usage of raw locators
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-raw-locators.md
   */
  'playwright/no-raw-locators'?: Linter.RuleEntry<PlaywrightNoRawLocators>
  /**
   * Disallows the usage of specific locator methods
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-restricted-locators.md
   */
  'playwright/no-restricted-locators'?: Linter.RuleEntry<PlaywrightNoRestrictedLocators>
  /**
   * Disallow specific matchers & modifiers
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-restricted-matchers.md
   */
  'playwright/no-restricted-matchers'?: Linter.RuleEntry<PlaywrightNoRestrictedMatchers>
  /**
   * Prevent usage of the `.skip()` skip test annotation.
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-skipped-test.md
   */
  'playwright/no-skipped-test'?: Linter.RuleEntry<PlaywrightNoSkippedTest>
  /**
   * Prevent usage of the `.slow()` slow test annotation.
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-slowed-test.md
   */
  'playwright/no-slowed-test'?: Linter.RuleEntry<PlaywrightNoSlowedTest>
  /**
   * Disallow using `expect` outside of `test` blocks
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-standalone-expect.md
   */
  'playwright/no-standalone-expect'?: Linter.RuleEntry<[]>
  /**
   * Prevent unsafe variable references in page.evaluate() and page.addInitScript()
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-unsafe-references.md
   */
  'playwright/no-unsafe-references'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of page locators that are not used
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-unused-locators.md
   */
  'playwright/no-unused-locators'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary awaits for Playwright methods
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-useless-await.md
   */
  'playwright/no-useless-await'?: Linter.RuleEntry<[]>
  /**
   * Disallow usage of 'not' matchers when a more specific matcher exists
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-useless-not.md
   */
  'playwright/no-useless-not'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of page.waitForNavigation()
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-wait-for-navigation.md
   */
  'playwright/no-wait-for-navigation'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of page.waitForSelector()
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-wait-for-selector.md
   */
  'playwright/no-wait-for-selector'?: Linter.RuleEntry<[]>
  /**
   * Prevent usage of page.waitForTimeout()
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/no-wait-for-timeout.md
   */
  'playwright/no-wait-for-timeout'?: Linter.RuleEntry<[]>
  /**
   * Suggest using the built-in comparison matchers
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-comparison-matcher.md
   */
  'playwright/prefer-comparison-matcher'?: Linter.RuleEntry<[]>
  /**
   * Suggest using the built-in equality matchers
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-equality-matcher.md
   */
  'playwright/prefer-equality-matcher'?: Linter.RuleEntry<[]>
  /**
   * Prefer having hooks in a consistent order
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-hooks-in-order.md
   */
  'playwright/prefer-hooks-in-order'?: Linter.RuleEntry<[]>
  /**
   * Suggest having hooks before any test cases
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-hooks-on-top.md
   */
  'playwright/prefer-hooks-on-top'?: Linter.RuleEntry<[]>
  /**
   * Suggest locators over page methods
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-locator.md
   */
  'playwright/prefer-locator'?: Linter.RuleEntry<[]>
  /**
   * Enforce lowercase test names
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-lowercase-title.md
   */
  'playwright/prefer-lowercase-title'?: Linter.RuleEntry<PlaywrightPreferLowercaseTitle>
  /**
   * Prefer native locator functions
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-native-locators.md
   */
  'playwright/prefer-native-locators'?: Linter.RuleEntry<PlaywrightPreferNativeLocators>
  /**
   * Suggest using `toStrictEqual()`
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-strict-equal.md
   */
  'playwright/prefer-strict-equal'?: Linter.RuleEntry<[]>
  /**
   * Suggest using `toBe()` for primitive literals
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-to-be.md
   */
  'playwright/prefer-to-be'?: Linter.RuleEntry<[]>
  /**
   * Suggest using toContain()
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-to-contain.md
   */
  'playwright/prefer-to-contain'?: Linter.RuleEntry<[]>
  /**
   * Suggest using `toHaveCount()`
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-to-have-count.md
   */
  'playwright/prefer-to-have-count'?: Linter.RuleEntry<[]>
  /**
   * Suggest using `toHaveLength()`
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-to-have-length.md
   */
  'playwright/prefer-to-have-length'?: Linter.RuleEntry<[]>
  /**
   * Prefer web first assertions
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/prefer-web-first-assertions.md
   */
  'playwright/prefer-web-first-assertions'?: Linter.RuleEntry<[]>
  /**
   * Require setup and teardown code to be within a hook
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/require-hook.md
   */
  'playwright/require-hook'?: Linter.RuleEntry<PlaywrightRequireHook>
  /**
   * Require all assertions to use `expect.soft`
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/require-soft-assertions.md
   */
  'playwright/require-soft-assertions'?: Linter.RuleEntry<[]>
  /**
   * Require a message for `toThrow()`
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/require-to-throw-message.md
   */
  'playwright/require-to-throw-message'?: Linter.RuleEntry<[]>
  /**
   * Require test cases and hooks to be inside a `test.describe` block
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/require-top-level-describe.md
   */
  'playwright/require-top-level-describe'?: Linter.RuleEntry<PlaywrightRequireTopLevelDescribe>
  /**
   * Enforce valid `describe()` callback
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/valid-describe-callback.md
   */
  'playwright/valid-describe-callback'?: Linter.RuleEntry<[]>
  /**
   * Enforce valid `expect()` usage
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/valid-expect.md
   */
  'playwright/valid-expect'?: Linter.RuleEntry<PlaywrightValidExpect>
  /**
   * Require promises that have expectations in their chain to be valid
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/valid-expect-in-promise.md
   */
  'playwright/valid-expect-in-promise'?: Linter.RuleEntry<[]>
  /**
   * Enforce valid tag format in Playwright test blocks and titles
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/valid-test-tags.md
   */
  'playwright/valid-test-tags'?: Linter.RuleEntry<PlaywrightValidTestTags>
  /**
   * Enforce valid titles
   * @see https://github.com/mskelton/eslint-plugin-playwright/tree/main/docs/rules/valid-title.md
   */
  'playwright/valid-title'?: Linter.RuleEntry<PlaywrightValidTitle>
}

/* ======= Declarations ======= */
// ----- playwright/expect-expect -----
type PlaywrightExpectExpect = []|[{
  assertFunctionNames?: []|[string]
  assertFunctionPatterns?: []|[string]
}]
// ----- playwright/max-expects -----
type PlaywrightMaxExpects = []|[{
  max?: number
}]
// ----- playwright/max-nested-describe -----
type PlaywrightMaxNestedDescribe = []|[{
  max?: number
}]
// ----- playwright/missing-playwright-await -----
type PlaywrightMissingPlaywrightAwait = []|[{
  customMatchers?: string[]
}]
// ----- playwright/no-hooks -----
type PlaywrightNoHooks = []|[{
  allow?: unknown[]
}]
// ----- playwright/no-raw-locators -----
type PlaywrightNoRawLocators = []|[{
  allowed?: string[]
}]
// ----- playwright/no-restricted-locators -----
type PlaywrightNoRestrictedLocators = []|[(string | {
  message?: string
  type: string
})[]]
// ----- playwright/no-restricted-matchers -----
type PlaywrightNoRestrictedMatchers = []|[{
  [k: string]: (string | null) | undefined
}]
// ----- playwright/no-skipped-test -----
type PlaywrightNoSkippedTest = []|[{
  allowConditional?: boolean
}]
// ----- playwright/no-slowed-test -----
type PlaywrightNoSlowedTest = []|[{
  allowConditional?: boolean
}]
// ----- playwright/prefer-lowercase-title -----
type PlaywrightPreferLowercaseTitle = []|[{
  allowedPrefixes?: string[]
  ignore?: ("test.describe" | "test")[]
  ignoreTopLevelDescribe?: boolean
}]
// ----- playwright/prefer-native-locators -----
type PlaywrightPreferNativeLocators = []|[{
  testIdAttribute?: string
}]
// ----- playwright/require-hook -----
type PlaywrightRequireHook = []|[{
  allowedFunctionCalls?: string[]
}]
// ----- playwright/require-top-level-describe -----
type PlaywrightRequireTopLevelDescribe = []|[{
  maxTopLevelDescribes?: number
}]
// ----- playwright/valid-expect -----
type PlaywrightValidExpect = []|[{
  maxArgs?: number
  minArgs?: number
}]
// ----- playwright/valid-test-tags -----
type PlaywrightValidTestTags = []|[{
  allowedTags?: (string | {
    source?: string
  })[]
  disallowedTags?: (string | {
    source?: string
  })[]
}]
// ----- playwright/valid-title -----
type PlaywrightValidTitle = []|[{
  disallowedWords?: string[]
  ignoreSpaces?: boolean
  ignoreTypeOfDescribeName?: boolean
  ignoreTypeOfStepName?: boolean
  ignoreTypeOfTestName?: boolean
  [k: string]: unknown
}]