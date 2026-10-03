import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://pankaj-bit361.github.io",
  base: "/seovyn-fw-astro",
  integrations: [sitemap()],
});
