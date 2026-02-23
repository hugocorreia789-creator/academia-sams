"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CANDIDATURAS_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR6f8iVf3YSX6wc13j4IrRlIIVI6KbjbH28UqximLrhQLbOEgiDeiNDtcW-x331P9N-W8ngQZNOtDgJ/pub?output=csv";

const CandidaturasContext = createContext<any>(null);

export function useCandidaturas() {
  return useContext(CandidaturasContext);
}

export function CandidaturasProvider({ children }: any) {
  const [candidaturas, setCandidaturas] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCandidaturas() {
    try {
      const res = await fetch(CANDIDATURAS_CSV_URL);
      const text = await res.text();

      const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);

      const parsed = lines.slice(1).map((line, i) => {
        // Divide por vírgula OU ponto e vírgula, respeitando aspas
        const cols = line
          .split(/[,;](?=(?:[^"]*"[^"]*")*[^"]*$)/)
          .map((c) => c.replace(/"/g, "").trim());

        const pontuacao = Number(cols[1]) || 0; // Coluna B
        const nome = cols[2] || "";            // Coluna C
        const icc = cols[3] || "";             // Coluna D

        const estado = pontuacao >= 150 ? "Aprovado" : "Reprovado";

        return {
          id: `cand-${i + 1}`,
          nome,
          icc,
          pontuacao,
          estado,
        };
      });

      setCandidaturas(parsed);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCandidaturas();
  }, []);

  return (
    <CandidaturasContext.Provider value={{ candidaturas, loading }}>
      {children}
    </CandidaturasContext.Provider>
  );
}