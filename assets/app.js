(function () {
  const source = window.TQF_CONTENT;
  const database = window.TQF_DB;

  if (!source || !database) {
    return;
  }

  const slug = document.body.dataset.page || "home";
  const pageKeyMap = {
    "quant-pathway": "quantPathway",
    "job-directory": "jobDirectory",
    "academic-committee-board": "academicCommitteeBoard",
    "academic-conference": "academicConference",
    "quant-jobs": "quantJobs",
    "book-series": "bookSeries",
    "articles": "articles",
  };
  const pageKey = pageKeyMap[slug] || slug;
  const state = {
    lang: localStorage.getItem("tqf-language") === "en" ? "en" : "th",
  };
  let closeDropdownListener = null;

  const root = document.getElementById("page-root");
  const headerRoot = document.getElementById("site-header");
  const footerRoot = document.getElementById("site-footer");
  const navItems = database.navigation.primary;
  const quantModules = [
    ...source.pages.quantPathway.foundational,
    ...source.pages.quantPathway.core,
    ...source.pages.quantPathway.specialized,
  ];
  const totalTopics = quantModules.reduce((sum, module) => sum + module.items.length, 0);
  const bookSeriesCatalog = database.publications.bookSeries;
  const articleCatalog = database.articles.items;
  const journalShowcase = database.publications.journalShowcase;
  const magazineShowcase = database.publications.magazineShowcase;
  const heroImagePlaceholder = "assets/hero.jpg";
  const fallbackJobSkills = {
    "Financial Engineer": [
      ["แบบจำลองทางการเงิน", "Financial Modeling", "navy"],
      ["วิธีมอนติคาร์โล", "Monte Carlo Methods", "gold"],
      ["การกำหนดราคาอนุพันธ์", "Derivatives Pricing", "teal"],
      ["การเขียนโปรแกรมเชิงปริมาณ", "Quantitative Programming", "blue"],
      ["ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง", "AI & Machine Learning", "slate"],
    ],
    "Quantitative Researcher - Option": [
      ["การกำหนดราคาออปชัน", "Options Pricing", "navy"],
      ["แบบจำลองความผันผวน", "Volatility Modeling", "gold"],
      ["โครงสร้างจุลภาคของตลาด", "Market Microstructure", "teal"],
      ["วิธีมอนติคาร์โล", "Monte Carlo Methods", "blue"],
      ["การบริหารความเสี่ยง", "Risk Management", "slate"],
      ["Python", "Python", "navy"],
    ],
    "Pioneer Talent Program - Product Manager, Quant Trading": [
      ["ระบบซื้อขาย", "Trading Systems", "navy"],
      ["แบบจำลองราคา", "Pricing Models", "gold"],
      ["ระบบบริหารความเสี่ยง", "Risk Engines", "teal"],
      ["กลไกสมุดคำสั่งซื้อขาย", "Order Book Mechanics", "blue"],
      ["SQL และ Python", "SQL & Python", "slate"],
    ],
    "Senior Product Manager, Quant Trading": [
      ["ผลิตภัณฑ์อนุพันธ์", "Derivatives Products", "navy"],
      ["ตรรกะการซื้อขาย", "Trading Logic", "gold"],
      ["การบริหารความเสี่ยง", "Risk Management", "teal"],
      ["แบบจำลองราคา", "Pricing Models", "blue"],
      ["การออกแบบผลิตภัณฑ์เชิงปริมาณ", "Quantitative Product Design", "slate"],
    ],
  };

  const jobCategoryOrder = [
    "Risk Management",
    "Quant Researcher",
    "Quant Trader",
    "Quant Developer",
    "Financial Engineer",
    "Quantitative Analyst",
  ];

  const jobCategoryLabels = {
    th: {
      "Risk Management": "การบริหารความเสี่ยง",
      "Quant Researcher": "นักวิจัยเชิงปริมาณ",
      "Quant Trader": "นักค้าหลักทรัพย์เชิงปริมาณ",
      "Quant Developer": "นักพัฒนาระบบควอนท์",
      "Financial Engineer": "วิศวกรการเงิน",
      "Quantitative Analyst": "นักวิเคราะห์เชิงปริมาณ",
    },
    en: Object.fromEntries(jobCategoryOrder.map((category) => [category, category])),
  };

  const jobMarketOrder = ["TH", "SG", "VN", "HK", "MY"];
  const jobMarketLabels = {
    th: {
      TH: "ประเทศไทย",
      SG: "สิงคโปร์",
      VN: "เวียดนาม",
      HK: "ฮ่องกง",
      MY: "มาเลเซีย",
    },
    en: {
      TH: "Thailand",
      SG: "Singapore",
      VN: "Vietnam",
      HK: "Hong Kong",
      MY: "Malaysia",
    },
  };

  const ui = {
    th: {
      labels: {
        home: "หน้าแรก",
        about: "เกี่ยวกับสมาคม",
        team: "คณะกรรมการ",
        bylaws: "ข้อบังคับสมาคม",
        activities: "กิจกรรม",
        collaborators: "เครือข่ายความร่วมมือ",
        academic: "วิชาการ",
        quant: "เส้นทาง Quant",
      },
      headerTag: "สมาคมวิชาชีพ",
      language: "ภาษา",
      source: "ข้อมูลสมาคม",
      openOfficial: "เปิดหน้าต้นฉบับ",
      siteMap: "โครงสร้างเว็บไซต์",
      siteMapTitle: "ข้อมูลสำคัญของสมาคม",
      siteMapCopy:
        "เข้าถึงข้อมูลสำคัญของสมาคมได้อย่างชัดเจน ทั้งข้อมูลทั่วไป คณะกรรมการ ข้อบังคับ กิจกรรม เครือข่ายความร่วมมือ วิชาการ และเส้นทางทักษะ",
      sectionIndex: "สารบัญ",
      openPage: "เปิดหน้า",
      leadership: "คณะผู้บริหาร",
      leadershipTitle: "นายกและอุปนายก",
      leadershipCopy:
        "ตำแหน่งและคุณวุฒิที่แสดงด้านล่างอ้างอิงตามหน้าคณะกรรมการของสมาคม",
      committee: "คณะกรรมการ",
      committeeTitle: "กรรมการและตำแหน่งสนับสนุน",
      committeeCopy:
        "หากหน้าต้นทางไม่ได้ระบุคุณวุฒิ ระบบจะแสดงเฉพาะตำแหน่งโดยไม่เพิ่มเติมข้อมูลใหม่",
      qualificationsMissing: "ไม่ได้ระบุคุณวุฒิ",
      levels: "3 ระดับ",
      modules: "13 หมวด",
      topics: "หัวข้อ",
      bylawNote:
        "สำหรับการอ้างอิงเชิงกฎหมายหรือการใช้งานทางการ โปรดตรวจสอบกับหน้าต้นฉบับของสมาคมโดยตรง",
      bylawOriginal: "ข้อความข้อบังคับภาษาไทย",
      footerTitle: "สมาคมนักวิเคราะห์เชิงปริมาณและวิศวกรการเงินไทย",
      footerCopy:
        "Thai Association of Quantitative Analysts and Financial Engineers (TQF)",
      footerOriginal: "",
      sourcePage: "ข้อมูล",
      missionPoint: "พันธกิจ",
      priority: "ยุทธศาสตร์",
      boardSnapshot: "ภาพรวมคณะกรรมการ",
      curriculumSnapshot: "ภาพรวมเส้นทางทักษะ",
      institutionalNote: "หมายเหตุเชิงสถาบัน",
      readingNote: "หมายเหตุการอ่าน",
      vision: "วิสัยทัศน์",
      mission: "พันธกิจ",
      strategy: "ยุทธศาสตร์",
      threeLevels: "สามระดับ",
      legalSummaries: "สรุปภาษาอังกฤษ",
      legalSummariesCopy:
        "เมื่อสลับเป็นภาษาอังกฤษ หน้านี้จะแสดงสรุปสาระสำคัญของแต่ละหมวด พร้อมข้อความข้อบังคับภาษาไทย",
    },
    en: {
      labels: {
        home: "Home",
        about: "About",
        team: "Team",
        bylaws: "Bylaws",
        activities: "Activities",
        collaborators: "Collaborators",
        academic: "Academic",
        quant: "Quant Pathway",
      },
      headerTag: "Professional Association",
      language: "Language",
      source: "Overview",
      openOfficial: "Open official page",
      siteMap: "Site Map",
      siteMapTitle: "Association Information",
      siteMapCopy:
        "Access the main association information, committee details, bylaws, activities, collaborators, academic resources, and quant pathway from a single official website.",
      sectionIndex: "Section Index",
      openPage: "Open page",
      leadership: "Leadership",
      leadershipTitle: "President and Vice Presidents",
      leadershipCopy:
        "Roles and listed qualifications below come directly from the official TQF team page.",
      committee: "Committee",
      committeeTitle: "Committee and Supporting Roles",
      committeeCopy:
        "Where qualifications are not listed, the role is shown without additional detail.",
      qualificationsMissing: "Qualifications not listed.",
      levels: "3 levels",
      modules: "13 modules",
      topics: "topics",
      bylawNote:
        "For formal use, please refer to the Thai bylaw text shown on this page.",
      bylawOriginal: "Thai Bylaw Text",
      footerTitle: "Thai Association of Quantitative Analysts and Financial Engineers",
      footerCopy:
        "TQF",
      footerOriginal: "",
      sourcePage: "Information",
      missionPoint: "Mission",
      priority: "Priority",
      boardSnapshot: "Board snapshot",
      curriculumSnapshot: "Curriculum snapshot",
      institutionalNote: "Institutional note",
      readingNote: "Reading note",
      vision: "Vision",
      mission: "Mission",
      strategy: "Strategy",
      threeLevels: "Three Levels",
      legalSummaries: "English summaries",
      legalSummariesCopy:
        "In English mode, this page provides key summaries of each bylaw section together with the Thai bylaw text.",
    },
  };

  const content = buildContent();
  initialize();

  async function initialize() {
    if (["quant-jobs", "job-directory"].includes(slug)) {
      await loadJobsCsv();
    }

    render();
  }

  async function loadJobsCsv() {
    try {
      let jobRows;
      let employerRows;
      let skillRows;
      let jobsSource = "csv";
      const embeddedDatabase = window.TQF_JOBS_DB;

      if (window.location.protocol === "file:" && embeddedDatabase) {
        jobRows = embeddedDatabase.jobs;
        employerRows = embeddedDatabase.employers;
        skillRows = embeddedDatabase.skills;
        jobsSource = "browser-database";
      } else try {
        const [response, employerResponse, skillResponse] = await Promise.all([
          fetch("data/jobs.csv", { cache: "no-store" }),
          fetch("data/job-employers.csv", { cache: "no-store" }),
          fetch("data/job-skills.csv", { cache: "no-store" }),
        ]);

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        if (!employerResponse.ok) throw new Error(`Employer database HTTP ${employerResponse.status}`);
        if (!skillResponse.ok) throw new Error(`Skill database HTTP ${skillResponse.status}`);

        jobRows = parseCsv(await response.text());
        employerRows = parseCsv(await employerResponse.text());
        skillRows = parseCsv(await skillResponse.text());
      } catch (fetchError) {
        if (!embeddedDatabase) throw fetchError;

        jobRows = embeddedDatabase.jobs;
        employerRows = embeddedDatabase.employers;
        skillRows = embeddedDatabase.skills;
        jobsSource = "browser-database";
      }

      const rows = jobRows
        .filter(isCurrentJob)
        .sort((left, right) => {
          const leftDate = left.published_date || left.last_verified || "";
          const rightDate = right.published_date || right.last_verified || "";
          const dateOrder = String(rightDate).localeCompare(leftDate);
          return dateOrder || Number(left.sort_order || 0) - Number(right.sort_order || 0);
        });
      const employers = new Map(
        employerRows.map((employer) => [employer.employer_key, employer]),
      );
      const skillsByJob = skillRows
        .sort((left, right) => Number(left.sort_order || 0) - Number(right.sort_order || 0))
        .reduce((groups, skill) => {
          if (!groups.has(skill.job_id)) groups.set(skill.job_id, []);
          groups.get(skill.job_id).push(skill);
          return groups;
        }, new Map());

      if (!rows.length) {
        throw new Error("No active job records found");
      }

      content.quantJobs.th.listings = rows.map((row) => mapJobRecord(row, "th", employers, skillsByJob));
      content.quantJobs.en.listings = rows.map((row) => mapJobRecord(row, "en", employers, skillsByJob));
      document.body.dataset.jobsSource = jobsSource;
    } catch (error) {
      ["th", "en"].forEach((lang) => {
        content.quantJobs[lang].listings = content.quantJobs[lang].listings.map((item) => ({
          ...item,
          publishedDate: item.publishedDate || "2026-09-30",
          publishedDateKind: item.publishedDate ? "published" : "verified",
          skills: (fallbackJobSkills[item.title] || []).map(([labelTh, labelEn, tone]) => ({
            label: labelEn,
            localizedLabel: lang === "th" ? labelTh : labelEn,
            tone,
          })),
        }));
      });
      document.body.dataset.jobsSource = "embedded";
      console.warn(`Unable to load data/jobs.csv; using the embedded job records. ${error.message}`);
    }
  }

  function isCurrentJob(row) {
    const active = String(row.active).trim().toLowerCase();
    const today = new Date().toISOString().slice(0, 10);
    return ["1", "true", "yes"].includes(active) && (!row.expires_date || row.expires_date >= today);
  }

  function mapJobRecord(row, lang, employers, skillsByJob) {
    const employer = employers.get(row.employer_short);
    const allowedTones = new Set(["navy", "gold", "teal", "blue", "slate"]);
    const skills = skillsByJob.get(row.id) || [];

    return {
      employer: employer?.[`name_${lang}`] || row.employer,
      employerShort: employer?.[`short_name_${lang}`] || row.employer_short || row.employer,
      logoSrc: employer?.logo_src || row.logo_src,
      title: row.title,
      jobCategoryCode: row.job_category,
      jobCategory: localizeJobCategory(row.job_category, lang),
      team: row[`team_${lang}`] || row.team_en,
      status: row[`status_${lang}`] || row.status_en,
      location: row[`location_${lang}`] || row.location_en,
      locationMarketCode: inferJobMarket(row.location_th, row.location_en),
      employmentType: row[`employment_type_${lang}`] || row.employment_type_en,
      publishedDate: row.published_date || row.last_verified,
      publishedDateKind: row.published_date ? "published" : "verified",
      summary: row[`summary_${lang}`] || row.summary_en,
      responsibilities: splitCsvList(row[`responsibilities_${lang}`] || row.responsibilities_en),
      qualifications: splitCsvList(row[`qualifications_${lang}`] || row.qualifications_en),
      skills: skills.map((skill) => ({
        label: skill.skill_en || skill[`skill_${lang}`],
        localizedLabel: skill[`skill_${lang}`] || skill.skill_en,
        tone: allowedTones.has(skill.tone) ? skill.tone : "navy",
      })),
      searchAliases: [
        row.title,
        row.job_category,
        localizeJobCategory(row.job_category, lang),
        employer?.name_th,
        employer?.name_en,
        employer?.short_name_th,
        employer?.short_name_en,
        row.team_th,
        row.team_en,
        row.location_th,
        row.location_en,
        row.employment_type_th,
        row.employment_type_en,
        row.summary_th,
        row.summary_en,
        ...skills.flatMap((skill) => [skill.skill_th, skill.skill_en]),
      ]
        .filter(Boolean)
        .join(" "),
      href: row.source_url,
    };
  }

  function localizeJobCategory(category, lang) {
    return jobCategoryLabels[lang]?.[category] || category;
  }

  function inferJobMarket(locationTh, locationEn) {
    const location = `${locationTh || ""} ${locationEn || ""}`.toLocaleLowerCase();
    if (/hong kong|ฮ่องกง/.test(location)) return "HK";
    if (/singapore|สิงคโปร์/.test(location)) return "SG";
    if (/vietnam|เวียดนาม/.test(location)) return "VN";
    if (/malaysia|มาเลเซีย/.test(location)) return "MY";
    if (/thailand|ประเทศไทย|bangkok|กรุงเทพ|chatuchak|จตุจักร|sathon|สาทร|bang rak|บางรัก|pathum wan|ปทุมวัน|phaya thai|พญาไท|rat burana|ราษฎร์บูรณะ/.test(location)) return "TH";
    return "";
  }

  function splitCsvList(value) {
    return String(value || "")
      .split("||")
      .map((entry) => entry.trim())
      .filter(Boolean);
  }

  function parseCsv(text) {
    const records = [];
    let record = [];
    let field = "";
    let quoted = false;

    for (let index = 0; index < text.length; index += 1) {
      const character = text[index];

      if (character === '"') {
        if (quoted && text[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = !quoted;
        }
      } else if (character === "," && !quoted) {
        record.push(field);
        field = "";
      } else if ((character === "\n" || character === "\r") && !quoted) {
        if (character === "\r" && text[index + 1] === "\n") index += 1;
        record.push(field);
        if (record.some((value) => value.trim())) records.push(record);
        record = [];
        field = "";
      } else {
        field += character;
      }
    }

    record.push(field);
    if (record.some((value) => value.trim())) records.push(record);
    if (!records.length) return [];

    const headers = records.shift().map((header, index) =>
      (index === 0 ? header.replace(/^\uFEFF/, "") : header).trim(),
    );

    return records.map((values) =>
      Object.fromEntries(headers.map((header, index) => [header, (values[index] || "").trim()])),
    );
  }

  function buildContent() {
    const teamRoleEn = database.team.roleEn;
    const teamMemberImagesByIndex = database.team.memberImagesByIndex;

    const missionEn = database.about.missionEn;

    const strategyEn = database.about.strategyEn;

    const quantOverviewEn = database.quant.overviewEn;

    const quantIntroEn = database.quant.introEn;

    const quantTitlesEn = database.quant.titlesEn;

    const quantTitlesTh = database.quant.titlesTh;

    const sectionTitlesEn = database.bylaws.sectionTitlesEn;

    const sectionSummariesEn = database.bylaws.sectionSummariesEn;

    const bylawSections = source.pages.bylaws.sections.map((section, index) => ({
      thTitle: section.title,
      enTitle: sectionTitlesEn[index] || section.title,
      thLines: section.content,
      enSummary: sectionSummariesEn[index] || [],
    }));

    const modulesEn = quantModules.map((module, index) => ({
      title: quantTitlesEn[index] || module.title,
      items: module.items,
    }));

    const modulesTh = quantModules.map((module, index) => ({
      title: quantTitlesTh[index] || module.title,
      items: module.items,
    }));

    const announcements = database.announcements.items;
    const activities = database.activities.items;
    const announcementSources = [...announcements];
    const newsSources = [
      announcements[0],
      ...database.news.items,
      activities.find((item) => item.titleEn.includes("WorldQuant BRAIN")),
    ].filter(Boolean);

    const collaboratorGroups = database.collaborators.groups;
    const academicPageContent = {
      th: {
        ...database.academicPages.academic.th,
        subtitle: source.site.titleTh,
      },
      en: {
        ...database.academicPages.academic.en,
        subtitle: source.site.titleEn,
      },
    };

    const academicConferenceContent = {
      th: {
        ...database.academicPages.academicConference.th,
        subtitle: source.site.titleTh,
      },
      en: {
        ...database.academicPages.academicConference.en,
        subtitle: source.site.titleEn,
      },
    };

    const academicCommitteeBoardContent = {
      th: {
        ...database.academicPages.academicCommitteeBoard.th,
        subtitle: source.site.titleTh,
      },
      en: {
        ...database.academicPages.academicCommitteeBoard.en,
        subtitle: source.site.titleEn,
      },
    };

    const quantJobsContent = {
      th: {
        ...database.careerPages.quantJobs.th,
        subtitle: source.site.titleTh,
      },
      en: {
        ...database.careerPages.quantJobs.en,
        subtitle: source.site.titleEn,
      },
    };

    const trainingContent = {
      th: {
        ...database.careerPages.training.th,
        subtitle: source.site.titleTh,
      },
      en: {
        ...database.careerPages.training.en,
        subtitle: source.site.titleEn,
      },
    };

    return {
      site: {
        th: {
          name: source.site.titleTh,
          subtitle: source.site.titleTh,
          tagline: source.site.tagline,
          address: source.site.address,
          email: source.site.email,
        },
        en: {
          name: source.site.titleEn,
          subtitle: "Thai Quantitative Finance Association",
          tagline:
            "TQF is committed to serving as a central network for quantitative analysts, financial engineers, and interested participants to exchange knowledge and professional experience.",
          address:
            "Building B, 5th Floor, 2547 Phaholyothin Road, Lat Yao, Chatuchak, Bangkok 10900",
          email: source.site.email,
        },
      },
      home: {
        th: {
          eyebrow: "สมาคมนักวิเคราะห์เชิงปริมาณและวิศวกรการเงินไทย",
          title: source.pages.home.hero.headline,
          subtitle: source.site.titleTh,
          body: source.pages.home.hero.body,
          panelTitle: "ภาพรวมเว็บไซต์",
          panelBody:
            "แนวทางการออกแบบใหม่นี้อ้างอิงความเป็นทางการของเว็บไซต์สมาคมระดับสากล และยังคงข้อมูลหลักจากเว็บไซต์ทางการของ TQF ครบทุกหน้า",
          snapshotTitle: "ภาพรวมเชิงสถาบัน",
          snapshotBody:
            "เว็บไซต์ฉบับใหม่นี้จัดข้อมูลสำคัญของสมาคมให้อยู่ในรูปแบบที่อ่านง่าย เป็นทางการ และรองรับสองภาษา",
          imageAlt: "ภาพประกอบเว็บไซต์สมาคม TQF",
          announcementTitle: "ประกาศ",
          announcementCopy:
            "ประกาศล่าสุดของสมาคมและเครือข่ายความร่วมมือ",
          activityTitle: "กิจกรรม",
          activityCopy:
            "กิจกรรมล่าสุดของสมาคมและเครือข่ายความร่วมมือ เรียงตามวันที่จัดกิจกรรม",
          cards: [
            {
              href: "about.html",
              kicker: "สถาบัน",
              title: "เกี่ยวกับสมาคม",
              copy: source.pages.about.vision,
            },
            {
              href: "team.html",
              kicker: "คณะกรรมการ",
              title: "โครงสร้างผู้บริหาร",
              copy: `คณะกรรมการที่เผยแพร่บนเว็บไซต์ทางการจำนวน ${source.pages.team.members.length} คน`,
            },
            {
              href: "bylaws.html",
              kicker: "ข้อบังคับ",
              title: "กฎระเบียบและธรรมาภิบาล",
              copy: "สรุปโครงสร้างข้อบังคับสมาชิก การประชุม และการกำกับดูแลทางการเงินในรูปแบบอ่านง่าย",
            },
            {
              href: "activities.html",
              kicker: "กิจกรรม",
              title: "กิจกรรมและความเคลื่อนไหว",
              copy: "ติดตามกิจกรรมล่าสุดของสมาคมและการอัปเดตข้อมูลสำคัญที่เผยแพร่ต่อสาธารณะ",
            },
            {
              href: "collaborators.html",
              kicker: "เครือข่าย",
              title: "เครือข่ายความร่วมมือ",
              copy: "รวบรวมหน่วยงาน ชุมชนวิชาชีพ มหาวิทยาลัย และบริษัทที่เกี่ยวข้องกับระบบนิเวศของ quantitative finance",
            },
            {
              href: "academic.html",
              kicker: "วิชาการ",
              title: "องค์ความรู้และวิชาการ",
              copy: "รวมเส้นทางการเรียนรู้ เนื้อหาทักษะ และประเด็นวิชาการที่เกี่ยวข้องกับ quantitative finance",
            },
            {
              href: "quant-pathway.html",
              kicker: "เส้นทางทักษะ",
              title: "เส้นทาง Quant",
              copy: `${quantModules.length} หมวดความรู้ ครอบคลุมตั้งแต่พื้นฐานจนถึงความเชี่ยวชาญเฉพาะทาง`,
            },
          ],
        },
        en: {
          eyebrow: "Thai Association of Quantitative Analysts and Financial Engineers",
          title: "TQF",
          subtitle: source.site.titleEn,
          body:
            "The official website of the Thai Association of Quantitative Analysts and Financial Engineers.",
          panelTitle: "Association Overview",
          panelBody:
            "TQF serves as a professional association for knowledge exchange, network development, and capability building in quantitative finance.",
          snapshotTitle: "Association Overview",
          snapshotBody:
            "The website presents the association profile, committee, bylaws, and quant pathway in Thai and English.",
          imageAlt: "TQF association website visual",
          announcementTitle: "Announcements",
          announcementCopy:
            "The latest announcement from the association and its partner network.",
          activityTitle: "Activities",
          activityCopy:
            "Recent activities from the association and its partner network, ordered by event date.",
          cards: [
            {
              href: "about.html",
              kicker: "Institution",
              title: "About the Association",
              copy:
                "Vision, mission, and strategic direction of TQF.",
            },
            {
              href: "team.html",
              kicker: "Committee",
              title: "Board and Committee",
              copy: `${source.pages.team.members.length} committee members are presented on this website.`,
            },
            {
              href: "bylaws.html",
              kicker: "Governance",
              title: "Association Bylaws",
              copy:
                "Membership structure, meeting rules, amendment thresholds, and financial controls, arranged for easier review.",
            },
            {
              href: "activities.html",
              kicker: "Activities",
              title: "Recent Activities",
              copy:
                "Follow the latest association activity and public updates collected from the official TQF website.",
            },
            {
              href: "collaborators.html",
              kicker: "Network",
              title: "Collaborators",
              copy:
                "A directory of relevant institutes, universities, companies, and public channels across the quantitative finance ecosystem.",
            },
            {
              href: "academic.html",
              kicker: "Academic",
              title: "Academic Resources",
              copy:
                "Learning structure, skill topics, and academic directions relevant to quantitative finance and financial engineering.",
            },
            {
              href: "quant-pathway.html",
              kicker: "Capability",
              title: "Quant Pathway",
              copy: `${quantModules.length} modules and ${totalTopics} learning topics across foundational, core, and specialized tracks.`,
            },
          ],
        },
      },
      announcements: {
        th: {
          eyebrow: "ประกาศ",
          title: "ประกาศทั้งหมด",
          body: "รวบรวมประกาศอย่างเป็นทางการ โอกาสทางวิชาชีพ และกำหนดการสำคัญจากสมาคมและเครือข่ายความร่วมมือ",
          overview: "ประกาศเรียงตามวันที่เผยแพร่หรือวันที่เกี่ยวข้อง โดยหน้าแรกจะแสดงเฉพาะ 3 รายการเด่นล่าสุด",
          items: announcementSources.map((item) => ({
            date: item.date,
            dateLabel: item.dateLabelTh,
            upcoming: item.upcoming,
            href: item.href,
            imageSrc: item.imageSrc,
            category: item.categoryTh,
            title: item.titleTh,
            copy: item.copyTh,
            time: item.timeTh,
            location: item.locationTh,
          })),
        },
        en: {
          eyebrow: "Announcements",
          title: "All Announcements",
          body: "Official notices, professional opportunities, and important schedules from the association and its partner network.",
          overview: "Announcements are ordered by their publication or relevant date. The homepage shows only the three latest highlights.",
          items: announcementSources.map((item) => ({
            date: item.date,
            dateLabel: item.dateLabelEn,
            upcoming: item.upcoming,
            href: item.href,
            imageSrc: item.imageSrc,
            category: item.categoryEn,
            title: item.titleEn,
            copy: item.copyEn,
            time: item.timeEn,
            location: item.locationEn,
          })),
        },
      },
      news: {
        th: {
          eyebrow: "ข่าวสาร",
          title: "ข่าวสารทั้งหมด",
          body: "ข่าวสาร ความร่วมมือ และความเคลื่อนไหวสำคัญที่เกี่ยวข้องกับภารกิจของสมาคม",
          overview: "หน้ารวมข่าวสารแสดงรายการทั้งหมด ขณะที่หน้าแรกคัดเลือกเพียง 3 รายการเด่น",
          items: newsSources.map((item) => ({
            date: item.date,
            dateLabel: item.dateLabelTh,
            upcoming: item.upcoming,
            href: item.href,
            imageSrc: item.imageSrc,
            category: item.categoryTh,
            title: item.titleTh,
            copy: item.copyTh,
            time: item.timeTh,
            location: item.locationTh,
          })),
        },
        en: {
          eyebrow: "News",
          title: "All News",
          body: "News, collaborations, and significant updates related to the association's mission.",
          overview: "The archive contains every published news item, while the homepage presents only three selected highlights.",
          items: newsSources.map((item) => ({
            date: item.date,
            dateLabel: item.dateLabelEn,
            upcoming: item.upcoming,
            href: item.href,
            imageSrc: item.imageSrc,
            category: item.categoryEn,
            title: item.titleEn,
            copy: item.copyEn,
            time: item.timeEn,
            location: item.locationEn,
          })),
        },
      },
      activities: {
        th: {
          eyebrow: "กิจกรรม",
          title: "กิจกรรม",
          subtitle: source.site.titleTh,
          body:
            "รวบรวมกิจกรรมสาธารณะของสมาคมและเครือข่ายความร่วมมือ โดยคัดเฉพาะรายการที่เป็นอีเวนต์ เวิร์กช็อป หรือกิจกรรมวิชาการ",
          panelTitle: "ภาพรวมกิจกรรมล่าสุด",
          panelBody:
            "แสดงกิจกรรมจากช่องทางสาธารณะของ TQF, QuantCorner, Quant CU และเครือข่ายความร่วมมือ",
          imageAlt: "ภาพประกอบกิจกรรมของสมาคม TQF",
          items: activities.map((item) => ({
            date: item.date,
            dateLabel: item.dateLabelTh,
            upcoming: item.upcoming,
            href: item.href,
            imageSrc: item.imageSrc,
            category: item.categoryTh,
            title: item.titleTh,
            copy: item.copyTh,
            time: item.timeTh,
            location: item.locationTh,
          })),
        },
        en: {
          eyebrow: "Activities",
          title: "Activities",
          subtitle: source.site.titleEn,
          body:
            "A curated list of public events, workshops, and academic activities from the association and its collaborators.",
          panelTitle: "Latest activity overview",
          panelBody:
            "This page highlights public event announcements from TQF, QuantCorner, Quant CU, and partner networks.",
          imageAlt: "TQF association activities visual",
          items: activities.map((item) => ({
            date: item.date,
            dateLabel: item.dateLabelEn,
            upcoming: item.upcoming,
            href: item.href,
            imageSrc: item.imageSrc,
            category: item.categoryEn,
            title: item.titleEn,
            copy: item.copyEn,
            time: item.timeEn,
            location: item.locationEn,
          })),
        },
      },
      collaborators: {
        th: {
          eyebrow: "เครือข่ายความร่วมมือ",
          title: "เครือข่ายความร่วมมือ",
          subtitle: source.site.titleTh,
          body:
            "รวบรวมหน่วยงานและชุมชนที่เกี่ยวข้องกับระบบนิเวศของ quantitative finance เพื่อใช้เป็นจุดเชื่อมโยงด้านการเรียนรู้ วิชาชีพ และอุตสาหกรรม",
          panelTitle: "โครงสร้างเครือข่าย",
          panelBody:
            "หน้าเว็บนี้จัดกลุ่มเครือข่ายออกเป็นเพจเฟซบุ๊ก สถาบัน มหาวิทยาลัย และบริษัท เพื่อให้ค้นหาได้สะดวก",
          imageAlt: "ภาพประกอบเครือข่ายความร่วมมือของสมาคม",
          groups: collaboratorGroups.th,
        },
        en: {
          eyebrow: "Collaborators",
          title: "Collaborators",
          subtitle: source.site.titleEn,
          body:
            "A structured directory of public organizations and communities relevant to the quantitative finance ecosystem.",
          panelTitle: "Network structure",
          panelBody:
            "This page groups the network into Facebook Pages, Institute, University, and Company sections for easier access.",
          imageAlt: "Collaborator network visual",
          groups: collaboratorGroups.en,
        },
      },
      academic: academicPageContent,
      academicConference: academicConferenceContent,
      academicCommitteeBoard: academicCommitteeBoardContent,
      journal: {
        th: {
          eyebrow: "วิชาการ",
          title: "วารสาร",
          subtitle: source.site.titleTh,
          body:
            "หน้าวารสารสำหรับเผยแพร่บทความเชิงวิชาการ งานวิเคราะห์ และองค์ความรู้ที่เกี่ยวข้องกับ quantitative finance และ financial engineering",
          overview:
            "ส่วนนี้ใช้เป็นพื้นที่เผยแพร่งานเขียนเชิงวิชาการและบทวิเคราะห์เชิงลึกของสมาคม",
          recentTitle: "อัปเดตล่าสุด",
          recentHeadline: "เพิ่มบทวิเคราะห์จากกรอบ Quant Pathway และมาตรฐานวิชาชีพ",
          recentCopy:
            "หน้าวารสารจัดแสดงบทความเชิงวิเคราะห์ในรูปแบบ publication showcase เพื่อให้ผู้อ่านเข้าถึงหัวข้อความรู้หลักของสมาคมได้ง่ายขึ้น",
          recentMeta: [
            ["สถานะ", "เผยแพร่บนเว็บไซต์"],
            ["จำนวนเรื่องแนะนำ", pad(journalShowcase.th.length)],
            ["อ้างอิงหลัก", "Quant Pathway / Bylaws"],
          ],
          bullets: [
            "บทความเชิงวิชาการและบทวิเคราะห์เชิงลึก",
            "สรุปแนวโน้มวิจัยและประเด็นสำคัญทางวิชาชีพ",
            "พื้นที่เผยแพร่องค์ความรู้จากผู้เชี่ยวชาญและเครือข่ายวิชาการ",
          ],
          showcase: journalShowcase.th,
        },
        en: {
          eyebrow: "Academic",
          title: "Journal",
          subtitle: source.site.titleEn,
          body:
            "A journal page for academic articles, analytical papers, and knowledge publications related to quantitative finance and financial engineering.",
          overview:
            "This section is intended as the association’s formal publication space for academic and analytical writing.",
          recentTitle: "Recent Update",
          recentHeadline: "New analytical briefs added from Quant Pathway and professional standards material",
          recentCopy:
            "The journal page now uses a publication-style showcase to present core analytical themes from the association in a more formal reading format.",
          recentMeta: [
            ["Status", "Published on site"],
            ["Featured items", pad(journalShowcase.en.length)],
            ["Primary sources", "Quant Pathway / Bylaws"],
          ],
          bullets: [
            "Academic articles and in-depth analytical writing",
            "Research trend summaries and professional knowledge updates",
            "A publication space for expert and academic network contributions",
          ],
          showcase: journalShowcase.en,
        },
      },
      magazine: {
        th: {
          eyebrow: "วิชาการ",
          title: "แมกกาซีน",
          subtitle: source.site.titleTh,
          body:
            "หน้าแมกกาซีนสำหรับเนื้อหาสื่อสารในรูปแบบที่เข้าถึงง่าย เช่น ข่าวสาร บทสัมภาษณ์ สรุปประเด็นวิชาการ และเรื่องเด่นจากกิจกรรมของสมาคม",
          overview:
            "ส่วนนี้ใช้สำหรับสื่อสารองค์ความรู้และประเด็นจากภาควิชาชีพในรูปแบบที่เหมาะกับผู้อ่านวงกว้าง",
          recentTitle: "อัปเดตล่าสุด",
          recentHeadline: "เพิ่มเลย์เอาต์แบบแมกกาซีนสำหรับข่าวสาร กิจกรรม และเส้นทางการเรียนรู้",
          recentCopy:
            "หน้าแมกกาซีนเน้นการนำเสนอเนื้อหาให้อ่านง่ายและเชื่อมโยงกับกิจกรรมจริงของสมาคม รวมถึงประเด็นแนะนำสำหรับผู้เริ่มต้นสายควอนท์",
          recentMeta: [
            ["สถานะ", "เผยแพร่บนเว็บไซต์"],
            ["จำนวนเรื่องแนะนำ", pad(magazineShowcase.th.length)],
            ["อ้างอิงหลัก", "Activities / Quant Pathway"],
          ],
          bullets: [
            "ข่าวสารและเรื่องเด่นจากกิจกรรมของสมาคม",
            "บทสัมภาษณ์และมุมมองจากผู้ปฏิบัติงานในสายงาน",
            "บทสรุปประเด็นความรู้ที่อ่านง่ายสำหรับผู้สนใจทั่วไป",
          ],
          showcase: magazineShowcase.th,
        },
        en: {
          eyebrow: "Academic",
          title: "Magazine",
          subtitle: source.site.titleEn,
          body:
            "A magazine page for accessible communication formats such as news, interviews, academic summaries, and highlights from association activities.",
          overview:
            "This section is intended for broader, more accessible communication of knowledge and professional themes.",
          recentTitle: "Recent Update",
          recentHeadline: "New magazine-style highlights added for activities, careers, and learning pathways",
          recentCopy:
            "The magazine page is designed for broader audiences, with an accessible showcase of activity highlights and learning-oriented features.",
          recentMeta: [
            ["Status", "Published on site"],
            ["Featured items", pad(magazineShowcase.en.length)],
            ["Primary sources", "Activities / Quant Pathway"],
          ],
          bullets: [
            "Association news and featured activity coverage",
            "Interviews and viewpoints from practitioners",
            "Readable knowledge summaries for broader audiences",
          ],
          showcase: magazineShowcase.en,
        },
      },
      articles: {
        th: {
          eyebrow: "วิชาการ",
          title: "บทความ",
          subtitle: source.site.titleTh,
          body:
            "หน้าบทความสำหรับคัดเลือกบทความต้นฉบับจากองค์กรพันธมิตรของสมาคม โดยแสดงเฉพาะเนื้อหาที่เผยแพร่โดยเจ้าของแหล่งโดยตรง ไม่ใช้โพสต์แชร์จากเพจอื่น",
          overview:
            "ส่วนนี้ใช้เป็นคลังบทความจากเว็บไซต์ทางการของพันธมิตร เช่น CQF, CFA Institute และ WorldQuant University พร้อมลิงก์กลับไปยังบทความต้นฉบับ",
          items: articleCatalog.th,
        },
        en: {
          eyebrow: "Academic",
          title: "Articles",
          subtitle: source.site.titleEn,
          body:
            "A page that curates original articles from partner organizations only, excluding reposts and shared content from other pages.",
          overview:
            "This section serves as an on-site reading archive built from official partner websites such as CQF, CFA Institute, and WorldQuant University.",
          items: articleCatalog.en,
        },
      },
      bookSeries: {
        th: {
          eyebrow: "วิชาการ",
          title: "ชุดหนังสือ",
          subtitle: source.site.titleTh,
          body:
            "หน้ารวมสิ่งพิมพ์และคู่มือดาวน์โหลดของสมาคมในหมวดวิชาการ โดยเริ่มต้นจากชุดเอกสารที่พัฒนาจากเนื้อหา Quant Pathway ของ TQF",
          overview:
            "ส่วนนี้ใช้แสดงชุดหนังสือและคู่มือเชิงวิชาการที่สมาชิกและผู้สนใจสามารถดาวน์โหลดไปใช้อ่านต่อได้",
          publications: bookSeriesCatalog.th,
        },
        en: {
          eyebrow: "Academic",
          title: "Book Series",
          subtitle: source.site.titleEn,
          body:
            "A publication shelf for downloadable academic books and handbooks, starting with materials developed from the TQF Quant Pathway.",
          overview:
            "This section presents downloadable academic booklets and reference documents for members and interested readers.",
          publications: bookSeriesCatalog.en,
        },
      },
      quantJobs: quantJobsContent,
      training: trainingContent,
      about: {
        th: {
          eyebrow: "เกี่ยวกับสมาคม",
          title: "เกี่ยวกับสมาคม",
          subtitle: source.site.titleTh,
          body: source.pages.about.vision,
          panelTitle: "ข้อมูลจากหน้าต้นทาง",
          panelBody:
            "หน้าทางการของ TQF แสดงข้อมูลใน 3 ส่วนหลัก ได้แก่ วิสัยทัศน์ พันธกิจ และยุทธศาสตร์ ซึ่งหน้านี้นำมาจัดเรียงใหม่ให้อ่านง่ายและชัดเจนขึ้น",
          vision: source.pages.about.vision,
          mission: source.pages.about.mission,
          strategy: source.pages.about.strategy,
        },
        en: {
          eyebrow: "About",
          title: "About the Association",
          subtitle: source.site.titleEn,
          body:
            "The official TQF about page defines the association through one vision statement, five mission commitments, and three strategic directions.",
          panelTitle: "Association Structure",
          panelBody:
            "This page presents the association vision, mission, and strategy in Thai and English.",
          vision:
            "To serve as a central network for quantitative analysts, financial engineers, and interested participants to exchange knowledge and experience.",
          mission: missionEn,
          strategy: strategyEn,
        },
      },
      team: {
        th: {
          eyebrow: "คณะกรรมการ",
          title: "คณะกรรมการ",
          subtitle: source.site.titleTh,
          body:
            "หน้าคณะกรรมการของ TQF แสดงรายชื่อคณะผู้บริหารและกรรมการสมาคม พร้อมตำแหน่งและคุณวุฒิที่ระบุไว้ในเว็บไซต์ทางการ",
          panelTitle: "โครงสร้างคณะกรรมการ",
          panelBody:
            "ข้อมูลรายชื่อ ตำแหน่ง และคุณวุฒิด้านล่างอ้างอิงจากหน้าคณะกรรมการของเว็บไซต์ TQF โดยตรง",
          members: source.pages.team.members.map((member, index) => ({
            name: member.name,
            role: member.role,
            qualifications: member.qualifications,
            initials: member.initials,
            imageSrc: teamMemberImagesByIndex[index] || "",
          })),
        },
        en: {
          eyebrow: "Committee",
          title: "Board and Committee",
          subtitle: source.site.titleEn,
          body:
            "This page presents the association leadership and committee members.",
          panelTitle: "Committee Structure",
          panelBody:
            "The committee directory is available in both Thai and English.",
          members: source.pages.team.members.map((member, index) => ({
            name: member.name,
            role: teamRoleEn[member.role] || member.role,
            qualifications: member.qualifications,
            initials: member.initials,
            imageSrc: teamMemberImagesByIndex[index] || "",
          })),
        },
      },
      quant: {
        th: {
          eyebrow: "เส้นทาง Quant",
          title: "เส้นทาง Quant ของ TQF",
          subtitle: "เส้นทางการเรียนรู้สายควอนท์",
          body: source.pages.quantPathway.introBody,
          panelTitle: "ภาพรวมหลักสูตร",
          panelBody:
            "ข้อมูลด้านล่างอ้างอิงจากหน้าเส้นทาง Quant ของ TQF และจัดใหม่ให้อยู่ในรูปแบบสามระดับที่สำรวจได้ง่ายขึ้น",
          overview: [
            {
              title: "พื้นฐาน",
              description: source.pages.quantPathway.overview[0].description,
            },
            {
              title: "แกนหลัก",
              description: source.pages.quantPathway.overview[1].description,
            },
            {
              title: "เฉพาะทาง",
              description: source.pages.quantPathway.overview[2].description,
            },
          ],
          groups: [
            {
              label: "พื้นฐาน",
              title: "พื้นฐาน",
              description: source.pages.quantPathway.overview[0].description,
              modules: modulesTh.slice(0, 3),
            },
            {
              label: "แกนหลัก",
              title: "แกนหลัก",
              description: source.pages.quantPathway.overview[1].description,
              modules: modulesTh.slice(3, 8),
            },
            {
              label: "เฉพาะทาง",
              title: "เฉพาะทาง",
              description: source.pages.quantPathway.overview[2].description,
              modules: modulesTh.slice(8),
            },
          ],
        },
        en: {
          eyebrow: "Quant Pathway",
          title: "TQF Quant Pathway",
          subtitle: "A structured learning map",
          body: quantIntroEn,
          panelTitle: "Curriculum structure",
          panelBody:
            "The pathway is organized into foundational, core, and specialized layers, each supported by topic modules from the official TQF page.",
          overview: [
            {
              title: "Foundational",
              description: quantOverviewEn[0],
            },
            {
              title: "Core",
              description: quantOverviewEn[1],
            },
            {
              title: "Specialized",
              description: quantOverviewEn[2],
            },
          ],
          groups: [
            {
              label: "Foundational",
              title: "Foundational",
              description: quantOverviewEn[0],
              modules: modulesEn.slice(0, 3),
            },
            {
              label: "Core",
              title: "Core",
              description: quantOverviewEn[1],
              modules: modulesEn.slice(3, 8),
            },
            {
              label: "Specialized",
              title: "Specialized",
              description: quantOverviewEn[2],
              modules: modulesEn.slice(8),
            },
          ],
        },
      },
      bylaws: {
        th: {
          eyebrow: "ข้อบังคับสมาคม",
          title: source.pages.bylaws.title,
          subtitle: source.pages.bylaws.subtitle,
          body:
            "หน้าข้อบังคับฉบับนี้จัดเรียงข้อมูลจากเว็บไซต์ทางการใหม่ให้อ่านง่ายขึ้น โดยคงข้อความภาษาไทยต้นฉบับไว้ครบตามหมวดที่เผยแพร่",
          panelTitle: "ข้อสังเกตการใช้งาน",
          panelBody:
            "หากต้องใช้อ้างอิงทางกฎหมายหรือการใช้งานทางการของสมาคม โปรดตรวจสอบกับหน้าต้นฉบับโดยตรง",
          sections: bylawSections,
        },
        en: {
          eyebrow: "Association Bylaws",
          title: "Association Bylaws",
          subtitle: "English summaries with Thai bylaw text",
          body:
            "This page presents English summaries of each bylaw section together with the Thai bylaw text.",
          panelTitle: "Reading note",
          panelBody:
            "English mode provides section summaries together with the Thai bylaw text.",
          sections: bylawSections,
        },
      },
    };
  }

  function render() {
    document.documentElement.lang = state.lang === "th" ? "th" : "en";
    document.body.classList.remove("menu-open");
    renderHeader();
    renderPage();
    renderFooter();
    bindInteractions();
    revealOnScroll();
  }

  function renderHeader() {
    const langUi = ui[state.lang];
    const currentSite = content.site[state.lang];
    const navBySlug = Object.fromEntries(navItems.map((item) => [item.slug, item]));
    const homeNav = navBySlug.home;
    const activitiesNav = navBySlug.activities;
    const collaboratorsNav = navBySlug.collaborators;
    const academicNav = navBySlug.academic;
    const associationNav = [navBySlug.about, navBySlug.team, navBySlug.bylaws].filter(Boolean);
    const associationActive = associationNav.some((item) => item.slug === slug);
    const activitiesActive = ["activities", "announcements", "news"].includes(slug);
    const academicActive = ["academic", "academic-committee-board", "academic-conference", "journal", "magazine", "articles", "book-series"].includes(slug);
    const careerActive = ["quant-pathway", "quant-jobs", "job-directory", "training"].includes(slug);
    const activityChildren = database.navigation.dropdowns.activities[state.lang].map((item) => ({
      ...item,
      active: item.slug === slug,
    }));
    const collaboratorChildren = database.navigation.dropdowns.collaborators[state.lang];
    const academicChildren = database.navigation.dropdowns.academic[state.lang];
    const careerChildren = database.navigation.dropdowns.career[state.lang].map((item) => ({
      ...item,
      active: item.slug === slug,
    }));

    headerRoot.innerHTML = `
      <div class="header-inner">
        <a class="brand" href="index.html" aria-label="TQF home">
          <span class="brand-mark">
            <img src="assets/logo.png" alt="TQF logo">
          </span>
        </a>
        <nav class="site-nav" id="site-nav" aria-label="Primary">
          ${homeNav ? `<a class="nav-link ${homeNav.slug === slug ? "is-active" : ""}" href="${homeNav.href}">${escapeHtml(state.lang === "th" ? homeNav.labelTh : homeNav.labelEn)}</a>` : ""}
          <div class="nav-dropdown">
            <details class="nav-dropdown-panel">
              <summary class="nav-link nav-summary ${associationActive ? "is-active" : ""}">
                <span>${escapeHtml(langUi.labels.about)}</span>
                <span class="nav-caret" aria-hidden="true"></span>
              </summary>
              <div class="dropdown-menu">
                ${associationNav
                  .map((item) => {
                    const label = state.lang === "th" ? item.labelTh : item.labelEn;
                    return `
                      <a class="dropdown-link ${item.slug === slug ? "is-active" : ""}" href="${item.href}">
                        ${escapeHtml(label)}
                      </a>
                    `;
                  })
                  .join("")}
              </div>
            </details>
          </div>
          ${
            academicNav
              ? `
                <div class="nav-dropdown">
                  <details class="nav-dropdown-panel">
                    <summary class="nav-link nav-summary ${academicActive ? "is-active" : ""}">
                      <span>${escapeHtml(state.lang === "th" ? academicNav.labelTh : academicNav.labelEn)}</span>
                      <span class="nav-caret" aria-hidden="true"></span>
                    </summary>
                    <div class="dropdown-menu">
                      ${academicChildren
                        .map(
                          (item) => `
                            <a class="dropdown-link" href="${item.href}">
                              ${escapeHtml(item.label)}
                            </a>
                          `,
                        )
                        .join("")}
                    </div>
                  </details>
                </div>
              `
              : ""
          }
          ${
            activitiesNav
              ? `
                <div class="nav-dropdown">
                  <details class="nav-dropdown-panel">
                    <summary class="nav-link nav-summary ${activitiesActive ? "is-active" : ""}">
                      <span>${escapeHtml(state.lang === "th" ? activitiesNav.labelTh : activitiesNav.labelEn)}</span>
                      <span class="nav-caret" aria-hidden="true"></span>
                    </summary>
                    <div class="dropdown-menu">
                      ${activityChildren
                        .map(
                          (item) => `
                            <a class="dropdown-link ${item.active ? "is-active" : ""}" href="${item.href}">
                              ${escapeHtml(item.label)}
                            </a>
                          `,
                        )
                        .join("")}
                    </div>
                  </details>
                </div>
              `
              : ""
          }
          <div class="nav-dropdown">
            <details class="nav-dropdown-panel">
              <summary class="nav-link nav-summary ${careerActive ? "is-active" : ""}">
                <span>${escapeHtml(state.lang === "th" ? "วิชาชีพ" : "Career")}</span>
                <span class="nav-caret" aria-hidden="true"></span>
              </summary>
              <div class="dropdown-menu">
                ${careerChildren
                  .map(
                    (item) => `
                      <a class="dropdown-link ${item.active ? "is-active" : ""}" href="${item.href}">
                        ${escapeHtml(item.label)}
                      </a>
                    `,
                  )
                  .join("")}
              </div>
            </details>
          </div>
          ${
            collaboratorsNav
              ? `
                <div class="nav-dropdown">
                  <details class="nav-dropdown-panel">
                    <summary class="nav-link nav-summary ${collaboratorsNav.slug === slug ? "is-active" : ""}">
                      <span>${escapeHtml(state.lang === "th" ? collaboratorsNav.labelTh : collaboratorsNav.labelEn)}</span>
                      <span class="nav-caret" aria-hidden="true"></span>
                    </summary>
                    <div class="dropdown-menu">
                      ${collaboratorChildren
                        .map(
                          (item) => `
                            <a class="dropdown-link" href="${item.href}">
                              ${escapeHtml(item.label)}
                            </a>
                          `,
                        )
                        .join("")}
                    </div>
                  </details>
                </div>
              `
              : ""
          }
          <div class="nav-language language-switcher" aria-label="${escapeHtml(langUi.language)}">
            <button class="lang-button ${state.lang === "th" ? "is-active" : ""}" type="button" data-lang="th">TH</button>
            <button class="lang-button ${state.lang === "en" ? "is-active" : ""}" type="button" data-lang="en">EN</button>
          </div>
        </nav>
        <div class="header-cta-group">
          <button class="menu-toggle" id="menu-toggle-control" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  }

  function renderPage() {
    const pageTitle = {
      home: state.lang === "th" ? "TQF | หน้าแรก" : "TQF | Home",
      announcements: state.lang === "th" ? "TQF | ประกาศ" : "TQF | Announcements",
      about: state.lang === "th" ? "TQF | เกี่ยวกับสมาคม" : "TQF | About",
      team: state.lang === "th" ? "TQF | คณะกรรมการ" : "TQF | Team",
      bylaws: state.lang === "th" ? "TQF | ข้อบังคับสมาคม" : "TQF | Bylaws",
      activities: state.lang === "th" ? "TQF | กิจกรรม" : "TQF | Activities",
      collaborators: state.lang === "th" ? "TQF | เครือข่ายความร่วมมือ" : "TQF | Collaborators",
      academic: state.lang === "th" ? "TQF | วิชาการ" : "TQF | Academic",
      academicCommitteeBoard: state.lang === "th" ? "TQF | คณะกรรมการวิชาการ" : "TQF | Academic Committee Board",
      academicConference: state.lang === "th" ? "TQF | งานประชุมวิชาการ" : "TQF | Academic Conference",
      journal: state.lang === "th" ? "TQF | วารสาร" : "TQF | Journal",
      magazine: state.lang === "th" ? "TQF | แมกกาซีน" : "TQF | Magazine",
      articles: state.lang === "th" ? "TQF | บทความ" : "TQF | Articles",
      news: state.lang === "th" ? "TQF | ข่าวสาร" : "TQF | News",
      bookSeries: state.lang === "th" ? "TQF | ชุดหนังสือ" : "TQF | Book Series",
      quantJobs: state.lang === "th" ? "TQF | งานด้าน Quant" : "TQF | Quant Jobs",
      jobDirectory: state.lang === "th" ? "TQF | ค้นหางาน" : "TQF | Job Directory",
      training: state.lang === "th" ? "TQF | การอบรม" : "TQF | Training",
      quantPathway: state.lang === "th" ? "TQF | Quant Pathway" : "TQF | Quant Pathway",
    }[pageKey];

    document.title = pageTitle;

    const html = {
      home: renderHome(),
      announcements: renderUpdateArchive("announcements"),
      about: renderAbout(),
      team: renderTeam(),
      bylaws: renderBylaws(),
      activities: renderActivities(),
      collaborators: renderCollaborators(),
      academic: renderAcademic(),
      academicCommitteeBoard: renderAcademicSubpage(content.academicCommitteeBoard[state.lang]),
      academicConference: renderAcademicConference(),
      journal: renderPublicationPage(content.journal[state.lang]),
      magazine: renderPublicationPage(content.magazine[state.lang]),
      articles: renderArticles(),
      news: renderUpdateArchive("news"),
      bookSeries: renderBookSeries(),
      quantJobs: renderCareerSubpage(content.quantJobs[state.lang], {
        limit: 5,
        asiaLimit: 5,
        directoryHref: "job-directory.html",
        showAsiaJobs: true,
      }),
      jobDirectory: renderJobDirectory(),
      training: renderTraining(),
      quantPathway: renderQuantPathway(),
    }[pageKey];

    root.innerHTML = `<div class="page-shell">${html}</div>`;
  }

  function renderFooter() {
    const langUi = ui[state.lang];
    const site = content.site[state.lang];

    footerRoot.innerHTML = `
      <div class="footer-panel">
        <div class="footer-brand" data-reveal>
          <span class="footer-logo">
            <img src="assets/logo.png" alt="TQF logo">
          </span>
          <div>
            <p class="panel-label">${escapeHtml(langUi.footerTitle)}</p>
            <p class="footer-copy">${escapeHtml(langUi.footerCopy)}</p>
          </div>
        </div>
        <div class="footer-links" data-reveal style="--delay: 100ms">
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(state.lang === "th" ? "ที่อยู่" : "Address")}</span>
            <span class="meta-value">${escapeHtml(site.address)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(state.lang === "th" ? "ติดต่อ" : "Contact")}</span>
            <a class="inline-link" href="mailto:${escapeHtml(site.email)}">${escapeHtml(site.email)}</a>
          </div>
        </div>
      </div>
    `;
  }

  function renderHome() {
    const page = content.home[state.lang];
    const langUi = ui[state.lang];
    const announcementItems = content.announcements[state.lang].items.slice(0, 3);
    const newsItems = content.news[state.lang].items.slice(0, 3);
    const activityItems = content.activities[state.lang].items;
    const trainingPage = content.training[state.lang];
    const articleItems = content.articles[state.lang].items.slice(0, 3);
    const trainingItems = trainingPage.groups.map((group, index) => ({
      href: `training.html#${group.id}`,
      marker: pad(index + 1),
      kicker: group.label,
      title: group.title,
      copy: group.description,
    }));

    return `
      ${renderHero({
        eyebrow: state.lang === "th" ? "สมาคมวิชาชีพด้านการเงินเชิงปริมาณ" : "Professional Association for Quantitative Finance",
        title: page.title,
        subtitle: "",
        body: page.body,
      })}

      <section class="section">
        ${renderSectionHeading(page.announcementTitle, page.announcementTitle, page.announcementCopy)}
        <div class="activity-grid activity-grid-featured">
          ${announcementItems.map((item, index) => renderFeaturedActivityCard(item, index)).join("")}
        </div>
        ${renderHomeArchiveLink("announcements.html", state.lang === "th" ? "ดูประกาศทั้งหมด" : "View all announcements")}
      </section>

      <section class="section">
        ${renderSectionHeading(page.activityTitle, page.activityTitle, page.activityCopy)}
        <div class="activity-grid activity-grid-featured">
          ${activityItems.slice(0, 6).map((item, index) => renderFeaturedActivityCard(item, index)).join("")}
        </div>
        ${renderHomeArchiveLink("activities.html", state.lang === "th" ? "ดูกิจกรรมทั้งหมด" : "View all activities")}
      </section>

      <section class="section home-feed-section">
        ${renderSectionHeading(
          state.lang === "th" ? "การพัฒนาวิชาชีพ" : "Professional Development",
          state.lang === "th" ? "การอบรม" : "Training",
          state.lang === "th"
            ? "หลักสูตร กรอบการเรียนรู้ และแนวทางพัฒนาทักษะสำหรับสมาชิกและผู้สนใจสายงานการเงินเชิงปริมาณ"
            : "Training, learning frameworks, and professional-development pathways for members and aspiring quantitative-finance practitioners.",
        )}
        <div class="site-map-list home-feed-list">
          ${trainingItems
            .map((item, index) =>
              renderHomeFeedItem(item, index, state.lang === "th" ? "ดูรายละเอียด" : "View details"),
            )
            .join("")}
        </div>
        ${renderHomeArchiveLink("training.html", state.lang === "th" ? "ดูข้อมูลการอบรมทั้งหมด" : "View all training information")}
      </section>

      <section class="section home-feed-section">
        ${renderSectionHeading(
          state.lang === "th" ? "องค์ความรู้" : "Knowledge",
          state.lang === "th" ? "บทความ" : "Articles",
          state.lang === "th"
            ? "บทความคัดสรรด้าน quantitative finance การลงทุนเชิงปริมาณ และการพัฒนาวิชาชีพจากสมาคมและพันธมิตร"
            : "Selected articles on quantitative finance, systematic investing, and professional development from the association and its partners.",
        )}
        <div class="site-map-list home-feed-list">
          ${articleItems
            .map((item, index) =>
              renderHomeFeedItem(
                {
                  href: `articles.html#${item.id}`,
                  marker: pad(index + 1),
                  imageSrc: item.imageSrc,
                  kicker: item.kicker,
                  title: item.title,
                  copy: item.summary,
                },
                index,
                state.lang === "th" ? "อ่านบทความ" : "Read article",
              ),
            )
            .join("")}
        </div>
        ${renderHomeArchiveLink("articles.html", state.lang === "th" ? "ดูบทความทั้งหมด" : "View all articles")}
      </section>

      <section class="section home-feed-section">
        ${renderSectionHeading(
          state.lang === "th" ? "ความเคลื่อนไหวของสมาคม" : "Association Updates",
          state.lang === "th" ? "ข่าวสาร" : "News",
          state.lang === "th"
            ? "ข่าวสาร ประกาศ และความร่วมมือล่าสุดที่เกี่ยวข้องกับภารกิจของสมาคม"
            : "Latest news, announcements, and collaborations related to the association's mission.",
        )}
        <div class="activity-grid activity-grid-featured">
          ${newsItems
            .map((item, index) => renderFeaturedActivityCard(item, index))
            .join("")}
        </div>
        ${renderHomeArchiveLink("news.html", state.lang === "th" ? "ดูข่าวสารทั้งหมด" : "View all news")}
      </section>

      <section class="section">
        ${renderSectionHeading(langUi.siteMap, langUi.siteMapTitle, langUi.siteMapCopy)}
        <div class="site-map-list">
          ${page.cards
            .map(
              (card, index) => `
                <a class="site-map-item" href="${card.href}" data-reveal style="--delay: ${index * 70}ms">
                  <span class="site-map-index">${pad(index + 1)}</span>
                  <div class="site-map-body">
                    <span class="card-kicker">${escapeHtml(card.kicker)}</span>
                    <h3 class="card-title">${escapeHtml(card.title)}</h3>
                    <p class="card-copy">${escapeHtml(card.copy)}</p>
                  </div>
                  <div class="site-map-action">
                    <span>${escapeHtml(langUi.openPage)}</span>
                    <span>→</span>
                  </div>
                </a>
          `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderHomeArchiveLink(href, label) {
    return `
      <div class="home-section-more" data-reveal>
        <a class="secondary-button" href="${escapeHtml(href)}">
          <span>${escapeHtml(label)}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    `;
  }

  function renderActivities() {
    const page = content.activities[state.lang];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: page.panelTitle,
        panelBody: page.panelBody,
        imageSrc: "assets/hero-activities-quant.png",
        meta: [
          [state.lang === "th" ? "รายการกิจกรรม" : "Activity items", pad(page.items.length)],
          [state.lang === "th" ? "กิจกรรมล่าสุด" : "Latest activity", formatDate(page.items[0].date)],
          [state.lang === "th" ? "เผยแพร่สองภาษา" : "Bilingual display", state.lang === "th" ? "ไทย / English" : "Thai / English"],
        ],
      })}

      <section class="section">
        ${renderSectionHeading(
          state.lang === "th" ? "รายการกิจกรรม" : "Activity Directory",
          state.lang === "th" ? "กิจกรรมทั้งหมด" : "All Activities",
          state.lang === "th"
            ? "ค้นหากิจกรรมตามชื่อ ประเภท และปี พร้อมตรวจสอบวัน เวลา และสถานที่จากการ์ดแต่ละรายการ"
            : "Search activities by title, type, and year, with date, time, and venue shown on every card.",
        )}
        ${renderContentArchive(page.items)}
      </section>
    `;
  }

  function renderUpdateArchive(type) {
    const page = content[type][state.lang];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: "",
        body: page.body,
      })}

      <section class="section">
        ${renderSectionHeading(page.eyebrow, page.title, page.overview)}
        ${renderContentArchive(page.items)}
      </section>
    `;
  }

  function renderContentArchive(items) {
    const categories = [...new Set(items.map((item) => item.category).filter(Boolean))].sort((left, right) =>
      left.localeCompare(right, state.lang === "th" ? "th" : "en"),
    );
    const years = [...new Set(items.map((item) => getContentYear(item)))].sort((left, right) => {
      if (left === "upcoming") return -1;
      if (right === "upcoming") return 1;
      return Number(right) - Number(left);
    });
    const labels =
      state.lang === "th"
        ? {
            search: "ค้นหา",
            searchPlaceholder: "ค้นหาชื่อหรือเนื้อหา",
            type: "ประเภท",
            allTypes: "ทุกประเภท",
            date: "ปี / กำหนดการ",
            allDates: "ทุกปี",
            upcoming: "กำลังจะมาถึง",
            reset: "ล้างตัวกรอง",
            results: "รายการ",
            empty: "ไม่พบรายการที่ตรงกับตัวกรอง",
          }
        : {
            search: "Search",
            searchPlaceholder: "Search title or content",
            type: "Type",
            allTypes: "All types",
            date: "Year / Schedule",
            allDates: "All years",
            upcoming: "Upcoming",
            reset: "Clear filters",
            results: "items",
            empty: "No items match the selected filters.",
          };

    return `
      <div class="job-filter-panel content-filter-panel" data-reveal>
        <label class="job-filter-field job-filter-search">
          <span>${escapeHtml(labels.search)}</span>
          <input id="content-search" type="search" placeholder="${escapeHtml(labels.searchPlaceholder)}" autocomplete="off">
        </label>
        <label class="job-filter-field">
          <span>${escapeHtml(labels.type)}</span>
          <select id="content-type-filter">
            <option value="">${escapeHtml(labels.allTypes)}</option>
            ${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}
          </select>
        </label>
        <label class="job-filter-field">
          <span>${escapeHtml(labels.date)}</span>
          <select id="content-date-filter">
            <option value="">${escapeHtml(labels.allDates)}</option>
            ${years
              .map(
                (year) =>
                  `<option value="${escapeHtml(year)}">${escapeHtml(year === "upcoming" ? labels.upcoming : year)}</option>`,
              )
              .join("")}
          </select>
        </label>
        <button class="job-filter-reset" id="content-filter-reset" type="button">${escapeHtml(labels.reset)}</button>
      </div>
      <div class="job-directory-summary content-filter-summary" aria-live="polite">
        <strong id="content-result-count">${items.length}</strong>
        <span>${escapeHtml(labels.results)}</span>
      </div>
      <div class="activity-grid activity-grid-featured content-archive-grid" id="content-archive-results">
        ${items.map((item, index) => renderFeaturedActivityCard(item, index, true)).join("")}
      </div>
      <p class="job-directory-empty" id="content-archive-empty" hidden>${escapeHtml(labels.empty)}</p>
    `;
  }

  function getContentYear(item) {
    return item.date ? String(item.date).slice(0, 4) : "upcoming";
  }

  function renderHomeFeedItem(item, index, actionLabel) {
    const external = /^https?:\/\//i.test(item.href);

    return `
      <a
        class="site-map-item home-feed-item"
        href="${escapeHtml(item.href)}"
        ${external ? 'target="_blank" rel="noreferrer noopener"' : ""}
        data-reveal
        style="--delay: ${index * 65}ms"
      >
        <span class="site-map-index home-feed-index">
          ${
            item.imageSrc
              ? `<img src="${escapeHtml(item.imageSrc)}" alt="" class="home-feed-logo">`
              : escapeHtml(item.marker)
          }
        </span>
        <div class="site-map-body">
          <span class="card-kicker">${escapeHtml(item.kicker)}</span>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-copy">${escapeHtml(item.copy)}</p>
        </div>
        <div class="site-map-action">
          <span>${escapeHtml(actionLabel)}</span>
          <span aria-hidden="true">→</span>
        </div>
      </a>
    `;
  }

  function renderCollaborators() {
    const page = content.collaborators[state.lang];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: page.panelTitle,
        panelBody: page.panelBody,
        meta: [
          [state.lang === "th" ? "หมวดเครือข่าย" : "Network categories", pad(page.groups.length)],
          [state.lang === "th" ? "รายการทั้งหมด" : "Listed entries", pad(page.groups.reduce((sum, group) => sum + group.items.length, 0))],
          [state.lang === "th" ? "การจัดหมวด" : "Sections", state.lang === "th" ? "เพจเฟซบุ๊ก / สถาบัน / มหาวิทยาลัย / บริษัท" : "Facebook / Institute / University / Company"],
        ],
      })}

      ${page.groups
        .map(
          (group) => `
            <section class="section" id="${group.key}">
              ${renderSectionHeading(group.title, group.title, group.description)}
              <div class="card-grid">
                ${group.items
                  .map(
                    (item, index) => `
                    <a class="link-card ${group.key === "facebook" ? "link-card-facebook" : ""}" href="${item.href}" target="_blank" rel="noreferrer noopener" data-reveal style="--delay: ${index * 70}ms">
                      ${
                        item.logoSrc
                          ? `
                            <div class="partner-logo-wrap ${group.key === "facebook" ? "facebook-profile-wrap" : ""}">
                              <img src="${item.logoSrc}" alt="${escapeHtml(item.name)} logo" class="partner-logo-image ${group.key === "facebook" ? "facebook-profile-image" : ""}">
                            </div>
                          `
                          : ""
                      }
                      <div>
                        <span class="card-kicker">${escapeHtml(group.title)}</span>
                        <h3 class="card-title">${escapeHtml(item.name)}</h3>
                          <p class="card-copy">${escapeHtml(item.copy)}</p>
                        </div>
                        <div class="link-card-footer">
                          <span>${escapeHtml(state.lang === "th" ? "เปิดเว็บไซต์" : "Open site")}</span>
                          <span>→</span>
                        </div>
                      </a>
                    `,
                  )
                  .join("")}
              </div>
            </section>
          `,
        )
        .join("")}
    `;
  }

  function renderAcademic() {
    const page = content.academic[state.lang];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: page.panelTitle,
        panelBody: page.panelBody,
        meta: [
          [state.lang === "th" ? "หมวดความรู้" : "Knowledge modules", pad(quantModules.length)],
          [state.lang === "th" ? "หัวข้อการเรียนรู้" : "Learning topics", pad(totalTopics)],
          [state.lang === "th" ? "ประเด็นหลัก" : "Core pillars", pad(page.pillars.length)],
        ],
      })}

      <section class="section">
        ${renderSectionHeading(
          state.lang === "th" ? "ภาพรวมวิชาการ" : "Academic Overview",
          state.lang === "th" ? "โครงสร้างองค์ความรู้ของสมาคม" : "The association knowledge structure",
          state.lang === "th"
            ? "จัดวางประเด็นวิชาการที่เกี่ยวข้องกับภารกิจของสมาคมให้อยู่ในโครงสร้างที่ใช้งานง่าย"
            : "Presents the main academic directions of the association in a structured and accessible format.",
        )}
        <div class="card-grid">
          ${page.highlights
            .map(
              (item, index) => `
                <a class="link-card" href="${item.href}" data-reveal style="--delay: ${index * 70}ms">
                  <div>
                    <span class="card-kicker">${escapeHtml(item.kicker)}</span>
                    <h3 class="card-title">${escapeHtml(item.title)}</h3>
                    <p class="card-copy">${escapeHtml(item.copy)}</p>
                  </div>
                  <div class="link-card-footer">
                    <span>${escapeHtml(ui[state.lang].openPage)}</span>
                    <span>→</span>
                  </div>
                </a>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        ${renderSectionHeading(
          state.lang === "th" ? "ประเด็นวิชาการหลัก" : "Core Academic Areas",
          state.lang === "th" ? "สามแกนหลักของการพัฒนาความรู้" : "Three central knowledge areas",
          state.lang === "th"
            ? "สรุปประเด็นสำคัญที่เป็นแกนกลางของการพัฒนาศักยภาพด้าน quantitative finance"
            : "A concise view of the knowledge areas that underpin capability development in quantitative finance.",
        )}
        <div class="pillars-grid">
          ${page.pillars
            .map(
              (item, index) => `
                <article class="content-card" data-reveal style="--delay: ${index * 80}ms">
                  <span class="card-kicker">${escapeHtml(state.lang === "th" ? "วิชาการ" : "Academic")} ${index + 1}</span>
                  <p class="card-copy">${escapeHtml(item)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

    `;
  }

  function renderAcademicSubpage(page) {
    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: state.lang === "th" ? "สรุปหน้า" : "Page Summary",
        panelBody: page.overview,
        meta: [
          [state.lang === "th" ? "หมวด" : "Section", page.title],
          [state.lang === "th" ? "ประเด็นหลัก" : "Key points", pad(page.bullets.length)],
          [state.lang === "th" ? "ภาษา" : "Language", state.lang === "th" ? "ไทย / English" : "Thai / English"],
        ],
      })}

      <section class="section">
        ${renderSectionHeading(
          state.lang === "th" ? "ภาพรวม" : "Overview",
          page.title,
          page.overview,
        )}
        <div class="overview-grid">
          <article class="content-card" data-reveal>
            <span class="card-kicker">${escapeHtml(state.lang === "th" ? "รายละเอียด" : "Details")}</span>
            <h3 class="card-title">${escapeHtml(page.title)}</h3>
            <p class="card-copy">${escapeHtml(page.overview)}</p>
          </article>
          <article class="content-card inverse" data-reveal style="--delay: 90ms">
            <span class="card-kicker">${escapeHtml(state.lang === "th" ? "ขอบเขตเนื้อหา" : "Content Scope")}</span>
            <ul class="list-clean">
              ${page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>
        </div>
      </section>
    `;
  }

  function renderCareerSubpage(page, options = {}) {
    const allListings = page.listings || [];
    const thailandListings = options.showAsiaJobs
      ? allListings.filter((item) => item.locationMarketCode === "TH").slice(0, options.limit || 5)
      : allListings.slice(0, options.limit || allListings.length);
    const asiaMarketCodes = new Set(["SG", "VN", "HK", "MY"]);
    const asiaListings = options.showAsiaJobs
      ? allListings
          .filter((item) => asiaMarketCodes.has(item.locationMarketCode))
          .slice(0, options.asiaLimit || 5)
      : [];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: state.lang === "th" ? "สรุปหน้า" : "Page Summary",
        panelBody: page.overview,
        meta: [
          [state.lang === "th" ? "หมวด" : "Section", page.title],
          [state.lang === "th" ? "ประเด็นหลัก" : "Key points", pad(page.bullets.length)],
          [state.lang === "th" ? "ภาษา" : "Language", state.lang === "th" ? "ไทย / English" : "Thai / English"],
        ],
      })}

      ${
        thailandListings.length
          ? `
            <section class="section career-opportunities">
              ${renderSectionHeading(
                state.lang === "th" ? "ประเทศไทย" : "Thailand",
                state.lang === "th" ? "ตำแหน่งงาน Quant ในประเทศไทย" : "Quant Jobs in Thailand",
                options.showAsiaJobs
                  ? state.lang === "th"
                    ? "คัดเลือก 5 ตำแหน่งล่าสุดด้านการเงินเชิงปริมาณ วิศวกรรมการเงิน และการบริหารความเสี่ยงในประเทศไทย"
                    : "Five latest roles in quantitative finance, financial engineering, and risk management in Thailand."
                  : state.lang === "th"
                    ? "ประกาศตำแหน่งงานด้านการเงินเชิงปริมาณและวิศวกรรมการเงินจากหน่วยงานในเครือข่ายวิชาชีพ"
                    : "Recent quantitative-finance and financial-engineering opportunities from organizations in the professional network.",
              )}
              <div class="job-listings">
                ${thailandListings.map((item, index) => renderJobListing(item, index)).join("")}
              </div>
              ${
                options.directoryHref
                  ? `
                    <div class="job-directory-cta" data-reveal>
                      <a class="job-directory-link" href="${options.directoryHref}">
                        ${escapeHtml(state.lang === "th" ? "ดูตำแหน่งงานทั้งหมดและค้นหา" : "Browse and filter all jobs")}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  `
                  : ""
              }
            </section>
          `
          : ""
      }

      ${
        options.showAsiaJobs && asiaListings.length
          ? `
            <section class="section career-opportunities asia-jobs-section">
              ${renderSectionHeading(
                state.lang === "th" ? "ภูมิภาคเอเชีย" : "Asia",
                state.lang === "th" ? "งาน Quant ในเอเชีย" : "Quant Jobs in Asia",
                state.lang === "th"
                  ? "คัดเลือก 5 ตำแหน่งล่าสุดจากสิงคโปร์ เวียดนาม ฮ่องกง และมาเลเซีย"
                  : "Five latest roles from Singapore, Vietnam, Hong Kong, and Malaysia.",
              )}
              <div class="job-listings">
                ${asiaListings.map((item, index) => renderJobListing(item, index)).join("")}
              </div>
              <div class="job-directory-cta" data-reveal>
                <a class="job-directory-link" href="job-directory.html">
                  ${escapeHtml(state.lang === "th" ? "ดูตำแหน่งงานทั้งหมดและค้นหา" : "Browse and filter all jobs")}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </section>
          `
          : `
            <section class="section">
              ${renderSectionHeading(
                state.lang === "th" ? "ภาพรวมวิชาชีพ" : "Career Overview",
                page.title,
                page.overview,
              )}
              <div class="overview-grid">
                <article class="content-card" data-reveal>
                  <span class="card-kicker">${escapeHtml(state.lang === "th" ? "ภาพรวม" : "Overview")}</span>
                  <h3 class="card-title">${escapeHtml(page.title)}</h3>
                  <p class="card-copy">${escapeHtml(page.overview)}</p>
                </article>
                <article class="content-card inverse" data-reveal style="--delay: 90ms">
                  <span class="card-kicker">${escapeHtml(state.lang === "th" ? "ขอบเขตเนื้อหา" : "Content Scope")}</span>
                  <ul class="list-clean">
                    ${page.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                  </ul>
                </article>
              </div>
            </section>
          `
      }
    `;
  }

  function renderTraining() {
    const page = content.training[state.lang];
    const totalItems = page.groups.reduce((sum, group) => sum + group.items.length, 0);

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
      })}

      <nav class="training-category-nav" aria-label="${escapeHtml(
        state.lang === "th" ? "หมวดการอบรม" : "Training categories",
      )}" data-reveal>
        ${page.groups
          .map(
            (group, index) => `
              <a class="training-category-link" href="#${escapeHtml(group.id)}">
                <span>${pad(index + 1)}</span>
                <strong>${escapeHtml(group.label)}</strong>
              </a>
            `,
          )
          .join("")}
      </nav>

      ${page.groups
        .map(
          (group) => `
            <section class="section training-group" id="${escapeHtml(group.id)}">
              ${renderSectionHeading(group.label, group.title, group.description)}
              <div class="site-map-list home-feed-list">
                ${group.items
                  .map((item, index) =>
                    renderHomeFeedItem(
                      {
                        ...item,
                        marker: pad(index + 1),
                      },
                      index,
                      state.lang === "th" ? "ดูรายละเอียด" : "View details",
                    ),
                  )
                  .join("")}
              </div>
            </section>
          `,
        )
        .join("")}

      <p class="training-count" data-reveal>
        ${escapeHtml(
          state.lang === "th"
            ? `รวม ${totalItems} รายการใน 3 หมวดการอบรม`
            : `${totalItems} entries across three training categories`,
        )}
      </p>
    `;
  }

  function renderAcademicConference() {
    const page = content.academicConference[state.lang];
    const labels = state.lang === "th"
      ? {
          archive: "การประชุมที่ผ่านมา",
          heading: "Climate Finance & Risk",
          date: "วันที่",
          venue: "สถานที่",
          format: "รูปแบบ",
          organizer: "หน่วยงานผู้จัด",
          source: "เว็บไซต์งานประชุม",
        }
      : {
          archive: "Conference Archive",
          heading: "Climate Finance & Risk",
          date: "Dates",
          venue: "Venue",
          format: "Format",
          organizer: "Organiser",
          source: "Official conference site",
        };

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
      })}

      <section class="section conference-section">
        ${renderSectionHeading(labels.archive, labels.heading, page.overview)}
        <div class="conference-list">
          ${page.events
            .map(
              (event, index) => `
                <article class="conference-entry" data-reveal style="--delay: ${index * 80}ms">
                  <div class="conference-year-block">
                    <span class="conference-year">${escapeHtml(event.year)}</span>
                    <span class="conference-status">${escapeHtml(event.status)}</span>
                  </div>
                  <div class="conference-content">
                    <h2 class="conference-title">${escapeHtml(event.title)}</h2>
                    <p class="conference-subtitle">${escapeHtml(event.subtitle)}</p>
                    <p class="conference-summary">${escapeHtml(event.summary)}</p>
                    <dl class="conference-meta">
                      <div>
                        <dt>${escapeHtml(labels.date)}</dt>
                        <dd>${escapeHtml(event.dates)}</dd>
                      </div>
                      <div>
                        <dt>${escapeHtml(labels.venue)}</dt>
                        <dd>${escapeHtml(event.venue)}</dd>
                      </div>
                      <div>
                        <dt>${escapeHtml(labels.format)}</dt>
                        <dd>${escapeHtml(event.format)}</dd>
                      </div>
                      <div>
                        <dt>${escapeHtml(labels.organizer)}</dt>
                        <dd>${escapeHtml(event.organizer)}</dd>
                      </div>
                    </dl>
                  </div>
                  <a class="conference-link" href="${event.sourceHref}" target="_blank" rel="noreferrer noopener">
                    <span>${escapeHtml(labels.source)}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderJobDirectory() {
    const listings = content.quantJobs[state.lang].listings;
    const labels =
      state.lang === "th"
        ? {
            eyebrow: "วิชาชีพ",
            title: "ค้นหาตำแหน่งงาน",
            copy: "ค้นหาและกรองตำแหน่งงานด้าน quantitative finance และ financial engineering จากฐานข้อมูลของสมาคม",
            search: "ค้นหาชื่อตำแหน่ง บริษัท หรือทักษะ",
            employer: "บริษัททั้งหมด",
            location: "สถานที่ทั้งหมด",
            category: "กลุ่มงานทั้งหมด",
            skill: "ทักษะทั้งหมด",
            reset: "ล้างตัวกรอง",
            results: "ตำแหน่งงาน",
            empty: "ไม่พบตำแหน่งงานที่ตรงกับเงื่อนไข",
          }
        : {
            eyebrow: "Career",
            title: "Job Directory",
            copy: "Search and filter quantitative-finance and financial-engineering opportunities in the association database.",
            search: "Search role, employer, or skill",
            employer: "All employers",
            location: "All locations",
            category: "All job categories",
            skill: "All skills",
            reset: "Clear filters",
            results: "jobs",
            empty: "No jobs match the selected filters.",
          };

    const employers = uniqueJobValues(listings.map((item) => item.employerShort));
    const locations = jobMarketOrder.map((market) => ({
      value: market,
      label: jobMarketLabels[state.lang][market],
    }));
    const jobCategories = jobCategoryOrder.map((category) => ({
      value: category,
      label: localizeJobCategory(category, state.lang),
    }));
    const skills = uniqueJobValues(
      listings.flatMap((item) => (item.skills || []).map((skill) => skill.label)),
    );

    return `
      <section class="section job-directory-section">
        ${renderSectionHeading(labels.eyebrow, labels.title, labels.copy)}
        <div class="job-filter-panel" data-reveal>
          <label class="job-filter-field job-filter-search">
            <span>${escapeHtml(labels.search)}</span>
            <input id="job-search" type="search" placeholder="${escapeHtml(labels.search)}" autocomplete="off">
          </label>
          ${renderJobFilter("job-employer-filter", labels.employer, employers)}
          ${renderJobFilter("job-location-filter", labels.location, locations)}
          ${renderJobFilter("job-category-filter", labels.category, jobCategories)}
          ${renderJobFilter("job-skill-filter", labels.skill, skills)}
          <button class="job-filter-reset" id="job-filter-reset" type="button">${escapeHtml(labels.reset)}</button>
        </div>
        <div class="job-directory-summary" aria-live="polite">
          <strong id="job-result-count">${listings.length}</strong>
          <span>${escapeHtml(labels.results)}</span>
        </div>
        <div class="job-directory-list" id="job-directory-results">
          ${listings.map((item, index) => renderDirectoryJob(item, index)).join("")}
        </div>
        <p class="job-directory-empty" id="job-directory-empty" hidden>${escapeHtml(labels.empty)}</p>
      </section>
    `;
  }

  function renderJobFilter(id, label, options) {
    return `
      <label class="job-filter-field">
        <span>${escapeHtml(label)}</span>
        <select id="${id}">
          <option value="">${escapeHtml(label)}</option>
          ${options
            .map((option) => {
              const value = typeof option === "string" ? option : option.value;
              const optionLabel = typeof option === "string" ? option : option.label;
              return `<option value="${escapeHtml(value)}">${escapeHtml(optionLabel)}</option>`;
            })
            .join("")}
        </select>
      </label>
    `;
  }

  function uniqueJobValues(values) {
    return [...new Set(values.filter(Boolean))].sort((left, right) =>
      left.localeCompare(right, state.lang === "th" ? "th" : "en"),
    );
  }

  function renderDirectoryJob(item, index) {
    const facts = [item.jobCategory, item.location, item.employmentType, item.team].filter(Boolean);
    const detailLabel = state.lang === "th" ? "รายละเอียดตำแหน่ง" : "Job details";
    const responsibilityLabel = state.lang === "th" ? "หน้าที่ความรับผิดชอบ" : "Responsibilities";
    const qualificationLabel = state.lang === "th" ? "คุณสมบัติ" : "Qualifications";
    const searchText = [
      item.title,
      item.employer,
      item.employerShort,
      item.searchAliases,
      ...facts,
      ...(item.skills || []).map((skill) => skill.label),
    ]
      .join(" ")
      .toLocaleLowerCase();

    return `
      <article
        class="job-directory-card"
        data-reveal
        data-job-search="${escapeHtml(searchText)}"
        data-job-employer="${escapeHtml(item.employerShort)}"
        data-job-location="${escapeHtml(item.locationMarketCode || inferJobMarket(item.location, item.location))}"
        data-job-category="${escapeHtml(item.jobCategoryCode || "")}"
        data-job-skills="${escapeHtml((item.skills || []).map((skill) => skill.label).join("|"))}"
        style="--delay: ${(index % 10) * 45}ms"
      >
        <div class="job-directory-logo">
          <img src="${escapeHtml(item.logoSrc)}" alt="${escapeHtml(item.employerShort)} logo">
        </div>
        <div class="job-directory-body">
          <div class="job-directory-meta">
            <p class="job-directory-employer">${escapeHtml(item.employer)}</p>
            ${renderJobPublishedDate(item.publishedDate, item.publishedDateKind)}
          </div>
          <h2>${escapeHtml(item.title)}</h2>
          <div class="job-facts">${facts.map((fact) => `<span>${escapeHtml(fact)}</span>`).join("")}</div>
          <div class="job-skill-list" aria-label="${escapeHtml(
            state.lang === "th" ? "ทักษะที่ต้องการ" : "Requested skills",
          )}">
            ${(item.skills || [])
              .map(
                (skill) =>
                  `<span class="job-skill job-skill-${skill.tone}" title="${escapeHtml(skill.localizedLabel || skill.label)}">${escapeHtml(skill.label)}</span>`,
              )
              .join("")}
          </div>
          <details class="job-details job-directory-details">
            <summary>${escapeHtml(detailLabel)}</summary>
            <div class="job-detail-grid">
              <div class="job-detail-block">
                <h4>${escapeHtml(responsibilityLabel)}</h4>
                <ul>${item.responsibilities.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>
              </div>
              <div class="job-detail-block">
                <h4>${escapeHtml(qualificationLabel)}</h4>
                <ul>${item.qualifications.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>
              </div>
            </div>
          </details>
        </div>
        <a class="job-directory-action" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer noopener">
          ${escapeHtml(state.lang === "th" ? "ดูประกาศ" : "View job")} <span aria-hidden="true">↗</span>
        </a>
      </article>
    `;
  }

  function renderAbout() {
    const page = content.about[state.lang];
    const langUi = ui[state.lang];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: page.panelTitle,
        panelBody: page.panelBody,
        meta: [
          [langUi.mission, pad(page.mission.length)],
          [langUi.strategy, pad(page.strategy.length)],
          [langUi.sourcePage, "about"],
        ],
      })}

      <section class="section">
        <div class="overview-grid">
          <figure class="image-panel emblem-panel" data-reveal>
            <img src="assets/emblem.png?v=20261001-white" alt="${escapeHtml(state.lang === "th" ? "ตราสัญลักษณ์สมาคม TQF" : "TQF association emblem")}" class="section-image emblem-image">
            <figcaption class="image-caption">${escapeHtml(state.lang === "th" ? "ตราสัญลักษณ์ของสมาคม" : "Association emblem")}</figcaption>
          </figure>
          <div class="content-card" data-reveal style="--delay: 110ms">
            <span class="card-kicker">${escapeHtml(langUi.institutionalNote)}</span>
            <h3 class="card-title">${escapeHtml(state.lang === "th" ? "อัตลักษณ์ของสมาคม" : "Association identity")}</h3>
            <p class="card-copy">${escapeHtml(state.lang === "th" ? "สมาคมนำเสนออัตลักษณ์ผ่านวิสัยทัศน์ พันธกิจ และยุทธศาสตร์ขององค์กร" : "The association identity is presented through its vision, mission, and strategic direction.")}</p>
          </div>
        </div>
      </section>

      <section class="section">
        ${renderSectionHeading(langUi.vision, page.title, state.lang === "th" ? "วิสัยทัศน์ของสมาคมถูกนำเสนอเป็นข้อความหลักที่สะท้อนบทบาทการเป็นศูนย์กลางเครือข่ายของสายงานควอนท์" : "The official vision frames TQF as a central network for knowledge exchange among quantitative finance professionals and interested participants.")}
        <div class="content-card inverse" data-reveal>
          <h3 class="section-title">${escapeHtml(page.vision)}</h3>
        </div>
      </section>

      <section class="section">
        ${renderSectionHeading(langUi.mission, state.lang === "th" ? "พันธกิจ 5 ด้านของสมาคม" : "Five mission commitments", state.lang === "th" ? "แต่ละข้อด้านล่างสะท้อนพันธกิจหลักของสมาคม" : "Each item below reflects a core mission of the association.")}
        <div class="card-grid">
          ${page.mission
            .map(
              (item, index) => `
                <article class="content-card" data-reveal style="--delay: ${index * 65}ms">
                  <span class="card-kicker">${escapeHtml(langUi.missionPoint)} ${index + 1}</span>
                  <p class="card-copy">${escapeHtml(item)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        ${renderSectionHeading(langUi.strategy, state.lang === "th" ? "ยุทธศาสตร์หลัก 3 ด้าน" : "Three strategic directions", state.lang === "th" ? "ข้อมูลชุดนี้สะท้อนแนวทางการพัฒนาศักยภาพ การสร้างเครือข่าย และบทบาทต่ออุตสาหกรรมการเงิน" : "These priorities focus on capability building, knowledge exchange, and a role in shaping the wider financial industry.")}
        <div class="pillars-grid">
          ${page.strategy
            .map(
              (item, index) => `
                <article class="content-card" data-reveal style="--delay: ${index * 85}ms">
                  <span class="card-kicker">${escapeHtml(langUi.priority)} ${index + 1}</span>
                  <p class="card-copy">${escapeHtml(item)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderTeam() {
    const page = content.team[state.lang];
    const langUi = ui[state.lang];
    const leadership = page.members.filter((member) =>
      state.lang === "th"
        ? member.role === "นายก" || member.role === "อุปนายก"
        : member.role === "President" || member.role === "Vice President",
    );
    const committee = page.members.filter((member) => !leadership.includes(member));

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: page.panelTitle,
        panelBody: page.panelBody,
      })}

      <section class="section board-section board-section-leadership">
        ${renderSectionHeading(langUi.leadership, langUi.leadershipTitle, langUi.leadershipCopy)}
        <div class="members-grid board-grid board-grid-leadership">
          ${leadership.map((member, index) => renderMemberCard(member, index, true)).join("")}
        </div>
      </section>

      <section class="section board-section">
        ${renderSectionHeading(langUi.committee, langUi.committeeTitle, langUi.committeeCopy)}
        <div class="members-grid board-grid">
          ${committee
            .map((member, index) => renderMemberCard(member, leadership.length + index))
            .join("")}
        </div>
      </section>
    `;
  }

  function renderQuantPathway() {
    const page = content.quant[state.lang];
    const langUi = ui[state.lang];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: page.panelTitle,
        panelBody: page.panelBody,
        meta: [
          [langUi.levels, pad(page.groups.length)],
          [langUi.modules, pad(quantModules.length)],
          [langUi.topics, pad(totalTopics)],
        ],
      })}

      <section class="section">
        ${renderSectionHeading(
          state.lang === "th" ? "แผนภาพเส้นทางการเรียนรู้" : "Learning Path Diagram",
          state.lang === "th" ? "ภาพรวมเส้นทาง Quant" : "Quant pathway overview",
          state.lang === "th"
            ? "แผนภาพนี้สรุปเส้นทางการเรียนรู้จากพื้นฐาน แกนหลัก ไปจนถึงความรู้เฉพาะทาง โดยใช้หัวข้อเดียวกับที่แสดงในรายการด้านล่าง"
            : "This visual summarizes the progression from foundational topics to core and specialized areas using the same subject structure shown below.",
        )}
        <figure class="image-panel pathway-diagram-panel" data-reveal>
          <img
            src="assets/quant-pathway-map.png"
            alt="${escapeHtml(
              state.lang === "th"
                ? "แผนภาพเส้นทางการเรียนรู้ด้าน Quant ของ TQF"
                : "TQF quantitative finance learning path diagram",
            )}"
            class="section-image pathway-diagram-image"
          >
          <figcaption class="image-caption">
            ${escapeHtml(
              state.lang === "th"
                ? "ภาพแผนผังสรุปลำดับการเรียนรู้จากพื้นฐาน แกนหลัก และความรู้เฉพาะทาง"
                : "A structured visual map of the pathway across foundational, core, and specialized stages.",
            )}
          </figcaption>
        </figure>
        <div class="pillars-grid pathway-stage-grid">
          ${page.groups
            .map(
              (group, index) => `
                <article class="content-card inverse pathway-stage-card" data-reveal style="--delay: ${index * 75}ms">
                  <span class="card-kicker">${escapeHtml(group.label)}</span>
                  <h3 class="card-title">${escapeHtml(group.title)}</h3>
                  <ul class="list-clean pathway-stage-list">
                    ${group.modules.map((module) => `<li>${escapeHtml(module.title)}</li>`).join("")}
                  </ul>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        ${renderSectionHeading(langUi.threeLevels, state.lang === "th" ? "สามระดับของเส้นทางทักษะ" : "Three layers of the pathway", state.lang === "th" ? "เส้นทางทักษะแบ่งออกเป็นพื้นฐาน แก่นหลัก และความรู้เฉพาะทาง" : "The pathway is organized into foundational, core, and specialized levels.")}
        <div class="pillars-grid">
          ${page.overview
            .map(
              (item, index) => `
                <article class="content-card" data-reveal style="--delay: ${index * 80}ms">
                  <span class="card-kicker">${escapeHtml(page.groups[index].label)}</span>
                  <h3 class="card-title">${escapeHtml(item.title)}</h3>
                  <p class="card-copy">${escapeHtml(item.description)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      ${page.groups
        .map(
          (group, groupIndex) => `
            <section class="section">
              <div class="group-panel">
                <div class="content-card group-heading" data-reveal>
                  <span class="card-kicker">${escapeHtml(group.label)}</span>
                  <h2 class="group-title">${escapeHtml(group.title)}</h2>
                  <p class="group-subtitle">${escapeHtml(group.description)}</p>
                </div>
                <div class="group-grid">
                  ${group.modules
                    .map(
                      (module, index) => `
                        <details class="module-card" ${groupIndex === 0 && index === 0 ? "open" : ""} data-reveal style="--delay: ${index * 70}ms">
                          <summary>
                            <h3 class="module-title">${escapeHtml(module.title)}</h3>
                            <span class="module-count">${pad(module.items.length)}</span>
                          </summary>
                          <div class="module-body">
                            <ul>
                              ${module.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                            </ul>
                          </div>
                        </details>
                      `,
                    )
                    .join("")}
                </div>
              </div>
            </section>
          `,
        )
        .join("")}
    `;
  }

  function renderBylaws() {
    const page = content.bylaws[state.lang];
    const langUi = ui[state.lang];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: page.panelTitle,
        panelBody: page.panelBody,
        meta: [
          [langUi.bylawSections, pad(page.sections.length)],
          [state.lang === "th" ? "ประชุมใหญ่สามัญ" : "Annual meeting", state.lang === "th" ? "มีนาคม" : "March"],
          [state.lang === "th" ? "เกณฑ์แก้ไขข้อบังคับ" : "Amendment threshold", "2/3"],
        ],
      })}

      <section class="section">
        <div class="legal-highlights">
          ${[
            [
              state.lang === "th" ? "ประเภทสมาชิก" : "Membership types",
              "03",
              state.lang === "th" ? "สามัญ, วิสามัญ, กิตติมศักดิ์" : "Ordinary, associate, honorary",
            ],
            [
              state.lang === "th" ? "ประชุมใหญ่สามัญ" : "Annual general meeting",
              state.lang === "th" ? "มี.ค." : "Mar",
              state.lang === "th" ? "ต้องจัดภายในเดือนมีนาคมของทุกปี" : "Must be held within March each year",
            ],
            [
              state.lang === "th" ? "แก้ไขข้อบังคับ" : "Amendments",
              "2/3",
              state.lang === "th" ? "คะแนนเสียงไม่น้อยกว่าสองในสาม" : "Requires a two-thirds vote",
            ],
            [
              state.lang === "th" ? "เลิกสมาคม" : "Dissolution",
              "3/4",
              state.lang === "th" ? "คะแนนเสียงไม่น้อยกว่าสามในสี่" : "Requires a three-quarters vote",
            ],
          ]
            .map(
              ([label, value, copy], index) => `
                <article class="stat-card" data-reveal style="--delay: ${index * 70}ms">
                  <span class="stat-label">${escapeHtml(label)}</span>
                  <strong class="stat-value">${escapeHtml(value)}</strong>
                  <p class="card-copy">${escapeHtml(copy)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <div class="legal-layout">
          <aside class="legal-card sticky" data-reveal>
            <figure class="image-panel emblem-panel compact-emblem">
              <img src="assets/emblem.png?v=20261001-white" alt="${escapeHtml(state.lang === "th" ? "ตราสัญลักษณ์สมาคม TQF" : "TQF association emblem")}" class="section-image emblem-image">
            </figure>
            <span class="card-kicker">${escapeHtml(langUi.sectionIndex)}</span>
            <h2 class="legal-title">${escapeHtml(langUi.sectionIndex)}</h2>
            <p class="legal-note">${escapeHtml(state.lang === "th" ? "เลือกดูแต่ละหมวดจากข้อบังคับที่เผยแพร่บนเว็บไซต์ TQF" : "Jump through the bylaw sections published on the official TQF website.")}</p>
            <ul class="toc-list">
              ${page.sections
                .map(
                  (section, index) => `
                    <li>
                      <a href="#${sectionId(index)}">${escapeHtml(state.lang === "th" ? section.thTitle : section.enTitle)}</a>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </aside>
          <div class="legal-stack">
            ${page.sections
              .map(
                (section, index) => `
                  <article class="legal-card" id="${sectionId(index)}" data-reveal style="--delay: ${index * 45}ms">
                    <h3 class="legal-section-title">${escapeHtml(state.lang === "th" ? section.thTitle : section.enTitle)}</h3>
                    ${
                      state.lang === "th"
                        ? `
                          <div class="legal-lines">
                            ${section.thLines.map((line) => renderLegalLine(line)).join("")}
                          </div>
                        `
                        : `
                          <div class="legal-summary">
                            <span class="card-kicker">${escapeHtml(langUi.legalSummaries)}</span>
                            <p class="card-copy">${escapeHtml(langUi.legalSummariesCopy)}</p>
                            <ul class="list-clean">
                              ${section.enSummary.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                            </ul>
                          </div>
                          <details class="module-card legal-original">
                            <summary>
                              <h4 class="module-title">${escapeHtml(langUi.bylawOriginal)}</h4>
                              <span class="module-count">TH</span>
                            </summary>
                            <div class="module-body">
                              <div class="legal-lines">
                                ${section.thLines.map((line) => renderLegalLine(line)).join("")}
                              </div>
                            </div>
                          </details>
                        `
                    }
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>
    `;
  }

  function renderHero({ eyebrow, title, subtitle, body }) {
    const normalizedTitle = title.trim().toLocaleLowerCase();
    const normalizedEyebrow = (eyebrow || "").trim().toLocaleLowerCase();
    const showEyebrow = normalizedEyebrow && normalizedEyebrow !== normalizedTitle;
    const showSubtitle =
      subtitle &&
      subtitle.trim().toLocaleLowerCase() !== normalizedTitle &&
      subtitle.trim().toLocaleLowerCase() !== normalizedEyebrow;

    return `
      <section class="hero">
        <article class="hero-panel" data-reveal>
          <span class="hero-watermark">TQF</span>
          <div class="hero-layout">
            <div class="hero-copy">
              ${showEyebrow ? `<span class="eyebrow">${escapeHtml(eyebrow)}</span>` : ""}
              <h1 class="display-title">${escapeHtml(title)}</h1>
              ${showSubtitle ? `<p class="display-subtitle">${escapeHtml(subtitle)}</p>` : ""}
              <p class="lead">${escapeHtml(body)}</p>
              <div class="hero-actions">
                <a class="primary-button" href="mailto:${escapeHtml(content.site[state.lang].email)}">
                  ${escapeHtml(state.lang === "th" ? "อีเมลติดต่อ" : "Email contact")}
                </a>
                <a class="secondary-button" href="team.html">
                  ${escapeHtml(state.lang === "th" ? "ดูคณะกรรมการ" : "View committee")}
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    `;
  }

  function renderArticles() {
    const page = content.articles[state.lang];

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: state.lang === "th" ? "สรุปหน้า" : "Page Summary",
        panelBody: page.overview,
        meta: [
          [state.lang === "th" ? "จำนวนบทความ" : "Articles", pad(page.items.length)],
          [state.lang === "th" ? "รูปแบบ" : "Format", state.lang === "th" ? "บทความบนเว็บไซต์" : "On-site articles"],
          [state.lang === "th" ? "ภาษา" : "Language", state.lang === "th" ? "ไทย / English" : "Thai / English"],
        ],
      })}

      <section class="section">
        ${renderSectionHeading(
          state.lang === "th" ? "สารบัญบทความ" : "Article Index",
          page.title,
          page.overview,
        )}
        <div class="article-index-grid">
          ${page.items
            .map(
              (item, index) => `
                <a class="link-card" href="#${item.id}" data-reveal style="--delay: ${index * 80}ms">
                  ${
                    item.imageSrc
                      ? `
                        <div class="article-index-image-frame">
                          <img src="${item.imageSrc}" alt="${escapeHtml(item.title)}" class="article-index-image">
                        </div>
                      `
                      : ""
                  }
                  <div>
                    <span class="card-kicker">${escapeHtml(item.kicker)}</span>
                    <h3 class="card-title">${escapeHtml(item.title)}</h3>
                    <p class="card-copy">${escapeHtml(item.summary)}</p>
                  </div>
                  <div class="link-card-footer">
                    <span>${escapeHtml(state.lang === "th" ? "อ่านบทความ" : "Read article")}</span>
                    <span>→</span>
                  </div>
                </a>
              `,
            )
            .join("")}
        </div>
      </section>

      ${page.items
        .map(
          (item, index) => `
            <section class="section" id="${item.id}">
              ${renderSectionHeading(item.kicker, item.title, item.summary)}
              <div class="article-layout">
                <article class="content-card article-card" data-reveal style="--delay: ${index * 70}ms">
                  ${
                    item.imageSrc
                      ? `
                        <div class="article-cover-frame">
                          <img src="${item.imageSrc}" alt="${escapeHtml(item.title)}" class="article-cover-image">
                        </div>
                      `
                      : ""
                  }
                  <span class="card-kicker">${escapeHtml(state.lang === "th" ? "เนื้อหาบทความ" : "Article")}</span>
                  ${item.paragraphs
                    .map((paragraph) => `<p class="article-paragraph">${escapeHtml(paragraph)}</p>`)
                    .join("")}
                </article>
                <aside class="content-card inverse article-sidebar" data-reveal style="--delay: ${index * 70 + 90}ms">
                  <span class="card-kicker">${escapeHtml(state.lang === "th" ? "ประเด็นสำคัญ" : "Key Points")}</span>
                  <ul class="list-clean">
                    ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
                  </ul>
                  <a class="article-source-link" href="${item.sourceHref}" target="_blank" rel="noreferrer noopener">
                    ${escapeHtml(state.lang === "th" ? `แหล่งที่มา: ${item.sourceLabel}` : `Source: ${item.sourceLabel}`)}
                  </a>
                </aside>
              </div>
            </section>
          `,
        )
        .join("")}
    `;
  }

  function renderJobListing(item, index) {
    const responsibilityLabel = state.lang === "th" ? "หน้าที่ความรับผิดชอบ" : "Responsibilities";
    const qualificationLabel = state.lang === "th" ? "คุณสมบัติ" : "Qualifications";
    const sourceLabel = state.lang === "th" ? "ดูประกาศต้นฉบับ" : "View original post";
    const detailLabel = state.lang === "th" ? "รายละเอียดตำแหน่ง" : "Job details";
    const facts = [item.jobCategory, item.location, item.employmentType, item.team].filter(Boolean);

    return `
      <article class="job-card" data-reveal style="--delay: ${index * 80}ms">
        <div class="job-logo-wrap">
          <img src="${escapeHtml(item.logoSrc)}" alt="${escapeHtml(item.employerShort)} logo" class="job-logo">
        </div>
        <div class="job-card-body">
          <div class="job-employer">
            <span class="job-status">${escapeHtml(item.status)}</span>
            <p class="job-employer-name">${escapeHtml(item.employer)}</p>
            ${renderJobPublishedDate(item.publishedDate, item.publishedDateKind)}
          </div>
          <div class="job-heading">
            <h3 class="job-title">${escapeHtml(item.title)}</h3>
            <div class="job-facts">
              ${facts.map((fact) => `<span>${escapeHtml(fact)}</span>`).join("")}
            </div>
          </div>
          <p class="job-summary">${escapeHtml(item.summary)}</p>
          ${
            item.skills?.length
              ? `
                <div class="job-skill-list" aria-label="${escapeHtml(
                  state.lang === "th" ? "ทักษะที่ต้องการ" : "Requested skills",
                )}">
                  ${item.skills
                    .map(
                      (skill) =>
                        `<span class="job-skill job-skill-${skill.tone}" title="${escapeHtml(skill.localizedLabel || skill.label)}">${escapeHtml(skill.label)}</span>`,
                    )
                    .join("")}
                </div>
              `
              : ""
          }
          <details class="job-details">
            <summary>${escapeHtml(detailLabel)}</summary>
            <div class="job-detail-grid">
              <div class="job-detail-block">
                <h4>${escapeHtml(responsibilityLabel)}</h4>
                <ul>${item.responsibilities.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>
              </div>
              <div class="job-detail-block">
                <h4>${escapeHtml(qualificationLabel)}</h4>
                <ul>${item.qualifications.map((entry) => `<li>${escapeHtml(entry)}</li>`).join("")}</ul>
              </div>
            </div>
          </details>
          <a class="job-source-link" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer noopener">${escapeHtml(sourceLabel)} ↗</a>
        </div>
      </article>
    `;
  }

  function renderBookSeries() {
    const page = content.bookSeries[state.lang];
    const textbooks = page.publications.filter((item) => item.category === "textbook");
    const books = page.publications.filter((item) => item.category !== "textbook");

    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: state.lang === "th" ? "สรุปหน้า" : "Page Summary",
        panelBody: page.overview,
        meta: [
          [state.lang === "th" ? "จำนวนเล่ม" : "Volumes", pad(page.publications.length)],
          [state.lang === "th" ? "แหล่งอ้างอิง" : "Source", "Quant Pathway"],
          [state.lang === "th" ? "รูปแบบ" : "Format", "PDF download"],
        ],
      })}

      ${renderBookCategory({
        eyebrow: state.lang === "th" ? "ชุดตำราวิชาการ" : "Academic Series",
        title: state.lang === "th" ? "ตำราเรียน" : "Textbooks",
        copy:
          state.lang === "th"
            ? "ตำราและคู่มือสำหรับใช้ประกอบการเรียนรู้และวางแผนพัฒนาทักษะตามกรอบ Quant Pathway ของ TQF"
            : "Academic manuals and study resources supporting structured learning through the TQF Quant Pathway.",
        items: textbooks,
        variant: "textbook",
      })}

      ${renderBookCategory({
        eyebrow: state.lang === "th" ? "รายการหนังสือ" : "Book Collection",
        title: state.lang === "th" ? "หนังสือ" : "Books",
        copy:
          state.lang === "th"
            ? "หนังสือด้านการเงินเชิงปริมาณ คณิตศาสตร์การเงิน และเทคโนโลยีที่คัดเลือกเพื่อนำเสนอแก่สมาชิกและผู้สนใจ"
            : "Selected books on quantitative finance, financial mathematics, and technology for members and interested readers.",
        items: books,
        variant: "book",
      })}
    `;
  }

  function renderBookCategory({ eyebrow, title, copy, items, variant }) {
    if (!items.length) return "";

    return `
      <section class="section book-category-panel book-category-${variant}">
        ${renderSectionHeading(eyebrow, title, copy)}
        <div class="publication-grid">
          ${items.map((item, index) => renderBookCard(item, index)).join("")}
        </div>
      </section>
    `;
  }

  function renderBookCard(item, index) {
    return `
      <article class="publication-card" data-reveal style="--delay: ${index * 90}ms">
        <img src="${item.coverSrc}" alt="${escapeHtml(item.title)} cover" class="publication-cover">
        <div class="publication-body">
          <span class="card-kicker">${escapeHtml(item.kicker)}</span>
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-copy">${escapeHtml(item.description)}</p>
          <div class="publication-meta">
            ${item.authors ? `<span>${escapeHtml(item.authors)}</span>` : ""}
            <span>${escapeHtml(item.format)}</span>
            <span>${escapeHtml(item.referenceLabel || (state.lang === "th" ? "อ้างอิงจาก TQF Quant Pathway" : "Based on TQF Quant Pathway"))}</span>
          </div>
          ${
            item.downloadHref || item.onlineHref
              ? `
                <div class="publication-actions">
                  ${
                    item.downloadHref
                      ? `
                        <a class="primary-button" href="${item.downloadHref}" download>
                          ${escapeHtml(state.lang === "th" ? "ดาวน์โหลด PDF" : "Download PDF")}
                        </a>
                      `
                      : ""
                  }
                  ${
                    item.onlineHref
                      ? `
                        <a class="secondary-button" href="${item.onlineHref}">
                          ${escapeHtml(state.lang === "th" ? "อ่านหน้าเนื้อหา" : "Read source page")}
                        </a>
                      `
                      : ""
                  }
                </div>
              `
              : ""
          }
          ${item.availabilityNote ? `<p class="publication-availability">${escapeHtml(item.availabilityNote)}</p>` : ""}
          ${
            item.sourceHref
              ? `
                <a class="publication-source" href="${item.sourceHref}" target="_blank" rel="noreferrer noopener">
                  ${escapeHtml(state.lang === "th" ? "แหล่งที่มา: TQF Quant Pathway" : "Source: TQF Quant Pathway")}
                </a>
              `
              : ""
          }
        </div>
      </article>
    `;
  }

  function renderPublicationPage(page) {
    return `
      ${renderHero({
        eyebrow: page.eyebrow,
        title: page.title,
        subtitle: page.subtitle,
        body: page.body,
        panelTitle: state.lang === "th" ? "สรุปหน้า" : "Page Summary",
        panelBody: page.overview,
        meta: [
          [state.lang === "th" ? "อัปเดตล่าสุด" : "Recent update", page.recentMeta[0][1]],
          [state.lang === "th" ? "รายการแนะนำ" : "Featured items", pad(page.showcase.length)],
          [state.lang === "th" ? "ภาษา" : "Language", state.lang === "th" ? "ไทย / English" : "Thai / English"],
        ],
      })}

      <section class="section">
        ${renderSectionHeading(page.recentTitle, page.recentHeadline, page.recentCopy)}
        <div class="overview-grid">
          <article class="content-card" data-reveal>
            <span class="card-kicker">${escapeHtml(state.lang === "th" ? "อัปเดต" : "Update")}</span>
            <h3 class="card-title">${escapeHtml(page.recentHeadline)}</h3>
            <p class="card-copy">${escapeHtml(page.recentCopy)}</p>
          </article>
          <aside class="content-card inverse" data-reveal style="--delay: 90ms">
            <span class="card-kicker">${escapeHtml(state.lang === "th" ? "ข้อมูลกำกับ" : "Details")}</span>
            <div class="meta-list">
              ${page.recentMeta
                .map(
                  ([label, value]) => `
                    <div class="meta-item">
                      <span class="meta-label">${escapeHtml(label)}</span>
                      <span class="meta-value">${escapeHtml(value)}</span>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </aside>
        </div>
      </section>

      <section class="section">
        ${renderSectionHeading(
          state.lang === "th" ? "ฉบับแนะนำ" : "Featured Showcase",
          page.title,
          page.overview,
        )}
        <div class="publication-grid">
          ${page.showcase
            .map(
              (item, index) => `
                <article class="publication-card" data-reveal style="--delay: ${index * 90}ms">
                  <img src="${item.coverSrc}" alt="${escapeHtml(item.title)} cover" class="publication-cover">
                  <div class="publication-body">
                    <span class="card-kicker">${escapeHtml(item.kicker)}</span>
                    <h3 class="card-title">${escapeHtml(item.title)}</h3>
                    <p class="card-copy">${escapeHtml(item.description)}</p>
                    <div class="publication-meta">
                      <span>${escapeHtml(item.sourceLabel)}</span>
                      <span>${escapeHtml(state.lang === "th" ? "อัปเดตบนเว็บไซต์" : "Published on site")}</span>
                    </div>
                    <div class="publication-actions">
                      <a class="primary-button" href="${item.primaryHref}">
                        ${escapeHtml(item.primaryLabel)}
                      </a>
                      <a class="secondary-button" href="${item.secondaryHref}">
                        ${escapeHtml(item.secondaryLabel)}
                      </a>
                    </div>
                    <a class="publication-source" href="${item.sourceHref}" target="_blank" rel="noreferrer noopener">
                      ${escapeHtml(state.lang === "th" ? `แหล่งที่มา: ${item.sourceLabel}` : `Source: ${item.sourceLabel}`)}
                    </a>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  }

  function renderSectionHeading(eyebrow, title, copy) {
    const showEyebrow =
      eyebrow && eyebrow.trim().toLocaleLowerCase() !== title.trim().toLocaleLowerCase();

    return `
      <div class="section-heading" data-reveal>
        ${showEyebrow ? `<span class="eyebrow">${escapeHtml(eyebrow)}</span>` : ""}
        <h2 class="section-title">${escapeHtml(title)}</h2>
        <p class="section-copy">${escapeHtml(copy)}</p>
      </div>
    `;
  }

  function renderFeaturedActivityCard(item, index, filterable = false) {
    const filterAttributes = filterable
      ? `
        data-content-card
        data-content-category="${escapeHtml(item.category || "")}"
        data-content-year="${escapeHtml(getContentYear(item))}"
        data-content-search="${escapeHtml(
          [item.title, item.copy, item.category, item.date, item.dateLabel, item.time, item.location]
            .filter(Boolean)
            .join(" ")
            .toLocaleLowerCase(),
        )}"
      `
      : "";

    return `
      <a class="activity-card activity-card-featured" href="${item.href}" ${filterAttributes} data-reveal style="--delay: ${index * 70}ms">
        <div class="activity-image-frame">
          <img src="${item.imageSrc || heroImagePlaceholder}" alt="${escapeHtml(item.title)}" class="activity-image">
        </div>
        <div class="activity-meta">
          <span class="card-kicker">${escapeHtml(item.category)}</span>
          <span class="activity-date">${escapeHtml(item.dateLabel || formatDate(item.date))}</span>
        </div>
        <div class="activity-body">
          <h3 class="card-title">${escapeHtml(item.title)}</h3>
          <p class="card-copy">${escapeHtml(item.copy)}</p>
        </div>
        <div class="activity-footer">
          ${renderActivityMetaPill("time", item.time)}
          ${renderActivityMetaPill("map", item.location)}
        </div>
      </a>
    `;
  }

  function renderActivityArchiveItem(item, index) {
    return `
      <a class="activity-card activity-card-archive" href="${item.href}" data-reveal style="--delay: ${index * 70}ms">
        <div class="activity-archive-main">
          <div class="activity-meta">
            <span class="card-kicker">${escapeHtml(item.category)}</span>
            <span class="activity-date">${escapeHtml(item.dateLabel || formatDate(item.date))}</span>
          </div>
          <div class="activity-body">
            <h3 class="card-title">${escapeHtml(item.title)}</h3>
            <p class="card-copy">${escapeHtml(item.copy)}</p>
          </div>
        </div>
        <div class="activity-archive-side">
          <div class="activity-footer">
            ${renderActivityMetaPill("time", item.time)}
            ${renderActivityMetaPill("map", item.location)}
          </div>
          <div class="link-card-footer">
            <span>${escapeHtml(ui[state.lang].openPage)}</span>
            <span>→</span>
          </div>
        </div>
      </a>
    `;
  }

  function renderActivityMetaPill(type, value) {
    if (!value) {
      return "";
    }

    return `
      <span class="activity-info-pill">
        <span class="activity-info-icon" aria-hidden="true">${type === "time" ? timeIcon() : mapPinIcon()}</span>
        <span>${escapeHtml(value)}</span>
      </span>
    `;
  }

  function isUpcomingActivity(dateValue, explicitUpcoming = false) {
    if (explicitUpcoming) {
      return true;
    }

    if (!dateValue) {
      return false;
    }

    return new Date(`${dateValue}T23:59:59`).getTime() >= Date.now();
  }

  function timeIcon() {
    return `
      <svg viewBox="0 0 24 24" focusable="false">
        <circle cx="12" cy="12" r="8.5"></circle>
        <path d="M12 7.5v5l3.2 2"></path>
      </svg>
    `;
  }

  function mapPinIcon() {
    return `
      <svg viewBox="0 0 24 24" focusable="false">
        <path d="M12 20c3.7-4.4 5.5-7.3 5.5-10a5.5 5.5 0 1 0-11 0c0 2.7 1.8 5.6 5.5 10Z"></path>
        <circle cx="12" cy="10" r="2.1"></circle>
      </svg>
    `;
  }

  function renderMemberCard(member, index, isLeadership = false) {
    const visual = member.imageSrc
      ? `<img src="${member.imageSrc}" alt="${escapeHtml(member.name)}" class="member-photo">`
      : member.initials
        ? `<div class="member-avatar-placeholder">${escapeHtml(member.initials)}</div>`
        : `
            <div class="member-avatar-placeholder" aria-hidden="true">
              <svg viewBox="0 0 24 24" class="member-avatar-icon" focusable="false">
                <circle cx="12" cy="8" r="4.2"></circle>
                <path d="M5.2 19.4c1.4-3.3 4-4.9 6.8-4.9s5.4 1.6 6.8 4.9"></path>
              </svg>
            </div>
          `;

    return `
      <article class="member-card${isLeadership ? " member-card-leadership" : ""}" data-reveal style="--delay: ${(index % 3) * 70}ms">
        <div class="member-media">
          ${visual}
        </div>
        <div class="member-profile">
          <h3 class="member-name">${escapeHtml(member.name)}</h3>
          <div class="member-role">${escapeHtml(member.role)}</div>
          ${member.qualifications ? `<p class="member-meta"><span>${escapeHtml(state.lang === "th" ? "คุณวุฒิ" : "Qualifications")}</span>${escapeHtml(member.qualifications)}</p>` : ""}
        </div>
      </article>
    `;
  }

  function renderLegalLine(line) {
    const cssClass = [
      "legal-line",
      line.startsWith("ข้อ ") ? "legal-article" : "",
      /^\d+\.\d+/.test(line) ? "legal-subpoint" : "",
      /^ลงชื่อ|^นาย/.test(line) ? "legal-signature" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return `<p class="${cssClass}">${escapeHtml(line)}</p>`;
  }

  function bindInteractions() {
    const toggle = document.getElementById("menu-toggle-control");
    const nav = document.getElementById("site-nav");
    const dropdowns = Array.from(document.querySelectorAll(".nav-dropdown-panel"));

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("menu-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        if (!isOpen) {
          dropdowns.forEach((dropdown) => {
            dropdown.removeAttribute("open");
          });
        }
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          document.body.classList.remove("menu-open");
          toggle.setAttribute("aria-expanded", "false");
          dropdowns.forEach((dropdown) => {
            dropdown.removeAttribute("open");
          });
        });
      });
    }

    if (closeDropdownListener) {
      document.removeEventListener("click", closeDropdownListener);
    }

    if (dropdowns.length) {
      closeDropdownListener = (event) => {
        dropdowns.forEach((dropdown) => {
          if (!dropdown.contains(event.target)) {
            dropdown.removeAttribute("open");
          }
        });
      };

      document.addEventListener("click", closeDropdownListener);
    } else {
      closeDropdownListener = null;
    }

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextLang = button.getAttribute("data-lang");
        if (nextLang && nextLang !== state.lang) {
          state.lang = nextLang;
          localStorage.setItem("tqf-language", nextLang);
          render();
        }
      });
    });

    if (slug === "job-directory") {
      bindJobDirectoryFilters();
    }

    if (["activities", "announcements", "news"].includes(slug)) {
      bindContentArchiveFilters();
    }

    window.onresize = handleResize;
  }

  function bindJobDirectoryFilters() {
    const search = document.getElementById("job-search");
    const employer = document.getElementById("job-employer-filter");
    const location = document.getElementById("job-location-filter");
    const category = document.getElementById("job-category-filter");
    const skill = document.getElementById("job-skill-filter");
    const reset = document.getElementById("job-filter-reset");
    const count = document.getElementById("job-result-count");
    const empty = document.getElementById("job-directory-empty");
    const cards = Array.from(document.querySelectorAll(".job-directory-card"));

    const applyFilters = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches =
          (!query || card.dataset.jobSearch.includes(query)) &&
          (!employer.value || card.dataset.jobEmployer === employer.value) &&
          (!location.value || card.dataset.jobLocation === location.value) &&
          (!category.value || card.dataset.jobCategory === category.value) &&
          (!skill.value || card.dataset.jobSkills.split("|").includes(skill.value));

        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      count.textContent = String(visibleCount);
      empty.hidden = visibleCount !== 0;
    };

    search.addEventListener("input", applyFilters);
    [employer, location, category, skill].forEach((control) =>
      control.addEventListener("change", applyFilters),
    );
    reset.addEventListener("click", () => {
      search.value = "";
      [employer, location, category, skill].forEach((control) => {
        control.value = "";
      });
      applyFilters();
      search.focus();
    });
  }

  function bindContentArchiveFilters() {
    const search = document.getElementById("content-search");
    const type = document.getElementById("content-type-filter");
    const date = document.getElementById("content-date-filter");
    const reset = document.getElementById("content-filter-reset");
    const count = document.getElementById("content-result-count");
    const empty = document.getElementById("content-archive-empty");
    const cards = Array.from(document.querySelectorAll("[data-content-card]"));

    if (!search || !type || !date || !reset || !count || !empty) {
      return;
    }

    const applyFilters = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches =
          (!query || card.dataset.contentSearch.includes(query)) &&
          (!type.value || card.dataset.contentCategory === type.value) &&
          (!date.value || card.dataset.contentYear === date.value);

        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      count.textContent = String(visibleCount);
      empty.hidden = visibleCount !== 0;
    };

    search.addEventListener("input", applyFilters);
    [type, date].forEach((control) => control.addEventListener("change", applyFilters));
    reset.addEventListener("click", () => {
      search.value = "";
      type.value = "";
      date.value = "";
      applyFilters();
      search.focus();
    });
  }

  function handleResize() {
    if (window.innerWidth > 900) {
      document.body.classList.remove("menu-open");
      document.querySelectorAll(".nav-dropdown-panel").forEach((dropdown) => {
        dropdown.removeAttribute("open");
      });
    }
  }

  function revealOnScroll() {
    const items = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    items.forEach((item) => observer.observe(item));
  }

  function sectionId(index) {
    return `section-${index + 1}`;
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function formatDate(value) {
    const locale = state.lang === "th" ? "th-TH-u-ca-gregory" : "en-US";
    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(`${value}T12:00:00`));
  }

  function renderJobPublishedDate(value, kind = "published") {
    if (!value) return "";

    const label = kind === "verified"
      ? (state.lang === "th" ? "ตรวจสอบล่าสุด" : "Last verified")
      : (state.lang === "th" ? "เผยแพร่" : "Published");
    return `
      <time class="job-published" datetime="${escapeHtml(value)}">
        <span class="job-date-mark" aria-hidden="true"></span>
        ${escapeHtml(label)} ${escapeHtml(formatDate(value))}
      </time>
    `;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
