import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      _SERVER_URL: env._SERVER_URL,
      _APP_ID: env._APP_ID,
    },
    plugins: [react()],
  };
});
