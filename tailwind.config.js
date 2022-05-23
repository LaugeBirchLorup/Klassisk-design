module.exports = {

    content: [],
    theme: {
        variants: {

        },

        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        screens: {
            xxs: "300px",
            xs: "400px",
            sm: "640px",
            md: "768px",
            lg: "1025px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1681px",
        },

        extend: {
            gridTemplateColumns: {
                12: "repeat(12, minmax(0, 1fr))",
            },
        },

    },
    plugins: [require('@tailwindcss/forms'),
    ],
};
