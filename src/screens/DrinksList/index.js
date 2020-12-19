import React from 'react';
import { Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { List, PhotoDrink, Container, DrinkName } from './styles';

const DrincksList = ({ navigation }) => {
  const { drinks } = useSelector((state) => state.Drinks);

  function handleSelectedDrink(idDrink) {
    console.log(idDrink);
    navigation.navigate('DrinkDetails', {
      idDrink: idDrink,
    });
  }
  return (
    <Container>
      <FlatList
        data={drinks}
        keyExtractor={(drink) => drink.idDrink}
        renderItem={({ item: drink }) => {
          return (
            <List onPress={() => handleSelectedDrink(drink.idDrink)}>
              <PhotoDrink
                source={{
                  uri: `${drink.strDrinkThumb}/preview`,
                }}
              />
              <DrinkName>{drink.strDrink}</DrinkName>
            </List>
          );
        }}
      />
    </Container>
  );
};

export default DrincksList;
