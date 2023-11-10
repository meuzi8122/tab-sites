/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      spacing: {
        "w-content-side-smartphone": "16px",
        "w-content-side": "calc((100% - 960px) / 2)",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["dark"]
  }
}

