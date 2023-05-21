import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vuetify from 'vite-plugin-vuetify';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    base: process.env.VITE_BASE_URL || '/',
    plugins: [vue(), vuetify()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
};
