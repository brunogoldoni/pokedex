export const setUser = (userName: string) => ({
  type: '@user/SET_USER',
  payload: {
    userName,
  },
});
