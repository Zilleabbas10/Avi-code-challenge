import React from 'react';
import {View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const MarkersView = (props) => {
  const {coordinates = []} = props;
  return (
    <View>
      {coordinates.map((coordinate, index) => {
        return (
          <MapboxGL.PointAnnotation
            key={index.toString()}
            coordinate={coordinate.coords}
            id="pt-ann"
          />
        );
      })}
    </View>
  );
};

export default MarkersView;
