import produce from 'immer';

const INITIAL_STATE = {
  userName: '',
};

export default function user(state = INITIAL_STATE, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SET_USER':
        draft.userName = action.payload.userName;
        break;

      default:
        break;
    }
  });
}
