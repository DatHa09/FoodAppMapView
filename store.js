import {configureStore} from '@reduxjs/toolkit';

//vì bên HomeSlice export default homeSlice.reducer nên ta đặt tên homeReducer hay gì cũng đc
import homeReducer from './screen/home/HomeSlice';
import detailReducer from './screen/detail/DetailSlice';

export default store = configureStore({
  reducer: {
    homeReducer,
    detailReducer,
  },
});
