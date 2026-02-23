"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getNavigationAction, logEvent } from "../../lib/logService";

// IMPORT CORRETO — MESMA PASTA
import { useCandidaturas } from "./CandidaturasProvider";

export default function AutoLoggerProvider({ user, children }) {
  const pathname = usePathname();
  const { candidaturas } = useCandidaturas();

  useEffect(() => {
    if (!user) return;

    const { action, details } = getNavigationAction(
      user,
      pathname,
      candidaturas
    );

    logEvent(user.email, action, details);
  }, [pathname, user, candidaturas]);

  return children;
}