/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./node_modules/flyonui/dist/js/*.js", "*"], // * for all files.
    theme: {
        container: {
            center: "true",
            padding: {
                DEFAULT: "10px",
            },
        },
        extend: {},
    },
    plugins: [
        require("flyonui"),
        require("flyonui/plugin"), // Require only if you want to use FlyonUI JS component
    ],
};
