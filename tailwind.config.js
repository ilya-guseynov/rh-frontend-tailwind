module.exports = {
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.html"],
  },
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          }
        },
        ".container--header": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
          "@screen 2xl": {
            maxWidth: "1600px",
          }
        },
        ".border-b-1": {
          borderBottomWidth: "1px"
        },
        ".rh-bg-gold": {
          background: "linear-gradient(89.36deg, #D8BB58 -53.59%, #ECD26E -33.86%, #F4DB76 -21.39%, #E9CC65 4.9%, #CEA53A 56.52%, #C99F33 64.39%)"
        },
        ".rh-bg-green": {
          backgroundColor: "#2A5D2E"
        },
        ".rh-bg-light-gray": {
          backgroundColor: "#F9F9F9"
        },
        ".rh-text-black": {
          color: "#252D27"
        },
        ".rh-text-gray": {
          color: "#999999"
        },
        ".rh-text-dark-gray": {
          color: "#333333"
        },
        ".rh-text-green": {
          color: "#285C2D"
        },
        ".rh-box-shadow-1": {
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
        },
        ".rh-box-shadow-2": {
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)"
        },
        ".b2b-menu-shadow": {
          boxShadow: "0px 2px 34px rgba(29, 37, 45, 0.1)",
          "@screen md": {
            boxShadow: "none"
          }
        }
      })
    }
  ],
};
