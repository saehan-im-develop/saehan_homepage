import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 5173
  },
  resolve: {  // ✅ alias는 resolve 안에 있어야 함!
    alias: {
      '@': path.resolve(__dirname, 'src'),  // 🔹 `@`를 `src` 폴더의 절대 경로로 설정
    },
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg'] // ✅ 이미지 파일 허용
});
