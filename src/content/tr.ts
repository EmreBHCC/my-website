import type { SiteContent } from './types';

// Her iddianın kaynağı: docs/icerik-kaynaklari.md (iddia · vault dosyası/bölümü · tarih).
// Alıntılar Emre'nin promptlarından birebir; kısaltılan yer "…" ile işaretli, yazım düzeltilmedi.

export const tr: SiteContent = {
  meta: {
    title: 'Emre Bahçeci · İşi tanımlıyorum, yapay zekâyla kuruyorum',
    description:
      'Bilgisayar mühendisliği son sınıf öğrencisi. Yapay zekâyla kurduğum, testle doğruladığım işler; her birinde benim payım ve yapay zekânın payı ayrı yazılı.',
  },

  nav: {
    how: 'Nasıl çalışıyorum',
    work: 'Seçilmiş işler',
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
      note: 'Mekanik ve sistem kararları benim, kod yapay zekânın.',
    },
  },

  hero: {
    eyebrow: 'Kayseri · Bilgisayar mühendisliği, son sınıf · Uzaktan ya da yerinde junior iş ve staj',
    name: 'Emre Bahçeci',
    headline: ['İşi tanımlıyorum,', 'yapay zekâyla kuruyorum,', 'testle doğruluyorum.'],
    lede:
      'Kodu çoğunlukla ben yazmıyorum. Neyin, kimin için yapılacağını seçiyorum, "bitti"yi makinenin koşabildiği testlere bağlıyorum, sonucu kendim kullanıp hatayı yakalıyorum. Aşağıdaki her işte benim payım ve yapay zekânın payı yan yana yazıyor.',
    cta: {
      github: 'GitHub',
      cv: 'CV',
      contact: 'İletişim',
    },
  },

  how: {
    title: 'Nasıl çalışıyorum',
    intro: 'Dört adım. İlk üçünü her işte yapıyorum; dördüncüsü en zayıf yerim.',
    steps: [
      {
        title: 'İşi tanımla',
        body: 'Kimin için, hangi sorun, neyin dışarıda kalacağı. Tarif uygulaması Tepsi, gördüğüm bir şeyin üstüne kuruldu: tarifler WhatsApp, kâğıt ve telefon notları arasında dağılıyor, verilen tarif sonra hatırlanmıyor.',
      },
      {
        title: '"Bitti"yi kapıya bağla',
        body: 'Kod işlerimde "bitti", makinenin koşabildiği kontrollerin geçmesidir: "17/17 kapı geçti" gibi. Kontrolleri çoğunlukla yapay zekâ yazar; şartı ben koyarım, onayı ben veririm. Tepsi\'de hedefler işten önce donduruldu, sonradan hiçbir eşik düşürülmedi.',
      },
      {
        title: 'Kendin kullan, hatayı yakala',
        body: 'Testin görmediğini kullanırken görürüm: turnuva PDF\'lerinde yanlış çekilmiş maç tarihlerini, yeni başlayan biri için fazla karmaşık bir panoyu, Unity sahnesinde tutarsız görünen pencereleri.',
      },
      {
        title: 'Yayınla',
        body: 'En zayıf adımım. Son iki buçuk ayda açtığım yaklaşık 20 projeden yalnız birinin yayımlanmış sürümü var (ytmp3pldl v1.0.0). Tepsi\'nin sunucuya kurulumu ve alan adı hâlâ bende bekliyor.',
      },
    ],
    proofs: [
      {
        value: '500+',
        label: '15\'ten fazla repoda yönettiğim commit; kodu yapay zekâ yazdı',
        date: 'Ağu-Kas 2026',
      },
      {
        value: '17/17',
        label: 'Tepsi çekirdeğinde geçen test kapısı',
        date: '7 Kas 2026',
      },
      {
        value: '88/88',
        label: 'Oyun Yolculuğu\'nda geçen test',
        date: '7 Kas 2026',
      },
      {
        value: '~8 saat',
        label: 'ytmp3pldl: ilk istekten herkese açık v1.0.0 sürümüne',
        date: '30-31 Eki 2026',
      },
      {
        value: '1 / ~20',
        label: 'yayımlanmış sürümü olan proje',
        date: '11 Kas 2026',
      },
    ],
    note: 'Bu sitedeki işlerin kodunu yapay zekâ yazdı. Bu yüzden "geliştirdim" demiyorum; "tanımladım, yönettim, testle doğruladım" diyorum. Elle yazdığım kod 2025 ve öncesine ait; Beceriler bölümünde ayrı işaretli.',
  },

  work: {
    title: 'Seçilmiş işler',
    intro:
      'Altı iş. Her birinde sorun, benim payım, yapay zekânın payı ve kanıt var; kanıttaki her rakamın tarihi yazılı. Bağlantı yalnız herkese açık olan işte.',
    items: [
      {
        id: 'oyun-yolculugu',
        name: 'Oyun Yolculuğu + örnek Hex-Zar web oyunu',
        track: 'ai',
        status: 'Yerelde çalışıyor, yayında değil',
        period: 'Kas 2026',
        problem:
          'Yapay zekâyla oyun yapmayı hiç bilmeyen birine adım adım öğreten bir rehber ve Claude Code ile çalışırken tarayıcıda canlı güncellenen bir pano. Rehberin işlediğini göstermek için küçük bir web oyunu, Hex-Zar web, rehberin adımlarıyla baştan yapıldı.',
        mine: [
          'Fikri ve kitleyi koydum: "…hiç bilmeyen biri de buradan bakıp ha böyle oyun yapacakmışım diyebilsin" (5 Kas 2026).',
          'Rehberin neyi öğreteceğine karar verdim: hangi kodun yazılacağını değil, neyin neden ve nerede yapıldığını.',
          'Panoyu kullanıp geri çevirdim: yeni başlayan biri için fazla karmaşıktı (7 Kas 2026). Pano yeniden kuruldu.',
          'Örnek oyun olarak Hex-Zar\'ın küçük web sürümünü seçtim.',
        ],
        ai: [
          'Rehber metni, pano, Claude Code kancaları ve testlerin tamamı.',
          'Örnek yolculuktaki öğrenci promptları ve oyunun görsel stil kararı. Bunları ben değil, yapay zekâ oturumları verdi.',
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
          'Tek bilgisayarda çalışan bir Python indirme betiğini, Python kurulu olmayan başka Windows bilgisayarlara kurulabilen ve kendini güncel tutan bir uygulamaya çevirmek. Buradaki vaka ürünün kendisi değil, paketleme ve güncelleme işi.',
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
          'Adını, kısayolunu ve "başka bir Claude\'a verildiğinde de çalışsın" şartını koydum.',
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
          'Paket 2 temiz Claude kurulumunda denendi · 25 Eki 2026',
        ],
      },
      {
        id: 'tepsi',
        name: 'Tepsi: tarif defteri',
        track: 'product',
        status: 'Yerelde çalışıyor, yayında değil',
        period: 'Eki-Kas 2026',
        problem:
          'Ev hanımları tarifleri WhatsApp\'ta, kâğıtta, telefon notlarında ve defterlerde tutuyor; birbirine verdiği tarifi sonra hatırlamakta zorlanıyor. Satış için değil, onlar için çevrimdışı da çalışan bir tarif defteri.',
        mine: [
          'Gözlem: "…birbirlerine tarif soruyor ve birbirlerine verdiklerini sonra hatırlamakta da zorluk çekiyorlar" (22 Eki 2026). Tasarımın omurgası bu.',
          'Kapsam: "satmak için değil ev hanımları için düşündüm" (22 Eki 2026). Tarif kullanıcının kalır.',
          'Çekirdek "bitti" tanımını onayladım: defter, WhatsApp\'tan tarif alma, hesapsız link paylaşma, PDF dışa aktarma.',
          'Gerçek kullanıcı denemesinden önce işi bilerek kenara aldım.',
        ],
        ai: [
          'PWA\'nın tamamı: kural tabanlı tarif ayrıştırıcı, çevrimdışı çalışma, paylaşma linki, test kapıları. 9 commit, tek günde.',
        ],
        evidence: [
          '17/17 test kapısı PASS · 7 Kas 2026',
          '30 tariflik ölçüm setinde doğruluk %100, ölçü hatası 0; gizli sette de %100 · 7 Kas 2026',
          'Sunucuya kurulum ve gerçek kullanıcı testi: yapılmadı',
        ],
      },
      {
        id: 'devre-okuyucu',
        name: 'Devre Okuyucu (bitirme projesi)',
        track: 'product',
        status: 'Sürüyor; henüz model sonucu yok',
        period: 'Eki 2026 - sürüyor',
        problem:
          'Görüntü okuyan yapay zekâ modelleri devre şemasındaki elemanları bulabiliyor ama aralarındaki bağlantıları kaçırıyor. Şema görüntüsünden elemanları ve bağlantıları çıkarıp netlist\'e çeviren bir sistem.',
        mine: [
          'Konu kendi yaşadığım bir şeyden çıktı: yapay zekâ bir devre görselini yanlış okumuştu, sonucun saçma olmasından fark ettim.',
          'Eksen: teslim takvimi değil, elimizdeki modeli en iyi yere getirmek (13 Eki 2026).',
          'Kısıt: büyük modeller taban alınmayacak; maliyet ve bilgisayarımdaki 6 GB GPU yüzünden.',
          'Dış veri setlerini ben buldum ve seçtim; el çizimi ancak iyi tanınırsa kapsama girecek.',
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
          'Yerel bir bilardo kulübünün oyuncuları için turnuva maç programı ve oyuncu listeleri federasyonun sonuç portalında sayfa sayfa duruyordu. Gereken, tek bakışta okunan logolu PDF\'lerdi.',
        mine: [
          'Alanı bildiğim için çıktıyı oyuncu oyuncu denetledim.',
          'Yapay zekânın iki hatasını yakaladım: iki grubun maç tarihleri yanlış çekilmişti, il listesindeki herkes kulübün oyuncusu sayılmıştı.',
          '13 oyuncuyu federasyon numaralarıyla kendim eşledim.',
        ],
        ai: ['Portaldan veriyi çekme, tabloya dökme ve logolu PDF düzeni.'],
        evidence: [
          '59 oyuncunun maç programı (46 + 13) · 28 Eki 2026',
          'Oyuncu listesi PDF\'leri · 22 Eki 2026',
          'Tek seferlik iş; tekrar kullanılabilir bir araç değil',
        ],
      },
    ],
  },

  games: {
    title: 'Oyun tasarımı',
    intro:
      'Üç oyun, üç ayrı olgunlukta: oynanır bir Unity prototipi, çekirdeği çalışan bir tarım oyunu ve henüz yalnız kâğıtta duran bir dünya. Burada gösterdiğim kod değil, tasarım kararları.',
    disclaimer:
      'Kod yapay zekânın, kararlar benim. Alıntılar o günkü promptlarımdan birebir; kısalttığım yer "…" ile işaretli, yazım düzeltilmedi.',
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
          {
            decision: 'Derinlik önce stratejide aranır; yapay zekâ bana sormadan mekanik eklemez.',
            quote: '…daha stratejik bir oynanış arıyorum ama bana sormadan bir şey ekleme',
            date: '17 Eki 2026',
          },
        ],
      },
      {
        id: 'laminel-farm',
        name: 'Laminel-Farm',
        status: 'Unity · ilk alt proje sürüyor · yayında değil',
        summary:
          'Zombi ve uzaylı tehdidi altındaki çok katlı bir apartmanda, ışığın her şey olduğu dikey tarım oyunu. Aynı bitki konduğu yere göre 2 saatte de 6 saatte de büyür; oyunun kalbi yerleşim bulmacası. Sahneyi Unity editöründe ben kuruyorum, kodu yapay zekâ yazıyor.',
        decisions: [
          {
            decision: 'Önce oynanabilirlik: stil ve 3D model işi, oyunun oynanır olduğu görülene kadar tamamen ertelendi.',
            quote: '…önce oyun oynanılabilir mi test etmek için stilize ve model yapma işini şimdilik komple bırakalım',
            date: '11 Eki 2026',
          },
          {
            decision: 'Güneş isteyen bitkiler pencere kenarına mecbur. Orada yer az olduğu için yerleşim kararı her seferinde bir bedel taşır.',
            quote: '…güneş isteyen bitkiler mecbur cama yakın duracak',
            date: '12 Eki 2026',
          },
          {
            decision: 'Kışın ekilecek şey azalınca oyuncunun eli boş kalmasın: yalnız kışa özel bir etkinlik.',
            quote: 'bu arada kış için dikilecek şeyler azaldığından sadece kışın yapılabilecek etkinlik bulmalıyız bence',
            date: '12 Eki 2026',
          },
        ],
      },
      {
        id: 'kabuk',
        name: 'Kabuk',
        status: 'Yalnız tasarım · kod yok',
        summary:
          'Gökyüzünün yerinde insanların kendi yaptığı bir kabuğun durduğu bir dünyada geçen, D&D 5e SRD kurallarına dayanan izometrik aksiyon MMORPG tasarımı. Ana döngü: tehlikeli bölgeye gir, ganimeti sağ çıkar. 11 oyun ve 6 ekonomi kararı yazılı.',
        decisions: [
          {
            decision: 'Tek kişilik bir masa hikâyesi değil, gerçek bir çok oyunculu video oyunu. Aynı dünyada masa oyunu en sona kaldı.',
            date: '24 Eyl 2026',
          },
          {
            decision: 'Seviye kalıcı bir tırmanış değil. Güç, taşınan bir enerji çekirdeğinde durur; oyuncu baskına hangi çekirdekle gireceğini seçer, ölürse o çekirdeği kaybeder.',
            date: '24 Eyl 2026',
          },
          {
            decision: 'Eşya seviyesi kasmak yok. Sıradan eşyalar birbirinin üstü değil alternatifi; güç, nadir kadim eşyalardan ve çekirdekten gelir.',
            date: '24 Eyl 2026',
          },
        ],
      },
    ],
  },

  skills: {
    title: 'Beceriler',
    intro:
      'Üç seviye, yüzde yok. Her satırın yanında tek satır kanıt var. Yalnız eski CV\'mde geçen ve başka kanıtı olmayan kalemleri buraya almadım.',
    levels: {
      hands: {
        label: 'Elle bilirim',
        description: 'Kendim yaparım: karar, bilgi ya da iş benden çıkar; yapay zekâsız da yaparım.',
      },
      directed: {
        label: 'Yöneterek yaptım',
        description: 'Yapay zekâya yaptırdım: işi tanımladım, test ettim, karar verdim. Kodu ben yazmadım.',
      },
      touched: {
        label: 'Dokundum',
        description: 'Denedim ya da ders düzeyinde kullandım; derinliğim sınırlı.',
      },
    },
    groups: [
      {
        title: 'Yapay zekâyla çalışma',
        items: [
          {
            name: 'Yapay zekâ çıktısını denetleme, hata yakalama',
            level: 'hands',
            evidence: 'Turnuva PDF\'lerinde yanlış çekilen grup tarihlerini ve yanlış kulübe atanan oyuncuları yakaladım (22 ve 28 Eki 2026).',
          },
          {
            name: 'İş tanımı ve test kapısıyla teslim',
            level: 'directed',
            evidence: 'Kapı şartını ben koyarım, kapıları yapay zekâ yazar: Tepsi 17/17, Oyun Yolculuğu K1-K7 (7 Kas 2026).',
          },
          {
            name: 'Alt ajanlarla paralel çalışma, model seçimi',
            level: 'directed',
            evidence: 'Hex-Zar v0.6: sekiz görev alt ajanlara bölündü, sonra genel inceleme (26 Eki 2026).',
          },
          {
            name: 'Bağlam ve hafıza düzeni (CLAUDE.md, skill, durum panoları)',
            level: 'directed',
            evidence: 'Panolar fikri benden: "daha az token tüketimi ile daha iyi sonuçlar alırız" (25 Eki 2026).',
          },
          {
            name: 'MCP sunucusu kurma ve bağlama',
            level: 'hands',
            evidence: 'Unity MCP\'yi depo adresinden seçip editörde yapılandırdım (26 Eki 2026).',
          },
        ],
      },
      {
        title: 'Ürün ve oyun tasarımı',
        items: [
          {
            name: 'Kullanıcı gözleminden gereksinim çıkarma',
            level: 'hands',
            evidence: 'Tepsi\'nin tasarımı, tariflerin nerede kaybolduğuna dair gözlemime dayanıyor (22 Eki 2026).',
          },
          {
            name: 'Kullanılabilirlik eleştirisi',
            level: 'hands',
            evidence: 'Oyun Yolculuğu panosunu yeni başlayan için fazla karmaşık bulup yeniden kurdurdum (7 Kas 2026).',
          },
          {
            name: 'Kapsam daraltma, eksen koyma',
            level: 'hands',
            evidence: 'Devre Okuyucu: teslim takvimi yerine "modeli en iyi yere getirmek" eksenini koydum (13 Eki 2026).',
          },
          {
            name: 'Oyun mekaniği ve sistem tasarımı',
            level: 'hands',
            evidence: 'Hex-Zar, Laminel-Farm ve Kabuk\'un kilit kararları benim; yukarıda tarihli alıntılarla.',
          },
          {
            name: 'Oyun inceleme çerçevesi',
            level: 'hands',
            evidence: 'Çerçevenin ilk 8 kategorisini ben koydum; 159 incelemenin metnini yapay zekâ yazdı (Ağu-Kas 2026).',
          },
        ],
      },
      {
        title: 'Yazılım ve sistem',
        items: [
          {
            name: 'Git ve GitHub (dal, birleştirme, etiket)',
            level: 'hands',
            evidence: '2022\'den beri GitHub\'dayım; dal açma, birleştirme ve sürüm etiketi kararlarını ben veririm.',
          },
          {
            name: 'React (temel)',
            level: 'hands',
            evidence: 'Stajda şirket tanıtım sitesini React ile yapıp GitHub üzerinden yayına aldım (Tem 2025).',
          },
          {
            name: 'Web: PWA, vanilla JavaScript, Node',
            level: 'directed',
            evidence: 'Tepsi PWA ve bağımlılıksız Node ile yazılan Oyun Yolculuğu (Kas 2026).',
          },
          {
            name: 'Python',
            level: 'directed',
            evidence: 'Devre Okuyucu\'nun veri üreticisi, ölçüm ve eğitim kodu (Eki-Kas 2026).',
          },
          {
            name: 'Arka uç (FastAPI, sunucu fonksiyonu)',
            level: 'directed',
            evidence: 'data_annotate (FastAPI) ve Tepsi\'nin paylaşım fonksiyonu; elle arka uç yazmadım.',
          },
          {
            name: 'Unity editörü',
            level: 'hands',
            evidence: 'Laminel-Farm\'da odayı ve pencereleri editörde kendim düzenledim (12 Eki 2026).',
          },
          {
            name: 'C# (Unity)',
            level: 'directed',
            evidence: 'Laminel-Farm 57, Hex-Zar 53 commit; kodu yapay zekâ yazdı (Eki-Kas 2026).',
          },
          {
            name: 'Windows paketleme ve otomatik güncelleme',
            level: 'directed',
            evidence: 'ytmp3pldl v1.0.0: Inno Setup kurulumu, SHA256 doğrulamalı güncelleme (30 Eki 2026).',
          },
          {
            name: 'Android (Kotlin)',
            level: 'directed',
            evidence: 'easy-phone, yaşlılar için Android başlatıcı: 15/15 kapı; gerçek kullanıcıda denenmedi (16 Eyl 2026).',
          },
          {
            name: 'Donanım, işletim sistemi kurulumu, teknik destek',
            level: 'hands',
            evidence: 'Üniversite bilgi işleminde imaj, format, RAM/SSD/güç kaynağı değişimi (Nis-Haz 2025).',
          },
          {
            name: 'Flutter / Dart',
            level: 'touched',
            evidence: '2025\'te DersAI: Flutter + Firebase, iki herkese açık repo. Bugün paslı.',
          },
          {
            name: 'Sunucuya kurulum ve alan adı',
            level: 'touched',
            evidence: 'Stajda bir siteyi yayına aldım; Tepsi\'nin kurulumu hâlâ bende bekliyor.',
          },
          {
            name: 'Java',
            level: 'touched',
            evidence: '2022\'de çevrim içi bir Java kampının alıştırmaları; herkese açık repo.',
          },
        ],
      },
      {
        title: 'Makine öğrenmesi ve görüntü',
        items: [
          {
            name: 'YOLO ile nesne tespiti (veri, etiket, eğitim, değerlendirme)',
            level: 'hands',
            evidence: 'Stajda model kapalı yüksükleri kaçırınca veri setini iki sınıfa yeniden etiketledim (Tem-Ağu 2025).',
          },
          {
            name: 'Veri seti seçimi ve kalite yargısı',
            level: 'hands',
            evidence: 'Devre Okuyucu\'nun dış veri setlerinden dördünü ben buldum ve seçtim (21 Eki 2026).',
          },
          {
            name: 'Görüntü-dil modeli ince ayarı (Florence-2, Pix2Struct, Qwen2-VL)',
            level: 'directed',
            evidence: 'Kavramları bu projede öğreniyorum; ilk eğitim aşaması sürüyor, sonuç yok (Kas 2026).',
          },
          {
            name: 'Süperpiksel ile görüntü etiketleme (SLIC)',
            level: 'directed',
            evidence: 'data_annotate: ilk fikir benden, her turda aracı kullanıp hatayı geri getirdim (Ağu 2026).',
          },
          {
            name: 'Temel makine öğrenmesi (scikit-learn)',
            level: 'touched',
            evidence: '2025 ders defterleri: regresyon, karar ağacı, random forest; herkese açık repo.',
          },
          {
            name: 'TensorFlow / Keras',
            level: 'touched',
            evidence: '2024\'te VGG19 ile neural style transfer defteri; herkese açık repo.',
          },
        ],
      },
    ],
    languages: {
      title: 'Diller',
      items: [
        { name: 'Türkçe', note: 'Ana dil.' },
        {
          name: 'İngilizce',
          note: 'Okuyup yazarım; konuşmam gelişiyor. 2025 öz değerlendirmem: okuma, yazma ve dinleme B1, konuşma A2.',
        },
      ],
    },
  },

  experience: {
    title: 'Deneyim ve topluluk',
    items: [
      {
        role: 'Stajyer',
        org: '4B Arıcılık Teknolojileri A.Ş.',
        period: 'Tem-Ağu 2025',
        points: [
          'Şirket tanıtımı için tek sayfalık React sitesini yaptım ve GitHub üzerinden yayına aldım.',
          'Mobil uygulamanın giriş, kayıt, profil, bildirim ve ana sayfa ekranlarını tasarlayıp arka uca bağlaması için ekip arkadaşıma devrettim.',
          'YOLOv8 ile arılarda varroa ve kovanda ana arı yüksüğü tespiti modelleri eğittim; model kapalı yüksükleri kaçırınca veri setini iki sınıfa yeniden etiketledim.',
          'Precision ve recall hedefin altında kaldı; hatalarıyla birlikte Notion\'da raporladım.',
        ],
      },
      {
        role: 'Öğrenci personel',
        org: 'Bilecik Şeyh Edebali Üniversitesi, Bilgi İşlem Daire Başkanlığı',
        period: 'Nis-Haz 2025',
        points: [
          'Personel ve laboratuvar bilgisayarlarının bakım ve onarımı: imaj, format, işletim sistemi kurulumu.',
          'RAM, SSD ve güç kaynağı değişimi, ağ portu aktivasyonu, personele teknik destek.',
        ],
      },
    ],
    educationTitle: 'Eğitim',
    education: [
      {
        role: 'Bilgisayar Mühendisliği, lisans',
        org: 'Bilecik Şeyh Edebali Üniversitesi',
        period: 'Eyl 2021 - sürüyor',
        points: ['Son sınıf. Bitirme projesi: Devre Okuyucu (Seçilmiş işler bölümünde).'],
      },
    ],
    communityTitle: 'Topluluk',
    community: [
      {
        role: 'Kurucu üye',
        org: 'BBCLUB, bilgisayar mühendisliği öğrenci topluluğu',
        period: 'May 2025',
        points: ['Akran öğrenimine dayalı bir öğrenci topluluğunu kuran ekipteydim.'],
      },
    ],
  },

  contact: {
    title: 'İletişim',
    body: 'Junior yazılım ya da yapay zekâ uygulama işi, staj veya yarı zamanlı iş için yazabilirsiniz. Uzaktan ya da Kayseri\'de çalışabilirim.',
    emailLabel: 'E-posta',
  },

  footer: {
    colophon: 'Bu siteyi de aynı yolla yaptım: kodu ve metni yapay zekâ yazdı, ben yönettim.',
    backToTop: 'Başa dön',
  },
};
