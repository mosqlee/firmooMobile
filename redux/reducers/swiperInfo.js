import { GET_SWIPER_INFO_REQUEST, GET_SWIPER_INFO_SUCCESS, GET_SWIPER_INFO_FAIL } from '../actions/swiperInfo';

const initState = {
  isLoading: false,
  swiperInfo: { swiperInfo: [] },
  errorMsg: ''
};

export default function reducer(state = initState, action) {
  let result;
  switch (action.type) {
    case GET_SWIPER_INFO_REQUEST:
      result = {
        ...state,
        isLoading: true,
        swiperInfo: { swiperInfo: [] },
        errorMsg: ''
      };
      break;
    case GET_SWIPER_INFO_SUCCESS:
      result = {
        ...state,
        isLoading: false,
        swiperInfo: { swiperInfo: action.result.data.data },
        errorMsg: ''
      };
      break;
    case GET_SWIPER_INFO_FAIL:
      result = {
        ...state,
        isLoading: false,
        swiperInfo: { swiperInfo: [] },
        errorMsg: '请求错误'
      };
      break;
    default:
      result = state;
      break;
  }
  return result;
}