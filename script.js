document.addEventListener('DOMContentLoaded', function () {
            
    // --- KONTROL SPLASH SCREEN ---
    const splashScreen = document.getElementById('splash-screen');
    const mainApp = document.getElementById('main-app');
    const enterBtn = document.getElementById('enter-btn');

    enterBtn.addEventListener('click', () => {
        // Tambahkan kelas untuk animasi keluar
        splashScreen.classList.add('opacity-0');
        // Tunggu animasi selesai sebelum menghapus dari tampilan
        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 500);

        // Tampilkan aplikasi utama
        mainApp.classList.remove('hidden');
        mainApp.classList.add('flex');
    });


    // --- DATA VIDEO ---
    const videos_id_raw = `
    Menjelajahi Gunung Berapi Petualangan Berapi: [https://drive.google.com/file/d/1XOaIycUgH-jByD7Nf32IeyzPD-Kh2s75/preview]
    Petualangan Siang dan Malam di Bumi yang Terang dan Gelap: [https://drive.google.com/file/d/1H7vXxrLdMmtZBHfjkspUxLPzSSC350Yp/preview]
    Petualangan Air yang Menakjubkan di Alam Siklus Air: [https://drive.google.com/file/d/19pRwAG3nFeGnqMgyJok1pU8U99toT8qz/preview]
    Rumah Satwa - Menjelajahi Tempat Tinggal Hewan!: [https://drive.google.com/file/d/1fhVwDbpEKTAAE8pFFmkcYwCpSTGSrKss/preview]
    Gempa Bumi Menjelajahi Dunia yang Berguncang di Bawah Kaki Kita!: [https://drive.google.com/file/d/1Z08bi4cQHVzAfdwxFXtHDZFD5RNEwlfd/preview]
    Keajaiban Magnetik - Menjelajahi Kekuatan Magnet: [https://drive.google.com/file/d/1LUqms8sQINPYIuPiRJ1MR-m5ddX1c-Hu/preview]
    Para Penemu Luar Biasa dan Kreasi Mereka yang Menakjubkan!: [https://drive.google.com/file/d/1jLqjO27sq-su2NJo8QGWcUNwv9Y1Cj33/preview]
    Perjalanan Tumbuhan yang Menakjubkan - Menjelajahi Siklus Hidup Tumbuhan!: [https://drive.google.com/file/d/1r-uKvpuyNPGjnkqYNlWDMPYT1go6R3Qo/preview]
    Keajaiban Cuaca Menjelajahi Ilmu Pengetahuan tentang Hujan, Salju, dan Badai Petir!: [https://drive.google.com/file/d/1jQk_getV1qA8f1U4IX_d8cj9kudAqoMQ/preview]
    Petualangan Samudra Menjelajahi Dunia Makhluk Laut yang Menakjubkan!: [https://drive.google.com/file/d/1Vgam9HqOuf0gKFELD-dtvLLhSrIWYJHn/preview]
    Energi Terbaru - Memberdayakan Planet Kita dengan Matahari, Angin, dan Air!: [https://drive.google.com/file/d/1vnHY3kidr-OEh2Liwmuc2W3ut7dSgrFB/preview]
    Bintang Jatuh dan Kosmik - Pengunjung yang Menjelajahi Meteor dan Komet: [https://drive.google.com/file/d/14JpmXg3oqnq8FH39h36YINW5x7rsu_49/preview]
    Memahami Banjir - Menjaga Lingkungan Kita Tetap Aman: [https://drive.google.com/file/d/1_x3-ihoLWo3pP7zwdZSCmbUstkXMJlPm/preview]
    Tenggelam atau Terapung - Bersenang-senang dengan Sains!: [https://drive.google.com/file/d/1hQ3RZA-_V_DCQDQFf5kaWXAJ_0lobhlm/preview]
    Keajaiban Bulan - Menjelajahi Gerhana Bulan: [https://drive.google.com/file/d/1vghgP6ov043QlGZdKq-nAXJQeX7khHL3/preview]
    Rahasia Matahari - Menjelajahi Gerhana Matahari!: [https://drive.google.com/file/d/1aI16OSwOH3-PpEc63gwgdCPDIffKcfCg/preview]
    Mari Mendaur Ulang - Fakta Menarik Tentang Daur Ulang: [https://drive.google.com/file/d/13KuRrsZ9Yiu_OqMQAZmJ-KsC1fYNfEgK/preview]
    Misteri Kuman yang Tak Terlihat!: [https://drive.google.com/file/d/1wpkkffA-fIabQmnDgJop9FnIm4fHQYAo/preview]
    Ayo Bergerak - Mengapa Olahraga Itu Penting!: [https://drive.google.com/file/d/129g-jJfLzRkubqQ_Ed7WS1QsooMppCw6/preview]
    Aman dari Kebakaran - Fakta Menarik Tentang Keselamatan Kebakaran: [https://drive.google.com/file/d/1LaKLfag8TGMnJ5jh6czptP7y-UsPrJ_8/preview]
    Ka'bah yang Menakjubkan di Mekah!: [https://drive.google.com/file/d/1v6GaoATx55HzCk2HFxqc9k_PVYqKWMU_/preview]
    Menjelajahi Sungai Amazon yang Menakjubkan!: [https://drive.google.com/file/d/15Eu91xVNLt2Tr9iXjOn6HjwAVHEc6r7K/preview]
    Tsunami -  Gelombang Raksasa!: [https://drive.google.com/file/d/1lW5awtMzTTdXoSqcnN_G1e_37bl1KReh/preview]
    Ikan Buntal yang Mengagumkan!: [https://drive.google.com/file/d/1tneuHzbOh1auPOjXQr_MxI9i83oJTpQl/preview]
    Bersenang-senang dengan Sains - Membuat Gunung Berapi Buatan Sendiri!: [https://drive.google.com/file/d/1NoK84nfJx8FZ4bnEvufFvgV2nYhn_Qof/preview]
    Keseruan Beku - Balapan Es Batu!: [https://drive.google.com/file/d/1y9f-ghUGShERthJS2ckHBy8X71CPdRRr/preview]
    Ledakan! Buatlah Roket Soda Kue dan Cuka!: [https://drive.google.com/file/d/1X9tXoY6fRUjisWs1NjLZCJBBdyFpv-yl/preview]
    Melihat Mereka Tumbuh! Eksperimen Benih Kecambah: [https://drive.google.com/file/d/1Ltxmuy9GoKg1T-8L23O69Er9VImLXm-k/preview]
    Membesar dengan Sains - Membuat Mobil Balon Kamu Sendiri: [https://drive.google.com/file/d/1iiTWPxrkl8sMfZVYbcpSfRvA33qtliaZ/preview]
    Memahami Flu sebagai Penyakit yang Umum: [https://drive.google.com/file/d/1NWxvawsE3uywJcF-XOm48CUUgIQCmUSF/preview]
    Merasa Panas Karena Demam: [https://drive.google.com/file/d/1s4pet7UbWdtEqwG-LXSd9WFN6oTT6WJi/preview]
    Di Dalam Tubuh Kita yang Luar Biasa - Menjelajahi Mesin Manusia yang Menakjubkan!: [https://drive.google.com/file/d/10lqEQV0V90n7Z2Jpr0p5YVZMJ_EgMX3B/preview]
    Kebiasaan Sehat untuk Anak yang Bahagia Makan, Bergerak, Tidur!: [https://drive.google.com/file/d/1gdJaQUyKpVh7Cyx53zQ8wKXc1b_XpBta/preview]
    Senyuman Super Menjaga gigimu tetap sehat dan bahagia!: [https://drive.google.com/file/d/1lHqAyeBv3Txp3W_F4HhZhu6Fff6TScSU/preview]
    Pabrik Perasaan Menjelajahi Emosi dan Kesehatan Mental!: [https://drive.google.com/file/d/1_kNzlYZ3TdbL_ynuFW4Qa6nGcYdIA7FB/preview]
    Piring Sehat, Perut Bahagia Menemukan Makanan Bergizi untuk Tubuh yang Kuat: [https://drive.google.com/file/d/1tbrQLVIamdh7fzXcg6VX2sBkdVchjDxz/preview]
    Ilmu Pengetahuan Tentang Tidur Menjelajahi Keajaiban Tidur dan Istirahat! : [https://drive.google.com/file/d/1KNGcMx7EwqGdZBotXHC0UDIiHIsScJmC/preview]
    Piramida Agung Giza Keajaiban Mesir Kuno: [https://drive.google.com/file/d/1EPpG4QibO3N4J9uc2ghtIq5rwZXn2How/preview]
    Tembok Besar China Sebuah Keajaiban Teknik Kuno: [https://drive.google.com/file/d/1xwO756H1KMJ4TLfJCWw6RfGT5eFoE5uA/preview]
    Petra Kota Mawar Merah di Yordania: [https://drive.google.com/file/d/11zH9uC3FaLbFyk0SLb19UQIClrhtfY-I/preview]
    Grand Canyon Lubang alam yang besar dan indah: [https://drive.google.com/file/d/1NSGd5WDQ0FKihWI-o4ByVovehAQmzH_X/preview]
    Lubang Biru Yang Besar Lubang Bawah Laut Besar di Belize: [https://drive.google.com/file/d/1rjtm_AcQxk3oC26fV1GyOeAq1df8tjsO/preview]
    Gunung Everest Gunung Tertinggi di Dunia: [https://drive.google.com/file/d/1lBviLk2o41VQ3Dno0p_N4aOPEJQWwhSr/preview]
    Ilmu Tentang Suara Menjelajahi Bagaimana Kita Mendengar: [https://drive.google.com/file/d/1nGvz2OZ3AgAjNM5qsZPb7kiv0D98xixa/preview]
    Keajaiban Kecil Dunia Serangga di Sekitar Kita: [https://drive.google.com/file/d/1CHumOgwjXeByGi9RTjZLjXBqtfCwYhQZ/preview]
    Seni Pengkodean Menciptakan Keajaiban dengan Komputer: [https://drive.google.com/file/d/1epMyHDbxDTIv3kZBNdk_3r6H9p2I-Dp2/preview]
    Terbang Tinggi Ilmu Pengetahuan tentang Penerbangan: [https://drive.google.com/file/d/14sH97kUPJpG-OI2lqEndLKTcrx9rN_ZB/preview]
    Detektif kotoran Mengeksplorasi Rahasia Tanah: [https://drive.google.com/file/d/1hi_bEn9CNUIxb5AfcmPeRAulpYHOPiUj/preview]
    Robot Penjelajah Menjelajahi Dunia Robot yang Menakjubkan: [https://drive.google.com/file/d/1tBnlWeU2jgpnA7yeHIKb35Hnc0t-B2mp/preview]
    Keajaiban Paus Menjelajahi Dunia Hewan Laut Besar yang Menakjubkan: [https://drive.google.com/file/d/1n4ognKP8DL7r2wZOqXXtOmglrQ2KcbpL/preview]
    Matahari Bintang Terang di Langit Kita: [https://drive.google.com/file/d/1LI8hdacHfPWRRhi_p8miP73a-Ev6C9OE/preview]
    Bulan Teman Malam Kita di Langit: [https://drive.google.com/file/d/12UXi44P0pcUvuJF4teXTWMgUchrZBgnc/preview]
    Petualangan Sungai Menjelajahi Jalur Air Alami: [https://drive.google.com/file/d/1Q_UHZ4M1UyawA6KqbxislLAYoFZqbSqZ/preview]
    Lebah yang Sibuk dan Kupu-Kupu yang Cantik Cara Mereka Membantu Tanaman Tumbuh: [https://drive.google.com/file/d/1ALjkO9iLDaleJ3SNVPuv9xukSlrV8NcE/preview]
    Kisah Tentang Kendaraan dari Roda ke Roda: [https://drive.google.com/file/d/1PaHm9ZzDOoFdUYnxDQ6KCLGk1wFt4DGQ/preview]
    Transportasi Awal Menjelajahi Cara Pertama untuk Bergerak: [https://drive.google.com/file/d/1gcJk6ZJUSixn9svx3c1LUQ2xk95tJmuR/preview]
    Kopi Indonesia yang Luar Biasa, Cita Rasa Budaya dan Tradisi: [https://drive.google.com/file/d/1WTJny77KiO9pyLtMbvocQJdlSrmL6Luj/preview]
    Kenapa Tumbuhan Sebagian Besar Berwarna Hijau: [https://drive.google.com/file/d/1lkK9T4P9m8Q_WsxFIDlJvOGqL4HYkwuw/preview]
    Petualangan Komet Menemukan Bintang Jatuh dari Luar Angkasa: [https://drive.google.com/file/d/13dgW28ujktTxygtXuSbTAYpbmcqFwdjR/preview]
    Perjalanan Lezat Menjelajahi Makanan dari Seluruh Dunia: [https://drive.google.com/file/d/1TDHEav8M66lP9XTAPclygCBLFHVUhxaJ/preview]
    Mengapa Pluto bukan lagi sebuah planet: [https://drive.google.com/file/d/17MIlmV9n2mGthSafpTPp0CFjn2l2cAdv/preview]
    Berapa Lama Orang Bisa Hidup Tanpa Tidur: [https://drive.google.com/file/d/1i6JQZP_7En69sQ0LLn-uw4G371dZqD0I/preview]
    Mengapa Laut Menjadi Asin: [https://drive.google.com/file/d/14ztErv9lfsneWLUDLmKFNBfddNfjWEbQ/preview]
    Mengapa Suara Kita Terdengar Lucu di Rekaman: [https://drive.google.com/file/d/1MEOWlHNHKYqTbA0HZSmJQu_jpzst7LEV/preview]
    Menjelajahi Déjà Vu yang Terasa Akrab: [https://drive.google.com/file/d/1lkc8dxEIW9qaoZb-GyVQUuqFbLux0Zw1/preview]
    Mengapa Hutan Itu Luar Biasa: [https://drive.google.com/file/d/1P1iVqCdq1JibbXvCJTtKgn9fSQWhARWC/preview]
    Fakta Menarik Tentang Cegukan: [https://drive.google.com/file/d/15jZUgrBrJYevaDIULVockMCYWjc_DBnj/preview]
    Ilmu di Balik Bersin: [https://drive.google.com/file/d/1dFkl1zcRp_1dH-nM4YZazxaTKFH5K3EP/preview]
    Kekuatan Sayuran Mengapa Makan Sayuran Itu Luar Biasa!: [https://drive.google.com/file/d/1EzIUJpCE5dT4XkjTFHIdq5o1zvn4fNA5/preview]
    Pentingnya Air yang Luar Biasa: [https://drive.google.com/file/d/1N5wqXTFO3dNn1YXkInnPKxytt6Bkv25c/preview]
    Dunia Mammoth Berbulu: [https://drive.google.com/file/d/1jNM0R9fA-S2dPXLXQYQ4tfkZ5ORwCekQ/preview]
    Gurun Sahara yang Menakjubkan: [https://drive.google.com/file/d/1DjVVIb8R2F01d5K6qJ2XIOTb5bOIwVZY/preview]
    Keajaiban Aurora: [https://drive.google.com/file/d/1nsANwVpby1mav3hJ_LX7Ck5Yy6_NaaS0/preview]
    Perubahan Musim Semi, Panas, Gugur, dan Dingin: [https://drive.google.com/file/d/1SWZlsCcUWtOdRDTgMl5U6R-B-Vvf25HF/preview]
    Kehidupan Rahasia Lebah, Kekuatan Penyerbukan: [https://drive.google.com/file/d/16-QIXSrK1BHObos54WIZp48Z_t1DlHMz/preview]
    Rahasia Permata Embun Pagi: [https://drive.google.com/file/d/1zfZXrbC_GKunmwZEWL6vVa8OiaII8Xie/preview]
    Dunia yang Sibuk di Bawah Kaki Kita Cacing Tanah dan Teman-temannya: [https://drive.google.com/file/d/1uisMN6oJNW3R_wy5h1v8E4rPa-wtqvy5/preview]
    Keajaiban Seni Musim Dingin Embun Beku: [https://drive.google.com/file/d/19Zr2kdTXCHF37iFGKPYvhb2pUWh0mHLO/preview]
    Dunia Hewan Pemakan Daging Karnivora: [https://drive.google.com/file/d/1Ud3zsa0An1ZaQlzo1D8pQ-srLrR38iUb/preview]
    Dunia Hewan Pemakan Tumbuhan Herbivora: [https://drive.google.com/file/d/1PYMD9CccHvlWCEX4ZNiriTFOZmJdiw66/preview]
    Dilema Omnivora - Menjelajahi Hewan yang Memakan Segalanya: [https://drive.google.com/file/d/12SMvMOsVWgJ7ANj7XJKcoUqY2-3tsp8Q/preview]
    Kehidupan Rahasia Serangga - Teman Kecil, Petualangan Besar: [https://drive.google.com/file/d/1YXAtZZVnWm7RicksPAUtUGxtIMk2Koki/preview]
    Dunia Makhluk Kecil yang Menakjubkan - Menjelajahi Kehidupan Mikroskopis: [https://drive.google.com/file/d/1qr9vQ1mRNu9RuvW-Y4rQ_PN9DmQTHpUp/preview]
    Hewan Pembangun yang Mengagumkan - Perajin Rumah Alam: [https://drive.google.com/file/d/1sL--oPBGheAYL-R_NJFYOU_-hldAHTw0/preview]
    Tempat-tempat Mengagumkan di Bumi - Petualangan di Pegunungan dan Gua: [https://drive.google.com/file/d/1XJZtrx-whRYdNP6g_RfU8R6r0ASifi8z/preview]
    Keseruan Fosil - Menemukan Hewan Purba : [https://drive.google.com/file/d/19zaMKFh_5k7whhi6iCV_V4G64WsE5pil/preview]
    Perasaan Kesemutan - Mengapa Kita Tertusuk Jarum Pentul: [https://drive.google.com/file/d/1Jl9lp0PMepDmZsrzhu_gbLSSx8oq-t2c/preview]
    Mengapa Orang Mendengkur: [https://drive.google.com/file/d/1N7jYh76s09DIGmyGUs7iNWlXuUsbOiaL/preview]
    Mengapa Orang Pingsan: [https://drive.google.com/file/d/1VX1I472Wbeavpnskny7GNNur0XC3tWF8/preview]
    Sidik Jari - Tanda Unikmu: [https://drive.google.com/file/d/1zAiXN7W6j2jNL54HS95b4vlsqBZYhC2a/preview]
    Mengapa Hutan Itu Penting: [https://drive.google.com/file/d/1feCxMLMPy_2kD5ueJkbnt2PrxL-_pXLD/preview]
    Mengapa Kita menjadi gugup: [https://drive.google.com/file/d/1B5WM40_Y2bf38ql3FOmHor_9urVR2TXL/preview]
    Mengapa Kita Bermimpi dan Mengapa Kita selalu tidak Ingat: [https://drive.google.com/file/d/1yDGdd23QxgKr3x1Klcft1M-fjkGBo27f/preview]
    Mengapa Kita Lupa: [https://drive.google.com/file/d/17rmzbiV_sLMhZ5cIggCmtNakWHsxdSIk/preview]
    Mengapa Liburan Terasa Begitu Cepat: [https://drive.google.com/file/d/1LI3z-dDEkrf1-IwX3GSceXcXzW_tntvl/preview]
    Akankah Robot Mengambil Alih Pekerjaan: [https://drive.google.com/file/d/1FoP85_ObSCq-zcOMzDpF6b5Csz2TJfqw/preview]
    Nyamuk Pengacau Kecil Tapi Perkasa: [https://drive.google.com/file/d/1o4RJzfDJyXwAqF-TUQiqgvTBAJndP3q4/preview]
    Mengapa Manusia Tidak Bisa Terbang Seperti Burung: [https://drive.google.com/file/d/14WiJ9eMNhT3tdTIS5u7v4FgZOyurehKt/preview]
    Kisah Peta - Menjelajahi Dunia: [https://drive.google.com/file/d/1zIEzRjLhehidStvaLikg4BX00fSkS-1L/preview]
    Kisah Ponsel yang Dapat Berbicara di Mana Saja!: [https://drive.google.com/file/d/1gldmGVWQ7otTXEj4KcMzl8NIK1USKh7y/preview]
    `;
    const videos_en_raw = `
    Exploring Volcanoes A Fiery Adventure: [https://drive.google.com/file/d/1HMCkL99Q2YHaS7l9DcooMQdWRRTf-YNM/preview]
    Day and Night Earth's Bright and Dark Adventures: [https://drive.google.com/file/d/1SdrPVZMyH4ElKogXJetH__0WM6pGjksF/preview]
    The Water Cycle Nature's Amazing Water Adventure: [https://drive.google.com/file/d/1tnw0PBkxRtwXubX6sj1GfAWCKtcGgOVG/preview]
    Animal Homes Exploring Where Animals Live!: [https://drive.google.com/file/d/1TtGi1F1I-7wuCcBTPZXKJqQ8cCJZjo6v/preview]
    Earthquakes Exploring the Shaky World Beneath Our Feet!: [https://drive.google.com/file/d/1WwBWmj2ECf60L4VTJFMyPJSZBFSV-8Sm/preview]
    Magnetic Magic Exploring the Power of Magnets: [https://drive.google.com/file/d/1WuGE56wxzxanMpFaq-RzHuLO6qTHlDup/preview]
    Incredible Inventors and Their Amazing Creations!: [https://drive.google.com/file/d/14zGGthmm1uP2UY3ta6cEhMGbdq3hWdWa/preview]
    The Amazing Journey of Plants Exploring the Plant Life Cycle!: [https://drive.google.com/file/d/101OEx4AYLUP41GyParwwyLOno1dsohLn/preview]
    Weather Wonders Exploring the Science of Rain, Snow, and Thunderstorms!: [https://drive.google.com/file/d/12ZS6inVFlyDZ2Md57Wc-0sMDnCUiukyh/preview]
    Ocean Adventures Exploring the Amazing World of Sea Creatures!: [https://drive.google.com/file/d/1Bn58udFKLDbOM3gcRB47IXBecbjC9r_-/preview]
    Renewable Energy Powering Our Planet with the Sun, Wind, and Water!: [https://drive.google.com/file/d/1ce4BJxX_aTGacqlRJaEDJsxPPnD8T_xI/preview]
    Shooting Stars and Cosmic Visitors Exploring Meteors and Comets!: [https://drive.google.com/file/d/1FqTDg3IxTIdSS1Y9xtW_YP74tXbyulQm/preview]
    Understanding Floods Keeping Our Environment Safe: [https://drive.google.com/file/d/14aVLjsJlDnPQkUV3h8Q5yjl0ucEpmyAH/preview]
    Sink or Float Fun with Science!: [https://drive.google.com/file/d/1VBvQ8y59vXc1BClaMi8UGcWopCKT9ilV/preview]
    Moon Magic Exploring the Lunar Eclipse!: [https://drive.google.com/file/d/1x709zZwjLQSJtvw-T_1AFhMnK19_jzsS/preview]
    Sun Secrets Exploring the Solar Eclipse!: [https://drive.google.com/file/d/1OdpX-alXzk07UfZ2-hON40vOA30_LDTX/preview]
    Lets Recycle Fun Facts About Recycling: [https://drive.google.com/file/d/1C5vvP9QoChjxrcZi6OwOiihLV2phHQUu/preview]
    The Mystery of Invisible Germs!: [https://drive.google.com/file/d/1VWMTU76ajetYeRJRrDM35u7mLcAsJDpL/preview]
    Let's Move Why Exercise is Important!: [https://drive.google.com/file/d/18TW0-CsyzFDa6znIOKYWhlcYEDPgd7u6/preview]
    Be Safe from Fire - Fun Facts About Fire Safety: [https://drive.google.com/file/d/1DeH2cju-e__-gd9IhwWVd0_LZfvDOxnJ/preview]
    The Amazing Kaaba in Mecca!: [https://drive.google.com/file/d/1AB1ogy1WgrHqYVCedCd7wpV5FLid4hWC/preview]
    Exploring the Amazing Amazon River!: [https://drive.google.com/file/d/1iW3ramjxKOX_MKMk9mMKkYWz8HGcPcYm/preview]
    Tsunami The Giant Wave!: [https://drive.google.com/file/d/1lC24uTt--Xxd3v6_wzoyMnXwiPeiCutB/preview]
    The Awesome Pufferfish!: [https://drive.google.com/file/d/1GPDYAX15KzW1smohWUaFxlEWQCM-mqiO/preview]
    Fun with Science Making a Homemade Volcano!: [https://drive.google.com/file/d/1UtQzbfJ9Gz7BUq-mhAzhWbcxDA5eBW4V/preview]
    Frozen Fun Ice Cube Races!: [https://drive.google.com/file/d/1x56bEvDbUFE6AiGtP38zwKUajJJ6U_kp/preview]
    Blast Off! Make a Baking Soda and Vinegar Rocket!: [https://drive.google.com/file/d/1eLw5H_FOYbWtEi7rXs7LbMXzhLF0-wT_/preview]
    Watch Them Grow! Seed Sprouting Experiment: [https://drive.google.com/file/d/1FzrpHL2XgR9WExlbVEVKLfbptOp1HoBY/preview]
    Zooming with Science Make Your Own Balloon Car: [https://drive.google.com/file/d/1zS-pJ0STVINAi2XrGx0Va4G6Odk01D-P/preview]
    The Flu Understanding a Common Sickness: [https://drive.google.com/file/d/1WuO5gRE_GG2CCidFspVwFUdWeJUN960r/preview]
    Feeling Hot All About Fever: [https://drive.google.com/file/d/1RwADr_QFZQ8x2ES08TA7aSrjqfh9ofDs/preview]
    Inside Our Incredible Bodies Exploring the Amazing Human Machine!: [https://drive.google.com/file/d/1kDDzMUEwAm3SlnzjSD8Dd2BT6ZqqI79l/preview]
    Healthy Habits for Happy Kids Eat, Move, Sleep!: [https://drive.google.com/file/d/1eSf7tP35FH7JH3Z0h2e7tvMItIQ3eW-8/preview]
    Super Smiles Keeping Your Teeth Healthy and Happy!: [https://drive.google.com/file/d/19Db6depsza6F4ieVVeWgXZ_sW3QcNg0V/preview]
    Feelings Factory Exploring Emotions and Mental Health: [https://drive.google.com/file/d/1u4YgfMUCfphTysjqfyvg2OB2bg5qDBNO/preview]
    Healthy Plate, Happy Tummy Discovering Nutritious Foods for Growing Bodies: [https://drive.google.com/file/d/1BQ-oHHR2NRIS3-tuWnpuccTtVBXOB7WG/preview]
    Snooze Science Exploring the Power of Sleep and Rest: [https://drive.google.com/file/d/1Jiqk7LC1zdD5TfsyQFxnq2b7i6gKUJZg/preview]
    The Great Pyramid of Giza A Marvel of Ancient Egypt: [https://drive.google.com/file/d/14C3sXCsljJWAVm7EgAsXaC59L8eY1v0K/preview]
    The Great Wall of China A Wonder of Ancient Engineering: [https://drive.google.com/file/d/1nm4xoEjD198781eVXktCR7VFWGQb5xOw/preview]
    Petra The Rose-Red City of Jordan: [https://drive.google.com/file/d/1tkZzE0-0YQzhfW-8ptZe6MzVODBKfLgr/preview]
    The Grand Canyon Nature's Big, Beautiful Hole: [https://drive.google.com/file/d/1PcmlnUKeMEGfHFcXKgBz6rehovMvyRov/preview]
    The Great Blue Hole A Huge Underwater Hole in Belize: [https://drive.google.com/file/d/1HpkWflfS4QGzw0EkedF9VM2Iyy6fWPWo/preview]
    Mount Everest The Tallest Mountain on Earth: [https://drive.google.com/file/d/1SFHEDjFOXlHl76Y-fqv8qQUIFKwM7Pqf/preview]
    The Science of Sound Exploring How We Hear: [https://drive.google.com/file/d/19HCPk6Qol7aD0dHZN32h8nA_z5WPT_vw/preview]
    The World of Insects Tiny Wonders All Around Us: [https://drive.google.com/file/d/1TCCEGLFQvCMCahggHeAPGHtMiJp4_-2z/preview]
    The Art of Coding Creating Magic with Computers: [https://drive.google.com/file/d/1kRPaymmwfgtXjVOaby9tquEvA-cELwc_/preview]
    Flying High The Science of Flight: [https://drive.google.com/file/d/1FDq2h5jch25Ci6da_rPKwl_68QgqpGuB/preview]
    Dirt Detectives Exploring the Secrets of Soil: [https://drive.google.com/file/d/15mzbP0ge4ob_unHJZj82Uy6eXiazyUH2/preview]
    Robot Explorers Discovering the Amazing World of Robots: [https://drive.google.com/file/d/1wHeLuytaZmFqS8ABIQ4PQFUjBYsWiWRL/preview]
    Whale Wonders Exploring the Amazing World of Big Ocean Animals: [https://drive.google.com/file/d/1hTsvjaHScr6jZotKq3O0UF42GWJ49WSF/preview]
    The Sun A Bright Star in Our Sky: [https://drive.google.com/file/d/17MVqzyHlffY9xSZitM3ZuhpRFd2MYi5r/preview]
    The Moon Our Nighttime Friend in the Sky: [https://drive.google.com/file/d/1eIe7z_2grpoKGAHSoMWYDoM3TnyBRzhP/preview]
    River Adventures Exploring Nature's Waterways: [https://drive.google.com/file/d/1JzlCjBbyvXSekgRN92tCz2WJPi9009KS/preview]
    Busy Bee and Beautiful Butterfly How They Help Plants Grow: [https://drive.google.com/file/d/1gT-7LHzTMfaru1mWP09B2qtAZBFs5BrD/preview]
    The Story of Vehicles From Wheels to Wheels: [https://drive.google.com/file/d/1cEXm3T4EffTi_yEPX_EjMpNj47QDckiI/preview]
    Early Transportation Exploring the First Ways to Move: [https://drive.google.com/file/d/1OYuoU8sfVhVbTb-1tajnBOtvgREQThnt/preview]
    Wonderful_Indonesian_Coffee_A_Taste_of_Culture_and_Tradition: [https://drive.google.com/file/d/1OYjIzETHe85G707gTvDHchLlT806MFWf/preview]
    Why Are Plants Mostly Green: [https://drive.google.com/file/d/1_NE2suk9I0jDKkVjAHR7AiZW2nbAQcxO/preview]
    Comet Adventures Discovering Shooting Stars from Space: [https://drive.google.com/file/d/1iuAa4l69G6DM20wJkVwTN09oHFKKw8Vc/preview]
    Tasty Travels Exploring Foods from Around the World: [https://drive.google.com/file/d/1cmeYF52xw1erjDeqP8IP-JWCJOl9hyhz/preview]
    Why Pluto is no longer a planet: [https://drive.google.com/file/d/17qNZnqyphPy0pFc_10rmlPaaKoqfo91m/preview]
    How Long Can People Live Without Sleep: [https://drive.google.com/file/d/1WHPNyJpUZFkBBGfFlZN4ZhgsuNgJo-hb/preview]
    Why Is the Sea Salty: [https://drive.google.com/file/d/1OKVgRxUMrkeey-ochGPbl-9TeoS3VE_l/preview]
    Why Does Our Voice Sound Funny on Recordings: [https://drive.google.com/file/d/10t6R5YBfBFgzeoPvXwM-jfIr4qET3gRf/preview]
    Exploring Déjà Vu That Familiar Feeling: [https://drive.google.com/file/d/1X4gWQ_YqrZHmq-5zHIfyfrJByQgTvRdz/preview]
    Why Forest Are Awesome: [https://drive.google.com/file/d/11W0b5eixN_hRB4VhFJucE56SOH0IhB_M/preview]
    Fun Facts About Hiccups: [https://drive.google.com/file/d/1kS0bgWQCIxMBrEafzJBacVtl6IkzoRjL/preview]
    The Science Behind Sneezing: [https://drive.google.com/file/d/1xhySWqOXyHqMyS4J-bFc7utF5w-KxNWX/preview]
    Veggie Power Why Eating Veggies is Awesome!: [https://drive.google.com/file/d/1Xr7qnEv8dClX0GY1FPV066hQogi1bMGx/preview]
    The Amazing Importance of Water: [https://drive.google.com/file/d/1QSOoQxWQoCTHuCnz0TrbaZC85ZEwBOi5/preview]
    The World of Woolly Mammoths Ice Age Adventures: [https://drive.google.com/file/d/1NQE7_WIz-pr76IMvMIf-3yRiir28bPPk/preview]
    The Amazing Sahara Desert: [https://drive.google.com/file/d/1BywkAz5uZm1Gr08-oTdiH8xtcaj3-3jT/preview]
    The Magic of Auroras: [https://drive.google.com/file/d/1NpDBR4Gzla1WPvlM5Mk956VirvmkBeft/preview]
    The Changing Seasons Spring, Summer, Fall, and Winter: [https://drive.google.com/file/d/1-MTOTtYC7hgIfnmo7KvGbW89CoLG8_km/preview]
    The Secret Life of Bees Pollination Power: [https://drive.google.com/file/d/1E_qdt6OAN0YYr_DyI09j19uH6m5SvubV/preview]
    The Secret of Dew Morning Jewels: [https://drive.google.com/file/d/1QywXdw9Z31aIG4TfxHP0yfm_wlHFXtJx/preview]
    The Busy World Under Our Feet Earthworms and Friends: [https://drive.google.com/file/d/1L0SGCYZI0b4yeJsH_VajTYe5iZF3oAvV/preview]
    The Magic of Frost Winter's Art: [https://drive.google.com/file/d/1OAGFjVszoYSTJdvj55VENtwmuoVbfDGg/preview]
    The World of Carnivores Meat-Eating Animals: [https://drive.google.com/file/d/19MYCCJDsM_6olQyR8soLneXKBmPOddNh/preview]
    The World of Herbivores Plant-Eating Animals: [https://drive.google.com/file/d/1hbTrowqNU786orNAsbxG4fIU6TbeAG_4/preview]
    The Omnivore's Dilemma Exploring Animals That Eat Everything: [https://drive.google.com/file/d/1wTpaJNsaqKJ_uzwdzaYNpcc4889X74Y_/preview]
    The Secret Lives of Insects Tiny Friends, Big Adventures: [https://drive.google.com/file/d/1-2YFNO44-QkTq0Y1FpL-YuObfsf0IZPG/preview]
    The Amazing World of Tiny Creatures Exploring Microscopic Life: [https://drive.google.com/file/d/1FoGedkjt2LMr9nvDt6gtYZqSqLr1OIgQ/preview]
    Awesome Animal Builders Crafters of Nature's Homes: [https://drive.google.com/file/d/1T1hF4YbWPqnIZK77odvTq2rk7uWdD4Pu/preview]
    Earth's Awesome Places Mountains and Caves Adventure: [https://drive.google.com/file/d/1BBobaGiMYuyR_6L6fGUZT-cQSojz32Xx/preview]
    Fossil Fun Discovering Ancient Animals: [https://drive.google.com/file/d/1qTHE15nrDSHFCaRarybozTN9exyHGsLK/preview]
    The Tingly Feeling Why Do We Get Pins and Needles: [https://drive.google.com/file/d/1RjUPCqynjpXWk4fAokuqlmH81XPh9PQS/preview]
    Why Do People Snore: [https://drive.google.com/file/d/1XuW0L-Myx1NQNyGwVGN3gWUVxgE_n0-x/preview]
    Why Do People Faint: [https://drive.google.com/file/d/1pNJeOJH2Ipm_29a-kK7ju-GvZl5XSb_Z/preview]
    Fingerprints - Your Unique Mark: [https://drive.google.com/file/d/16MiSFFvJ9c4maAgGFZIngFx2cd4WOGJ2/preview]
    Why Forests Are Important: [https://drive.google.com/file/d/1dF-2aaOKEjxUazcVkItHG_yqR0lpe2YU/preview]
    Why Do We Get Nervous: [https://drive.google.com/file/d/1aWF65talBBXG2yzhiWsZIcEGYBZ-u1aC/preview]
    Why Do We Dream and Why Don't We Always Remember: [https://drive.google.com/file/d/1W7KEy3BzHMzt0_Eyk8NHfygb_1PmWk_C/preview]
    Why Do We Forget: [https://drive.google.com/file/d/1PM0yc5pYbafum0AN0tUJ4mgX4b7qd0p1/preview]
    Why Holidays Feel So Fast: [https://drive.google.com/file/d/13I_NiDGAvfGdjgPK8BGPFXD-sewfDyQt/preview]
    Will Robots Take Over Jobs: [https://drive.google.com/file/d/1tm9oV2mWFqI-S5_oVAO4-v06WraP_vDn/preview]
    Mosquitoes Tiny but Mighty Buggers: [https://drive.google.com/file/d/1afv-3IosZVRSN0xo5B-l-Be7M-k93d88/preview]
    Why Can't Humans Fly Like Birds: [https://drive.google.com/file/d/1WRWDThojc-ySu2aXQJqah9VBrqPBcCcJ/preview]
    The Story of Maps - Exploring the World: [https://drive.google.com/file/d/1eMOZWLlg60AzoSjFGVt-b5FA9OH38sxP/preview]
    The Story of Mobile Phones Talking Anywhere!: [https://drive.gdrive.google.com/file/d/16QL0JH7Ps_k5ojfL1nu8pcQ0cH3DRa2T/preview]
    `;
    // Sisa kode JavaScript tidak berubah karena fungsinya sudah benar.
    // ... (fungsi parseVideoData, event listener, dll.) ...

    function parseVideoData(rawData) {
        return rawData.trim().split('\n').map(line => {
            const parts = line.split(': [');
            if (parts.length < 2) return null;
            const title = parts[0].trim();
            const url = parts[1].slice(0, -1).trim();
            return { title, url };
        }).filter(Boolean);
    }

    const indonesianVideos = parseVideoData(videos_id_raw);
    const englishVideos = parseVideoData(videos_en_raw);

    const videoFrame = document.getElementById('video-frame');
    const videoTitle = document.getElementById('video-title');
    const videoList = document.getElementById('video-list');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');
    const playlistTitleText = document.getElementById('playlist-title-text');

    let currentVideoIndex = 0;
    let currentPlaylist = indonesianVideos;

    function loadVideoList(playlist) {
        videoList.innerHTML = '';
        playlist.forEach((video, index) => {
            const videoItem = document.createElement('div');
            // Menambahkan kembali sudut lembut dan menyesuaikan style
            videoItem.className = 'p-3 my-1 cursor-pointer hover:bg-slate-200 transition-colors duration-200 flex items-center space-x-4 rounded-lg';
            videoItem.dataset.index = index;

            const itemIndex = document.createElement('span');
            itemIndex.className = 'text-sm text-slate-500 font-semibold w-5 text-center';
            itemIndex.textContent = `${index + 1}`;

            const itemTitle = document.createElement('span');
            itemTitle.className = 'flex-1 line-clamp-2 text-sm font-medium';
            itemTitle.textContent = video.title;
            
            const playIcon = document.createElement('i');
            playIcon.className = 'fas fa-play text-slate-400';

            videoItem.appendChild(itemIndex);
            videoItem.appendChild(itemTitle);
            videoItem.appendChild(playIcon);

            videoItem.addEventListener('click', () => playVideo(index));
            videoList.appendChild(videoItem);
        });
    }

    function playVideo(index) {
        if (index >= currentPlaylist.length) index = 0;
        if (index < 0) index = currentPlaylist.length - 1;
        
        currentVideoIndex = index;
        const video = currentPlaylist[index];
        videoFrame.src = video.url;
        videoTitle.textContent = video.title;
        updateActiveVideoInList();
    }
    
    function updateActiveVideoInList() {
        const items = videoList.querySelectorAll('div[data-index]');
        items.forEach((item, idx) => {
            const icon = item.querySelector('.fa-play, .fa-pause');
            const title = item.querySelector('.font-medium');

            if (idx === currentVideoIndex) {
                item.classList.add('active-video');
                title.classList.add('text-white');
                if(icon) {
                    icon.classList.remove('fa-play');
                    icon.classList.add('fa-pause');
                    icon.classList.remove('text-slate-400');
                    icon.classList.add('text-white');
                }
                item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                item.classList.remove('active-video');
                title.classList.remove('text-white');
                 if(icon) {
                    icon.classList.add('fa-play');
                    icon.classList.remove('fa-pause');
                    icon.classList.add('text-slate-400');
                    icon.classList.remove('text-white');
                }
            }
        });
    }

    function switchLanguage(lang) {
        const activeBtnClasses = 'text-white bg-orange-500';
        const inactiveBtnClasses = 'bg-slate-200 hover:bg-slate-300';

        if (lang === 'id') {
            currentPlaylist = indonesianVideos;
            playlistTitleText.textContent = 'Daftar Putar';
            btnId.className = btnId.className.replace(inactiveBtnClasses, activeBtnClasses);
            btnEn.className = btnEn.className.replace(activeBtnClasses, inactiveBtnClasses);
        } else {
            currentPlaylist = englishVideos;
            playlistTitleText.textContent = 'Playlist';
            btnEn.className = btnEn.className.replace(inactiveBtnClasses, activeBtnClasses);
            btnId.className = btnId.className.replace(activeBtnClasses, inactiveBtnClasses);
        }
        loadVideoList(currentPlaylist);
        playVideo(0);
    }

    nextBtn.addEventListener('click', () => playVideo(currentVideoIndex + 1));
    prevBtn.addEventListener('click', () => playVideo(currentVideoIndex - 1));
    btnId.addEventListener('click', () => switchLanguage('id'));
    btnEn.addEventListener('click', () => switchLanguage('en'));

    // Inisialisasi
    switchLanguage('id');
}); 