import { LucideIcon, GlobeIcon, DollarSignIcon, UsersIcon, SearchIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaImages } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";

// English Translations
export const FEATURES_EN = [
  {
    title: "Professional Website",
    content: "Get a modern & responsive website!",
    icon: GlobeIcon,
  },
  {
    title: "Promotional Video",
    content: "Be more professional with a promotional video.",
    icon: MdCampaign,
  },
  {
    title: "Ready-to-Post Content",
    content: "Ready-to-use content! Cool designs + engaging captions make buyers click order instantly.",
    icon: FaImages,
  },
  {
    title: "Social Media Boosting",
    content: "Professional social media accounts with added followers, likes, & views to attract more buyers.",
    icon: UsersIcon,
  },
  {
    title: "Join the Group",
    content: "Join the group and exchange information with other online sellers.",
    icon: DollarSignIcon,
  },
];

// Indonesian Content (as requested in 'ZH' variable)
export const FEATURES_ZH = [
  {
    title: "Website Profesional",
    content: "Dapatkan website modern & responsif !",
    icon: GlobeIcon,
  },
  {
    title: "Video promosi",
    content: "Lebih profesional dengan video promosi",
    icon: MdCampaign,
  },
  {
    title: "Desain Konten Siap Posting",
    content: "Konten Desain keren untuk menarik bikin pembeli",
    icon: FaImages,
  },
  {
    title: "Sosmed Boosting",
    content: "Boosting sosmed dengan followers, like, & view ",
    icon: UsersIcon,
  },
  {
    title: "SEO",
    content: "Muncul nama bisnis / produk kamu di google search",
    icon: SearchIcon, // Changed to SearchIcon for SEO
  },
];

// Japanese Translations
export const FEATURES_JA = [
  {
    title: "プロフェッショナルなウェブサイト",
    content: "モダンでレスポンシブなウェブサイトを手に入れましょう！",
    icon: GlobeIcon,
  },
  {
    title: "プロモーションビデオ",
    content: "プロモーションビデオでよりプロフェッショナルに。",
    icon: MdCampaign,
  },
  {
    title: "投稿用コンテンツデザイン",
    content: "クールなデザインと魅力的なキャプションで、購入者はすぐに注文します。",
    icon: FaImages,
  },
  {
    title: "ソーシャルメディアブースティング",
    content: "フォロワー、いいね、ビューを増やして、より多くの購入者を引き付けます。",
    icon: UsersIcon,
  },
  {
    title: "グループに参加",
    content: "グループに参加して、他のオンラインセラーと情報を交換しましょう。",
    icon: DollarSignIcon,
  },
];

// Arabic Translations
export const FEATURES_AR = [
  {
    title: "موقع احترافي",
    content: "احصل على موقع ويب حديث ومتجاوب!",
    icon: GlobeIcon,
  },
  {
    title: "فيديو ترويجي",
    content: "كن أكثر احترافية مع فيديو ترويجي.",
    icon: MdCampaign,
  },
  {
    title: "تصميم محتوى جاهز للنشر",
    content: "محتوى جاهز للاستخدام! تصميمات رائعة وتعليقات جذابة تجعل المشترين يطلبون فورًا.",
    icon: FaImages,
  },
  {
    title: "تعزيز وسائل التواصل الاجتماعي",
    content: "حسابات احترافية مع متابعين وإعجابات ومشاهدات إضافية لجذب المزيد من المشترين.",
    icon: UsersIcon,
  },
  {
    title: "انضم إلى المجموعة",
    content: "انضم إلى المجموعة وتبادل المعلومات مع البائعين الآخرين عبر الإنترنت.",
    icon: DollarSignIcon,
  },
];

// Spanish Translations
export const FEATURES_ES = [
  {
    title: "Sitio Web Profesional",
    content: "¡Obtén un sitio web moderno y responsivo!",
    icon: GlobeIcon,
  },
  {
    title: "Video Promocional",
    content: "Sé más profesional con un video promocional.",
    icon: MdCampaign,
  },
  {
    title: "Diseño de Contenido Listo para Publicar",
    content: "¡Contenido listo para usar! Diseños geniales y leyendas atractivas hacen que los compradores ordenen al instante.",
    icon: FaImages,
  },
  {
    title: "Impulso en Redes Sociales",
    content: "Cuentas profesionales en redes sociales con más seguidores, me gusta y vistas para atraer a más compradores.",
    icon: UsersIcon,
  },
  {
    title: "Unirse al Grupo",
    content: "Únete al grupo e intercambia información con otros vendedores en línea.",
    icon: DollarSignIcon,
  },
];

// Russian Translations
export const FEATURES_RU = [
  {
    title: "Профессиональный веб-сайт",
    content: "Получите современный и адаптивный веб-сайт!",
    icon: GlobeIcon,
  },
  {
    title: "Промо-видео",
    content: "Станьте более профессиональными с промо-видео.",
    icon: MdCampaign,
  },
  {
    title: "Дизайн контента, готового к публикации",
    content: "Готовый контент! Классный дизайн и привлекательные подписи заставляют покупателей заказывать мгновенно.",
    icon: FaImages,
  },
  {
    title: "Продвижение в социальных сетях",
    content: "Профессиональные аккаунты с добавлением подписчиков, лайков и просмотров для привлечения покупателей.",
    icon: UsersIcon,
  },
  {
    title: "Присоединяйтесь к группе",
    content: "Присоединяйтесь к группе и обменивайтесь информацией с другими онлайн-продавцами.",
    icon: DollarSignIcon,
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon | string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH, // Indonesian content is here as requested
  FEATURES_JA,
  FEATURES_AR,
  FEATURES_ES,
  FEATURES_RU,
};
