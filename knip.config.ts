import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignoreDependencies: [
    '@commitlint/types',
    'conventional-changelog-conventionalcommits',
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;
