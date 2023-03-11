import React, {useId} from 'react';
import {
  DefaultSectionT,
  SectionList,
  SectionListData,
  SectionListRenderItem,
  StyleSheet,
} from 'react-native';

import {DynamicText, DynamicView} from 'src/components';

type ItemType = {
  name: string;
  price: string;
  id?: string | undefined;
};

type ItemProps = {item: ItemType};

const ItemToDisplay = ({item}: ItemProps) => (
  <DynamicView
    justifyContent="space-between"
    flexDirection="row"
    alignItems="center"
    marginVertical="xL"
    paddingHorizontal="m">
    <DynamicText color="#F4CE14">{item.name}</DynamicText>
    <DynamicText color="#F4CE14">{item.price}</DynamicText>
  </DynamicView>
);

const LittleLemonBody = () => {
  const listId = useId();

  const renderItem: SectionListRenderItem<ItemType, DefaultSectionT> = ({
    item,
  }) => <ItemToDisplay item={item} />;

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: SectionListData<ItemType, DefaultSectionT>;
  }) => (
    <DynamicView
      backgroundColor="#F4CE14"
      paddingVertical="m"
      alignItems="center">
      <DynamicText fontSize={16} fontWeight="600" color="#333333">
        {title}
      </DynamicText>
    </DynamicView>
  );

  return (
    <SectionList<ItemType>
      indicatorStyle="white"
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(_, index) => `${listId}-${index}`}
      sections={menuItemsToDisplay}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default LittleLemonBody;

const styles = StyleSheet.create({
  contentContainer: {flexGrow: 1},
});

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      {name: 'Hummus', price: '$5.00'},
      {name: 'Moutabal', price: '$5.00'},
      {name: 'Falafel', price: '$7.50'},
      {name: 'Marinated Olives', price: '$5.00'},
      {name: 'Kofta', price: '$5.00'},
      {name: 'Eggplant Salad', price: '$8.50'},
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      {name: 'Lentil Burger', price: '$10.00'},
      {name: 'Smoked Salmon', price: '$14.00'},
      {name: 'Kofta Burger', price: '$11.00'},
      {name: 'Turkish Kebab', price: '$15.50'},
    ],
  },
  {
    title: 'Sides',
    data: [
      {name: 'Fries', price: '$3.00', id: '11K'},
      {name: 'Buttered Rice', price: '$3.00'},
      {name: 'Bread Sticks', price: '$3.00'},
      {name: 'Pita Pocket', price: '$3.00'},
      {name: 'Lentil Soup', price: '$3.75'},
      {name: 'Greek Salad', price: '$6.00'},
      {name: 'Rice Pilaf', price: '$4.00'},
    ],
  },
  {
    title: 'Desserts',
    data: [
      {name: 'Baklava', price: '$3.00'},
      {name: 'Tartufo', price: '$3.00'},
      {name: 'Tiramisu', price: '$5.00'},
      {name: 'Panna Cotta', price: '$5.00'},
    ],
  },
];
