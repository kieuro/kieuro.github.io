(() => {
  'use strict';

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const I18N = {
    en: {
      meta: {
        title: 'Samuel Alvian Maryono — Backend Developer',
        description:
          'Samuel Alvian Maryono — Backend Developer building reliable APIs, relational data systems, and web applications with Go, PHP, Laravel, PostgreSQL, and MySQL.'
      },
      skipLink: 'Skip to main content',
      nav: {
        about: 'About',
        stack: 'Stack',
        work: 'Work',
        contact: 'Contact'
      },
      mobile: {
        about: 'About & Craft',
        stack: 'Core Stack',
        work: 'Selected Work',
        contact: 'Contact'
      },
      controls: {
        themeDark: 'Dark',
        themeLight: 'Light',
        themeToDarkAria: 'Switch to dark theme',
        themeToLightAria: 'Switch to light theme',
        langToIdAria: 'Switch language to Bahasa Indonesia',
        langToEnAria: 'Switch language to English',
        menuOpen: 'Open menu',
        menuClose: 'Close menu'
      },
      hero: {
        eyebrow: '00 / SAMUEL ALVIAN MARYONO — BACKEND DEVELOPER',
        title: [
          'Reliable backends, engineered for ',
          { tag: 'span', className: 'title-accent', text: 'clarity & scale.' }
        ],
        lead: [
          'I design and build structured APIs, relational data layers, and production web applications using ',
          { tag: 'strong', text: 'Golang' },
          ', ',
          { tag: 'strong', text: 'PHP & Laravel' },
          ', and Linux server infrastructure — turning complex business rules into fast, maintainable systems.'
        ],
        ctaWork: 'Explore Selected Work',
        ctaContact: 'Get in Touch',
        specRuntime: 'Core Runtime',
        specData: 'Data & Cache',
        specDeploy: 'Deployment'
      },
      arch: {
        kicker: 'SYSTEM ARCHITECTURE',
        sub: 'Interactive Request Flow',
        traceBtn: 'Trace',
        traceLabel: 'EXECUTION TRACE',
        footnote: 'Simulated request flow illustrating backend layering',
        ready: 'READY',
        tracing: 'TRACING'
      },
      about: {
        index: '01 / ABOUT',
        heading: ['Systems first,', { tag: 'br' }, 'details intact.'],
        lead:
          "I'm Samuel Alvian Maryono — a backend developer focused on crafting dependable APIs, well-modeled databases, and server-side architecture that stays readable as products grow.",
        body: [
          'My day-to-day work centers on ',
          { tag: 'strong', text: 'Golang' },
          ' for lean, high-concurrency REST services and ',
          { tag: 'strong', text: 'PHP with Laravel' },
          ' for full-featured business applications — backed by ',
          { tag: 'strong', text: 'PostgreSQL' },
          ', ',
          { tag: 'strong', text: 'MySQL' },
          ', ',
          { tag: 'strong', text: 'Firebase' },
          ' and ',
          { tag: 'strong', text: 'Redis' },
          ' caching, containerized with ',
          { tag: 'strong', text: 'Docker' },
          ', and served reliably behind ',
          { tag: 'strong', text: 'Nginx' },
          ' on Linux VPS infrastructure.'
        ],
        p1Title: 'Predictable API Contracts',
        p1Desc:
          'Clear endpoint conventions, strict request validation, and consistent error envelopes so frontend and external integrations remain effortless.',
        p2Title: 'Relational Data Integrity',
        p2Desc:
          'Normalized schemas, atomic SQL transactions, and intentional indexing across PostgreSQL and MySQL to protect business-critical state.',
        p3Title: 'Production-Ready Delivery',
        p3Desc:
          'Reproducible Docker environments, tuned Nginx reverse proxying, and disciplined Git workflows built for real VPS deployments.'
      },
      stack: {
        index: '02 / STACK',
        heading: ['Tools I build', { tag: 'br' }, '& ship with.'],
        subcopy: 'Focused, battle-tested technologies chosen for clarity, performance, and long-term maintainability.',
        catA: 'Languages & Frameworks',
        catB: 'Databases & Caching',
        catC: 'Infrastructure & Workflow',
        golang: 'REST APIs & concurrent backend services',
        php: 'Server-side web logic & business systems',
        laravel: 'Full-stack MVC apps, Eloquent ORM & auth',
        js: 'Interactive web interfaces & async flows',
        postgres: 'Relational modeling, transactions & indexing',
        mysql: 'Structured transactional storage for web apps',
        firebase: 'Push notifications (FCM), NoSQL, real-time data & auth',
        redis: 'In-memory caching for low-latency catalog & API reads',
        docker: 'Containerized local parity & deployments',
        nginx: 'Reverse proxy, routing & VPS web serving',
        vps: 'Server provisioning, tuning & production hosting',
        git: 'Version control & collaborative delivery'
      },
      projects: {
        index: '03 / SELECTED WORK',
        heading: ['Built for real', { tag: 'br' }, 'operational workflows.'],
        filterAll: 'All',
        filterApi: 'API & Integrations',
        filterWeb: 'Web Platforms',
        inspect: 'Inspect'
      },
      proj: {
        ecommerce: {
          type: 'REST API · BACKEND',
          title: 'E-Commerce Backend',
          desc:
            'Modular Go backend powering catalogs, checkout, and order fulfillment — integrated with Payment Gateway and Shipment Service APIs plus Firebase push notifications for real-time order updates.'
        },
        ecommerceCms: {
          type: 'COMMERCE CMS · INTEGRATIONS',
          title: 'E-Commerce CMS',
          desc:
            'Storefront and operations CMS built with Laravel and PostgreSQL, pairing Redis caching with third-party Payment Gateway and Shipment Service integrations for end-to-end fulfillment.'
        },
        pricing: {
          type: 'ADMIN DASHBOARD · REST API',
          title: 'Pricing Management App',
          desc:
            'Centralized pricing platform built with Laravel and PostgreSQL, combining a structured admin dashboard for managing pricing rules with a clean REST API consumed by client applications.'
        },
        inventory: {
          type: 'FULL-STACK · OPERATIONS',
          title: 'Inventory Management System',
          desc:
            'Web-based inventory and asset tracking platform designed to centralize stock records, monitor asset lifecycles, and reduce manual spreadsheet errors across daily operations.'
        },
        cms: {
          type: 'FULL-STACK · PLATFORM',
          title: 'Company Profile CMS',
          desc:
            'Custom company profile CMS enabling teams to author, structure, and publish site pages and brand content directly from an intuitive administrative dashboard.'
        },
        lottery: {
          type: 'FULL-STACK · PROMOTIONAL ENGINE',
          title: 'Coupon & Lottery System',
          desc:
            'Interactive promotional web application where participants exchange coupon codes and spin a digital lottery draw, backed by server-side redemption validation and prize tracking.'
        }
      },
      contact: {
        index: '04 / CONTACT',
        heading: 'Have a system to build or a role to discuss?',
        lead:
          'Whether you need a reliable Go API, a custom Laravel web application, or a backend developer to join your team — feel free to reach out directly.',
        emailCaption: 'DIRECT EMAIL',
        sendEmail: 'Send Email',
        copyAddress: 'Copy Address',
        copied: 'Copied',
        toastCopied: 'Copied',
        toastManual: 'Please copy manually:'
      },
      footer: {
        rights: 'All rights reserved.',
        note: 'Designed in Swiss Minimalist grid · Semantic HTML/CSS/JS',
        top: 'Top'
      },
      modal: {
        flowLabel: 'REQUEST FLOW',
        focusLabel: 'ENGINEERING FOCUS',
        stackLabel: 'TECHNOLOGY STACK',
        prev: 'Previous',
        next: 'Next Project'
      },
      aria: {
        scrollTop: 'Scroll back to top',
        closeModal: 'Close project details'
      }
    },

    id: {
      meta: {
        title: 'Samuel Alvian Maryono — Pengembang Backend',
        description:
          'Samuel Alvian Maryono — Pengembang Backend yang membangun sistem server, pengelolaan data, dan aplikasi web bisnis yang andal menggunakan Go, PHP, Laravel, PostgreSQL, dan MySQL.'
      },
      skipLink: 'Lompat ke konten utama',
      nav: {
        about: 'Tentang',
        stack: 'Teknologi',
        work: 'Proyek',
        contact: 'Kontak'
      },
      mobile: {
        about: 'Tentang Saya',
        stack: 'Teknologi Utama',
        work: 'Proyek Pilihan',
        contact: 'Kontak'
      },
      controls: {
        themeDark: 'Gelap',
        themeLight: 'Terang',
        themeToDarkAria: 'Ubah ke mode gelap',
        themeToLightAria: 'Ubah ke mode terang',
        langToIdAria: 'Ubah bahasa ke Bahasa Indonesia',
        langToEnAria: 'Ubah bahasa ke Bahasa Inggris',
        menuOpen: 'Buka menu',
        menuClose: 'Tutup menu'
      },
      hero: {
        eyebrow: '00 / SAMUEL ALVIAN MARYONO — PENGEMBANG BACKEND',
        title: [
          'Sistem backend yang andal, dirancang ',
          { tag: 'span', className: 'title-accent', text: 'rapi & siap berkembang.' }
        ],
        lead: [
          'Saya merancang dan membangun sistem di balik layar, pengelolaan data, serta aplikasi web bisnis menggunakan ',
          { tag: 'strong', text: 'Golang' },
          ', ',
          { tag: 'strong', text: 'PHP & Laravel' },
          ', dan server Linux — membantu mengubah kebutuhan bisnis menjadi aplikasi yang cepat, aman, dan mudah dikelola.'
        ],
        ctaWork: 'Lihat Daftar Proyek',
        ctaContact: 'Hubungi Saya',
        specRuntime: 'Bahasa & Kerangka Kerja',
        specData: 'Penyimpanan Data',
        specDeploy: 'Server & Pengelolaan'
      },
      arch: {
        kicker: 'GAMBARAN SISTEM',
        sub: 'Simulasi Alur Kerja Aplikasi',
        traceBtn: 'Jalankan',
        traceLabel: 'TAHAPAN PROSES',
        footnote: 'Simulasi sederhana cara sistem memproses permintaan pengguna',
        ready: 'SIAP',
        tracing: 'MEMPROSES'
      },
      about: {
        index: '01 / TENTANG SAYA',
        heading: ['Sistem yang kuat,', { tag: 'br' }, 'pengelolaan yang mudah.'],
        lead:
          'Saya Samuel Alvian Maryono — pengembang backend yang berfokus membangun sistem di balik layar agar aplikasi web dan bisnis berjalan stabil, aman, dan mudah dikembangkan di masa depan.',
        body: [
          'Sehari-hari saya membangun sistem pengolahan data menggunakan ',
          { tag: 'strong', text: 'Golang' },
          ' serta aplikasi web bisnis menyeluruh dengan ',
          { tag: 'strong', text: 'PHP dan Laravel' },
          '. Semuanya didukung penyimpanan data ',
          { tag: 'strong', text: 'PostgreSQL' },
          ', ',
          { tag: 'strong', text: 'MySQL' },
          ', ',
          { tag: 'strong', text: 'Firebase' },
          ', dan percepatan akses ',
          { tag: 'strong', text: 'Redis' },
          ', lalu dijalankan dengan rapi menggunakan ',
          { tag: 'strong', text: 'Docker' },
          ' dan ',
          { tag: 'strong', text: 'Nginx' },
          ' pada server Linux.'
        ],
        p1Title: 'Komunikasi Sistem yang Jelas',
        p1Desc:
          'Setiap fitur dirancang dengan aturan pertukaran data yang rapi sehingga mudah dihubungkan dengan tampilan aplikasi maupun layanan pihak ketiga.',
        p2Title: 'Keamanan & Akurasi Data',
        p2Desc:
          'Struktur penyimpanan data disusun secara teratur agar transaksi, stok, dan catatan penting bisnis tetap akurat serta aman dari kesalahan pencatatan.',
        p3Title: 'Siap Digunakan dalam Operasional',
        p3Desc:
          'Setiap aplikasi disiapkan dengan pengaturan server yang stabil dan terstruktur agar berjalan lancar saat digunakan oleh pengguna setiap hari.'
      },
      stack: {
        index: '02 / TEKNOLOGI',
        heading: ['Teknologi yang', { tag: 'br' }, 'saya gunakan.'],
        subcopy: 'Alat dan teknologi terpercaya yang dipilih agar aplikasi bekerja cepat, aman, dan mudah dirawat dalam jangka panjang.',
        catA: 'Bahasa & Kerangka Kerja',
        catB: 'Database & Pengelolaan Data',
        catC: 'Server & Pendukung Kerja',
        golang: 'Membangun sistem server yang cepat dan mampu melayani banyak pengguna sekaligus',
        php: 'Pengembangan logika aplikasi web untuk berbagai kebutuhan bisnis',
        laravel: 'Kerangka kerja modern untuk membangun aplikasi web dan dashboard admin yang rapi',
        js: 'Menghadirkan tampilan web yang interaktif dan nyaman digunakan',
        postgres: 'Penyimpanan data bisnis yang aman, terstruktur, dan akurat',
        mysql: 'Basis data andal untuk menyimpan catatan transaksi aplikasi web',
        firebase: 'Pengiriman notifikasi langsung ke ponsel, data waktu nyata, dan akses akun',
        redis: 'Penyimpanan sementara berkecepatan tinggi agar halaman dan katalog terbuka lebih cepat',
        docker: 'Memastikan aplikasi berjalan sama stabilnya di komputer pengembangan maupun server',
        nginx: 'Pengatur lalu lintas akses pengguna agar situs tetap cepat dan aman',
        vps: 'Pengelolaan server mandiri untuk menjalankan aplikasi secara penuh',
        git: 'Pencatatan riwayat perubahan kode untuk kerja sama tim yang rapi'
      },
      projects: {
        index: '03 / PROYEK PILIHAN',
        heading: ['Dibangun untuk kebutuhan', { tag: 'br' }, 'operasional sehari-hari.'],
        filterAll: 'Semua',
        filterApi: 'Layanan & Integrasi',
        filterWeb: 'Aplikasi Web',
        inspect: 'Lihat Detail'
      },
      proj: {
        ecommerce: {
          type: 'SISTEM BACKEND · TOKO ONLINE',
          title: 'E-Commerce Backend',
          desc:
            'Sistem utama toko online berbasis Go untuk mengelola katalog produk, proses pembelian, dan pesanan — terhubung otomatis dengan layanan pembayaran, pengiriman barang, serta notifikasi langsung ke pengguna melalui Firebase.'
        },
        ecommerceCms: {
          type: 'PANEL KELOLA TOKO · INTEGRASI',
          title: 'E-Commerce CMS',
          desc:
            'Sistem pengelolaan konten dan operasional toko online berbasis Laravel dan PostgreSQL, dilengkapi percepatan akses data Redis serta terhubung langsung dengan layanan pembayaran dan pengiriman barang.'
        },
        pricing: {
          type: 'DASHBOARD ADMIN · LAYANAN DATA',
          title: 'Pricing Management App',
          desc:
            'Aplikasi pengaturan harga terpusat berbasis Laravel dan PostgreSQL yang memadukan dashboard admin untuk mengatur daftar harga dengan layanan data yang langsung terhubung ke aplikasi lain.'
        },
        inventory: {
          type: 'APLIKASI WEB · OPERASIONAL',
          title: 'Inventory Management System',
          desc:
            'Aplikasi web untuk mencatat stok barang dan aset perusahaan secara terpusat, memudahkan pemantauan keluar-masuk barang serta mengurangi kesalahan pencatatan manual.'
        },
        cms: {
          type: 'APLIKASI WEB · PROFIL PERUSAHAAN',
          title: 'Company Profile CMS',
          desc:
            'Sistem pengelolaan konten situs profil perusahaan yang memudahkan tim memperbarui halaman, artikel, dan informasi bisnis secara mandiri melalui dashboard admin.'
        },
        lottery: {
          type: 'APLIKASI WEB · PROGRAM PROMOSI',
          title: 'Coupon & Lottery System',
          desc:
            'Aplikasi web promosi interaktif tempat pelanggan menukarkan kode kupon untuk mengikuti undian berhadiah secara digital, dilengkapi pencatatan kupon dan pemenang yang akurat.'
        }
      },
      contact: {
        index: '04 / KONTAK',
        heading: 'Ingin membangun aplikasi atau berdiskusi mengenai kerja sama?',
        lead:
          'Baik Anda membutuhkan sistem toko online, aplikasi web bisnis khusus, maupun pengembang backend untuk tim Anda — silakan hubungi saya langsung melalui email.',
        emailCaption: 'EMAIL LANGSUNG',
        sendEmail: 'Kirim Email',
        copyAddress: 'Salin Email',
        copied: 'Tersalin',
        toastCopied: 'Email tersalin:',
        toastManual: 'Silakan salin secara manual:'
      },
      footer: {
        rights: 'Seluruh hak cipta dilindungi.',
        note: 'Dirancang dengan tata letak minimalis yang rapi dan ringan',
        top: 'Ke Atas'
      },
      modal: {
        flowLabel: 'ALUR KERJA SISTEM',
        focusLabel: 'POIN UTAMA PENGEMBANGAN',
        stackLabel: 'TEKNOLOGI YANG DIGUNAKAN',
        prev: 'Sebelumnya',
        next: 'Proyek Berikutnya'
      },
      aria: {
        scrollTop: 'Kembali ke atas',
        closeModal: 'Tutup detail proyek'
      }
    }
  };

  const PROJECTS = {
    ecommerce: {
      index: '01',
      tech: ['Golang', 'PostgreSQL', 'MySQL', 'REST API', 'Firebase', 'Payment Gateway API', 'Shipment API'],
      en: {
        category: 'REST API · BACKEND',
        title: 'E-Commerce Backend',
        summary:
          'A backend service engineered in Golang to power online retail operations — exposing clean REST endpoints for catalog browsing, cart state, and order fulfillment integrated with Payment Gateway, Shipment Service, and Firebase push notifications.',
        flow: ['Client App', 'Go REST API', 'PostgreSQL / MySQL', 'Payment & Shipment', 'Firebase Push'],
        highlights: [
          'Structured around clear handler, service, and repository boundaries in Go to keep business rules testable and decoupled from HTTP transport.',
          'Integrated third-party Payment Gateway transactions and webhooks alongside Shipment Service APIs for shipping rates, dispatch creation, and delivery status updates.',
          'Implemented Firebase push notifications triggered by order, payment, and shipment lifecycle events to keep users notified in real time.',
          'Designed transactional order and stock mutations across PostgreSQL and MySQL to preserve consistency under concurrent checkout requests.'
        ]
      },
      id: {
        category: 'SISTEM BACKEND · TOKO ONLINE',
        title: 'E-Commerce Backend',
        summary:
          'Sistem utama di balik layar yang dibangun dengan Golang untuk menggerakkan operasional toko online — mulai dari katalog produk, keranjang belanja, hingga proses pesanan yang terhubung otomatis dengan layanan pembayaran, pengiriman, dan notifikasi Firebase.',
        flow: ['Aplikasi Pembeli', 'Sistem Utama Go', 'Database Pesanan', 'Pembayaran & Pengiriman', 'Notifikasi Firebase'],
        highlights: [
          'Dirancang dengan struktur kode yang rapi menggunakan Go sehingga mudah dikembangkan saat fitur toko terus bertambah.',
          'Terhubung langsung dengan layanan pembayaran online (Payment Gateway) serta layanan ekspedisi (Shipment Service) untuk hitung ongkir, pembuatan pengiriman, dan pembaruan status paket.',
          'Dilengkapi pengiriman notifikasi otomatis melalui Firebase agar pembeli langsung menerima kabar saat pesanan diproses, dibayar, maupun dikirim.',
          'Menjaga ketepatan catatan pesanan dan jumlah stok di PostgreSQL serta MySQL meskipun banyak pembeli bertransaksi di waktu bersamaan.'
        ]
      }
    },
    ecommerceCms: {
      index: '02',
      tech: ['PHP', 'Laravel', 'PostgreSQL', 'Redis', 'Payment Gateway API', 'Shipment API'],
      en: {
        category: 'COMMERCE CMS · INTEGRATIONS',
        title: 'E-Commerce CMS',
        summary:
          'A dedicated e-commerce content and operations CMS built with Laravel and PostgreSQL — pairing Redis caching with third-party Payment Gateway and Shipment Service integrations for end-to-end store operations.',
        flow: ['Admin / Storefront', 'Laravel CMS', 'Redis Cache', 'PostgreSQL', 'Payment & Shipment APIs'],
        highlights: [
          'Integrated third-party Payment Gateway checkout and webhook callbacks alongside Shipment Service APIs for shipping rate calculations, dispatch creation, and delivery tracking.',
          'Layered Redis caching in front of PostgreSQL to accelerate frequently read catalog items, storefront banners, and configuration payloads with controlled cache invalidation.',
          'Built a unified Laravel administrative workflow for managing products, storefront content, payment statuses, and fulfillment state cleanly.'
        ]
      },
      id: {
        category: 'PANEL KELOLA TOKO · INTEGRASI',
        title: 'E-Commerce CMS',
        summary:
          'Sistem pengelolaan konten dan operasional toko online menggunakan Laravel dan PostgreSQL — dilengkapi percepatan akses data Redis serta terhubung dengan layanan pembayaran dan pengiriman barang.',
        flow: ['Admin / Toko Online', 'Sistem Laravel', 'Akses Cepat Redis', 'Database Utama', 'Pembayaran & Pengiriman'],
        highlights: [
          'Terhubung otomatis dengan layanan pembayaran (Payment Gateway) dan layanan pengiriman (Shipment Service) untuk menghitung ongkos kirim, membuat resi, dan memantau status pengiriman.',
          'Menggunakan penyimpanan sementara Redis agar halaman produk, promo, dan informasi toko dapat dibuka dengan jauh lebih cepat oleh pengunjung.',
          'Menyediakan panel admin terpadu di Laravel agar tim toko dapat mengatur produk, tampilan halaman, status pembayaran, dan pesanan dari satu tempat.'
        ]
      }
    },
    pricing: {
      index: '03',
      tech: ['PHP', 'Laravel', 'PostgreSQL', 'REST API', 'Admin Dashboard'],
      en: {
        category: 'ADMIN DASHBOARD · REST API',
        title: 'Pricing Management App',
        summary:
          'A centralized pricing application engineered with Laravel and PostgreSQL — combining an administrative dashboard for managing pricing structures with a clean REST API consumed by external clients.',
        flow: ['Admin Dashboard', 'Laravel Service', 'PostgreSQL', 'REST API', 'Client Apps'],
        highlights: [
          'Built a structured Laravel admin dashboard enabling internal teams to configure, update, and maintain pricing rules without touching raw database records.',
          'Exposed a clean REST API layer with explicit request validation and consistent JSON responses so downstream services query up-to-date pricing reliably.',
          'Modeled normalized pricing schemas and relational constraints in PostgreSQL to guarantee accurate calculations and clean auditability.'
        ]
      },
      id: {
        category: 'DASHBOARD ADMIN · LAYANAN DATA',
        title: 'Pricing Management App',
        summary:
          'Aplikasi pengaturan harga terpusat berbasis Laravel dan PostgreSQL — menggabungkan dashboard admin yang mudah digunakan untuk mengelola daftar harga dengan layanan data yang langsung terhubung ke aplikasi lain.',
        flow: ['Dashboard Admin', 'Pengolah Harga', 'Database PostgreSQL', 'Layanan Data (API)', 'Aplikasi Klien'],
        highlights: [
          'Menyediakan dashboard admin yang rapi agar tim internal dapat menambah, mengubah, dan meninjau aturan harga dengan mudah tanpa bantuan teknis.',
          'Menyediakan jalur pertukaran data (REST API) yang teratur sehingga aplikasi atau sistem lain selalu menampilkan harga terbaru secara seragam.',
          'Menyimpan seluruh data dan riwayat harga secara terstruktur di PostgreSQL agar perhitungan selalu tepat dan mudah ditinjau kembali.'
        ]
      }
    },
    inventory: {
      index: '04',
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      en: {
        category: 'FULL-STACK · OPERATIONS',
        title: 'Inventory Management System',
        summary:
          'A full-stack web application built with PHP and Laravel for organizing physical inventory and company assets — replacing ad-hoc tracking with structured records and clear movement history.',
        flow: ['Browser UI', 'Laravel Router', 'Domain Controllers', 'Eloquent ORM', 'MySQL'],
        highlights: [
          'Modeled normalized asset, category, and stock movement schemas in MySQL to keep audit trails accurate and queryable.',
          'Built structured CRUD and asset-update workflows with server-side Laravel validation and responsive JavaScript interactions.',
          'Streamlined day-to-day inventory lookups so staff can monitor stock availability and asset status from a single web interface.'
        ]
      },
      id: {
        category: 'APLIKASI WEB · OPERASIONAL',
        title: 'Inventory Management System',
        summary:
          'Aplikasi web berbasis PHP dan Laravel untuk mengelola stok barang dan aset perusahaan — menggantikan pencatatan manual dengan data terpusat serta riwayat perpindahan barang yang jelas.',
        flow: ['Tampilan Web', 'Sistem Laravel', 'Pengelolaan Aset', 'Database MySQL'],
        highlights: [
          'Menyusun pencatatan barang, kategori, dan riwayat keluar-masuk stok secara rapi di MySQL sehingga mudah diperiksa kapan saja.',
          'Menyediakan proses tambah, ubah, dan perbarui data aset dengan pemeriksaan otomatis agar terhindar dari kesalahan input.',
          'Memudahkan staf operasional memantau ketersediaan stok dan kondisi aset perusahaan melalui satu halaman web.'
        ]
      }
    },
    cms: {
      index: '05',
      tech: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
      en: {
        category: 'FULL-STACK · PLATFORM',
        title: 'Company Profile CMS',
        summary:
          'A bespoke company profile content management platform allowing administrators to edit pages, sections, and brand media safely without touching source code or triggering manual deployments.',
        flow: ['Admin Portal', 'Laravel Auth', 'Content Modules', 'PostgreSQL', 'Public Site'],
        highlights: [
          'Architected modular content entities in PostgreSQL so company profile sections stay structured while remaining flexible for editors.',
          'Implemented clean administrative authoring flows in Laravel with input sanitization and predictable server-rendered output.',
          'Paired backend content management with lightweight JavaScript enhancements for smooth content editing and previewing.'
        ]
      },
      id: {
        category: 'APLIKASI WEB · PROFIL PERUSAHAAN',
        title: 'Company Profile CMS',
        summary:
          'Sistem pengelolaan konten situs profil perusahaan yang memudahkan tim mengubah teks halaman, informasi layanan, dan gambar secara mandiri tanpa perlu bantuan tim teknis.',
        flow: ['Halaman Admin', 'Pengelola Konten', 'Database PostgreSQL', 'Situs Perusahaan'],
        highlights: [
          'Menata bagian konten profil perusahaan secara rapi di PostgreSQL sehingga mudah disesuaikan dengan kebutuhan komunikasi bisnis.',
          'Menyediakan halaman pengelolaan konten yang aman dan sederhana di Laravel agar tim dapat menerbitkan pembaruan kapan saja.',
          'Dilengkapi tampilan web yang responsif dan nyaman digunakan saat menyunting maupun meninjau konten.'
        ]
      }
    },
    lottery: {
      index: '06',
      tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      en: {
        category: 'FULL-STACK · PROMOTIONAL ENGINE',
        title: 'Coupon & Lottery System',
        summary:
          'An interactive promotional web application where users exchange coupon codes for lottery entries and trigger a digital spin draw — balancing engaging frontend interaction with strict backend integrity.',
        flow: ['Participant UI', 'Coupon Validator', 'Laravel Draw Engine', 'MySQL Lock', 'Prize Result'],
        highlights: [
          'Enforced server-side coupon eligibility and single-use redemption checks in MySQL to prevent duplicate claims or tampered draws.',
          'Separated draw outcome determination securely on the Laravel backend while driving the interactive spin presentation in JavaScript.',
          'Tracked coupon redemptions and prize allocations cleanly in relational tables for transparent promotional reporting.'
        ]
      },
      id: {
        category: 'APLIKASI WEB · PROGRAM PROMOSI',
        title: 'Coupon & Lottery System',
        summary:
          'Aplikasi web promosi interaktif tempat pelanggan menukarkan kode kupon untuk mengikuti undian putar berhadiah secara digital — menggabungkan tampilan menarik dengan sistem pengundian yang jujur dan tercatat.',
        flow: ['Halaman Peserta', 'Pemeriksa Kupon', 'Sistem Undian', 'Catat Pemenang', 'Hasil Hadiah'],
        highlights: [
          'Memastikan setiap kode kupon diperiksa secara otomatis di server dan hanya dapat digunakan satu kali untuk mencegah penukaran ganda.',
          'Menentukan hasil undian secara aman di server Laravel sambil menampilkan animasi putaran undian yang menarik bagi peserta.',
          'Mencatat seluruh riwayat penukaran kupon dan daftar penerima hadiah secara rapi di MySQL untuk memudahkan laporan promosi.'
        ]
      }
    }
  };

  const PROJECT_ORDER = ['ecommerce', 'ecommerceCms', 'pricing', 'inventory', 'cms', 'lottery'];

  const ARCH_FLOWS = {
    ecommerce: {
      method: 'POST',
      route: '/api/v1/orders',
      status: '201 CREATED',
      stackTag: 'golang · postgresql · firebase',
      en: {
        nodes: [
          { title: 'Go API', meta: 'Auth & Order' },
          { title: 'PostgreSQL', meta: 'ACID Commit' },
          { title: 'Pay & Ship', meta: '3rd-Party API' },
          { title: 'Firebase', meta: 'Push Notify' }
        ],
        traces: [
          'go.router -> validated bearer token & checkout payload',
          'postgres.tx -> committed order & reserved stock atomically',
          'integrations -> synced payment gateway & shipment booking',
          'firebase.fcm -> dispatched order confirmation push (201)'
        ]
      },
      id: {
        nodes: [
          { title: 'Go API', meta: 'Terima Pesanan' },
          { title: 'PostgreSQL', meta: 'Simpan Data' },
          { title: 'Bayar & Kirim', meta: 'Layanan Mitra' },
          { title: 'Firebase', meta: 'Kirim Notifikasi' }
        ],
        traces: [
          'Sistem memeriksa data akun dan rincian pesanan pembeli',
          'Pesanan disimpan dengan aman dan jumlah stok langsung diperbarui',
          'Terhubung otomatis dengan layanan pembayaran dan pengiriman',
          'Notifikasi konfirmasi pesanan langsung dikirim ke ponsel pengguna'
        ]
      }
    },
    ecommerceCms: {
      method: 'POST',
      route: '/api/v1/checkout',
      status: '200 OK',
      stackTag: 'laravel · postgresql · redis',
      en: {
        nodes: [
          { title: 'Laravel CMS', meta: 'Order Guard' },
          { title: 'Redis', meta: 'Catalog Hit' },
          { title: 'Payment GW', meta: 'Invoice Link' },
          { title: 'Shipment API', meta: 'Rate & AWB' }
        ],
        traces: [
          'laravel.cms -> validated cart & store rules against PostgreSQL',
          'redis.cache -> resolved product & promo snapshot from cache',
          'payment.gateway -> created payment session & webhook callback',
          'shipment.api -> booked courier rate & persisted tracking (200)'
        ]
      },
      id: {
        nodes: [
          { title: 'CMS Toko', meta: 'Periksa Pesanan' },
          { title: 'Redis', meta: 'Akses Cepat' },
          { title: 'Pembayaran', meta: 'Buat Tagihan' },
          { title: 'Pengiriman', meta: 'Ongkir & Resi' }
        ],
        traces: [
          'Sistem toko memeriksa isi keranjang dan aturan promo yang berlaku',
          'Data katalog produk diambil cepat dari penyimpanan sementara',
          'Tautan pembayaran dibuat otomatis melalui mitra pembayaran',
          'Biaya ongkir dihitung dan nomor resi pengiriman langsung tercatat'
        ]
      }
    },
    pricing: {
      method: 'GET',
      route: '/api/v1/pricing/quote',
      status: '200 OK',
      stackTag: 'laravel · postgresql · rest',
      en: {
        nodes: [
          { title: 'Nginx', meta: 'HTTPS Proxy' },
          { title: 'Laravel API', meta: 'Token Auth' },
          { title: 'Price Engine', meta: 'Rule Eval' },
          { title: 'PostgreSQL', meta: 'Indexed Read' }
        ],
        traces: [
          'nginx.proxy -> routed API request to Laravel app pool',
          'api.auth -> validated API credentials & query parameters',
          'pricing.service -> evaluated tier rules managed in admin dashboard',
          'postgres.query -> returned structured quote payload (200 OK)'
        ]
      },
      id: {
        nodes: [
          { title: 'Server Web', meta: 'Jalur Aman' },
          { title: 'Layanan Harga', meta: 'Cek Akses' },
          { title: 'Hitung Harga', meta: 'Aturan Bisnis' },
          { title: 'PostgreSQL', meta: 'Ambil Data' }
        ],
        traces: [
          'Permintaan dari aplikasi diteruskan dengan aman ke server utama',
          'Sistem memastikan permintaan berasal dari aplikasi yang berwenang',
          'Harga dihitung sesuai aturan yang diatur tim melalui dashboard admin',
          'Daftar harga terbaru dikirim kembali dengan cepat dan akurat'
        ]
      }
    }
  };

  let currentLang = document.documentElement.getAttribute('data-lang') === 'id' ? 'id' : 'en';
  const langListeners = [];

  const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  const ALLOWED_RICH_TAGS = new Set(['br', 'strong', 'span']);
  const ALLOWED_RICH_CLASSES = new Set(['title-accent']);

  function getNested(obj, path) {
    if (!obj || typeof path !== 'string') return null;
    return path.split('.').reduce(
      (acc, part) => (acc && typeof acc === 'object' && hasOwn(acc, part) ? acc[part] : null),
      obj
    );
  }

  function renderRichText(el, parts) {
    if (!Array.isArray(parts)) return;
    const fragment = document.createDocumentFragment();
    parts.forEach((part) => {
      if (typeof part === 'string') {
        fragment.appendChild(document.createTextNode(part));
      } else if (part && typeof part === 'object' && ALLOWED_RICH_TAGS.has(part.tag)) {
        const node = document.createElement(part.tag);
        if (part.className && ALLOWED_RICH_CLASSES.has(part.className)) {
          node.className = part.className;
        }
        if (typeof part.text === 'string') {
          node.textContent = part.text;
        }
        fragment.appendChild(node);
      }
    });
    el.replaceChildren(fragment);
  }

  function t(key) {
    return getNested(I18N[currentLang], key) ?? getNested(I18N.en, key) ?? key;
  }

  function onLangChange(fn) {
    langListeners.push(fn);
  }

  function applyLanguage(lang, opts = {}) {
    currentLang = lang === 'id' ? 'id' : 'en';
    document.documentElement.setAttribute('data-lang', currentLang);
    document.documentElement.setAttribute('lang', currentLang);

    // Update page title & meta description
    document.title = t('meta.title');
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', t('meta.description'));

    // Update static text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = t(el.dataset.i18n);
      if (typeof val === 'string') el.textContent = val;
    });

    // Update rich inline nodes safely without innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const val = t(el.dataset.i18nHtml);
      if (Array.isArray(val)) {
        renderRichText(el, val);
      } else if (typeof val === 'string') {
        el.textContent = val;
      }
    });

    // Update translated aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const val = t(el.dataset.i18nAria);
      if (typeof val === 'string') el.setAttribute('aria-label', val);
    });

    // Update language toggle visual state
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.setAttribute('aria-pressed', String(currentLang === 'id'));
      langToggle.setAttribute(
        'aria-label',
        currentLang === 'en' ? t('controls.langToIdAria') : t('controls.langToEnAria')
      );
      langToggle.querySelectorAll('[data-lang-opt]').forEach((opt) => {
        opt.classList.toggle('is-active', opt.dataset.langOpt === currentLang);
      });
    }

    // Notify interactive modules (theme label, arch card, filter pill, modal, copy btn)
    langListeners.forEach((fn) => fn(currentLang, opts));
  }

  function initLanguage() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        const next = currentLang === 'en' ? 'id' : 'en';
        applyLanguage(next);
        try {
          localStorage.setItem('lang', next);
        } catch (e) {}
      });
    }
  }

  function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const themeLabel = document.getElementById('theme-label');
    const themeMeta = document.querySelector('meta[name="theme-color"]');

    const syncThemeUI = (theme) => {
      const isDark = theme === 'dark';
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-pressed', String(isDark));
        toggleBtn.setAttribute(
          'aria-label',
          isDark ? t('controls.themeToLightAria') : t('controls.themeToDarkAria')
        );
      }
      if (themeLabel) {
        themeLabel.textContent = isDark ? t('controls.themeLight') : t('controls.themeDark');
      }
      if (themeMeta) {
        themeMeta.setAttribute('content', isDark ? '#0E1013' : '#F7F6F2');
      }
    };

    const applyTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      syncThemeUI(theme);
    };

    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(current);

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        try {
          localStorage.setItem('theme', next);
        } catch (e) {}
      });
    }

    onLangChange(() => {
      const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      syncThemeUI(theme);
    });
  }

  function initMobileDrawer() {
    const menuBtn = document.getElementById('menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    if (!menuBtn || !drawer) return;

    const setDrawer = (open) => {
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? t('controls.menuClose') : t('controls.menuOpen'));
      drawer.setAttribute('aria-hidden', String(!open));
      drawer.classList.toggle('is-open', open);
      document.body.classList.toggle('drawer-open', open);
    };

    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      setDrawer(!isOpen);
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setDrawer(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        setDrawer(false);
        menuBtn.focus();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900 && drawer.classList.contains('is-open')) {
        setDrawer(false);
      }
    });

    onLangChange(() => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-label', isOpen ? t('controls.menuClose') : t('controls.menuOpen'));
    });
  }

  function initScrollTracking() {
    const progressEl = document.getElementById('scroll-progress');
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const sections = navLinks
      .map((link) => document.getElementById(link.dataset.section))
      .filter(Boolean);

    let ticking = false;

    const updateOnScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;

      if (progressEl) {
        progressEl.style.transform = `scaleX(${ratio})`;
      }

      if (scrollTopBtn) {
        scrollTopBtn.classList.toggle('is-visible', scrollY > 360);
      }

      let activeId = '';
      const offset = 160;
      for (const section of sections) {
        const top = section.offsetTop - offset;
        if (scrollY >= top) {
          activeId = section.id;
        }
      }

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 40 && sections.length) {
        activeId = sections[sections.length - 1].id;
      }

      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.dataset.section === activeId);
      });

      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateOnScroll);
          ticking = true;
        }
      },
      { passive: true }
    );

    updateOnScroll();

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? 'auto' : 'smooth'
        });
      });
    }
  }

  function initScrollReveals() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const markRevealed = (el) => {
      el.classList.add('is-revealed');
      el.classList.remove('is-visible');
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.add('is-visible');
            target.addEventListener('animationend', () => markRevealed(target), { once: true });
            setTimeout(() => markRevealed(target), 1200);
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  function initArchitectureCard() {
    const tabs = Array.from(document.querySelectorAll('.arch-tab'));
    const simulateBtn = document.getElementById('arch-simulate-btn');
    const methodEl = document.getElementById('arch-method');
    const routeEl = document.getElementById('arch-route');
    const statusEl = document.getElementById('arch-status');
    const stackTagEl = document.getElementById('arch-stack-tag');
    const progressBar = document.getElementById('pipeline-progress');
    const nodes = Array.from(document.querySelectorAll('.pipeline-node'));
    const traceList = document.getElementById('trace-list');
    const stateIndicator = document.getElementById('arch-state-indicator');
    const stateText = document.getElementById('arch-state-text');

    if (!tabs.length || !traceList) return;

    let currentKey = 'ecommerce';
    let isTracing = false;
    let timers = [];

    const setTracingState = (tracing) => {
      isTracing = tracing;
      if (stateIndicator) stateIndicator.classList.toggle('is-tracing', tracing);
      if (stateText) stateText.textContent = tracing ? t('arch.tracing') : t('arch.ready');
    };

    const clearTimers = () => {
      timers.forEach((tId) => clearTimeout(tId));
      timers = [];
    };

    const renderStaticFlow = (key) => {
      if (!hasOwn(ARCH_FLOWS, key)) return;
      const flow = ARCH_FLOWS[key];
      currentKey = key;
      const localized = flow[currentLang] || flow.en;

      methodEl.textContent = flow.method;
      routeEl.textContent = flow.route;
      statusEl.textContent = flow.status;
      stackTagEl.textContent = flow.stackTag;

      localized.nodes.forEach((node, idx) => {
        const titleEl = document.getElementById(`node-${idx}-title`);
        const metaEl = document.getElementById(`node-${idx}-meta`);
        if (titleEl) titleEl.textContent = node.title;
        if (metaEl) metaEl.textContent = node.meta;
      });

      const traceNodes = localized.traces.map((msg, idx) => {
        const li = document.createElement('li');
        li.className = 'trace-line is-done';

        const stepSpan = document.createElement('span');
        stepSpan.className = 'trace-step';
        stepSpan.textContent = `0${idx + 1}`;

        const msgSpan = document.createElement('span');
        msgSpan.className = 'trace-msg';
        msgSpan.textContent = msg;

        li.append(stepSpan, msgSpan);
        return li;
      });
      traceList.replaceChildren(...traceNodes);

      nodes.forEach((n) => {
        n.classList.remove('is-active');
        n.classList.add('is-done');
      });

      if (progressBar) {
        progressBar.style.transform = 'scaleX(1)';
      }

      setTracingState(false);
    };

    const playTraceAnimation = () => {
      clearTimers();
      const traceLines = Array.from(traceList.querySelectorAll('.trace-line'));

      if (prefersReducedMotion()) {
        nodes.forEach((n) => {
          n.classList.remove('is-active');
          n.classList.add('is-done');
        });
        traceLines.forEach((line) => {
          line.classList.remove('is-active');
          line.classList.add('is-done');
        });
        if (progressBar) progressBar.style.transform = 'scaleX(1)';
        setTracingState(false);
        return;
      }

      setTracingState(true);
      nodes.forEach((n) => n.classList.remove('is-active', 'is-done'));
      traceLines.forEach((line) => line.classList.remove('is-active', 'is-done'));
      if (progressBar) progressBar.style.transform = 'scaleX(0)';

      const stepInterval = 340;
      nodes.forEach((node, idx) => {
        const timerId = setTimeout(() => {
          if (idx > 0) {
            nodes[idx - 1].classList.remove('is-active');
            nodes[idx - 1].classList.add('is-done');
            if (traceLines[idx - 1]) {
              traceLines[idx - 1].classList.remove('is-active');
              traceLines[idx - 1].classList.add('is-done');
            }
          }

          node.classList.add('is-active');
          if (traceLines[idx]) {
            traceLines[idx].classList.add('is-active');
          }

          if (progressBar) {
            const scale = idx === 0 ? 0.12 : idx / (nodes.length - 1);
            progressBar.style.transform = `scaleX(${scale})`;
          }
        }, idx * stepInterval + 60);
        timers.push(timerId);
      });

      const finishTimer = setTimeout(() => {
        const last = nodes.length - 1;
        nodes[last].classList.remove('is-active');
        nodes[last].classList.add('is-done');
        if (traceLines[last]) {
          traceLines[last].classList.remove('is-active');
          traceLines[last].classList.add('is-done');
        }
        if (progressBar) progressBar.style.transform = 'scaleX(1)';
        setTracingState(false);
      }, nodes.length * stepInterval + 260);
      timers.push(finishTimer);
    };

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const flowKey = tab.dataset.flow;
        if (!hasOwn(ARCH_FLOWS, flowKey)) return;

        tabs.forEach((tabItem) => {
          const active = tabItem === tab;
          tabItem.classList.toggle('is-active', active);
          tabItem.setAttribute('aria-selected', String(active));
        });

        renderStaticFlow(flowKey);
        playTraceAnimation();
      });
    });

    if (simulateBtn) {
      simulateBtn.addEventListener('click', () => {
        renderStaticFlow(currentKey);
        playTraceAnimation();
      });
    }

    onLangChange((lang, opts) => {
      if (opts && opts.initial) return;
      clearTimers();
      renderStaticFlow(currentKey);
      if (stateText) stateText.textContent = isTracing ? t('arch.tracing') : t('arch.ready');
    });

    renderStaticFlow('ecommerce');
    if (!prefersReducedMotion()) {
      const initialTimer = setTimeout(playTraceAnimation, 720);
      timers.push(initialTimer);
    }
  }

  function initProjectFilters() {
    const filterBar = document.querySelector('.filter-bar');
    const indicator = document.getElementById('filter-indicator');
    const buttons = Array.from(document.querySelectorAll('.filter-btn'));
    const cards = Array.from(document.querySelectorAll('.project-card'));

    if (!filterBar || !indicator || !buttons.length) return;

    const positionIndicator = (activeBtn) => {
      if (!activeBtn) return;
      const offsetX = activeBtn.offsetLeft - 4;
      indicator.style.width = `${activeBtn.offsetWidth}px`;
      indicator.style.transform = `translateX(${offsetX}px)`;
    };

    const syncIndicator = () => {
      const current = buttons.find((b) => b.classList.contains('is-active')) || buttons[0];
      requestAnimationFrame(() => positionIndicator(current));
    };

    syncIndicator();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(syncIndicator);
    }

    window.addEventListener('resize', syncIndicator);
    onLangChange(syncIndicator);

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        buttons.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle('is-active', isActive);
          b.setAttribute('aria-selected', String(isActive));
        });

        positionIndicator(btn);

        cards.forEach((card) => {
          const matches = filter === 'all' || card.dataset.category === filter;
          card.classList.add('is-revealed');
          card.classList.remove('is-visible');
          card.classList.toggle('is-hidden', !matches);
          card.classList.remove('is-filtering-in');
          if (matches && !prefersReducedMotion()) {
            void card.offsetWidth;
            card.classList.add('is-filtering-in');
          }
        });
      });
    });
  }

  function initProjectModal() {
    const backdrop = document.getElementById('project-modal');
    if (!backdrop) return;

    const drawer = backdrop.querySelector('.modal-drawer');
    const closeBtn = document.getElementById('modal-close');
    const prevBtn = document.getElementById('modal-prev');
    const nextBtn = document.getElementById('modal-next');

    const indexEl = document.getElementById('modal-index');
    const categoryEl = document.getElementById('modal-category');
    const titleEl = document.getElementById('modal-title');
    const summaryEl = document.getElementById('modal-summary');
    const flowEl = document.getElementById('modal-flow');
    const highlightsEl = document.getElementById('modal-highlights');
    const techEl = document.getElementById('modal-tech');

    let currentProjectKey = 'ecommerce';
    let lastFocusedEl = null;

    const renderModal = (key) => {
      if (!hasOwn(PROJECTS, key)) return;
      const project = PROJECTS[key];
      currentProjectKey = key;
      const localized = project[currentLang] || project.en;

      indexEl.textContent = project.index;
      categoryEl.textContent = localized.category;
      titleEl.textContent = localized.title;
      summaryEl.textContent = localized.summary;

      const flowFragment = document.createDocumentFragment();
      localized.flow.forEach((step, i) => {
        const pill = document.createElement('span');
        pill.className = 'flow-pill';
        pill.textContent = step;
        flowFragment.appendChild(pill);
        if (i < localized.flow.length - 1) {
          const sep = document.createElement('span');
          sep.className = 'flow-sep';
          sep.setAttribute('aria-hidden', 'true');
          sep.textContent = '->';
          flowFragment.appendChild(sep);
        }
      });
      flowEl.replaceChildren(flowFragment);

      highlightsEl.replaceChildren(
        ...localized.highlights.map((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          return li;
        })
      );

      techEl.replaceChildren(
        ...project.tech.map((techName) => {
          const li = document.createElement('li');
          li.textContent = techName;
          return li;
        })
      );
    };

    const openModal = (key) => {
      lastFocusedEl = document.activeElement;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        const header = document.getElementById('site-header');
        if (header) header.style.paddingRight = `${scrollbarWidth}px`;
      }
      renderModal(key);
      backdrop.classList.add('is-open');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      setTimeout(() => closeBtn && closeBtn.focus(), 60);
    };

    const closeModal = () => {
      backdrop.classList.remove('is-open');
      backdrop.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
      const header = document.getElementById('site-header');
      if (header) header.style.paddingRight = '';
      if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
        lastFocusedEl.focus();
      }
    };

    const cycleProject = (delta) => {
      const idx = PROJECT_ORDER.indexOf(currentProjectKey);
      const nextIdx = (idx + delta + PROJECT_ORDER.length) % PROJECT_ORDER.length;
      renderModal(PROJECT_ORDER[nextIdx]);
    };

    document.querySelectorAll('.project-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        const key = card.dataset.project;
        if (key && hasOwn(PROJECTS, key)) {
          e.preventDefault();
          openModal(key);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (prevBtn) prevBtn.addEventListener('click', () => cycleProject(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => cycleProject(1));

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!backdrop.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        cycleProject(-1);
      } else if (e.key === 'ArrowRight') {
        cycleProject(1);
      } else if (e.key === 'Tab' && drawer) {
        const focusables = drawer.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    onLangChange(() => {
      renderModal(currentProjectKey);
    });
  }

  function resolveEmail(el) {
    if (!el || !el.dataset) return '';
    const user = el.dataset.emailUser;
    const domain = el.dataset.emailDomain;
    return user && domain ? `${user}@${domain}` : '';
  }

  function initEmailLinks() {
    document.querySelectorAll('[data-email-link]').forEach((link) => {
      const email = resolveEmail(link);
      if (!email) return;
      link.setAttribute('href', `mailto:${email}`);
      if (link.dataset.emailLink !== 'href-only') {
        link.textContent = email;
      }
    });
  }

  function initCopyEmail() {
    const copyBtn = document.getElementById('copy-email-btn');
    const copyLabel = document.getElementById('copy-email-label');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (!copyBtn) return;

    let resetTimer = null;
    let toastTimer = null;

    const showToast = (msg) => {
      if (!toast || !toastMessage) return;
      toastMessage.textContent = msg;
      toast.classList.add('is-visible');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
    };

    const copyText = async (text) => {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
      }
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', '');
      textarea.className = 'clipboard-scratch';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    };

    copyBtn.addEventListener('click', async () => {
      const email = resolveEmail(copyBtn);
      if (!email) return;
      try {
        await copyText(email);
        copyBtn.classList.add('is-copied');
        if (copyLabel) copyLabel.textContent = t('contact.copied');
        showToast(`${t('contact.toastCopied')} ${email}`);

        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          if (copyLabel) copyLabel.textContent = t('contact.copyAddress');
        }, 2200);
      } catch (err) {
        showToast(`${t('contact.toastManual')} ${email}`);
      }
    });

    onLangChange(() => {
      if (!copyLabel) return;
      copyLabel.textContent = copyBtn.classList.contains('is-copied')
        ? t('contact.copied')
        : t('contact.copyAddress');
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    initLanguage();
    initTheme();
    initMobileDrawer();
    initScrollTracking();
    initScrollReveals();
    initArchitectureCard();
    initProjectFilters();
    initProjectModal();
    initEmailLinks();
    initCopyEmail();

    // Apply initial saved language across all modules without cancelling opening trace
    applyLanguage(currentLang, { initial: true });
  });
})();
