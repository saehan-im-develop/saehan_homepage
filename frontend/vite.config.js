import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 5173
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg'] // ✅ 이미지 파일 허용
});
