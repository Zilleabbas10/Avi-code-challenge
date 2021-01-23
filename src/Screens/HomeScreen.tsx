import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {propOr, pathOr} from 'ramda';
import {If} from 'react-if';

import {HomeHeader, PracticeTable, HomeFooter} from '../Components';
import {APP_ROUTES} from '../Navigation';
import {NavigationService} from '../Services';
import {getPractices, setMapCoordinates} from '../Actions';
import {getFormattedDataForMap, isEmptyOrNil} from '../Utils';
import {PracticeType} from '../types';

type HomeContentContainerType = {
  flex?: number;
};
export const HomeContentContainer = styled(View)<HomeContentContainerType>`
  flex: ${(props) => propOr(1, 'flex', props)};
`;

const HomeScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [selectedPracticesIds, setSelectedPracticesIds] = React.useState(
    [],
  ) as any;
  const practices: Array<PracticeType> = pathOr(
    [],
    ['home', 'practices'],
    state,
  );

  React.useEffect(() => {
    dispatch(getPractices());
  }, []);

  const addPractices = (item) => {
    const {id} = item;
    const formattedSelectedPracticesIds = selectedPracticesIds.includes(id)
      ? selectedPracticesIds.filter((i) => i !== id) // remove id
      : [...selectedPracticesIds, id]; // add id
    setSelectedPracticesIds(formattedSelectedPracticesIds);
  };

  const navigateToMapScreen = () => {
    const getFormattedData = getFormattedDataForMap({
      selectedPracticesIds,
      practices,
    });
    dispatch(setMapCoordinates(getFormattedData));
    NavigationService.navigate(APP_ROUTES.MAP_SCREEN);
  };

  return (
    <HomeContentContainer>
      <HomeHeader />
      <HomeContentContainer flex={7}>
        <If condition={!isEmptyOrNil(practices)}>
          <PracticeTable
            onRowPressHandler={(item) => addPractices(item)}
            practices={practices}
            selectedPracticesIds={selectedPracticesIds}
          />
        </If>
      </HomeContentContainer>
      <HomeFooter onViewMapPressHandler={() => navigateToMapScreen()} />
    </HomeContentContainer>
  );
};

export default HomeScreen;
