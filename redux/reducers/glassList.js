import { GET_GLASS_LIST_REQUEST, GET_GLASS_LIST_SUCCESS, GET_GLASS_LIST_FAIL } from '../actions/glassList';

const initState = {
  isLoading: false,
  glassList: { glassList: [] },
  errorMsg: ''
};

export default function reducer(state = initState, action) {
  let result;
  switch (action.type) {
    case GET_GLASS_LIST_REQUEST:
      result = {
        ...state,
        isLoading: true,
        glassList: { glassList: [] },
        errorMsg: ''
      };
      break;
    case GET_GLASS_LIST_SUCCESS:
      result = {
        ...state,
        isLoading: false,
        glassList: { glassList: action.result.data.data.list },
        errorMsg: ''
      };
      break;
    case GET_GLASS_LIST_FAIL:
      result = {
        ...state,
        isLoading: false,
        glassList: { glassList: [] },
        errorMsg: '请求错误'
      };
      break;
    default:
      result = state;
      break;
  }
  return result;
}