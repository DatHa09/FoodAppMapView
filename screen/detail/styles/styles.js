import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../common/Theme';
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
    paddingVertical: SIZES.padding * 2,
  },
  app_title: {
    backgroundColor: COLORS.lightGray3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    borderRadius: SIZES.radius,
    height: 50,
  },
  app_title__content:{
    fontFamily: 'Roboto-Black',
    color: COLORS.black
  },
});
