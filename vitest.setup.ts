import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Tự động dọn dẹp DOM sau mỗi test để tránh rác dữ liệu
afterEach(() => {
  cleanup();
});
