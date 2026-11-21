export type SneakerCategory = 'all' | 'denim' | 'algodon' | 'urbana';

export interface SneakerProduct {
  id: string;
  name: string;
  category: Exclude<SneakerCategory, 'all'>;
  categoryLabel: string;
  materialSummary: string;
  description: string;
  pricePen: number;
  sizes: number[];
  image: string;
  imageAlt: string;
  editionNote: string;
}

export interface CraftPillar {
  index: string;
  title: string;
  detail: string;
}

export interface LocalTestimonial {
  name: string;
  context: string;
  quote: string;
  outcome: string;
}

export const WHATSAPP_NUMBER_INTL = '51950510696';
export const WHATSAPP_DISPLAY = '950 510 696';
export const INSTAGRAM_URL = 'https://www.instagram.com/dajecimcg/';
export const INSTAGRAM_HANDLE = '@dajecimcg';
export const TIKTOK_URL = 'https://www.tiktok.com/@dajeci_mj';
export const TIKTOK_HANDLE = '@dajeci_mj';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encoded}`;
}

export const HERO_IMAGE = '/src/assets/images/hero_dajeci_sneakers_1795223099058.jpg';
export const ATELIER_IMAGE = '/src/assets/images/craft_trujillo_atelier_1795223098398.jpg';

export const SNEAKER_CATALOG: SneakerProduct[] = [
  {
    id: 'moche-indigo',
    name: 'Moche Índigo Circular',
    category: 'denim',
    categoryLabel: 'Denim Circular',
    materialSummary: 'Denim recuperado · Caucho natural',
    description:
      'Capellada confeccionada con retazos seleccionados de denim lavado en Trujillo, forro de tocuyo suave y planta crepé de caucho natural.',
    pricePen: 169,
    sizes: [35, 36, 37, 38, 39, 40],
    image: '/src/assets/images/sneaker_denim_circular_1795223098946.jpg',
    imageAlt:
      'Zapatillas ecológicas DAJECI Moche Índigo confeccionadas en denim recuperado con suela de caucho natural',
    editionNote: 'Lote artesanal · Entrega 24h en Trujillo',
  },
  {
    id: 'chan-algodon',
    name: 'Chan Algodón Nativo',
    category: 'algodon',
    categoryLabel: 'Algodón Orgánico',
    materialSummary: 'Lona sin blanquear · Corcho natural',
    description:
      'Lona de algodón orgánico crudo libre de tintes químicos, entresuela con lámina de corcho respirable y talonera en tono arcilla norteña.',
    pricePen: 179,
    sizes: [35, 36, 37, 38, 39, 40, 41],
    image: '/src/assets/images/sneaker_algodon_nativo_1795223098469.jpg',
    imageAlt:
      'Zapatillas ecológicas DAJECI Chan en lona de algodón orgánico crudo con detalle en talonera arcilla y plantilla de corcho',
    editionNote: 'Disponible en todas las tallas',
  },
  {
    id: 'huanchaco-salvia',
    name: 'Huanchaco Salvia Eco',
    category: 'urbana',
    categoryLabel: 'Urbana Eco',
    materialSummary: 'Fibra reciclada · Suela vulcanizada',
    description:
      'Tejido mixto de fibra vegetal reciclada en verde salvia, pasadores de algodón trenzado y suela de alta durabilidad para caminar la ciudad.',
    pricePen: 175,
    sizes: [36, 37, 38, 39, 40, 41],
    image: '/src/assets/images/sneaker_botanica_verde_1795223098501.jpg',
    imageAlt:
      'Zapatillas urbanas sostenibles DAJECI Huanchaco en tono verde salvia con suela color crema',
    editionNote: 'Edición limitada · Stock directo de taller',
  },
];

export const TRUJILLO_ZONES: string[] = [
  'Trujillo Centro',
  'Víctor Larco / El Golf',
  'Urb. San Andrés / Primavera',
  'Huanchaco',
  'La Esperanza / El Porvenir',
  'Moche / Laredo',
  'Envío a otra ciudad del Perú',
];

export const CRAFT_PILLARS: CraftPillar[] = [
  {
    index: '01',
    title: 'Reutilización textil y economía circular',
    detail:
      'Seleccionamos denim recuperado y lonas de algodón natural para evitar el desperdicio textil, convirtiendo cada corte en una capellada resistente y respirable.',
  },
  {
    index: '02',
    title: 'Plantas de caucho natural y corcho',
    detail:
      'Usamos suelas de caucho flexible y plantillas confortables de corcho que amortiguan la pisada diaria sin plásticos innecesarios.',
  },
  {
    index: '03',
    title: 'Manufactura trujillana y trato directo',
    detail:
      'Cada par se arma en Trujillo por manos zapateras locales. Coordinas tu talla, color y punto de entrega directamente por WhatsApp sin intermediarios.',
  },
];

export const LOCAL_TESTIMONIALS: LocalTestimonial[] = [
  {
    name: 'Valeria Paredes',
    context: 'Víctor Larco, Trujillo · Modelo Moche Índigo (Talla 37)',
    quote:
      'Escribí al WhatsApp en la mañana para confirmar mi talla en centímetros y esa misma tarde recibí mis zapatillas en El Golf.',
    outcome: 'Uso diario en oficina y caminatas sin rozaduras desde la primera semana.',
  },
  {
    name: 'Camila Mendoza',
    context: 'Urb. San Andrés, Trujillo · Modelo Chan Algodón (Talla 38)',
    quote:
      'Me encantó que me enviaran fotos reales del par antes de despachar. La lona se siente fresca para el clima de Trujillo.',
    outcome: 'Segundo par pedido para regalo familiar con entrega coordinada el mismo día.',
  },
];

export interface PurchaseStep {
  index: string;
  title: string;
  summary: string;
  details: string[];
}

export const OFFICIAL_LOGO_IMAGE = '/assets/aistudio/image_013e88c9.png';

export const PURCHASE_STEPS: PurchaseStep[] = [
  {
    index: '01',
    title: 'Escríbenos por WhatsApp (950 510 696)',
    summary:
      'Inicia el chat haciendo clic en cualquier botón de la página o escríbenos directo al +51 950 510 696.',
    details: [
      'Confirmamos stock al instante',
      'Asesoría de talla en centímetros si tienes dudas',
    ],
  },
  {
    index: '02',
    title: 'Envía los datos de tu pedido',
    summary:
      'Para agilizar tu atención personalizada en el chat, compártenos estos cuatro datos básicos:',
    details: [
      'Modelo elegido y talla (35 al 41)',
      'Distrito o punto de entrega en Trujillo y tu nombre',
    ],
  },
  {
    index: '03',
    title: 'Pago y entrega en Trujillo',
    summary:
      'Entregamos en el día o máximo en 24 horas en Trujillo y coordinamos envíos a todo el Perú.',
    details: [
      'Paga por Yape, Plin, transferencia o contraentrega',
      'Cobertura en Centro, Víctor Larco, El Golf, San Andrés y Huanchaco',
    ],
  },
];

export const QUICK_WHATSAPP_TOPICS: { title: string; subtitle: string; message: string }[] = [
  {
    title: 'Consultar tallas disponibles hoy',
    subtitle: 'Respuesta rápida con guía de medida en cm',
    message:
      'Hola DAJECI, vengo desde su página web. ¿Me pueden confirmar qué modelos y tallas tienen disponibles hoy en Trujillo?',
  },
  {
    title: 'Coordinar entrega o contraentrega en Trujillo',
    subtitle: 'Envíos en el día según distrito',
    message:
      'Hola DAJECI, quiero pedir unas zapatillas ecológicas y coordinar el envío / punto de entrega en Trujillo.',
  },
  {
    title: 'Asesoría personalizada de modelo',
    subtitle: 'Te ayudamos a elegir entre denim, algodón o salvia',
    message:
      'Hola DAJECI, quisiera asesoría personalizada por chat para elegir el modelo ecológico ideal para mi talla.',
  },
];
