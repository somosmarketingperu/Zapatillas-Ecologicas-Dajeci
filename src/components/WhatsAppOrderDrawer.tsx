import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Check, MessageCircle, X } from 'lucide-react';
import {
  SNEAKER_CATALOG,
  SneakerProduct,
  TRUJILLO_ZONES,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../data/catalog';
import { SafeImage } from './SafeImage';

interface WhatsAppOrderDrawerProps {
  isOpen: boolean;
  initialProduct: SneakerProduct | null;
  onClose: () => void;
}

export const WhatsAppOrderDrawer: React.FC<WhatsAppOrderDrawerProps> = ({
  isOpen,
  initialProduct,
  onClose,
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>(
    initialProduct?.id ?? SNEAKER_CATALOG[0].id
  );
  const [selectedSize, setSelectedSize] = useState<number>(37);
  const [selectedZone, setSelectedZone] = useState<string>(TRUJILLO_ZONES[0]);
  const [customerName, setCustomerName] = useState<string>('');

  useEffect(() => {
    if (initialProduct) {
      setSelectedProductId(initialProduct.id);
      if (!initialProduct.sizes.includes(selectedSize)) {
        setSelectedSize(initialProduct.sizes[0]);
      }
    }
  }, [initialProduct]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activeProduct =
    SNEAKER_CATALOG.find((item) => item.id === selectedProductId) ?? SNEAKER_CATALOG[0];

  const cleanName = customerName.trim();
  const orderMessage = [
    `Hola DAJECI${cleanName ? `, soy ${cleanName}` : ''}. Quiero coordinar este pedido:`,
    `• Modelo: ${activeProduct.name} (S/ ${activeProduct.pricePen})`,
    `• Talla: ${selectedSize}`,
    `• Zona de entrega: ${selectedZone}`,
    `¿Me confirman disponibilidad y horario de envío?`,
  ].join('\n');

  const whatsappHref = buildWhatsAppUrl(orderMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#161B18]/45 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#F8F8F6] h-full overflow-y-auto border-l border-[#161B18]/10 flex flex-col justify-between p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-6">
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#161B18]/10">
            <div>
              <p className="text-xs font-medium text-[#1B5E3A]">
                Atención directa · WhatsApp {WHATSAPP_DISPLAY}
              </p>
              <h2
                id="drawer-title"
                className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[#161B18] mt-1"
              >
                Arma tu pedido por chat
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar panel de pedido"
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[#161B18]/15 text-[#161B18] hover:bg-[#EFEFEA] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#1B5E3A]"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center gap-4 p-3 rounded-xl bg-white border border-[#161B18]/10">
            <SafeImage
              src={activeProduct.image}
              alt={activeProduct.imageAlt}
              fallbackTitle={activeProduct.name}
              className="w-20 h-16 object-cover rounded-lg shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs text-[#4A544D]">{activeProduct.categoryLabel}</p>
              <p className="font-semibold text-sm text-[#161B18] truncate">{activeProduct.name}</p>
              <p className="text-sm font-semibold text-[#1B5E3A] tabular-nums mt-0.5">
                S/ {activeProduct.pricePen}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="drawer-model-select"
              className="block text-sm font-medium text-[#161B18]"
            >
              1. Elige el modelo
            </label>
            <select
              id="drawer-model-select"
              value={activeProduct.id}
              onChange={(e) => {
                const next = SNEAKER_CATALOG.find((item) => item.id === e.target.value);
                if (next) {
                  setSelectedProductId(next.id);
                  if (!next.sizes.includes(selectedSize)) {
                    setSelectedSize(next.sizes[0]);
                  }
                }
              }}
              className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-[#161B18]/15 rounded-lg text-[#161B18] focus-visible:outline-2 focus-visible:outline-[#1B5E3A]"
            >
              {SNEAKER_CATALOG.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} — S/ {item.pricePen}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2.5">
            <span className="block text-sm font-medium text-[#161B18]">
              2. Selecciona tu talla (PE / EUR)
            </span>
            <div className="grid grid-cols-4 gap-2">
              {activeProduct.sizes.map((size) => {
                const isSelected = size === selectedSize;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-h-[44px] rounded-lg text-sm font-medium tabular-nums border transition-colors whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#161B18] text-white border-[#161B18]'
                        : 'bg-white text-[#161B18] border-[#161B18]/15 hover:border-[#161B18]/40'
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="drawer-zone-select"
              className="block text-sm font-medium text-[#161B18]"
            >
              3. Zona de entrega en Trujillo o envío
            </label>
            <select
              id="drawer-zone-select"
              value={selectedZone}
              onChange={(e) => setSelectedZone(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-[#161B18]/15 rounded-lg text-[#161B18] focus-visible:outline-2 focus-visible:outline-[#1B5E3A]"
            >
              {TRUJILLO_ZONES.map((zone) => (
                <option key={zone} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="drawer-customer-name"
              className="block text-sm font-medium text-[#161B18]"
            >
              4. Tu nombre (opcional)
            </label>
            <input
              id="drawer-customer-name"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Ej. Andrea Quispe"
              className="w-full min-h-[44px] px-3.5 py-2.5 text-sm bg-white border border-[#161B18]/15 rounded-lg text-[#161B18] placeholder:text-[#737C75] focus-visible:outline-2 focus-visible:outline-[#1B5E3A]"
            />
          </div>

          <div className="p-4 rounded-xl bg-[#EFEFEA] border border-[#161B18]/10 space-y-2">
            <p className="text-xs font-medium text-[#4A544D]">
              Vista previa del mensaje que enviaremos por chat:
            </p>
            <p className="text-xs text-[#161B18] whitespace-pre-line leading-relaxed">
              {orderMessage}
            </p>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#161B18]/10 space-y-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1B5E3A] hover:bg-[#14472C] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E3A]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Enviar pedido por WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#4A544D]">
            <Check className="w-3.5 h-3.5 text-[#1B5E3A]" aria-hidden="true" />
            <span>Coordinación directa con taller en Trujillo · Sin pagos automáticos</span>
          </p>
        </div>
      </div>
    </div>
  );
};
