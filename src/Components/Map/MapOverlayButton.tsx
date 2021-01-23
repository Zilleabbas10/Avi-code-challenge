import React from 'react';
import styled from 'styled-components/native';

import {Colors, Metrics} from '../../Themes';
import {PrimaryButton} from '../Commons';

const MapOverlayButtonContainer = styled.View`
  position: absolute;
  z-index: 2;
  bottom: ${Metrics.baseMargin};
  align-items: center;
  width: ${Metrics.screenWidth};
`;

type MapOverlayButtonType = {
  onGoBackPressHandler(): void | undefined;
};
const MapOverlayButton = (props: MapOverlayButtonType) => {
  const {onGoBackPressHandler = () => {}} = props;
  return (
    <MapOverlayButtonContainer>
      <PrimaryButton
        fullWidth={false}
        height={40}
        width={Metrics.screenWidth / 2}
        buttonColor={Colors.lightPrimary}
        buttonLabel="Go Back"
        onClickHandler={onGoBackPressHandler}
      />
    </MapOverlayButtonContainer>
  );
};

export default MapOverlayButton;
