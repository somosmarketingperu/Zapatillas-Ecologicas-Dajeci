import React from 'react';
import { MessageCircle } from 'lucide-react';
import { DajeciLogo } from './DajeciLogo';
import { buildWhatsAppUrl } from '../data/catalog';

export const Header: React.FC = () => {
  const directWhatsAppUrl = buildWhatsAppUrl(
    'Hola DAJECI, vengo de su landing page y quiero recibir atención personalizada para pedir mis zapatillas ecológicas.'
  );

  return (
    <header className="sticky top-0 z-40 bg-[#F8F8F6]/95 backdrop-blur-sm border-b border-[#161B18]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        <a
          href="#inicio"
          aria-label="DAJECI Inicio"
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B5E3A] rounded-sm shrink-0"
        >
          <DajeciLogo />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A544D]"
        >
          <a
            href="#coleccion"
            className="hover:text-[#161B18] transition-colors whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-4"
          >
            Colección
          </a>
          <a
            href="#como-comprar"
            className="hover:text-[#161B18] transition-colors whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-4"
          >
            Cómo comprar
          </a>
          <a
            href="#proceso"
            className="hover:text-[#161B18] transition-colors whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-4"
          >
            Proceso
          </a>
          <a
            href="#redes"
            className="hover:text-[#161B18] transition-colors whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-4"
          >
            Redes
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[40px] text-xs sm:text-sm font-medium text-white bg-[#1B5E3A] hover:bg-[#14472C] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B5E3A]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>Pedir por WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
