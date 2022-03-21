export const setUser = (userName: string) => ({
  type: '@user/SET_USER',
  payload: {
    userName,
  },
});

export const authUser = (isLogged: boolean) => ({
  type: '@user/AUTH_USER',
  payload: {
    isLogged,
  },
});
