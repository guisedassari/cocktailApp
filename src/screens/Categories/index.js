import React, { useState, useEffect, useCallback } from 'react';

import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import api from '../../services/api';
import { addDrinksRequest } from '../../store/modules/Drinks/action';

import { Container, Card, CategoryTitle } from './styles';
import SearchField from '../../components/SearchField';

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function getCategory() {
      const responseCategory = await api.get('/list.php?c=list');
      setCategories(responseCategory.data.drinks);
    }
    getCategory();
  }, []);

  const handleSelectedCategory = useCallback(
    (category) => {
      dispatch(addDrinksRequest(category));

      navigation.navigate('DrinksList');
    },
    [dispatch, navigation],
  );

  return (
    <Container>
      <SearchField navigation={navigation} />
      {categories !== null ? (
        <ScrollView>
          {categories.map((category) => {
            return (
              <Card
                key={category.strCategory}
                onPress={() => handleSelectedCategory(category.strCategory)}>
                <CategoryTitle>{category.strCategory}</CategoryTitle>
              </Card>
            );
          })}
        </ScrollView>
      ) : (
        <Text>Carregando dados aguarde</Text>
      )}
    </Container>
  );
};

export default Categories;
