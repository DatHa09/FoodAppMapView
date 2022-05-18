import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles/styles';
import AppBar from './components/AppBar';
import FoodInfo from './components/FoodInfo';
import PaymentInfo from './components/PaymentInfo';
export default function DetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <FoodInfo />
      <PaymentInfo />
    </SafeAreaView>
  );
}
