import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


const { width, height} = Dimensions.get('screen');

export const Container = styled.ScrollView`
 background-color: #000;
 flex: 1;
`;

export const ContainerCaroucel = styled.View`
  height: ${`${height/1}px`};
  background-color: black;
`;

export const ContainerList = styled.View`
margin-left: 10px;
margin-top: 10px;
`
export const Text = styled.Text`
color: white;
background-color: darkred;
`


