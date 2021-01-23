import React from 'react';
import {View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {useSelector} from 'react-redux';
import {pathOr} from 'ramda';
import {If} from 'react-if';

import {APP_CONSTANTS} from '../Constants';
import {MarkersView} from '../Components';
import {NavigationService} from '../Services';
import {isEmptyOrNil} from '../Utils';
import {MapOverlayButton} from '../Components';

MapboxGL.setAccessToken(APP_CONSTANTS.MAPBOX_KEY);

const MapScreen = () => {
  const state = useSelector((state) => state);
  const coordinates = pathOr([], ['home', 'mapCoordinates'], state) as any;
  const initialZoomLevel = coordinates[0].zoom;
  const initialCoordinates = coordinates[0].coords;

  return (
    <If condition={!isEmptyOrNil(coordinates)}>
      <View style={{flex: 1}}>
        <MapboxGL.MapView style={{flex: 1}} logoEnabled={false}>
          <MapboxGL.Camera
            zoomLevel={initialZoomLevel}
            centerCoordinate={initialCoordinates}
          />
          <MarkersView coordinates={coordinates} />
          <MapboxGL.UserLocation visible={false} />
        </MapboxGL.MapView>
        <MapOverlayButton
          onGoBackPressHandler={() =>
            NavigationService.goBackToPreviousScreen()
          }
        />
      </View>
    </If>
  );
};

export default MapScreen;
