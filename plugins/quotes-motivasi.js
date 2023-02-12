let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let bcod = `${pickRandom(global.motivasi)}`
let nth = `☰ ━━┉┉┈┈ *Motivasi* ┈┈┉┉━━ ☰`
conn.sendButtonDoc(m.chat, nth, '❏ ' + bcod, 'Ainul Store', `.motivasi`, m)
}
handler.help = ['motivasi']
handler.tags = ['quotes']
handler.command = /^(motivasi)$/i
handler.register = true

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

global.motivasi = [
'"Menyerah berarti menerima bahwa kamu lelah. Tetapi untuk beristirahat dan mencoba lagi adalah tanda sebuah tekad."',
'"Bertahan hidup di dunia yang kejam ini adalah bisnis yang melelahkan, tetapi banyak penghargaan di akhir pertempuran."',
'"Semakin keras kamu bekerja untuk sesuatu, semakin besar kamu merasakannya ketika mencapainya."',
'"Tidak ada, bahkan rasa sakit, yang bertahan selamanya. Jika aku bisa terus meletakkan satu kaki di depan yang lain, aku akhirnya akan sampai pada akhirnya."', 
'"Bersyukurlah ketika merasa lelah, tidak semua orang bisa sekuat kamu."',
'"Jangan menyerah, kebahagiaan akan hadir setelah lelahmu."', 
'"Melihat kadar kesuksesan orang lain hanya akan membuatmu kelelahan. Ciptakan sendiri standarmu."', 
'"Menjadi kuat bukan berarti kamu tidak pernah lelah. Itu hanya berarti kamu memiliki kekuatan untuk bangkit kembali setelah beristirahat."', 
'"Lelah tidak pernah dirasakan oleh mereka yang tidak mau berusaha."', 
'"Orang-orang sukses tidak berbakat; mereka hanya bekerja keras, lalu berhasil dengan sengaja."', 
'"Dinding terbesar yang harus kamu panjat adalah yang kamu bangun di benakmu."', 
'"Jangan kecewa merasa lelah, justru ia menjadi pengingat terbaik untuk targetmu."', 
'"Jangan pernah lelah dengan mimpi, jika tidak terpenuhi. Ketakutan akan kegagalan seharusnya tidak menghalangimu dari jalan kepercayaan diri."', 
'"Berlarilah ketika kamu bisa, berjalan jika harus, merangkak jika perlu, jangan pernah menyerah."',
'"Semakin banyak kamu berkeringat dalam latihan, semakin sedikit kamu berdarah dalam pertempuran."', 
'"Jika diammu bijak, maka diamlah. Apabila diammu diinjak, maka bicaralah supaya tak ada lagi orang yang menginjak dan meremehkan dirimu."', 
'"Tinggalkan pikiran yang membuatmu lemah dan peganglah pikiran yang memberi kekuatan bagimu."', 
' "Perubahan diri memerlukan perjuangan, bukan dengan sekadar duduk diam. Berjuanglah demi perubahan diri dan beri ruang pada perubahan."', 
'"Kita selalu lupa atau jarang mengingat apa yang kita miliki, tetapi kita sering kali ingat apa yang ada pada orang lain."', 
'"Hidup ini penuh perjuangan dalam perjalanan berjuang impian adalah bensin yang membakar semangat kita menuju impian dan cita-cita."', 
'"Hidup ini adalah perjuangan, saat kamu sudah mencapai di puncak sebuah gunung, maka akan ada gunung yang lebih tinggi untuk kamu taklukkan."', 
'"Kegagalan tidak akan pernah mengalahkan keinginan kuat untuk mencapai kesuksesan."', 
'"Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan."', 
'"Barangsiapa ingin mutiara, harus berani terjun di lautan yang dalam."', 
'"Hidup adalah perjalanan yang harus dilalui, tidak peduli seberapa buruk jalan yang harus dilewati."', 
'"Setiap detik dalam hidup adalah perjalanan, setiap perjalanan adalah pelajaran."', 
'"Dari beberapa bekas luka yang menyakitkan, yang paling menyakitkan adalah yang tidak bisa dilihat."', 
'"Jangan lelah mencoba. Tidak ada jaminan kesuksesan, tetapi memilih untuk tidak mencoba adalah jaminan kegagalan."', 
'"Galau itu wajar dan normal karena ia adalah proses penyesuaian diri dengan kehidupan yang lebih berkelas."', 
'"Semua masalah pasti akan berlalu dan berganti dengan kebahagiaan."', 
'"Hidup itu tentang sebuah perjalanan, caramu menjalaninya, dan caramu memberi arti pada perjalananmu itu."',
'"Hidup adalah perjalanan. Berarti tidak penting siapa yang di depan ataupun di belakang kita."', 
'"Tak peduli bagaimana kerasnya kehidupanmu di masa lalu, kamu selalu bisa memulainya lagi."', 
'"Jika ingin berhasil jangan menunggu termotivasi dulu baru bergerak, tapi bergeraklah terlebih dahulu, maka dirimu akan termotivasi dengan sendirinya."', 
'"Sesuatu yang dapat dibayangkan pasti dapat diraih. Sesuatu yang diimpikan pasti dapat diwujudkan."', 
'"Kamu tak akan bisa menjadi seorang pecundang, sampai kamu benar-benar berhenti untuk mencoba."',
'"Lebih baik diam daripada panjang masalahnya."', 
'"Apapun yang kamu lakukan, jangan pernah menyerah untuk mendapatkannya."', 
'"Saat seseorang mencintaimu, mereka tak harus mengatakannya. Kamu akan tahu dari cara mereka memperlakukanmu."', 
'"Seseorang yang luar biasa itu sederhana dalam ucapannya, tetapi hebat dalam tindakannya."', 
'"Jangan takut akan perubahan. Kita mungkin kehilangan sesuatu yang baik, namun kita akan peroleh sesuatu yang lebih baik lagi."', 
'"Kesuksesan tidak menemukanmu. Kamu harus keluar dan meraihnya."', 
'"Apa pun yang sedang kau lakukan, maka lakukanlah dengan sebaik mungkin."', 
'"Jangan hanya karena kesibukan, kita lupa ibadah dan keluarga."', 
'"Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu lakukan."', 
'"Hidup kita mulai berakhir saat kita menjadi diam tentang hal-hal yang penting."', 
'"Jangan tunda pekerjaanmu sampai besok, sementara kau bisa mengerjakannya hari ini."',
'"Lakukan apa yang harus kamu lakukan sampai kamu dapat melakukan apa yang ingin kamu lakukan."', 
'"Sesorang yang berani menyia-nyiakan satu jam waktu, belum menemukan nilai kehidupan."', 
'"Betapapun sulitnya hidup, selalu ada sesuatu yang dapat kamu lakukan dan berhasil."',
]