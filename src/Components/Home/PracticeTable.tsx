import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {Metrics, Colors, Fonts} from '../../Themes';
import {AppText} from '../Commons';
import {PracticeType} from '../../types';
import {ColumnContainer, TableRowContainer} from './HomeStyledComponents';

const renderRowSeparator = () => {
  return (
    <View
      style={{
        height: 0.5,
        width: '100%',
        paddingVertical: Metrics.smallMargin,
      }}
    />
  );
};

type RenderColumnType = {
  name: string | undefined;
  isTextBold?: boolean;
};
const RenderColumn = (props: RenderColumnType) => {
  const {name, isTextBold = false} = props;
  const fontWeight = isTextBold ? 'bold' : '400';
  return (
    <ColumnContainer>
      <AppText
        fontSize={Fonts.size.extraSmall}
        fontWeight={fontWeight}
        textAlign="center"
        width="auto">
        {name}
      </AppText>
    </ColumnContainer>
  );
};

const renderHeader = () => {
  return (
    <TableRowContainer>
      <RenderColumn isTextBold={true} name="Name" />
      <RenderColumn isTextBold={true} name="City" />
      <RenderColumn isTextBold={true} name="State" />
      <RenderColumn isTextBold={true} name="Post Code" />
    </TableRowContainer>
  );
};

type RenderItemType = {
  item: PracticeType;
  onRowPressHandler(object): void;
  selectedPracticesIds: Array<number>;
};
export const TableRow = (props: RenderItemType) => {
  const {item, onRowPressHandler = () => {}, selectedPracticesIds = []} = props;
  const backgroundColor = selectedPracticesIds.includes(item.id)
    ? Colors.disabledPrimary
    : Colors.lightGrey;
  return (
    <TouchableOpacity onPress={() => onRowPressHandler(item)}>
      <TableRowContainer backgroundColor={backgroundColor}>
        <RenderColumn name={item.name} />
        <RenderColumn name={item.city} />
        <RenderColumn name={item.state} />
        <RenderColumn name={item.postCode} />
      </TableRowContainer>
    </TouchableOpacity>
  );
};

type PracticeTableType = {
  practices: Array<PracticeType>;
  onRowPressHandler(object): void;
  selectedPracticesIds: Array<number>;
};
const PracticeTable = (props: PracticeTableType) => {
  const {
    practices = [],
    onRowPressHandler = () => {},
    selectedPracticesIds = [],
  } = props;
  return (
    <View>
      <FlatList
        data={practices}
        ListHeaderComponent={() => renderHeader()}
        ItemSeparatorComponent={() => renderRowSeparator()}
        renderItem={({item}) => (
          <TableRow
            item={item}
            onRowPressHandler={onRowPressHandler}
            selectedPracticesIds={selectedPracticesIds}
          />
        )}
        showsVerticalScrollIndicator={false}
        initialNumToRender={practices.length}
        stickyHeaderIndices={[0]}
        keyExtractor={(item) => item.name.toString()}
      />
    </View>
  );
};

export default PracticeTable;
