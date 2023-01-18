import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fff",
  "--my-black": "#1a1a1a",
  "--aisdams-brand": "#32e800",
  "--my-red": "#db4437",
  "--my-blue": "#f2be02",
  "--my-yellow": "#e0b804",
};

export const myTheme = buildLegacyTheme({
  // Base Theme Colors
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  // Brand
  "--brand-primary": props["--aisdams-brand"],

  // Default Button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--aisdams-brand"],
  "--default-button-success-color": props["--my-blue"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  // State
  "--state-info-color": props["--aisdams-brand"],
  "--state-success-color": props["--my-blue"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  // Navbar
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--aisdams-brand"],
});
