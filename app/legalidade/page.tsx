"use client";

export default function Page() {
  const handleBackToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-screen">

      {/* ===================== HEADER COM IMAGEM FIXA E BLUR ===================== */}
      <div
        className="w-full h-[300px] bg-top bg-no-repeat bg-cover relative"
        style={{ backgroundImage: "url('/Coordenador.png')" }}
      >
        <div className="absolute inset-0 backdrop-blur-lg bg-white/20"></div>
      </div>


      {/* ===================== CONTEÚDO EM BLOCOS ===================== */}
      <div className="w-full">

        {/* ESTATUTOS — CIANO CLARO TRANSPARENTE */}
        <section id="estatutos" className="w-full bg-[#00A8C6]/20 backdrop-blur-sm py-20">
          <div className="max-w-5xl mx-auto px-6 text-[#003B4A]">
            <h1 className="text-4xl font-bold mb-10">
              Estatutos do SAMS Medical Academy
            </h1>
      <div className="max-w-5xl mx-auto"></div>
      {/* ===================== CAPÍTULO I ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo I — Disposições Gerais
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 1.º — Denominação e Natureza
</h3>
<p className="mb-3">
  O SAMS Medical Academy, adiante designado por “Academia”, é uma estrutura de natureza
  privada, sem fins lucrativos, vocacionada para a formação, atualização e desenvolvimento
  científico na área da saúde.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 2.º — Regime Jurídico
</h3>
<p className="mb-3">
  A Academia rege-se pelos presentes Estatutos, pelos regulamentos internos que os
  concretizam e pela legislação portuguesa aplicável.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 3.º — Sede e Âmbito
</h3>
<p className="mb-3">
  A Academia tem sede em território nacional, em local a definir em documento próprio, e a
  sua atuação pode ter âmbito nacional e internacional.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 4.º — Duração
</h3>
<p className="mb-3">
  A Academia é constituída por tempo indeterminado, podendo ser dissolvida nos termos
  previstos nos presentes Estatutos e na lei.
</p>

{/* ===================== CAPÍTULO II ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo II — Fins e Atividades
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 5.º — Missão Institucional
</h3>
<p className="mb-3">
  A Academia tem como missão promover a excelência na formação, investigação e
  desenvolvimento científico na área da saúde, contribuindo para a melhoria contínua da
  prática clínica e para o reforço das competências dos profissionais do setor.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 6.º — Objetivos Estratégicos
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Desenvolver programas formativos alinhados com as necessidades do setor da saúde;</li>
  <li>Promover a atualização permanente dos profissionais;</li>
  <li>Estimular a investigação aplicada e a inovação tecnológica;</li>
  <li>Disseminar boas práticas clínicas e organizacionais;</li>
  <li>Fomentar a cooperação nacional e internacional.</li>
</ul>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 7.º — Atividades Formativas
</h3>
<p className="mb-3">
  A Academia pode organizar cursos, seminários, conferências, congressos, workshops,
  programas de certificação, formações modulares e outras iniciativas pedagógicas, em
  formato presencial, híbrido ou digital.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 8.º — Atividades Científicas
</h3>
<p className="mb-3">
  A Academia pode promover ou apoiar projetos de investigação, estudos técnicos, grupos de
  trabalho e observatórios temáticos, em articulação com entidades parceiras.
</p>

{/* ===================== CAPÍTULO III ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo III — Membros e Categorias de Membros
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 9.º — Categorias de Membros
</h3>
<p className="mb-3">
  A Academia reconhece, designadamente, as seguintes categorias de membros: fundadores,
  efetivos, associados, honorários, correspondentes e convidados.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 10.º — Membros Fundadores
</h3>
<p className="mb-3">
  São membros fundadores as pessoas singulares ou coletivas que participaram na criação da
  Academia, gozando de reconhecimento institucional permanente.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 11.º — Membros Efetivos
</h3>
<p className="mb-3">
  São membros efetivos os profissionais de saúde ou áreas afins que participem
  regularmente nas atividades da Academia, podendo exercer os direitos previstos nos
  presentes Estatutos e regulamentos internos.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 12.º — Membros Honorários
</h3>
<p className="mb-3">
  Podem ser designadas como membros honorários personalidades de reconhecido mérito
  científico, académico ou profissional, por deliberação da Direção.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 13.º — Admissão de Membros
</h3>
<p className="mb-3">
  A admissão de membros é regulada por procedimento próprio, definido em regulamento
  interno, podendo a Direção recusar candidaturas que não cumpram os requisitos
  estabelecidos.
</p>

{/* ===================== CAPÍTULO IV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo IV — Direitos e Deveres dos Membros
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 14.º — Direitos dos Membros
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Participar nas atividades da Academia;</li>
  <li>Aceder a conteúdos formativos e científicos;</li>
  <li>Receber certificações e declarações de participação;</li>
  <li>Apresentar propostas e sugestões à Direção;</li>
  <li>Ser eleito para órgãos internos, quando aplicável.</li>
</ul>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 15.º — Deveres dos Membros
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Respeitar os Estatutos e regulamentos internos;</li>
  <li>Zelar pela reputação da Academia;</li>
  <li>Cumprir as orientações pedagógicas e científicas;</li>
  <li>Respeitar normas éticas e deontológicas aplicáveis à área da saúde.</li>
</ul>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 16.º — Perda da Qualidade de Membro
</h3>
<p className="mb-3">
  A qualidade de membro pode cessar por pedido do próprio, incumprimento grave dos deveres
  estatutários, conduta incompatível com os valores da Academia ou decisão fundamentada da
  Direção, nos termos de regulamento disciplinar.
</p>

{/* ===================== CAPÍTULO V ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo V — Órgãos da Academia
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 17.º — Estrutura Orgânica
</h3>
<p className="mb-3">
  A Academia dispõe de uma estrutura orgânica composta por órgãos de direção, consulta,
  supervisão e apoio técnico-científico, cuja articulação visa assegurar o cumprimento da
  missão institucional.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 18.º — Órgãos Principais
</h3>
<p className="mb-3">
  São órgãos principais da Academia a Direção, o Conselho Científico e Pedagógico, o
  Conselho Deontológico e Ético, a Coordenação de Cursos e Programas e as Unidades de
  Apoio Técnico e Administrativo.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 19.º — Princípios de Funcionamento
</h3>
<p className="mb-3">
  Os órgãos da Academia atuam de forma colegial, transparente e alinhada com os princípios
  éticos e científicos da instituição, devendo as decisões ser fundamentadas e
  devidamente registadas.
</p>

{/* ===================== CAPÍTULO VI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo VI — Direção
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 20.º — Natureza e Composição
</h3>
<p className="mb-3">
  A Direção é o órgão executivo máximo da Academia, responsável pela gestão estratégica,
  administrativa, financeira e operacional, sendo composta por um Diretor-Geral,
  Diretor-Adjunto e outros membros definidos em regulamento interno.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 21.º — Competências da Direção
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Definir o plano estratégico anual e plurianual;</li>
  <li>Aprovar a oferta formativa e científica;</li>
  <li>Aprovar regulamentos internos;</li>
  <li>Gerir recursos humanos, financeiros e materiais;</li>
  <li>Celebrar protocolos e parcerias;</li>
  <li>Representar institucionalmente a Academia.</li>
</ul>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 22.º — Reuniões e Deliberações
</h3>
<p className="mb-3">
  A Direção reúne ordinariamente uma vez por mês e extraordinariamente sempre que
  convocada pelo Diretor-Geral, sendo as deliberações tomadas por maioria simples, salvo
  disposição em contrário.
</p>

{/* ===================== CAPÍTULO VII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo VII — Conselho Científico e Pedagógico
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 23.º — Natureza
</h3>
<p className="mb-3">
  O Conselho Científico e Pedagógico é o órgão de consulta e apoio técnico-científico da
  Academia, assegurando a qualidade e pertinência das atividades formativas e científicas.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 24.º — Composição
</h3>
<p className="mb-3">
  O Conselho é composto por profissionais de reconhecido mérito científico, académico ou
  clínico, podendo integrar especialistas externos convidados.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 25.º — Competências
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Emitir parecer sobre programas formativos;</li>
  <li>Avaliar a qualidade científica das atividades;</li>
  <li>Propor melhorias pedagógicas;</li>
  <li>Apreciar candidaturas a cargos docentes;</li>
  <li>Validar critérios de avaliação e certificação.</li>
</ul>

{/* ===================== CAPÍTULO VIII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo VIII — Conselho Deontológico e Ético
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 26.º — Natureza e Finalidade
</h3>
<p className="mb-3">
  O Conselho Deontológico e Ético é o órgão responsável por assegurar o cumprimento dos
  princípios éticos, deontológicos e de integridade científica na atividade da Academia,
  atuando de forma independente, imparcial e confidencial.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 27.º — Competências
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Emitir pareceres sobre questões éticas;</li>
  <li>Apreciar denúncias ou participações relativas a condutas impróprias;</li>
  <li>Propor medidas corretivas ou disciplinares;</li>
  <li>Promover ações de sensibilização ética.</li>
</ul>{/* ===================== CAPÍTULO IX ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo IX — Coordenação de Cursos e Programas
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 28.º — Estrutura da Coordenação
</h3>
<p className="mb-3">
  Cada curso, programa ou área formativa é coordenado por um responsável designado pela
  Direção, podendo integrar docentes, tutores, consultores e especialistas convidados.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 29.º — Competências da Coordenação
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Elaborar planos curriculares;</li>
  <li>Garantir a execução pedagógica das atividades;</li>
  <li>Acompanhar formandos e docentes;</li>
  <li>Assegurar conformidade com regulamentos internos;</li>
  <li>Avaliar resultados e propor melhorias.</li>
</ul>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 30.º — Relatórios Pedagógicos
</h3>
<p className="mb-3">
  A Coordenação deve elaborar relatórios periódicos sobre o desempenho dos cursos e
  programas, submetendo-os à Direção e ao Conselho Científico e Pedagógico.
</p>

{/* ===================== CAPÍTULO X ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo X — Admissão, Frequência e Avaliação de Formandos
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 31.º — Admissão de Formandos
</h3>
<p className="mb-3">
  Os critérios de admissão são definidos em regulamento pedagógico e podem incluir requisitos
  académicos, profissionais ou técnicos, bem como entrevistas ou provas de aptidão.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 32.º — Frequência e Assiduidade
</h3>
<p className="mb-3">
  A participação nas atividades formativas exige assiduidade mínima definida em regulamento,
  podendo a falta injustificada implicar exclusão ou não certificação.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 33.º — Avaliação e Certificação
</h3>
<p className="mb-3">
  A avaliação pode incluir provas escritas, práticas, trabalhos, participação ou outros
  métodos adequados, sendo a certificação atribuída aos formandos que cumpram os critérios
  definidos.
</p>

{/* ===================== CAPÍTULO XI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XI — Investigação, Publicações e Propriedade Intelectual
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 34.º — Investigação Científica
</h3>
<p className="mb-3">
  A Academia promove e apoia projetos de investigação científica, aplicada ou fundamental,
  respeitando princípios éticos, metodológicos e legais, incluindo normas de proteção de
  dados e integridade científica.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 35.º — Projetos e Protocolos de Investigação
</h3>
<p className="mb-3">
  Os projetos de investigação podem ser propostos por membros, docentes, parceiros
  institucionais ou entidades externas, dependendo a sua aprovação de parecer do Conselho
  Científico e validação da Direção.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 36.º — Publicações Científicas
</h3>
<p className="mb-3">
  A Academia pode editar revistas, relatórios, livros, manuais e outros materiais
  científicos, obedecendo a critérios de rigor, revisão por pares e conformidade ética.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 37.º — Propriedade Intelectual
</h3>
<p className="mb-3">
  Os direitos de autor sobre materiais produzidos no âmbito da Academia pertencem aos
  respetivos autores, salvo disposição contratual em contrário, podendo a Academia deter
  direitos de utilização e reprodução.
</p>

{/* ===================== CAPÍTULO XII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XII — Parcerias, Protocolos e Relações Institucionais
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 38.º — Parcerias Estratégicas
</h3>
<p className="mb-3">
  A Academia pode estabelecer parcerias com instituições de ensino superior, unidades de
  saúde, ordens profissionais, associações científicas, empresas tecnológicas e entidades
  públicas, respeitando princípios de independência e transparência.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 39.º — Protocolos de Cooperação
</h3>
<p className="mb-3">
  Os protocolos devem definir objetivos, responsabilidades, duração, mecanismos de avaliação
  e condições de renovação, sendo a sua celebração da competência da Direção.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 40.º — Representação Institucional
</h3>
<p className="mb-3">
  A Academia pode participar em redes, consórcios, comissões e grupos de trabalho nacionais
  e internacionais, sendo a representação assegurada pela Direção ou delegados designados.
</p>{/* ===================== CAPÍTULO IX (continuação) ===================== */}
<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 41.º — Supervisão Pedagógica
</h3>
<p className="mb-3">
  A supervisão pedagógica dos cursos é assegurada pela Coordenação, garantindo o cumprimento
  dos objetivos formativos, a qualidade dos conteúdos e a adequação das metodologias de ensino.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 42.º — Avaliação da Coordenação
</h3>
<p className="mb-3">
  A Coordenação é avaliada anualmente pela Direção, com base em indicadores de desempenho,
  qualidade pedagógica, cumprimento de metas e satisfação dos formandos.
</p>

{/* ===================== CAPÍTULO X (continuação) ===================== */}
<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 43.º — Direitos dos Formandos
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Receber formação de qualidade;</li>
  <li>Ser avaliados de forma justa e transparente;</li>
  <li>Aceder a recursos pedagógicos e apoio técnico;</li>
  <li>Apresentar reclamações e sugestões;</li>
  <li>Solicitar certificados e declarações.</li>
</ul>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 44.º — Deveres dos Formandos
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Respeitar regulamentos internos;</li>
  <li>Cumprir normas de assiduidade e participação;</li>
  <li>Utilizar adequadamente instalações e equipamentos;</li>
  <li>Manter conduta ética e profissional.</li>
</ul>

{/* ===================== CAPÍTULO XI (continuação) ===================== */}
<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 45.º — Revisão Científica
</h3>
<p className="mb-3">
  Todos os conteúdos científicos produzidos ou utilizados pela Academia devem ser sujeitos a
  revisão por especialistas qualificados, garantindo rigor, atualidade e relevância.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 46.º — Ética na Investigação
</h3>
<p className="mb-3">
  A investigação desenvolvida no âmbito da Academia deve respeitar normas éticas,
  incluindo consentimento informado, proteção de dados e integridade metodológica.
</p>

{/* ===================== CAPÍTULO XII (continuação) ===================== */}
<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 47.º — Critérios de Parceria
</h3>
<p className="mb-3">
  As parcerias devem ser estabelecidas com entidades que partilhem valores de ética,
  qualidade, responsabilidade social e rigor científico, sendo avaliadas periodicamente pela
  Direção.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 48.º — Cooperação Internacional
</h3>
<p className="mb-3">
  A Academia pode integrar redes internacionais de formação e investigação, promovendo
  mobilidade académica, intercâmbio científico e projetos conjuntos.
</p>

{/* ===================== CAPÍTULO XIII (continuação) ===================== */}
<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 49.º — Património da Academia
</h3>
<p className="mb-3">
  O património da Academia é constituído por bens móveis, imóveis, equipamentos,
  infraestruturas, direitos intelectuais e outros ativos adquiridos ou atribuídos à
  instituição.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 50.º — Gestão Patrimonial
</h3>
<p className="mb-3">
  A gestão patrimonial deve assegurar conservação, manutenção e valorização dos bens,
  garantindo a sua utilização adequada e sustentável.
</p>

{/* ===================== CAPÍTULO XIV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XIV — Segurança, Saúde e Bem-Estar
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 51.º — Segurança nas Instalações
</h3>
<p className="mb-3">
  A Academia deve garantir condições de segurança física e operacional, incluindo planos de
  emergência, acessibilidade e conformidade com normas legais.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 52.º — Saúde e Bem-Estar
</h3>
<p className="mb-3">
  A Academia promove um ambiente saudável, seguro e inclusivo, podendo implementar programas
  de apoio psicológico, prevenção de riscos e promoção de saúde.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 53.º — Prevenção de Assédio
</h3>
<p className="mb-3">
  A Academia adota políticas de prevenção e combate ao assédio moral, sexual ou
  institucional, garantindo confidencialidade e proteção das partes envolvidas.
</p>

{/* ===================== CAPÍTULO XV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XV — Sustentabilidade e Responsabilidade Ambiental
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 54.º — Princípios Ambientais
</h3>
<p className="mb-3">
  A Academia compromete-se a adotar práticas sustentáveis e ambientalmente responsáveis,
  promovendo a redução de impacto ecológico e o uso eficiente de recursos.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 55.º — Gestão de Resíduos
</h3>
<p className="mb-3">
  Devem ser implementados sistemas de separação, reciclagem e redução de resíduos,
  garantindo conformidade com normas ambientais.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 56.º — Eficiência Energética
</h3>
<p className="mb-3">
  A Academia promove o uso eficiente de energia e recursos naturais, podendo adotar
  tecnologias sustentáveis e sistemas de monitorização.
</p>

{/* ===================== CAPÍTULO XVI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XVI — Relações Internacionais
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 57.º — Cooperação Internacional
</h3>
<p className="mb-3">
  A Academia pode estabelecer relações com instituições estrangeiras para fins formativos,
  científicos ou culturais, promovendo intercâmbio e colaboração.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 58.º — Mobilidade Académica
</h3>
<p className="mb-3">
  Podem ser criados programas de mobilidade para docentes, formandos e investigadores,
  garantindo reconhecimento e equivalência de atividades.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 59.º — Projetos Internacionais
</h3>
<p className="mb-3">
  A Academia pode participar em projetos financiados por entidades internacionais,
  contribuindo para inovação, investigação e desenvolvimento global.
</p>

{/* ===================== CAPÍTULO XVII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XVII — Inovação e Desenvolvimento Tecnológico
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 60.º — Inovação Tecnológica
</h3>
<p className="mb-3">
  A Academia incentiva a inovação pedagógica, científica e tecnológica, promovendo o uso de
  ferramentas digitais, simulação clínica e tecnologias emergentes.
</p>{/* ===================== CAPÍTULO XVII (continuação) ===================== */}
<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 61.º — Desenvolvimento Tecnológico
</h3>
<p className="mb-3">
  A Academia promove o desenvolvimento de soluções tecnológicas aplicadas à formação em saúde,
  incluindo plataformas digitais, simulação clínica e ferramentas de apoio à aprendizagem.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 62.º — Transferência de Conhecimento
</h3>
<p className="mb-3">
  A Academia incentiva a transferência de conhecimento para o setor da saúde, promovendo
  iniciativas que aproximem a investigação da prática clínica.
</p>

{/* ===================== CAPÍTULO XVIII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XVIII — Regime Jurídico Complementar
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 63.º — Aplicação Subsidiária
</h3>
<p className="mb-3">
  Em tudo o que não estiver previsto nos presentes Estatutos, aplica-se a legislação
  portuguesa aplicável às entidades formativas, científicas e académicas.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 64.º — Interpretação
</h3>
<p className="mb-3">
  A interpretação dos Estatutos deve respeitar a missão, valores e princípios da Academia,
  prevalecendo sempre o interesse institucional e o rigor científico.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 65.º — Regulamentos Complementares
</h3>
<p className="mb-3">
  A Academia pode aprovar regulamentos adicionais para matérias específicas, desde que não
  contrariem os presentes Estatutos.
</p>

{/* ===================== CAPÍTULO XIX ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XIX — Disposições Transitórias
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 66.º — Implementação Faseada
</h3>
<p className="mb-3">
  A implementação dos presentes Estatutos pode ser faseada, conforme decisão fundamentada da
  Direção, tendo em conta recursos, prioridades e necessidades institucionais.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 67.º — Adaptação de Estruturas
</h3>
<p className="mb-3">
  As estruturas existentes devem adaptar-se progressivamente às disposições estatutárias,
  garantindo continuidade das atividades e estabilidade organizacional.
</p>

{/* ===================== CAPÍTULO XX ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XX — Revisão e Atualização dos Estatutos
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 68.º — Revisão Periódica
</h3>
<p className="mb-3">
  Os Estatutos devem ser revistos periodicamente, preferencialmente a cada cinco anos, ou
  sempre que alterações legislativas ou institucionais o justifiquem.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 69.º — Processo de Revisão
</h3>
<p className="mb-3">
  A revisão estatutária é proposta pela Direção, analisada pelo Conselho Científico e
  aprovada pela entidade instituidora, entrando em vigor após publicação interna.
</p>

{/* ===================== CAPÍTULO XXI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXI — Gestão Documental e Arquivo Institucional
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 70.º — Sistema de Gestão Documental
</h3>
<p className="mb-3">
  A Academia implementa um sistema de gestão documental que assegura organização,
  conservação, integridade e acessibilidade dos documentos institucionais.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 71.º — Arquivo Institucional
</h3>
<p className="mb-3">
  O arquivo institucional integra documentos administrativos, científicos, pedagógicos e
  históricos relevantes, sendo o seu acesso regulado por normas internas.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 72.º — Conservação e Eliminação
</h3>
<p className="mb-3">
  A conservação e eliminação de documentos obedecem a prazos legais e internos, devendo a
  eliminação ser registada e realizada de forma segura.
</p>

{/* ===================== CAPÍTULO XXII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXII — Ética Científica e Integridade Académica
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 73.º — Princípios de Integridade Académica
</h3>
<p className="mb-3">
  A Academia promove a integridade académica, rejeitando práticas como plágio, falsificação
  de dados, fraude científica ou apropriação indevida de autoria.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 74.º — Condutas Proibidas
</h3>
<ul className="list-disc ml-6 mb-3">
  <li>Manipulação de resultados;</li>
  <li>Submissão de trabalhos alheios como próprios;</li>
  <li>Violação de normas éticas de investigação;</li>
  <li>Ocultação de conflitos de interesse.</li>
</ul>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 75.º — Procedimentos de Investigação Ética
</h3>
<p className="mb-3">
  Suspeitas de violação ética devem ser comunicadas ao Conselho Deontológico e Ético, que
  conduz investigação confidencial, garantindo contraditório e imparcialidade.
</p>

{/* ===================== CAPÍTULO XXIII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXIII — Relações com Entidades Externas
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 76.º — Colaboração com Entidades Públicas
</h3>
<p className="mb-3">
  A Academia pode colaborar com entidades públicas, incluindo ministérios, hospitais,
  centros de saúde e organismos reguladores, respeitando o interesse público.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 77.º — Colaboração com Entidades Privadas
</h3>
<p className="mb-3">
  A Academia pode estabelecer relações com entidades privadas, desde que não comprometam a
  sua independência científica e pedagógica.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 78.º — Representação em Fóruns Externos
</h3>
<p className="mb-3">
  A Academia pode participar em fóruns, comissões e redes de cooperação nacionais e
  internacionais, sendo representada por delegados designados pela Direção.
</p>

{/* ===================== CAPÍTULO XXIV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXIV — Regime de Propriedade e Utilização de Instalações
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 79.º — Propriedade das Instalações
</h3>
<p className="mb-3">
  As instalações utilizadas pela Academia podem ser próprias, arrendadas ou cedidas por
  entidades parceiras, devendo cumprir normas de segurança e acessibilidade.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 80.º — Utilização por Terceiros
</h3>
<p className="mb-3">
  A Academia pode autorizar a utilização das suas instalações por entidades externas,
  mediante condições definidas pela Direção e compatíveis com a missão institucional.
</p>{/* ===================== CAPÍTULO XXV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXV — Inovação e Desenvolvimento Tecnológico
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 81.º — Inovação Pedagógica
</h3>
<p className="mb-3">
  A Academia promove metodologias pedagógicas inovadoras, incluindo aprendizagem ativa,
  simulação clínica, ensino híbrido e tecnologias emergentes aplicadas à formação em saúde.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 82.º — Projetos Piloto
</h3>
<p className="mb-3">
  A Academia pode implementar projetos piloto destinados a testar novas abordagens
  formativas, devendo os resultados ser avaliados e documentados para melhoria contínua.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 83.º — Avaliação da Inovação
</h3>
<p className="mb-3">
  A eficácia das metodologias inovadoras deve ser avaliada periodicamente, com base em
  indicadores de aprendizagem, satisfação dos formandos e impacto profissional.
</p>

{/* ===================== CAPÍTULO XXVI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXVI — Inclusão, Igualdade e Acessibilidade
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 84.º — Princípios de Inclusão
</h3>
<p className="mb-3">
  A Academia promove a igualdade de oportunidades e combate qualquer forma de discriminação,
  assegurando um ambiente inclusivo e respeitador da diversidade.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 85.º — Acessibilidade
</h3>
<p className="mb-3">
  As instalações, plataformas digitais e materiais pedagógicos devem ser acessíveis a todos
  os utilizadores, incluindo pessoas com necessidades especiais.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 86.º — Apoio a Necessidades Especiais
</h3>
<p className="mb-3">
  A Academia pode disponibilizar medidas de apoio personalizadas a formandos com necessidades
  específicas, garantindo condições adequadas de aprendizagem.
</p>

{/* ===================== CAPÍTULO XXVII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXVII — Segurança Clínica em Atividades Práticas
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 87.º — Segurança em Simulação Clínica
</h3>
<p className="mb-3">
  As atividades de simulação clínica devem cumprir normas de segurança, protocolos técnicos
  e boas práticas, garantindo a integridade dos participantes e a fiabilidade dos cenários.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 88.º — Supervisão
</h3>
<p className="mb-3">
  Todas as atividades práticas devem ser supervisionadas por profissionais qualificados,
  assegurando orientação adequada e prevenção de riscos.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 89.º — Gestão de Incidentes
</h3>
<p className="mb-3">
  Incidentes ocorridos durante atividades práticas devem ser registados, analisados e
  comunicados à Direção, podendo originar medidas corretivas.
</p>

{/* ===================== CAPÍTULO XXVIII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXVIII — Certificação Profissional
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 90.º — Certificação Profissional
</h3>
<p className="mb-3">
  A Academia pode emitir certificações profissionais reconhecidas por entidades externas,
  desde que cumpridos os requisitos legais e regulamentares aplicáveis.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 91.º — Critérios de Certificação
</h3>
<p className="mb-3">
  Os critérios de certificação incluem assiduidade, avaliação, participação e cumprimento de
  requisitos específicos definidos em regulamento pedagógico.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 92.º — Revogação de Certificação
</h3>
<p className="mb-3">
  A certificação pode ser revogada em caso de fraude, irregularidades, violação ética ou
  incumprimento grave das normas da Academia.
</p>

{/* ===================== CAPÍTULO XXIX ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXIX — Cooperação com Unidades de Saúde
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 93.º — Cooperação Clínica
</h3>
<p className="mb-3">
  A Academia pode cooperar com hospitais, clínicas e centros de saúde para o desenvolvimento
  de atividades formativas, estágios e projetos conjuntos.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 94.º — Estágios e Práticas Clínicas
</h3>
<p className="mb-3">
  Os estágios e práticas clínicas devem cumprir normas legais, éticas e de segurança,
  garantindo condições adequadas de aprendizagem e supervisão.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 95.º — Responsabilidade Institucional
</h3>
<p className="mb-3">
  A Academia e as unidades parceiras devem definir responsabilidades e obrigações em
  protocolo próprio, assegurando clareza e segurança jurídica.
</p>

{/* ===================== CAPÍTULO XXX ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXX — Tecnologias de Saúde
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 96.º — Tecnologias de Saúde
</h3>
<p className="mb-3">
  A Academia pode desenvolver, utilizar ou apoiar tecnologias aplicadas à saúde, incluindo
  inteligência artificial, telemedicina, dispositivos médicos e sistemas de apoio clínico.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 97.º — Avaliação Tecnológica
</h3>
<p className="mb-3">
  A adoção de novas tecnologias deve ser precedida de avaliação técnica, científica e ética,
  garantindo segurança, eficácia e conformidade legal.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 98.º — Segurança Tecnológica
</h3>
<p className="mb-3">
  A utilização de tecnologias de saúde deve respeitar normas de segurança, proteção de dados
  e regulamentação aplicável, prevenindo riscos e incidentes.
</p>

{/* ===================== CAPÍTULO XXXI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXI — Responsabilidade Social
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 99.º — Projetos de Responsabilidade Social
</h3>
<p className="mb-3">
  A Academia pode desenvolver projetos de impacto social na área da saúde, contribuindo para
  a melhoria das condições de vida das comunidades.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 100.º — Voluntariado
</h3>
<p className="mb-3">
  Podem ser criados programas de voluntariado para membros, docentes e formandos, promovendo
  solidariedade e participação cívica.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 101.º — Parcerias Comunitárias
</h3>
<p className="mb-3">
  A Academia pode colaborar com organizações comunitárias para ações de saúde pública,
  prevenção e educação para a saúde.
</p>

{/* ===================== CAPÍTULO XXXII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXII — Sustentabilidade Financeira
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 102.º — Planeamento Financeiro
</h3>
<p className="mb-3">
  A Academia deve elaborar planos financeiros anuais e plurianuais, garantindo estabilidade,
  sustentabilidade e cumprimento das obrigações legais.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 103.º — Fundos e Reservas
</h3>
<p className="mb-3">
  Podem ser constituídos fundos de reserva destinados a assegurar a continuidade das
  atividades e a cobertura de imprevistos.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 104.º — Controlo Orçamental
</h3>
<p className="mb-3">
  A execução orçamental deve ser monitorizada regularmente, permitindo ajustes e correções
  necessárias ao equilíbrio financeiro.
</p>

{/* ===================== CAPÍTULO XXXIII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXIII — Revisão Científica e Pedagógica
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 105.º — Revisão Científica
</h3>
<p className="mb-3">
  Os conteúdos formativos devem ser revistos periodicamente por especialistas, garantindo
  rigor, atualidade e relevância científica.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 106.º — Revisão Pedagógica
</h3>
<p className="mb-3">
  As metodologias pedagógicas devem ser avaliadas e atualizadas, assegurando eficácia e
  adequação às necessidades dos formandos.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 107.º — Relatórios de Qualidade
</h3>
<p className="mb-3">
  A Academia elabora relatórios anuais de qualidade científica e pedagógica, que servem de
  base à melhoria contínua.
</p>

{/* ===================== CAPÍTULO XXXIV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXIV — Disposições Complementares
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 108.º — Integração Normativa
</h3>
<p className="mb-3">
  Os presentes Estatutos integram-se no quadro normativo do SAMS e das entidades parceiras,
  prevalecendo sempre que aplicável.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 109.º — Casos Omissos
</h3>
<p className="mb-3">
  Os casos omissos são resolvidos pela Direção, com parecer do Conselho Científico quando
  necessário, respeitando princípios de legalidade e ética.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 110.º — Entrada em Vigor
</h3>
<p className="mb-3">
  Os presentes Estatutos entram em vigor após aprovação formal e publicação interna,
  substituindo quaisquer versões anteriores.
</p>{/* ===================== CAPÍTULO XXXV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXV — Conflitos de Interesse
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 111.º — Identificação de Conflitos
</h3>
<p className="mb-3">
  Todos os membros, colaboradores e parceiros devem declarar situações que possam configurar
  conflitos de interesse, garantindo transparência e integridade institucional.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 112.º — Gestão de Conflitos
</h3>
<p className="mb-3">
  A Direção deve implementar mecanismos de prevenção, mitigação e gestão de conflitos de
  interesse, assegurando imparcialidade nas decisões.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 113.º — Consequências
</h3>
<p className="mb-3">
  A omissão ou ocultação de conflitos de interesse constitui infração disciplinar, podendo
  originar medidas corretivas ou sancionatórias.
</p>

{/* ===================== CAPÍTULO XXXVI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXVI — Responsabilidade Civil e Penal
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 114.º — Responsabilidade Civil
</h3>
<p className="mb-3">
  A Academia responde civilmente por danos causados por ação ou omissão dos seus órgãos,
  nos termos da lei, quando atuem no exercício das suas funções.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 115.º — Responsabilidade Individual
</h3>
<p className="mb-3">
  Os membros respondem individualmente por atos praticados com dolo ou negligência grave,
  que resultem em prejuízo para a Academia ou terceiros.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 116.º — Responsabilidade Penal
</h3>
<p className="mb-3">
  A Academia e os seus membros estão sujeitos à legislação penal aplicável, nomeadamente em
  matéria de proteção de dados, fraude, corrupção e segurança digital.
</p>

{/* ===================== CAPÍTULO XXXVII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXVII — Comunicação e Imagem Institucional
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 117.º — Comunicação Institucional
</h3>
<p className="mb-3">
  A comunicação externa deve refletir a missão, valores e identidade da Academia, sendo
  coordenada pela Direção ou por equipa designada para o efeito.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 118.º — Normas de Identidade Visual
</h3>
<p className="mb-3">
  A Academia pode definir normas gráficas e orientações de comunicação, garantindo coerência
  na utilização da marca e dos seus elementos visuais.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 119.º — Comunicação Digital
</h3>
<p className="mb-3">
  A utilização das plataformas digitais da Academia deve respeitar regras de segurança,
  conduta e proteção de dados, podendo ser monitorizada para garantir integridade e
  conformidade.
</p>

{/* ===================== CAPÍTULO XXXVIII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXVIII — Plataformas Digitais e Tecnologia
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 120.º — Sistemas Digitais
</h3>
<p className="mb-3">
  A Academia utiliza sistemas digitais para gestão formativa, administrativa e científica,
  devendo garantir segurança, acessibilidade e eficiência tecnológica.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 121.º — Cibersegurança
</h3>
<p className="mb-3">
  A Academia implementa medidas de cibersegurança para proteção de dados, sistemas e
  infraestruturas digitais, devendo incidentes ser reportados de imediato à Direção.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 122.º — Uso Responsável
</h3>
<p className="mb-3">
  O uso das plataformas digitais deve respeitar normas internas, sendo proibidas práticas
  que comprometam a segurança, integridade ou reputação institucional.
</p>

{/* ===================== CAPÍTULO XXXIX ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XXXIX — Auditoria e Melhoria Contínua
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 123.º — Auditorias Internas
</h3>
<p className="mb-3">
  A Academia pode realizar auditorias internas regulares para verificar conformidade com
  normas legais, regulamentos internos e boas práticas de gestão.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 124.º — Auditorias Externas
</h3>
<p className="mb-3">
  Podem ser contratadas entidades externas para auditorias especializadas, nomeadamente em
  áreas de qualidade, segurança, proteção de dados e compliance.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 125.º — Indicadores de Desempenho
</h3>
<p className="mb-3">
  A Academia define indicadores de desempenho pedagógico, científico e administrativo,
  revistos anualmente e divulgados internamente.
</p>

{/* ===================== CAPÍTULO XL ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XL — Sustentabilidade Institucional
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 126.º — Planeamento Estratégico
</h3>
<p className="mb-3">
  A Academia elabora planos estratégicos plurianuais que orientam o desenvolvimento
  institucional, alinhados com a missão e visão da organização.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 127.º — Avaliação Institucional
</h3>
<p className="mb-3">
  A Academia realiza avaliações internas e externas para medir desempenho, impacto e
  qualidade das suas atividades, promovendo melhoria contínua.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 128.º — Atualização Normativa
</h3>
<p className="mb-3">
  Os presentes Estatutos podem ser atualizados para refletir alterações legais, científicas
  ou organizacionais, mediante aprovação da Direção.
</p>

{/* ===================== CAPÍTULO XLI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLI — Integração no Universo SAMS
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 129.º — Enquadramento Institucional
</h3>
<p className="mb-3">
  A Academia integra-se no universo institucional do SAMS, respeitando a sua missão, valores
  e orientações estratégicas, colaborando com as suas unidades e serviços.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 130.º — Articulação Interna
</h3>
<p className="mb-3">
  A articulação com outras unidades SAMS é definida em protocolo interno, garantindo
  cooperação, eficiência e alinhamento estratégico.
</p>

{/* ===================== CAPÍTULO XLII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLII — Disposições Finais
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 131.º — Publicação Interna
</h3>
<p className="mb-3">
  Os presentes Estatutos devem ser divulgados internamente através dos canais oficiais da
  Academia, garantindo acesso a todos os membros e utilizadores.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 132.º — Entrada em Vigor
</h3>
<p className="mb-3">
  Os Estatutos entram em vigor na data da sua aprovação formal pela entidade competente.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 133.º — Revisão Extraordinária
</h3>
<p className="mb-3">
  A revisão extraordinária pode ser realizada sempre que circunstâncias excecionais o
  justifiquem, mediante deliberação fundamentada da Direção.
</p>

{/* ===================== CAPÍTULO XLIII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLIII — Encerramento e Dissolução
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 134.º — Encerramento de Atividades
</h3>
<p className="mb-3">
  O encerramento de atividades formativas ou científicas deve ser comunicado com
  antecedência, garantindo a conclusão dos processos em curso e a proteção dos formandos.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 135.º — Dissolução da Academia
</h3>
<p className="mb-3">
  A dissolução da Academia só pode ocorrer por deliberação da entidade instituidora, sendo
  definidos os procedimentos de liquidação e destino do património.
</p>

{/* ===================== CAPÍTULO XLIV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLIV — Disposições Transitórias e Complementares
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 136.º — Continuidade das Atividades
</h3>
<p className="mb-3">
  As atividades em curso à data de entrada em vigor destes Estatutos mantêm-se válidas,
  devendo adaptar-se progressivamente às novas disposições.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 137.º — Validade de Documentos Anteriores
</h3>
<p className="mb-3">
  Regulamentos, normas e orientações anteriores mantêm-se em vigor naquilo que não contrariar
  os presentes Estatutos, até aprovação de novos documentos.
</p>

{/* ===================== CAPÍTULO XLV ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLV — Normas Complementares
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 138.º — Emissão de Regulamentos
</h3>
<p className="mb-3">
  A Direção pode emitir regulamentos complementares para execução dos Estatutos, desde que
  respeitem os princípios e objetivos institucionais.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 139.º — Revisão de Regulamentos
</h3>
<p className="mb-3">
  Os regulamentos internos devem ser revistos periodicamente, garantindo alinhamento com
  alterações legais, científicas e organizacionais.
</p>

{/* ===================== CAPÍTULO XLVI ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLVI — Disposições de Encerramento
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 140.º — Norma Revogatória
</h3>
<p className="mb-3">
  São revogadas todas as disposições internas que contrariem os presentes Estatutos ou que
  se revelem incompatíveis com a sua aplicação.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 141.º — Casos Especiais
</h3>
<p className="mb-3">
  Situações excecionais não previstas nos Estatutos serão resolvidas pela Direção, com
  parecer do Conselho Científico quando necessário.
</p>

{/* ===================== CAPÍTULO XLVII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLVII — Entrada em Vigor
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 142.º — Data de Vigência
</h3>
<p className="mb-3">
  Os presentes Estatutos entram em vigor imediatamente após a sua aprovação formal e
  divulgação oficial.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 143.º — Aplicação Imediata
</h3>
<p className="mb-3">
  As disposições estatutárias aplicam-se de imediato a todos os membros, órgãos e atividades
  da Academia.
</p>

{/* ===================== CAPÍTULO XLVIII ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLVIII — Disposições Complementares Finais
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 144.º — Continuidade Institucional
</h3>
<p className="mb-3">
  A Academia compromete-se a assegurar continuidade institucional, garantindo estabilidade,
  qualidade e responsabilidade social em todas as suas atividades.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 145.º — Cooperação Permanente
</h3>
<p className="mb-3">
  A Academia promove cooperação permanente com entidades públicas, privadas e académicas,
  reforçando a sua missão e impacto social.
</p>

{/* ===================== CAPÍTULO XLIX ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo XLIX — Normas de Interpretação
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 146.º — Princípios Interpretativos
</h3>
<p className="mb-3">
  A interpretação dos Estatutos deve respeitar os princípios de legalidade, ética,
  transparência e rigor científico, privilegiando sempre o interesse institucional.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 147.º — Resolução de Dúvidas
</h3>
<p className="mb-3">
  Dúvidas interpretativas devem ser submetidas à Direção, que poderá solicitar parecer ao
  Conselho Científico ou ao Conselho Deontológico e Ético.
</p>

{/* ===================== CAPÍTULO L (FINAL) ===================== */}
<h2 className="text-2xl font-bold text-[#0A2443] mt-10 mb-4">
  Capítulo L — Encerramento dos Estatutos
</h2>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 148.º — Consolidação
</h3>
<p className="mb-3">
  Os presentes Estatutos consolidam todas as normas estruturantes da Academia, constituindo
  o documento orientador máximo da sua atividade.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 149.º — Revisão Global
</h3>
<p className="mb-3">
  A revisão global dos Estatutos deve ocorrer sempre que alterações estruturais, legais ou
  estratégicas o justifiquem, garantindo a sua atualização, coerência e adequação às
  necessidades da Academia e do setor da saúde.
</p>

<h3 className="text-xl font-semibold text-[#0A2443] mt-6 mb-2">
  Artigo 150.º — Disposição Final
</h3>
<p className="mb-3">
  Os presentes Estatutos completam a estrutura normativa da Academia e prevalecem sobre
  quaisquer disposições internas anteriores, entrando plenamente em vigor após a sua
  aprovação e publicação oficial.
   </p>
   </div>
        </section>

        {/* ============================================================
            TERMOS E CONDIÇÕES — AZUL ESCURO
        ============================================================ */}
        <section id="termos" className="w-full bg-[#0A2443]/90 py-20">
          <div className="max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-4xl font-bold mb-10">Termos e Condições</h1>

            <p className="text-lg mb-6">
              Os presentes Termos e Condições regulam o acesso e utilização da plataforma
              SAMS Medical Academy, assegurando que todos os utilizadores compreendem os
              direitos, deveres e limites associados ao seu uso.
            </p>

            <h2 className="text-2xl font-semibold mb-4">1. Acesso à Plataforma</h2>
            <p className="mb-4">
              O acesso é concedido exclusivamente a profissionais, estudantes ou colaboradores
              autorizados. O utilizador compromete‑se a manter a confidencialidade das suas
              credenciais e a fornecer informações verdadeiras.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Utilização Permitida</h2>
            <p className="mb-4">
              Todo o conteúdo disponibilizado — vídeos, documentos, módulos formativos e
              materiais pedagógicos — destina‑se exclusivamente a fins educativos. É proibida
              a reprodução, distribuição ou utilização comercial sem autorização.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades do Utilizador</h2>
            <p className="mb-4">
              O utilizador compromete‑se a utilizar a plataforma de forma ética, responsável
              e em conformidade com a legislação aplicável, abstendo‑se de ações que possam
              comprometer a segurança ou integridade do sistema.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Alterações aos Termos</h2>
            <p className="mb-4">
              O SAMS Medical Academy reserva‑se o direito de atualizar estes Termos sempre que
              necessário, entrando as alterações em vigor após publicação.
            </p>
          </div>
        </section>

        {/* ============================================================
            POLÍTICA DE PRIVACIDADE — VERMELHO SUAVE
        ============================================================ */}
        <section id="privacidade" className="w-full bg-[#B30000]/80 py-20">
          <div className="max-w-5xl mx-auto px-6 text-white">
            <h1 className="text-4xl font-bold mb-10">Política de Privacidade</h1>

            <p className="text-lg mb-6">
              Esta Política de Privacidade descreve como o SAMS Medical Academy recolhe,
              utiliza, armazena e protege os dados pessoais dos utilizadores, em conformidade
              com o RGPD.
            </p>

            <h2 className="text-2xl font-semibold mb-4">1. Dados Recolhidos</h2>
            <p className="mb-4">
              Podem ser recolhidos dados como nome, email institucional, número de colaborador,
              área profissional, histórico de formação e interações na plataforma.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Finalidades</h2>
            <p className="mb-4">
              Os dados são utilizados para gestão de acessos, certificação de formações,
              melhoria contínua dos conteúdos e comunicação institucional.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Conservação</h2>
            <p className="mb-4">
              Os dados são conservados apenas pelo período necessário para cumprir as finalidades
              descritas, sendo posteriormente eliminados ou anonimizados.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Direitos do Titular</h2>
            <p className="mb-4">
              O utilizador pode solicitar acesso, retificação, eliminação ou limitação do
              tratamento dos seus dados, nos termos da legislação aplicável.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Segurança</h2>
            <p className="mb-4">
              O SAMS Medical Academy implementa medidas técnicas e organizativas adequadas
              para garantir a proteção dos dados pessoais.
            </p>
          </div>
        </section>

        {/* ============================================================
            CÓDIGO DE CONDUTA — BRANCO
        ============================================================ */}
        <section id="conduta" className="w-full bg-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-[#0A2443]">
            <h1 className="text-4xl font-bold mb-10">Código de Conduta</h1>

            <p className="text-lg mb-6">
              O Código de Conduta estabelece os princípios éticos e comportamentais que orientam
              todos os utilizadores, formadores e colaboradores da plataforma.
            </p>

            <h2 className="text-2xl font-semibold mb-4">1. Integridade e Ética</h2>
            <p className="mb-4">
              Todos devem agir com honestidade, respeito e responsabilidade, promovendo um
              ambiente de aprendizagem seguro e inclusivo.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Respeito e Confidencialidade</h2>
            <p className="mb-4">
              É obrigatório respeitar a privacidade e dignidade de todos, mantendo confidenciais
              quaisquer informações sensíveis.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Uso Adequado</h2>
            <p className="mb-4">
              A plataforma deve ser utilizada exclusivamente para fins formativos. É proibido
              qualquer uso abusivo ou ofensivo.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Consequências</h2>
            <p className="mb-4">
              O incumprimento deste Código pode resultar em suspensão de acesso ou outras
              medidas disciplinares internas.
            </p>
          </div>
        </section>

        {/* ============================================================
            BOTÃO VOLTAR AO INÍCIO — SCROLL SUAVE
        ============================================================ */}
        <div className="w-full flex justify-center py-16">
          <a
            href="#"
            className="px-10 py-4 bg-[#0A2443] text-white text-xl font-semibold rounded-full shadow-lg hover:bg-[#0A2443]/80 transition-all duration-300"
          >
            Voltar ao Início
          </a>
        </div>

      </div>
    </main>
  );
}