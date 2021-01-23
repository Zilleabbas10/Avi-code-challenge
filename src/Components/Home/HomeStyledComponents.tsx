import {View} from 'react-native';
import styled from 'styled-components/native';
import {propOr} from 'ramda';

import {Metrics, Colors} from '../../Themes';

type TableRowContainerType = {
  backgroundColor?: string;
};

export const TableRowContainer = styled(View)<TableRowContainerType>`
  flex: 1;
  height: 50;
  flex-direction: row;
  align-self: stretch;
  justify-content: center;
  padding-bottom: ${Metrics.smallMargin};
  background-color: ${(props) =>
    propOr(Colors.darkGrey, 'backgroundColor', props)};
`;

export const ColumnContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
`;

export const HeaderFooterContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
