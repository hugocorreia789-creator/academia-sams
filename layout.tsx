"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import { CandidaturasProvider } from "./CandidaturasProvider";
import AutoLoggerProvider from "./AutoLoggerProvider";

export default function DashboardLayout({ children }: any) {
  const [user, setUser] = useState<any>(null);

  // MENU DO ADMIN
  const adminMenu = [
    { name: "Dashboard", path: "/academia/dashboard/admin" },
    { name: "Formadores", path: "/academia/dashboard/admin#formadores" },
    { name: "Gestores", path: "/academia/dashboard/admin#gestores" },
    { name: "Candidaturas", path: "/academia/dashboard/admin#candidaturas" },
    { name: "Logs", path: "/academia/dashboard/admin#logs" },
  ];

  // MENU DO GESTOR
  const gestorMenu = [
    { name: "Dashboard", path: "/academia/dashboard/gestor" },
    { name: "Candidaturas", path: "/academia/dashboard/gestor#candidaturas" },
    { name: "Exames", path: "/academia/exames" },
  ];

  // MENU DO FORMADOR
  const formadorMenu = [
    { name: "Dashboard", path: "/academia/dashboard/formador" },
    { name: "Exames", path: "/academia/exames" }, // BOTÃO QUE FALTAVA
  ];

  useEffect(() => {
    const stored = localStorage.getItem("formadorSelecionado");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  // ESCOLHER MENU COM BASE NO ROLE
  const menu =
    user?.role === "admin"
      ? adminMenu
      : user?.role === "gestor"
      ? gestorMenu
      : formadorMenu;

  return (
    <CandidaturasProvider>
      <AutoLoggerProvider user={user}>
        {user ? (
          <div className="min-h-screen flex bg-slate-950 text-gray-100">
            <Sidebar user={user} setUser={setUser} menu={menu} />
            <main className="flex-1 p-6">{children}</main>
          </div>
        ) : (
          <p className="p-6">A carregar utilizador...</p>
        )}
      </AutoLoggerProvider>
    </CandidaturasProvider>
  );
}