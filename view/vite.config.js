import { defineConfig, loadEnv } from "vite"
import ViteMinifyPlugin from "vite-plugin-minify"
import { viteSingleFile } from "vite-plugin-singlefile"

const outDir = process.env.VITE_WEB ? "../target/web" : "../target/app"

export default defineConfig({
    plugins: [viteSingleFile({
        inlinePattern: ["*.js", "*.css"],
    }), ViteMinifyPlugin()],
    build: {
        minify: "terser",
        target: 'esnext',
        outDir,
        emptyOutDir: true
    }
})