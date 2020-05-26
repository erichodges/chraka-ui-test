// example theme.js
export default {
    breakpoints: ["360px", "768px", "1024px", "1440px"],
    fonts: {
      heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: "Menlo, monospace",
    },
    fontSizes: {

    },
    mode: {
      light: {
        pri: '#000',
        sec: '#fafafa',
        menu: '#fcfcfc',
        black: "#000",
        white: "#ccc",
        background: "#ccc",
        text: "#334E68",
        heading: "#102a43",
        icon: "#9FB3C8",
        link: "#9F00FF",
      },
      dark: {
        pri: '#ccc',
        sec: '#fafafa',
        menu: '#fcfcfc',
        black: "#000",
        white: "#ccc",
        background: "#102a43",
        text: "#EFF2FB",
        heading: "#fff",
        icon: "#486581",
        link: "#F8CCFF",
      },
    },
    colors: {
      pri: '#ccc',
      sec: '#fafafa',
      menu: '#fcfcfc',
      clear: "transparent",
      black: "#000",
      white: "#ccc",
      whiteAlpha: {
        900: "#fafafa"
      },
      gray: {
        50: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    }
  };