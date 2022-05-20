module.exports = {

    content: [],
    theme: {
        variants: {

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
    plugins: [
    ],
};
