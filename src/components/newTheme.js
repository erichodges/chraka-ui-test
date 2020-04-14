// example theme.js
export default {
    breakpoints: ["360px", "768px", "1024px", "1440px"],
    fonts: {
      heading: '"system-ui", sans-serif',
      body: "system-ui, sans-serif",
      mono: "Menlo, monospace",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    colors: {
      pri: '#fff',
      sec: '#fafafa',
      menu: '#fcfcfc',
      clear: "transparent",
      black: "#000",
      white: "#fafafa",
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