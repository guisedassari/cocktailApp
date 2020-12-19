import React, { useState } from 'react';
import { View } from 'react-native';

import { Container, SearchInput, SearchIcon, SearchButton } from './styles';

const SearchField = () => {
  const [searchText, setSearchText] = useState(null);

  const handleSearch = () => {
    console.log('Fui clicado');
    console.log(searchText);
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
