import produce from 'immer';

const INITIAL_STATE = {
  user: {
    nickName: '',
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SET_USER':
        draft.user = {
          nickName: action.payload.nickName,
        };
        break;

      default:
        break;
    }
  });
}
