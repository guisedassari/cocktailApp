import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import List from '../../components/List';

const DrincksList = ({ navigation }) => {
  const { drinks } = useSelector((state) => state.Drinks);

  console.log('retorno do reduce');
  console.log(drinks);
  if (drinks === null) {
    return (
      <Container>
        <Text>Nenhuma Bebida encontrada.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <List drinks={drinks} navigation={navigation} />
    </Container>
  );
};

export default DrincksList;
