export type Lang = "ua" | "en";

export const translations = {
  nav: {
    about: { ua: "Про мене", en: "About" },
    services: { ua: "Послуги", en: "Services" },
    work: { ua: "Кейси", en: "Work" },
    process: { ua: "Процес", en: "Process" },
    stack: { ua: "Технології", en: "Stack" },
    contact: { ua: "Контакти", en: "Contact" },
    cta: { ua: "Обговорити проєкт", en: "Start a project" },
  },
  hero: {
    eyebrow: { ua: "Веб-агенція · CRM · Автоматизація", en: "Web · CRM · Automation Agency" },
    title1: { ua: "Сайти, що", en: "Websites that" },
    titleAccent: { ua: "конвертують.", en: "convert." },
    title2: { ua: "Системи, що", en: "Systems that" },
    titleAccent2: { ua: "масштабують.", en: "scale." },
    subtitle: {
      ua: "LBN Flow — преміальна агенція повного циклу. Розробляємо сайти, інтегруємо CRM та автоматизуємо процеси для брендів, які прагнуть рости швидше.",
      en: "LBN Flow is a full-cycle premium agency. We build websites, integrate CRMs and automate operations for brands that want to grow faster.",
    },
    ctaPrimary: { ua: "Обговорити проєкт", en: "Start a project" },
    ctaSecondary: { ua: "Подивитись кейси", en: "View case studies" },
  },
  stats: {
    projects: { ua: "Реалізованих проєктів", en: "Projects delivered" },
    years: { ua: "Років у digital", en: "Years in digital" },
    clients: { ua: "Задоволених клієнтів", en: "Happy clients" },
    nps: { ua: "Повторні звернення", en: "Repeat clients" },
  },
  about: {
    tag: { ua: "Про засновницю", en: "About the founder" },
    title: { ua: "Ірина Любинецька", en: "Iryna Liubynetska" },
    role: { ua: "Засновниця LBN Flow", en: "Founder of LBN Flow" },
    p1: {
      ua: "Я об'єдную дизайн, технології та маркетинг у злагоджену систему, що приносить результат. За роки роботи з брендами в Україні та за кордоном я зрозуміла одне: красивий сайт без процесів не продає.",
      en: "I blend design, technology and marketing into one system that delivers results. After years of working with brands in Ukraine and abroad I learned one thing: a beautiful website without process doesn't sell.",
    },
    p2: {
      ua: "Тому LBN Flow — це не просто сайти. Це повний цикл: від стратегії та дизайну до CRM, інтеграцій та автоматизації, що звільняє ваш час.",
      en: "That's why LBN Flow isn't just websites. It's a full cycle: strategy, design, CRM, integrations and automation that frees up your time.",
    },
    tags: { ua: ["Стратегія", "Дизайн", "Розробка", "CRM", "Автоматизація"], en: ["Strategy", "Design", "Development", "CRM", "Automation"] },
  },
  services: {
    tag: { ua: "Послуги", en: "Services" },
    title: { ua: "Все, що потрібно вашому бізнесу", en: "Everything your business needs" },
    subtitle: { ua: "Чотири напрямки. Один підрядник. Узгоджений результат.", en: "Four disciplines. One partner. One coherent result." },
    items: {
      ua: [
        { t: "Сайти", d: "Корпоративні сайти, лендінги, e-commerce. WordPress, Framer, Nicepage, custom-рішення.", f: ["UX/UI дизайн", "Адаптивна верстка", "SEO-оптимізація", "Швидкість 90+"] },
        { t: "CRM інтеграції", d: "Налаштування KeyCRM, AmoCRM, HubSpot, Pipedrive. Імпорт даних, воронки, права доступу.", f: ["Налаштування воронок", "Імпорт контактів", "Інтеграція пошти", "Звітність"] },
        { t: "Автоматизація", d: "Зв'язуємо сайт, CRM, месенджери та сервіси через Make, Zapier, n8n та API.", f: ["Make / Zapier / n8n", "Чат-боти", "Email-сценарії", "Webhook-інтеграції"] },
        { t: "Підтримка", d: "Щомісячна технічна підтримка, оновлення, аналітика та розвиток продукту.", f: ["SLA-підтримка", "Резервні копії", "Аналітика GA4", "Розвиток фіч"] },
      ],
      en: [
        { t: "Websites", d: "Corporate sites, landings, e-commerce. WordPress, Framer, Nicepage, custom builds.", f: ["UX/UI design", "Responsive build", "SEO ready", "90+ PageSpeed"] },
        { t: "CRM integrations", d: "Setup of KeyCRM, AmoCRM, HubSpot, Pipedrive. Data import, pipelines, access control.", f: ["Pipeline setup", "Contact import", "Email sync", "Reporting"] },
        { t: "Automation", d: "Wire your site, CRM, messengers and tools via Make, Zapier, n8n and APIs.", f: ["Make / Zapier / n8n", "Chatbots", "Email flows", "Webhook integrations"] },
        { t: "Support", d: "Monthly tech support, updates, analytics and continuous product growth.", f: ["SLA support", "Backups", "GA4 analytics", "Feature growth"] },
      ],
    },
  },
  work: {
    tag: { ua: "Портфоліо", en: "Selected work" },
    title: { ua: "Кейси, що говорять самі за себе", en: "Case studies that speak for themselves" },
    subtitle: { ua: "Бренди різних масштабів — від локальних компаній до міжнародних.", en: "Brands across industries — from local studios to international companies." },
    view: { ua: "Деталі кейсу", en: "View case" },
    items: {
      ua: [
        { name: "MCAST", cat: "WordPress · Corporate", desc: "Корпоративний сайт для технологічної компанії з каталогом послуг та формами лідогенерації." },
        { name: "UNEK Energy", cat: "WordPress · Energy", desc: "Веб-сайт енергетичної компанії з калькулятором, інтеграцією форм та мультимовністю." },
        { name: "Imperial Drive", cat: "WordPress + Nicepage · Automotive", desc: "Преміальний сайт для автодилера з каталогом та системою бронювання тест-драйвів." },
        { name: "UGC Creator", cat: "Framer · Portfolio", desc: "Сучасне портфоліо UGC-креатора з анімаціями, відеогалереєю та формою співпраці." },
        { name: "Sofia Dembitska", cat: "Custom · Personal Brand", desc: "Кастомний сайт особистого бренду з елегантною типографікою та редакторським стилем." },
        { name: "PowerHub", cat: "WordPress · Fitness", desc: "Динамічний сайт фітнес-клубу з розкладом, бронюванням тренувань та підпискою." },
      ],
      en: [
        { name: "MCAST", cat: "WordPress · Corporate", desc: "Corporate website for a technology company with service catalog and lead-gen forms." },
        { name: "UNEK Energy", cat: "WordPress · Energy", desc: "Energy company website with calculator, integrated forms and multi-language support." },
        { name: "Imperial Drive", cat: "WordPress + Nicepage · Automotive", desc: "Premium dealership website with catalog and test-drive booking system." },
        { name: "UGC Creator", cat: "Framer · Portfolio", desc: "Modern UGC creator portfolio with animations, video gallery and collaboration form." },
        { name: "Sofia Dembitska", cat: "Custom · Personal Brand", desc: "Custom personal brand site with elegant typography and editorial styling." },
        { name: "PowerHub", cat: "WordPress · Fitness", desc: "Dynamic fitness club site with schedule, class booking and membership signup." },
      ],
    },
  },
  process: {
    tag: { ua: "Процес", en: "Process" },
    title: { ua: "Як ми працюємо", en: "How we work" },
    steps: {
      ua: [
        { t: "Брифінг", d: "Глибоко занурюємось у ваш бізнес, цілі та аудиторію." },
        { t: "Стратегія та дизайн", d: "Структура, прототип і візуальна концепція під вашу мету." },
        { t: "Розробка", d: "Адаптивна, швидка, SEO-готова реалізація під ключ." },
        { t: "Інтеграції", d: "CRM, аналітика, автоматизації та сервіси у єдиній екосистемі." },
        { t: "Запуск і ріст", d: "Тестування, навчання команди та подальша підтримка." },
      ],
      en: [
        { t: "Discovery", d: "We dive deep into your business, goals and audience." },
        { t: "Strategy & design", d: "Structure, prototype and visual concept aligned with your goal." },
        { t: "Development", d: "Responsive, fast, SEO-ready end-to-end build." },
        { t: "Integrations", d: "CRM, analytics, automations and tools in one ecosystem." },
        { t: "Launch & growth", d: "Testing, team onboarding and ongoing support." },
      ],
    },
  },
  stack: {
    tag: { ua: "Стек", en: "Stack" },
    title: { ua: "Інструменти, яким ми довіряємо", en: "Tools we trust" },
  },
  testimonials: {
    tag: { ua: "Відгуки", en: "Testimonials" },
    title: { ua: "Що кажуть клієнти", en: "What clients say" },
    items: {
      ua: [
        { q: "Ірина зібрала нам сайт і CRM за 3 тижні. Заявки пішли вже з першого тижня.", a: "Власник, MCAST" },
        { q: "Команда LBN Flow — це повний цикл без головного болю. Все працює, як годинник.", a: "CEO, UNEK Energy" },
        { q: "Преміальний підхід, преміальний результат. Рекомендую без сумнівів.", a: "Founder, Imperial Drive" },
      ],
      en: [
        { q: "Iryna delivered our site and CRM in 3 weeks. Leads came in the first week.", a: "Owner, MCAST" },
        { q: "LBN Flow is full-cycle with zero headache. Everything works like clockwork.", a: "CEO, UNEK Energy" },
        { q: "Premium approach, premium result. Recommend without hesitation.", a: "Founder, Imperial Drive" },
      ],
    },
  },
  contact: {
    tag: { ua: "Контакти", en: "Contact" },
    title: { ua: "Готові обговорити ваш проєкт?", en: "Ready to discuss your project?" },
    subtitle: { ua: "Розкажіть про задачу — повернемось з пропозицією протягом 24 годин.", en: "Tell us about your task — we'll get back with a proposal within 24 hours." },
    email: { ua: "Написати на email", en: "Email us" },
    insta: { ua: "Instagram", en: "Instagram" },
    fh: { ua: "Freelancehunt", en: "Freelancehunt" },
  },
  footer: {
    rights: { ua: "Всі права захищені.", en: "All rights reserved." },
    tagline: { ua: "Сайти · CRM · Автоматизація", en: "Websites · CRM · Automation" },
  },
} as const;

export function t(lang: Lang, value: { ua: string; en: string }) {
  return value[lang];
}