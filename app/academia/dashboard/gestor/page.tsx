"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useCandidaturas } from "../CandidaturasProvider";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function GestorDashboard() {
  const { candidaturas, loading } = useCandidaturas();

  const [stats, setStats] = useState({
    formadores: 0,
    gestores: 0,
    candidaturas: 0,
  });

  const [formadores, setFormadores] = useState<any[]>([]);
  const [gestores, setGestores] = useState<any[]>([]);

  const sortByName = (arr: any[]) =>
    [...(arr || [])].sort((a, b) => {
      const nomeA = a.nome?.trim();
      const nomeB = b.nome?.trim();
      if (!nomeA && nomeB) return 1;
      if (nomeA && !nomeB) return -1;
      if (nomeA && nomeB) return nomeA.localeCompare(nomeB);
      return 0;
    });

  async function fetchUsers() {
    const { data: formadoresData } = await supabase
      .from("Formadores")
      .select("*")
      .eq("role", "formador");

    const { data: gestoresData } = await supabase
      .from("Formadores")
      .select("*")
      .eq("role", "gestor");

    const sortedFormadores = sortByName(formadoresData || []);
    const sortedGestores = sortByName(gestoresData || []);

    setFormadores(sortedFormadores);
    setGestores(sortedGestores);

    setStats((prev) => ({
      ...prev,
      formadores: sortedFormadores.length,
      gestores: sortedGestores.length,
    }));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setStats((prev) => ({
      ...prev,
      candidaturas: candidaturas.length,
    }));
  }, [candidaturas]);

  return (
    <div className="flex flex-col gap-10">
      <section>
        <h1 className="text-3xl font-bold mb-2">Dashboard do Gestor</h1>
        <p className="text-gray-400 text-sm">
          Acompanhamento dos formadores, equipa de gestão e candidaturas.
        </p>
      </section>

      {/* CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard title="Formadores" value={stats.formadores} icon="👨‍🏫" color="blue" />
        <StatCard title="Gestores" value={stats.gestores} icon="🧑‍💼" color="green" />
        <StatCard title="Candidaturas" value={stats.candidaturas} icon="📄" color="yellow" />
      </section>

      {/* FORMADORES */}
      <Section title="Formadores" id="formadores">
        <UserTable users={formadores} emptyText="Nenhum formador encontrado." />
      </Section>

      {/* GESTORES */}
      <Section title="Gestores" id="gestores">
        <UserTable users={gestores} emptyText="Nenhum gestor encontrado." />
      </Section>

      {/* CANDIDATURAS */}
      <Section title="Candidaturas" id="candidaturas">
        {loading ? (
          <p className="text-gray-400">A carregar candidaturas...</p>
        ) : (
          <CandidaturasTable candidaturas={candidaturas} />
        )}
      </Section>
    </div>
  );
}

/* COMPONENTES */

function StatCard({ title, value, icon, color }) {
  const colors = {
    blue: "from-blue-600 to-blue-800",
    green: "from-green-600 to-green-800",
    yellow: "from-yellow-600 to-yellow-800",
  };

  return (
    <div className={`p-5 rounded-xl bg-gradient-to-br ${colors[color]} shadow-lg`}>
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-sm text-white/80">{title}</p>
      <h2 className="text-3xl font-bold mt-1">{value}</h2>
    </div>
  );
}

function Section({ title, id, children }) {
  return (
    <section id={id} className="bg-slate-900/40 p-6 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}

function UserTable({ users, emptyText }) {
  if (!users || users.length === 0)
    return <p className="text-gray-400">{emptyText}</p>;

  return (
    <div className="overflow-x-auto border border-white/10 rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-900/60">
          <tr>
            <th className="px-3 py-2 text-left">Nome</th>
            <th className="px-3 py-2 text-left">Email</th>
            <th className="px-3 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={`${u.id}-${i}`} className="border-t border-white/5">
              <td className="px-3 py-2">{u.nome?.trim() || "—"}</td>
              <td className="px-3 py-2">{u.email}</td>
              <td className="px-3 py-2">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CandidaturasTable({ candidaturas }) {
  if (!candidaturas || candidaturas.length === 0)
    return <p className="text-gray-400">Não há candidaturas.</p>;

  return (
    <div className="overflow-x-auto border border-white/10 rounded-lg">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-900/60">
          <tr>
            <th className="px-3 py-2 text-left">Nome</th>
            <th className="px-3 py-2 text-left">ICC</th>
            <th className="px-3 py-2 text-left">Pontuação</th>
            <th className="px-3 py-2 text-left">Estado</th>
          </tr>
        </thead>

        <tbody>
          {candidaturas.map((c, i) => (
            <tr key={`${c.id}-${i}`} className="border-t border-white/5">
              <td className="px-3 py-2">{c.nome}</td>
              <td className="px-3 py-2">{c.icc}</td>
              <td className="px-3 py-2">{c.pontuacao}</td>
              <td
                className={`px-3 py-2 font-semibold ${
                  c.estado === "Aprovado" ? "text-green-400" : "text-red-400"
                }`}
              >
                {c.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}