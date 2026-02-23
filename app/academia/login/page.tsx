"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleLogin(e: any) {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Credenciais inválidas");
      return;
    }

    router.push("/academia/selecionar-utilizador");
  }

  return (
    <div
      className={`
        min-h-screen flex items-center justify-center px-6
        transition-opacity duration-700
        ${mounted ? "opacity-100" : "opacity-0"}
        bg-cover bg-center bg-no-repeat
        dark:bg-[#0A0A0A]
      `}
      style={{
        backgroundImage: `url("/Entrada Hospital 2.png")`,
      }}
    >
      <div className="w-full max-w-md bg-white/90 dark:bg-[#111]/90 backdrop-blur-md shadow-xl rounded-2xl p-8 transition-all">

        <h1 className="text-3xl font-bold text-[#0A2443] dark:text-white text-center mb-6">
          Aceder à Academia
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-[#0A2443] dark:text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#222] text-black dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2443]"
              placeholder="exemplo@sams.pt"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-[#0A2443] dark:text-gray-200 mb-1">
              Palavra‑passe
            </label>
            <input
              type="password"
              required
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#222] text-black dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A2443]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0A2443] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-[#0A2443]/90 transition"
          >
            Entrar
          </button>
        </form>

        <div className="text-center mt-6">
          <a href="#" className="text-[#0A2443] dark:text-white font-semibold hover:underline">
            Recuperar palavra‑passe
          </a>
        </div>

      </div>
    </div>
  );
}