    // tailwind.config.js
    module.exports = {
      content: [
       "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
 ],
      theme: {
        extend: {
          colors: {
            primary:  '#BCED00', // Your primary color
            secondary: '#00FF00',
          },
        },
      },
      plugins: [],
    };