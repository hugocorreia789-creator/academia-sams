export default function Page() {
  return (
    <main
      className="w-full min-h-screen py-24 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/Coordenador.png')" }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />

      {/* CONTEÚDO */}
      <div className="relative max-w-6xl mx-auto">

        {/* TÍTULO */}
        <h1 className="text-6xl font-bold text-[#0A2443] mb-12 text-center tracking-tight">
          Perguntas Frequentes
        </h1>

        <p className="text-lg text-slate-700 leading-relaxed mb-20 text-center max-w-3xl mx-auto">
          Aqui encontras respostas às questões mais comuns sobre a SAMS Medical Academy,
          desde inscrições até certificações. Se a tua dúvida não estiver aqui, contacta-nos.
        </p>

        {/* SEPARADOR PREMIUM */}
        <div className="w-full flex justify-center my-16">
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
        </div>

        {/* ===================== FAQ COMPLETO ===================== */}
        <section className="space-y-20">

          {/* ===================== INSCRIÇÕES ===================== */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2443] mb-8 flex items-center gap-3">
              <span className="text-5xl">📝</span>
              Inscrições e Participação
            </h2>

            <div className="space-y-4">

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Como posso inscrever-me nos cursos?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  As inscrições são realizadas através dos canais oficiais da SAMS Medical Academy.
                  Cada curso possui requisitos específicos e vagas limitadas, atribuídas por ordem
                  de inscrição. Após a submissão, o formando recebe confirmação e informação detalhada.
                </p>
              </details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Quais são os requisitos mínimos para participar?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Os requisitos variam consoante o curso, mas geralmente incluem idade mínima de
                  18 anos, perfil adequado à área de formação e disponibilidade para cumprir a carga horária.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Posso inscrever-me em vários cursos ao mesmo tempo?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Sim, desde que não exista sobreposição de horários e que o formando consiga garantir
                  a assiduidade e o cumprimento das exigências de cada formação.
                </p>
              </details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      As vagas são limitadas?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Sim. Cada curso tem um número máximo de participantes definido, garantindo
                  qualidade pedagógica e acompanhamento adequado.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Posso cancelar a minha inscrição?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Sim. O cancelamento deve ser comunicado com antecedência, preferencialmente até
                  24 horas antes do início da formação.
                </p>
              </details>

            </div>
          </div>

          {/* ===================== CERTIFICAÇÃO ===================== */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2443] mb-8 flex items-center gap-3">
              <span className="text-5xl">🎓</span>
              Certificação e Avaliação
            </h2>

            <div className="space-y-4">

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Como funciona a certificação?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  A certificação é atribuída aos formandos que cumpram os requisitos mínimos de
                  presença, participação e aprovação nas avaliações teóricas e práticas.
                </p>
              </details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Os certificados têm validade?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Alguns certificados, especialmente os relacionados com protocolos de emergência,
                  podem ter validade limitada no tempo e exigir atualização periódica.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Posso pedir uma segunda via do certificado?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Sim. A segunda via pode ser solicitada através dos canais oficiais da Academia.
                </p>
              </details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Como são avaliadas as práticas clínicas?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  As práticas são avaliadas por formadores qualificados, com base em critérios
                  como técnica, segurança, comunicação e cumprimento de protocolos.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      O que acontece se não obtiver aprovação?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  O formando poderá repetir o módulo ou curso numa edição futura, mediante
                  disponibilidade de vagas.
                </p>
              </details>

            </div>
          </div>

          {/* ===================== FUNCIONAMENTO ===================== */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2443] mb-8 flex items-center gap-3">
              <span className="text-5xl">🏥</span>
              Funcionamento da Academia
            </h2>

            <div className="space-y-4">

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Onde decorrem as formações?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  As formações decorrem em instalações associadas à SAMS Medical Academy, incluindo
                  salas de formação, auditórios e espaços laboratoriais preparados para simulações
                  e práticas clínicas.
                </p>
              </details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Quem são os formadores?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Os formadores são profissionais com experiência comprovada na área da saúde e
                  na área pedagógica, selecionados pela sua competência técnica, ética e alinhamento
                  com os valores da Academia.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Existem cursos em formato online?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Alguns módulos teóricos podem ser disponibilizados em formato online ou híbrido,
                  sempre que tal seja compatível com os objetivos pedagógicos e com a natureza
                  dos conteúdos abordados.
                </p>
              </details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Existem formações fora do horário laboral?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Sim. Dependendo do curso e da disponibilidade dos formadores, podem existir
                  formações em horário pós-laboral ou ao fim de semana.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Posso sugerir novos temas de formação?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Sim. A SAMS Medical Academy valoriza sugestões de melhoria e propostas de novos
                  temas, que podem ser submetidas através dos canais de contacto oficiais.
                </p>
              </details>

            </div>
          </div>

          {/* ===================== LEGALIDADE ===================== */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2443] mb-8 flex items-center gap-3">
              <span className="text-5xl">⚖️</span>
              Legalidade, Auditorias e Conformidade
            </h2>

            <div className="space-y-4">

<details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
  <summary className="flex items-center justify-between cursor-pointer list-none">
    <div className="flex items-center gap-3">
      <span className="text-red-600 text-3xl">❓</span>
      <span className="text-xl font-semibold text-[#0A2443]">
        A SAMS Medical Academy está legalmente reconhecida?
      </span>
    </div>
    <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
  </summary>

  <p className="mt-4 text-slate-700 leading-relaxed">
    Sim. A SAMS Medical Academy desenvolve a sua atividade em conformidade com os
    requisitos legais e normativos aplicáveis à formação profissional na área da
    saúde. Os seus programas, procedimentos e práticas seguem padrões de rigor,
    qualidade e transparência, assegurando que todas as formações são conduzidas
    de acordo com critérios reconhecidos no setor e alinhados com as melhores
    práticas institucionais.
  </p>
</details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Existe revisão dos conteúdos formativos?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Sim. Os conteúdos são periodicamente revistos por profissionais qualificados,
                  garantindo que se mantêm atualizados, relevantes e alinhados com as necessidades
                  formativas e com as melhores práticas do setor da saúde.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Como é garantida a qualidade dos cursos?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  A qualidade é assegurada através de processos contínuos de monitorização,
                  avaliação dos formadores, recolha de feedback dos formandos e implementação
                  de melhorias sempre que necessário. A Academia segue padrões rigorosos de
                  qualidade pedagógica e operacional.
                </p>
              </details>

            </div>
          </div>

          {/* ===================== CONDUTA ===================== */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2443] mb-8 flex items-center gap-3">
              <span className="text-5xl">🛡️</span>
              Conduta, Regras e Segurança
            </h2>

            <div className="space-y-4">

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Quais são as principais regras de conduta?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Os formandos devem manter uma postura profissional, respeitar colegas e formadores,
                  cumprir horários, preservar o bom ambiente de trabalho e seguir todas as orientações
                  transmitidas durante as formações. O respeito e a ética são pilares fundamentais
                  da SAMS Medical Academy.
                </p>
              </details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      O que acontece se faltar a uma sessão?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  As faltas devem ser justificadas. Ausências injustificadas podem comprometer a
                  certificação, especialmente em cursos com forte componente prática ou carga
                  horária reduzida. A assiduidade é um critério essencial para a conclusão da formação.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      É permitido gravar ou fotografar durante as formações?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  A gravação de áudio, vídeo ou fotografia durante as formações não é permitida
                  sem autorização prévia, por motivos de confidencialidade, privacidade e proteção
                  de dados. Esta regra aplica-se a todos os participantes.
                </p>
              </details>

              <details className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      Existem normas específicas de segurança?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Sim. É obrigatório cumprir todas as normas de segurança, higiene e utilização
                  de equipamentos, especialmente em contextos de simulação clínica e práticas
                  laboratoriais. A segurança dos formandos e formadores é uma prioridade absoluta.
                </p>
              </details>

              <details className="group bg-[#F5FAFF] border border-[#DCE9F5] rounded-2xl p-6 shadow-lg">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <div className="flex items-center gap-3">
                    <span className="text-red-600 text-3xl">❓</span>
                    <span className="text-xl font-semibold text-[#0A2443]">
                      O que acontece em caso de comportamento inadequado?
                    </span>
                  </div>
                  <span className="text-3xl text-[#0A2443] group-open:rotate-90 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-700 leading-relaxed">
                  Comportamentos inadequados, desrespeitosos ou que coloquem em causa a segurança
                  podem resultar em advertência, suspensão ou exclusão da formação, dependendo da
                  gravidade da situação. A Academia mantém um ambiente de respeito e profissionalismo.
                </p>
              </details>

            </div>
          </div>

        </section>

      </div>
    </main>
  );
}