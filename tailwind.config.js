module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      cursor: {
        "col-resize": "col-resize",
      },
    },
  },
  variants: {
    cursor: ({ after }) => after(["hover"]),
  },
};
