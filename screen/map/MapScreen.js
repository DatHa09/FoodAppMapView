import {Text, View, StyleSheet, Image, Linking} from 'react-native';
import React, {useRef, useEffect} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import decodePolyline from 'decode-google-map-polyline';

export default function MapScreen() {
  const mapRef = useRef();

  const iconCar = require('../../assets/icons/iconCar.png');

  //key này dùng để thêm vào url để sử dụng được direction API (trả phí để chạy được đường dẫn url phía dưới)
  const key = 'AIzaSyB77YE6ifN1_GttZgMDm25eYsV0Al1mv8w';

  // const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${coordinator.latitude},${coordinator.longitude}&destination=${endCoordinator.latitude},${endCoordinator.longitude}&key=${key}`

  //point này được lấy ra từ file json của url
  let points =
    'gou`Aux}iSoAUGCW[iAcBKOaAj@{DdCiCxAiEvB_@VGHMb@?ROV?PNRRFDAj@r@b@h@lBbDjAJf@NLDFg@AGAO?M';

  const coordinator = {
    latitude: 10.764909,
    longitude: 106.6534265,
  };

  const endCoordinator = {
    latitude: 10.767117,
    longitude: 106.6507593,
  };

  let newCoord = decodePolyline(points).map((value, index) => ({
    latitude: value.lat,
    longitude: value.lng,
  }));

  // getDirection = () => {
  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((json)=> json.routes.forEach(element => {
  //     points = element.overview_polyline.points
  //   }))
  // }

  // getDirection()

  useEffect(() => {
    console.log(coordinator);
    mapRef.current.animateToRegion(coordinator, 1000);
    // Linking.openURL(`tel:0898982323`)
  });

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        zoomControlEnabled
        zoomEnabled
        maxZoomLevel={20} //max 20
        minZoomLevel={2}>
        <Polyline coordinates={newCoord} strokeColor={'red'} strokeWidth={3} />

        <Marker coordinate={coordinator}>
          <Image style={{width: 42, height: 42}} source={iconCar} />
        </Marker>
        <Marker coordinate={endCoordinator}>
          {/* <Image style={{width: 42, height: 42}} source={iconCar} /> */}
        </Marker>
      </MapView>
      <Text>jahsdkjahsdkjashd</Text>
    </View>
  );
}
