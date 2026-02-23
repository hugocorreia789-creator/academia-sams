"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ExamesPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("formadorSelecionado");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  if (!user) {
    return (
      <div className="p-8">
        <p className="text-gray-400">A carregar...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">

      {/* 🔵 FUNDO DESFOCADO */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-40"
        style={{ backgroundImage: "url('/SAMS Hospital LS & SS.png')" }}
      />

      {/* 🔵 OVERLAY SUAVE */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />

      {/* 🔵 CONTEÚDO */}
      <div className="relative p-10 flex flex-col items-center gap-16">

        {/* 🔵 CABEÇALHO INSTITUCIONAL */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-black drop-shadow-xl">
            Academia Hospitalar — Exames
          </h1>
          <p className="text-black text-xl mt-4 font-semibold opacity-90">
            Selecione o exame que pretende realizar.
          </p>
        </header>

        {/* 🔵 CARDS LADO A LADO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-6xl">

          {/* CARD 1 */}
          <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-black/10 flex flex-col gap-6 hover:scale-[1.03] transition-transform duration-300">
            
            <div className="flex items-center gap-3">
              <span className="text-4xl">📝</span>
              <h2 className="text-3xl font-bold text-black drop-shadow-sm">
                Ficha de Manifestação
              </h2>
            </div>

            <p className="text-black text-lg leading-relaxed font-medium">
              A Ficha de Manifestação recolhe a motivação inicial do candidato,
              avaliando o interesse em ingressar no hospital, a disponibilidade
              de horários, as expectativas em colaborar com a instituição e
              qualquer experiência prévia na área hospitalar.
            </p>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScWPFKPZwbnE2D1DqIX2dJvhup2BBIwaFc38Du-ruiY-sQzkQ/viewform"
              target="_blank"
              className="mt-4 w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 
                         text-center py-4 rounded-xl font-bold text-xl 
                         text-white shadow-xl transition"
            >
              Aceder ao Formulário
            </Link>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-black/10 flex flex-col gap-6 hover:scale-[1.03] transition-transform duration-300">
            
            <div className="flex items-center gap-3">
              <span className="text-4xl">📄</span>
              <h2 className="text-3xl font-bold text-black drop-shadow-sm">
                Ficha de Candidatura
              </h2>
            </div>

            <p className="text-black text-lg leading-relaxed font-medium">
              A Ficha de Candidatura é a avaliação principal, onde o candidato
              demonstra conhecimentos técnicos, capacidade de decisão e postura
              profissional. Inclui questões sobre segurança, identificação de
              utentes, gestão de situações críticas, comunicação eficaz,
              orientação de utentes, reporte de comportamentos inadequados e
              resolução simultânea de múltiplas situações complexas.
            </p>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSesdvHsd49JlbW0qCkhDjBbJEzHKln0pAxmkJAvj4RVEzuz0w/viewform"
              target="_blank"
              className="mt-4 w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 
                         text-center py-4 rounded-xl font-bold text-xl 
                         text-white shadow-xl transition"
            >
              Aceder ao Formulário
            </Link>
          </div>

        </div>

        {/* 🔵 FOOTER DISCRETO */}
        <footer className="text-black/70 text-sm font-medium mt-10">
          © {new Date().getFullYear()} Academia Hospitalar — SAMS. Todos os direitos reservados.
        </footer>

      </div>
    </div>
  );
}