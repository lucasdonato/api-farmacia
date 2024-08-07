import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/app.ts"],
	format: ["cjs"],
	outDir: "dist",
	clean: true,
	dts: false, // Desativar a geração de declarações de tipo
	sourcemap: true, // Para facilitar a depuração
});
