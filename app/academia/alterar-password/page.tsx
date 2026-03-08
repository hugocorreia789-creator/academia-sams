"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function AlterarPassword() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("formadorSelecionado");
    if (!stored) {
      router.push("/academia");
      return;
    }
    setUser(JSON.parse(stored));
  }, []);

  async function alterarPassword() {
    setError("");
    setSuccess("");

    if (!password1 || !password2) {
      setError("Preenche ambos os campos.");
      return;
    }

    if (password1.length < 6) {
      setError("A password deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password1 !== password2) {
      setError("As passwords não coincidem.");
      return;
    }

    // Atualizar password + marcar primeiro_login = false
    const { error: updateError } = await supabase
      .from("Formadores")
      .update({
        password: password1,
        primeiro_login: false,
        tentativas: 0,
        bloqueado_ate: null,
      })
      .eq("id", user.id);

    if (updateError) {
      setError("Erro ao atualizar password.");
      return;
    }

    setSuccess("Password alterada com sucesso!");

    setTimeout(() => {
      router.push("/academia/dashboard");
    }, 1200);
  }

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Definir Nova Password
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Olá <strong>{user.nome}</strong>, por favor define uma nova password.
        </p>

        {error && <p className="text-red-600 mb-3">{error}</p>}
        {success && <p className="text-green-600 mb-3">{success}</p>}

        <input
          type="password"
          placeholder="Nova password"
          className="w-full p-3 border rounded mb-4"
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmar password"
          className="w-full p-3 border rounded mb-4"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <button
          onClick={alterarPassword}
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          Guardar Password
        </button>
      </div>
    </div>
  );
}


