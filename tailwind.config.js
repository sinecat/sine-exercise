module.exports = {
    content: ['./src/**/*.tsx', './docs/**/*.mdx', './components/**/*.tsx', './theme/**/*.tsx'],
    theme: {
        extend: {
            screens: {
                'lg': '1280px', // 修改 lg 断点为 1280px
                'md': '960px'
            },
            colors: {
                'green-primary': '#70C549',
                'blue-primary': 'var(--rp-c-brand)',
                // 'bg-success':'var(--rp-container-tip-bg)',
                // 'border-success': 'var(rp-container-tip-border)',
                // 'bg-error': 'var(--rp-container-danger-bg)',
                // 'border-error': 'var(rp-container-danger-border)',
            },
            backgroundColor: {
                'success': '#EEFAF7',
                'error': '#FFF6F3',
                'background':'var(--rp-c-bg)',
                'rs-tip':'var(--rp-container-tip-bg)',
                'rs-danger':'var(--rp-container-danger-bg)',
                'rs-details':'var(--rp-container-details-bg)',
            },
            borderColor: {
                'divider':'var(--rp-c-divider-light)',
                'success': '#94E3C9',
                'error': '#FFBBA4',
                'error-dark': '#FF561B',
                'default': '#E1E4E8',
                'rs-tip':'var(--rp-container-tip-border)',
                'rs-danger':'var(--rp-container-danger-border)',
                'rs-details':'var(--rp-container-details-border)'
            },
            textColor: {
                'success': '#94E3C9',
                'success-dark': '#32CA99',
                'error': '#FFBBA4',
                'error-dark': '#FF561B',
                'default': '#E1E4E8'
            },
            animationDelay: {
                '100': '100ms',
                '200': '200ms',
                '300': '300ms',
                '400': '400ms',
                '500': '500ms',
                '1000': '1000ms',
                '1200': '1200ms',
                '1400': '1400ms',
                '1600': '1600ms',
                '1800': '1800ms',
            },
            boxShadow: {
                'top': '0px -8px 12px -10px rgba(0, 0, 0, 0.1)',
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
