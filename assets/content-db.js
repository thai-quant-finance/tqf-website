window.TQF_DB = {
  meta: {
    version: "2026-10-01",
    purpose:
      "Curated website database for long-term maintenance. Keep scraped official source data in site-data.js and maintain local website collections here.",
    updateCadence: {
      sourceSync: "Update when official TQF source pages change.",
      curatedContent:
        "Update this file for recurring activity, collaborators, articles, publications, academic pages, and career sections.",
    },
    collections: [
      "navigation",
      "team",
      "about",
      "quant",
      "bylaws",
      "activities",
      "collaborators",
      "academicPages",
      "careerPages",
      "publications",
      "articles",
    ],
  },
  navigation: {
    primary: [
      {
        slug: "home",
        labelTh: "หน้าแรก",
        labelEn: "Home",
        href: "index.html",
      },
      {
        slug: "about",
        labelTh: "เกี่ยวกับสมาคม",
        labelEn: "About",
        href: "about.html",
      },
      {
        slug: "team",
        labelTh: "คณะกรรมการ",
        labelEn: "Team",
        href: "team.html",
      },
      {
        slug: "bylaws",
        labelTh: "ข้อบังคับสมาคม",
        labelEn: "Bylaws",
        href: "bylaws.html",
      },
      {
        slug: "activities",
        labelTh: "กิจกรรม",
        labelEn: "Activities",
        href: "activities.html",
      },
      {
        slug: "collaborators",
        labelTh: "เครือข่ายความร่วมมือ",
        labelEn: "Collaborators",
        href: "collaborators.html",
      },
      {
        slug: "academic",
        labelTh: "วิชาการ",
        labelEn: "Academic",
        href: "academic.html",
      },
      {
        slug: "quant-pathway",
        labelTh: "เส้นทาง Quant",
        labelEn: "Quant Pathway",
        href: "quant-pathway.html",
      },
      {
        slug: "quant-jobs",
        labelTh: "งานด้าน Quant",
        labelEn: "Quant Jobs",
        href: "quant-jobs.html",
      },
      {
        slug: "training",
        labelTh: "การอบรม",
        labelEn: "Training",
        href: "training.html",
      },
    ],
    dropdowns: {
      activities: {
        th: [
          { href: "activities.html", label: "กิจกรรมทั้งหมด", slug: "activities" },
          { href: "announcements.html", label: "ประกาศทั้งหมด", slug: "announcements" },
          { href: "news.html", label: "ข่าวทั้งหมด", slug: "news" },
        ],
        en: [
          { href: "activities.html", label: "All Activities", slug: "activities" },
          { href: "announcements.html", label: "All Announcements", slug: "announcements" },
          { href: "news.html", label: "All News", slug: "news" },
        ],
      },
      collaborators: {
        th: [
          { href: "collaborators.html#facebook", label: "เพจเฟซบุ๊ก" },
          { href: "collaborators.html#institute", label: "สถาบัน" },
          { href: "collaborators.html#university", label: "มหาวิทยาลัย" },
          { href: "collaborators.html#company", label: "บริษัท" },
        ],
        en: [
          { href: "collaborators.html#facebook", label: "Facebook Pages" },
          { href: "collaborators.html#institute", label: "Institute" },
          { href: "collaborators.html#university", label: "University" },
          { href: "collaborators.html#company", label: "Company" },
        ],
      },
      academic: {
        th: [
          { href: "academic-committee-board.html", label: "คณะกรรมการวิชาการ" },
          { href: "academic-conference.html", label: "งานประชุมวิชาการ" },
          { href: "journal.html", label: "วารสาร" },
          { href: "magazine.html", label: "แมกกาซีน" },
          { href: "articles.html", label: "บทความ" },
          { href: "book-series.html", label: "ชุดหนังสือ" },
        ],
        en: [
          { href: "academic-committee-board.html", label: "Academic Committee Board" },
          { href: "academic-conference.html", label: "Academic Conference" },
          { href: "journal.html", label: "Journal" },
          { href: "magazine.html", label: "Magazine" },
          { href: "articles.html", label: "Articles" },
          { href: "book-series.html", label: "Book Series" },
        ],
      },
      career: {
        th: [
          { href: "quant-pathway.html", label: "เส้นทาง Quant", slug: "quant-pathway" },
          { href: "training.html", label: "การอบรม", slug: "training" },
          { href: "quant-jobs.html", label: "งานด้าน Quant", slug: "quant-jobs" },
          { href: "job-directory.html", label: "ค้นหางาน", slug: "job-directory" },
        ],
        en: [
          { href: "quant-pathway.html", label: "Quant Pathway", slug: "quant-pathway" },
          { href: "training.html", label: "Training", slug: "training" },
          { href: "quant-jobs.html", label: "Quant Jobs", slug: "quant-jobs" },
          { href: "job-directory.html", label: "Job Directory", slug: "job-directory" },
        ],
      },
    },
  },
  team: {
    roleEn: {
      นายก: "President",
      อุปนายก: "Vice President",
      สมาชิก: "Member",
      "สมาชิกและเหรัญญิก": "Committee Member and Treasurer",
      "สมาชิกและนายทะเบียน": "Committee Member and Registrar",
    },
    memberImagesByIndex: {
      0: "assets/team-pat-white.jpg",
      1: "assets/team-nuthdanai-white.jpg",
      2: "assets/team-anan-white.jpg",
      3: "assets/team-ronnawat-white.jpg",
      4: "assets/team-pasin-white.jpg",
      5: "assets/team-theerasit-white.jpg",
      10: "assets/team-foosin-white.jpg",
    },
    memberImageSourcesByIndex: {
      1: "https://th.linkedin.com/in/nuthdanai-w",
    },
  },
  about: {
    missionEn: [
      "Serve as a central network for quantitative analysts, financial engineers, and interested participants to exchange knowledge and experience.",
      "Build a network of quantitative analysts and financial engineers both within Thailand and internationally.",
      "Promote, develop, and strengthen professional standards for quantitative analysts and financial engineers in Thailand so they are respected locally and internationally.",
      "Create a correct understanding of careers in quantitative analysis and financial engineering.",
      "Encourage and support interested people to join activities that develop their capabilities and allow them to demonstrate their potential fully.",
    ],
    strategyEn: [
      "Develop and strengthen the capability of quantitative analysts, financial engineers, and interested participants in the related disciplines.",
      "Organize activities for knowledge exchange and network-building among quantitative analysts and financial engineers.",
      "Contribute to shaping the direction of the financial industry.",
    ],
  },
  quant: {
    overviewEn: [
      "Foundations that everyone entering the quant field should learn, regardless of specialization, because they are the base for analysis, reasoning, and future development.",
      "Core knowledge that every quant should study, not only for their own role but to understand the wider financial industry and communicate effectively with adjacent specialists.",
      "Specialized knowledge that quants can pursue based on their interests or intended expertise, helping both personal differentiation and industry capability-building.",
    ],
    introEn:
      "The TQF team developed a skills pathway for people interested in quant careers, gathering the knowledge areas worth studying and organizing them into three main levels.",
    titlesEn: [
      "Finance",
      "Mathematics",
      "Programming",
      "Advanced Mathematical Methods",
      "Asset Behavior & Modeling",
      "Fixed Income and Credit",
      "Risk Management",
      "Machine Learning & Data Science",
      "Portfolio Management",
      "Trading & Execution",
      "Derivatives and Advanced Products",
      "Credit Risk Management",
      "Regulation & Implementation",
    ],
    titlesTh: [
      "การเงิน",
      "คณิตศาสตร์",
      "การเขียนโปรแกรม",
      "วิธีการทางคณิตศาสตร์ขั้นสูง",
      "พฤติกรรมและแบบจำลองสินทรัพย์",
      "ตราสารหนี้และเครดิต",
      "การบริหารความเสี่ยง",
      "การเรียนรู้ของเครื่องและวิทยาการข้อมูล",
      "การจัดการพอร์ตการลงทุน",
      "การซื้อขายและการดำเนินการซื้อขาย",
      "อนุพันธ์และผลิตภัณฑ์ขั้นสูง",
      "การบริหารความเสี่ยงเครดิต",
      "กฎระเบียบและการนำไปใช้",
    ],
  },
  bylaws: {
    sectionTitlesEn: [
      "Section 1 General Provisions",
      "Section 3 Association Administration",
      "Section 4 General Meetings",
      "Section 5 Finance and Assets",
      "Section 6 Amendments and Dissolution",
      "Section 7 Miscellaneous",
      "Section 8 Transitional Provisions",
    ],
    sectionSummariesEn: [
      [
        "Defines the association’s Thai and English names and the TQF abbreviation.",
        "States the official head office in Chatuchak, Bangkok, and the core non-political objectives of the association.",
        "Sets out membership categories, eligibility criteria, and annual fee levels for ordinary, associate, student, expert, and honorary members.",
      ],
      [
        "Covers member rights, duties, resignation, termination, and the consequences of unpaid dues or misconduct.",
        "Defines board composition, officer roles, term length, powers, and the rules for board meetings and resolutions.",
      ],
      [
        "Establishes ordinary and extraordinary general meetings, including when they must be called and who can request them.",
        "Requires annual general meetings to be held within March and meeting notices to be sent by email at least seven days in advance.",
        "Specifies quorum and voting rules for general meetings.",
      ],
      [
        "Places finances and assets under the responsibility of the board and requires funds to be kept with a stable bank in the association’s name.",
        "Defines signature rules for checks, cash disbursement limits, bookkeeping requirements, and the role of the auditor.",
      ],
      [
        "States that amendments require a two-thirds vote at a duly convened general meeting.",
        "States that dissolution requires a three-quarters vote and that remaining assets must go to a Thai charitable-purpose juristic person.",
      ],
      [
        "Provides that the general meeting resolves interpretation questions by majority vote.",
        "Applies the Civil and Commercial Code on associations where the bylaws are silent.",
        "Confirms that the association cannot distribute profits to individuals.",
      ],
      [
        "Confirms that the bylaws take effect once the association is registered as a juristic person.",
        "Provides that the founders become ordinary members and the initial committee starts from the registration date.",
      ],
    ],
  },
  announcements: {
    items: [
      {
        date: "2026-07-01",
        href: "https://sci.tu.ac.th/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82-41/",
        imageSrc: "assets/announcement-tu-tqf-mou-2026.jpg",
        categoryTh: "ประกาศความร่วมมือ",
        categoryEn: "Partnership Announcement",
        titleTh:
          "คณะวิทยาศาสตร์และเทคโนโลยี มธ. และ TQF ลงนาม MOU ด้านการเงินเชิงปริมาณ",
        titleEn:
          "Thammasat Science and Technology and TQF Sign Quantitative Finance MOU",
        copyTh:
          "ความร่วมมือระยะเวลา 5 ปี เพื่อพัฒนาหลักสูตร กิจกรรมวิชาการ การแลกเปลี่ยนผู้เชี่ยวชาญ และงานวิจัยด้านการวิเคราะห์เชิงปริมาณ การเงินเชิงคณิตศาสตร์ และวิทยาการข้อมูล",
        copyEn:
          "A five-year collaboration covering curriculum development, academic activities, expert exchange, and joint research in quantitative analysis, mathematical finance, and data science.",
        timeTh: "09:00 - 12:00 น.",
        timeEn: "9:00 AM - 12:00 PM",
        locationTh: "มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต",
        locationEn: "Thammasat University, Rangsit Campus",
      },
    ],
  },
  news: {
    items: [
      {
        date: "2026-01-01",
        href: "https://www.cmdf.or.th/th/announcement-dynamic/global-financial-certifications-scholarship",
        imageSrc: "assets/partner-cqf.svg",
        categoryTh: "ข่าวทุนพัฒนาวิชาชีพ",
        categoryEn: "Professional Certification News",
        titleTh:
          "CMDF เปิดรับทุนสนับสนุน Global Financial Certifications สำหรับบุคลากรตลาดทุน",
        titleEn:
          "CMDF Opens Global Financial Certifications Grants for Capital-Market Professionals",
        copyTh:
          "กองทุนส่งเสริมการพัฒนาตลาดทุนสนับสนุนค่าใช้จ่ายสำหรับหลักสูตร CQF และการสอบ CMT, CAIA และ FRM ในรูปแบบทุนให้เปล่าโดยไม่ต้องสอบชิงทุน ผู้มีสิทธิ์สามารถขอเบิกค่าใช้จ่ายจริงได้ภายในเดือนพฤษภาคม 2570 ตามหลักเกณฑ์ของ CMDF",
        copyEn:
          "The Capital Market Development Fund supports CQF study and CMT, CAIA, and FRM examination costs through non-competitive grants. Eligible professionals may claim reimbursement for actual expenses through May 2027, subject to CMDF conditions.",
        timeTh: "เปิดรับตามเงื่อนไขโครงการ",
        timeEn: "Applications subject to program conditions",
        locationTh: "กองทุนส่งเสริมการพัฒนาตลาดทุน (CMDF)",
        locationEn: "Capital Market Development Fund (CMDF)",
      },
    ],
  },
  activities: {
    items: [
      {
        date: "2026-09-30",
        href: "https://www.facebook.com/quantcornerthailand",
        imageSrc: "assets/activity-quant-career-2026.png",
        categoryTh: "กิจกรรมแนะแนวอาชีพ",
        categoryEn: "Career Event",
        titleTh: "ติวฟรีเพื่อเส้นทางอาชีพ Quant Career",
        titleEn: "Free Quant Career Guidance Session",
        copyTh:
          "กิจกรรมแนะแนวเส้นทางอาชีพด้าน Quant โดย พศิน มรุปัณฑ์ธร, PhD, CQF พร้อมแนะนำงานพัฒนาแบบจำลองทางการเงินและการใช้ Monte Carlo simulation สำหรับกำหนดราคาและป้องกันความเสี่ยงของตราสารอนุพันธ์",
        copyEn:
          "A Quant career guidance session with Pasin Marupantorn, PhD, CQF, featuring financial-model development and Monte Carlo simulation for pricing and hedging equity derivatives.",
        timeTh: "19:00 - 21:00 น.",
        timeEn: "7:00 PM - 9:00 PM",
        locationTh: "Groundup Live",
        locationEn: "Groundup Live",
      },
      {
        date: "2026-09-29",
        href: "https://www.facebook.com/profile.php?id=61569334229421",
        imageSrc: "assets/activity-market-microstructure-2026.png",
        categoryTh: "เสวนาวิชาการออนไลน์",
        categoryEn: "Online Academic Talk",
        titleTh: "Market Microstructure of Equity Markets",
        titleEn: "Market Microstructure of Equity Markets",
        copyTh:
          "GroundUp Live ว่าด้วยโครงสร้างจุลภาคของตลาดหุ้น โดย Ritik Sharma นักวิจัยเชิงปริมาณและผู้เขียนหนังสือ ดำเนินรายการโดย Tea Aaron, FRM, CQF",
        copyEn:
          "A GroundUp Live session on equity-market microstructure with quantitative researcher and author Ritik Sharma, moderated by Tea Aaron, FRM, CQF.",
        timeTh: "21:00 - 21:45 น.",
        timeEn: "9:00 PM - 9:45 PM",
        locationTh: "ออนไลน์ผ่าน GroundUp Live",
        locationEn: "Online via GroundUp Live",
      },
      {
        date: "",
        dateLabelTh: "รอประกาศกำหนดการ",
        dateLabelEn: "Schedule to be announced",
        upcoming: true,
        href: "assets/activity-ai-battle-finance.png",
        imageSrc: "assets/activity-ai-battle-finance.png",
        categoryTh: "กิจกรรมด้าน AI และการเงิน",
        categoryEn: "AI and Finance Event",
        titleTh: "AI Battle in Finance",
        titleEn: "AI Battle in Finance",
        copyTh:
          "กิจกรรมด้านการประยุกต์ใช้ปัญญาประดิษฐ์ ข้อมูล และกลยุทธ์ในตลาดการเงิน ภายใต้แนวคิด Data, Strategy, Discipline, Victory",
        copyEn:
          "An event exploring the application of artificial intelligence, data, and strategy in finance under the theme Data, Strategy, Discipline, Victory.",
        timeTh: "กำหนดการจะแจ้งภายหลัง",
        timeEn: "Time to be announced",
        locationTh: "สถานที่จะแจ้งภายหลัง",
        locationEn: "Venue to be announced",
      },
      {
        date: "2026-09-19",
        href: "assets/activity-digital-future-lab-2026.png",
        imageSrc: "assets/activity-digital-future-lab-2026.png",
        categoryTh: "สัมมนาและเวิร์กช็อป",
        categoryEn: "Seminar and Workshop",
        titleTh: "Digital Future Lab: การเงินดิจิทัลและ AI สู่ธุรกิจยุคใหม่",
        titleEn: "Digital Future Lab: Digital Finance and AI for the New Business Era",
        copyTh:
          "กิจกรรมเรียนรู้และลงมือทำด้านการเงินดิจิทัลและ AI ร่วมกับ ดร.กรณ์ พูนศิริวงศ์, Tapfah Vatanyootaveewat, Pokpong Klongchaipakdee และ ดร.พศิน มรุปัณฑ์ธร จัดโดยเครือข่ายความร่วมมือด้านการเงิน นวัตกรรม และการลงทุน",
        copyEn:
          "A full-day learning event on digital finance and practical AI applications with Dr. Korn Poonsirivong, Tapfah Vatanyootaveewat, Pokpong Klongchaipakdee, and Dr. Pasin Marupantorn.",
        timeTh: "8:30 - 16:30 น.",
        timeEn: "8:30 AM - 4:30 PM",
        locationTh: "คณะเศรษฐศาสตร์ มหาวิทยาลัยเชียงใหม่",
        locationEn: "Faculty of Economics, Chiang Mai University",
      },
      {
        date: "2026-03-06",
        href: "https://www.instagram.com/p/DVGZRqlklfy/",
        imageSrc: "assets/activity-quantcu-worldquant-2026.jpg",
        categoryTh: "กิจกรรมความร่วมมือ",
        categoryEn: "Collaborative Event",
        titleTh: "TQF x WorldQuant BRAIN: International Quant Championship 2025",
        titleEn: "TQF x WorldQuant BRAIN: International Quant Championship 2025",
        copyTh:
          "กิจกรรม Information Session แนะนำ Quant Finance และการแข่งขัน International Quant Championship โดย TQF, WorldQuant BRAIN และ Quant CU พร้อมการบรรยายจาก Sithipath Yooprong และ ณัฐดนัย หวังพระธรรม",
        copyEn:
          "An information session introducing Quant Finance and the International Quant Championship, presented by TQF, WorldQuant BRAIN, and Quant CU with Sithipath Yooprong and Nuthdanai Wangpratham.",
        timeTh: "16:30 - 18:30 น.",
        timeEn: "4:30 PM - 6:30 PM",
        locationTh: "ห้อง 201A อาคารวิศวฯ 100 ปี จุฬาลงกรณ์มหาวิทยาลัย",
        locationEn: "Room 201A, Engineering 100 Years Anniversary Building, Chulalongkorn University",
      },
      {
        date: "2025-10-25",
        href: "https://www.instagram.com/p/DQE7gHeEs2r/",
        imageSrc: "assets/activity-quantcu-workshop-2025.jpg",
        categoryTh: "เวิร์กช็อป",
        categoryEn: "Workshop",
        titleTh: "Intro to Quant Workshop",
        titleEn: "Intro to Quant Workshop",
        copyTh:
          "เวิร์กช็อปสำหรับนิสิตนักศึกษาทุกมหาวิทยาลัย ครอบคลุม Portfolio Optimization โดย ณัฐดนัย หวังพระธรรม และ Options Pricing โดย ภัทร อภิวัฒนกุล พร้อมกิจกรรม hands-on coding",
        copyEn:
          "A workshop for university students covering portfolio optimization with Nuthdanai Wangpratham and options pricing with Phat Aphiwatanakoon, including hands-on coding.",
        timeTh: "9:00 - 16:00 น.",
        timeEn: "9:00 AM - 4:00 PM",
        locationTh: "คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
        locationEn: "Faculty of Engineering, Chulalongkorn University",
      },
      {
        date: "2025-08-21",
        href: "https://www.instagram.com/p/DNaY-NuSdBl/",
        imageSrc: "assets/activity-quantcu-first-meet-2025.jpg",
        categoryTh: "กิจกรรมแนะนำชมรม",
        categoryEn: "Club Introduction",
        titleTh: "Quant CU Club First Meet",
        titleEn: "Quant CU Club First Meet",
        copyTh:
          "กิจกรรมออนไลน์แนะนำ Quant CU เส้นทางการเรียนรู้ ความหมายของ Quantitative Finance และภาพรวมอาชีพสาย Quant โดย พศิน มรุปัณฑ์ธร",
        copyEn:
          "An online introduction to Quant CU, its learning roadmap, quantitative finance, and quant careers with Pasin Marupantorn.",
        timeTh: "16:30 - 18:30 น.",
        timeEn: "4:30 PM - 6:30 PM",
        locationTh: "ออนไลน์ผ่าน Zoom",
        locationEn: "Online via Zoom",
      },
      {
        date: "2024-05-26",
        href: "https://www.instagram.com/p/C7TdOjsypuh/",
        imageSrc: "assets/activity-quantcu-prospect-2024.jpg",
        categoryTh: "เสวนาวิชาการ",
        categoryEn: "Academic Forum",
        titleTh: "The Prospect for Quant: Search for Order and Chaos",
        titleEn: "The Prospect for Quant: Search for Order and Chaos",
        copyTh:
          "วงสนทนาเกี่ยวกับ quantitative investing ต้นกำเนิดของการบริหารความเสี่ยง แบบจำลองตัวแทนในตลาดการเงิน และคณิตศาสตร์สำหรับสาย Quant",
        copyEn:
          "A public forum on quantitative investing, the origins of risk management, agent-based models in finance, and mathematics for quant careers.",
        timeTh: "13:00 - 17:30 น.",
        timeEn: "1:00 PM - 5:30 PM",
        locationTh: "Amphitheatre, C asean Samyan CO-OP",
        locationEn: "Amphitheatre, C asean Samyan CO-OP",
      },
    ],
  },
  collaborators: {
    groups: {
      th: [
        {
          key: "facebook",
          title: "เพจเฟซบุ๊ก",
          description:
            "ช่องทางสาธารณะสำหรับติดตามข่าวสาร กิจกรรม และการสื่อสารของหน่วยงานที่เกี่ยวข้องกับสายงานควอนท์และการเงินเชิงวิชาชีพ",
          items: [
            {
              name: "QuantCorner",
              href: "https://www.facebook.com/quantcornerthailand",
              logoSrc: "assets/partner-quantcorner-facebook.jpg",
              copy:
                "เพจความรู้และชุมชนด้าน quantitative finance การลงทุนเชิงปริมาณ และกิจกรรมสำหรับผู้สนใจสายงานควอนท์",
            },
            {
              name: "GroundUp Academy",
              href: "https://www.facebook.com/profile.php?id=61569334229421",
              logoSrc: "assets/partner-groundup-facebook.jpg",
              copy:
                "แหล่งเรียนรู้และกิจกรรมด้านการลงทุน การเงิน การวิเคราะห์ข้อมูล และการพัฒนาทักษะวิชาชีพ",
            },
            {
              name: "Thai Quant Finance",
              href: "https://www.facebook.com/profile.php?id=61578789130423",
              logoSrc: "assets/partner-thai-quant-finance-facebook.jpg",
              copy:
                "เพจสำหรับแลกเปลี่ยนความรู้ ข่าวสาร และโอกาสทางวิชาการและวิชาชีพด้าน quantitative finance ในประเทศไทย",
            },
            {
              name: "Myquantbook",
              href: "https://www.facebook.com/profile.php?id=61578903234923",
              logoSrc: "assets/partner-myquantbook-facebook.svg",
              copy:
                "เพจแบ่งปันแนวคิดด้าน Quant Trading จากงานวิจัย เวิร์กช็อป สัมมนา การบรรยาย และการทดลองใช้งานจริง",
            },
            {
              name: "QuantGeek Investing like a Quant",
              href: "https://www.facebook.com/quantgeek",
              logoSrc: "assets/partner-quantgeek-facebook.jpg",
              copy:
                "เนื้อหาด้านการลงทุนเชิงปริมาณ การวิเคราะห์ข้อมูล และแนวคิดสำหรับการลงทุนอย่างเป็นระบบ",
            },
            {
              name: "ZeroGreeks",
              href: "https://www.facebook.com/ZeroGreeks0",
              logoSrc: "assets/partner-zerogreeks-facebook.jpg",
              copy:
                "ความรู้ด้านอนุพันธ์ ออปชัน ความผันผวน และการบริหารความเสี่ยงสำหรับผู้สนใจตลาดการเงิน",
            },
          ],
        },
        {
          key: "institute",
          title: "สถาบัน",
          description:
            "สถาบันวิชาชีพและองค์กรด้านการรับรองความรู้ที่มีบทบาทต่อสายงาน quantitative finance และสาขาที่เกี่ยวข้อง",
          items: [
            {
              name: "CQF",
              href: "https://www.cqf.com/",
              logoSrc: "assets/partner-cqf.svg",
              copy:
                "Certificate in Quantitative Finance เป็นหลักสูตรวิชาชีพด้าน quantitative finance ระดับสากล",
            },
            {
              name: "CFA Institute",
              href: "https://www.cfainstitute.org/",
              logoSrc: "assets/partner-cfa.svg",
              copy:
                "องค์กรวิชาชีพด้านการลงทุน การเงิน และจริยธรรมวิชาชีพที่ได้รับการยอมรับในระดับนานาชาติ",
            },
            {
              name: "Society of Actuaries",
              href: "https://www.soa.org/",
              logoSrc: "assets/partner-soa.svg",
              copy:
                "องค์กรวิชาชีพด้าน actuarial science ที่เกี่ยวข้องกับการวิเคราะห์ความเสี่ยงและแบบจำลองเชิงปริมาณ",
            },
          ],
        },
        {
          key: "university",
          title: "มหาวิทยาลัย",
          description:
            "มหาวิทยาลัยและโครงการการศึกษาที่เกี่ยวข้องกับ financial engineering, quantitative finance และชุมชนวิชาการสายควอนท์",
          items: [
            {
              name: "KMITL-NIDA Financial Engineering",
              href: "https://nida.kmitl.ac.th/fe/",
              logoSrc: "assets/partner-kmitl-nida.svg",
              copy: "โครงการ Double Degree ด้านวิศวกรรมการเงินของ KMITL และ NIDA",
            },
            {
              name: "WorldQuant University",
              href: "https://www.wqu.edu/",
              logoSrc: "assets/partner-wqu.svg",
              copy:
                "มหาวิทยาลัยออนไลน์ที่มีหลักสูตรด้าน data science และ financial engineering",
            },
            {
              name: "Quant CU",
              href: "https://www.instagram.com/quantcu/?hl=en",
              logoSrc: "assets/partner-quant-cu.svg",
              copy:
                "ชุมชนด้าน quantitative computational finance ของนักศึกษาจุฬาลงกรณ์มหาวิทยาลัย",
            },
            {
              name: "คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยธรรมศาสตร์",
              href: "https://sci.tu.ac.th/",
              logoSrc: "assets/partner-thammasat-science.png",
              copy:
                "คณะวิทยาศาสตร์และเทคโนโลยีที่จัดการศึกษาและวิจัยด้านวิทยาศาสตร์ คณิตศาสตร์ สถิติ วิทยาการคอมพิวเตอร์ และเทคโนโลยีประยุกต์",
            },
          ],
        },
        {
          key: "company",
          title: "บริษัท",
          description:
            "องค์กรและผู้ให้บริการด้านข้อมูล เทคโนโลยี และการวิเคราะห์ที่มีบทบาทในระบบนิเวศของ quantitative finance",
          items: [
            {
              name: "Bloomberg Professional Services",
              href: "https://www.bloomberg.com/professional",
              logoSrc: "assets/partner-bloomberg.svg",
              copy:
                "บริการข้อมูล ข่าวสาร และเครื่องมือวิเคราะห์สำหรับผู้ปฏิบัติงานในตลาดการเงิน",
            },
            {
              name: "LSEG Data & Analytics",
              href: "https://www.lseg.com/content/lseg/en_us/data-analytics.html",
              logoSrc: "assets/partner-lseg.svg",
              copy:
                "แพลตฟอร์มข้อมูลและการวิเคราะห์ตลาดการเงินของ London Stock Exchange Group",
            },
            {
              name: "WorldQuant",
              href: "https://www.worldquant.com/",
              logoSrc: "assets/partner-worldquant.svg",
              copy:
                "บริษัทด้าน quantitative research และการลงทุนเชิงระบบในระดับสากล",
            },
          ],
        },
      ],
      en: [
        {
          key: "facebook",
          title: "Facebook Pages",
          description:
            "Public social channels for following updates, events, and announcements from organizations relevant to quantitative finance and professional development.",
          items: [
            {
              name: "QuantCorner",
              href: "https://www.facebook.com/quantcornerthailand",
              logoSrc: "assets/partner-quantcorner-facebook.jpg",
              copy:
                "A quantitative-finance knowledge community sharing systematic-investing insights and events for aspiring quant professionals.",
            },
            {
              name: "GroundUp Academy",
              href: "https://www.facebook.com/profile.php?id=61569334229421",
              logoSrc: "assets/partner-groundup-facebook.jpg",
              copy:
                "Learning programs and events covering investment, finance, data analysis, and professional capability development.",
            },
            {
              name: "Thai Quant Finance",
              href: "https://www.facebook.com/profile.php?id=61578789130423",
              logoSrc: "assets/partner-thai-quant-finance-facebook.jpg",
              copy:
                "Thai quantitative-finance knowledge, news, and academic and professional opportunities.",
            },
            {
              name: "Myquantbook",
              href: "https://www.facebook.com/profile.php?id=61578903234923",
              logoSrc: "assets/partner-myquantbook-facebook.svg",
              copy:
                "Quant Trading ideas drawn from research, workshops, seminars, lectures, and practical testing.",
            },
            {
              name: "QuantGeek Investing like a Quant",
              href: "https://www.facebook.com/quantgeek",
              logoSrc: "assets/partner-quantgeek-facebook.jpg",
              copy:
                "Quantitative-investing, data-analysis, and systematic-investment concepts for practitioners and learners.",
            },
            {
              name: "ZeroGreeks",
              href: "https://www.facebook.com/ZeroGreeks0",
              logoSrc: "assets/partner-zerogreeks-facebook.jpg",
              copy:
                "Educational content on derivatives, options, volatility, and financial risk management.",
            },
          ],
        },
        {
          key: "institute",
          title: "Institute",
          description:
            "Professional institutes and credentialing bodies relevant to quantitative finance, investment analysis, and adjacent technical disciplines.",
          items: [
            {
              name: "CQF",
              href: "https://www.cqf.com/",
              logoSrc: "assets/partner-cqf.svg",
              copy:
                "The Certificate in Quantitative Finance is a professional qualification focused on quant finance and financial engineering.",
            },
            {
              name: "CFA Institute",
              href: "https://www.cfainstitute.org/",
              logoSrc: "assets/partner-cfa.svg",
              copy:
                "A global professional body for investment practitioners, ethics, and finance education.",
            },
            {
              name: "Society of Actuaries",
              href: "https://www.soa.org/",
              logoSrc: "assets/partner-soa.svg",
              copy:
                "A leading actuarial professional organization covering risk, modeling, and quantitative decision frameworks.",
            },
          ],
        },
        {
          key: "university",
          title: "University",
          description:
            "Academic programs and university-linked communities relevant to financial engineering, quantitative finance, and applied computational finance.",
          items: [
            {
              name: "KMITL-NIDA Financial Engineering",
              href: "https://nida.kmitl.ac.th/fe/",
              logoSrc: "assets/partner-kmitl-nida.svg",
              copy:
                "A Thai double-degree program in financial engineering jointly offered by KMITL and NIDA.",
            },
            {
              name: "WorldQuant University",
              href: "https://www.wqu.edu/",
              logoSrc: "assets/partner-wqu.svg",
              copy:
                "An online university offering quantitative programs including financial engineering and data science.",
            },
            {
              name: "Quant CU",
              href: "https://www.instagram.com/quantcu/?hl=en",
              logoSrc: "assets/partner-quant-cu.svg",
              copy:
                "A Chulalongkorn University student community focused on quantitative computational finance.",
            },
            {
              name: "Faculty of Science and Technology, Thammasat University",
              href: "https://sci.tu.ac.th/en/",
              logoSrc: "assets/partner-thammasat-science.png",
              copy:
                "A faculty delivering education and research in science, mathematics, statistics, computer science, and applied technology.",
            },
          ],
        },
        {
          key: "company",
          title: "Company",
          description:
            "Companies and platforms active in market data, analytics, quantitative research, and financial technology.",
          items: [
            {
              name: "Bloomberg Professional Services",
              href: "https://www.bloomberg.com/professional",
              logoSrc: "assets/partner-bloomberg.svg",
              copy:
                "Market data, news, and analytical infrastructure used across global financial institutions.",
            },
            {
              name: "LSEG Data & Analytics",
              href: "https://www.lseg.com/content/lseg/en_us/data-analytics.html",
              logoSrc: "assets/partner-lseg.svg",
              copy:
                "Financial markets data and analytics services from London Stock Exchange Group.",
            },
            {
              name: "WorldQuant",
              href: "https://www.worldquant.com/",
              logoSrc: "assets/partner-worldquant.svg",
              copy:
                "A quantitative research and systematic investment firm with a global presence.",
            },
          ],
        },
      ],
    },
  },
  academicPages: {
    academic: {
      th: {
        eyebrow: "วิชาการ",
        title: "วิชาการ",
        body:
          "ศูนย์รวมองค์ความรู้และแนวทางการพัฒนาทักษะสำหรับผู้สนใจสาย quantitative finance, financial engineering และการวิเคราะห์เชิงปริมาณ",
        panelTitle: "โครงสร้างด้านวิชาการ",
        panelBody:
          "หน้าเว็บนี้รวบรวมกรอบการเรียนรู้ ประเด็นองค์ความรู้หลัก และเครือข่ายด้านวิชาการที่เกี่ยวข้องกับภารกิจของสมาคม",
        imageAlt: "ภาพประกอบด้านวิชาการของสมาคม",
        highlights: [
          {
            href: "academic-committee-board.html",
            kicker: "คณะกรรมการ",
            title: "คณะกรรมการวิชาการ",
            copy:
              "โครงสร้างคณะกรรมการวิชาการสำหรับกำกับทิศทางองค์ความรู้ มาตรฐาน และการพัฒนากิจกรรมด้านวิชาการของสมาคม",
          },
          {
            href: "journal.html",
            kicker: "วารสาร",
            title: "วารสาร",
            copy:
              "พื้นที่สำหรับบทความ งานวิเคราะห์ และองค์ความรู้เชิงลึกที่เกี่ยวข้องกับ quantitative finance และ financial engineering",
          },
          {
            href: "magazine.html",
            kicker: "สื่อเผยแพร่",
            title: "แมกกาซีน",
            copy:
              "ช่องทางนำเสนอข่าวสาร บทสรุปประเด็นวิชาการ และเนื้อหาที่เข้าถึงได้ง่ายสำหรับสมาชิกและผู้สนใจ",
          },
          {
            href: "articles.html",
            kicker: "บทความ",
            title: "บทความ",
            copy:
              "รวมบทความเรียบเรียงเชิงวิชาการจากเนื้อหาของสมาคมในรูปแบบอ่านต่อได้บนเว็บไซต์",
          },
          {
            href: "book-series.html",
            kicker: "สิ่งพิมพ์",
            title: "ชุดหนังสือ",
            copy:
              "คลังหนังสือและคู่มือดาวน์โหลดที่พัฒนาจากเนื้อหาวิชาการของสมาคมในรูปแบบอ่านสะดวกและพร้อมใช้งาน",
          },
          {
            href: "academic-conference.html",
            kicker: "งานประชุม",
            title: "งานประชุมวิชาการ",
            copy:
              "พื้นที่สำหรับประกาศกำหนดการประชุมวิชาการ หัวข้อการนำเสนอ การลงทะเบียน และข้อมูลวิทยากรของสมาคม",
          },
        ],
        pillars: [
          "พื้นฐานด้านการเงิน คณิตศาสตร์ และการเขียนโปรแกรม",
          "องค์ความรู้หลักด้านการวิเคราะห์สินทรัพย์ ความเสี่ยง และตราสารการเงิน",
          "หัวข้อเฉพาะทางด้าน machine learning, portfolio management, trading และ regulation",
        ],
      },
      en: {
        eyebrow: "Academic",
        title: "Academic",
        body:
          "A knowledge hub for people interested in quantitative finance, financial engineering, and applied quantitative analysis.",
        panelTitle: "Academic structure",
        panelBody:
          "This page brings together learning pathways, core knowledge areas, and academic network references aligned with the association’s mission.",
        imageAlt: "Academic visual",
        highlights: [
          {
            href: "academic-committee-board.html",
            kicker: "Committee",
            title: "Academic Committee Board",
            copy:
              "A dedicated academic committee structure for knowledge direction, standards, and the development of association-led academic work.",
          },
          {
            href: "journal.html",
            kicker: "Journal",
            title: "Journal",
            copy:
              "A publication space for articles, analysis, and in-depth knowledge relevant to quantitative finance and financial engineering.",
          },
          {
            href: "magazine.html",
            kicker: "Magazine",
            title: "Magazine",
            copy:
              "An accessible publication format for news, summaries, interviews, and academic communication for members and the wider community.",
          },
          {
            href: "articles.html",
            kicker: "Articles",
            title: "Articles",
            copy:
              "Long-form article pages developed from the association’s published academic and institutional content.",
          },
          {
            href: "book-series.html",
            kicker: "Publications",
            title: "Book Series",
            copy:
              "A downloadable library of books and handbooks developed from the association’s academic content.",
          },
          {
            href: "academic-conference.html",
            kicker: "Conference",
            title: "Academic Conference",
            copy:
              "A formal page for conference schedules, registration details, speaker information, and academic event announcements.",
          },
        ],
        pillars: [
          "Foundations in finance, mathematics, and programming",
          "Core knowledge in asset behavior, risk, and financial instruments",
          "Specialized topics including machine learning, portfolio management, trading, and regulation",
        ],
      },
    },
    academicConference: {
      th: {
        eyebrow: "วิชาการ",
        title: "งานประชุมวิชาการ",
        body:
          "รวบรวมงานประชุมและการประชุมเชิงปฏิบัติการด้านการเงินเชิงปริมาณ การบริหารความเสี่ยง และการเงินเพื่อการเปลี่ยนแปลงสภาพภูมิอากาศ",
        overview:
          "รายการงานประชุมที่ผ่านมา พร้อมวันจัดงาน สถานที่ รูปแบบการเข้าร่วม และเว็บไซต์ทางการของแต่ละงาน",
        events: [
          {
            year: "2025",
            status: "งานประชุมที่ผ่านมา",
            title: "Climate Finance & Risk 2025",
            subtitle: "Emerging Challenges, Policies and Financial Strategies",
            dates: "10–12 ธันวาคม 2025",
            venue:
              "Macquarie Business School City Campus ชั้น 24 เลขที่ 123 Pitt Street เมืองซิดนีย์ ประเทศออสเตรเลีย",
            format: "เข้าร่วม ณ สถานที่จัดงาน หรือผ่าน Zoom",
            summary:
              "เวทีแลกเปลี่ยนระหว่างนักวิชาการ ผู้เชี่ยวชาญในภาคอุตสาหกรรม และหน่วยงานกำกับดูแล ครอบคลุมการเงินคณิตศาสตร์ การบริหารความเสี่ยง สถิติ และการเรียนรู้ของเครื่องสำหรับโจทย์ด้านภูมิอากาศ",
            organizer:
              "จัดโดย Centre for Emerging Risks และ Centre for Transforming Energy Markets ณ Macquarie University Business School",
            sourceHref: "https://sites.google.com/view/climate-finance-risk-2025/home",
          },
          {
            year: "2024",
            status: "งานประชุมที่ผ่านมา",
            title: "Climate Finance & Risk 2024",
            subtitle: "Emerging Challenges, Policies and Financial Strategies",
            dates: "28–30 พฤศจิกายน 2024",
            venue:
              "Seminar Room 5, The Institute of Statistical Mathematics (ISM) กรุงโตเกียว ประเทศญี่ปุ่น",
            format: "เข้าร่วม ณ สถานที่จัดงาน หรือผ่าน Zoom",
            summary:
              "การประชุมเชิงปฏิบัติการสำหรับผู้เชี่ยวชาญด้านคณิตศาสตร์ สถิติ และสิ่งแวดล้อม เพื่อแลกเปลี่ยนงานวิจัยเกี่ยวกับความเสี่ยงจากสภาพภูมิอากาศ กลยุทธ์ทางการเงิน และวิธีการเชิงปริมาณ",
            organizer:
              "จัดโดยเครือข่ายนักวิชาการจาก ISM, Macquarie University, University of California Santa Barbara, UCL และสถาบันพันธมิตร",
            sourceHref: "https://sites.google.com/view/climate-finance-and-risk-2024/home",
          },
        ],
      },
      en: {
        eyebrow: "Academic",
        title: "Academic Conference",
        body:
          "A record of conferences and workshops in quantitative finance, risk management, and climate finance.",
        overview:
          "Past conferences with dates, venues, attendance formats, and links to their official websites.",
        events: [
          {
            year: "2025",
            status: "Past conference",
            title: "Climate Finance & Risk 2025",
            subtitle: "Emerging Challenges, Policies and Financial Strategies",
            dates: "10–12 December 2025",
            venue:
              "Macquarie Business School City Campus, Level 24, 123 Pitt Street, Sydney, Australia",
            format: "In person or via Zoom",
            summary:
              "An exchange among academics, industry experts, and regulators covering financial mathematics, risk management, statistics, and machine learning for climate-related challenges.",
            organizer:
              "Hosted by the Centre for Emerging Risks and the Centre for Transforming Energy Markets at Macquarie University Business School.",
            sourceHref: "https://sites.google.com/view/climate-finance-risk-2025/home",
          },
          {
            year: "2024",
            status: "Past conference",
            title: "Climate Finance & Risk 2024",
            subtitle: "Emerging Challenges, Policies and Financial Strategies",
            dates: "28–30 November 2024",
            venue:
              "Seminar Room 5, The Institute of Statistical Mathematics (ISM), Tokyo, Japan",
            format: "In person or via Zoom",
            summary:
              "A workshop for experts in mathematics, statistics, and environmental studies to exchange research on climate risk, financial strategies, and quantitative methods.",
            organizer:
              "Organised by an academic network from ISM, Macquarie University, the University of California Santa Barbara, UCL, and partner institutions.",
            sourceHref: "https://sites.google.com/view/climate-finance-and-risk-2024/home",
          },
        ],
      },
    },
    academicCommitteeBoard: {
      th: {
        eyebrow: "วิชาการ",
        title: "คณะกรรมการวิชาการ",
        body:
          "หน้าสำหรับโครงสร้างคณะกรรมการวิชาการของสมาคม โดยใช้เผยแพร่บทบาท หน้าที่ และองค์ประกอบของคณะกรรมการเมื่อสมาคมกำหนดรายละเอียดอย่างเป็นทางการ",
        imageAlt: "ภาพประกอบคณะกรรมการวิชาการ",
        overview:
          "ส่วนนี้ใช้เป็นพื้นที่อย่างเป็นทางการสำหรับแสดงโครงสร้างการกำกับดูแลงานวิชาการของสมาคม",
        bullets: [
          "บทบาทในการกำหนดทิศทางด้านวิชาการและมาตรฐานองค์ความรู้",
          "การสนับสนุนหลักสูตร กิจกรรมวิชาการ และการพัฒนาเนื้อหาสำหรับสมาชิก",
          "การประสานเครือข่ายผู้เชี่ยวชาญ มหาวิทยาลัย และภาคอุตสาหกรรมในประเด็นวิชาการ",
        ],
      },
      en: {
        eyebrow: "Academic",
        title: "Academic Committee Board",
        body:
          "A dedicated page for the association’s academic committee structure, intended to publish formal roles, responsibilities, and appointments when officially available.",
        imageAlt: "Academic committee board visual",
        overview:
          "This page serves as the formal location for presenting the governance structure of the association’s academic work.",
        bullets: [
          "Guide academic direction and knowledge standards",
          "Support curricula, academic events, and member-facing learning content",
          "Coordinate expert, university, and industry networks around academic initiatives",
        ],
      },
    },
  },
  careerPages: {
    quantJobs: {
      th: {
        eyebrow: "วิชาชีพ",
        title: "งานสายควอนท์",
        body:
          "หน้าสำหรับรวบรวมข้อมูลตำแหน่งงาน สายอาชีพ และบทบาทการทำงานที่เกี่ยวข้องกับ quantitative finance, financial engineering และงานวิเคราะห์เชิงปริมาณ",
        imageAlt: "ภาพประกอบงานด้าน Quant",
        overview:
          "ส่วนนี้ใช้เป็นพื้นที่ของสมาคมสำหรับนำเสนอแนวทางสายอาชีพ บทบาทงาน และโอกาสการพัฒนาวิชาชีพในสายงานควอนท์",
        listings: [
          {
            employer: "บริษัทหลักทรัพย์ เมย์แบงก์ (ประเทศไทย) จำกัด (มหาชน)",
            employerShort: "เมย์แบงก์ ประเทศไทย",
            logoSrc: "assets/maybank-securities-logo.svg",
            title: "Financial Engineer",
            jobCategoryCode: "Financial Engineer",
            jobCategory: "วิศวกรการเงิน",
            team: "Equity & Commodity Derivatives",
            status: "ประกาศรับสมัคร",
            location: "ประเทศไทย",
            summary:
              "โอกาสสำหรับผู้สนใจงานด้านวิศวกรรมการเงิน การพัฒนาแบบจำลองอนุพันธ์ และระบบวิเคราะห์เชิงปริมาณ โดยเปิดรับผู้สำเร็จการศึกษาใหม่ด้วย",
            responsibilities: [
              "พัฒนาแบบจำลองทางการเงิน รวมถึง Monte Carlo simulation สำหรับกำหนดราคาและป้องกันความเสี่ยงของตราสารอนุพันธ์",
              "ตรวจสอบความถูกต้องและความน่าเชื่อถือของแบบจำลองทางการเงิน",
              "เปรียบเทียบราคาผลิตภัณฑ์กับผู้ออกรายอื่น",
              "วิเคราะห์ผลการซื้อขายและจัดทำรายงานผลการดำเนินงาน",
              "วิเคราะห์แนวโน้มตลาดและจัดทำข้อเสนอแนะเกี่ยวกับผลิตภัณฑ์",
              "พัฒนาโปรแกรมเพื่อทำงานอัตโนมัติและปรับปรุงกระบวนการทำงานประจำ",
            ],
            qualifications: [
              "ปริญญาด้าน Financial Engineering, Computer Engineering, Computer Science หรือสาขาที่เกี่ยวข้อง",
              "มีทักษะคณิตศาสตร์และภาษาโปรแกรมในระดับดี",
              "มีความรู้ด้านการประยุกต์ใช้ปัญญาประดิษฐ์และ machine learning",
              "ต้องมี Single License และ IC Complex",
              "ยินดีรับผู้สำเร็จการศึกษาใหม่ โดยประสบการณ์ด้าน equity trading จะได้รับการพิจารณาเป็นพิเศษ",
            ],
            href: "https://th.linkedin.com/posts/nutthachai-na-sua-77b018157_%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%97%E0%B8%A1%E0%B8%81%E0%B8%9A%E0%B8%9C%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A1-financial-engineering-activity-7509582959440588800-i8xg",
          },
          {
            employer: "Binance",
            employerShort: "Binance",
            logoSrc: "assets/binance-logo.png",
            title: "Quantitative Researcher - Option",
            jobCategoryCode: "Quant Researcher",
            jobCategory: "นักวิจัยเชิงปริมาณ",
            team: "วิจัยและการซื้อขายออปชัน",
            status: "ประกาศรับสมัคร",
            location: "กรุงเทพมหานคร",
            employmentType: "พนักงานประจำ",
            summary:
              "ตำแหน่งวิจัยเชิงปริมาณด้านการกำหนดราคาออปชัน การบริหารความเสี่ยง ความผันผวน และกลยุทธ์การซื้อขายในตลาดสินทรัพย์ดิจิทัล",
            responsibilities: [
              "ออกแบบ ทดสอบย้อนหลัง และนำกลยุทธ์ด้านการกำหนดราคาออปชัน การบริหารความเสี่ยง และ agency trading ไปใช้งานจริง",
              "พัฒนาและดูแลแบบจำลองมูลค่าออปชัน ครอบคลุม volatility surface, Greeks และ exotic options",
              "วิจัย implied volatility, volatility arbitrage และโครงสร้างจุลภาคของตลาดออปชันทั้งในตลาดดั้งเดิมและตลาดคริปโท",
              "ทำงานร่วมกับทีมพัฒนาเพื่อนำแบบจำลองและกลยุทธ์ขึ้นใช้งานบนแพลตฟอร์มซื้อขาย",
              "สนับสนุนการพัฒนาผลิตภัณฑ์ตั้งแต่การสร้างแนวคิด แบบจำลอง การบริหารความเสี่ยง จนถึงการปรับพารามิเตอร์",
            ],
            qualifications: [
              "มีประสบการณ์อย่างน้อย 4 ปีในงานวิจัยหรือวิเคราะห์เชิงปริมาณที่เกี่ยวข้องกับการกำหนดราคาและแบบจำลองออปชัน",
              "มีประสบการณ์กับ Black-Scholes, binomial tree, Monte Carlo และแบบจำลอง Heston หรือ SABR",
              "ปริญญาโทขึ้นไปด้านคณิตศาสตร์ สถิติ หรือสาขาที่เกี่ยวข้อง",
              "มีทักษะ Python และสามารถทำงานภาษาอังกฤษได้ดี",
              "ประสบการณ์ในกองทุน บริษัทซื้อขายหลักทรัพย์ โบรกเกอร์ วาณิชธนกิจ machine learning หรือ DEX จะได้รับการพิจารณาเป็นพิเศษ",
            ],
            href: "https://th.linkedin.com/jobs/view/quantitative-researcher-option-at-binance-4299343243",
          },
          {
            employer: "Binance",
            employerShort: "Binance",
            logoSrc: "assets/binance-logo.png",
            title: "Pioneer Talent Program - Product Manager, Quant Trading",
            jobCategoryCode: "Quant Developer",
            jobCategory: "นักพัฒนาระบบควอนท์",
            team: "การจัดการผลิตภัณฑ์ระบบซื้อขายเชิงปริมาณ",
            status: "ประกาศรับสมัคร",
            location: "กรุงเทพมหานคร",
            employmentType: "พนักงานประจำ",
            summary:
              "โครงการสำหรับผู้เริ่มต้นสายอาชีพที่ต้องการพัฒนาผลิตภัณฑ์ระบบซื้อขายส่วนหลัง ครอบคลุม matching engine, risk engine และแบบจำลองราคาสำหรับผลิตภัณฑ์อนุพันธ์",
            responsibilities: [
              "สนับสนุนการกำหนดทิศทางผลิตภัณฑ์และแผนงานสำหรับระบบซื้อขายส่วนหลัง",
              "ปรับปรุง matching engine, risk engine และแบบจำลองราคาสำหรับ Futures, Margin, Options และผลิตภัณฑ์อนุพันธ์อื่น",
              "ทำงานร่วมกับทีมวิศวกรรมการซื้อขายเพื่อแปลงความต้องการที่ซับซ้อนเป็นแนวทางแก้ไขทางเทคนิค",
              "มีส่วนร่วมตลอดวงจรผลิตภัณฑ์ ตั้งแต่การวางแผน การเปิดตัว และการพัฒนาคุณลักษณะใหม่",
              "ติดตามประสิทธิภาพของระบบ แก้ไขปัญหาก่อนกระทบผู้ใช้ และดูแลการปฏิบัติตามมาตรฐานที่เกี่ยวข้อง",
            ],
            qualifications: [
              "ปริญญาตรีขึ้นไปด้านคณิตศาสตร์ การเงินเชิงปริมาณ วิศวกรรมการเงิน วิทยาการคอมพิวเตอร์ สถิติ หรือสาขาที่เกี่ยวข้อง",
              "มีประสบการณ์ที่เกี่ยวข้องไม่เกิน 5 ปี รวมถึงการฝึกงาน โดยประสบการณ์ด้านระบบซื้อขาย fintech, quant หรือ platform จะได้รับการพิจารณาเป็นพิเศษ",
              "เข้าใจ order book, margin, leverage, liquidation, PnL และแนวคิดการบริหารความเสี่ยง",
              "สามารถทำงานกับข้อมูลและทีมเทคนิคได้ โดยทักษะ SQL, Python หรือ Excel จะเป็นประโยชน์",
              "สามารถใช้ภาษาอังกฤษและภาษาจีนกลางเพื่อประสานงานกับผู้มีส่วนได้ส่วนเสียระหว่างประเทศ",
            ],
            href: "https://www.linkedin.com/jobs/view/4404498699/",
          },
          {
            employer: "Binance",
            employerShort: "Binance",
            logoSrc: "assets/binance-logo.png",
            title: "Senior Product Manager, Quant Trading",
            jobCategoryCode: "Quant Developer",
            jobCategory: "นักพัฒนาระบบควอนท์",
            team: "การจัดการผลิตภัณฑ์ระบบซื้อขายเชิงปริมาณ",
            status: "ประกาศรับสมัคร",
            location: "กรุงเทพมหานคร",
            employmentType: "พนักงานประจำ",
            summary:
              "บทบาทผู้นำผลิตภัณฑ์สำหรับระบบซื้อขายส่วนหลัง โดยเชื่อมโยงความรู้ด้านผลิตภัณฑ์อนุพันธ์ ตรรกะการซื้อขาย และการบริหารความเสี่ยงเข้ากับการพัฒนาระบบ",
            responsibilities: [
              "กำหนดทิศทางผลิตภัณฑ์และแผนงานสำหรับระบบซื้อขายส่วนหลัง",
              "ปรับปรุง matching engine, risk engine และแบบจำลองราคาสำหรับ Margin, Futures, Options, Event Contracts และผลิตภัณฑ์ที่เกี่ยวข้อง",
              "ทำงานร่วมกับทีมวิศวกรรมการซื้อขายเพื่อแปลงความต้องการทางธุรกิจที่ซับซ้อนเป็นแนวทางแก้ไขทางเทคนิค",
              "ดูแลวงจรผลิตภัณฑ์ทั้งหมด ตั้งแต่การวางแผน การเปิดตัว และการพัฒนาคุณลักษณะใหม่",
              "ติดตามประสิทธิภาพของระบบ แก้ไขปัญหาก่อนกระทบผู้ใช้ และดูแลให้ระบบเป็นไปตามมาตรฐานและข้อกำกับ",
            ],
            qualifications: [
              "มีความเข้าใจเชิงลึกเกี่ยวกับ Margin, Futures, Perpetual Swaps, Options และผลิตภัณฑ์ทางการเงินที่เกี่ยวข้อง",
              "มีพื้นฐานด้านเทคนิคหรือเชิงปริมาณ เช่น Computer Science, Financial Engineering หรือ Mathematics",
              "เข้าใจตรรกะการซื้อขาย วิธีบริหารความเสี่ยง และสามารถแปลงเป็นข้อกำหนดผลิตภัณฑ์ได้",
              "มีทักษะวิเคราะห์และแก้ปัญหาในระดับดี โดยประสบการณ์ด้านผลิตภัณฑ์จะได้รับการพิจารณาเป็นพิเศษ",
              "ทักษะภาษาจีนกลางเพื่อประสานงานกับผู้มีส่วนได้ส่วนเสียระหว่างประเทศจะได้รับการพิจารณาเป็นพิเศษ",
            ],
            href: "https://www.linkedin.com/jobs/view/4326680018/",
          },
        ],
        bullets: [
          "แนวทางสายอาชีพและบทบาทงานที่เกี่ยวข้องกับ quantitative finance",
          "ขอบเขตทักษะที่ผู้สมัครควรเตรียมสำหรับตำแหน่งงานด้าน Quant",
          "พื้นที่สำหรับเผยแพร่โอกาสงานหรือข้อมูลที่เป็นประโยชน์ต่อสมาชิกในอนาคต",
        ],
      },
      en: {
        eyebrow: "Career",
        title: "Quant Jobs",
        body:
          "A page for career roles, job functions, and professional pathways related to quantitative finance, financial engineering, and applied quantitative analysis.",
        imageAlt: "Quant jobs visual",
        overview:
          "This section serves as the association’s formal space for presenting career directions, job functions, and professional development pathways in quant-related work.",
        listings: [
          {
            employer: "Maybank Securities (Thailand) Public Company Limited",
            employerShort: "Maybank Thailand",
            logoSrc: "assets/maybank-securities-logo.svg",
            title: "Financial Engineer",
            jobCategoryCode: "Financial Engineer",
            jobCategory: "Financial Engineer",
            team: "Equity & Commodity Derivatives",
            status: "Recruitment notice",
            location: "Thailand",
            summary:
              "An opportunity focused on financial engineering, derivatives modelling, and quantitative systems. Fresh graduates are welcome to apply.",
            responsibilities: [
              "Develop financial models, including Monte Carlo simulations, to price and hedge derivatives.",
              "Validate financial models for accuracy and reliability.",
              "Benchmark product pricing against other issuers.",
              "Analyze trading performance and prepare performance reports.",
              "Analyze market trends and provide product recommendations.",
              "Develop programs that automate and improve business-as-usual processes.",
            ],
            qualifications: [
              "Degree in Financial Engineering, Computer Engineering, Computer Science, or a related field.",
              "Strong proficiency in mathematics and programming languages.",
              "Knowledge of artificial intelligence and machine learning applications.",
              "A Single License with IC Complex is required.",
              "Fresh graduates are welcome; equity-trading experience is an advantage.",
            ],
            href: "https://th.linkedin.com/posts/nutthachai-na-sua-77b018157_%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%97%E0%B8%A1%E0%B8%81%E0%B8%9A%E0%B8%9C%E0%B8%A1%E0%B9%84%E0%B8%AB%E0%B8%A1-financial-engineering-activity-7509582959440588800-i8xg",
          },
          {
            employer: "Binance",
            employerShort: "Binance",
            logoSrc: "assets/binance-logo.png",
            title: "Quantitative Researcher - Option",
            jobCategoryCode: "Quant Researcher",
            jobCategory: "Quant Researcher",
            team: "Options Research and Trading",
            status: "Recruitment notice",
            location: "Bangkok",
            employmentType: "Full-time",
            summary:
              "A quantitative-research role focused on options pricing, risk management, volatility, and trading strategies in digital-asset markets.",
            responsibilities: [
              "Ideate, design, backtest, and implement options pricing, risk-management, and agency-trading strategies.",
              "Develop and maintain options valuation models, including volatility surfaces, Greeks, and exotic options.",
              "Research implied-volatility dynamics, volatility arbitrage, and options-market microstructure across traditional and crypto markets.",
              "Work with the development team to implement models and strategies on the trading platform.",
              "Support product development from ideation and modelling through risk management and parameter tuning.",
            ],
            qualifications: [
              "At least four years of quantitative research or analysis experience involving options pricing and modelling.",
              "Hands-on experience with Black-Scholes, binomial trees, Monte Carlo, and Heston or SABR models.",
              "A master's degree or higher in mathematics, statistics, or a related discipline.",
              "Strong Python skills and professional English fluency.",
              "Experience in funds, trading firms, brokerages, investment banking, machine learning, or DEX trading is advantageous.",
            ],
            href: "https://th.linkedin.com/jobs/view/quantitative-researcher-option-at-binance-4299343243",
          },
          {
            employer: "Binance",
            employerShort: "Binance",
            logoSrc: "assets/binance-logo.png",
            title: "Pioneer Talent Program - Product Manager, Quant Trading",
            jobCategoryCode: "Quant Developer",
            jobCategory: "Quant Developer",
            team: "Quant Trading Product Management",
            status: "Recruitment notice",
            location: "Bangkok",
            employmentType: "Full-time",
            summary:
              "An early-career program focused on backend trading products, including matching engines, risk engines, and pricing models for derivatives.",
            responsibilities: [
              "Contribute to the product direction and roadmap for backend trading systems.",
              "Improve matching engines, risk engines, and pricing models for Futures, Margin, Options, and other derivatives products.",
              "Work with trading engineering teams to translate complex trading needs into technical solutions.",
              "Participate throughout the product lifecycle, from planning and release to ongoing feature launches.",
              "Monitor backend performance, resolve issues before they affect users, and support compliance with relevant standards.",
            ],
            qualifications: [
              "A bachelor's degree or higher in mathematics, quantitative finance, financial engineering, computer science, statistics, or a related field.",
              "Up to five years of relevant experience, including internships; exposure to trading systems, fintech, quant, or platform roles is preferred.",
              "Understanding of order books, margin, leverage, liquidation, PnL, and risk-management concepts.",
              "Comfort working with data and technical teams; SQL, Python, or Excel experience is beneficial.",
              "Bilingual English and Mandarin capability for coordination with international stakeholders.",
            ],
            href: "https://www.linkedin.com/jobs/view/4404498699/",
          },
          {
            employer: "Binance",
            employerShort: "Binance",
            logoSrc: "assets/binance-logo.png",
            title: "Senior Product Manager, Quant Trading",
            jobCategoryCode: "Quant Developer",
            jobCategory: "Quant Developer",
            team: "Quant Trading Product Management",
            status: "Recruitment notice",
            location: "Bangkok",
            employmentType: "Full-time",
            summary:
              "A product-leadership role for backend trading systems, connecting derivatives expertise, trading logic, and risk management with platform delivery.",
            responsibilities: [
              "Set the product direction and roadmap for backend trading systems.",
              "Improve matching engines, risk engines, and pricing models for Margin, Futures, Options, Event Contracts, and related products.",
              "Work with trading engineering teams to translate complex business needs into technical solutions.",
              "Lead the full product lifecycle from planning and release through ongoing feature launches.",
              "Monitor backend performance, resolve issues before they affect users, and ensure systems meet relevant standards and regulations.",
            ],
            qualifications: [
              "Deep understanding of financial products such as Margin, Futures, Perpetual Swaps, and Options.",
              "A technical or quantitative background such as computer science, financial engineering, or mathematics.",
              "Ability to understand trading logic and risk methods and translate them into product requirements.",
              "Strong analytical and problem-solving skills; prior product experience is preferred but not required.",
              "Mandarin proficiency for coordination with international stakeholders is preferred.",
            ],
            href: "https://www.linkedin.com/jobs/view/4326680018/",
          },
        ],
        bullets: [
          "Career tracks and job functions related to quantitative finance",
          "Core skill expectations for applicants targeting quant roles",
          "A future space for job opportunities and member-relevant career information",
        ],
      },
    },
    training: {
      th: {
        eyebrow: "วิชาชีพ",
        title: "การอบรม",
        body:
          "หน้าสำหรับการอบรมและการพัฒนาทักษะวิชาชีพของสมาคม เพื่อสนับสนุนการเสริมศักยภาพของสมาชิกและผู้สนใจในสายงาน quantitative finance",
        imageAlt: "ภาพประกอบการอบรม",
        overview:
          "ข้อบังคับของสมาคมระบุถึงสิทธิประโยชน์ด้านส่วนลดในการลงทะเบียนอบรมที่สมาคมจัด จึงหน้านี้ถูกจัดไว้เป็นพื้นที่อย่างเป็นทางการสำหรับการอบรมและการพัฒนาทักษะ",
        bullets: [
          "พื้นที่สำหรับประกาศหลักสูตรอบรมและกิจกรรมพัฒนาทักษะของสมาคม",
          "รองรับการสื่อสารรายละเอียดหัวข้อ วิทยากร และกลุ่มเป้าหมายของการอบรม",
          "เชื่อมโยงกับภารกิจของสมาคมในการพัฒนาและเสริมศักยภาพด้านวิชาชีพ",
        ],
        groups: [
          {
            id: "tqf",
            label: "TQF",
            title: "การอบรมโดย TQF",
            description: "หลักสูตร กิจกรรม และกรอบการเรียนรู้ที่จัดหรือร่วมจัดโดยสมาคมและเครือข่ายโดยตรง",
            items: [
              {
                kicker: "เส้นทางการเรียนรู้",
                title: "TQF Quant Pathway",
                copy: "กรอบทักษะตั้งแต่คณิตศาสตร์ การเงิน และการเขียนโปรแกรม ไปจนถึงหัวข้อเฉพาะทางสำหรับสาย Quant",
                href: "quant-pathway.html",
                imageSrc: "assets/logo.png",
              },
              {
                kicker: "เวิร์กช็อป",
                title: "Intro to Quant Workshop",
                copy: "เวิร์กช็อป Portfolio Optimization และ Options Pricing พร้อมกิจกรรม hands-on coding สำหรับนิสิตนักศึกษา",
                href: "https://www.instagram.com/p/DQE7gHeEs2r/",
                imageSrc: "assets/activity-quantcu-workshop-2025.jpg",
              },
              {
                kicker: "แนะแนววิชาชีพ",
                title: "ติวฟรีเพื่อเส้นทางอาชีพ Quant Career",
                copy: "กิจกรรมแนะแนวอาชีพด้าน Quant การพัฒนาแบบจำลอง และการใช้ Monte Carlo simulation ในงานอนุพันธ์",
                href: "https://www.facebook.com/quantcornerthailand",
                imageSrc: "assets/activity-quant-career-2026.png",
              },
            ],
          },
          {
            id: "cqf",
            label: "CQF",
            title: "การอบรมและกิจกรรมจาก CQF",
            description: "กิจกรรมวิชาชีพ การประชุม และทรัพยากรการเรียนรู้ด้าน quantitative finance จาก CQF Institute",
            items: [
              {
                kicker: "กิจกรรมที่กำลังจะมาถึง · 7 ต.ค. 2569",
                title: "Optimizing Your Quant Finance Resume for Today’s Market",
                copy: "Career Talk ออนไลน์โดย Rainy Gill ว่าด้วยการวางโครงสร้างเรซูเม่ การนำเสนอทักษะ และข้อผิดพลาดที่ควรหลีกเลี่ยงสำหรับผู้สมัครงานสาย Quant",
                href: "https://cqfinstitute.org/events/careers-talks/optimizing-your-quant-finance-resume-for-todays-market/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "กิจกรรมที่กำลังจะมาถึง · 4-5 พ.ย. 2569",
                title: "Annual Quant Insights Conference",
                copy: "การประชุมออนไลน์ประจำปีของ CQF Institute ครอบคลุมแนวโน้มล่าสุดด้านการซื้อขาย ทฤษฎีพอร์ตโฟลิโอ ปัญญาประดิษฐ์ และ quantitative finance",
                href: "https://cqfinstitute.org/events/conferences/annual-quant-insights-conference/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "กิจกรรมที่ผ่านมา · 16 ก.ย. 2569",
                title: "AI and Machine Learning in Quant Finance Conference",
                copy: "การประชุมด้าน AI และ machine learning สำหรับงานการเงินเชิงปริมาณ ครอบคลุม deep learning, portfolio optimization, model risk, LLM interpretability และ quantum computing",
                href: "https://cqfinstitute.org/events/conferences/ai-and-machine-learning-in-quant-finance/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "กิจกรรมที่ผ่านมา · 3 มิ.ย. 2569",
                title: "CQF Alumni Perspectives: How AI Is Transforming Quant Careers",
                copy: "เสวนาศิษย์เก่า CQF เกี่ยวกับการเริ่มต้นอาชีพสาย Quant การประยุกต์ใช้ AI ในงานจริง และทักษะที่มีแนวโน้มสำคัญต่อวิชาชีพในอนาคต",
                href: "https://cqfinstitute.org/events/careers-talks/cqf-alumni-perspectives-how-ai-is-transforming-quant-careers/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "กิจกรรมที่ผ่านมา · 11 มี.ค. 2569",
                title: "Portfolio Management in Quant Finance Conference",
                copy: "การประชุมออนไลน์ด้าน portfolio optimization, tail risk, systematic fixed income, option order books และการใช้ AI เพื่อสร้าง alpha",
                href: "https://cqfinstitute.org/events/conferences/portfolio-management-in-quant-finance-conference/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "กิจกรรมที่ผ่านมา · 4 ก.พ. 2569",
                title: "Ace Your Quant Interview: How to Stand Out and Succeed",
                copy: "Career Talk สำหรับเตรียมสัมภาษณ์งานสาย Quant ตั้งแต่โจทย์เชิงเทคนิค การสื่อสารกระบวนการคิด ไปจนถึงสิ่งที่นายจ้างชั้นนำมองหา",
                href: "https://cqfinstitute.org/events/careers-talks/careers-talk-ace-your-quant-interview/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Professional Qualification",
                title: "Certificate in Quantitative Finance",
                copy: "หลักสูตรออนไลน์แบบ part-time ระยะเวลา 6 เดือน ครอบคลุม quantitative finance, risk, data science และ machine learning",
                href: "https://www.cqf.com/about-cqf/program-structure/what-is-cqf",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Program Structure",
                title: "CQF Module Structure",
                copy: "โครงสร้าง 6 โมดูลหลักและวิชาเลือกขั้นสูง ตั้งแต่พื้นฐานการเงินเชิงปริมาณจนถึง fixed income และ credit",
                href: "https://www.cqf.com/about-cqf/program-structure/cqf-qualification",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Continuing Education",
                title: "CQF Lifelong Learning Library",
                copy: "คลังบทเรียนและ masterclass สำหรับการพัฒนาความรู้ด้าน quant finance อย่างต่อเนื่องหลังสำเร็จหลักสูตร",
                href: "https://www.cqf.com/about-cqf/program-structure/lifelong-learning",
                imageSrc: "assets/partner-cqf.svg",
              },
            ],
          },
          {
            id: "others",
            label: "อื่น ๆ",
            title: "หลักสูตรและกิจกรรมจากหน่วยงานอื่น",
            description: "โอกาสการเรียนรู้จากมหาวิทยาลัย ชุมชนวิชาชีพ และหน่วยงานพันธมิตรที่เกี่ยวข้องกับสาย Quant",
            items: [
              {
                kicker: "มหาวิทยาลัย",
                title: "WorldQuant University MSc in Financial Engineering",
                copy: "หลักสูตรระดับบัณฑิตศึกษาด้าน financial engineering ที่เชื่อมโยงการเงิน คณิตศาสตร์ และการประยุกต์ใช้ข้อมูล",
                href: "https://www.wqu.edu/mscfe",
                imageSrc: "assets/partner-worldquant.svg",
              },
              {
                kicker: "พันธมิตรการเรียนรู้",
                title: "GroundUp Academy",
                copy: "กิจกรรมและการเรียนรู้ด้านการลงทุน การเงิน การวิเคราะห์ข้อมูล และการพัฒนาทักษะวิชาชีพ",
                href: "https://www.facebook.com/profile.php?id=61569334229421",
                imageSrc: "assets/partner-groundup-facebook.jpg",
              },
              {
                kicker: "ชุมชนนิสิตนักศึกษา",
                title: "Quant CU Workshops",
                copy: "กิจกรรม เวิร์กช็อป และเส้นทางการเรียนรู้ quantitative finance สำหรับนิสิตนักศึกษาและผู้เริ่มต้น",
                href: "https://www.instagram.com/quantcu/",
                imageSrc: "assets/activity-quantcu-first-meet-2025.jpg",
              },
            ],
          },
        ],
      },
      en: {
        eyebrow: "Career",
        title: "Training",
        body:
          "A page for professional training and capability development organized to support members and interested participants in quantitative finance.",
        imageAlt: "Training visual",
        overview:
          "The association bylaws refer to registration discounts for training programs organized by the association, so this page is positioned as the formal location for future training activity and skills development.",
        bullets: [
          "A formal space for training programs and capability-building activities",
          "Supports course information such as topics, speakers, and intended audience",
          "Aligned with the association mission of strengthening professional capability",
        ],
        groups: [
          {
            id: "tqf",
            label: "TQF",
            title: "Training by TQF",
            description: "Programs, activities, and learning frameworks organized or co-organized by TQF and its direct network.",
            items: [
              {
                kicker: "Learning Pathway",
                title: "TQF Quant Pathway",
                copy: "A structured path from mathematics, finance, and programming foundations to specialized quant topics.",
                href: "quant-pathway.html",
                imageSrc: "assets/logo.png",
              },
              {
                kicker: "Workshop",
                title: "Intro to Quant Workshop",
                copy: "Portfolio optimization and options-pricing workshops with hands-on coding for university students.",
                href: "https://www.instagram.com/p/DQE7gHeEs2r/",
                imageSrc: "assets/activity-quantcu-workshop-2025.jpg",
              },
              {
                kicker: "Career Guidance",
                title: "Free Quant Career Guidance Session",
                copy: "A career session covering quant roles, model development, and Monte Carlo simulation for derivatives.",
                href: "https://www.facebook.com/quantcornerthailand",
                imageSrc: "assets/activity-quant-career-2026.png",
              },
            ],
          },
          {
            id: "cqf",
            label: "CQF",
            title: "Training and Events from CQF",
            description: "Professional events, conferences, qualifications, and quantitative-finance learning resources from the CQF Institute.",
            items: [
              {
                kicker: "Upcoming · 7 Oct 2026",
                title: "Optimizing Your Quant Finance Resume for Today’s Market",
                copy: "An online careers talk with Rainy Gill on structuring a quant resume, presenting technical experience, and avoiding common application mistakes.",
                href: "https://cqfinstitute.org/events/careers-talks/optimizing-your-quant-finance-resume-for-todays-market/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Upcoming · 4-5 Nov 2026",
                title: "Annual Quant Insights Conference",
                copy: "CQF Institute’s annual online conference on developments in trading, portfolio theory, artificial intelligence, and quantitative finance.",
                href: "https://cqfinstitute.org/events/conferences/annual-quant-insights-conference/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Past event · 16 Sep 2026",
                title: "AI and Machine Learning in Quant Finance Conference",
                copy: "A conference spanning deep learning, portfolio optimization, AI model risk, LLM interpretability, and quantum computing in quantitative finance.",
                href: "https://cqfinstitute.org/events/conferences/ai-and-machine-learning-in-quant-finance/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Past event · 3 Jun 2026",
                title: "CQF Alumni Perspectives: How AI Is Transforming Quant Careers",
                copy: "CQF alumni discuss breaking into quant finance, practical AI applications, and the skills likely to shape quantitative careers.",
                href: "https://cqfinstitute.org/events/careers-talks/cqf-alumni-perspectives-how-ai-is-transforming-quant-careers/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Past event · 11 Mar 2026",
                title: "Portfolio Management in Quant Finance Conference",
                copy: "An online conference on portfolio optimization, tail risk, systematic fixed income, option order books, and AI-driven alpha generation.",
                href: "https://cqfinstitute.org/events/conferences/portfolio-management-in-quant-finance-conference/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Past event · 4 Feb 2026",
                title: "Ace Your Quant Interview: How to Stand Out and Succeed",
                copy: "A careers talk on technical interview preparation, communicating problem-solving skills, and what leading quant employers seek.",
                href: "https://cqfinstitute.org/events/careers-talks/careers-talk-ace-your-quant-interview/",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Professional Qualification",
                title: "Certificate in Quantitative Finance",
                copy: "A six-month online, part-time program spanning quantitative finance, risk, data science, and machine learning.",
                href: "https://www.cqf.com/about-cqf/program-structure/what-is-cqf",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Program Structure",
                title: "CQF Module Structure",
                copy: "Six core modules and advanced electives, from quantitative-finance foundations to fixed income and credit.",
                href: "https://www.cqf.com/about-cqf/program-structure/cqf-qualification",
                imageSrc: "assets/partner-cqf.svg",
              },
              {
                kicker: "Continuing Education",
                title: "CQF Lifelong Learning Library",
                copy: "An ongoing library of lectures and masterclasses for continued development after completing the qualification.",
                href: "https://www.cqf.com/about-cqf/program-structure/lifelong-learning",
                imageSrc: "assets/partner-cqf.svg",
              },
            ],
          },
          {
            id: "others",
            label: "Others",
            title: "Programs and Activities from Other Providers",
            description: "Learning opportunities from universities, professional communities, and partner organizations relevant to quant careers.",
            items: [
              {
                kicker: "University",
                title: "WorldQuant University MSc in Financial Engineering",
                copy: "A graduate program connecting finance, mathematics, and applied data methods in financial engineering.",
                href: "https://www.wqu.edu/mscfe",
                imageSrc: "assets/partner-worldquant.svg",
              },
              {
                kicker: "Learning Partner",
                title: "GroundUp Academy",
                copy: "Activities and learning in investing, finance, data analysis, and professional skill development.",
                href: "https://www.facebook.com/profile.php?id=61569334229421",
                imageSrc: "assets/partner-groundup-facebook.jpg",
              },
              {
                kicker: "University Community",
                title: "Quant CU Workshops",
                copy: "Quantitative-finance activities, workshops, and learning pathways for students and new learners.",
                href: "https://www.instagram.com/quantcu/",
                imageSrc: "assets/activity-quantcu-first-meet-2025.jpg",
              },
            ],
          },
        ],
      },
    },
  },
  publications: {
    bookSeries: {
      th: [
        {
          category: "book",
          kicker: "หนังสือแนะนำ",
          title: "The Money Formula: สมการแสนล้าน พลิกกระดานวอลล์สตรีท",
          description:
            "หนังสือโดย Paul Wilmott และ David Orrell ว่าด้วยบทบาทของคณิตศาสตร์ แบบจำลองเชิงปริมาณ และเทคโนโลยีที่มีต่อโลกการเงินและวอลล์สตรีท",
          coverSrc: "assets/book-the-money-formula-th.png",
          authors: "Paul Wilmott และ David Orrell",
          format: "หนังสือภาษาไทย",
          referenceLabel: "คณิตศาสตร์การเงิน การเงินเชิงปริมาณ และเทคโนโลยี",
          availabilityNote: "รายการหนังสือแนะนำ ไม่มีไฟล์ดาวน์โหลดบนเว็บไซต์",
        },
        {
          category: "textbook",
          kicker: "เล่มที่ 1",
          title: "TQF Quant Pathway Handbook",
          description:
            "คู่มือฉบับเต็มที่สรุปโครงสร้างองค์ความรู้จากหน้า Quant Pathway ของ TQF ครอบคลุมพื้นฐาน แก่นหลัก และหัวข้อเฉพาะทางสำหรับผู้สนใจสายควอนท์",
          coverSrc: "assets/book-quant-pathway-handbook-cover.svg",
          downloadHref: "assets/tqf-quant-pathway-handbook.pdf",
          onlineHref: "quant-pathway.html",
          sourceHref: "https://www.tqf.or.th/quant-pathway",
          format: "PDF",
        },
        {
          category: "textbook",
          kicker: "เล่มที่ 2",
          title: "TQF Quant Pathway Study Checklist",
          description:
            "ฉบับสรุปสำหรับทบทวนหัวข้อการเรียนรู้แบบกระชับ ใช้เป็นรายการตรวจสอบการอ่านและการวางแผนพัฒนาทักษะจากกรอบ Quant Pathway",
          coverSrc: "assets/book-quant-pathway-checklist-cover.svg",
          downloadHref: "assets/tqf-quant-pathway-checklist.pdf",
          onlineHref: "quant-pathway.html",
          sourceHref: "https://www.tqf.or.th/quant-pathway",
          format: "PDF",
        },
      ],
      en: [
        {
          category: "book",
          kicker: "Recommended Book",
          title: "The Money Formula: Thai Edition",
          description:
            "A book by Paul Wilmott and David Orrell examining how mathematics, quantitative models, and technology have shaped modern finance and Wall Street.",
          coverSrc: "assets/book-the-money-formula-th.png",
          authors: "Paul Wilmott and David Orrell",
          format: "Thai-language book",
          referenceLabel: "Financial mathematics, quantitative finance, and technology",
          availabilityNote: "Catalog entry only; no download file is provided on this website.",
        },
        {
          category: "textbook",
          kicker: "Volume 1",
          title: "TQF Quant Pathway Handbook",
          description:
            "A full handbook version of the TQF Quant Pathway, covering foundational, core, and specialized knowledge areas for aspiring quant professionals.",
          coverSrc: "assets/book-quant-pathway-handbook-cover.svg",
          downloadHref: "assets/tqf-quant-pathway-handbook.pdf",
          onlineHref: "quant-pathway.html",
          sourceHref: "https://www.tqf.or.th/quant-pathway",
          format: "PDF",
        },
        {
          category: "textbook",
          kicker: "Volume 2",
          title: "TQF Quant Pathway Study Checklist",
          description:
            "A concise study checklist edition for reviewing topic coverage and planning skill development from the TQF Quant Pathway framework.",
          coverSrc: "assets/book-quant-pathway-checklist-cover.svg",
          downloadHref: "assets/tqf-quant-pathway-checklist.pdf",
          onlineHref: "quant-pathway.html",
          sourceHref: "https://www.tqf.or.th/quant-pathway",
          format: "PDF",
        },
      ],
    },
    journalShowcase: {
      th: [
        {
          kicker: "ฉบับแนะนำ",
          title: "บทสรุปกรอบ Quant Pathway",
          description:
            "บทสรุปเชิงวารสารที่เรียบเรียงจากโครงสร้าง Quant Pathway เพื่อใช้เป็นมุมมองเชิงกรอบวิชาการสำหรับการพัฒนาทักษะสายควอนท์",
          coverSrc: "assets/journal-quant-pathway-cover.svg",
          primaryHref: "articles.html#quant-pathway-framework",
          primaryLabel: "อ่านบทความ",
          secondaryHref: "assets/tqf-quant-pathway-handbook.pdf",
          secondaryLabel: "เปิดคู่มือ PDF",
          sourceHref: "https://www.tqf.or.th/quant-pathway",
          sourceLabel: "TQF Quant Pathway",
        },
        {
          kicker: "ฉบับวิเคราะห์",
          title: "บทวิเคราะห์มาตรฐานวิชาชีพของ TQF",
          description:
            "บทวิเคราะห์ด้านมาตรฐานวิชาชีพและคุณค่าของสมาชิก เรียบเรียงจากข้อบังคับสมาคมและสิทธิประโยชน์ของสมาชิก",
          coverSrc: "assets/journal-standards-cover.svg",
          primaryHref: "articles.html#professional-standards",
          primaryLabel: "อ่านบทความ",
          secondaryHref: "bylaws.html",
          secondaryLabel: "ดูข้อบังคับ",
          sourceHref: "https://www.tqf.or.th/bylaws",
          sourceLabel: "TQF Bylaws",
        },
      ],
      en: [
        {
          kicker: "Featured Issue",
          title: "Journal Brief: Quant Pathway Framework",
          description:
            "A journal-style brief derived from the Quant Pathway structure, presented as an academic framework for quant skill development.",
          coverSrc: "assets/journal-quant-pathway-cover.svg",
          primaryHref: "articles.html#quant-pathway-framework",
          primaryLabel: "Read article",
          secondaryHref: "assets/tqf-quant-pathway-handbook.pdf",
          secondaryLabel: "Open PDF handbook",
          sourceHref: "https://www.tqf.or.th/quant-pathway",
          sourceLabel: "TQF Quant Pathway",
        },
        {
          kicker: "Analytical Note",
          title: "Journal Brief: Professional Standards in TQF",
          description:
            "An analytical note on professional standards and member value, based on the association bylaws and member benefits.",
          coverSrc: "assets/journal-standards-cover.svg",
          primaryHref: "articles.html#professional-standards",
          primaryLabel: "Read article",
          secondaryHref: "bylaws.html",
          secondaryLabel: "View bylaws",
          sourceHref: "https://www.tqf.or.th/bylaws",
          sourceLabel: "TQF Bylaws",
        },
      ],
    },
    magazineShowcase: {
      th: [
        {
          kicker: "ฉบับกิจกรรม",
          title: "เรื่องเด่นกิจกรรมของสมาคม",
          description:
            "สรุปข่าวสารและกิจกรรมเด่นของสมาคมในรูปแบบแมกกาซีนที่อ่านง่าย เชื่อมโยงกับรายการกิจกรรมบนเว็บไซต์",
          coverSrc: "assets/magazine-activity-cover.svg",
          primaryHref: "activities.html",
          primaryLabel: "ดูกิจกรรม",
          secondaryHref: "index.html",
          secondaryLabel: "กลับหน้าหลัก",
          sourceHref: "https://www.facebook.com/quantcornerthailand",
          sourceLabel: "Quant Corner Thailand",
        },
        {
          kicker: "ฉบับความรู้",
          title: "เส้นทางอาชีพและการเรียนรู้สายควอนท์",
          description:
            "เนื้อหาสรุปสายอาชีพ ทักษะ และการเรียนรู้สำหรับผู้สนใจสายควอนท์ในรูปแบบที่เข้าถึงง่ายกว่าวารสาร",
          coverSrc: "assets/magazine-career-cover.svg",
          primaryHref: "quant-pathway.html",
          primaryLabel: "ดู Quant Pathway",
          secondaryHref: "quant-jobs.html",
          secondaryLabel: "ดูงานด้าน Quant",
          sourceHref: "https://www.tqf.or.th/quant-pathway",
          sourceLabel: "TQF Quant Pathway",
        },
      ],
      en: [
        {
          kicker: "Activity Issue",
          title: "Magazine Feature: Activity Highlights",
          description:
            "An accessible magazine-style highlight of association news and public activities, linked to the site’s activity archive.",
          coverSrc: "assets/magazine-activity-cover.svg",
          primaryHref: "activities.html",
          primaryLabel: "View activities",
          secondaryHref: "index.html",
          secondaryLabel: "Back to home",
          sourceHref: "https://www.facebook.com/quantcornerthailand",
          sourceLabel: "Quant Corner Thailand",
        },
        {
          kicker: "Knowledge Issue",
          title: "Magazine Feature: Quant Career and Learning",
          description:
            "A reader-friendly issue focused on career paths, skills, and learning directions for people entering the quant field.",
          coverSrc: "assets/magazine-career-cover.svg",
          primaryHref: "quant-pathway.html",
          primaryLabel: "View Quant Pathway",
          secondaryHref: "quant-jobs.html",
          secondaryLabel: "View Quant Jobs",
          sourceHref: "https://www.tqf.or.th/quant-pathway",
          sourceLabel: "TQF Quant Pathway",
        },
      ],
    },
  },
  articles: {
    items: {
      th: [
        {
          id: "cqf-quant-history",
          kicker: "พันธมิตร 01",
          title: "Quantitative Finance: ความหมายและพัฒนาการ",
          summary:
            "เรียบเรียงจากบทความต้นฉบับของ CQF ที่อธิบายทั้งนิยามของ quantitative finance พัฒนาการทางประวัติศาสตร์ และบทบาทของเทคโนโลยีต่อสายงานควอนท์",
          imageSrc: "assets/partner-cqf.svg",
          sourceLabel: "CQF Blog",
          sourceHref: "https://www.cqf.com/blog/what-quantitative-finance-brief-history",
          paragraphs: [
            "บทความของ CQF อธิบายว่า quantitative finance เป็นสาขาหนึ่งของการลงทุนที่ใช้วิธีทางคณิตศาสตร์และสถิติเพื่อวิเคราะห์โอกาสการลงทุนในสินทรัพย์หลายประเภท ตั้งแต่หุ้น ตราสารหนี้ ไปจนถึงอนุพันธ์และการบริหารความเสี่ยง",
            "เนื้อหาส่วนประวัติศาสตร์วางรากย้อนกลับไปถึงแนวคิดอย่าง Brownian motion, random walk, งานของ Louis Bachelier และการพัฒนาต่อมาในศตวรรษที่ 20 เช่น Modern Portfolio Theory, Efficient Market Hypothesis และการเติบโตของแบบจำลองอนุพันธ์",
            "บทความยังชี้ให้เห็นว่าความเป็นควอนท์ยุคใหม่ไม่ได้จำกัดอยู่ที่แบบจำลองเชิงทฤษฎี แต่ผสานกับ electronic trading, machine learning และ alternative data ทำให้การศึกษาต่อเนื่องและทักษะเชิงเทคนิคยังเป็นแกนสำคัญของวิชาชีพนี้",
          ],
          bullets: [
            "นิยามของ quantitative finance และขอบเขตงานควอนท์",
            "ลำดับพัฒนาการตั้งแต่ Bachelier ถึงยุค machine learning",
            "บทบาทของเทคโนโลยีและการพัฒนาทักษะต่อเนื่อง",
          ],
        },
        {
          id: "cfa-model-risk",
          kicker: "พันธมิตร 02",
          title: "Backtests, Causality และ Model Risk ในการลงทุนเชิงปริมาณ",
          summary:
            "สรุปจากบทความต้นฉบับของ CFA Institute ที่เสนอว่าการประเมินกลยุทธ์เชิงควอนท์ไม่ควรหยุดที่ผล backtest แต่ต้องถามต่อว่ากลไกของโมเดลทำงานอย่างไรและมีความเสี่ยงเชิงโครงสร้างตรงไหน",
          imageSrc: "assets/partner-cfa.svg",
          sourceLabel: "CFA Institute Enterprising Investor",
          sourceHref:
            "https://rpc.cfainstitute.org/blogs/enterprising-investor/2026/backtests-causality-and-model-risk-in-quantitative-investing",
          paragraphs: [
            "บทความของ CFA Institute ตั้งต้นจากคำถามสำคัญของนักลงทุนเชิงระบบว่า เราควรให้น้ำหนักกับผล backtest มากเพียงใด ผู้เขียนเสนอว่าการดูแค่ความสัมพันธ์ในอดีตยังไม่เพียงพอ หากไม่เข้าใจเหตุผลเชิงกลไกของโมเดล",
            "ใจความหลักคือการแยกความต่างระหว่าง association กับ explanation โดยยอมรับว่าสัญญาณเชิงความสัมพันธ์ยังมีคุณค่าในโลกจริง แต่ไม่ควรกลายเป็นจุดหยุดของกระบวนการวิจัย โดยเฉพาะเมื่อมีความรู้เชิงโครงสร้างที่สามารถนำมา model ได้ดีกว่า",
            "บทความใช้แนวคิดจากการระบาดวิทยาเป็นภาพเปรียบเทียบว่า หากระบบมีโครงสร้างที่เข้าใจได้ เช่น leverage, forced selling, default channel หรือ network transmission ความรู้เหล่านี้ควรถูกทำให้ explicit ในโมเดล ไม่ใช่ถูกลดทอนเหลือเพียงสถิติสหสัมพันธ์",
          ],
          bullets: [
            "backtest ไม่ใช่คำตอบสุดท้ายของ model validation",
            "ต้องแยก association ออกจาก causal mechanism",
            "model risk ลดลงได้เมื่อเข้าใจโครงสร้างตลาดมากขึ้น",
          ],
        },
        {
          id: "wqu-student-spotlight",
          kicker: "พันธมิตร 03",
          title: "เส้นทางนักศึกษา Financial Engineering สู่การทำงานระดับนานาชาติ",
          summary:
            "เรียบเรียงจากบทความ Student Spotlight ของ WorldQuant University ที่เล่าการพัฒนาทักษะด้าน finance, data science และ quantitative analysis ผ่านหลักสูตร MSc in Financial Engineering",
          imageSrc: "assets/partner-wqu.svg",
          sourceLabel: "WorldQuant University News",
          sourceHref: "https://www.wqu.edu/student-spotlight-delara",
          paragraphs: [
            "บทความจาก WorldQuant University เล่าเรื่องของ Josephine de Lara ซึ่งย้ายจากฟิลิปปินส์ไปทำงานที่จีนและเลือกเรียนต่อใน MSc in Financial Engineering เพื่อเสริมเส้นทางอาชีพในโลกการเงินและงานข้อมูล",
            "จุดเด่นของบทความไม่ใช่เพียงการแนะนำหลักสูตร แต่สะท้อนว่าโปรแกรมด้าน financial engineering แบบออนไลน์สามารถช่วยคนทำงานพัฒนาทักษะด้าน finance, data science และ quantitative analysis ไปพร้อมกับงานประจำได้",
            "สำหรับผู้อ่านของสมาคม บทความนี้มีคุณค่าในฐานะตัวอย่างเส้นทางการพัฒนาคนรุ่นใหม่ในสายควอนท์ โดยเชื่อมเรื่อง career mobility, global exposure และการเรียนรู้เชิงเทคนิคเข้าด้วยกันอย่างเป็นรูปธรรม",
          ],
          bullets: [
            "บทบาทของการศึกษา FE ต่อ career transition",
            "การผสาน finance, data science และ quantitative analysis",
            "ตัวอย่างการเติบโตในสายอาชีพควอนท์ระดับนานาชาติ",
          ],
        },
      ],
      en: [
        {
          id: "cqf-quant-history",
          kicker: "Partner Article 01",
          title: "Quantitative Finance: Definition and History",
          summary:
            "A CQF original article explaining what quantitative finance is, how the field developed historically, and why modern quant work now depends heavily on technology and continued learning.",
          imageSrc: "assets/partner-cqf.svg",
          sourceLabel: "CQF Blog",
          sourceHref: "https://www.cqf.com/blog/what-quantitative-finance-brief-history",
          paragraphs: [
            "CQF’s article defines quantitative finance as the use of mathematical and statistical methods to analyze investment opportunities across asset classes, including equities, fixed income, structured products, commodities, foreign exchange, and derivatives.",
            "The piece traces the field from early ideas such as Brownian motion and random walk theory through Bachelier’s option work, Modern Portfolio Theory, the Efficient Market Hypothesis, and the growth of derivatives modeling in the late twentieth century.",
            "It also argues that modern quant practice is inseparable from technology, highlighting the rise of electronic trading, machine learning, and alternative data. That framing makes the article useful as both an introduction and a professional orientation piece.",
          ],
          bullets: [
            "Defines the scope of quantitative finance",
            "Connects key historical milestones across the field",
            "Shows why modern quant work is deeply technology-driven",
          ],
        },
        {
          id: "cfa-model-risk",
          kicker: "Partner Article 02",
          title: "Backtests, Causality, and Model Risk in Quantitative Investing",
          summary:
            "A CFA Institute original article arguing that quantitative investing should move beyond simple backtest acceptance and ask whether the model’s mechanism is actually understood.",
          imageSrc: "assets/partner-cfa.svg",
          sourceLabel: "CFA Institute Enterprising Investor",
          sourceHref:
            "https://rpc.cfainstitute.org/blogs/enterprising-investor/2026/backtests-causality-and-model-risk-in-quantitative-investing",
          paragraphs: [
            "The CFA Institute article starts from a central question in systematic investing: how much confidence should investors place in historical backtests. It argues that past fit alone is not enough if the structure behind a model is poorly understood.",
            "Its core distinction is between association and explanation. Associational signals can still be useful under uncertainty, but they should not become the end point of research when stronger structural knowledge is available.",
            "The article uses epidemiology as an analogy for structured reasoning: when there are identifiable mechanisms, they should be modeled explicitly. In finance, that includes channels such as leverage, forced selling, refinancing pressure, passive flows, and network transmission.",
          ],
          bullets: [
            "Backtests are not enough on their own",
            "Causal reasoning matters in model design and validation",
            "Structural market mechanisms should be represented explicitly",
          ],
        },
        {
          id: "wqu-student-spotlight",
          kicker: "Partner Article 03",
          title: "A Financial Engineering Student’s International Career Path",
          summary:
            "A WorldQuant University original spotlight article showing how a student uses the MSc in Financial Engineering to build finance, data science, and quantitative analysis capability while working internationally.",
          imageSrc: "assets/partner-wqu.svg",
          sourceLabel: "WorldQuant University News",
          sourceHref: "https://www.wqu.edu/student-spotlight-delara",
          paragraphs: [
            "WorldQuant University’s student spotlight follows Josephine de Lara, who moved from the Philippines to China and chose the MSc in Financial Engineering as a way to support long-term career development in finance and data-driven work.",
            "The article emphasizes that flexible program design can help working professionals build finance, data science, and quantitative analysis skills without stepping away from employment. That makes the piece useful as a career-development example rather than only a student profile.",
            "For readers of the association website, the article shows a practical pathway into the quant field through structured education, international exposure, and technical upskilling. It is especially relevant for younger professionals considering applied postgraduate training.",
          ],
          bullets: [
            "Shows education as a bridge into quant careers",
            "Combines finance, data science, and quantitative analysis",
            "Highlights global mobility and professional development",
          ],
        },
      ],
    },
  },
};
