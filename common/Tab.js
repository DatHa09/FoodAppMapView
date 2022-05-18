import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/home/HomeScreen';
import SearchScreen from '../screen/search/SearchScreen';
import LikeScreen from '../screen/like/LikeScreen';
import UserScreen from '../screen/user/UserScreen';
import {screens} from './Contant';
import {ICONS} from './Images';
import {COLORS} from './Theme';
import Svg, {Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();

export default function CustomBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name={screens.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.cutlery}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          //làm button trồi lên (button float)
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={screens.tab_search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.search}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={screens.tab_like}
        component={LikeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.like}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={screens.tab_user}
        component={UserScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={ICONS.user}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  if (accessibilityState.selected) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', position: 'absolute', top: 0}}>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
          <Svg width={70} height={57} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{flex: 1, backgroundColor: COLORS.white}}></View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={{
            top: -24,
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.white,
            elevation: 10
          }}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          height: 50,
        }}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = props => {
  return <BottomTabBar {...props.props} />;
};
