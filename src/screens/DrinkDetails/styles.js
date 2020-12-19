import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 8px;
  background-color: #ddd;
  padding-top: 15px;
`;

export const PhotoDrink = styled.Image`
  width: 120px;
  height: 120px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #666;
`;
export const Description = styled.Text`
  margin-top: 10px;
  color: #666;
  font-size: 16px;
  text-align: justify;
`;

export const Ingredient = styled.Text`
  margin-top: 15px;
  color: #666;
  font-size: 16px;
  text-align: justify;
`;
