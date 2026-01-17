const TOKEN_KEY = "auth_token";

export function loginDummy() {
  localStorage.setItem(TOKEN_KEY, "dummy-token");
}

export function logoutDummy() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem(TOKEN_KEY);
}
