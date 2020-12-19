import React, { useState } from 'react';
import { View } from 'react-native';

import { useDispatch } from 'react-redux';
import { searchDrinkRequest } from '../../store/modules/Drinks/action';

import { Container, SearchInput, SearchIcon, SearchButton } from './styles';

const SearchField = ({ navigation }) => {
  const [searchText, setSearchText] = useState(null);
  const dispatch = useDispatch();

  const handleSearch = () => {
    console.log('Fui clicado');
    console.log(searchText);
    dispatch(searchDrinkRequest(searchText));
    navigation.navigate('DrinksList');
  };
  return (
    <Container>
      <SearchInput
        // eslint-disable-next-line no-shadow
        onChangeText={(searchText) => setSearchText(searchText)}
        placeholder={'Pesquisar'}
        placeholderTextColor={'#a9a9a9'}
        value={searchText}
      />
      <SearchButton activeOpacity={0.5} onPress={() => handleSearch()}>
        <SearchIcon source={require('../../assets/icon_search_write.png')} />
      </SearchButton>
    </Container>
  );
};

export default SearchField;
