import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx}"],
    // Apply rules to all JS/TS/JSX/TSX files
    languageOptions: {
      parser: "espree", // Default parser for JavaScript
    },
    plugins: {
      tailwindcss: eslintPluginTailwindCSS, // Use the Tailwind CSS plugin
    },
    rules: {
      // Tailwind-specific rules
      "tailwindcss/no-custom-classname": "off", // Disable this rule if not needed
    },
  },
];

export default eslintConfig;
