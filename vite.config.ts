import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@elements': path.resolve(__dirname, 'src/elements'),
      '@icons': path.resolve(__dirname, 'src/icons'),
      '@texts': path.resolve(__dirname, 'src/texts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@app': path.resolve(__dirname, 'src'),
    },
  },
})
