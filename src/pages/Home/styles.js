import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


const { width, height} = Dimensions.get('screen');

export const Container = styled.View`
 background-color: #000;
 flex: 1;
`;

export const ContainerCaroucel = styled.View`

  height: 50%;
`;

export const ContainerList = styled.View`
margin-left: 10px;
margin-top: 10px;
`


