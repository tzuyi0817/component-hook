/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

export interface SecurityRules {
  /**
   * Detects trojan source attacks that employ unicode bidi attacks to inject malicious code.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-bidi-characters.md
   */
  'security/detect-bidi-characters'?: Linter.RuleEntry<[]>
  /**
   * Detects calls to "buffer" with "noAssert" flag set.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-buffer-noassert.md
   */
  'security/detect-buffer-noassert'?: Linter.RuleEntry<[]>
  /**
   * Detects instances of "child_process" & non-literal "exec()" calls.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-child-process.md
   */
  'security/detect-child-process'?: Linter.RuleEntry<[]>
  /**
   * Detects "object.escapeMarkup = false", which can be used with some template engines to disable escaping of HTML entities.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-disable-mustache-escape.md
   */
  'security/detect-disable-mustache-escape'?: Linter.RuleEntry<[]>
  /**
   * Detects "eval(variable)" which can allow an attacker to run arbitrary code inside your process.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-eval-with-expression.md
   */
  'security/detect-eval-with-expression'?: Linter.RuleEntry<[]>
  /**
   * Detects instances of new Buffer(argument) where argument is any non-literal value.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-new-buffer.md
   */
  'security/detect-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Detects Express "csrf" middleware setup before "method-override" middleware.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-no-csrf-before-method-override.md
   */
  'security/detect-no-csrf-before-method-override'?: Linter.RuleEntry<[]>
  /**
   * Detects variable in filename argument of "fs" calls, which might allow an attacker to access anything on your system.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-fs-filename.md
   */
  'security/detect-non-literal-fs-filename'?: Linter.RuleEntry<[]>
  /**
   * Detects "RegExp(variable)", which might allow an attacker to DOS your server with a long-running regular expression.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-regexp.md
   */
  'security/detect-non-literal-regexp'?: Linter.RuleEntry<[]>
  /**
   * Detects "require(variable)", which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-require.md
   */
  'security/detect-non-literal-require'?: Linter.RuleEntry<[]>
  /**
   * Detects "variable[key]" as a left- or right-hand assignment operand.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-object-injection.md
   */
  'security/detect-object-injection'?: Linter.RuleEntry<[]>
  /**
   * Detects insecure comparisons (`==`, `!=`, `!==` and `===`), which check input sequentially.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-possible-timing-attacks.md
   */
  'security/detect-possible-timing-attacks'?: Linter.RuleEntry<[]>
  /**
   * Detects if "pseudoRandomBytes()" is in use, which might not give you the randomness you need and expect.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-pseudoRandomBytes.md
   */
  'security/detect-pseudoRandomBytes'?: Linter.RuleEntry<[]>
  /**
   * Detects potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop.
   * @see https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-unsafe-regex.md
   */
  'security/detect-unsafe-regex'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
