import React from 'react';
import {Fonts} from '../../Themes';
import {AppHeading, IconWithBadge} from '../Commons';
import {AviLogoSvg} from '../SvgIcons';
import {HeaderFooterContainer} from './HomeStyledComponents';

const HomeHeader = () => {
  return (
    <HeaderFooterContainer>
      <AppHeading fontSize={Fonts.size.h3}>Avi Medical Practices</AppHeading>
      <IconWithBadge useSvgIcon RenderSvgIcon={() => <AviLogoSvg />} />
    </HeaderFooterContainer>
  );
};

export default HomeHeader;
