import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;

  flex: 1;
`;

export const Card = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  align-self: center;
  margin-top: 8px;
  background-color: #fcf0da;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-color: #f7f7f7;
  border-radius: 10px;
`;

export const CategoryTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: #333;
`;
