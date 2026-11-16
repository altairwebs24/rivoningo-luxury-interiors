// @lovable.dev/vite-tanstack-config already includes the core plugins — do NOT add them manually.
// The explicit plugins array stays initialized so deployment tools can append to it safely.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
});
