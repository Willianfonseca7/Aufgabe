import { useRef } from "react";

export default function ScrollSeite() {
  const topRef = useRef(null); // Referência para o topo da página

  // Função que usa scrollIntoView com smooth scroll
  function scrollNachOben() {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Elemento de referência no topo da página */}
      <header
        ref={topRef}
        className="p-6 bg-slate-800 text-2xl font-bold sticky top-0"
      >
        Meine Seite / My Page
      </header>

      {/* Conteúdo de exemplo para ter scroll */}
      <main className="p-6 space-y-6">
        <p>Beispiel Inhalt... / Example content...</p>
        <p>Mehr Text... / More text...</p>
        <p>Noch mehr Inhalt... / Even more content...</p>
        <p>Scroll weiter... / Keep scrolling...</p>
      </main>

      {/* Botão fixo para voltar ao topo */}
      <button
        onClick={scrollNachOben}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full text-xl"
        aria-label="Zurück zum Seitenanfang / Back to top"
      >
        ↑
      </button>
    </div>
  );
}
