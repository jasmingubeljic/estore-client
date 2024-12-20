export const readToken = () => {
  if (localStorage.getItem("userAndToken") !== null) {
    const token = JSON.parse(localStorage.getItem("userAndToken")).token;
    return token;
  }
  return undefined;
};

export const isTokenStored = () => {
  const val = readToken();
  return !!val;
};
