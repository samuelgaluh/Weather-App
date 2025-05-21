# README - Aplikasi Cuaca Dinamis

## Deskripsi

Aplikasi Cuaca Dinamis adalah aplikasi web yang menampilkan informasi cuaca real-time berdasarkan lokasi pengguna. Aplikasi ini memiliki fitur unik berupa tampilan yang berubah sesuai dengan waktu hari (pagi, siang, sore, dan malam), memberikan pengalaman visual yang menarik dan informatif.

## Fitur

- Informasi Cuaca Real-time : Menampilkan data cuaca terkini berdasarkan lokasi pengguna
- Prakiraan Cuaca 5 Hari : Menampilkan prakiraan cuaca untuk 5 hari ke depan
- Tampilan Dinamis : Background dan tema berubah sesuai waktu hari (pagi, siang, sore, malam)
- Informasi Detail : Menampilkan kelembaban, tekanan udara, kecepatan angin, waktu matahari terbit dan terbenam
- Responsif : Tampilan yang menyesuaikan dengan berbagai ukuran layar

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript (Vanilla)
- OpenWeatherMap API
- Geolocation API

## Cara Menggunakan

1. Clone repository ini ke komputer lokal Anda

   ```
   git clone https://github.
   com/username/weather-app.
   git
   ```

2. Buka file index.html di browser Anda
3. Izinkan akses lokasi saat browser meminta izin
4. Nikmati informasi cuaca dengan tampilan yang menyesuaikan waktu hari

## API Key

Aplikasi ini menggunakan OpenWeatherMap API. Untuk menggunakan aplikasi ini, Anda perlu:

1. Mendaftar di OpenWeatherMap untuk mendapatkan API key
2. Ganti nilai variabel API_KEY di file script.js dengan API key Anda

```
const API_KEY = 
"masukkan_api_key_anda_disini
";
```

## Struktur Proyek

```
Weather App/
│
├── index.html          # 
File HTML utama
├── style.css           # 
File CSS untuk styling
├── script.js           # 
File JavaScript untuk logika 
aplikasi
│
└── img/                # 
Folder untuk gambar 
background
    ├── morning.jpg     # 
    Background untuk pagi 
    hari
    ├── day.jpg         # 
    Background untuk siang 
    hari
    ├── sunset.jpg      # 
    Background untuk sore 
    hari
    └── night.jpg       # 
    Background untuk malam 
    hari
```

## Fitur Tampilan Dinamis

Aplikasi ini memiliki tampilan yang berubah berdasarkan waktu:

- Pagi (05:00 - 10:59) : Tampilan cerah dengan background pagi
- Siang (11:00 - 15:59) : Tampilan terang dengan background siang
- Sore (16:00 - 18:59) : Tampilan hangat dengan background senja
- Malam (19:00 - 04:59) : Tampilan gelap dengan background malam

## Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repository ini
2. Buat branch fitur baru ( git checkout -b fitur-baru )
3. Commit perubahan Anda ( git commit -m 'Menambahkan fitur baru' )
4. Push ke branch ( git push origin fitur-baru )
5. Buat Pull Request

## Kontak

Jika Anda memiliki pertanyaan atau saran, silakan hubungi saya melalui:

- Email: samuelgaluhdiaspramudya@gmail.com
- GitHub: samuelgaluh
  Dibuat dengan ❤️ oleh [Samuel]
