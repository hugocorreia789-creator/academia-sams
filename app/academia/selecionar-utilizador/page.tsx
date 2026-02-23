"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

type Role = "admin" | "formador";

type Formador = {
  id: string;
  codigo_utilizador: string;
  nome: string | null;
  role: Role;
};

export default function SelecionarUtilizador() {
  const router = useRouter();
  const [formadores, setFormadores] = useState<Formador[]>([]);
  const [loading, setLoading] = useState(true);

  // ESTADOS DO MODAL
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Formador | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFormadores() {
      const { data, error } = await supabase
        .from("Formadores")
        .select("*");

      if (!error && data) {
        const ordemRole: Record<Role, number> = {
          admin: 1,
          formador: 2,
        };

        const ordenados = (data as Formador[]).sort((a, b) => {
          if (ordemRole[a.role] !== ordemRole[b.role]) {
            return ordemRole[a.role] - ordemRole[b.role];
          }

          return (a.nome ?? "").localeCompare(b.nome ?? "");
        });

        setFormadores(ordenados);
      }

      setLoading(false);
    }

    fetchFormadores();
  }, []);

  // ABRIR MODAL AO CLICAR NO UTILIZADOR
  function escolherFormador(formador: Formador) {
    setSelectedUser(formador);
    setPassword("");
    setError("");
    setShowPasswordModal(true);
  }

  // VALIDAR PASSWORD + LIMITE DE TENTATIVAS
  async function validarPassword() {
    if (!selectedUser) return;

    // 1. Buscar password + tentativas + bloqueio
    const { data: userData, error: userError } = await supabase
      .from("Formadores")
      .select("password, tentativas, bloqueado_ate")
      .eq("id", selectedUser.id)
      .single();

    if (userError || !userData) {
      setError("Erro ao validar utilizador");
      return;
    }

    const agora = new Date();

    // 2. Verificar se está bloqueado
    if (userData.bloqueado_ate) {
      const bloqueadoAte = new Date(userData.bloqueado_ate);

      if (bloqueadoAte.getTime() > agora.getTime()) {
        const minutos = Math.ceil(
          (bloqueadoAte.getTime() - agora.getTime()) / 60000
        );

        setError(
          `Conta bloqueada. Tenta novamente dentro de ${minutos} minuto${
            minutos > 1 ? "s" : ""
          }.`
        );
        return;
      }
    }

    // 3. Validar password
    const passwordCorreta = userData.password === password;

    if (!passwordCorreta) {
      const tentativasAtuais = userData.tentativas || 0;
      const novasTentativas = tentativasAtuais + 1;

      const updateData: any = { tentativas: novasTentativas };

      // 4. Se chegou a 5 tentativas → bloquear 10 minutos
      if (novasTentativas >= 5) {
        const bloqueio = new Date();
        bloqueio.setMinutes(bloqueio.getMinutes() + 10);
        updateData.bloqueado_ate = bloqueio.toISOString();
      }

      await supabase
        .from("Formadores")
        .update(updateData)
        .eq("id", selectedUser.id);

      setError(
        novasTentativas >= 5
          ? "Conta bloqueada por tentativas falhadas. Tenta novamente mais tarde."
          : "Password incorreta"
      );

      return;
    }

    // 5. Password correta → reset tentativas e bloqueio
    await supabase
      .from("Formadores")
      .update({ tentativas: 0, bloqueado_ate: null })
      .eq("id", selectedUser.id);

    // 6. Login normal
    localStorage.setItem("formadorSelecionado", JSON.stringify(selectedUser));
    setShowPasswordModal(false);
    router.push("/academia/dashboard");
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg">
        <div className="w-full px-6 py-4 flex items-center justify-center relative">

          {/* Título centrado */}
          <h2 className="text-white text-xl font-semibold tracking-wide drop-shadow text-center">
            SAMS Medical Academy
          </h2>

          {/* Botão no canto direito */}
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all absolute right-6"
          >
            Página Inicial
          </button>
        </div>
      </nav>

      {/* ================= FUNDO FULLSCREEN ================= */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat blur-[8px] brightness-[0.55]"
        style={{ backgroundImage: "url('/hospital 4.png')" }}
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

      {/* ================= CONTEÚDO ================= */}
      <div className="relative z-20 p-6 max-w-4xl mx-auto pt-32">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-2xl mb-10 text-center tracking-wide">
          Selecionar Utilizador
        </h1>

        {loading ? (
          <p className="text-white text-center text-lg">A carregar...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formadores.map((f) => (
              <button
                key={f.id}
                onClick={() => escolherFormador(f)}
                className={`
                  group p-6 rounded-2xl shadow-2xl backdrop-blur-xl border transition-all
                  hover:scale-[1.04] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
                  hover:backdrop-blur-2xl hover:-translate-y-1
                  text-left relative overflow-hidden
                  ${
                    f.role === "admin"
                      ? "bg-yellow-300/15 border-yellow-400/40"
                      : "bg-blue-300/15 border-blue-400/40"
                  }
                `}
              >
                {/* Glow */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity
                    ${
                      f.role === "admin"
                        ? "bg-yellow-300"
                        : "bg-blue-300"
                    }
                  `}
                />

                <div className="relative z-10">
                  <p className="text-2xl font-bold text-white drop-shadow-sm">
                    {f.nome ?? "Sem nome"}
                  </p>

                  <p className="text-sm text-gray-200 opacity-80 mt-1">
                    {f.codigo_utilizador}
                  </p>

                  <span
                    className={`
                      inline-block mt-4 px-3 py-1 text-xs font-bold rounded-full shadow-md
                      ${
                        f.role === "admin"
                          ? "bg-yellow-400 text-black"
                          : "bg-blue-400 text-black"
                      }
                    `}
                  >
                    {f.role.toUpperCase()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ================= MODAL DE PASSWORD ================= */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-80">
            <h2 className="text-xl font-bold mb-4 text-center">
              Entrar como {selectedUser?.nome}
            </h2>

            {error && <p className="text-red-600 mb-2">{error}</p>}

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={validarPassword}
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Entrar
            </button>

            <button
              onClick={() => setShowPasswordModal(false)}
              className="w-full mt-3 text-gray-600 hover:text-gray-800"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

    </div>
  );
}