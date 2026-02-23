export default function Page() {
  return (
    <main
      className="w-full min-h-screen py-24 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/Coordenador.png')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-24">
          <h1 className="text-6xl font-extrabold text-[#0A2443] drop-shadow-lg">
            Contactos Oficiais
          </h1>
          <p className="mt-6 text-xl text-slate-700 max-w-3xl mx-auto">
            Canais institucionais de comunicação da SAMS Medical Academy para o ano letivo 2026.
            Utiliza estes contactos para esclarecimentos, apoio administrativo, questões pedagógicas
            ou assuntos relacionados com o funcionamento da Academia.
          </p>
        </section>

        {/* BLOCO 1 — EMAIL GERAL */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">

            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              Email Geral
            </h2>

            <p className="text-slate-700 leading-relaxed mb-6">
              Canal principal para comunicação com a SAMS Medical Academy.  
              Destina-se a pedidos de informação, dúvidas sobre candidaturas, processos de inscrição,
              certificações, documentação e suporte administrativo.
            </p>

            <p className="text-2xl font-semibold text-[#0A2443]">
              📧 academia.sams@institucional.pt
            </p>

            <p className="mt-4 text-slate-700 leading-relaxed">
              Todas as mensagens são tratadas pelo Departamento Administrativo da Academia,
              garantindo resposta dentro dos prazos definidos e tratamento adequado de cada pedido.
            </p>

          </div>
        </section>

        {/* BLOCO 3 — LOCALIZAÇÃO */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">

            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              Localização
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              As atividades formativas presenciais decorrem em instalações certificadas e
              preparadas para garantir qualidade pedagógica, segurança e condições adequadas
              ao ensino na área da saúde.
            </p>

            <p className="text-xl text-[#0A2443] font-semibold mb-2">
              🏥 Hospitais SAMS – Vespucci Medical Center
            </p>

            <p className="text-slate-700 leading-relaxed">
              1245 Bay City Avenue  
              Vespucci, Los Santos, SA 8236
            </p>

            <p className="mt-6 text-slate-700 leading-relaxed">
              O Vespucci Medical Center é uma unidade hospitalar de referência, equipada com
              infraestruturas modernas e ambientes adequados para formação técnica e prática.
            </p>

          </div>
        </section>

        {/* BLOCO 4 — HORÁRIO */}
        <section className="mb-16">
          <div className="bg-[#F7FAFF]/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-blue-100">

            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              Horário de Atendimento
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              O atendimento da SAMS Medical Academy é realizado presencialmente e através dos
              canais digitais, garantindo apoio contínuo aos formandos e candidatos.
            </p>

            <p className="text-xl font-semibold text-[#0A2443]">
              🕒 Segunda a Domingo — 09h00 às 23h30
            </p>

            <p className="mt-6 text-slate-700 leading-relaxed">
              O atendimento é supervisionado pelo Departamento de Saúde da Cidade de Kuma,
              garantindo conformidade com as normas internas e padrões de qualidade exigidos.
            </p>

          </div>
        </section>

        {/* BLOCO 5 — REGISTO INSTITUCIONAL */}
        <section className="mb-32">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">

            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              Registo Institucional
            </h2>

            <p className="text-slate-700 leading-relaxed mb-4">
              A SAMS Medical Academy encontra-se registada e reconhecida pelas entidades
              competentes, garantindo legitimidade, conformidade e rigor no exercício da
              atividade formativa.
            </p>

            <p className="text-xl font-semibold text-[#0A2443]">
              📘 Departamento de Saúde da Cidade de Kuma  
              Registo Oficial da Academia — Código 2026/47
            </p>

            <p className="mt-6 text-slate-700 leading-relaxed">
              Este registo certifica que a Academia cumpre os requisitos legais, técnicos e
              pedagógicos necessários ao desenvolvimento de formação profissional na área da saúde.
            </p>

          </div>
        </section>

      </div>
    </main>
  );
}