module.exports = {
    content: ['./src/**/*.tsx', './docs/**/*.mdx', './components/**/*.tsx', './theme/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'green-primary': '#70C549',
                'blue-primary': 'var(--rp-c-brand)'
            },
            animationDelay: {
                '100': '100ms',
                '200': '200ms',
                '300': '300ms',
                '400': '400ms',
                '500': '500ms',
                '1000': '1000ms',
            },
        },
    },
    plugins: [
        function ({addUtilities, theme, e}) {
            const delays = theme('animationDelay');
            const utilities = Object.entries(delays).map(([key, value]) => {
                return {
                    [`.${e(`animation-delay-${key}`)}`]: {
                        animationDelay: value,
                    },
                };
            });
            addUtilities(utilities);
        },
    ],
};
