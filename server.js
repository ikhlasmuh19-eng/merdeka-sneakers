const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '.')));
app.use(express.json());

// Routes untuk halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/katalog', (req, res) => {
  res.sendFile(path.join(__dirname, 'katalog.html'));
});

app.get('/detail-produk', (req, res) => {
  res.sendFile(path.join(__dirname, 'detail-produk.html'));
});

app.get('/tentang', (req, res) => {
  res.sendFile(path.join(__dirname, 'tentang.html'));
});

// Routes untuk admin panel
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/admin.html'));
});

app.get('/admin/kelola-produk', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/kelola-produk.html'));
});

app.get('/admin/kelola-situs', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/kelola-situs.html'));
});

app.get('/admin/laporan-penjualan', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin/laporan-penjualan.html'));
});

// Fallback untuk static files
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║         🚀 MERDEKA SNEAKERS SERVER RUNNING 🚀              ║
╠════════════════════════════════════════════════════════════╣
║  Server berjalan di: http://localhost:${PORT}              ║
║                                                            ║
║  📱 Pengunjung (Public):                                  ║
║    • Home:         http://localhost:${PORT}                 ║
║    • Katalog:      http://localhost:${PORT}/katalog         ║
║    • Detail:       http://localhost:${PORT}/detail-produk   ║
║    • Tentang:      http://localhost:${PORT}/tentang         ║
║                                                            ║
║  🔐 Admin Panel:                                           ║
║    • Login:        http://localhost:${PORT}/admin           ║
║    • Produk:       http://localhost:${PORT}/admin/kelola-produk    ║
║    • Situs:        http://localhost:${PORT}/admin/kelola-situs     ║
║    • Laporan:      http://localhost:${PORT}/admin/laporan-penjualan║
║                                                            ║
║  📝 Tekan CTRL + C untuk menghentikan server              ║
╚════════════════════════════════════════════════════════════╝
  `);
});
