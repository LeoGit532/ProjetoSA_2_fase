import styled from 'styled-components/native';
import  Entypo from '@expo/vector-icons/Entypo';
import { Dimensions } from 'react-native';

const { width, height} = Dimensions.get('screen');

export const Image = styled.Image.attrs({
    resizeMode: "stretch"
})`
width: 80%
height: 100%
margin-left: 40px;

`;

export const Icon = styled(Entypo)`
 
`;

export const ContainerButtons = styled.View`
  position: absolute;
  bottom: 0px;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center
`;

export const Buttonwatch = styled.TouchableOpacity`
background-color: white;
border-radius: 4px;
flex-direction: row;
align-items: center;
padding: 10px;
`;


export const Text = styled.Text`

`;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
}
)`
  height: 100%;
  width: ${`${width}px`};
`

