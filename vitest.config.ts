import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    testTimeout: 60_000,
    hookTimeout: 60_000,
  },
});
