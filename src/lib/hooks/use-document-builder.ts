"use client";

import { useState, useEffect, useCallback } from "react";
import type { BuilderClauseEntry } from "@/data/types";

const STORAGE_KEY = "clause-library-builder";

interface BuilderState {
  title: string;
  clauses: BuilderClauseEntry[];
}

function loadState(): BuilderState {
  if (typeof window === "undefined") {
    return { title: "", clauses: [] };
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore parse errors
  }
  return { title: "", clauses: [] };
}

function saveState(state: BuilderState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
}

export function useDocumentBuilder() {
  const [state, setState] = useState<BuilderState>({ title: "", clauses: [] });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(loadState());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      saveState(state);
    }
  }, [state, hydrated]);

  const setTitle = useCallback((title: string) => {
    setState((prev) => ({ ...prev, title }));
  }, []);

  const addClause = useCallback((clauseId: string) => {
    setState((prev) => {
      if (prev.clauses.some((c) => c.clauseId === clauseId)) return prev;
      return {
        ...prev,
        clauses: [
          ...prev.clauses,
          { clauseId, order: prev.clauses.length },
        ],
      };
    });
  }, []);

  const removeClause = useCallback((clauseId: string) => {
    setState((prev) => ({
      ...prev,
      clauses: prev.clauses
        .filter((c) => c.clauseId !== clauseId)
        .map((c, i) => ({ ...c, order: i })),
    }));
  }, []);

  const reorderClauses = useCallback((clauseIds: string[]) => {
    setState((prev) => ({
      ...prev,
      clauses: clauseIds.map((id, i) => {
        const existing = prev.clauses.find((c) => c.clauseId === id);
        return {
          clauseId: id,
          order: i,
          customText: existing?.customText,
          notes: existing?.notes,
        };
      }),
    }));
  }, []);

  const updateClauseText = useCallback(
    (clauseId: string, customText: string) => {
      setState((prev) => ({
        ...prev,
        clauses: prev.clauses.map((c) =>
          c.clauseId === clauseId ? { ...c, customText } : c
        ),
      }));
    },
    []
  );

  const clearAll = useCallback(() => {
    setState({ title: "", clauses: [] });
  }, []);

  const hasClause = useCallback(
    (clauseId: string) => {
      return state.clauses.some((c) => c.clauseId === clauseId);
    },
    [state.clauses]
  );

  return {
    title: state.title,
    clauses: state.clauses,
    hydrated,
    setTitle,
    addClause,
    removeClause,
    reorderClauses,
    updateClauseText,
    clearAll,
    hasClause,
  };
}
