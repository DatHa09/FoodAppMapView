import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../../common/Images';
import {styles} from '../styles/styles';
import { screens } from '../../../common/Contant';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../common/Theme';
export default function AppBar() {

  const navigation = useNavigation()

  const navigationToMap = ()=>{
    //c1
    // navigation.push(screens.map)
    //c2
    navigation.navigate(screens.map)
  }

  return (
    <View style={styles.appBar}>
      <TouchableOpacity onPress={()=> navigationToMap()} style={{justifyContent: 'center'}}>
        <Image style={styles.icon} source={ICONS.nearby} />
      </TouchableOpacity>

      <View style={styles.app_title}>
        <Text style={styles.app_title__content}>745 LinColn PI</Text>
      </View>

      <TouchableOpacity style={{justifyContent: 'center'}}>
        <Image style={styles.icon} source={ICONS.shopping_basket} />
      </TouchableOpacity>
    </View>
  );
}
