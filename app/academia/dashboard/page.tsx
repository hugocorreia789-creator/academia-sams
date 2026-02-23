"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      // Buscar utilizador guardado no localStorage
      const stored = localStorage.getItem("formadorSelecionado");

      if (!stored) {
        router.push("/academia/selecionar-utilizador");
        return;
      }

      const user = JSON.parse(stored);

      // Buscar role no Supabase
      const { data, error } = await supabase
        .from("Formadores")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !data) {
        router.push("/academia");
        return;
      }

      // Guardar role no localStorage
      user.role = data.role;
      localStorage.setItem("formadorSelecionado", JSON.stringify(user));

      // Redirecionar por role
      if (data.role === "admin") {
        router.push("/academia/dashboard/admin");
        return;
      }

      if (data.role === "gestor") {
        router.push("/academia/dashboard/gestor");
        return;
      }

      if (data.role === "formador") {
        router.push("/academia/dashboard/formador");
        return;
      }

      router.push("/academia");
    }

    loadUser();
  }, [router]);

  return <p className="p-6">A carregar dashboard...</p>;
}