export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-white">

      {/* HERO */}
      <section className="relative w-full text-white py-32 px-6 text-center overflow-hidden">
        <img
          src="/Entrada Hospital.png"
          alt="Entrada do Hospital SAMS"
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Sobre a SAMS Medical Academy
          </h1>
          <p className="mt-6 text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Excelência, rigor e inovação ao serviço da formação em saúde.  
            Aqui preparamos os profissionais que vão cuidar do futuro.
          </p>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="w-full py-24 px-6 bg-[#F5FAFF]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0A2A43] mb-8">Quem somos</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A SAMS Medical Academy é uma instituição de formação especializada, criada com o
            compromisso de elevar o padrão de qualificação dos profissionais de saúde em Los Santos.
            Integrada no Hospital SAMS Los Santos, a academia nasce da necessidade de oferecer
            programas formativos que reflitam a realidade clínica, a evolução tecnológica e as
            exigências éticas da prática em saúde.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            Acreditamos que a formação em saúde deve ser mais do que a transmissão de conhecimento:
            deve ser uma experiência transformadora, capaz de desenvolver competências técnicas,
            pensamento crítico, responsabilidade humana e capacidade de resposta em cenários reais.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            A nossa missão é clara: formar profissionais competentes, confiantes e preparados para
            enfrentar os desafios de um setor em constante evolução. Acreditamos que o futuro da
            saúde depende da qualidade da formação de hoje — e é por isso que existimos.
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2A43] text-center mb-10">A nossa história</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A SAMS Medical Academy surge como resposta à crescente necessidade de profissionais
            qualificados na área da saúde. O Hospital SAMS Los Santos, reconhecido pela sua
            excelência clínica e pelo compromisso com a comunidade, identificou a importância de
            criar um espaço dedicado exclusivamente à formação, capacitação e atualização contínua
            dos seus colaboradores e da população em geral.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            Ao longo dos anos, o hospital tem investido em tecnologia, inovação e recursos humanos.
            A criação da academia representa o passo natural na consolidação de uma cultura de
            aprendizagem contínua, onde o conhecimento é partilhado, atualizado e aplicado de forma
            prática e responsável.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            Hoje, a SAMS Medical Academy é um centro de formação reconhecido pela sua abordagem
            moderna, rigorosa e orientada para a prática. Cada curso é desenvolvido em colaboração
            com equipas clínicas, garantindo que os conteúdos refletem as necessidades reais dos
            serviços de saúde.
          </p>
        </div>
      </section>

      {/* MISSÃO, VISÃO, VALORES */}
      <section className="w-full py-24 px-6 bg-[#F5FAFF]">
        <h2 className="text-4xl font-bold text-center text-[#0A2A43] mb-14">
          Missão, Visão e Valores
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          <div className="bg-white p-10 rounded-xl shadow-md border border-[#DCE9F5]">
            <h3 className="text-3xl font-semibold text-[#0A2A43] mb-4">Missão</h3>
            <p className="text-slate-700 leading-relaxed">
              Formar profissionais de saúde com excelência técnica, ética e humana, promovendo
              conhecimento atualizado e competências práticas que contribuam para a melhoria dos
              cuidados prestados à comunidade.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md border border-[#DCE9F5]">
            <h3 className="text-3xl font-semibold text-[#0A2A43] mb-4">Visão</h3>
            <p className="text-slate-700 leading-relaxed">
              Ser a principal referência em formação em saúde em Los Santos, reconhecida pela
              qualidade dos seus programas, pela inovação pedagógica e pelo impacto positivo nos
              serviços clínicos.
            </p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow-md border border-[#DCE9F5]">
            <h3 className="text-3xl font-semibold text-[#0A2A43] mb-4">Valores</h3>
            <ul className="text-slate-700 leading-relaxed space-y-3">
              <li>• Ética e responsabilidade</li>
              <li>• Humanização dos cuidados</li>
              <li>• Rigor técnico e científico</li>
              <li>• Inovação e modernização contínua</li>
              <li>• Compromisso com a comunidade</li>
              <li>• Transparência e profissionalismo</li>
            </ul>
          </div>

        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="w-full py-24 px-6 bg-[#F5FAFF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2A43] text-center mb-10">
            Metodologia Pedagógica
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A nossa metodologia combina rigor científico, prática clínica e inovação pedagógica.
            Acreditamos que a aprendizagem deve ser dinâmica, envolvente e orientada para a
            realidade dos serviços de saúde.
          </p>

          <ul className="text-lg text-slate-700 leading-relaxed mt-6 space-y-4">
            <li>• Aprendizagem baseada em simulação realista</li>
            <li>• Casos clínicos reais e cenários de emergência</li>
            <li>• Formação prática em ambiente hospitalar</li>
            <li>• Avaliação contínua e feedback individual</li>
            <li>• Mentoria personalizada por profissionais experientes</li>
            <li>• Integração de tecnologia e equipamentos modernos</li>
          </ul>
        </div>
      </section>

      {/* INFRAESTRUTURAS */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2A43] text-center mb-10">
            Infraestruturas e Recursos
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A SAMS Medical Academy dispõe de instalações modernas e totalmente equipadas para
            garantir uma formação de excelência.
          </p>

          <ul className="text-lg text-slate-700 leading-relaxed mt-6 space-y-4">
            <li>• Salas de simulação clínica de alta fidelidade</li>
            <li>• Laboratórios equipados com tecnologia hospitalar</li>
            <li>• Salas de aula modernas e interativas</li>
            <li>• Acesso direto ao Hospital SAMS Los Santos</li>
            <li>• Equipamentos de treino avançado</li>
            <li>• Espaços dedicados a estudo e investigação</li>
          </ul>
        </div>
      </section>

      {/* PARCERIAS */}
      <section className="w-full py-24 px-6 bg-[#F5FAFF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2A43] text-center mb-10">
            Parcerias e Colaborações
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Acreditamos que a formação de excelência se constrói em conjunto. Por isso, mantemos
            parcerias estratégicas com instituições de saúde, entidades certificadoras e equipas
            clínicas especializadas.
          </p>

          <ul className="text-lg text-slate-700 leading-relaxed mt-6 space-y-4">
            <li>• Hospital SAMS Los Santos</li>
            <li>• Equipas clínicas multidisciplinares</li>
            <li>• Especialistas convidados</li>
            <li>• Entidades de certificação e auditoria</li>
            <li>• Organizações de saúde comunitária</li>
          </ul>
        </div>
      </section>

      {/* COMUNIDADE */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2A43] text-center mb-10">
            Compromisso com a Comunidade
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A SAMS Medical Academy assume um compromisso ativo com a comunidade de Los Santos.
            Acreditamos que a formação em saúde deve contribuir para o bem-estar coletivo e para o
            desenvolvimento social.
          </p>

          <ul className="text-lg text-slate-700 leading-relaxed mt-6 space-y-4">
            <li>• Ações de sensibilização e educação em saúde</li>
            <li>• Programas de formação gratuitos para a população</li>
            <li>• Participação em campanhas de prevenção</li>
            <li>• Apoio a iniciativas sociais e humanitárias</li>
          </ul>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section className="w-full py-24 px-6 bg-[#F5FAFF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2A43] text-center mb-10">
            Certificações e Reconhecimentos
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            A qualidade da nossa formação é reconhecida por entidades internas e externas,
            garantindo que os nossos programas cumprem os mais elevados padrões de rigor e
            profissionalismo.
          </p>

          <ul className="text-lg text-slate-700 leading-relaxed mt-6 space-y-4">
            <li>• Certificação interna do Hospital SAMS Los Santos</li>
            <li>• Avaliação contínua por equipas clínicas especializadas</li>
            <li>• Reconhecimento pela qualidade pedagógica</li>
            <li>• Auditorias internas regulares</li>
          </ul>
        </div>
      </section>

{/* TIMELINE */}
<section className="w-full py-24 px-6 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-[#0A2A43] text-center mb-10">
      A nossa evolução
    </h2>

    <div className="space-y-8 text-lg text-slate-700 leading-relaxed">

      <p>
        <strong>2023:</strong> Fundação do Hospital SAMS Los Santos e início das operações clínicas,
        estabelecendo as bases para um centro de saúde moderno, eficiente e orientado para a
        excelência assistencial.
      </p>

      <p>
        <strong>2024:</strong> Expansão dos serviços hospitalares, reforço da resposta de emergência
        e consolidação de uma equipa médica multidisciplinar altamente qualificada, elevando o
        padrão de cuidados prestados à comunidade.
      </p>

      <p>
        <strong>2025:</strong> Criação da SAMS Medical Academy, com o objetivo de oferecer formação
        especializada e preparar novos profissionais para os desafios da prática clínica moderna.
      </p>

      <p>
        <strong>2026:</strong> Consolidação da academia e integração total com o Hospital SAMS Los Santos,
        garantindo uma ligação direta entre formação, prática clínica e desenvolvimento profissional.
      </p>

    </div>
  </div>
</section>

            {/* TESTEMUNHOS */}
      <section className="w-full py-24 px-6 bg-[#F5FAFF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0A2A43] text-center mb-14">
            Testemunhos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                nome: "Joana Ferreira",
                texto:
                  "A formação na SAMS Medical Academy mudou completamente a minha forma de trabalhar. A simulação clínica foi essencial para ganhar confiança."
              },
              {
                nome: "Carlos Mendes",
                texto:
                  "Os formadores são extremamente profissionais e experientes. Senti que estava a aprender com quem realmente sabe."
              },
              {
                nome: "Rita Oliveira",
                texto:
                  "A ligação ao hospital faz toda a diferença. A formação é prática, real e muito bem estruturada."
              }
            ].map((t) => (
              <div
                key={t.nome}
                className="bg-white p-8 rounded-xl shadow-md border border-[#DCE9F5]"
              >
                <p className="text-slate-700 italic leading-relaxed">“{t.texto}”</p>
                <p className="text-[#0A2A43] font-semibold mt-4">{t.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* CTA FINAL */}
<section className="w-full py-24 px-6 bg-[#0A2A43] text-white text-center">
  <h2 className="text-4xl font-bold mb-4">
    Pronto para conhecer a nossa oferta formativa
  </h2>

  <p className="opacity-90 mb-10 text-lg max-w-2xl mx-auto">
    A SAMS Medical Academy está comprometida em preparar os profissionais que vão cuidar do
    futuro. Estamos prontos para te acompanhar no próximo passo da tua carreira.
  </p>

  <a
    href="https://discord.gg/RDFQAZeug4"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition shadow-lg flex items-center justify-center gap-2 text-base mx-auto w-fit"
  >
    {/* Ícone do Discord */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.027C.533 9.045-.32 13.58.099 18.057a.082.082 0 00.031.056 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.125-.094.25-.192.37-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.099.245.198.37.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.891.076.076 0 00-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.9 19.9 0 005.994-3.03.077.077 0 00.03-.055c.5-5.177-.838-9.674-3.548-13.661a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.094 2.157 2.419 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.094 2.157 2.419 0 1.334-.947 2.419-2.157 2.419z"/>
    </svg>

    Entrar em contacto
  </a>
</section>

    </main>
  );

}
