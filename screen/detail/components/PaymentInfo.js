import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircle, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {styles} from '../styles/stylePayMentInfo';
import {ICONS} from '../../../common/Images';
import {useDispatch, useSelector} from 'react-redux';
import { screens } from '../../../common/Contant';
import { useNavigation } from '@react-navigation/native';
export default function PaymentInfo() {
  const currentQty = useSelector(state => state.detailReducer.currentQty);
  const total = useSelector(state => state.detailReducer.total);
  const navigation = useNavigation()

  return (
    <View style={styles.root}>
      <QuantityNPrice currentQty={currentQty} total={total}/>
      <AddressNPayMent />
      <OrderButton navigation={navigation}/>
    </View>
  );
}

export const QuantityNPrice = ({currentQty, total}) => {
  return (
    <View style={styles.container_qty_price}>
      <Text style={styles.container_qty_price__content}>{currentQty} Items in Cart</Text>
      <View style={styles.container_qty_price_total}>
        <Text
          style={[
            styles.container_qty_price__content,
            styles.container_qty_price__size,
          ]}>
          ${Math.round(currentQty * total * 100) / 100}
        </Text>
      </View>
    </View>
  );
};

export const AddressNPayMent = () => {
  return (
    <View style={styles.container_address}>
      {/* address */}
      <View style={styles.container_address_container_address}>
        <Image source={ICONS.pin} style={[styles.icon, styles.marginRight8]} />
        <Text style={styles.container_address_container_address__content}>
          745 Lincoln PI
        </Text>
      </View>

      {/* payment */}
      <View style={styles.container_payment}>
        <Image
          source={ICONS.mastercard}
          style={[styles.icon, styles.marginRight8]}
        />
        <FontAwesomeIcon icon={faCircle} size={5} style={styles.marginRight2} />
        <FontAwesomeIcon icon={faCircle} size={5} style={styles.marginRight2} />
        <FontAwesomeIcon icon={faCircle} size={5} style={styles.marginRight2} />
        <FontAwesomeIcon icon={faCircle} size={5} style={styles.marginRight5} />
        <Text style={styles.container_payment__content}>5491</Text>
      </View>
    </View>
  );
};

export const OrderButton = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.container_order}
      onPress={()=> navigation.navigate(screens.map)}
    >
      <Text style={styles.container_order__content}>Order</Text>
    </TouchableOpacity>
  );
};
