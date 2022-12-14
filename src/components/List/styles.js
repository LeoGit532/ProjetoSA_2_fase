import styled from 'styled-components/native';

export const ContainerItem = styled.View`
  height: 110px;
  widht: 90px;
  background-color: red;
  margin: 5px;
  border-radius: 8px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'stretch'
})`
  height: 100%;
  width: 100%;
  border-radius: 8px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  font-wight: bold;
`