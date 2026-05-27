import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/libs/**/*.ts'],
    rules: {
      'no-restricted-syntax': [
        'warn',
        {
          selector: "Decorator[expression.callee.name='Input']",
          message: 'Use signal input() instead of @Input() decorator.',
        },
        {
          selector: "Decorator[expression.callee.name='Output']",
          message: 'Use signal output() instead of @Output() decorator.',
        },
        {
          selector: "ImportSpecifier[imported.name='CommonModule']",
          message: 'Do not import CommonModule — use @if/@for built-in control flow.',
        },
        {
          selector: "ImportSpecifier[imported.name='EventEmitter']",
          message: 'Use signal output() instead of EventEmitter.',
        },
      ],
    },
  },
];
