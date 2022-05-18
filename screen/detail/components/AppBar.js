import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../../common/Images';
import {styles} from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
export default function AppBar() {

  const navigation = useNavigation()

  return (
    <View style={styles.appBar}>
      <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => navigation.goBack()}>
        <Image style={styles.icon} source={ICONS.back} />
      </TouchableOpacity>

      <View style={styles.app_title}>
        <Text style={styles.app_title__content}>745 LinColn PI</Text>
      </View>

      <TouchableOpacity style={{justifyContent: 'center'}}>
        <Image style={styles.icon} source={ICONS.list} />
      </TouchableOpacity>
    </View>
  );
}
