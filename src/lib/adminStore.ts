import { useCallback, useEffect, useState } from "react";

/** Frontend-only persistence for the admin demo. No backend, no database. */
export function useLocalState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw) as T);
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, [key]);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore */
    }
  }, [key, value, loaded]);

  return [value, setValue] as const;
}

const AUTH_KEY = "mbfp_admin_auth";

export const demoCredentials = { username: "admin", password: "admin123" };

export function useAdminAuth() {
  const [status, setStatus] = useState<"loading" | "in" | "out">("loading");

  useEffect(() => {
    setStatus(window.localStorage.getItem(AUTH_KEY) === "1" ? "in" : "out");
  }, []);

  const login = useCallback((username: string, password: string) => {
    const ok =
      username.trim().toLowerCase() === demoCredentials.username &&
      password === demoCredentials.password;
    if (ok) {
      window.localStorage.setItem(AUTH_KEY, "1");
      setStatus("in");
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem(AUTH_KEY);
    setStatus("out");
  }, []);

  return { status, login, logout };
}
