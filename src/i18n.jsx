import { createContext, useContext, useState, useEffect, useCallback } from 'react'

/* ── Content, English + Arabic ──────────────────────────────────────────
   UI strings and page content live here so the whole site can switch
   language and reading direction. English brand: "Al-Hazaimeh Ventures".
   Arabic brand: "مجموعة الهزايمة" (surname spelled الهزايمة). Status classes
   (colour) are language-independent and live in the components. */

export const translations = {
  en: {
    dir: 'ltr',
    nav: {
      brand: 'Al-Hazaimeh Ventures',
      home: 'Home', about: 'About', contact: 'Contact',
      toggleLabel: 'العربية', toggleAria: 'التبديل إلى العربية',
    },
    home: {
      heroEyebrow: 'Est. in Vision, Built for Growth',
      heroTitleA: "Building Tomorrow's",
      heroTitleB: 'Businesses Today',
      heroSub:
        'Al-Hazaimeh Ventures is a family holding group with active operations across Healthcare, Energy, and Technology, driven by a commitment to long-term value and community impact.',
      ctaStory: 'Discover our story',
      ctaPartner: 'Partner with us',
      facts: [
        { n: 'Three', label: 'pharmacies' },
        { n: 'One', label: 'fuel station' },
        { n: 'Three', label: 'sectors' },
      ],
      venturesTitle: 'Three Pillars of Growth',
      venturesSub:
        'Each venture is built on strong fundamentals, local insight, and a steady drive toward operational excellence.',
      ventures: [
        {
          id: 'pharmacy', icon: 'pharmacy', sector: 'Healthcare', title: 'Pharmacy Chain',
          description: 'Three established pharmacies serving their communities with trusted pharmaceutical care and health products.',
          brands: ['Sadaf Pharmacy', 'Kahal Pharmacy', 'Edrak Pharmacy'],
          status: 'Operational',
        },
        {
          id: 'fuel', icon: 'fuel', sector: 'Energy', title: 'Fuel & EV Station',
          description: 'A fuel station designed to serve the region with quality fuel, EV charging, and convenience services.',
          brands: [], status: 'Opening soon',
        },
        {
          id: 'tech', icon: 'tech', sector: 'Healthcare Technology', title: 'Proprietary Tech Platform',
          description: 'A proprietary technology platform for the pharmacy sector, currently in private development. Details available on request.',
          brands: [], status: 'In development',
        },
      ],
      valuesTitle: 'Our Core Principles',
      values: [
        { title: 'Long-Term Vision', desc: 'We invest for decades, not quarters. Every decision is made with lasting impact in mind.' },
        { title: 'Community First', desc: 'Our pharmacies, station, and technology ventures exist to serve the people around us.' },
        { title: 'Operational Excellence', desc: 'From supply chain to customer experience, we hold every detail to a high standard.' },
        { title: 'Trusted Partnerships', desc: 'We build relationships with partners, suppliers, and regulators, grounded in integrity and mutual value.' },
      ],
      ctaTitle: 'Ready to explore a partnership?',
      ctaText: "Whether you're a brand, investor, or supplier, we'd like to hear from you.",
      ctaBtn: 'Get in touch',
    },
    about: {
      heroEyebrow: 'Our Story',
      heroTitleA: 'Built on Trust.',
      heroTitleB: 'Driven by Vision.',
      heroSub:
        'Al-Hazaimeh Ventures is a family-led holding group with a simple belief: that good businesses are built patiently, purposefully, and with the community at heart.',
      missionTitle: 'A Holding Group with Deep Roots',
      missionP1:
        'Founded by Yousef Al-Hazaimeh, the group began with a single pharmacy and a commitment to quality care. Over the years that commitment expanded beyond healthcare, into energy infrastructure and proprietary technology, building a portfolio that serves communities at every level of daily life.',
      missionP2:
        'Today, Al-Hazaimeh Ventures operates three pharmacies, is finalising a fuel and EV station, and is developing a proprietary technology platform for the pharmacy sector. Each venture is chosen not just for financial returns, but for the value it brings to the people we serve.',
      pillars: [
        { icon: 'pharmacy', label: 'Healthcare', sub: '3 Pharmacies' },
        { icon: 'fuel', label: 'Energy', sub: 'Fuel & EV Station' },
        { icon: 'tech', label: 'Technology', sub: 'In Development' },
      ],
      timelineTitle: 'From One Pharmacy to a Diversified Group',
      timeline: [
        { year: 'Foundation', event: 'Yousef Al-Hazaimeh establishes the first pharmacy, laying the cornerstone of what would become a multi-sector group.' },
        { year: 'Growth', event: 'The pharmacy portfolio expands to three locations (Sadaf, Kahal, and Edrak), serving thousands of customers across the region.' },
        { year: 'Diversification', event: 'Ayham Al-Hazaimeh joins leadership, and the group sets its sights on the energy sector with a new fuel and EV station.' },
        { year: '2026', event: 'The station nears completion, and a proprietary technology platform for the pharmacy sector enters private development, marking the group’s move into Healthcare Technology.' },
      ],
      venturesTitle: 'The Ventures',
      ventures: [
        {
          id: 'pharmacy', icon: 'pharmacy', title: 'Pharmacy Chain', status: 'Operational',
          description: 'Three pharmacies providing pharmaceutical products, health consultations, and community care. Each location operates under its own trusted brand.',
          brands: ['Sadaf Pharmacy', 'Kahal Pharmacy', 'Edrak Pharmacy'],
        },
        {
          id: 'fuel', icon: 'fuel', title: 'Fuel & EV Station', status: 'Opening Q3 2026',
          description: 'A fully equipped fuel and convenience station in its final construction phase, with EV charging bays alongside conventional pumps. Built around safety, efficiency, and service quality.',
          brands: [],
        },
        {
          id: 'tech', icon: 'tech', title: 'Proprietary Tech Platform', status: 'In development',
          description: 'A proprietary technology platform for the pharmacy sector, currently in private development. Details available on request.',
          brands: [],
        },
      ],
      leadershipTitle: 'Leadership',
      leadership: [
        {
          name: 'Yousef Al-Hazaimeh', title: 'Founder & Chairman',
          bio: 'With decades of entrepreneurial experience, Yousef built the group from a single pharmacy into a diversified holding company. His belief in community-centred business remains the foundation of everything the group does.',
        },
        {
          name: 'Ayham Al-Hazaimeh', title: 'Managing Director',
          bio: 'Ayham leads day-to-day operations and strategic growth across all three sectors: identifying new markets, forging partnerships, and driving the group’s next chapter.',
        },
      ],
    },
    contact: {
      heroEyebrow: "Let's Connect",
      heroTitleA: 'Get in ', heroTitleB: 'Touch',
      heroSub:
        "Whether you're a brand exploring a partnership, an investor, or a supplier, we're always open to meaningful conversations.",
      detailsTitle: 'Contact Details',
      labelEmail: 'Email', labelWebsite: 'Website', labelOps: 'Operations',
      opsValue: 'Healthcare · Energy · Technology',
      topicsTitle: "What We're Open To",
      topics: [
        'Strategic & investment partnerships',
        'Supplier & distribution agreements',
        'Investment & joint ventures',
        'General business enquiries',
      ],
      formTitle: 'Send a Message',
      fName: 'Full Name', fNamePh: 'Your name',
      fEmail: 'Email Address', fEmailPh: 'your@email.com',
      fSubject: 'Subject', fSubjectPh: 'e.g. Partnership inquiry',
      fMessage: 'Message', fMessagePh: 'Tell us about your enquiry',
      send: 'Send message', sending: 'Sending…',
      errName: 'Please enter your name.',
      errEmail: 'Please enter a valid email address.',
      errMessage: 'Please enter a message.',
      errSubmit: 'Something went wrong. Please email us directly.',
      sentTitle: 'Message sent', sentText: 'Thank you for reaching out. We’ll get back to you shortly.',
      sentAgain: 'Send another message',
    },
    footer: {
      tagline: "Building Tomorrow's Businesses",
      navTitle: 'Navigation', home: 'Home', about: 'About Us', contact: 'Contact',
      getInTouch: 'Get in Touch',
      rights: 'All rights reserved.',
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you are looking for does not exist or has moved.',
      back: 'Back to home',
    },
  },

  ar: {
    dir: 'rtl',
    nav: {
      brand: 'مجموعة الهزايمة',
      home: 'الرئيسية', about: 'من نحن', contact: 'تواصل معنا',
      toggleLabel: 'English', toggleAria: 'Switch to English',
    },
    home: {
      heroEyebrow: 'تأسّست برؤية، وبُنيت للنمو',
      heroTitleA: 'نبني أعمالَ الغد',
      heroTitleB: 'اليوم',
      heroSub:
        'مجموعة الهزايمة مجموعةٌ عائلية قابضة ذات عملياتٍ نشطة في قطاعات الرعاية الصحية والطاقة والتكنولوجيا، يقودها التزامٌ بالقيمة طويلة الأمد والأثر في المجتمع.',
      ctaStory: 'تعرّف على قصتنا',
      ctaPartner: 'كُن شريكاً لنا',
      facts: [
        { n: '٣', label: 'صيدليات' },
        { n: '١', label: 'محطة وقود' },
        { n: '٣', label: 'قطاعات' },
      ],
      venturesTitle: 'ثلاث ركائز للنمو',
      venturesSub:
        'كلُّ مشروعٍ مبنيٌّ على أسسٍ متينة، ومعرفةٍ محلية، وسعيٍ دؤوب نحو التميّز التشغيلي.',
      ventures: [
        {
          id: 'pharmacy', icon: 'pharmacy', sector: 'الرعاية الصحية', title: 'سلسلة صيدليات',
          description: 'ثلاث صيدليات راسخة تخدم مجتمعاتها برعايةٍ دوائية موثوقة ومنتجاتٍ صحية يومية.',
          brands: ['صيدلية صدف', 'صيدلية كحل', 'صيدلية إدراك'],
          status: 'تعمل حالياً',
        },
        {
          id: 'fuel', icon: 'fuel', sector: 'الطاقة', title: 'محطة وقود وشحن كهربائي',
          description: 'محطة وقودٍ مصمَّمة لخدمة المنطقة بوقودٍ عالي الجودة، وشحنٍ للسيارات الكهربائية، وخدماتٍ مريحة.',
          brands: [], status: 'تُفتتح قريباً',
        },
        {
          id: 'tech', icon: 'tech', sector: 'تكنولوجيا الرعاية الصحية', title: 'منصّة تقنية خاصة',
          description: 'منصّةٌ تقنية خاصة لقطاع الصيدلة، قيد التطوير حالياً بشكلٍ خاص. التفاصيل متاحة عند الطلب.',
          brands: [], status: 'قيد التطوير',
        },
      ],
      valuesTitle: 'مبادئنا الأساسية',
      values: [
        { title: 'رؤية طويلة الأمد', desc: 'نستثمر لعقودٍ لا لأرباع السنة، ونتّخذ كلَّ قرارٍ وعينُنا على أثره الدائم.' },
        { title: 'المجتمع أوّلاً', desc: 'وُجدت صيدلياتنا ومحطّتنا ومشاريعنا التقنية لخدمة الناس من حولنا.' },
        { title: 'التميّز التشغيلي', desc: 'من سلسلة التوريد إلى تجربة العميل، نلتزم بأعلى المعايير في كلِّ تفصيل.' },
        { title: 'شراكات موثوقة', desc: 'نبني علاقاتنا مع الشركاء والموردين والجهات التنظيمية على النزاهة والمنفعة المتبادلة.' },
      ],
      ctaTitle: 'هل أنت مستعدٌّ لاستكشاف شراكة؟',
      ctaText: 'سواءٌ كنت علامةً تجارية أو مستثمراً أو مورّداً، يسعدنا أن نسمع منك.',
      ctaBtn: 'تواصل معنا',
    },
    about: {
      heroEyebrow: 'قصتنا',
      heroTitleA: 'بُنيت على الثقة،',
      heroTitleB: 'تقودها الرؤية.',
      heroSub:
        'مجموعة الهزايمة مجموعةٌ عائلية قابضة تؤمن بفكرةٍ بسيطة: أنّ الأعمال الجيدة تُبنى بصبرٍ وهدفٍ، والمجتمع في صميمها.',
      missionTitle: 'مجموعةٌ قابضة بجذورٍ عميقة',
      missionP1:
        'أسّسها يوسف الهزايمة، فبدأت المجموعة بصيدليةٍ واحدة والتزامٍ برعايةٍ عالية الجودة. ومع مرور السنين امتدّ هذا الالتزام إلى ما هو أبعد من الرعاية الصحية، نحو البنية التحتية للطاقة والتكنولوجيا الخاصة، لتنشأ محفظةٌ تخدم المجتمعات في كلِّ مستويات الحياة اليومية.',
      missionP2:
        'واليوم، تُشغّل مجموعة الهزايمة ثلاث صيدليات، وتُنجز محطة وقودٍ وشحنٍ كهربائي، وتُطوّر منصّةً تقنية خاصة لقطاع الصيدلة. ويُختار كلُّ مشروعٍ لا لعائده المالي وحده، بل لِما يضيفه من قيمةٍ لِمن نخدمهم.',
      pillars: [
        { icon: 'pharmacy', label: 'الرعاية الصحية', sub: '٣ صيدليات' },
        { icon: 'fuel', label: 'الطاقة', sub: 'محطة وقود وشحن' },
        { icon: 'tech', label: 'التكنولوجيا', sub: 'قيد التطوير' },
      ],
      timelineTitle: 'من صيدليةٍ واحدة إلى مجموعةٍ متنوّعة',
      timeline: [
        { year: 'التأسيس', event: 'يؤسّس يوسف الهزايمة الصيدلية الأولى، واضعاً حجر الأساس لِما سيغدو مجموعةً متعددة القطاعات.' },
        { year: 'النمو', event: 'تتوسّع محفظة الصيدليات إلى ثلاثة مواقع (صدف، وكحل، وإدراك)، لتخدم آلاف العملاء في المنطقة.' },
        { year: 'التنويع', event: 'ينضمّ أيهم الهزايمة إلى القيادة، فتتّجه المجموعة نحو قطاع الطاقة بمحطة وقودٍ وشحنٍ كهربائي جديدة.' },
        { year: '٢٠٢٦', event: 'تقترب المحطة من الاكتمال، وتدخل منصّةٌ تقنية خاصة لقطاع الصيدلة مرحلة التطوير الخاص، إيذاناً بدخول المجموعة مجال تكنولوجيا الرعاية الصحية.' },
      ],
      venturesTitle: 'المشاريع',
      ventures: [
        {
          id: 'pharmacy', icon: 'pharmacy', title: 'سلسلة صيدليات', status: 'تعمل حالياً',
          description: 'ثلاث صيدليات توفّر المنتجات الدوائية والاستشارات الصحية ورعاية المجتمع، ويعمل كلُّ موقعٍ تحت علامته التجارية الموثوقة.',
          brands: ['صيدلية صدف', 'صيدلية كحل', 'صيدلية إدراك'],
        },
        {
          id: 'fuel', icon: 'fuel', title: 'محطة وقود وشحن كهربائي', status: 'تُفتتح في الربع الثالث ٢٠٢٦',
          description: 'محطة وقودٍ وخدماتٍ مكتملة التجهيز في مرحلة البناء الأخيرة، مع منصّات شحنٍ للسيارات الكهربائية إلى جانب المضخّات التقليدية، صُمّمت حول السلامة والكفاءة وجودة الخدمة.',
          brands: [],
        },
        {
          id: 'tech', icon: 'tech', title: 'منصّة تقنية خاصة', status: 'قيد التطوير',
          description: 'منصّةٌ تقنية خاصة لقطاع الصيدلة، قيد التطوير حالياً بشكلٍ خاص. التفاصيل متاحة عند الطلب.',
          brands: [],
        },
      ],
      leadershipTitle: 'القيادة',
      leadership: [
        {
          name: 'يوسف الهزايمة', title: 'المؤسّس ورئيس مجلس الإدارة',
          bio: 'بخبرةٍ ريادية تمتدّ لعقود، بنى يوسف المجموعة من صيدليةٍ واحدة إلى شركةٍ قابضة متنوّعة. ويبقى إيمانه بالأعمال المتمحورة حول المجتمع أساساً لكلِّ ما تقوم به المجموعة.',
        },
        {
          name: 'أيهم الهزايمة', title: 'المدير التنفيذي',
          bio: 'يقود أيهم العمليات اليومية والنمو الاستراتيجي عبر القطاعات الثلاثة: استكشاف الأسواق الجديدة، وبناء الشراكات، وقيادة الفصل التالي من مسيرة المجموعة.',
        },
      ],
    },
    contact: {
      heroEyebrow: 'لنتواصل',
      heroTitleA: 'تواصل ', heroTitleB: 'معنا',
      heroSub:
        'سواءٌ كنت علامةً تجارية تستكشف شراكة، أو مستثمراً، أو مورّداً، فنحن دائماً منفتحون على الحوارات الهادفة.',
      detailsTitle: 'بيانات التواصل',
      labelEmail: 'البريد الإلكتروني', labelWebsite: 'الموقع الإلكتروني', labelOps: 'مجالات العمل',
      opsValue: 'الرعاية الصحية · الطاقة · التكنولوجيا',
      topicsTitle: 'ما نرحّب به',
      topics: [
        'الشراكات الاستراتيجية والاستثمارية',
        'اتفاقيات التوريد والتوزيع',
        'الاستثمار والمشاريع المشتركة',
        'الاستفسارات التجارية العامة',
      ],
      formTitle: 'أرسل رسالة',
      fName: 'الاسم الكامل', fNamePh: 'اسمك',
      fEmail: 'البريد الإلكتروني', fEmailPh: 'your@email.com',
      fSubject: 'الموضوع', fSubjectPh: 'مثال: استفسار عن شراكة',
      fMessage: 'الرسالة', fMessagePh: 'أخبرنا عن استفسارك',
      send: 'إرسال الرسالة', sending: 'جارٍ الإرسال…',
      errName: 'الرجاء إدخال اسمك.',
      errEmail: 'الرجاء إدخال بريدٍ إلكتروني صحيح.',
      errMessage: 'الرجاء كتابة رسالتك.',
      errSubmit: 'تعذّر الإرسال. الرجاء مراسلتنا مباشرةً عبر البريد الإلكتروني.',
      sentTitle: 'تم إرسال رسالتك', sentText: 'شكراً لتواصلك معنا، سنعاود الردّ عليك قريباً.',
      sentAgain: 'إرسال رسالة أخرى',
    },
    footer: {
      tagline: 'نبني أعمال الغد',
      navTitle: 'التنقّل', home: 'الرئيسية', about: 'من نحن', contact: 'تواصل معنا',
      getInTouch: 'تواصل معنا',
      rights: 'جميع الحقوق محفوظة.',
    },
    notFound: {
      title: 'الصفحة غير موجودة',
      text: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
      back: 'العودة إلى الرئيسية',
    },
  },
}

const STORAGE_KEY = 'av-lang'
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'ar' || saved === 'en' ? saved : 'en'
  })

  const dir = translations[lang].dir

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    try { window.localStorage.setItem(STORAGE_KEY, lang) } catch {}
  }, [lang, dir])

  const setLang = useCallback((next) => setLangState(next), [])
  const toggle = useCallback(() => setLangState((l) => (l === 'en' ? 'ar' : 'en')), [])

  return (
    <LanguageContext.Provider value={{ lang, dir, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

export function useT() {
  const { lang } = useLang()
  return translations[lang]
}
