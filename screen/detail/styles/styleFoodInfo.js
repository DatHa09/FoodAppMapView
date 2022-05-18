import {StyleSheet} from 'react-native';
import {COLORS} from '../../../common/Theme';
export const styles = StyleSheet.create({
  root: {
    flex: 3,
  },
  //photo
  container_photo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  container_photo__image: {
    width: 240,
    height: 240,
    borderRadius: 999,
  },
  container_photo_container_qty: {
    position: 'absolute',
    bottom: '-5%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 99,
    elevation: 20,
  },
  container_photo_container_qty__minus: {
    marginRight: 20,
  },
  container_photo_container_qty__count: {
    marginRight: 20,
    color: COLORS.black,
    fontSize: 24,
    fontWeight: 'bold',
  },

  //info
  container_info: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 32,
  },

  container_info_title: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  container_info_title__content: {
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
    color: COLORS.black,
    fontSize: 24,
  },
  container_info__descriptions: {
    fontFamily: 'Roboto-Black',
    textAlign: 'center',
    color: COLORS.darkgray,
    fontSize: 16,
  },

  //calories
  container_calories: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  container_calories__image: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  container_calories__calories: {
    fontFamily: 'Roboto-Black',
    fontSize: 18,
    color: COLORS.secondary,
  },

  //slideShow
  container_slide_show: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  marginRight10: {
    marginRight: 10,
  },
});
