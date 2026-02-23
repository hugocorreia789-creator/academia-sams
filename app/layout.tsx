"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAcademia = pathname.startsWith("/academia");

  const [user, setUser] = useState<any>(null);

  // Ler localStorage no cliente
  useEffect(() => {
    const stored = localStorage.getItem("formadorSelecionado");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <html lang="pt">
      <body
        className={
          isAcademia
            ? "min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black text-gray-100 flex flex-col"
            : "min-h-screen bg-white text-slate-900 flex flex-col"
        }
      >

        {/* HEADER */}
        <header
          className={
            isAcademia
              ? "w-full border-b border-white/10 bg-blue-950 backdrop-blur-xl relative"
              : "w-full border-b bg-white relative"
          }
        >
          <nav className="flex w-full items-center px-6 py-4 relative">

            {/* BOTÃO EXAMES — ESQUERDA (MESMO ESTILO DO PÁGINA INICIAL) */}
            {isAcademia && (
              <button
                onClick={() => (window.location.href = "/academia/exames")}
                className="absolute left-6 top-4 px-4 py-2 bg-white/20 text-blue-200 font-semibold rounded-lg border border-white/30 backdrop-blur hover:bg-white/30 transition"
              >
                Exames
              </button>
            )}

            {/* Título centrado */}
            <div className="w-full flex justify-center">
              <span
                className={
                  isAcademia
                    ? "text-2xl font-extrabold tracking-tight text-blue-300 drop-shadow-lg"
                    : "text-2xl font-extrabold tracking-tight text-[#0A2A43]"
                }
              >
                SAMS Medical Academy
              </span>
            </div>

            {/* BOTÃO PÁGINA INICIAL — DIREITA */}
            {isAcademia && (
              <button
                onClick={() => (window.location.href = "/")}
                className="absolute right-6 top-4 px-4 py-2 bg-white/20 text-blue-200 font-semibold rounded-lg border border-white/30 backdrop-blur hover:bg-white/30 transition"
              >
                Página Inicial
              </button>
            )}

            {/* Menu normal (fora da Academia) */}
            {!isAcademia && (
              <div className="absolute right-6 flex gap-6 text-sm">
                <a href="/" className="text-[#0A2A43] hover:text-red-600 font-medium transition">Início</a>
                <a href="/sobre" className="text-[#0A2A43] hover:text-red-600 font-medium transition">Sobre a Academia</a>
                <a href="/regulamento" className="text-[#0A2A43] hover:text-red-600 font-medium transition">Regulamento</a>
                <a href="/faq" className="text-[#0A2A43] hover:text-red-600 font-medium transition">Perguntas Frequentes</a>
                <a href="/contactos" className="text-[#0A2A43] hover:text-red-600 font-medium transition">Contactos</a>
              </div>
            )}

          </nav>
        </header>

        {/* MAIN */}
        <main className={isAcademia ? "flex-1 w-full p-0" : "flex-1 w-full px-6 py-10"}>
          {children}
        </main>

        {/* FOOTER — desaparece na Academia */}
        {!isAcademia && (
          <footer className="mt-10 border-t bg-white">
            <div className="w-full px-6 py-4 text-xs text-[#0A2A43]">
              © {new Date().getFullYear()} SAMS Medical Academy. Todos os direitos reservados.
            </div>
          </footer>
        )}

      </body>
    </html>
  );
}