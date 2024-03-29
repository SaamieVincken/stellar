import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
export default defineConfig({
    plugins: [sveltekit()],
    test: {
        include: ['src/**/*.{database,spec}.{js,ts}']
    }
});
//# sourceMappingURL=vite.config.js.map