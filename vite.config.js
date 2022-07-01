import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [react()],

    server: {
      port: process.env.VITE_SERVER_URL,
    },
    appId: process.env.VITE_APP_ID,
  });
};

// export default defineConfig(({ command, mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     define: {
//       _SERVER_URL: env._SERVER_URL,
//       _APP_ID: env._APP_ID,
//     },
//     plugins: [react()],
//   };
// });
