# 🚀 Insight AI API

Insight AI API adalah solusi praktis untuk mencari berita terkini dari 🌍 Google News dan merangkumnya secara otomatis menggunakan kecerdasan buatan (🤖 AI).

## 🌟 Fitur Utama

✅ Pencarian berita terkini dengan cepat melalui Google News  
✅ Ringkasan otomatis menggunakan AI untuk memudahkan pemahaman  
✅ Mudah diintegrasikan ke dalam proyek Anda

## 📋 Cara Menggunakan

1. **🧩 Clone repositori**

   ```bash
   git clone https://github.com/sulthonaw/insight-ai-be.git
   cd insight-ai-api
   ```

2. **📥 Install dependensi**

   ```bash
   npm install
   ```

3. **🔐 Konfigurasi environment variable**

   - Salin file `.env.example` menjadi `.env`
   - Isi file `.env` dengan API key yang Anda generate sendiri

4. **▶️ Jalankan aplikasi**

   ```bash
   node index.js
   ```

5. **🔗 Integrasi dengan Frontend**
   - Untuk pengalaman pengguna yang lebih baik, Anda dapat mengintegrasikan API ini dengan repositori [insight-ai-fe](https://github.com/sulthonaw/insight-ai-fe-v1) untuk menampilkan hasil pencarian berita dengan antarmuka yang menarik dan intuitif.

## ⚙️ Contoh Penggunaan API

Setelah menjalankan server, Anda dapat melakukan request ke endpoint seperti berikut:

```
GET /ask?search=makan%20siang%20gratis
```

Bentuk respons:

```json
{
  "answer", // -> string
  "links" // -> array string
}
```

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau buka issue jika menemukan masalah.
