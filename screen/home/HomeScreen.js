import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Categories from './components/Categories';
import AppBar from './components/AppBar';
import {styles} from './styles/styles';
import Menu from './components/Menu';
import {COLORS} from '../../common/Theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <AppBar />
      <Categories />
      <Menu />
    </SafeAreaView>
  );
}
