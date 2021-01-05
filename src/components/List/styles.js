import styled from 'styled-components/native';
export const Item = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  flex-direction: row;
  margin-bottom: 4px;
  align-items: center;
  background-color: #fcf0da;
`;

export const PhotoDrink = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 15px;
  margin-left: 15px;
  border-radius: 50px;
`;

export const DrinkName = styled.Text`
  font-size: 16px;
  color: #666;
`;
