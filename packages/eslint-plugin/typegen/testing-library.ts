/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface TestingLibraryRules {
  /**
   * Enforce promises from async event methods are handled
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-events.md
   */
  'testing-library/await-async-events'?: Linter.RuleEntry<TestingLibraryAwaitAsyncEvents>
  /**
   * Enforce promises from async queries to be handled
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-queries.md
   */
  'testing-library/await-async-queries'?: Linter.RuleEntry<[]>
  /**
   * Enforce promises from async utils to be awaited properly
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-utils.md
   */
  'testing-library/await-async-utils'?: Linter.RuleEntry<[]>
  /**
   * Ensures consistent usage of `data-testid`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md
   */
  'testing-library/consistent-data-testid'?: Linter.RuleEntry<TestingLibraryConsistentDataTestid>
  /**
   * Disallow unnecessary `await` for sync events
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md
   */
  'testing-library/no-await-sync-events'?: Linter.RuleEntry<TestingLibraryNoAwaitSyncEvents>
  /**
   * Disallow unnecessary `await` for sync queries
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-queries.md
   */
  'testing-library/no-await-sync-queries'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `container` methods
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-container.md
   */
  'testing-library/no-container'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of debugging utilities like `debug`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md
   */
  'testing-library/no-debugging-utils'?: Linter.RuleEntry<TestingLibraryNoDebuggingUtils>
  /**
   * Disallow importing from DOM Testing Library
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md
   */
  'testing-library/no-dom-import'?: Linter.RuleEntry<TestingLibraryNoDomImport>
  /**
   * Disallow the use of the global RegExp flag (/g) in queries
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-global-regexp-flag-in-query.md
   */
  'testing-library/no-global-regexp-flag-in-query'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `cleanup`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-manual-cleanup.md
   */
  'testing-library/no-manual-cleanup'?: Linter.RuleEntry<[]>
  /**
   * Disallow direct Node access
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md
   */
  'testing-library/no-node-access'?: Linter.RuleEntry<TestingLibraryNoNodeAccess>
  /**
   * Disallow the use of promises passed to a `fireEvent` method
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-promise-in-fire-event.md
   */
  'testing-library/no-promise-in-fire-event'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `render` in testing frameworks setup functions
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-lifecycle.md
   */
  'testing-library/no-render-in-lifecycle'?: Linter.RuleEntry<TestingLibraryNoRenderInLifecycle>
  /**
   * Ensure no `data-testid` queries are used
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-test-id-queries.md
   */
  'testing-library/no-test-id-queries'?: Linter.RuleEntry<[]>
  /**
   * Disallow wrapping Testing Library utils or empty callbacks in `act`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md
   */
  'testing-library/no-unnecessary-act'?: Linter.RuleEntry<TestingLibraryNoUnnecessaryAct>
  /**
   * Disallow the use of multiple `expect` calls inside `waitFor`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-multiple-assertions.md
   */
  'testing-library/no-wait-for-multiple-assertions'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of side effects in `waitFor`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-side-effects.md
   */
  'testing-library/no-wait-for-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Ensures no snapshot is generated inside of a `waitFor` call
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-snapshot.md
   */
  'testing-library/no-wait-for-snapshot'?: Linter.RuleEntry<[]>
  /**
   * Suggest using explicit assertions rather than standalone queries
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md
   */
  'testing-library/prefer-explicit-assert'?: Linter.RuleEntry<TestingLibraryPreferExplicitAssert>
  /**
   * Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-find-by.md
   */
  'testing-library/prefer-find-by'?: Linter.RuleEntry<[]>
  /**
   * Suggest using implicit assertions for getBy* & findBy* queries
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-implicit-assert.md
   */
  'testing-library/prefer-implicit-assert'?: Linter.RuleEntry<[]>
  /**
   * Ensure appropriate `get*`/`query*` queries are used with their respective matchers
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md
   */
  'testing-library/prefer-presence-queries'?: Linter.RuleEntry<TestingLibraryPreferPresenceQueries>
  /**
   * Suggest using `queryBy*` queries when waiting for disappearance
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-by-disappearance.md
   */
  'testing-library/prefer-query-by-disappearance'?: Linter.RuleEntry<[]>
  /**
   * Ensure the configured `get*`/`query*` query is used with the corresponding matchers
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-matchers.md
   */
  'testing-library/prefer-query-matchers'?: Linter.RuleEntry<TestingLibraryPreferQueryMatchers>
  /**
   * Suggest using `screen` while querying
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-screen-queries.md
   */
  'testing-library/prefer-screen-queries'?: Linter.RuleEntry<[]>
  /**
   * Suggest using `userEvent` over `fireEvent` for simulating user interactions
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md
   */
  'testing-library/prefer-user-event'?: Linter.RuleEntry<TestingLibraryPreferUserEvent>
  /**
   * Suggest using userEvent with setup() instead of direct methods
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event-setup.md
   */
  'testing-library/prefer-user-event-setup'?: Linter.RuleEntry<[]>
  /**
   * Enforce a valid naming for return value from `render`
   * @see https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/render-result-naming-convention.md
   */
  'testing-library/render-result-naming-convention'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- testing-library/await-async-events -----
type TestingLibraryAwaitAsyncEvents = []|[{
  eventModule?: (("fireEvent" | "userEvent") | ("fireEvent" | "userEvent")[])
}]
// ----- testing-library/consistent-data-testid -----
type TestingLibraryConsistentDataTestid = []|[{
  testIdPattern: string
  testIdAttribute?: (string | string[])
  customMessage?: string
}]
// ----- testing-library/no-await-sync-events -----
type TestingLibraryNoAwaitSyncEvents = []|[{
  
  eventModules?: [("fire-event" | "user-event"), ...(("fire-event" | "user-event"))[]]
}]
// ----- testing-library/no-debugging-utils -----
type TestingLibraryNoDebuggingUtils = []|[{
  utilsToCheckFor?: {
    prettyFormat?: boolean
    logDOM?: boolean
    logRoles?: boolean
    prettyDOM?: boolean
    logTestingPlaygroundURL?: boolean
    debug?: boolean
  }
}]
// ----- testing-library/no-dom-import -----
type TestingLibraryNoDomImport = []|[string]
// ----- testing-library/no-node-access -----
type TestingLibraryNoNodeAccess = []|[{
  allowContainerFirstChild?: boolean
}]
// ----- testing-library/no-render-in-lifecycle -----
type TestingLibraryNoRenderInLifecycle = []|[{
  allowTestingFrameworkSetupHook?: ("beforeEach" | "beforeAll")
}]
// ----- testing-library/no-unnecessary-act -----
type TestingLibraryNoUnnecessaryAct = []|[{
  isStrict?: boolean
}]
// ----- testing-library/prefer-explicit-assert -----
type TestingLibraryPreferExplicitAssert = []|[{
  assertion?: ("toBeOnTheScreen" | "toBeInTheDocument" | "toBeTruthy" | "toBeDefined")
  includeFindQueries?: boolean
}]
// ----- testing-library/prefer-presence-queries -----
type TestingLibraryPreferPresenceQueries = []|[{
  presence?: boolean
  absence?: boolean
}]
// ----- testing-library/prefer-query-matchers -----
type TestingLibraryPreferQueryMatchers = []|[{
  validEntries?: {
    query?: ("get" | "query")
    matcher?: string
  }[]
}]
// ----- testing-library/prefer-user-event -----
type TestingLibraryPreferUserEvent = []|[{
  allowedMethods?: unknown[]
}]