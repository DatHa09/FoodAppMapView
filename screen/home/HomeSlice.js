import {createSlice} from '@reduxjs/toolkit';
import {categoryData, menuData} from '../../common/Contant';
const initialState = {
  categoryData: [],
  currentCategory: 1,
  menuData: menuData.filter(value => 1 === value.categoryId),
  foodData: [],
};

export const homeSlice = createSlice({
  /**
   * name: tên không trùng
   * initialState:{}
   * reducers:{}
   */
  name: 'home',
  initialState: initialState,
  //hoặc chỉ cần viết initialState
  //reducers vừa là reducer vừa là action
  reducers: {
    //state trên store, đại diện cho initialState (chính là nó)
    getCategories: (state, action) => {
      //thay đổi giá trị của state = categoryData trong file Contant => reload lại màn hình
      state.categoryData = categoryData;
    },
    onSelectedCategory: (state, action) => {
      //action.payload nhận giá trị truyền vào từ các screen
      let categoryId = action.payload;
      state.currentCategory = categoryId;

      //lọc menuData theo categoryId và gán cho menuData của store
      state.menuData = menuData.filter(
        value => categoryId === value.categoryId,
      );
    },
  },
});

//dispatch
export const {getCategories, onSelectedCategory} = homeSlice.actions;
export default homeSlice.reducer;
