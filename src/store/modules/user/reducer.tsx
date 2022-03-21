import produce from 'immer';

const INITIAL_STATE = {
  userName: '',
  isLogged: false,
};

export default function user(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SET_USER':
        draft.userName = action.payload.userName;
        break;
       case '@user/AUTH_USER':
        draft.isLogged = action.payload.isLogged;
        break;

      default:
        break;
    }
  });
}
