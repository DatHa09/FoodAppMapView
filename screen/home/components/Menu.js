import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {onSelectFood} from '../../detail/DetailSlice';

import {styles} from '../styles/styles';
import {ICONS} from '../../../common/Images';
import {screens} from '../../../common/Contant';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
  // lấy menuData từ store
  const menuData = useSelector(state => state.homeReducer.menuData);

  const dispatch = useDispatch();

  const navigation = useNavigation()

  const onPressFood = id => {
    dispatch(onSelectFood(id));
    navigation.navigate(screens.detail);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.menu}
      onPress={() => onPressFood(item.menuId)}>
      <View style={{marginBottom: 10}}>
        <Image style={styles.menu__img} source={item.photo} />
        <View style={styles.menu__duration}>
          <Text style={styles.menu__duration__text}>{item.duration}</Text>
        </View>
      </View>
      <Text style={styles.menu__title}>{item.name}</Text>
      <View style={styles.menu_type}>
        <Image
          style={[styles.menu_type__icon, styles.marginRight8]}
          source={ICONS.star}
        />
        <Text style={[styles.menu_type__content, styles.marginRight8]}>{item.star}</Text>
        <Text style={[styles.menu_type__content, styles.marginRight8]}>Category Selected</Text>
        <Text style={styles.menu_type__content}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
  return <FlatList data={menuData} renderItem={renderItem} />;
}
