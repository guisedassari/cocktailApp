import React from 'react';
import { VirtualizedList } from 'react-native';

import { PhotoDrink, DrinkName, Item } from './styles';

const List = ({ drinks = [], navigation }) => {
  const DATA = drinks;

  const getItem = (data, index) => {
    return {
      id: data[index].idDrink,
      title: data[index].strDrink,
      image: data[index].strDrinkThumb,
    };
  };

  const getItemCount = (data) => {
    return data.length;
  };
  function handleSelectedDrink(idDrink) {
    console.log(idDrink);
    navigation.navigate('DrinkDetails', {
      idDrink: idDrink,
    });
  }

  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={7}
      keyExtractor={(item) => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
      renderItem={({ item }) => {
        return (
          <Item onPress={() => handleSelectedDrink(item.id)}>
            <PhotoDrink
              source={{
                uri: `${item.image}/preview`,
              }}
            />
            <DrinkName>{item.title}</DrinkName>
          </Item>
        );
      }}
    />
  );
};

export default List;
