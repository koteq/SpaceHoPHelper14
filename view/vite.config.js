import { defineConfig } from "vite"
import ViteMinifyPlugin from "vite-plugin-minify"
import { viteSingleFile } from "vite-plugin-singlefile"
export default defineConfig({
    plugins: [viteSingleFile({
        inlinePattern: ["*.js", "*.css"],
    }), ViteMinifyPlugin()],
    build: {
        minify: "terser",
        target: 'esnext',
        outDir: "../target/view"
    }
})