"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function PerfilSidebar({ user, setUser }: any) {
  const [loading, setLoading] = useState(false);

  // Normalizar nome para evitar erros
  const nomeNormalizado = user?.nome?.trim().toLowerCase();

  async function handleFotoUpload(e: any) {
    const file = e.target.files[0];
    if (!file || !user) return;

    // O André nunca pode alterar a foto
    if (nomeNormalizado === "andré oconner") {
      alert("A foto do Coordenador é fixa e não pode ser alterada.");
      return;
    }

    setLoading(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExt}`;
const filePath = fileName;

    // Upload para o Supabase Storage
const { error: uploadError } = await supabase.storage
  .from("fotos-perfil")
  .upload(filePath, file, { upsert: true });

    if (uploadError) {
      alert("Erro ao enviar imagem");
      setLoading(false);
      return;
    }

    // Obter URL público
const { data: publicURL } = supabase.storage
  .from("fotos-perfil")
  .getPublicUrl(filePath);

    // Atualizar na tabela Formadores
    await supabase
      .from("Formadores")
      .update({ foto_url: publicURL.publicUrl })
      .eq("id", user.id);

    // Atualizar no estado local
    const updatedUser = { ...user, foto_url: publicURL.publicUrl };
    setUser(updatedUser);

    // Atualizar no localStorage
    localStorage.setItem("formadorSelecionado", JSON.stringify(updatedUser));

    setLoading(false);
    alert("Foto atualizada com sucesso!");
  }

  return (
    <div className="flex flex-col items-center justify-center py-6 gap-3">

      {/* FOTO DO UTILIZADOR */}
      <img
        src={
          nomeNormalizado === "andré oconner"
            ? "/Coordenador.png"   // FOTO FIXA DO ANDRÉ
            : user?.foto_url || "/default.png"
        }
        alt="Foto do utilizador"
        className="w-24 h-24 rounded-full object-cover shadow-xl border-2 border-blue-300/80"
      />

      {/* Botão para alterar foto — só para quem NÃO é André Oconner */}
      {nomeNormalizado !== "andré oconner" && (
        <>
          <input
            type="file"
            id="fotoUpload"
            className="hidden"
            accept="image/*"
            onChange={handleFotoUpload}
          />

          <button
            disabled={loading}
            onClick={() => document.getElementById("fotoUpload")?.click()}
            className="px-3 py-1 text-xs bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold disabled:opacity-50"
          >
            {loading ? "A enviar..." : "Alterar Foto"}
          </button>
        </>
      )}
    </div>
  );
}