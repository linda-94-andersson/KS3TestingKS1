import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./__test__/setup.js",
    deps: {
      fallbackCJS: true,
    },
    ssr: {
      // required while deps.fallbackCJS is required
      noExternal: ["@chakra-ui/react"],
    },
  },
});
