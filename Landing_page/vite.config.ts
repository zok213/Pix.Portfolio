import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [
    react(),
    {
      name: "rewrite-talent",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/talent") {
            res.writeHead(301, { Location: "/talent/" });
            res.end();
            return;
          }
          if (req.url === "/talent/") {
            req.url = "/talent/index.html";
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
    },
  },
}));
