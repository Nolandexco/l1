// File: middleware.ts (Versi Revisi - Mengabaikan Bahasa Browser)

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1. Definisikan bahasa yang didukung.
const locales = ['en', 'zh', 'ja', 'ar', 'es', 'ru'];

// 2. Atur bahasa default mutlak Anda.
// Pastikan ini 'id' jika file JSON Anda bernama id.json, atau 'zh' jika bernama zh.json
const defaultLocale = 'zh'; // Atau 'zh' sesuai nama file Anda

// 3. Fungsi middleware utama
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Cek apakah URL yang diakses sudah memiliki awalan bahasa
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Jika awalan bahasa tidak ada...
  if (pathnameIsMissingLocale) {
    // ... TIDAK PERLU DETEKSI BAHASA LAGI.
    // Langsung gunakan 'defaultLocale' yang sudah kita tentukan.
    const locale = defaultLocale;

    // Arahkan (redirect) pengguna ke URL dengan awalan bahasa default.
    // Contoh: /services -> /id/services
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }
}

// 4. Konfigurasi Matcher (Tidak perlu diubah)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\..*).*)',
  ],
};
