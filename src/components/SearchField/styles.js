import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput`
  width: 75%;
  height: 55px;
  border: 1px;
  border-color: #ddd;
  background-color: #fcf0da;
  padding-left: 15px;
  font-size: 16px;
`;

export const SearchIcon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 55px;
  border: 1px;
  border-color: #ecae13;
  justify-content: center;
  align-items: center;
  background-color: #ecae13;
`;
