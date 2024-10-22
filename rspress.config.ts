import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Sine-Exercise',
  description: 'Rspack-based Static Site Generator',
  icon: '/sine-icon.png',
  base: '/sine-exercise',
  logo: '/sine-icon.png',
  logoText: 'SINE-EXERCISE',
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
