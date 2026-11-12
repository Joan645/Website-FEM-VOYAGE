# FEM-VOYAGE — MVP Front-end

Mockup front-end satu halaman untuk konsep FEM-VOYAGE: platform open trip komunitas perempuan, pemberdayaan UMKM wisata perempuan, verifikasi keanggotaan, dan fitur berbagi lokasi opsional.

## Isi proyek

- `index.html` — seluruh tampilan, Tailwind CSS CDN, ikon, dan interaksi Vanilla JavaScript.
- `package.json` — dependency `serve` dan perintah start.
- `server.cjs` — menjalankan `serve` pada port `3000` secara lokal atau port `PORT` yang disediakan Railway.

## Jalankan di komputer

1. Pastikan Node.js (versi 20 atau lebih baru) dan Git sudah terpasang.
2. Buka terminal pada folder proyek.
3. Jalankan:

   ```bash
   npm install
   npm start
   ```
4. Buka alamat lokal yang muncul di terminal (umumnya `http://localhost:3000`).

## Upload ke GitHub

Buat repository baru bernama `fem-voyage-mvp` di GitHub. Untuk repository baru, jangan centang opsi membuat README, `.gitignore`, atau license karena file proyek sudah tersedia.

Di terminal, masuk ke folder proyek lalu jalankan:

```bash
git init
git add .
git commit -m "Initial commit - FEM-VOYAGE MVP"
git branch -M main
git remote add origin https://github.com/USERNAME/fem-voyage-mvp.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub milik Anda. Jika Git meminta identitas, atur sekali dengan:

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email-github-anda@example.com"
```

## Deploy ke Railway dari GitHub

1. Login atau buat akun di [Railway](https://railway.com/).
2. Pastikan akun GitHub sudah terhubung ke Railway.
3. Pilih **New Project** → **Deploy from GitHub Repo**.
4. Pilih repository `fem-voyage-mvp`, lalu mulai deploy.
5. Railway membaca `package.json` dan menjalankan `npm start`. Jika perlu mengatur manual, isi **Start Command** dengan `npm start`.
6. Setelah deployment berhasil, buka pengaturan service → **Networking** → **Generate Domain** untuk membuat URL publik.
7. Setiap `git push` baru ke branch yang terhubung dapat memicu deployment berikutnya.

Catatan biaya (cek ulang sebelum deploy): Railway saat ini menyediakan paket Free $0/bulan dengan kredit resource gratis $1/bulan setelah masa trial. Pengguna baru mendapat trial 30 hari dengan kredit satu kali $5; setelah masa/kredit trial habis, akun kembali ke Free. Penggunaan di atas kredit gratis dapat memerlukan upgrade atau biaya tambahan. Detail dan ketentuan dapat berubah, jadi periksa [halaman pricing Railway](https://railway.com/pricing) dan [dokumentasi paket](https://docs.railway.com/pricing/plans) sebelum deploy.

## Batasan MVP dan catatan keamanan

- Akun, pendaftaran, verifikasi, dan pemesanan masih simulasi front-end; belum ada backend, database, autentikasi, pembayaran, atau dashboard admin.
- Foto diri hanya dipratinjau secara lokal. Mockup ini tidak menjalankan pengenalan wajah atau menebak gender dari foto. Verifikasi produksi sebaiknya memakai proses yang transparan, minim data, dan ditinjau admin sesuai kebijakan komunitas.
- Geolokasi hanya diminta setelah pengguna menekan tombol **Mulai berbagi**. Pengguna dapat menghentikannya kapan saja. Pada mockup ini koordinat tidak disimpan ke server dan tidak dibagikan live ke pihak lain.
- Data destinasi, harga, jadwal, dan foto adalah konten contoh untuk demonstrasi, bukan penawaran perjalanan aktual.
- Halaman memuat Tailwind, Font Awesome, Google Fonts, dan foto dari CDN eksternal sehingga membutuhkan koneksi internet.

## Langkah pengembangan berikutnya

Untuk MVP produksi, tambahkan backend dan database, autentikasi aman, verifikasi admin, katalog mitra terdaftar, pembayaran melalui payment gateway, ulasan tervalidasi, kebijakan retensi foto, serta mekanisme berbagi lokasi dengan izin eksplisit dan kontrol akses.
