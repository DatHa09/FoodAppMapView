import {createSlice} from '@reduxjs/toolkit';
import {menuData} from '../../common/Contant';
const initialState = {
  foodData: {},
  currentQty: 1,
  total: 0,
};

export const detailSlice = createSlice({
  /**
   * name: tên không trùng
   * initialState:{}
   * reducers:{}
   */
  name: 'detail',
  initialState: initialState,
  //hoặc chỉ cần viết initialState
  //reducers vừa là reducer vừa là action
  reducers: {
    onSelectFood: (state, action) => {
      let foodId = action.payload;
      let object = menuData.filter(value => foodId === value.menuId);
      state.foodData = object[0];
      state.currentQty = 1;
      state.total = object[0].price;
    },
    onIncreaseQty: (state, action) => {
      state.currentQty < 30 ? state.currentQty++ : state.currentQty;
    },
    onDecreaseQty: (state, action) => {
      state.currentQty > 1 ? state.currentQty-- : state.currentQty;
    },
  },
});

//dispatch
export const {onSelectFood, onIncreaseQty, onDecreaseQty} = detailSlice.actions;
export default detailSlice.reducer;
