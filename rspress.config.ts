import * as path from 'path';
import { defineConfig } from 'rspress/config';
import katex from 'rspress-plugin-katex';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Sine-Exercise',
  description: 'Rspack-based Static Site Generator',
  icon: '/sine-icon.png',
  base: '/sine-exercise',
  logo: '/sine-icon.png',
  logoText: 'SINE-EXERCISE',
  plugins: [katex()],
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
    enableContentAnimation: true, //页面转成动画
    enableAppearanceAnimation: true, //主题切换动画效果
  },
});
