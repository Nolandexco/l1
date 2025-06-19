import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

// English Translation with updated Pro Package features
export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Standard Business Package",
    price: "Rp50,000",
    href: siteConfig.openSourceURL || "#",
    description: "Start your professional business immediately.",
    features: [
      "Website",
      "Content Design",
      "Social Media Boosting",
      "Promotional Video",
      "Basic SEO",
    ],
    buttonText: "Pay Now",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Pro Business Package",
    href: siteConfig.authors[0].twitter || "#",
    description: "3x the features of the Standard Business Package.",
    price: "Rp100,000",
    features: [
      "3 Websites",
      "30 Content Designs", // Updated
      "3x Social Media Boosting",
      "3 Promotional Videos", // Updated
      "Advanced SEO",
    ],
    buttonText: "Contact Us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

// Revised Indonesian (Bahasa Indonesia) content with updated Pro Package features
export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Paket Bisnis Standar",
    price: "Rp50.000",
    href: siteConfig.openSourceURL || "#",
    description: "Mulai bisnis profesional segera",
    features: [
      "Website",
      "Desain konten",
      "Sosmed boosting",
      "Video promosi",
      "SEO dasar",
    ],
    buttonText: "Bayar",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Paket Bisnis Pro",
    href: siteConfig.authors[0].twitter || "#",
    description: "3x lipat fitur dari paket bisnis standar",
    price: "Rp100.000",
    features: [
      "3 Website",
      "30 Desain konten", // Diperbarui
      "3x Sosmed boosting",
      "3 Video promosi", // Diperbarui
      "SEO tingkat lanjut",
    ],
    buttonText: "Hubungi Kami",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

// Japanese Translation with updated Pro Package features
export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "スタンダードビジネスパッケージ",
    price: "Rp50.000",
    href: siteConfig.openSourceURL || "#",
    description: "すぐにプロフェッショナルなビジネスを始めましょう。",
    features: [
      "ウェブサイト",
      "コンテンツデザイン",
      "SNSブースティング",
      "プロモーションビデオ",
      "基本的なSEO",
    ],
    buttonText: "支払う",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "プロビジネスパッケージ",
    href: siteConfig.authors[0].twitter || "#",
    description: "スタンダードビジネスパッケージの3倍の機能。",
    price: "Rp100.000",
    features: [
      "3つのウェブサイト",
      "30のコンテンツデザイン", // 更新
      "3倍のSNSブースティング",
      "3つのプロモーションビデオ", // 更新
      "高度なSEO",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

// Arabic Translation with updated Pro Package features
export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "باقة الأعمال القياسية",
    price: "Rp50.000",
    href: siteConfig.openSourceURL || "#",
    description: "ابدأ عملك الاحترافي على الفور.",
    features: [
      "موقع إلكتروني",
      "تصميم المحتوى",
      "تعزيز وسائل التواصل الاجتماعي",
      "فيديو ترويجي",
      "تحسين محركات البحث الأساسي",
    ],
    buttonText: "ادفع الآن",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "باقة الأعمال الاحترافية",
    href: siteConfig.authors[0].twitter || "#",
    description: "3 أضعاف ميزات باقة الأعمال القياسية.",
    price: "Rp100.000",
    features: [
      "3 مواقع إلكترونية",
      "30 تصميم محتوى", // تم التحديث
      "3 أضعاف تعزيز وسائل التواصل",
      "3 فيديوهات ترويجية", // تم التحديث
      "تحسين محركات البحث المتقدم",
    ],
    buttonText: "اتصل بنا",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

// Spanish Translation with updated Pro Package features
export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Paquete de Negocios Estándar",
    price: "Rp50.000",
    href: siteConfig.openSourceURL || "#",
    description: "Inicie su negocio profesional de inmediato.",
    features: [
      "Sitio Web",
      "Diseño de Contenido",
      "Impulso en Redes Sociales",
      "Video Promocional",
      "SEO Básico",
    ],
    buttonText: "Pagar Ahora",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Paquete de Negocios Pro",
    href: siteConfig.authors[0].twitter || "#",
    description: "3 veces las características del Paquete de Negocios Estándar.",
    price: "Rp100.000",
    features: [
      "3 Sitios Web",
      "30 Diseños de Contenido", // Actualizado
      "3x Impulso en Redes Sociales",
      "3 Videos Promocionales", // Actualizado
      "SEO Avanzado",
    ],
    buttonText: "Contáctanos",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

// Russian Translation with updated Pro Package features
export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Стандартный бизнес-пакет",
    price: "Rp50.000",
    href: siteConfig.openSourceURL || "#",
    description: "Начните свой профессиональный бизнес немедленно.",
    features: [
      "Веб-сайт",
      "Дизайн контента",
      "Продвижение в социальных сетях",
      "Рекламное видео",
      "Базовое SEO",
    ],
    buttonText: "Оплатить",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Профессиональный бизнес-пакет",
    href: siteConfig.authors[0].twitter || "#",
    description: "В 3 раза больше возможностей, чем в стандартном бизнес-пакете.",
    price: "Rp100.000",
    features: [
      "3 веб-сайта",
      "30 дизайнов контента", // Обновлено
      "3x продвижение в соцсетях",
      "3 рекламных видео", // Обновлено
      "Расширенное SEO",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU,
};
