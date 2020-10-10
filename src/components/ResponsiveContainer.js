import React, { useRef, useEffect } from "react";

const ResizeObserver =
  window.ResizeObserver || require("resize-observer-polyfill");

const observer = new ResizeObserver(function (entries) {
  const defaultBreakpoints = {
    SM: 384,
    MD: 576,
    LG: 768,
    XL: 960,
  };

  entries.forEach(function (entry) {
    const breakpoints = entry.target.dataset.breakpoints
      ? JSON.parse(entry.target.dataset.breakpoints)
      : defaultBreakpoints;

    Object.keys(breakpoints).forEach(function (breakpoint) {
      const minWidth = breakpoints[breakpoint];
      if (entry.contentRect.width >= minWidth) {
        entry.target.classList.add(breakpoint);
      } else {
        entry.target.classList.remove(breakpoint);
      }
    });
  });
});

export default function ResponsiveContainer({ breakpoints, ...otherProps }) {
  const ref = useRef();

  useEffect(() => {
    observer.observe(ref.current);
  }, []);

  let props = otherProps;
  if (breakpoints) {
    props = {
      ...props,
      "data-breakpoints": JSON.stringify(breakpoints),
    };
  }

  return <div {...props} data-observe-resizes ref={ref} />;
}
