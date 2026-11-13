import type { SiteContent } from './types';

// Kaynak düzeni (2026-11-12, Emre'nin kararı): Hakkımda, Projeler, Beceriler, Deneyim eski siteden
// (E:/Github/my-website-eski) Emre'nin kendi beyanı; "2025 sonrası" bölümü ve oyun tasarımı
// 2026 oturum kayıtlarından (vault: 🏰 300-Projects/my-website/docs/icerik-kaynaklari.md).
// Alıntılar Emre'nin promptlarından birebir; kısaltılan yer "…" ile işaretli, yazım düzeltilmedi.

export const tr: SiteContent = {
  meta: {
    title: 'Emre Bahçeci · Bilgisayar mühendisliği öğrencisi',
    description:
      'Yapay zekâ, bilgisayarla görme ve mobil uygulama geliştirmeye meraklı bilgisayar mühendisliği öğrencisi. Projeler, deneyim ve 2025 sonrası yapay zekâyla kurduğum işler.',
  },

  nav: {
    about: 'Hakkımda',
    projects: 'Projeler',
    recent: '2025 sonrası',
    games: 'Oyun tasarımı',
    skills: 'Beceriler',
    experience: 'Deneyim',
    contact: 'İletişim',
  },

  ui: {
    skipToContent: 'İçeriğe geç',
    menu: 'Menü',
    close: 'Kapat',
    switchLanguage: 'İngilizceye geç',
    toLightTheme: 'Açık temaya geç',
    toDarkTheme: 'Koyu temaya geç',
    problem: 'Sorun',
    mine: 'Benim payım',
    ai: 'Yapay zekânın payı',
    evidence: 'Kanıt',
    noPublicLink: 'Herkese açık bağlantı yok.',
    decision: 'Karar',
    originalQuote: 'Özgün alıntı',
    opensInNewTab: '(yeni sekmede açılır)',
    technologies: 'Kullanılan teknolojiler',
    highlights: 'Temel özellikler',
    tracksLabel: 'Çalışma alanları',
  },

  tracks: {
    ai: {
      label: 'AI ile teslim',
      note: 'İşi tanımlayıp yapay zekâya kurdurduğum, testle doğruladığım işler.',
    },
    product: {
      label: 'Ürün / ML',
      note: 'Bir kullanıcı gözleminden ya da ölçülebilir bir sorudan çıkan ürün ve makine öğrenmesi işleri.',
    },
    game: {
      label: 'Oyun tasarımı',
      note: 'Mekanik ve sistem kararlarını verdiğim oyunlar.',
    },
  },

  hero: {
    eyebrow: 'Bilgisayar mühendisliği öğrencisi, son sınıf',
    name: 'Emre Bahçeci',
    headline: ['Merhaba, ben Emre.'],
    rotating: { before: '', roles: ['Yapay zekâ', 'Bilgisayarla görme', 'Mobil uygulama'], after: 'geliştiriyorum.' },
    lede:
      'Bilgisayar mühendisliği öğrencisi olarak yapay zekâ, bilgisayarla görme ve mobil uygulama geliştirme alanlarında güçlü bir meraka sahibim. Gerçek dünya problemlerini işlevsel yazılım çözümlerine dönüştürmeyi ve üretken ekiplerle birlikte çalışmayı seviyorum.',
    cta: {
      github: 'GitHub',
      cv: 'CV indir',
      contact: 'İletişim',
    },
    bridge: {
      text: '2025 sonundan beri işleri yapay zekâ ajanlarıyla kuruyorum; o işlerde benim payım ve yapay zekânın payı ayrı yazılı.',
      linkLabel: '2025 sonrası bölümüne git',
    },
  },

  about: {
    title: 'Hakkımda',
    paragraphs: [
      'Yapay zekâ, bilgisayarla görme ve mobil uygulama geliştirme konularına ilgi duyan bir bilgisayar mühendisliği öğrencisiyim. Gerçek dünya problemlerini işlevsel ve estetik yazılımlara dönüştürmekten, ekiplerle birlikte üretmekten ve bilgi paylaşımını merkeze alan topluluklar oluşturmaktan keyif alıyorum.',
      'Sürekli gelişim odağıyla yalnızca etkileyici değil, aynı zamanda sürdürülebilir çözümler üretmeyi amaçlıyorum. Yeni teknolojileri keşfetmek, öğrendiklerimi projelere aktarmak ve bu süreçte çevremdekilere ilham vermek için çalışıyorum.',
    ],
    facts: [
      {
        label: 'Eğitim',
        value: 'Bilecik Şeyh Edebali Üniversitesi',
        detail: 'Bilgisayar Mühendisliği · 2021 - devam ediyor',
      },
      { label: 'Konum', value: 'Kayseri, Türkiye' },
      {
        label: 'Çalışma durumu',
        value: 'İş fırsatlarına açığım',
        detail: 'Yazılım geliştirme, yapay zekâ / makine öğrenmesi ve mobil uygulama; uzaktan ya da yerinde.',
      },
    ],
  },

  projects: {
    title: 'Projeler',
    intro: 'AI ve mobil uygulama geliştirme alanlarında hayata geçirdiğim öne çıkan projeler.',
    items: [
      {
        id: 'dersai',
        name: 'DersAI',
        period: 'Şub 2025 - Haz 2025',
        description:
          'Öğrencilerin ders materyallerini dijitalleştirerek öğrenme verimliliğini artırmayı hedefleyen akıllı mobil uygulama. OCR ve yapay zekâ kullanarak metin çıkarımı ve düzenleme yapıyor.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'OCR', 'AI API', 'Firestore'],
        highlights: [
          'Çapraz platform Flutter geliştirme',
          'Firebase Authentication ve Firestore entegrasyonu',
          'OCR ile metin çıkarımı ve yapay zekâ destekli düzenleme',
          'Ses girişi ile not alma özelliği',
          'Akıllı içerik sınıflandırma sistemi',
        ],
      },
      {
        id: 'image-style-transfer',
        name: 'Image Style Transfer',
        period: 'Nis 2024 - Tem 2024',
        description:
          'Neural style transfer tekniği ile referans görsellerin artistik stilini statik galeri görsellerine veya canlı kamera görüntülerine aktaran AI tabanlı görüntü işleme uygulaması.',
        technologies: ['PyTorch', 'CNN', 'VGG', 'OpenCV', 'PIL', 'NumPy', 'Matplotlib'],
        highlights: [
          'Önceden eğitilmiş VGG tabanlı CNN mimarisi kullanımı',
          'Canlı kamera desteği ve statik görsel işleme',
          'Çoklu stil girişi ve ölçeklenebilir çözünürlük desteği',
          'PyTorch ile model tanımlama ve optimizasyon',
        ],
      },
      {
        id: 'visionary-mockup',
        name: 'VisionaryMockUP',
        period: 'Kas 2023 - Şub 2024',
        description:
          'YOLO kullanarak canlı video akışında t-shirt tespit eden ve önceden tasarlanmış grafikleri otomatik olarak üzerine yerleştiren gerçek zamanlı bilgisayarla görme sistemi.',
        technologies: ['YOLO', 'OpenCV', 'Python', 'Roboflow', 'Computer Vision'],
        highlights: [
          'Roboflow ile özel t-shirt veri seti toplama ve etiketleme',
          'YOLOv8 modeli ile gerçek zamanlı nesne tespiti',
          'OpenCV ile geometrik dönüşüm ve perspektif düzeltme',
          'Dinamik grafik bindirme altyapısı geliştirme',
        ],
      },
    ],
    moreOnGithub: 'GitHub\'da daha fazla proje',
  },

  recent: {
    title: '2025 sonrası: yapay zekâyla çalışma',
    intro:
      '2025 sonundan beri kodu çoğunlukla ben yazmıyorum. Neyin, kimin için yapılacağını seçiyorum, “bitti”yi makinenin koşabildiği testlere bağlıyorum, kullandığım işlerde testin kaçırdığını yakalıyorum. Bu bölümdeki her işte benim payım ve yapay zekânın payı yan yana yazıyor.',
  },

  how: {
    title: 'Nasıl çalışıyorum',
    intro: 'İlk ikisi her kod işimde var. Üçüncüsünü yaptığım işler en sağlam çıkanlar. Dördüncüsü en zayıf yerim.',
    steps: [
      {
        title: 'İşi tanımla',
        body: 'Kimin için, hangi sorun, neyin dışarıda kalacağı. Tepsi\'de üçü de kod yazılmadan belliydi: ev hanımları, dağılıp unutulan tarifler, satış yok.',
      },
      {
        title: '“Bitti”yi kapıya bağla',
        body: 'Kod işlerimde “bitti”, makinenin koşabildiği kontrollerin geçmesidir. Kapı geçmeden bitti sayılmaz şartını ben koyarım; kapıları çoğunlukla yapay zekâ önerir ve yazar, onayı ben veririm. Tepsi\'de hedefler işten önce donduruldu, sonradan hiçbir eşik düşürülmedi.',
      },
      {
        title: 'Kendin kullan, hatayı yakala',
        body: 'Testin görmediğini kullanırken görürüm: turnuva PDF\'lerinde yanlış çekilmiş maç tarihlerini, yeni başlayan biri için fazla karmaşık bir panoyu, Unity sahnesinde tutarsız görünen pencereleri.',
      },
      {
        title: 'Yayınla',
        body: 'Son iki buçuk ayda açtığım yaklaşık 20 projeden yalnız birinin yayımlanmış sürümü var: ytmp3pldl v1.0.0. Tepsi\'nin sunucu kurulumu ve alan adı hâlâ bende bekliyor.',
        open: true,
      },
    ],
    proofs: [
      {
        value: '500+',
        label: '15\'ten fazla repoda yönettiğim commit',
        date: 'Ağu-Kas 2026',
      },
      {
        value: '~20',
        label: 'Son iki buçuk ayda açtığım proje',
        date: 'Ağu-Kas 2026',
      },
      {
        value: '40.000',
        label: 'Devre Okuyucu için ürettiğim sentetik eğitim örneği',
        date: '10 Kas 2026',
      },
      {
        value: '~8 saat',
        label: 'ytmp3pldl: ilk istekten herkese açık v1.0.0 sürümüne',
        date: '30-31 Eki 2026',
      },
    ],
    note: 'Bu bölümdeki işlerin kodunu yapay zekâ yazdı. Bu yüzden “geliştirdim” demiyorum; “tanımladım, yönettim, testle doğruladım” diyorum. Yukarıdaki Projeler bölümü ve 2025 öncesi kod benim elimden çıktı.',
  },

  work: {
    title: 'Seçilmiş işler',
    intro:
      'Kanıttaki her rakamın tarihi yanında yazılı. Bağlantı yalnız herkese açık olan işte var; ötekiler yerelde ya da teslim edildiği kişide duruyor.',
    items: [
      {
        id: 'oyun-yolculugu',
        name: 'Oyun Yolculuğu',
        track: 'ai',
        status: 'Yerelde çalışıyor, yayında değil',
        period: 'Kas 2026',
        problem:
          'Yapay zekâyla oyun yapmayı hiç bilmeyen birine adım adım öğreten bir rehber ve Claude Code ile çalışırken tarayıcıda canlı güncellenen bir pano. Rehberin işlediğini göstermek için küçük bir web oyunu, Hex-Zar web, rehberin adımlarıyla baştan yapıldı.',
        mine: [
          'Fikri ve kitleyi koydum: “…hiç bilmeyen biri de buradan bakıp ha böyle oyun yapacakmışım diyebilsin” (5 Kas 2026).',
          'Rehberin öğreteceği şeyi seçtim: kodun kendisinden çok, neyin neden ve nerede yapıldığı.',
          'Panoyu kullanıp geri çevirdim: yeni başlayan biri için fazla karmaşıktı (7 Kas 2026). Pano yeniden kuruldu.',
          'Örnek oyun olarak Hex-Zar\'ın küçük web sürümünü seçtim.',
        ],
        ai: [
          'Rehber metni, pano, Claude Code kancaları ve testlerin tamamı.',
          'Örnek yolculuktaki öğrenci promptları ve oyunun görsel stil kararı da yapay zekâ oturumlarından geldi.',
        ],
        evidence: [
          '48 commit · 5-7 Kas 2026',
          '88/88 test, K1-K7 kapıları PASS · 7 Kas 2026',
          'Örnek oyun: 150 oyun testi + kural metnini davranışa karşı sınayan 80 test · 6 Kas 2026',
          'Gerçek kullanıcı testi: henüz yok',
        ],
        featured: true,
      },
      {
        id: 'ytmp3pldl',
        name: 'ytmp3pldl v1.0.0',
        track: 'ai',
        status: 'Yayında, v1.0.0',
        period: 'Eki 2026',
        problem:
          'Tek bilgisayarda çalışan bir Python indirme betiğini, Python kurulu olmayan başka Windows bilgisayarlara kurulabilen ve kendini güncel tutan bir uygulamaya çevirmek. Vaka, ürünün kendisinden çok paketleme ve güncelleme işi.',
        mine: [
          'Betiği kurulumlu bir uygulamaya çevirme kararı.',
          'Uygulamanın yeni sürümünü GitHub\'dan kendisinin kontrol etmesi fikri.',
          'Kurulumu kendi bilgisayarımda denedim, yayın onayını ben verdim.',
          'Gerçek kullanımda denedim: iki oynatma listesi indirildi.',
        ],
        ai: [
          'Inno Setup kurulumu, gömülü çalışma ortamı ve indirme motorunun SHA256 doğrulamalı kendini güncellemesi. Kodun tamamı Claude Code\'dan.',
        ],
        evidence: [
          '25 commit · 30-31 Eki 2026',
          'İlk istekten herkese açık sürüme ~8 saat · 30-31 Eki 2026',
          'Kabul kapısı PASS, GitHub release v1.0.0 · 31 Eki 2026',
        ],
        link: {
          label: 'GitHub: EmreBHCC/ytmp3pldl',
          href: 'https://github.com/EmreBHCC/ytmp3pldl',
        },
      },
      {
        id: 'cihs',
        name: 'cihs: Claude Code kullanım denetimi',
        track: 'ai',
        status: 'Kendi kurulumumda kullanılıyor; paylaşım paketi hazır, yayında değil',
        period: 'Eki-Kas 2026',
        problem:
          'Claude Code oturumlarım şişiyordu: turların yarısından fazlası 200 bin token bağlamın üstünde koşuyordu. Kullanımı ölçen, düzeltme öneren ve başka bir Claude kurulumuna taşınabilen bir denetim skill\'i gerekiyordu.',
        mine: [
          'İlk analizi ben istedim; her ölçümden sonra hangi düzeltmenin uygulanacağına ben karar verdim.',
          'Adını, kısayolunu ve “başka bir Claude\'a verildiğinde de çalışsın” şartını koydum.',
        ],
        ai: [
          'Ölçüm betiği, rapor şablonları, durum çubuğu ve skill metni.',
          'Bulguların yorumu ve düzeltme önerileri.',
        ],
        evidence: [
          '94 oturum ölçüldü · 25 Eki 2026',
          '400 bin token üstü tur: %19 → %0 · 25 → 29 Eki 2026',
          '200 bin token üstü tur: %54 → %28 · 25 Eki → 6 Kas 2026',
          'Düzelmeyen: en pahalı 10 oturumun payı %56 → %77 · 6 Kas 2026',
          'Paket, önceki bağlamı olmayan iki Sonnet alt ajanına uygulatıldı; çıkan 15 sorun kapatıldı · 25 Eki 2026',
        ],
      },
      {
        id: 'tepsi',
        name: 'Tepsi: tarif defteri',
        track: 'product',
        status: 'Yerelde çalışıyor; gerçek kullanıcı denemesinden önce bilerek kenara aldım',
        period: 'Eki-Kas 2026',
        problem:
          'Gördüğüm kadarıyla tarifler WhatsApp, kâğıt, telefon notu ve defter arasında dağılıyor. Ev hanımları için, tarifi tek yerde tutan ve çevrimdışı da çalışan bir defter.',
        mine: [
          'Gözlem: “…birbirlerine tarif soruyor ve birbirlerine verdiklerini sonra hatırlamakta da zorluk çekiyorlar” (22 Eki 2026).',
          'Kapsam: “satmak için değil ev hanımları için düşündüm” (22 Eki 2026). Tarif kullanıcının kalır.',
          'Çekirdek “bitti” tanımını onayladım: defter, WhatsApp\'tan tarif alma, hesapsız link paylaşma, PDF dışa aktarma.',
        ],
        ai: [
          'PWA\'nın tamamı: kural tabanlı tarif ayrıştırıcı, çevrimdışı çalışma, paylaşma linki, test kapıları. 9 commit, tek günde.',
          'Çekirdek “bitti” tanımının önerisi.',
        ],
        evidence: [
          '17/17 test kapısı PASS · 7 Kas 2026',
          'Yapay zekânın yazdığı 30 örnek tarifte doğruluk %100, ölçü hatası 0; ayrı bir oturumun önceden hazırladığı 10 tariflik gizli sette de %100 · 7 Kas 2026',
          'Gerçek WhatsApp mesajıyla deneme, sunucu kurulumu ve kullanıcı testi: yapılmadı',
        ],
      },
      {
        id: 'devre-okuyucu',
        name: 'Devre Okuyucu (bitirme projesi)',
        track: 'product',
        status: 'Sürüyor; henüz model sonucu yok',
        period: 'Eki 2026 - sürüyor',
        problem:
          'Görüntü okuyan yapay zekâ modellerinin devre şemasında elemanları bulup aralarındaki bağlantıları kaçırdığını gördüm; proje bunu ölçüyor. Hedef, şema görüntüsünü elemanları ve bağlantılarıyla netlist\'e çeviren bir sistem.',
        mine: [
          'Konuyu ben buldum: bir devre görselinin yanlış okunduğunu sonucun saçmalığından fark etmiştim.',
          'Öncelik: önce modelin kalitesi, yani elimizdeki modeli gidebileceği en iyi yere getirmek (13 Eki 2026).',
          'Kısıt: büyük modeller taban alınmayacak; maliyet ve bilgisayarımdaki 6 GB GPU yüzünden.',
          'Altı dış veri setinin dördünü ben buldum ve seçtim; el çizimi ancak iyi tanınırsa kapsama girecek.',
        ],
        ai: [
          'Ölçüm iskeleti, 40.000 örneklik sentetik veri üreticisi ve eğitim kodu (Florence-2, Pix2Struct, Qwen2-VL).',
          'Eğitim ayarlarını bana anlatan rehber. İnce ayar kavramlarını bu projede öğreniyorum.',
        ],
        evidence: [
          'Ölçüm kapıları 14/14 PASS · 10 Kas 2026',
          '40.000 sentetik örnek üretildi · 10 Kas 2026',
          '37 commit · 13 Eki - 10 Kas 2026',
          'Model sonucu: henüz yok, ilk eğitim aşaması yarıda',
        ],
      },
      {
        id: 'turnuva-pdf',
        name: 'Bilardo turnuvası maç programları',
        track: 'ai',
        status: 'Teslim edildi',
        period: 'Eki 2026',
        problem:
          'Bir bilardo turnuvasının maç programı ve oyuncu listeleri federasyonun sonuç portalında sayfa sayfa duruyordu. Gereken, il listesindeki ve yerel bir kulüpteki oyuncuların tek bakışta okuyacağı logolu PDF\'lerdi.',
        mine: [
          'Alanı bildiğim için çıktıyı kendim denetledim.',
          'Yapay zekânın iki hatasını yakaladım: iki grubun maç tarihleri yanlış çekilmişti, il listesindeki herkes kulübün oyuncusu sayılmıştı.',
          '13 oyuncuyu federasyon numaralarıyla kendim eşledim.',
        ],
        ai: ['Portaldan veriyi çekme, tabloya dökme ve logolu PDF düzeni.'],
        evidence: [
          '59 oyuncunun maç programı: il listesinden 46, kulüpten 13 · 28 Eki 2026',
          'Oyuncu listesi PDF\'leri · 22 Eki 2026',
          'Tek seferlik iş; tekrar kullanılabilir bir araç değil',
        ],
      },
    ],
  },

  games: {
    title: 'Oyun tasarımı',
    intro:
      'Oynanır bir Unity prototipi, çekirdeği çalışan bir tarım oyunu ve yalnız kâğıtta duran bir dünya. Her birinden iki tasarım kararı.',
    disclaimer:
      'Kod yapay zekânın, kararlar benim. Alıntılar o günkü promptlarımdan birebir; kısalttığım yer “…” ile işaretli, yazım düzeltilmedi.',
    items: [
      {
        id: 'hex-zar',
        name: 'Hex-Zar',
        status: 'Unity · v0.6 · yerelde, yayında değil',
        summary:
          'Altıgen tahtada iki kişilik taktik oyun: iki taraf dörder birimle karşılaşır, saldırı ve itme D&D 5e zarıyla çözülür, zemini olmayan yere itilen birim düşer. Kural çekirdeği Unity\'den ayrı test ediliyor; denge, iki basit yapay zekânın her tahtada oynadığı 2000 maçla ölçülüyor.',
        decisions: [
          {
            decision: 'Oyunun yeri: d20 zarı kalsın ama tempo ve derinlik satranç ile Polytopia arasında dursun.',
            quote: '…d20 haricinde satranç ve polytopia arasında bir yerde dursun istiyorum',
            date: '17 Eki 2026',
          },
          {
            decision: 'Arazi her maçın başında karşılıklı belirlenir; tekrar oynanabilirlik buradan gelir.',
            quote: '…oyuna her seferinde yeniden oynanabilirlik katar gibi hissediyorum',
            date: '17 Eki 2026',
          },
        ],
      },
      {
        id: 'laminel-farm',
        name: 'Laminel-Farm',
        status: 'Unity · ilk alt proje sürüyor · yayında değil',
        summary:
          'Zombi ve uzaylı tehdidi altındaki çok katlı bir apartmanda geçen, ışığa dayalı dikey tarım oyunu. Aynı bitki konduğu yere göre 2 saatte de 6 saatte de büyür; oyun bir yerleşim bulmacasına dayanır. Sahneyi Unity editöründe ben düzenliyorum.',
        decisions: [
          {
            decision: 'Önce oynanabilirlik: stil ve 3D model işi, oyunun oynanır olduğu görülene kadar tamamen ertelendi.',
            quote: '…önce oyun oynanılabilir mi test etmek için stilize ve model yapma işini şimdilik komple bırakalım',
            date: '12 Eki 2026',
          },
          {
            decision: 'Güneş isteyen bitkiler pencere kenarına mecbur. Orada yer az olduğu için yerleşim kararı her seferinde bir bedel taşır.',
            quote: '…güneş isteyen bitkiler mecbur cama yakın duracak',
            date: '12 Eki 2026',
          },
        ],
      },
      {
        id: 'kabuk',
        name: 'Kabuk',
        status: 'Yalnız tasarım · kod yok',
        summary:
          'Gökyüzünün yerinde insanların kendi yaptığı bir kabuğun durduğu bir dünyada geçen, D&D 5e SRD kurallarına dayanan izometrik aksiyon MMORPG tasarımı. Ana döngü: tehlikeli bölgeye gir, ganimeti sağ çıkar. 11 oyun ve 6 ekonomi kararı yazılı. Bu kararlar için birebir alıntı yok; kaynak, Eylül oturumlarının özet kaydı: seçenekleri yapay zekâ sundu, sınırı ben çizdim.',
        decisions: [
          {
            decision: 'Gerçek bir çok oyunculu video oyunu olacak; tek kişilik masa hikâyesi fikrinden döndüm. Aynı dünyada masa oyunu en sona kaldı.',
            date: '24 Eyl 2026',
          },
          {
            decision: 'Güç kalıcı seviyede birikmez, taşınan bir enerji çekirdeğinde durur: oyuncu baskına hangi çekirdekle gireceğini seçer, ölürse onu kaybeder.',
            date: '24 Eyl 2026',
          },
        ],
      },
    ],
  },

  skills: {
    title: 'Teknik yetenekler',
    intro:
      'Farklı programlama dilleri, framework\'ler ve teknolojilerde edinilmiş deneyimimi sürekli yeni projelerle güçlendiriyorum.',
    categories: [
      {
        title: 'Programlama dilleri',
        items: ['C/C++/C#', 'Java', 'Python', 'JavaScript', 'Dart', 'SQL', 'HTML/CSS', 'mikroC'],
      },
      {
        title: 'Framework & teknolojiler',
        items: ['Flutter', 'React', 'Bootstrap', 'TensorFlow', 'OpenCV', 'PyTorch', 'Firebase', 'Unity', 'Unreal Engine (temel)'],
      },
      {
        title: 'Yapay zekâ & ML',
        items: ['Computer Vision', 'YOLO', 'Neural Style Transfer', 'CNN mimarileri', 'Object Detection', 'Image Processing'],
      },
      {
        title: 'Veritabanı & backend',
        items: ['Firebase Firestore', 'SQL veritabanı tasarımı', 'RESTful API', 'Cloud Storage'],
      },
      {
        title: 'Geliştirme araçları',
        items: ['Git/GitHub', 'VS Code', 'Claude Code', 'Android Studio', 'Proteus', 'Roboflow'],
      },
      {
        title: 'Özel yetenekler',
        items: ['OOP', 'Takım çalışması', 'Problem çözme', 'Proje yönetimi', 'Mentorluk'],
      },
    ],
    aiTitle: 'Yapay zekâyla çalışma (2025 sonrası)',
    aiIntro:
      'Yapay zekâ ajanlarıyla çalışırken kazandığım beceriler. Her satırda bir seviye ve tek satır kanıt var.',
    levels: {
      hands: {
        label: 'Kendim yaparım',
        description: 'Karar, bilgi ya da iş benden çıkar; yapay zekâ olmadan da yaparım.',
      },
      directed: {
        label: 'Yöneterek yaptım',
        description: 'İşi tanımlayıp yapay zekâya yaptırdım; sonucu test edip kararı ben verdim.',
      },
      touched: {
        label: 'Dokundum',
        description: 'Denedim ya da ders düzeyinde kullandım; derinliğim sınırlı.',
      },
    },
    groups: [
      {
        title: 'Yapay zekâyı yönetme',
        items: [
          {
            name: 'Yapay zekâ çıktısını denetleme, hata yakalama',
            level: 'hands',
            evidence: 'Turnuva PDF\'lerindeki iki veri hatasını alanı bildiğim için yakaladım (22 ve 28 Eki 2026).',
          },
          {
            name: '“Bitti” şartını koyma ve onaylama',
            level: 'hands',
            evidence: 'Kapı geçmeden bitti sayılmaz şartını ben koyarım; kapı raporu geçince onayı ben veririm (Eki-Kas 2026).',
          },
          {
            name: 'Test kapısı ve ölçüm kodu yazdırma',
            level: 'directed',
            evidence: 'Kapıları çoğunlukla yapay zekâ önerir ve yazar: Tepsi, Oyun Yolculuğu, Devre Okuyucu (Eki-Kas 2026).',
          },
          {
            name: 'Çalışma düzeni: hafıza panoları, alt ajanlar, model seçimi',
            level: 'directed',
            evidence: 'Panolar fikri, alt ajan ilkesi (bilgi ana oturumda toplanır, ajanlar paralel çalışır) ve model bölüşümü (toplama Sonnet, yargı Opus) benden (Eki-Kas 2026).',
          },
          {
            name: 'MCP sunucusu kurma ve bağlama',
            level: 'directed',
            evidence: 'Unity MCP deposunu ben seçtim; kurulumu Claude Code yaptı, editördeki yapılandırmayı ben tamamladım (26 Eki 2026).',
          },
        ],
      },
      {
        title: 'Ürün ve oyun tasarımı',
        items: [
          {
            name: 'Kullanıcı gözleminden gereksinim, kullanılabilirlik eleştirisi',
            level: 'hands',
            evidence: 'Tepsi bir gözlemime dayanıyor (22 Eki); Oyun Yolculuğu panosunu yeni başlayan için fazla karmaşık bulup yeniden kurdurdum (7 Kas 2026).',
          },
          {
            name: 'Kapsam daraltma, öncelik koyma',
            level: 'hands',
            evidence: 'Devre Okuyucu\'da önceliği modelin kalitesine, kısıtı 6 GB GPU\'ya göre koydum (13 Eki 2026).',
          },
          {
            name: 'Oyun mekaniği, sistem tasarımı, oyun analizi',
            level: 'hands',
            evidence: 'Hex-Zar ve Laminel-Farm\'da tarihli alıntılarla yukarıda; oyun inceleme çerçevesinin ilk 8 kategorisini de ben koydum (Ağu 2026).',
          },
        ],
      },
      {
        title: 'Yapay zekâyla kurulan yığınlar',
        items: [
          {
            name: 'Web, masaüstü ve mobil (PWA, Node, FastAPI, Windows kurulumu, Kotlin)',
            level: 'directed',
            evidence: 'Tepsi PWA, Oyun Yolculuğu (Node), data_annotate (FastAPI), ytmp3pldl kurulumu, yaşlılar için Android başlatıcı easy-phone (Ağu-Kas 2026).',
          },
          {
            name: 'C# (Unity)',
            level: 'directed',
            evidence: 'Laminel-Farm ve Hex-Zar: 57 ve 53 commit (Eki-Kas 2026).',
          },
          {
            name: 'Unity editöründe sahne düzenleme',
            level: 'hands',
            evidence: 'Laminel-Farm\'da odayı ve pencereleri editörde kendim düzenledim (12 Eki 2026).',
          },
          {
            name: 'Görüntü-dil modeli ince ayarı (Florence-2, Pix2Struct, Qwen2-VL)',
            level: 'directed',
            evidence: 'Devre Okuyucu\'nun veri üreticisi, ölçümü ve eğitim kodu; kavramları bu projede öğreniyorum, sonuç henüz yok (Eki-Kas 2026).',
          },
          {
            name: 'Veri seti seçimi ve kalite yargısı',
            level: 'hands',
            evidence: 'Devre Okuyucu\'nun altı dış veri setinin dördünü ben buldum ve seçtim (21 Eki 2026).',
          },
        ],
      },
    ],
    languages: {
      title: 'Dil yetkinlikleri',
      items: [
        { name: 'Türkçe', note: 'Ana dil.' },
        { name: 'İngilizce', note: 'B1 seviye (okuma, yazma, dinleme).' },
      ],
    },
  },

  experience: {
    title: 'Deneyim & aktiviteler',
    intro: 'İş deneyimlerim ve topluluk çalışmalarındaki rollerim.',
    workTitle: 'İş deneyimi',
    items: [
      {
        role: 'Stajyer',
        org: '4B Arıcılık Teknolojileri A.Ş.',
        period: 'Tem 2025 - Ağu 2025',
        location: 'Bilecik',
        tag: 'Zorunlu staj',
        description: 'Birinci zorunlu staj programında endüstriyel deneyim kazandım.',
        points: [
          'Şirket tanıtımı için tek sayfalık React sitesini yaptım ve GitHub üzerinden yayına aldım.',
          'Mobil uygulamanın giriş, kayıt, profil, bildirim ve ana sayfa ekranlarını tasarlayıp arka uca bağlaması için ekip arkadaşıma devrettim.',
          'YOLOv8 ile arılarda varroa ve kovanda ana arı yüksüğü tespiti modelleri eğittim; model kapalı yüksükleri kaçırınca veri setini iki sınıfa yeniden etiketledim.',
          'Takım çalışması ve proje yönetimi deneyimi edindim; endüstriyel standartları ve iş süreçlerini yakından gözlemledim.',
        ],
      },
      {
        role: 'Öğrenci personeli',
        org: 'Bilecik Şeyh Edebali Üniversitesi, BT Departmanı',
        period: 'Nis 2025 - Haz 2025',
        location: 'Bilecik',
        tag: 'Kısa dönem',
        description:
          'Kampüs genelinde kritik bilişim altyapısını desteklemek ve sürdürülebilir hale getirmek için teknik ekiple birlikte çalıştım.',
        points: [
          'Personel ve laboratuvar bilgisayarlarının grup halinde onarım ve bakım çalışmalarında yer aldım.',
          'Sistem imajlama, formatlama ve işletim sistemi kurulumlarına dair sorunları teşhis edip çözdüm.',
          'Gerekli ağ portlarını aktive ederek üniversitenin dahili sistemlerine entegrasyon sağladım.',
          'Donanım değişimleri (RAM, SSD, güç kaynakları) ve çevre birimi kurulumları gerçekleştirdim.',
          'Üniversite personeline teknik destek vererek sistem performansını iyileştirdim.',
        ],
      },
    ],
    educationTitle: 'Eğitim',
    education: [
      {
        role: 'Bilgisayar Mühendisliği, lisans',
        org: 'Bilecik Şeyh Edebali Üniversitesi',
        period: '2021 - devam ediyor',
        location: 'Bilecik',
        points: ['Son sınıf. Bitirme projesi: Devre Okuyucu (2025 sonrası bölümünde).'],
      },
    ],
    communityTitle: 'Topluluk & liderlik',
    community: [
      {
        role: 'Kurucu üye',
        org: 'BBCLUB',
        period: 'May 2025 - devam ediyor',
        location: 'Bilecik',
        description:
          'Bilgisayar mühendisliği öğrencilerini akran öğrenimi yoluyla güçlendirmeye odaklanan öğrenci liderliğindeki bir girişimin kurucu üyesiyim.',
        points: [
          'Öğrenciler arasında sürekli öğrenmeyi destekleyen sürdürülebilir bir mentorluk yapısı tasarladım.',
          'Haftalık oturumlar, kodlama atölyeleri ve iş birliğine dayalı projeler organize ettim.',
          '50\'den fazla üyenin teknik ve akademik gelişimine katkı sağladım.',
          'Büyüme odaklı ve kapsayıcı bir topluluk kültürü oluşturulmasına liderlik ettim.',
        ],
        link: { label: 'bbclub.space', href: 'https://bbclub.space' },
      },
    ],
  },

  contact: {
    title: 'İletişim',
    body: 'Yazılım geliştirme, yapay zekâ / makine öğrenmesi ve mobil uygulama alanlarında iş, staj ya da yarı zamanlı fırsatlar için yazabilirsiniz. Uzaktan ya da Kayseri\'de çalışabilirim.',
    emailLabel: 'E-posta',
  },

  footer: {
    colophon: 'Bu siteyi de aynı yolla yaptım: kodu ve metni yapay zekâ yazdı, ben yönettim.',
    backToTop: 'Başa dön',
  },
};
