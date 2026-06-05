# Merdeka Sneakers 👟

**Merdeka Sneakers** adalah sebuah proyek antarmuka web toko online e-commerce yang mengusung tema _minimalist architectural footwear_. Website ini dirancang untuk memberikan pengalaman berbelanja yang bersih, elegan, dan fokus pada estetika visual produk.

## 🚀 Fitur Utama

- **Beranda (Home):** Tampilan hero section yang sinematik dengan daftar rilis terbaru.
- **Katalog Produk:** Fitur pencarian _real-time_ dan filter kategori untuk memudahkan pencarian sepatu impian.
- **Detail Produk:** Halaman informasi mendalam mengenai material, deskripsi, dan pemilihan ukuran.
- **Halaman Tentang:** Manifesto brand dan informasi lokasi fisik gerai dengan desain brutalist.
- **Dashboard Admin:** Simulasi panel kontrol untuk mengelola stok, laporan penjualan, dan konten situs.
- **Responsif:** Desain yang optimal untuk perangkat mobile maupun desktop.
- **Auto-Deployment:** Terintegrasi dengan GitHub Pages/Vercel untuk pembaruan otomatis setiap kali kode di-push.

## 🌐 Live Demo

Anda dapat mengakses website yang telah dipublish di:
`https://<username-anda>.github.io/merdeka-sneakers/`

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur semantik untuk SEO yang lebih baik.
- **Tailwind CSS:** Framework CSS utility-first untuk styling yang cepat dan konsisten melalui CDN.
- **JavaScript (Vanilla):** Logika interaksi seperti toggle sidebar, pencarian produk, dan autentikasi admin sederhana.
- **Google Fonts:** Menggunakan font _Inter_ untuk tipografi yang modern.
- **Material Symbols:** Ikonografi minimalis dari Google.

## 📂 Struktur Proyek

```text
.
├── index.html           # Halaman utama (sebelumnya web toko.html)
├── katalog.html         # Halaman daftar produk & fitur pencarian
├── tentang.html         # Profil brand & lokasi
├── detail-produk.html   # Halaman detail produk spesifik
└── admin/               # Folder Panel Kendali
    ├── admin.html             # Login & Dashboard utama
    ├── kelola-produk.html     # Manajemen stok & katalog
    ├── kelola-situs.html      # Pengaturan konten dinamis
    └── laporan-penjualan.html # Ringkasan performa toko
```

## ⚙️ Cara Menjalankan Secara Lokal

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/username-anda/merdeka-sneakers.git
   ```
2. **Masuk ke direktori proyek:**
   ```bash
   cd merdeka-sneakers
   ```
3. **Buka file `index.html`:**
   Cukup buka file `index.html` di browser pilihan Anda (Chrome, Edge, Firefox). Tidak diperlukan instalasi library tambahan karena menggunakan Tailwind CDN.

## 🔑 Kredensial Admin (Demo)

Untuk mengakses area admin, gunakan kredensial berikut:

- **Username:** `admin`
- **Password:** `merdeka123`

---

_Proyek ini dikembangkan sebagai representasi toko sneakers modern di Sengkang, Sulawesi Selatan._

© 2024 Merdeka Sneakers. All Rights Reserved.
