import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  SlidersHorizontal,
} from 'lucide-react';
import { Header } from './components/Header';
import { SafeImage } from './components/SafeImage';
import { DajeciLogo } from './components/DajeciLogo';
import { WhatsAppOrderDrawer } from './components/WhatsAppOrderDrawer';
import {
  ATELIER_IMAGE,
  CRAFT_PILLARS,
  HERO_IMAGE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  LOCAL_TESTIMONIALS,
  OFFICIAL_LOGO_IMAGE,
  PURCHASE_STEPS,
  QUICK_WHATSAPP_TOPICS,
  SNEAKER_CATALOG,
  SneakerCategory,
  SneakerProduct,
  TIKTOK_HANDLE,
  TIKTOK_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from './data/catalog';

const FILTER_OPTIONS: { id: SneakerCategory; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'denim', label: 'Denim Circular' },
  { id: 'algodon', label: 'Algodón Orgánico' },
  { id: 'urbana', label: 'Urbana Eco' },
];

const HERO_SPECS = [
  { label: 'Origen local', value: 'Trujillo, La Libertad' },
  { label: 'Economía circular', value: 'Denim y algodón recuperado' },
  { label: 'Tallas disponibles', value: '35 al 41 (PE / EUR)' },
  { label: 'Pedidos por chat', value: `WhatsApp ${WHATSAPP_DISPLAY}` },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState<SneakerCategory>('all');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SneakerProduct | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return SNEAKER_CATALOG;
    return SNEAKER_CATALOG.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const openOrderDrawer = (product: SneakerProduct | null = null) => {
    setSelectedProduct(product ?? SNEAKER_CATALOG[0]);
    setDrawerOpen(true);
  };

  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Hola DAJECI, vi su colección de zapatillas ecológicas en Trujillo y quiero hacer un pedido por WhatsApp.'
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] text-[#161B18]">
      <Header />

      <main className="flex-1">
        {/* Sección 1: Hero Editorial + Especificaciones */}
        <section id="inicio" className="border-b border-[#161B18]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 lg:pt-16 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-5 flex flex-col justify-between gap-8">
                <div className="space-y-5">
                  <p className="text-xs sm:text-sm font-medium text-[#4A544D]">
                    Trujillo, Perú · Calzado sostenible y circular
                  </p>

                  <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,4vw,3.65rem)] font-bold leading-[1.06] tracking-tight text-[#161B18] [text-wrap:balance]">
                    Zapatillas ecológicas hechas en Trujillo.
                  </h1>

                  <p className="text-base leading-relaxed text-[#424C45] max-w-md">
                    Diseño urbano de economía circular elaborado con denim recuperado, lona de
                    algodón orgánico y planta de caucho natural. Atención personalizada y coordinación
                    directa por WhatsApp.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={heroWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] text-sm font-semibold text-white bg-[#1B5E3A] hover:bg-[#14472C] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E3A]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Pedir por WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>

                    <a
                      href="#coleccion"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] text-sm font-medium text-[#161B18] bg-[#EFEFEA] hover:bg-[#E4E3DC] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#161B18]"
                    >
                      <span>Ver colección</span>
                      <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                    </a>
                  </div>

                  <p className="text-xs text-[#4A544D]">
                    Atención directa al{' '}
                    <a
                      href={heroWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#161B18] underline underline-offset-4 hover:text-[#1B5E3A]"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>{' '}
                    · Envíos en el día dentro de Trujillo y a todo el Perú.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden bg-[#ECEAE2] border border-[#161B18]/10">
                  <SafeImage
                    src={HERO_IMAGE}
                    alt="Zapatillas ecológicas DAJECI elaboradas en Trujillo con denim recuperado y lona orgánica sobre piedra travertino"
                    fallbackTitle="DAJECI Colección Circular Trujillo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Franja inferior de especificaciones en 4 columnas */}
            <div className="mt-10 lg:mt-12 pt-8 border-t border-[#161B18]/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {HERO_SPECS.map((spec) => (
                <div key={spec.label} className="space-y-1">
                  <p className="text-xs text-[#4A544D]">{spec.label}</p>
                  <p className="text-sm font-semibold text-[#161B18] tabular-nums">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección 2: Colección Destacada + Configurador a WhatsApp */}
        <section id="coleccion" className="py-16 lg:py-24 border-b border-[#161B18]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-medium text-[#1B5E3A]">Catálogo de temporada</p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[#161B18] [text-wrap:balance]">
                  Elige tu par y coordina tu talla al instante
                </h2>
              </div>

              <div
                role="tablist"
                aria-label="Filtrar modelos por material"
                className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#EFEFEA] rounded-lg border border-[#161B18]/10 self-start md:self-auto"
              >
                {FILTER_OPTIONS.map((option) => {
                  const isActive = activeFilter === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveFilter(option.id)}
                      className={`px-3.5 py-2 min-h-[40px] text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#1B5E3A] ${
                        isActive
                          ? 'bg-white text-[#161B18] shadow-xs'
                          : 'text-[#4A544D] hover:text-[#161B18]'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product) => {
                const quickChatUrl = buildWhatsAppUrl(
                  `Hola DAJECI, me interesa el modelo *${product.name}* (S/ ${product.pricePen}). ¿Qué tallas tienen disponibles en Trujillo?`
                );

                return (
                  <article
                    key={product.id}
                    className="group bg-white rounded-2xl border border-[#161B18]/10 overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="aspect-[4/3] bg-[#EFEFEA] overflow-hidden">
                        <SafeImage
                          src={product.image}
                          alt={product.imageAlt}
                          fallbackTitle={product.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-2 text-xs text-[#4A544D]">
                          <span>{product.categoryLabel}</span>
                          <span aria-hidden="true">·</span>
                          <span>{product.materialSummary}</span>
                        </div>

                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[#161B18]">
                            {product.name}
                          </h3>
                          <span className="text-base font-semibold text-[#161B18] tabular-nums shrink-0">
                            S/ {product.pricePen}
                          </span>
                        </div>

                        <p className="text-sm text-[#424C45] leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-3 border-t border-[#161B18]/8 space-y-4">
                      <div className="flex items-center justify-between gap-2 text-xs text-[#4A544D]">
                        <span className="tabular-nums">
                          Tallas: {product.sizes.join(' · ')}
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={() => openOrderDrawer(product)}
                          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1B5E3A] hover:bg-[#14472C] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E3A]"
                        >
                          <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>Elegir talla y pedir</span>
                        </button>

                        <a
                          href={quickChatUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Consultar ${product.name} directamente por WhatsApp`}
                          className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#161B18] bg-[#EFEFEA] hover:bg-[#E4E3DC] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#161B18]"
                        >
                          <span>Chat</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sección 3: ¿Cómo comprar? */}
        <section id="como-comprar" className="py-16 lg:py-20 bg-[#F8F8F6] border-b border-[#161B18]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <p className="text-xs font-medium text-[#1B5E3A]">
                  Compra directa sin intermediarios
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[#161B18] [text-wrap:balance]">
                  ¿Cómo comprar?
                </h2>
                <p className="text-sm sm:text-base text-[#424C45] leading-relaxed">
                  Adquirir tus zapatillas ecológicas en Trujillo toma menos de dos minutos por
                  chat con atención personalizada.
                </p>
              </div>

              <a
                href={buildWhatsAppUrl(
                  'Hola DAJECI, quiero realizar un pedido. Modelo: ____ | Talla: ____ | Distrito en Trujillo: ____ | Nombre: ____'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-semibold text-white bg-[#1B5E3A] hover:bg-[#14472C] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start md:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E3A]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Escribir al {WHATSAPP_DISPLAY}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {PURCHASE_STEPS.map((step) => (
                <div
                  key={step.index}
                  className="bg-white rounded-2xl border border-[#161B18]/10 p-6 sm:p-7 flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3">
                    <span className="font-[family-name:var(--font-display)] text-xs font-semibold text-[#1B5E3A] tabular-nums">
                      Paso {step.index}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[#161B18]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#424C45] leading-relaxed">{step.summary}</p>
                  </div>

                  <ul className="pt-4 border-t border-[#161B18]/8 space-y-2 text-xs text-[#161B18]">
                    {step.details.map((detail) => (
                      <li key={detail} className="leading-relaxed text-[#424C45]">
                        <span className="text-[#1B5E3A] font-semibold mr-1.5" aria-hidden="true">
                          ·
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-[#EFEFEA] rounded-2xl border border-[#161B18]/10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-medium text-[#4A544D]">
                  ¿Prefieres enviar el mensaje ya redactado?
                </p>
                <p className="text-sm text-[#161B18]">
                  Selecciona modelo, talla y zona de Trujillo en nuestro asistente y ábrelo directo
                  en WhatsApp ({WHATSAPP_DISPLAY}).
                </p>
              </div>
              <button
                type="button"
                onClick={() => openOrderDrawer(SNEAKER_CATALOG[0])}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#161B18] bg-white hover:bg-[#F8F8F6] border border-[#161B18]/15 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto focus-visible:outline-2 focus-visible:outline-[#1B5E3A]"
              >
                <SlidersHorizontal className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Armar pedido guiado</span>
              </button>
            </div>
          </div>
        </section>

        {/* Sección 4: Economía Circular y Taller en Trujillo + Prueba Social Adyacente */}
        <section id="proceso" className="py-16 lg:py-24 bg-[#EFEFEA] border-b border-[#161B18]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              <div className="lg:col-span-6">
                <div className="h-full min-h-[280px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-[#161B18]/10 bg-white">
                  <SafeImage
                    src={ATELIER_IMAGE}
                    alt="Taller artesanal en Trujillo donde se cosen a mano zapatillas ecológicas de denim recuperado y algodón natural"
                    fallbackTitle="Taller artesanal DAJECI en Trujillo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
                <div className="space-y-3">
                  <p className="text-xs font-medium text-[#1B5E3A]">
                    Manufactura responsable en La Libertad
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight text-[#161B18] [text-wrap:balance]">
                    Calzado trujillano diseñado bajo economía circular
                  </h2>
                </div>

                <div className="divide-y divide-[#161B18]/10 border-t border-b border-[#161B18]/10">
                  {CRAFT_PILLARS.map((pillar) => (
                    <div key={pillar.index} className="py-5 space-y-1.5">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#161B18]">
                        {pillar.index}. {pillar.title}
                      </h3>
                      <p className="text-sm text-[#424C45] leading-relaxed">{pillar.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prueba local adyacente */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {LOCAL_TESTIMONIALS.map((item) => (
                <figure
                  key={item.name}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-[#161B18]/10 flex flex-col justify-between gap-4"
                >
                  <blockquote className="text-base text-[#161B18] leading-relaxed">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="pt-4 border-t border-[#161B18]/8 space-y-1">
                    <div className="text-sm font-semibold text-[#161B18]">{item.name}</div>
                    <div className="text-xs text-[#4A544D]">{item.context}</div>
                    <div className="text-xs font-medium text-[#1B5E3A]">{item.outcome}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Sección 4: Atención Personalizada por WhatsApp y Redes Oficiales */}
        <section id="pedidos" className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Bloque Principal de Conversión a WhatsApp */}
              <div className="lg:col-span-7 bg-[#161B18] text-[#F8F8F6] rounded-2xl p-6 sm:p-10 flex flex-col justify-between gap-8">
                <div className="space-y-3">
                  <p className="text-xs font-medium text-[#9FD5B5]">
                    Atención personalizada · +51 {WHATSAPP_DISPLAY}
                  </p>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight [text-wrap:balance]">
                    Todo tu pedido se gestiona directo por WhatsApp
                  </h2>
                  <p className="text-sm sm:text-base text-[#C8CFC9] leading-relaxed max-w-xl">
                    Sin formularios largos ni pasarelas complicadas. Elige una consulta rápida o
                    arma tu pedido con talla y distrito de entrega en Trujillo para enviarlo directo
                    a nuestro chat.
                  </p>
                </div>

                <div className="space-y-3">
                  {QUICK_WHATSAPP_TOPICS.map((topic) => (
                    <a
                      key={topic.title}
                      href={buildWhatsAppUrl(topic.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/6 hover:bg-white/12 border border-white/12 transition-colors group focus-visible:outline-2 focus-visible:outline-[#9FD5B5]"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">{topic.title}</p>
                        <p className="text-xs text-[#B6BFB8] mt-0.5">{topic.subtitle}</p>
                      </div>
                      <ArrowUpRight
                        className="w-4 h-4 text-[#9FD5B5] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => openOrderDrawer(SNEAKER_CATALOG[0])}
                    className="min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#161B18] bg-[#F8F8F6] hover:bg-[#E4E3DC] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <SlidersHorizontal className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Personalizar pedido ahora</span>
                  </button>

                  <span className="inline-flex items-center gap-1.5 text-xs text-[#C8CFC9]">
                    <MapPin className="w-3.5 h-3.5 text-[#9FD5B5] shrink-0" aria-hidden="true" />
                    <span>Trujillo, Perú · Contraentrega y envíos</span>
                  </span>
                </div>
              </div>

              {/* Bloque Redes Sociales Oficiales */}
              <div
                id="redes"
                className="lg:col-span-5 bg-white rounded-2xl border border-[#161B18]/10 p-6 sm:p-8 flex flex-col justify-between gap-8"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#161B18]/10 bg-[#EFECE6] shrink-0">
                      <SafeImage
                        src={OFFICIAL_LOGO_IMAGE}
                        alt="Logotipo oficial DAJECI: Pisadas que cuidan el planeta"
                        fallbackTitle="DAJECI"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-[#1B5E3A]">
                        DAJECI
                      </p>
                      <p className="text-xs font-medium text-[#4A544D]">
                        Pisadas que cuidan el planeta
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#161B18]">
                      Síguenos en Instagram y TikTok
                    </h3>
                    <p className="text-sm text-[#424C45] leading-relaxed">
                      Publicamos ingresos de lotes nuevos, combinaciones de denim reciclado y videos
                      reales de cómo lucen nuestras zapatillas en las calles de Trujillo.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#F8F8F6] hover:bg-[#EFEFEA] border border-[#161B18]/10 transition-colors group focus-visible:outline-2 focus-visible:outline-[#1B5E3A]"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#161B18] text-white inline-flex items-center justify-center shrink-0">
                        <Instagram className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#161B18]">Instagram oficial</p>
                        <p className="text-xs text-[#4A544D] truncate">{INSTAGRAM_HANDLE}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#4A544D] group-hover:text-[#161B18] shrink-0"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#F8F8F6] hover:bg-[#EFEFEA] border border-[#161B18]/10 transition-colors group focus-visible:outline-2 focus-visible:outline-[#1B5E3A]"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-[#161B18] text-white inline-flex items-center justify-center shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                          aria-hidden="true"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.81a8.23 8.23 0 0 0 4.76 1.5v-3.4a4.85 4.85 0 0 1-1-.22Z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#161B18]">TikTok oficial</p>
                        <p className="text-xs text-[#4A544D] truncate">{TIKTOK_HANDLE}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[#4A544D] group-hover:text-[#161B18] shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <div className="pt-4 border-t border-[#161B18]/10 flex items-center justify-between gap-4">
                  <span className="text-xs text-[#4A544D]">¿Viste un par en redes?</span>
                  <a
                    href={buildWhatsAppUrl(
                      'Hola DAJECI, acabo de ver un modelo en sus redes sociales y quiero consultar si lo tienen en mi talla.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B5E3A] hover:underline underline-offset-4 whitespace-nowrap"
                  >
                    <span>Consúltalo por WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer sobrio */}
      <footer className="border-t border-[#161B18]/10 bg-[#F8F8F6] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <DajeciLogo />
            <p className="text-xs text-[#4A544D]">
              Zapatillas ecológicas de economía circular · Trujillo, Perú
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#4A544D]">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#161B18] transition-colors whitespace-nowrap"
            >
              Instagram ({INSTAGRAM_HANDLE})
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#161B18] transition-colors whitespace-nowrap"
            >
              TikTok ({TIKTOK_HANDLE})
            </a>
            <a
              href={buildWhatsAppUrl(
                'Hola DAJECI, quiero coordinar un pedido de zapatillas ecológicas.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B5E3A] font-semibold hover:underline underline-offset-4 whitespace-nowrap"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppOrderDrawer
        isOpen={drawerOpen}
        initialProduct={selectedProduct}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
