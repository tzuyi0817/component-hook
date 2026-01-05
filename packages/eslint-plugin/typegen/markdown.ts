/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface MarkdownRules {
  /**
   * Require languages for fenced code blocks
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/fenced-code-language.md
   */
  'markdown/fenced-code-language'?: Linter.RuleEntry<MarkdownFencedCodeLanguage>
  /**
   * Enforce heading levels increment by one
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/heading-increment.md
   */
  'markdown/heading-increment'?: Linter.RuleEntry<MarkdownHeadingIncrement>
  /**
   * Disallow bare URLs
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-bare-urls.md
   */
  'markdown/no-bare-urls'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-definitions.md
   */
  'markdown/no-duplicate-definitions'?: Linter.RuleEntry<MarkdownNoDuplicateDefinitions>
  /**
   * Disallow duplicate headings in the same document
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-headings.md
   */
  'markdown/no-duplicate-headings'?: Linter.RuleEntry<MarkdownNoDuplicateHeadings>
  /**
   * Disallow empty definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-definitions.md
   */
  'markdown/no-empty-definitions'?: Linter.RuleEntry<MarkdownNoEmptyDefinitions>
  /**
   * Disallow empty images
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-images.md
   */
  'markdown/no-empty-images'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty links
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-links.md
   */
  'markdown/no-empty-links'?: Linter.RuleEntry<[]>
  /**
   * Disallow HTML tags
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-html.md
   */
  'markdown/no-html'?: Linter.RuleEntry<MarkdownNoHtml>
  /**
   * Disallow invalid label references
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-invalid-label-refs.md
   */
  'markdown/no-invalid-label-refs'?: Linter.RuleEntry<[]>
  /**
   * Disallow headings without a space after the hash characters
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-atx-heading-space.md
   */
  'markdown/no-missing-atx-heading-space'?: Linter.RuleEntry<MarkdownNoMissingAtxHeadingSpace>
  /**
   * Disallow missing label references
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-label-refs.md
   */
  'markdown/no-missing-label-refs'?: Linter.RuleEntry<MarkdownNoMissingLabelRefs>
  /**
   * Disallow link fragments that do not reference valid headings
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-link-fragments.md
   */
  'markdown/no-missing-link-fragments'?: Linter.RuleEntry<MarkdownNoMissingLinkFragments>
  /**
   * Disallow multiple H1 headings in the same document
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-multiple-h1.md
   */
  'markdown/no-multiple-h1'?: Linter.RuleEntry<MarkdownNoMultipleH1>
  /**
   * Disallow URLs that match defined reference identifiers
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-reference-like-urls.md
   */
  'markdown/no-reference-like-urls'?: Linter.RuleEntry<[]>
  /**
   * Disallow reversed link and image syntax
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-reversed-media-syntax.md
   */
  'markdown/no-reversed-media-syntax'?: Linter.RuleEntry<[]>
  /**
   * Disallow spaces around emphasis markers
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-space-in-emphasis.md
   */
  'markdown/no-space-in-emphasis'?: Linter.RuleEntry<MarkdownNoSpaceInEmphasis>
  /**
   * Disallow unused definitions
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/no-unused-definitions.md
   */
  'markdown/no-unused-definitions'?: Linter.RuleEntry<MarkdownNoUnusedDefinitions>
  /**
   * Require alternative text for images
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/require-alt-text.md
   */
  'markdown/require-alt-text'?: Linter.RuleEntry<[]>
  /**
   * Disallow data rows in a GitHub Flavored Markdown table from having more cells than the header row
   * @see https://github.com/eslint/markdown/blob/main/docs/rules/table-column-count.md
   */
  'markdown/table-column-count'?: Linter.RuleEntry<MarkdownTableColumnCount>
}

/* ======= Declarations ======= */
// ----- markdown/fenced-code-language -----
type MarkdownFencedCodeLanguage = []|[{
  required?: string[]
}]
// ----- markdown/heading-increment -----
type MarkdownHeadingIncrement = []|[{
  frontmatterTitle?: string
}]
// ----- markdown/no-duplicate-definitions -----
type MarkdownNoDuplicateDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
}]
// ----- markdown/no-duplicate-headings -----
type MarkdownNoDuplicateHeadings = []|[{
  checkSiblingsOnly?: boolean
}]
// ----- markdown/no-empty-definitions -----
type MarkdownNoEmptyDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
  checkFootnoteDefinitions?: boolean
}]
// ----- markdown/no-html -----
type MarkdownNoHtml = []|[{
  allowed?: string[]
  allowedIgnoreCase?: boolean
}]
// ----- markdown/no-missing-atx-heading-space -----
type MarkdownNoMissingAtxHeadingSpace = []|[{
  checkClosedHeadings?: boolean
}]
// ----- markdown/no-missing-label-refs -----
type MarkdownNoMissingLabelRefs = []|[{
  allowLabels?: string[]
}]
// ----- markdown/no-missing-link-fragments -----
type MarkdownNoMissingLinkFragments = []|[{
  ignoreCase?: boolean
  allowPattern?: string
}]
// ----- markdown/no-multiple-h1 -----
type MarkdownNoMultipleH1 = []|[{
  frontmatterTitle?: string
}]
// ----- markdown/no-space-in-emphasis -----
type MarkdownNoSpaceInEmphasis = []|[{
  checkStrikethrough?: boolean
}]
// ----- markdown/no-unused-definitions -----
type MarkdownNoUnusedDefinitions = []|[{
  allowDefinitions?: string[]
  allowFootnoteDefinitions?: string[]
}]
// ----- markdown/table-column-count -----
type MarkdownTableColumnCount = []|[{
  checkMissingCells?: boolean
}]