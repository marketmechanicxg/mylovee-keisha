/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "260126";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Keisha Ainun Mahy";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Perfect",             // ← GANTI JUDUL LAGU
    artist: "Ed Sheeran",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "first date bersamamu kala itu, meski awalnya di terja hujan.." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "pertama kali aku mengajakmu liat konser band favvv ku itu.." },
  { file: "img3.jpeg", caption: "first graduation mu itu saat pertama kali bertemu ibu kamu..." },
  { file: "img4.jpeg", caption: "first montain date with u ♡" },
  { file: "img5.jpeg", caption: "sungguh indah bahagia saat menghabiskan waktu saat bersamamu.." },
  { file: "img6.jpeg", caption: "day 3 pekan raya Pasuruan ditemani Sal Priadi kala itu.." },
  { file: "img7.jpeg", caption: "day 5 pekan raya melepas segala lelah capeknya kita dengan berdanska nya tipex itu.." },
  { file: "img8.jpeg", caption: "hari paling bahagia saat menghabiskan waktu bersama mu dan kembali menonton konser band favv kita tapi sedikit kecewa dengan si amir amir itu..." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"Selamat ulang tahun, perempuan kesayanganku, Ica, Keisha Ainun Mahya. 💗🎂",
"5 November 2026\nHari ini adalah hari yang spesial, hari ketika seseorang yang sangat berarti buat aku dilahirkan ke dunia. Seseorang yang mungkin awalnya cuma aku kenal sebagai orang biasa, tapi seiring berjalannya waktu, kehadirannya menjadi sesuatu yang begitu istimewa dalam hidupku. Seseorang yang sekarang punya tempat tersendiri di hati aku, seseorang yang bisa membuat hari-hariku terasa berbeda hanya dengan kehadirannya. Dan orang itu adalah kamu, Ica.",
"Sayang, selamat bertambah usia, ya. Aku berharap di usia kamu yang sekarang, akan ada lebih banyak kebahagiaan yang datang menghampiri kamu. Semoga semua hal yang selama ini kamu usahakan bisa menemukan hasil terbaiknya, semua doa yang kamu simpan diam-diam bisa menemukan jalannya, dan semua impian yang sedang kamu perjuangkan satu per satu bisa menjadi kenyataan. Aku berharap kamu selalu diberikan kesehatan, hati yang tenang, langkah yang dimudahkan, dan kekuatan untuk melewati apa pun yang nantinya akan kamu hadapi.",
"Dalboo, kalau aku boleh jujur, aku bersyukur banget karena bisa mengenal kamu sampai sejauh ini. Dari sekian banyak orang yang ada di dunia, aku nggak pernah menyangka kalau aku akan bertemu dengan seseorang seperti kamu, seseorang yang akhirnya menjadi bagian dari cerita hidupku. Aku mungkin nggak selalu bisa menjelaskan seberapa besar rasa sayangku lewat kata-kata, tapi aku harap kamu bisa merasakannya dari caraku memperlakukan kamu, dari perhatianku, dari hal-hal kecil yang aku usahakan, dan dari keinginanku untuk selalu melihat kamu bahagia.",
"Terima kasih karena sudah hadir di hidupku, ya, sayang. Terima kasih sudah berbagi cerita sama aku, sudah memberikan aku kesempatan untuk mengenal kamu lebih dalam, dan sudah menjadi seseorang yang bisa aku panggil dengan sebutan kesayanganku. Terima kasih untuk setiap tawa, setiap obrolan, setiap perhatian kecil, dan setiap momen sederhana yang mungkin buat orang lain terlihat biasa saja, tetapi buat aku punya arti tersendiri. Aku nggak tahu apakah kamu menyadari betapa berharganya hal-hal kecil itu buat aku, tetapi aku harap suatu hari nanti kamu bisa melihat betapa banyak kenangan indah yang sudah kita kumpulkan bersama.",
"Aku juga sadar kalau aku bukan seseorang yang sempurna. Aku masih punya banyak kekurangan, masih sering melakukan kesalahan, dan mungkin ada kalanya aku belum bisa menjadi seseorang yang kamu harapkan. Aku mungkin pernah membuat kamu kesal, kecewa, sedih, atau merasa kalau aku kurang memahami kamu. Untuk semua hal yang pernah membuat hati kamu nggak nyaman, aku minta maaf, ya, sayang. Aku nggak ingin hanya menjadi seseorang yang pandai memberikan janji manis, tetapi aku ingin terus belajar menjadi seseorang yang bisa kamu percaya, seseorang yang mau mendengarkan kamu, memahami perasaan kamu, dan menghargai keberadaan kamu.",
"Aku nggak bisa menjanjikan kalau setiap hari kita akan selalu berjalan dengan mudah. Aku juga nggak bisa menjanjikan kalau hubungan kita akan selalu dipenuhi tawa tanpa ada perbedaan pendapat atau kesalahpahaman. Namun, aku berharap ketika hal-hal seperti itu datang, kita bisa belajar untuk saling mengerti, bukan saling menyakiti. Kita bisa belajar untuk saling mendengarkan, bukan hanya ingin dimengerti. Dan kita bisa terus memilih untuk memperbaiki keadaan bersama, selama kita sama-sama masih ingin memperjuangkan hubungan ini.",
"Sayang, di hari ulang tahun kamu ini, aku ingin kamu tahu satu hal: kamu bukan hanya seseorang yang aku sayangi, tetapi juga seseorang yang kebahagiaannya berarti buat aku. Aku ingin melihat kamu tumbuh menjadi versi diri kamu yang paling bahagia. Aku ingin melihat kamu mencapai hal-hal yang selama ini kamu impikan. Aku ingin melihat kamu tersenyum dengan bangga karena berhasil melewati hal-hal yang dulu terasa sulit. Dan kalau suatu hari nanti kamu merasa lelah dengan semuanya, aku berharap kamu nggak lupa bahwa kamu juga berhak beristirahat, berhak merasa sedih, berhak meminta bantuan, dan berhak mendapatkan ketenangan.",
"Kamu nggak harus selalu terlihat kuat di depan semua orang, Dalboo. Kamu nggak harus selalu memendam semuanya sendirian. Kalau ada sesuatu yang ingin kamu ceritakan, aku berharap kamu merasa nyaman untuk berbagi denganku. Aku mungkin nggak selalu punya jawaban untuk semua masalah kamu, tetapi aku ingin belajar mendengarkan tanpa menghakimi dan menemani tanpa membuat kamu merasa harus menghadapi semuanya sendirian. Aku ingin menjadi seseorang yang kehadirannya membawa ketenangan, bukan tambahan beban dalam hidup kamu.",
"Aku juga berharap kamu nggak pernah meragukan nilai diri kamu sendiri hanya karena satu hari terasa buruk atau karena ada sesuatu yang nggak berjalan sesuai keinginanmu. Buat aku, kamu tetap seseorang yang berharga, bahkan ketika kamu sedang merasa kurang percaya diri, sedang lelah, atau sedang berada di titik ketika semuanya terasa membingungkan. Kamu tetap pantas mendapatkan kebahagiaan, kasih sayang, dan hal-hal baik dalam hidupmu. Aku ingin kamu terus tumbuh, terus belajar, terus mengejar impianmu, dan tetap menjadi Ica yang punya banyak hal indah di dalam dirinya.",
"Kalau suatu hari nanti kita melihat kembali perjalanan yang sudah kita lewati, aku berharap kita bisa tersenyum mengingat semua cerita yang pernah kita punya. Tentang bagaimana semuanya dimulai, tentang hal-hal sederhana yang membuat kita tertawa, tentang kesalahpahaman yang akhirnya mengajarkan kita sesuatu, dan tentang bagaimana kita perlahan belajar mengenal satu sama lain. Aku ingin setiap kenangan itu menjadi bagian indah dari hidup kita, bukan karena semuanya selalu sempurna, tetapi karena kita pernah berusaha menjalaninya dengan tulus.",
"Aku nggak tahu akan seperti apa kehidupan kita di masa depan. Ada banyak hal yang belum kita ketahui, banyak rencana yang masih harus kita perjuangkan, dan banyak perjalanan yang masih menunggu kita. Namun, untuk hari ini, aku bersyukur karena bisa merayakan hari lahir kamu dan menyampaikan semua doa baik yang mungkin belum sempat aku ucapkan secara langsung. Aku berharap masih ada banyak kesempatan untuk merayakan hari-hari spesial kamu, melihat kamu tersenyum, mendengar cerita-cerita kamu, dan membuat kenangan baru yang bisa kita simpan baik-baik.",
"Selamat ulang tahun sekali lagi, Ica-ku, Dalboo kesayanganku. Semoga umur baru ini membawa lebih banyak ketenangan daripada kecemasan, lebih banyak kebahagiaan daripada kesedihan, lebih banyak kesempatan daripada keraguan, dan lebih banyak alasan untuk kamu bersyukur setiap harinya. Semoga kamu selalu dikelilingi orang-orang baik, dijauhkan dari hal-hal yang menyakitimu, dan diberikan kekuatan ketika harus menghadapi masa-masa sulit. Semoga kamu selalu menemukan alasan untuk tersenyum, bahkan dalam hari-hari yang sederhana.",
"Terakhir, aku cuma ingin bilang kalau aku sayang banget sama kamu. Mungkin kalimat itu sederhana dan sudah sering kamu dengar dariku, tetapi aku harap kamu nggak pernah menganggapnya sebagai kata-kata tanpa arti. Aku ingin terus membuktikan rasa sayang itu lewat hal-hal kecil yang nyata, lewat perhatian, kejujuran, kesabaran, dan usaha untuk menjadi pasangan yang lebih baik dari hari ke hari.",
"Terima kasih sudah menjadi bagian dari hidupku, Dalboo. Terima kasih karena sudah menjadi kamu, dengan segala cerita, kebiasaan, kelebihan, dan kekurangan yang membuat kamu berbeda dari siapa pun. Di hari ulang tahunmu ini, aku nggak meminta kamu untuk menjadi seseorang yang lain. Aku cuma berharap kamu selalu punya kesempatan untuk bertumbuh, menjadi lebih bahagia, dan menjalani hidup yang kamu impikan.",
"Selamat ulang tahun, perempuan yang aku sayang. Semoga dunia memperlakukan kamu dengan lembut, semoga langkahmu selalu menemukan arah yang baik, dan semoga hari-hari mendatang menyimpan banyak kebahagiaan untuk kamu.",
"Kalau nanti kamu membaca tulisan ini lagi di waktu yang berbeda, aku harap kamu bisa mengingat bahwa pada hari ulang tahunmu, ada seseorang yang dengan tulus mendoakan kebahagiaanmu dan berharap yang terbaik untuk perjalanan hidupmu.",
"Aku sayang kamu, Ica. Selamat bertambah usia, Dalboo-ku. Semoga semua hal baik menemukan jalannya menuju kamu. Dan semoga, di antara banyaknya cerita yang akan kamu jalani nanti, kita masih punya kesempatan untuk menulis cerita-cerita indah bersama. ❤️‍🩹💗",
"With love, dari aku yang bersyukur bisa mengenal dan menyayangimu."
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Dimana Semuanya Dimulai",
    text:  "saat itu awal awal chattingan bersamamu sungguh itu dimana hari aku sangat begitu memujamu karna kamu begitu cantik dan lucu",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "Saat-Saat Bersamamu",
    text:  "hanya denganmu, aku, dan momen dan kenangan sederhana bersamamu yang pada akhirnya menjadi kisah yang sangat berarti dan bahagia untuk kita kenang bersama",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "Melewati Badai",
    text:  "aku dan kamu pernah melewati saat dimana kita sedang melalui pertengkaran badai yang sangat berat untuk kita lewati, tapi kita selalu yakin kalau aku dan kamu bisa melewati badai ini, akan ada hari dimana kita berhasil melewati akan ada pelangi yang menanti",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "Menemukan Pelangi",
    text:  "kamu benar benar menjadi sosok indah dan berwarna saat aku menemukan mu, kamu bisa mewarnai cerah nan indah dari perjalanan hidupku, bahkan di saat saat masa sulit di hidupku",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "semoga tahun ini ngasih kamu ketenangan sedalam samudra, dan sedalam itu juga hati kamu yang selalu penuh dengan kebaikan." },
  { icon: "shell",   text: "semoga hari-hari kamu tetap secerah ini, kayak matahari yang mantul di atas air, dan malam-malam kamu tetap tenang seperti ombak yang pelan-pelan balik ke laut." },
  { icon: "star",    text: "semoga setiap harapan kecil kamu pelan-pelan jadi kenyataan, tepat di saat kamu paling membutuhkannya." },
  { icon: "compass", text: "ke mana pun tahun ini membawa kamu, semoga kamu selalu menemukan jalan pulang ke orang-orang yang tulus peduli dan menyayangi kamu." },
  { icon: "anchor",  text: "tetap membumi, tetap bersyukur, dan jujur aja, tetap jadi kamu yang sekarang — indah dengan caramu sendiri, selalu." },
  { icon: "heart",   text: "selamat ulang tahun, beneran — bersulang buat satu tahun lagi yang penuh kenangan yang pantas disimpan selamanya." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281332234575";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy i just opened the bottle, tysm for making my day so much better! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);