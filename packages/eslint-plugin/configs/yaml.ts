import { pluginYaml } from '../plugins.ts';
import type { YamlRules } from '../typegen/yaml.ts';
import type { Config } from '../types.ts';

const initialRules: Config<YamlRules> = {
  rules: {
    'yml/no-empty-mapping-value': 'off',
  },
};
const configs = Array.from(new Set([...pluginYaml.configs.standard, ...pluginYaml.configs.prettier, initialRules]));
const mergedConfig: Config<YamlRules> = configs.reduce((map, config) => {
  return { ...map, ...config, rules: { ...map.rules, ...config.rules } };
}, {});

export const yamlConfigs: Config<YamlRules>[] = [
  {
    ...mergedConfig,
    name: 'component-hook/yaml',
  },
  {
    name: 'component-hook/yaml/pnpm-workspace',
    files: ['**/pnpm-workspace.yaml'],
    rules: {
      'yml/sort-keys': [
        'error',
        {
          order: [
            // Workspace
            'dedupeInjectedDeps',
            'disallowWorkspaceCycles',
            'failIfNoMatch',
            'ignoreWorkspaceCycles',
            'ignoreWorkspaceRootCheck',
            'includeWorkspaceRoot',
            'injectWorkspacePackages',
            'legacyDirFiltering',
            'linkWorkspacePackages',
            'preferWorkspacePackages',
            'saveWorkspaceProtocol',
            'sharedWorkspaceLockfile',
            'syncInjectedDepsAfterScripts',

            // Catalogs
            'catalogMode',
            'catalogPrune',
            'cleanupUnusedCatalogs',

            // Dependency resolution
            'allowedDeprecatedVersions',
            'blockExoticSubdeps',
            'ignoredOptionalDependencies',
            'minimumReleaseAge',
            'minimumReleaseAgeIgnoreMissingTime',
            'minimumReleaseAgeStrict',
            'minimumReleaseAgeExcludePrune',
            'minimumReleaseAgeExclude',
            'registrySupportsTimeField',
            'resolutionMode',
            'supportedArchitectures',
            'trustLockfile',
            'trustPolicy',
            'trustPolicyIgnoreAfter',
            'trustPolicyExcludePrune',
            'trustPolicyExclude',
            'update',

            // Peer dependencies
            'autoInstallPeers',
            'dedupePeerDependents',
            'dedupePeers',
            'peerDependencyRules',
            'resolvePeersFromWorkspaceRoot',
            'strictPeerDependencies',

            // Registry and network
            'fetchMinSpeedKiBps',
            'fetchRetries',
            'fetchRetryFactor',
            'fetchRetryMaxtimeout',
            'fetchRetryMintimeout',
            'fetchTimeout',
            'fetchWarnTimeoutMs',
            'gitShallowHosts',
            'httpProxy',
            'httpsProxy',
            'localAddress',
            'maxsockets',
            'namedRegistries',
            'networkConcurrency',
            'noProxy',
            'registries',
            'registry',
            'strictSsl',

            // node_modules
            'dlxCacheMaxAge',
            'enableGlobalVirtualStore',
            'enableModulesDir',
            'extendNodePath',
            'modulesCacheMaxAge',
            'modulesDir',
            'nodeExperimentalPackageMap',
            'nodeLinker',
            'nodePackageMapType',
            'packageImportMethod',
            'preferSymlinkedExecutables',
            'symlink',
            'virtualStoreDir',
            'virtualStoreDirMaxLength',
            'virtualStoreOnly',
            'virtualStoreType',

            // Hoisting
            'hoist',
            'hoistingLimits',
            'hoistPattern',
            'hoistWorkspacePackages',
            'publicHoistPattern',
            'shamefullyHoist',

            // Store
            'frozenStore',
            'storeDir',
            'strictStorePkgContentCheck',
            'useRunningStoreServer',
            'verifyStoreIntegrity',

            // Lockfile
            'gitBranchLockfile',
            'lockfile',
            'lockfileIncludeTarballUrl',
            'mergeGitBranchLockfilesBranchPattern',
            'peersSuffixMaxLength',
            'preferFrozenLockfile',

            // Scripts and builds
            'childConcurrency',
            'dangerouslyAllowAllBuilds',
            'enablePrePostScripts',
            'ignoreDepScripts',
            'ignoreScripts',
            'nodeOptions',
            'requiredScripts',
            'scriptShell',
            'shellEmulator',
            'sideEffectsCache',
            'sideEffectsCacheReadonly',
            'strictDepBuilds',
            'unsafePerm',
            'verifyDepsBeforeRun',

            // Node.js and package manager versions
            'managePackageManagerVersions',
            'nodeDownloadMirrors',
            'nodeVersion',
            'packageManagerStrict',
            'packageManagerStrictVersion',
            'pmOnFail',
            'runtimeOnFail',

            // CLI and output
            'ci',
            'color',
            'engineStrict',
            'loglevel',
            'npmPath',
            'recursiveInstall',
            'updateNotifier',
            'useBetaCli',
            'useStderr',

            // Directories and pnpmfile
            'cacheDir',
            'globalBinDir',
            'globalDir',
            'globalPnpmfile',
            'globalShims',
            'ignorePnpmfile',
            'npmrcAuthFile',
            'pnpmfile',
            'stateDir',

            // Audit and versioning
            'audit',
            'versioning',

            // Misc
            'allowNonAppliedPatches',
            'dedupeDirectDeps',
            'deployAllFiles',
            'ignoreCompatibilityDb',
            'initAuthorEmail',
            'initAuthorName',
            'initAuthorUrl',
            'initLicense',
            'initVersion',
            'optimisticRepeatInstall',
            'saveExact',
            'savePrefix',
            'tag',

            // Workspace layout and dependency declarations, ordered by how
            // a `pnpm-workspace.yaml` usually reads top to bottom
            'packages',
            'packageConfigs',
            'overrides',
            'packageExtensions',
            'patchedDependencies',
            'configDependencies',

            // Build approvals
            'allowBuilds',
            // Superseded by `allowBuilds` in pnpm v11
            'ignoredBuiltDependencies',
            'neverBuiltDependencies',
            'onlyBuiltDependencies',
            'onlyBuiltDependenciesFile',

            // Catalogs, usually the largest blocks
            'defines',
            'catalog',
            'catalogs',

            { order: { type: 'asc' } },
          ],
          pathPattern: '^$',
        },
        {
          allowLineSeparatedGroups: true,
          order: { type: 'asc' },
          pathPattern: '^(catalog|catalogs|overrides)$',
        },
        {
          allowLineSeparatedGroups: true,
          order: { type: 'asc' },
          pathPattern: String.raw`^catalogs\..+$`,
        },
      ],
    },
  },
];
