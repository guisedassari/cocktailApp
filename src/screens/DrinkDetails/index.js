import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import api from '../../services/api';

import {
  Container,
  PhotoDrink,
  Title,
  Description,
  Ingredient,
} from './styles';

const DrinkDetails = ({ route, navitagion }) => {
  const { idDrink } = route.params;
  const [drink, setDrink] = useState(null);
  let ingredients = [];

  useEffect(() => {
    async function getDrink() {
      const response = await api.get(`/lookup.php?i=${idDrink}`);

      setDrink(response.data.drinks[0]);
    }
    getDrink();
  }, [idDrink]);

  for (let i = 1; i <= 15; i++) {
    if (drink !== null && drink[`strIngredient${i}`] !== null) {
      ingredients.push(drink[`strIngredient${i}`]);
    }
  }

  if (drink === null) {
    return <Text>Carregando dados aguarde</Text>;
  }
  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <PhotoDrink
          source={{
            uri: `${drink.strDrinkThumb}`,
          }}
        />
        <View style={{ marginLeft: 10, justifyContent: 'center' }}>
          <Title style={{}}>{drink.strDrink}</Title>
          <Text>{drink.strCategory}</Text>
          <Text>{drink.strAlcoholic}</Text>
        </View>
      </View>

      <Description>{drink.strInstructions}</Description>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#666',
          marginTop: 10,
        }}>
        Ingredientes:
      </Text>
      {ingredients.map((ingredient) => {
        return <Ingredient>{ingredient}</Ingredient>;
      })}
    </Container>
  );
};

export default DrinkDetails;
