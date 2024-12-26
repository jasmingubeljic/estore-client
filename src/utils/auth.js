import { redirect } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const readToken = () => {
  if (localStorage.getItem("userAndToken") !== null) {
    const token = JSON.parse(localStorage.getItem("userAndToken")).token;
    return token;
  }
  return undefined;
};

export const getRemainingTokenDuration = () => {
  const nowTime = new Date().getTime();
  if (localStorage.getItem("userAndToken") !== null) {
    const token = jwtDecode(
      JSON.parse(localStorage.getItem("userAndToken")).token
    );
    const tokenExp = token.exp * 1000; // from s to ms
    return tokenExp - nowTime;
  }

  return undefined;
};

export const isTokenStored = () => {
  const val = readToken();
  return !!val;
};

export const protectAuthRoutes = () => {
  const tokenExists = isTokenStored();
  if (!tokenExists) {
    return redirect("/prijava");
  }
};

export const clearToken = () => {
  if (localStorage.getItem("userAndToken") !== null) {
    localStorage.removeItem("userAndToken");
  }
};
