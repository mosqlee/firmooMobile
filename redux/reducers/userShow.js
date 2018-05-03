import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL } from '../actions/userShow';

const initState = {
  isLoading: false,
  preList: { userList: [] },
  userList: { userList: [] },
  errorMsg: ''
};

export default function reducer(state = initState, action) {
  let result;
  switch (action.type) {
    case GET_USER_LIST_REQUEST:
      result = {
        ...state,
        isLoading: true,
        userList: { userList: [] },
        errorMsg: ''
      };
      break;
    case GET_USER_LIST_SUCCESS:
      result = {
        ...state,
        isLoading: false,
        preList: { userList: action.result.data.data.list },
        userList: { userList: action.result.data.data.list },
        errorMsg: ''
      };
      break;
    case GET_USER_LIST_FAIL:
      result = {
        ...state,
        isLoading: false,
        userList: { userList: [] },
        errorMsg: '请求错误'
      };
      break;
    default:
      result = state;
      break;
  }
  return result;
}