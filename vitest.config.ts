import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom" || "happy-dom",
    setupFiles: "./__test__/setup.ts",
    deps: {
      fallbackCJS: true,
    },
  },
  ssr: {
    // required while deps.fallbackCJS is required
    noExternal: ["@chakra-ui/react"],
  },
});
