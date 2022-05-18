import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../styles/styles';
import {COLORS} from '../../../common/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories, onSelectedCategory} from '../HomeSlice';
export default function Categories() {
  return (
    <View style={styles.category}>
      <Text style={styles.category__text}>Main</Text>
      <Text style={styles.category__text}>Categories</Text>
      <CategoriesList />
    </View>
  );
}

export const CategoriesList = () => {
  //useSelector => lấy state trên store
  //lấy categoryData trong initialState
  const categoriesData = useSelector(state => state.homeReducer.categoryData);

  //lấy currentCategory trong initialState
  const currentCategories = useSelector(
    state => state.homeReducer.currentCategory,
  );

  //useDispatch => thực thi các action trong reducer trong HomeSlice.js
  const dispatch = useDispatch();

  //khi categoriesData thay đổi giá trị thì useEffect mới kích hoạt
  useEffect(() => {
    dispatch(getCategories());
  }, [categoriesData]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.category_list,
        currentCategories === item.id ? {backgroundColor: COLORS.primary} : null,
      ]}
      //truyền item.id vào action.payload trong onSelectedCategory
      onPress={() => dispatch(onSelectedCategory(item.id))}>
      <View style={styles.category_list__circle}>
        <Image style={styles.category_list__circle__icon} source={item.icon} />
      </View>
      <Text
        style={[
          styles.category_list__text,
          currentCategories === item.id ? {color: COLORS.white} : {color: COLORS.black},
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categoriesData}
      renderItem={renderItem}
    />
  );
};
