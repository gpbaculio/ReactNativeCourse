import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {DynamicText, DynamicView} from 'src/components';

type ItemProps = {item: ItemToDisplayType};

const ItemToDisplay = ({item}: ItemProps) => (
  <DynamicView
    justifyContent="space-between"
    flexDirection="row"
    alignItems="center"
    marginVertical="xL">
    <DynamicText color="#F4CE14">{item.name}</DynamicText>
    <DynamicText color="#F4CE14">{item.price}</DynamicText>
  </DynamicView>
);

const LittleLemonBody = () => {
  const renderItem = ({item}: ItemProps) => <ItemToDisplay item={item} />;

  return (
    <FlatList<ItemToDisplayType>
      data={menuItemsToDisplay}
      indicatorStyle="white"
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      keyExtractor={i => i.id}
    />
  );
};

export default LittleLemonBody;

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 40, flexGrow: 1},
});

type ItemToDisplayType = {name: string; price: string; id: string};

const menuItemsToDisplay = [
  {name: 'Hummus', price: '$5.00', id: '1A'},
  {name: 'Moutabal', price: '$5.00', id: '2B'},
  {name: 'Falafel', price: '$7.50', id: '3C'},
  {name: 'Marinated Olives', price: '$5.00', id: '4D'},
  {name: 'Kofta', price: '$5.00', id: '5E'},
  {name: 'Eggplant Salad', price: '$8.50', id: '6F'},
  {name: 'Lentil Burger', price: '$10.00', id: '7G'},
  {name: 'Smoked Salmon', price: '$14.00', id: '8H'},
  {name: 'Kofta Burger', price: '$11.00', id: '9I'},
  {name: 'Turkish Kebab', price: '$15.50', id: '10J'},
  {name: 'Fries', price: '$3.00', id: '11K'},
  {name: 'Buttered Rice', price: '$3.00', id: '12L'},
  {name: 'Bread Sticks', price: '$3.00', id: '13M'},
  {name: 'Pita Pocket', price: '$3.00', id: '14N'},
  {name: 'Lentil Soup', price: '$3.75', id: '15O'},
  {name: 'Greek Salad', price: '$6.00', id: '16Q'},
  {name: 'Rice Pilaf', price: '$4.00', id: '17R'},
  {name: 'Baklava', price: '$3.00', id: '18S'},
  {name: 'Tartufo', price: '$3.00', id: '19T'},
  {name: 'Tiramisu', price: '$5.00', id: '20U'},
  {name: 'Panna Cotta', price: '$5.00', id: '21V'},
];
