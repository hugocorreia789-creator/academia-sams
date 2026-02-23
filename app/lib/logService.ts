import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Todas as ações possíveis
export const LogActions = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SESSAO_EXPIRADA: "SESSAO_EXPIRADA",
  SESSAO_RENOVADA: "SESSAO_RENOVADA",

  ACESSO_DASHBOARD: "ACESSO_DASHBOARD",
  ACESSO_ADMIN: "ACESSO_ADMIN",
  ACESSO_GESTOR: "ACESSO_GESTOR",
  ACESSO_FORMADOR: "ACESSO_FORMADOR",

  ACESSO_CANDIDATURAS: "ACESSO_CANDIDATURAS",
  ACESSO_CANDIDATURA: "ACESSO_CANDIDATURA",

  ACESSO_EXAMES: "ACESSO_EXAMES",

  ACESSO_NEGADO: "ACESSO_NEGADO",

  CANDIDATURA_ABERTA: "CANDIDATURA_ABERTA",
  CANDIDATURA_APROVADA: "CANDIDATURA_APROVADA",
  CANDIDATURA_REJEITADA: "CANDIDATURA_REJEITADA",
  CANDIDATURA_EDITADA: "CANDIDATURA_EDITADA",

  EXAME_CRIADO: "EXAME_CRIADO",
  EXAME_INICIADO: "EXAME_INICIADO",
  EXAME_REALIZADO: "EXAME_REALIZADO",
  EXAME_EDITADO: "EXAME_EDITADO",

  PERFIL_EDITADO: "PERFIL_EDITADO",
  PASSWORD_ALTERADA: "PASSWORD_ALTERADA",

  ERRO: "ERRO",
  ERRO_API: "ERRO_API",
  ERRO_CSV: "ERRO_CSV",
  ERRO_PERMISSOES: "ERRO_PERMISSOES",
  ERRO_AUTENTICACAO: "ERRO_AUTENTICACAO",
  ERRO_FORMULARIO: "ERRO_FORMULARIO",
} as const;

export type LogActionType = typeof LogActions[keyof typeof LogActions];

// Função principal de logs
export async function logEvent(
  userEmail: string,
  action: LogActionType,
  details: string
) {
  try {
    await supabase.from("logs").insert({
      user_email: userEmail,
      action,
      details,
    });
  } catch (err) {
    console.error("Erro ao gravar log:", err);
  }
}

// Interpretação automática do pathname
export function getNavigationAction(user, pathname: string, candidaturas = []) {
  if (pathname === "/academia/dashboard") {
    return {
      action: LogActions.ACESSO_DASHBOARD,
      details: `O utilizador ${user.nome} acedeu ao Dashboard`,
    };
  }

  if (pathname === "/academia/dashboard/admin") {
    return {
      action: LogActions.ACESSO_ADMIN,
      details: `O utilizador ${user.nome} acedeu ao Painel de Administração`,
    };
  }

  if (pathname === "/academia/dashboard/gestor") {
    return {
      action: LogActions.ACESSO_GESTOR,
      details: `O utilizador ${user.nome} acedeu ao Painel de Gestor`,
    };
  }

  if (pathname === "/academia/dashboard/formador") {
    return {
      action: LogActions.ACESSO_FORMADOR,
      details: `O utilizador ${user.nome} acedeu ao Painel de Formador`,
    };
  }

  if (pathname === "/academia/candidaturas") {
    return {
      action: LogActions.ACESSO_CANDIDATURAS,
      details: `O utilizador ${user.nome} acedeu à lista de candidaturas`,
    };
  }

  if (pathname.startsWith("/academia/candidaturas/")) {
    const id = pathname.split("/").pop();
    const candidatura = candidaturas.find((c) => c.id === id);

    if (candidatura) {
      return {
        action: LogActions.ACESSO_CANDIDATURA,
        details: `O utilizador ${user.nome} abriu a candidatura do candidato ${candidatura.nome}`,
      };
    }
  }

  if (pathname.startsWith("/academia/exames")) {
    return {
      action: LogActions.ACESSO_EXAMES,
      details: `O utilizador ${user.nome} acedeu à área de exames`,
    };
  }

  return {
    action: LogActions.ERRO,
    details: `O utilizador ${user.nome} navegou para uma página desconhecida (${pathname})`,
  };
}

// Helpers para ações manuais
export const LogActionsHelper = {
  login: (user) =>
    logEvent(
      user.email,
      LogActions.LOGIN,
      `O utilizador ${user.nome} iniciou sessão`
    ),

  logout: (user) =>
    logEvent(
      user.email,
      LogActions.LOGOUT,
      `O utilizador ${user.nome} terminou sessão`
    ),

  candidaturaAprovada: (user, candidatoNome) =>
    logEvent(
      user.email,
      LogActions.CANDIDATURA_APROVADA,
      `O gestor ${user.nome} aprovou a candidatura do candidato ${candidatoNome}`
    ),

  candidaturaRejeitada: (user, candidatoNome) =>
    logEvent(
      user.email,
      LogActions.CANDIDATURA_REJEITADA,
      `O gestor ${user.nome} rejeitou a candidatura do candidato ${candidatoNome}`
    ),

  exameRealizado: (user, candidatoNome) =>
    logEvent(
      user.email,
      LogActions.EXAME_REALIZADO,
      `O formador ${user.nome} avaliou o candidato ${candidatoNome}`
    ),

  erro: (user, mensagem) =>
    logEvent(
      user.email,
      LogActions.ERRO,
      `Erro ocorrido: ${mensagem}`
    ),
};