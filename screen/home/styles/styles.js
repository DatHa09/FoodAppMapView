import {StyleSheet} from 'react-native';
import {COLORS, SIZES, STYLES} from '../../../common/Theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  icon: {
    width: 24,
    height: 24,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding * 2,
    paddingTop: SIZES.padding * 2,
    paddingBottom: SIZES.padding,
  },
  app_title: {
    backgroundColor: COLORS.lightGray3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: SIZES.radius,
    height: 50,
  },

  app_title__content: {
    fontFamily: 'Roboto-Black',
    color: COLORS.black,
  },

  category: {
    padding: SIZES.padding * 2,
  },
  category__text: {
    fontFamily: 'Roboto-Black',
    color: COLORS.black,
    fontSize: 30,
    lineHeight: 36,
  },

  category_list: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    margin: SIZES.padding,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    // ...STYLES.shadow,
    elevation: 5,
  },
  category_list__circle: {
    width: 50,
    height: 50,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.padding,
  },
  category_list__circle__icon: {
    width: 24,
    height: 24,
  },
  category_list__text: {
    fontFamily: 'Roboto-Regular',
    lineHeight: 22,
    fontSize: 12,
  },

  menu: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: SIZES.padding * 2,
    
  },
  menu__img: {
    width: '100%',
    height: 200,
    borderRadius: SIZES.radius,
    
  },
  menu__duration: {
    position: 'absolute',
    bottom: 0,
    width: SIZES.width * 0.3,
    padding: SIZES.padding * 2,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
  },
  menu__duration__text: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.black,
    // marginBottom: SIZES.padding,
    // marginLeft: SIZES.padding * 2,
  },
  menu__title: {
    fontFamily: 'Roboto-Bold',
    color: COLORS.black,
    fontSize: 20,
  },
  menu_type: {
    flexDirection: 'row',
  },
  menu_type__icon: {
    width: 16,
    height: 16,
  },
  menu_type__content:{
    fontFamily: 'Roboto-Black',
    color: COLORS.black,
  },
  marginRight8: {
    marginRight: 8,
  },
});
