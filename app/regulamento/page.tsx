export default function Page() {
  return (
    <main
      className="w-full min-h-screen py-24 px-6 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/Coordenador.png')" }}
    >
      {/* OVERLAY GLOBAL */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* CONTEÚDO */}
      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-24">
          <h1 className="text-6xl font-extrabold text-[#0A2443] drop-shadow-lg">
            Regulamento Geral da SAMS Medical Academy
          </h1>
          <p className="mt-6 text-xl text-slate-700 max-w-3xl mx-auto">
            Documento oficial que estabelece as normas de funcionamento, conduta,
            segurança, avaliação e certificação aplicáveis a todas as atividades
            formativas da SAMS Medical Academy.
          </p>
        </section>

        {/* ===================== BLOCOS PREMIUM ===================== */}

        {/* BLOCO 1 */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              1. Enquadramento Institucional e Finalidade
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A SAMS Medical Academy é uma entidade dedicada à formação profissional na área
              da saúde, promovendo competências técnicas, científicas e humanas. Este
              regulamento define os princípios estruturantes que orientam o funcionamento da
              Academia, assegurando rigor, transparência e conformidade com as normas legais
              aplicáveis ao setor formativo.
            </p>
            <p className="text-slate-700 leading-relaxed">
              O documento aplica-se a todos os formandos, formadores, colaboradores e
              intervenientes externos que participem em atividades promovidas pela Academia,
              garantindo um ambiente seguro, ético e pedagogicamente consistente.
            </p>
          </div>
        </section>

        {/* BLOCO 2 */}
        <section className="mb-16">
          <div className="bg-[#F7FAFF]/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              2. Processo de Inscrição e Admissão
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              O processo de inscrição é estruturado para garantir equidade, clareza e
              conformidade com os requisitos de cada curso. A inscrição implica a aceitação
              integral deste regulamento.
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-3">
              <li>As inscrições são realizadas exclusivamente através dos canais oficiais.</li>
              <li>Os candidatos devem fornecer dados verdadeiros, completos e atualizados.</li>
              <li>Alguns cursos podem exigir pré-requisitos académicos ou profissionais.</li>
              <li>A inscrição só é considerada válida após confirmação formal da Academia.</li>
              <li>As vagas são limitadas e atribuídas por ordem de inscrição ou critérios específicos.</li>
              <li>A Academia reserva-se o direito de recusar inscrições que não cumpram os requisitos.</li>
            </ul>
          </div>
        </section>

        {/* BLOCO 3 */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              3. Direitos dos Formandos
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A SAMS Medical Academy assegura aos formandos um conjunto de direitos que
              garantem condições adequadas de aprendizagem, respeito e segurança.
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-3">
              <li>Receber formação de qualidade, atualizada e ministrada por profissionais qualificados.</li>
              <li>Ser tratado com respeito, imparcialidade e confidencialidade.</li>
              <li>Ter acesso a materiais pedagógicos adequados ao curso.</li>
              <li>Receber informação clara sobre objetivos, conteúdos e métodos de avaliação.</li>
              <li>Apresentar sugestões, reclamações ou pedidos de esclarecimento.</li>
              <li>Ser informado sobre alterações de horários, conteúdos ou procedimentos.</li>
            </ul>
          </div>
        </section>

        {/* BLOCO 4 */}
        <section className="mb-16">
          <div className="bg-[#F7FAFF]/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              4. Deveres dos Formandos
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A participação nas formações implica o cumprimento rigoroso dos seguintes deveres:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-3">
              <li>Respeitar colegas, formadores e colaboradores.</li>
              <li>Cumprir horários, regras e orientações transmitidas.</li>
              <li>Manter comportamento adequado, ético e profissional.</li>
              <li>Preservar equipamentos, instalações e materiais.</li>
              <li>Não divulgar conteúdos, imagens ou gravações sem autorização.</li>
              <li>Garantir a confidencialidade de informações partilhadas em contexto formativo.</li>
            </ul>
          </div>
        </section>

        {/* BLOCO 5 */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              5. Assiduidade, Pontualidade e Participação
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A assiduidade é essencial para garantir a qualidade da aprendizagem e a segurança
              nas práticas. Assim:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-3">
              <li>É obrigatória a presença mínima definida para cada curso.</li>
              <li>Faltas devem ser justificadas sempre que possível.</li>
              <li>Atrasos repetidos podem comprometer a certificação.</li>
              <li>A ausência em módulos práticos pode impedir a conclusão da formação.</li>
              <li>A participação ativa é considerada parte integrante da avaliação.</li>
            </ul>
          </div>
        </section>

        {/* BLOCO 6 */}
        <section className="mb-16">
          <div className="bg-[#F7FAFF]/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              6. Avaliação, Critérios e Certificação
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A certificação depende do cumprimento dos critérios definidos para cada ação
              formativa, incluindo:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-3">
              <li>Participação ativa nas sessões.</li>
              <li>Aprovação nas avaliações teóricas e práticas.</li>
              <li>Cumprimento da carga horária obrigatória.</li>
              <li>Respeito pelas normas de segurança e conduta.</li>
              <li>Desempenho adequado nas atividades práticas e simulações.</li>
            </ul>
          </div>
        </section>

        {/* BLOCO 7 */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              7. Utilização de Equipamentos e Instalações
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Os formandos devem utilizar os equipamentos com responsabilidade e de acordo com
              as instruções fornecidas pelos formadores.
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-3">
              <li>É proibido danificar, alterar ou utilizar indevidamente qualquer equipamento.</li>
              <li>É obrigatório comunicar imediatamente qualquer anomalia.</li>
              <li>O uso de equipamentos de proteção individual é obrigatório quando indicado.</li>
              <li>As instalações devem ser mantidas limpas e organizadas.</li>
            </ul>
          </div>
        </section>

        {/* BLOCO 8 */}
        <section className="mb-16">
          <div className="bg-[#F7FAFF]/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              8. Segurança, Higiene e Procedimentos de Emergência
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              A segurança é uma prioridade absoluta. Todos os formandos devem:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-3">
              <li>Seguir as instruções dos formadores durante práticas clínicas.</li>
              <li>Conhecer os procedimentos de emergência e evacuação.</li>
              <li>Evitar comportamentos de risco.</li>
              <li>Utilizar corretamente materiais e dispositivos médicos.</li>
              <li>Respeitar normas de higiene e biossegurança.</li>
            </ul>
          </div>
        </section>

        {/* BLOCO 9 */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              9. Proteção de Dados, Privacidade e Confidencialidade
            </h2>
            <p className="text-slate-700 leading-relaxed">
              A SAMS Medical Academy cumpre as normas de proteção de dados aplicáveis. É
              proibida a divulgação de informações pessoais, imagens, gravações ou qualquer
              conteúdo partilhado durante as formações sem autorização expressa. O incumprimento
              destas normas constitui infração grave.
            </p>
          </div>
        </section>

        {/* BLOCO 10 */}
        <section className="mb-16">
          <div className="bg-[#F7FAFF]/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              10. Comportamentos Inadequados e Consequências
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              São considerados comportamentos inadequados:
            </p>
            <ul className="list-disc pl-6 text-slate-700 leading-relaxed space-y-3">
              <li>Desrespeito por colegas, formadores ou colaboradores.</li>
              <li>Uso indevido de equipamentos ou instalações.</li>
              <li>Gravações não autorizadas.</li>
              <li>Atos que coloquem em risco a segurança.</li>
              <li>Comportamentos agressivos, discriminatórios ou antiéticos.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              Estes comportamentos podem resultar em advertência, suspensão ou exclusão da
              formação, consoante a gravidade.
            </p>
          </div>
        </section>

        {/* BLOCO 11 */}
        <section className="mb-16">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-slate-200">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              11. Revisão, Atualização e Divulgação do Regulamento
            </h2>
            <p className="text-slate-700 leading-relaxed">
              A SAMS Medical Academy reserva-se o direito de atualizar este regulamento sempre
              que necessário. Todas as alterações serão comunicadas aos formandos através dos
              canais oficiais, garantindo transparência e acesso à informação.
            </p>
          </div>
        </section>

        {/* BLOCO 12 */}
        <section className="mb-32">
          <div className="bg-[#F7FAFF]/95 backdrop-blur-md shadow-xl rounded-3xl p-12 border border-blue-100">
            <h2 className="text-4xl font-bold text-[#0A2443] mb-6">
              12. Aceitação do Regulamento
            </h2>
            <p className="text-slate-700 leading-relaxed">
              A participação em qualquer ação formativa implica a aceitação integral deste
              regulamento. O desconhecimento das normas não isenta o formando do seu
              cumprimento.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}