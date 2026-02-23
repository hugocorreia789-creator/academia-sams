"use client";

import { usePathname } from "next/navigation";
import PerfilSidebar from "./PerfilSidebar";

export default function Sidebar({ user, setUser, menu }: any) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 border-r border-white/10 p-4 flex flex-col items-center gap-4">

      {/* FOTO + BOTÃO ALTERAR FOTO */}
      <PerfilSidebar user={user} setUser={setUser} />

      {/* NOME + ROLE */}
      <div className="text-center mt-2">
        <p className="font-semibold">{user.nome}</p>
        <p className="text-xs text-gray-400 uppercase">{user.role}</p>
      </div>

      {/* MENU */}
      <nav className="w-full mt-6 space-y-1">
        {menu.map((item: any) => (
          <a
            key={item.path}
            href={item.path}
            className={`block px-4 py-2 rounded-md text-sm transition ${
              pathname === item.path
                ? "bg-blue-700 font-semibold"
                : "hover:bg-slate-800"
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}