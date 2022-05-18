import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {onDecreaseQty, onIncreaseQty} from '../../detail/DetailSlice';

import {styles} from '../styles/styleFoodInfo';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus, faCircle} from '@fortawesome/free-solid-svg-icons';
import {ICONS, IMAGES} from '../../../common/Images';
import {COLORS} from '../../../common/Theme';

export default function FoodInfo() {
  const foodData = useSelector(state => state.detailReducer.foodData);
  const currentQty = useSelector(state => state.detailReducer.currentQty);
  const total = useSelector(state => state.detailReducer.total);
  const dispatch = useDispatch();

  return (
    <View style={styles.root}>
      <Photo foodData={foodData} currentQty={currentQty} dispatch={dispatch} />
      <Info foodData={foodData} />
      <Calories foodData={foodData} />
      <SlideShow />
    </View>
  );
}

export const Photo = ({foodData, currentQty, dispatch}) => {
  return (
    <View style={styles.container_photo}>
      <Image
        source={foodData.photo}
        style={styles.container_photo__image}
        resizeMode="contain"
      />
      <View style={styles.container_photo_container_qty}>
        <TouchableOpacity
          onPress={() => dispatch(onDecreaseQty())}
          disabled={currentQty === 1 ? true : false}
          style={styles.container_photo_container_qty__minus}>
          <FontAwesomeIcon
            icon={faMinus}
            size={24}
            color={currentQty === 1 ? COLORS.secondary : COLORS.black}
          />
        </TouchableOpacity>
        <Text style={styles.container_photo_container_qty__count}>
          {currentQty}
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(onIncreaseQty())}
          disabled={currentQty === 30 ? true : false}>
          <FontAwesomeIcon
            icon={faPlus}
            size={24}
            color={currentQty === 30 ? COLORS.secondary : COLORS.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Info = ({foodData}) => {
  return (
    <View style={styles.container_info}>
      {/* title and price */}
      <View style={styles.container_info_title}>
        <Text style={styles.container_info_title__content}>
          {foodData.name}
          {/* aaaaaaaaaaaaaaaaaa */}
        </Text>
        <Text style={styles.container_info_title__content}>
          ${foodData.price}
          {/* $15 */}
        </Text>
      </View>
      {/* description */}
      <Text style={styles.container_info__descriptions}>
        {foodData.description}
        {/* asdasdasdasdasdasdasdas */}
      </Text>
    </View>
  );
};

export const Calories = ({foodData}) => {
  return (
    <View style={styles.container_calories}>
      <Image
        source={ICONS.fire}
        style={styles.container_calories__image}
        resizeMode="cover"
      />
      <Text style={styles.container_calories__calories}>
        {/* {route.params.product.calories} cal */}
        {foodData.calories} cal
      </Text>
    </View>
  );
};

export const SlideShow = () => {
  return (
    <View style={styles.container_slide_show}>
      <FontAwesomeIcon
        icon={faCircle}
        size={5}
        color={COLORS.secondary}
        style={styles.marginRight10}
      />
      <FontAwesomeIcon
        icon={faCircle}
        size={10}
        color={COLORS.primary}
        style={styles.marginRight10}
      />
      <FontAwesomeIcon
        icon={faCircle}
        size={5}
        color={COLORS.secondary}
        style={styles.marginRight10}
      />
      <FontAwesomeIcon icon={faCircle} size={5} color={COLORS.secondary} />
    </View>
  );
};
