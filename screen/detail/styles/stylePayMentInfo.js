import {StyleSheet} from 'react-native';
import {COLORS} from '../../../common/Theme';
export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
    width: '100%',
  },
  container_qty_price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomColor: COLORS.lightGray3,
    borderBottomWidth: 1,
  },
  container_qty_price__content: {
    fontFamily:'Roboto-Black',
    color: COLORS.black,
    fontSize: 20,
  },
  container_qty_price_total: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_qty_price__size: {
    fontSize: 22,
  },

  container_address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  container_address_container_address: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container_address_container_address__content: {
    fontFamily:'Roboto-Black',
    color: COLORS.black,
    fontSize: 16,
  },

  container_payment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
  },
  container_payment__content: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
  },

  container_order: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  container_order__content: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  marginRight2: {
    marginRight: 2,
  },
  marginRight5: {
    marginRight: 5,
  },
  marginRight8: {
    marginRight: 8,
  },
})