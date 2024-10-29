import * as path from 'path';
import {defineConfig} from 'rspress/config';
import katex from 'rspress-plugin-katex';
import readingTime from 'rspress-plugin-reading-time';
import superSub from 'rspress-plugin-supersub';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    title: 'Sine-Exercise',
    description: 'Rspack-based Static Site Generator',
    icon: '/sine-icon.png',
    base: '/sine-exercise',
    logo: '/sine-icon.png',
    logoText: 'SINE-EXERCISE',
    plugins: [
        katex(), //latex解析
        superSub(), //上标下标
        readingTime({ //文档预计阅读时间
            defaultLocale: 'zh-CN',
        })
    ],
    route: {
        cleanUrls: true, // 去除路由url中的.html
    },
    themeConfig: {
        socialLinks: [
            // {icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress'},
        ],
        enableContentAnimation: true, //页面转成动画
        enableAppearanceAnimation: true, //主题切换动画效果
        // lastUpdated: true, //是否显示最后的更新时间
        lastUpdatedText: '最后更新时间',
        outlineTitle: 'Catalogue', //在右侧边栏中配置大纲的标题
    },
});
