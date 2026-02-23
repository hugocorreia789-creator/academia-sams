"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ===================== AUTENTICAÇÃO =====================
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <div className="w-full min-h-screen bg-white">

      {/* ===================== HEADER MODERNO ===================== */}
      <header className="w-full fixed top-0 left-0 z-50 bg-[#0A2443] shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">

          {/* TÍTULO */}
          <h1 className="text-2xl font-bold text-white">
            SAMS Medical Academy
          </h1>

          {/* LOGIN / LOGOUT — REMOVIDO DO HEADER */}
        </div>
      </header>

      {/* ===================== BOTÃO LOGIN NO CANTO ESQUERDO ===================== */}
      {!user && (
        <button
          onClick={() => router.push("academia/login")}
          className="fixed top-4 left-6 z-[9999] px-4 py-2 bg-white text-[#0A2443] font-semibold rounded-lg hover:bg-gray-200 transition"
        >
          Login
        </button>
      )}

      {/* BOTÃO FIXO NO CANTO DIREITO */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-4 right-6 z-[9999] text-white text-3xl font-bold"
      >
        ☰
      </button>

      {/* ===================== MENU LATERAL (O TEU, INTACTO) ===================== */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50">
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6">

            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-[#0A2443] mb-8"
            >
              ×
            </button>

            <nav className="flex flex-col gap-6 text-lg font-semibold text-[#0A2443]">

              <a href="/" className="hover:text-[#00A8C6] transition">Início</a>
              <a href="/sobre" className="hover:text-[#00A8C6] transition">Sobre a Academia</a>
              <a href="/regulamento" className="hover:text-[#00A8C6] transition">Regulamento</a>
              <a href="/faq" className="hover:text-[#00A8C6] transition">Perguntas Frequentes</a>
              <a href="/contactos" className="hover:text-[#00A8C6] transition">Contactos</a>

              <a
                href="/academia/login"
                className="mt-6 px-6 py-3 bg-[#0A2443] text-white rounded-full text-center shadow-md hover:bg-[#0A2443]/80 transition"
              >
                Aceder à Academia
              </a>
            </nav>
          </div>
        </div>
      )}


      {/* ===================== HERO PREMIUM ===================== */}
      <main className="flex flex-col items-center justify-center w-full bg-white pt-24">

        <section className="relative w-full text-white py-32 px-6 text-center overflow-hidden">

          <img
            src="/Coordenador.png"
            alt="Coordenador"
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

          <div className="relative z-10 animate-fade-in">
            <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg">
              SAMS Medical Academy
            </h1>
            <p className="mt-6 text-2xl opacity-90 max-w-2xl mx-auto">
              Formação profissional de excelência na área da saúde.
            </p>

            <div className="mt-12 flex justify-center gap-6">
              <a
                href="/sobre"
                className="bg-white text-[#0A2A43] font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-blue-50 transition"
              >
                Sobre a Academia
              </a>
              <a
                href="/contactos"
                className="bg-red-600 text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-red-700 transition"
              >
                Contactos
              </a>
            </div>
          </div>
        </section>

        {/* ===================== COMPROMISSO ===================== */}
        <section className="w-full bg-[#F5FAFF] py-20 px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0A2A43] mb-10">
            Compromisso com a excelência
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

            {[
              { title: "Qualidade", icon: "M12 6v12m6-6H6" },
              { title: "Inovação", icon: "M3 12h18M12 3v18" },
              { title: "Formação Contínua", icon: "M5 12l5 5L20 7" }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-xl shadow-md border border-[#DCE9F5] hover:shadow-lg transition"
              >
                <svg
                  className="w-12 h-12 mx-auto text-[#0A2A43] mb-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>

                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== HISTÓRIA ===================== */}
        <section className="w-full py-24 px-6 bg-[#F5FAFF]">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A2A43] mb-6">
              A História do Hospital SAMS Los Santos
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto animate-fade-in">
              A partir de 2023, Los Santos enfrentava um desafio crescente: a cidade expandia-se,
              a população aumentava e a necessidade de cuidados de saúde especializados tornava-se
              evidente. Foi neste contexto que nasceu o <strong>Hospital SAMS Los Santos</strong>.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mt-6 animate-fade-in">
              Desde o primeiro dia, o hospital assumiu uma missão clara: <strong>cuidar com rigor,
              formar com responsabilidade e servir com excelência.</strong>
            </p>

            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto mt-6 animate-fade-in">
              Em 2025, surgiu a visão de criar um espaço dedicado exclusivamente à formação —
              assim nasceu a <strong>SAMS Medical Academy</strong>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-l-4 border-[#0A2A43] pl-8 space-y-12 animate-slide-up">

            {[
              { year: "2023", text: "Fundação do Hospital SAMS Los Santos e início das operações clínicas." },
              { year: "2024", text: "Expansão dos serviços e reforço da emergência." },
              { year: "2025", text: "Criação da SAMS Medical Academy." },
              { year: "2026", text: "Integração total entre hospital e academia." }
            ].map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-5 top-1 w-4 h-4 bg-[#0A2A43] rounded-full"></div>
                <h3 className="text-2xl font-bold">{item.year}</h3>
                <p className="text-lg text-slate-700 mt-2">{item.text}</p>
              </div>
            ))}

          </div>
        </section>

        {/* ===================== ÁREAS DE FORMAÇÃO ===================== */}
        <section className="w-full py-24 px-6 bg-white">
          <h2 className="text-4xl font-bold text-center text-[#0A2A43] mb-12">
            Áreas de Formação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {[
              "Formação Clínica",
              "Emergência Médica",
              "Diagnóstico e Terapêutica",
              "Formação Interna Hospitalar",
              "Simulação e Treino",
              "Competências Técnicas"
            ].map((area) => (
              <div
                key={area}
                className="bg-[#F5FAFF] p-8 rounded-xl shadow-md border border-[#DCE9F5] hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold text-[#0A2A43]">{area}</h3>
                <p className="text-sm opacity-70 mt-2">Conteúdos em desenvolvimento.</p>
              </div>
            ))}

          </div>
        </section>

        {/* ===================== CTA FINAL ===================== */}
        <section className="w-full py-24 px-6 bg-[#0A2A43] text-white text-center">
          <h2 className="text-4xl font-bold mb-4">
            Pronto para conhecer a nossa oferta formativa
          </h2>

          <p className="opacity-90 mb-10 text-lg max-w-2xl mx-auto">
            A SAMS Medical Academy está comprometida em preparar os profissionais que vão cuidar do futuro.
          </p>

          <a
            href="https://discord.gg/RDFQAZeug4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-2 text-base mx-auto w-fit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515..." />
            </svg>
            Entrar em contacto
          </a>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="w-full py-14 px-6 bg-[#EAF6FF] text-[#0A2A43]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

            <div>
              <h3 className="font-bold text-xl mb-3">SAMS Medical Academy</h3>
              <p className="text-sm opacity-70">Formação profissional na área da saúde.</p>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Links úteis</h3>
              <ul className="space-y-1 text-sm opacity-80">
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/regulamento">Regulamento</a></li>
                <li><a href="/faq">Perguntas Frequentes</a></li>
                <li><a href="/contactos">Contactos</a></li>
                <li><a href="/legalidade" className="hover:text-red-600 transition">Enquadramento Jurídico</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-3">Morada</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Vespucci Medical Center<br />
                San Andreas Avenue, Vespucci<br />
                Los Santos, SA 8236
              </p>
            </div>

          </div>

          <p className="text-center text-xs opacity-60 mt-12">
            © {new Date().getFullYear()} SAMS Medical Academy — Todos os direitos reservados.
          </p>
        </footer>

      </main>
    </div>
  );
}