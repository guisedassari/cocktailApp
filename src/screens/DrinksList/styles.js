import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 5px;
`;
export const List = styled.TouchableOpacity`
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
  border-color: '#fff';
  border: 1px;
  border-radius: 50px;
`;

export const DrinkName = styled.Text`
  font-size: 16;
  color: #666;
`;
