import React from 'react';
import {Colors, Metrics} from '../../Themes';
import {PrimaryButton} from '../Commons';
import {HeaderFooterContainer} from './HomeStyledComponents';

type HomeFooterType = {
  onViewMapPressHandler(): void | undefined;
};
const HomeFooter = (props: HomeFooterType) => {
  const {onViewMapPressHandler = () => {}} = props;
  return (
    <HeaderFooterContainer>
      <PrimaryButton
        fullWidth={false}
        height={40}
        width={Metrics.screenWidth / 2}
        buttonColor={Colors.lightPrimary}
        buttonLabel="View Map"
        onClickHandler={onViewMapPressHandler}
      />
    </HeaderFooterContainer>
  );
};

export default HomeFooter;
