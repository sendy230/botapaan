module.exports.bothelp = `Halo, kami adalah bot File Saver. Kami akan terus memperbarui BOT kami, jika kalian menyukainya silakan instal dan ikuti langkahnya.`;

module.exports.botcommand = `<u>Berikut adalah beberapa perintah dan penggunaan admin.</u>
\n\n<code>Bagaimana pengguna melarang, unban dan kick dari BOT dan Grup.</code>
\n<b>/ban</b> userID.
\n<b>/unban</b> userID.
\n<b>/kick</b> userID.
\n<b>(Dapatkan UserID dari saluran log).</b>

\n\nBagaimana cara menggunakan pin dan unpin di grup.
\n<b>/pin</b> reply ke pesan yang mau di pin.
\n<b>/unpin</b> reply ke pesan yang mau di unpin.

\n<b>Cara Menghapus File Dari Bot.</b>
\nAnda dapat menghapus file 3 cara.
\n⚫️ Hapus file individual dengan file_id.
\n⚫️ Hapus semua file Kirim oleh pengguna.
\n⚫️ Hapus semua file Kirim ke Bot.

\n<code>Hapus file individual dengan file_id.</code>
\n<b>/rem</b> file_id.
\n<b>(Ini akan menghapus file satu per satu saat Anda memberikan file_id, dapatkan file_id dari saluran log).</b>

\n<code>Hapus semua file Kirim oleh pengguna.</code>
\n<b>/remall</b> userID.
\n<b>(Anda dapat menghapus semua file dikirim oleh pengguna tertentu jika pengguna mengirim konten atau spam yang kasar, dapatkan userid dari saluran log).</b>

\n<code>Hapus semua file Kirim ke B0T.</code>
\n<b>/clear</b>
\n<b>(Ini akan menghapus semua file yang dikirim ke bot secara permanen).</b>

\n<b>Kirim pesan ke pengguna.</b>
\n<b>/send</b> Pesan Anda akan dikirim ke pengguna.
\n<b>(Anda dapat menyiarkan pesan teks ke pengguna Anda, pesan akan dikirim dari pengguna terakhir bergabung untuk pertama-tama bergabung dengan pengguna untuk mengurangi spam. Cobalah untuk tidak mengirim terlalu banyak pesan sekaligus jika Anda memiliki sejumlah besar pengguna).</b>

\n<b>Cara Mengetahui Total Pengguna Bot.</b>
\n<b>/stats</b>
\n<b>(Anda akan mendapatkan total pengguna memulai bot Anda, data waktu nyata akan diperbarui setelah siaran yang berhasil).</b>
`;

module.exports.botinstall = `BOT akan memberitahu Anda cara install
\nDownload dulu file nya <a href='https://github.com/BimoSora/RatuFileSaver'>DI SINI</a>

\n<a href='https://heroku.com/deploy?template=https://github.com/BimoSora/RatuFileSaver'>TEMPLATE</a>
\nGanti tautan dengan template github Anda.

\n<a href='https://youtu.be/zw_ijvhzomI'>Klik di sini untuk menonton cara meng-host</a>
\n<b>Detail yang diperlukan.</b>
\n<b>TOKEN</b> - Dapatkan Token Bot dari Bot father.
\n<b>DOMAIN</b> - Sama dengan nama aplikasi yang Anda masukkan di Heroku.
\n<b>ADMIN</b> - ID Akun Anda (jika Anda tidak dapat menemukannya menggunakan bot seperti @getmyid_bot).
\n<b>BOTUSERNAME</b> - Nama pengguna bot Anda tanpa '@'.
\n<b>DB_URL</b> - Buat akun di https://www.mongodb.com/cloud/atlas , nama database - RatuMediaFile ,nama collection - RatuFileBackup.Klik Connect dan pilih 'Hubungkan aplikasi Anda'.copy tautan dan ganti 'password' dengan kata sandi pengguna yang memiliki akses ke DB dan ganti 'myFirstDatabase' untuk 'RatuMediaFile'. Kalau mau ubah sesuai keinginan nama databasenya ada di folder config.
\n<b>LOG_CHANNEL</b> - buat saluran pribadi dan dapatkan ID saluran (jika Anda tidak dapat meneruskan ID saluran apa pun dari saluran ke @getidsbot itu mungkin terlihat seperti -1001234567899).
`;